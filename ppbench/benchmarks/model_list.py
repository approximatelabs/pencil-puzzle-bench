"""
Model factory for pydantic-ai models.

Parses model strings like "openai/gpt-4o", "anthropic/claude-sonnet-4-6",
"openrouter/deepseek/deepseek-v3.2", etc. and builds the appropriate
pydantic-ai model object on demand.

Supports provider/model@variant syntax:
    openai/gpt-5.2          -> OpenAI Chat Completions
    openai/gpt-5.2@medium   -> OpenAI Responses API with reasoning_effort=medium
    anthropic/claude-sonnet-4-6@thinking  -> Anthropic with extended thinking
    openrouter/qwen/qwen3-coder           -> OpenRouter via OpenAI-compatible API
    xai/grok-4-1-fast       -> xAI via OpenAI-compatible API
    google/gemini-3-pro     -> Google Gemini API
    local/my-model           -> Local OpenAI-compatible server (e.g., LM Studio, ollama)
"""

import os
from typing import Any

from pydantic_ai.settings import ModelSettings

GLOBAL_TIMEOUT = 12 * 60 * 60  # 12 hours

# Provider base URLs for OpenAI-compatible APIs
OPENAI_COMPATIBLE_PROVIDERS = {
    "xai": "https://api.x.ai/v1",
    "openrouter": "https://openrouter.ai/api/v1",
}

# API key environment variable names per provider
API_KEY_ENV = {
    "openai": "OPENAI_API_KEY",
    "anthropic": "ANTHROPIC_API_KEY",
    "google": "GOOGLE_API_KEY",
    "xai": "XAI_API_KEY",
    "openrouter": "OPENROUTER_API_KEY",
}

# Models that don't support tool calling (strategies that require tools will skip these)
NO_TOOLS = {
    "openrouter/openai/gpt-oss-120b",
    "openrouter/deepseek/deepseek-v3.2-speciale",
    "openrouter/qwen/qwen3-vl-235b-a22b-thinking",
}


def get_model(name: str) -> Any:
    """
    Build a pydantic-ai model from a string identifier.

    Examples:
        get_model("openai/gpt-4o")
        get_model("openai/gpt-5.2@medium")
        get_model("anthropic/claude-sonnet-4-6")
        get_model("anthropic/claude-opus-4-6@thinking")
        get_model("google/gemini-3-pro")
        get_model("xai/grok-4-1-fast")
        get_model("openrouter/qwen/qwen3-coder")
        get_model("local/qwen3.5-35b")  # local server at LOCAL_API_BASE (default: http://127.0.0.1:1234/v1)
    """
    # Parse provider/model@variant
    variant = None
    if "@" in name:
        base, variant = name.rsplit("@", 1)
    else:
        base = name

    parts = base.split("/", 1)
    if len(parts) != 2:
        raise ValueError(
            f"Invalid model name: {name}. Expected format: provider/model-name "
            f"(e.g., 'openai/gpt-4o', 'anthropic/claude-sonnet-4-6')"
        )

    provider = parts[0]

    if provider == "openai":
        return _build_openai(parts[1], variant)
    elif provider == "anthropic":
        return _build_anthropic(parts[1], variant)
    elif provider == "google":
        return _build_google(parts[1], variant)
    elif provider == "local":
        return _build_local(parts[1], variant)
    elif provider in OPENAI_COMPATIBLE_PROVIDERS:
        # xai, openrouter — use OpenAI-compatible API
        return _build_openai_compatible(provider, parts[1], variant)
    else:
        raise ValueError(
            f"Unknown provider: {provider}. "
            f"Supported: openai, anthropic, google, xai, openrouter, local"
        )


def supports_tools(name: str) -> bool:
    """Check if a model supports tool calling."""
    return name not in NO_TOOLS


def _build_openai(model_name: str, variant: str | None):
    """Build an OpenAI model. Uses Responses API if variant is set (for reasoning_effort)."""
    from pydantic_ai.providers.openai import AsyncOpenAI, OpenAIProvider

    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key:
        raise EnvironmentError("OPENAI_API_KEY environment variable is required for OpenAI models")
    client = AsyncOpenAI(api_key=api_key, max_retries=5)
    openai_provider = OpenAIProvider(openai_client=client)

    if variant and variant in ("low", "medium", "high", "xhigh"):
        from pydantic_ai.models.openai import OpenAIResponsesModel, OpenAIResponsesModelSettings
        return OpenAIResponsesModel(
            model_name,
            provider=openai_provider,
            settings=OpenAIResponsesModelSettings(
                openai_reasoning_effort=variant,
                openai_reasoning_summary="auto",
                timeout=GLOBAL_TIMEOUT,
            ),
        )
    else:
        from pydantic_ai.models.openai import OpenAIChatModel
        return OpenAIChatModel(
            model_name,
            provider=openai_provider,
            settings=ModelSettings(timeout=GLOBAL_TIMEOUT),
        )


def _build_anthropic(model_name: str, variant: str | None):
    """Build an Anthropic model."""
    from anthropic import AsyncAnthropic
    from pydantic_ai.models.anthropic import AnthropicModel, AnthropicModelSettings
    from pydantic_ai.providers.anthropic import AnthropicProvider

    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        raise EnvironmentError("ANTHROPIC_API_KEY environment variable is required for Anthropic models")
    client = AsyncAnthropic(api_key=api_key, max_retries=5)
    anthropic_provider = AnthropicProvider(anthropic_client=client)

    settings_kwargs = dict(
        anthropic_cache_messages=True,
        anthropic_cache_instructions=True,
        timeout=GLOBAL_TIMEOUT,
    )

    if variant == "thinking":
        settings_kwargs["anthropic_thinking"] = {"type": "enabled", "budget_tokens": 32000}
        # Only opus-4-6 supports 128K output; others max at 64K
        settings_kwargs["max_tokens"] = 128000 if "opus-4-6" in model_name else 64000
    elif variant == "1m":
        settings_kwargs["extra_headers"] = {"anthropic-beta": "context-1m-2025-08-07"}

    # Opus models get effort=high by default
    if "opus" in model_name:
        effort = variant if variant in ("low", "medium", "high", "max") else "high"
        settings_kwargs.setdefault("extra_body", {})
        settings_kwargs["extra_body"]["output_config"] = {"effort": effort}
        # Opus 4.5 requires beta header for effort
        if "opus-4-5" in model_name:
            settings_kwargs.setdefault("extra_headers", {})
            settings_kwargs["extra_headers"]["anthropic-beta"] = "effort-2025-11-24"

    return AnthropicModel(
        model_name,
        provider=anthropic_provider,
        settings=AnthropicModelSettings(**settings_kwargs),
    )


def _build_google(model_name: str, variant: str | None):
    """Build a Google Gemini model."""
    from pydantic_ai.models.google import GoogleModel
    from pydantic_ai.providers.google import GoogleProvider

    google_provider = GoogleProvider(
        vertexai=False, api_key=os.environ.get("GOOGLE_API_KEY")
    )

    # Gemini 3+ models need -preview suffix
    api_model = model_name
    if not model_name.endswith("-preview"):
        api_model = f"{model_name}-preview"

    settings_kwargs = dict(timeout=GLOBAL_TIMEOUT)

    if variant and variant in ("minimal", "low", "medium", "high"):
        settings_kwargs["extra_body"] = {
            "generationConfig": {"thinkingConfig": {"thinkingLevel": variant}}
        }

    return GoogleModel(
        api_model,
        provider=google_provider,
        settings=ModelSettings(**settings_kwargs),
    )


def _build_openai_compatible(provider: str, model_name: str, variant: str | None):
    """Build a model using an OpenAI-compatible API (xAI, OpenRouter, etc.)."""
    from pydantic_ai.models.openai import OpenAIChatModel
    from pydantic_ai.providers.openai import AsyncOpenAI, OpenAIProvider

    base_url = OPENAI_COMPATIBLE_PROVIDERS[provider]
    api_key_env = API_KEY_ENV.get(provider, f"{provider.upper()}_API_KEY")
    api_key = os.environ.get(api_key_env)
    if not api_key:
        raise EnvironmentError(f"{api_key_env} environment variable is required for {provider} models")

    client = AsyncOpenAI(
        base_url=base_url,
        api_key=api_key,
        max_retries=5,
    )

    extra_body = {}

    # OpenRouter-specific: enable reasoning for thinking/reasoning models
    if provider == "openrouter":
        # Only enable reasoning for models that support it
        thinking_keywords = ("thinking", "deepseek", "minimax", "glm", "qwen3-coder")
        if any(kw in model_name.lower() for kw in thinking_keywords):
            extra_body["reasoning"] = {"enabled": True}

    settings_kwargs = dict(timeout=GLOBAL_TIMEOUT)
    if extra_body:
        settings_kwargs["extra_body"] = extra_body

    return OpenAIChatModel(
        model_name=model_name,
        provider=OpenAIProvider(openai_client=client),
        settings=ModelSettings(**settings_kwargs),
    )


def _build_local(model_name: str, variant: str | None):
    """Build a model from a local OpenAI-compatible server (LM Studio, ollama, vLLM, etc.).

    Configure the base URL with LOCAL_API_BASE env var (default: http://127.0.0.1:1234/v1).
    API key is optional — set LOCAL_API_KEY if your server requires one.
    """
    from pydantic_ai.models.openai import OpenAIChatModel
    from pydantic_ai.providers.openai import AsyncOpenAI, OpenAIProvider

    base_url = os.environ.get("LOCAL_API_BASE", "http://127.0.0.1:1234/v1")
    api_key = os.environ.get("LOCAL_API_KEY", "not-needed")

    client = AsyncOpenAI(
        base_url=base_url,
        api_key=api_key,
        max_retries=3,
    )

    return OpenAIChatModel(
        model_name=model_name,
        provider=OpenAIProvider(openai_client=client),
        settings=ModelSettings(timeout=GLOBAL_TIMEOUT),
    )
