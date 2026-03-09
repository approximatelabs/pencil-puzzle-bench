/*!
 * @license
 *
 * pzpr.js vcac820e2
 *  https://github.com/sabo2/pzprv3
 *
 * This script includes candle.js, see below
 *  https://github.com/sabo2/candle
 *
 * Copyright 2009-2025 sabo2
 *
 * This script is released under the MIT license. Please see below.
 *  http://www.opensource.org/licenses/mit-license.php
 *
 * Date: 2025-12-08
 */
// intro.js

(function(){

// core.js v3.5.2

//----------------------------------------------------------------------------
// ★pzprオブジェクト
//---------------------------------------------------------------------------
/* extern */
var pzpr = {
	version: "cac820e2"
};

if (typeof module === "object" && module.exports) {
	module.exports = pzpr;
} else {
	this.pzpr = pzpr;
}

// candle-intro.js

(function(){


//---------------------------------------------------------------------------
// node.js環境向けの対策
//---------------------------------------------------------------------------
var document = this.document;

var module = {exports:{}}, exports = module.exports;

(function(module,exports){

/*! @license candle.js v0.8.2 (c) 2011-2017 sabo2, MIT license
 *   https://bitbucket.org/sabo2/candle */
var _doc="undefined"!=typeof document?document:void 0,_2PI=2*Math.PI,_color=[],_hex=function(){for(var a=[],b=256;b<512;b++)a[b-256]=b.toString(16).substr(1);return a}(),Candle={version:"0.8.2",env:{node:"object"==typeof module&&"object"==typeof exports&&"function"==typeof require,browser:"object"==typeof document&&"object"==typeof window&&"object"==typeof location},wrapper:{},addWrapper:function(a,b){var c,d=function(){this.initialize&&this.initialize.apply(this,arguments)};for(c in this.wrapperbase)d.prototype[c]=this.wrapperbase[c];for(c in b)d.prototype[c]=b[c];this.wrapper[a]=d.prototype.constructor=d,this.addType(a)},_order:[],enable:{},addType:function(a){this._order.push(a),this.enable[a]=!0,this.current||(this.current=a)},TypeList:function(a){for(var b=0;b<Candle._order.length;b++)this[Candle._order[b]]=Candle._order[b]===a},current:"",select:function(a){return!!this.enable[a]&&(this.current=a,!0)},ME:null,initME:function(){var a=_doc.createElement("div");a.style.display="inline",a.style.position="absolute",a.style.top="0px",a.style.left="-9000px",a.innerHTML="",_doc.body.appendChild(a),void 0!==a.offsetHeight?this.ME=a:_doc.body.removeChild(a)},getoffsetHeight:function(a,b){var c;if(b.match(/(.+\s)?([0-9]+)px (.+)$/))c=+RegExp.$2;else if(this.ME){var d=this.ME;d.style.font=b,d.style.lineHeight="100%",d.innerHTML=a,c=d.offsetHeight}return c},color:_color,parse:function(a){if(!_color[a])if("rgb("===a.substr(0,4)){var b=a.match(/\d+/g);_color[a]=["#",_hex[b[0]],_hex[b[1]],_hex[b[2]]].join("")}else _color[a]=a;return _color[a]},getRectSize:function(a){return{width:a.offsetWidth||a.clientWidth||0,height:a.offsetHeight||a.clientHeight||0}},_counter:-1,getcanvasid:function(){return this._counter++,"_candle_"+this._counter},start:function(a,b,c){this.ME||"undefined"==typeof window||this.initME();var d;if(a.getContext)d=a.getContext("2d");else{var e=b;if(this.enable[e]||(e=this.current),!e||!this.enable[e])throw"No canvas environment is installed";d=new this.wrapper[e](a)}c&&c(d)}};"object"==typeof module&&"object"==typeof exports?module.exports=Candle:this.Candle=Candle,function(){function a(){if(this.parentNode){var a=this.parentNode._children,b=a.indexOf(this);return b>=0?a[b+1]:null}}function b(a){a.parentNode&&a.parentNode.removeChild(a),this._children.push(a),a.parentNode=this}function c(a){var b=this._children.indexOf(a);return b>=0&&(this._children.splice(b,1),a.parentNode=null),a}function d(a,b){a.parentNode&&a.parentNode.removeChild(a);var c=-1;b&&(c=this._children.indexOf(b)),c===-1?this.appendChild(a):this._children.splice(c,0,a)}function e(a,b){a=a.replace(/\*/g,"[^/]+"),a=a.replace(/([\w#]+|\*)/g,"[^/]*$1[^/]*"),a=a.replace(/\s+/g,"/([^/]+/)?"),a=new RegExp(a+"[^/]*$");for(var c=this.firstChild?[this.firstChild]:[],d=[];c.length>0;){var e=c.pop();if(h(e,this).match(a)&&(d.push(e),b))break;e.nextSibling&&c.push(e.nextSibling),e.childNodes.length>0&&c.push(e.firstChild)}return d}function f(a){return e.call(this,a,!1)}function g(a){return e.call(this,a,!0)[0]||null}function h(a,b){for(var c="";a&&a!==b;){var d="";a.createElement||(d=a.tagName+(a._attr.id?"#"+a._attr.id:"")),c=d+(c?"/"+c:""),a=a.parentNode}return c}function i(){return this._children.reduce(function(a,b,c,d){return a+b.outerHTML},"")}function j(){var a=this.tagName,b="",c="";for(var d in this._attr)b+=" "+d+'="'+this._attr[d]+'"';for(var e in this.style)c+=e+":"+this.style[e]+";";return c&&(b+=' style="'+c+'"'),0===this._children.length?"<"+a+b+"/>":"<"+a+b+">"+this.innerHTML+"</"+a+">"}function k(a,b){for(;;){var c=b.match(/^\s*([^:]+?):([^;]+?);?/);if(!c)break;a.style[c[1]]=c[2],b=RegExp["$'"]}}function l(a,b){for(;;){var c=b.match(/^\s*([\w\-\:]+)(\=)?(?:['"](.+?)['"]|([^\s]+))?\s*/);if(!c)break;var d=c[1],e=c[3]||c[4]||"";b=RegExp["$'"],d&&("="===c[2]?"style"!==d?a.setAttribute(d,e):a.style=k(a,e):a.setAttribute(d,!0))}}function m(a,b){var c=[a];return b.split(/(<.+?>)/g).forEach(function(a){var b=c[c.length-1],d=null;if(!a.match(/^<\?xml/))if(a.match(/^<\w/)){var e=a.match(/<(\w+)\s*(.*)\/?>/);d=new n(e[1]),l(d,e[2]),b.appendChild(d),a.match(/\/>$/)||c.push(d)}else if(a.match(/^<\//))c.pop();else{if(a.match(/^[\s\t\r\n]*$/))return;b.appendChild(new o(a))}}),a}var n=function(a){this.tagName=a,this._attr={},this.style={},this._children=[]};n.prototype={tagName:"",style:null,_attr:null,_children:null,parentNode:null,nodeType:1,get nodeName(){return this.tagName},get firstChild(){return this._children[0]},get lastChild(){return this._children[this._children.length-1]},get childNodes(){return this._children},get nextSibling(){return a.call(this)},appendChild:b,removeChild:c,insertBefore:d,setAttribute:function(a,b){this._attr[a]=b},setAttributeNS:function(a,b,c){this._attr[b]=c},getAttribute:function(a){return a in this._attr?this._attr[a]:null},getAttributeNS:function(a,b){return b in this._attr?this._attr[b]:null},removeAttribute:function(a){delete this._attr[a]},get id(){return this._attr.id||""},get innerHTML(){return i.call(this)},get outerHTML(){return j.call(this)},get textContent(){return this.innerHTML.replace(/<.+?>/g,"")},set textContent(a){this._children.forEach(function(a){this.removeChild(a)}.bind(this)),this.appendChild(new o(a))},querySelector:g,querySelectorAll:f};var o=function(a){this.data=a};o.prototype={_attr:{},parentNode:null,nodeType:3,nodeName:"#text",data:"",firstChild:null,chilsNodes:[],get nextSibling(){return a.call(this)},get outerHTML(){return this.data}};var p=Candle.MockDocument=function(){this._children=[]};p.prototype={_children:null,nodeType:9,nodeName:"#document",createElement:function(a){return new n(a)},createElementNS:function(a,b){return new n(b)},createTextNode:function(a){return new o(a)},get firstChild(){return this._children[0]},get lastChild(){return this._children[this._children.length-1]},get childNodes(){return this._children},appendChild:b,removeChild:c,insertBefore:d,get innerHTML(){return i.call(this)},get outerHTML(){return i.call(this)},querySelector:g,querySelectorAll:f,getElementById:function(a){return this.querySelector("#"+a)}};var q=Candle.MockXMLSerializer=function(){};q.prototype.serializeToString=function(a){return a.outerHTML};var r=Candle.MockDOMParser=function(){};r.prototype.parseFromString=function(a,b){return m(new p,a)},_doc||(_doc=new p),Candle.document=_doc,Candle.XMLSerializer=q,Candle.DOMParser=r}(),Candle.wrapperbase={initialize:function(a){this.fillStyle="black",this.strokeStyle="black",this.lineWidth=1,this.font="14px system",this.textAlign="center",this.textBaseline="middle",this.canvas=a,this.canvasid=Candle.getcanvasid(),this.child=null,this.enableTextLengthWA=!1,this.initElement(),this.initFunction(),this.initLayer();var b=this;this.canvas.getContext=function(a){return b}},rectcenter:function(a,b,c,d){this.rect(a-c,b-d,2*c,2*d)},fillRectCenter:function(a,b,c,d){this.fillRect(a-c,b-d,2*c,2*d)},strokeRectCenter:function(a,b,c,d){this.strokeRect(a-c,b-d,2*c,2*d)},shapeRectCenter:function(a,b,c,d){this.shapeRect(a-c,b-d,2*c,2*d)},vhide:function(){}},function(){function a(a){return _doc.createElementNS(d,a)}function b(){var a="undefined"!=typeof navigator?navigator.userAgent||"":"";c=a.match(/Chrome/)?{"candle-top":-.72,top:-.95,hanging:-.72,middle:-.35,alphabetic:0,bottom:.25}:a.match(/AppleWebKit/)?{"candle-top":-.7,top:-.9,hanging:-.9,middle:-.35,alphabetic:0,bottom:.25}:a.match(/Trident/)?{"candle-top":-.74,top:-1.02,hanging:-1.02,middle:-.32,alphabetic:0,bottom:.45}:a.match(/Win/)?{"candle-top":-.7,top:-.85,hanging:-.85,middle:-.34,alphabetic:0,bottom:.15}:{"candle-top":-.76,top:-.9,hanging:-.9,middle:-.38,alphabetic:0,bottom:.08}}if(void 0!==_doc&&_doc.createElementNS&&("object"!=typeof window||!window.opera)){var c,d=Candle.SVGNS="http://www.w3.org/2000/svg",e=Candle.XLINKNS="http://www.w3.org/1999/xlink",f=function(a){return a.match(/Trident\//)||a.match(/Safari\//)&&a.match(/Edge\//)}(Candle.env.browser&&navigator.userAgent||""),g={left:"start",center:"middle",right:"end"};Candle.addWrapper("svg",{initialize:function(a){this.use=new Candle.TypeList("svg"),c||b(),this.vid="",this.elements={},this._textcache={},this.target=null,this.layers={},this.cpath=[],this.lastpath="",this.freezepath=!1,Candle.wrapperbase.initialize.call(this,a),this.enableTextLengthWA=f},initElement:function(){Candle.env.browser&&(this.canvas.style.overflow="hidden");var a=Candle.getRectSize(this.canvas),b=this.child=_doc.createElementNS(d,"svg");b.setAttribute("xmlns",d),b.setAttribute("xmlns:xlink",e),b.setAttribute("font-size","10px"),b.setAttribute("font-family","sans-serif"),b.setAttribute("width",a.width),b.setAttribute("height",a.height),b.setAttribute("viewBox",[0,0,a.width,a.height].join(" ")),this.canvas.appendChild&&this.canvas.appendChild(b)},initFunction:function(){function a(a){return Candle.env.browser?window.btoa(a):Buffer.isBuffer(a)?a.toString("base64"):new Buffer(a.toString(),"binary").toString("base64")}function b(a){return(a.outerHTML||(new Candle.XMLSerializer).serializeToString(a)).replace(/^<\?xml.+?\?>[\r\n]*/,"")}var c='<?xml version="1.0" encoding="UTF-8"?>\n',d=this.child;this.canvas.toDataURL=function(c,e){return"data:image/svg+xml;base64,"+a(b(d))},this.canvas.toBlob=function(a,e,f){a(new Blob([c+b(d)],{type:"image/svg+xml"}))},this.canvas.toBuffer=function(a,e){return c+b(d)}},initLayer:function(){this.setLayer();var a=Candle.getRectSize(this.canvas);this.rect(0,0,a.width,a.height),this.addVectorElement(!1,!1)},clear:function(){for(var a=this.child,b=a.firstChild;b;)a.removeChild(b),b=a.firstChild;this.vid="",this.elements={},this.layers={},this.target=this.child,this.setLayer(),this._textcache={}},setLayer:function(b,c){if(c=c||{},this.vid="",b){var d=this.layers[b];d||(d=this.layers[b]=a("g"),this.child.appendChild(d)),this.target=d}else this.target=this.child;c.rendering&&this.setRendering(c.rendering),this.freezepath=!!c&&c.freeze},setRendering:function(a){this.target.setAttribute("shape-rendering",a)},changeSize:function(a,b){Candle.env.browser&&(this.canvas.style.width=a+"px",this.canvas.style.height=b+"px");var c=this.child;c.setAttribute("width",a),c.setAttribute("height",b);var d=c.getAttribute("viewBox").split(/ /);c.setAttribute("viewBox",[d[0],d[1],a,b].join(" "))},translate:function(a,b){var c=this.child.getAttribute("viewBox").split(/ /);c[0]=-a,c[1]=-b,this.child.setAttribute("viewBox",c.join(" "))},beginPath:function(){this.cpath=[],this.lastpath=""},closePath:function(){this.cpath.push("z"),this.lastpath="z"},moveTo:function(a,b){this.cpath.push("M",a,b),this.lastpath="M"},lineTo:function(a,b){"L"!==this.lastpath&&this.cpath.push("L"),this.cpath.push(a,b),this.lastpath="L"},rect:function(a,b,c,d){this.cpath.push("M",a,b,"L",a+c,b,a+c,b+d,a,b+d,"z"),this.lastpath="z"},arc:function(a,b,c,d,e,f){var g,h,i,j;e-d>=_2PI?(g=a+c,h=b,i=a+c,j=b):(g=a+c*Math.cos(d),h=b+c*Math.sin(d),i=a+c*Math.cos(e),j=b+c*Math.sin(e)),e-d>=_2PI&&(h+=.125);var k=d>e!=Math.abs(e-d)>Math.PI,l=f^k?1:0,m=0===l^k?1:0;this.cpath.push("M",g,h,"A",c,c,0,l,m,i,j),this.lastpath="A"},fill:function(){this.addVectorElement(!0,!1)},stroke:function(){this.addVectorElement(!1,!0)},shape:function(){this.addVectorElement(!0,!0)},fillRect:function(a,b,c,d){var e=this.cpath;this.cpath=[],this.rect(a,b,c,d),this.addVectorElement(!0,!1),this.cpath=e},strokeRect:function(a,b,c,d){var e=this.cpath;this.cpath=[],this.rect(a,b,c,d),this.addVectorElement(!1,!0),this.cpath=e},shapeRect:function(a,b,c,d){var e=this.cpath;this.cpath=[],this.rect(a,b,c,d),this.addVectorElement(!0,!0),this.cpath=e},setLinePath:function(){for(var a=arguments,b=a.length,c=b-(1|b?1:2),d=[],e=0;e<c;e+=2)d[e>>1]=[a[e],a[e+1]];this.beginPath(),this.setLinePath_com.call(this,d),a[b-1]&&this.cpath.push("z")},setOffsetLinePath:function(){for(var a=arguments,b=a.length,c=b-(1|b?1:2),d=[],e=0;e<c-2;e+=2)d[e>>1]=[a[e+2]+a[0],a[e+3]+a[1]];this.beginPath(),this.setLinePath_com.call(this,d),a[b-1]&&this.cpath.push("z")},setLinePath_com:function(a){for(var b=0,c=a.length;b<c;b++)this.cpath.push(0===b?"M":"L"),this.cpath.push(a[b][0],a[b][1])},strokeLine:function(a,b,c,d){var e=this.cpath;this.cpath=["M",a,b,"L",c,d],this.addVectorElement(!1,!0),this.cpath=e},strokeDashedLine:function(a,b,c,d,e){var f=this.cpath;this.cpath=["M",a,b,"L",c,d],this.addVectorElement(!1,!0).setAttribute("stroke-dasharray",e.join(" ")),this.cpath=f},strokeCross:function(a,b,c){var d=this.cpath;this.cpath=["M",a-c,b-c,"L",a+c,b+c,"M",a-c,b+c,"L",a+c,b-c],this.addVectorElement(!1,!0),this.cpath=d},fillCircle:function(a,b,c){var d=this.cpath;this.cpath=[],this.arc(a,b,c,0,_2PI,!1),this.cpath.push("z"),this.addVectorElement(!0,!1),this.cpath=d},strokeCircle:function(a,b,c){var d=this.cpath;this.cpath=[],this.arc(a,b,c,0,_2PI,!1),this.cpath.push("z"),this.addVectorElement(!1,!0),this.cpath=d},shapeCircle:function(a,b,c){var d=this.cpath;this.cpath=[],this.arc(a,b,c,0,_2PI,!1),this.cpath.push("z"),this.addVectorElement(!0,!0),this.cpath=d},getDefsElement:function(){var a=this.child.querySelector("defs");return a||(a=_doc.createElementNS(d,"defs"),this.child.insertBefore(a,this.child.firstChild||null)),a},getImageElement:function(b){for(var c=this.getDefsElement(),d=null,f=c.querySelectorAll("image"),g=0;g<f.length;g++)if(f[g].getAttributeNS(e,"href")===b.src){d=f[g];break}return d||(d=a("image"),d.setAttribute("id",(d.ownerDocument?this.canvasid+"_":"")+"img"+f.length),d.setAttribute("width",b.width),d.setAttribute("height",b.height),d.setAttributeNS(e,"xlink:href",b.src),c.appendChild(d)),d},getImageSymbol:function(a,b,c,f,g){for(var h=this.getDefsElement(),i=[b,c,f,g].join(" "),j=null,k=h.querySelectorAll("symbol"),l=0;l<k.length;l++)if(k[l].getAttribute("viewBox")===i){j=k[l];break}if(!j){j=_doc.createElementNS(d,"symbol"),j.setAttribute("id",(j.ownerDocument?this.canvasid+"_":"")+"symimg"+k.length),j.setAttribute("viewBox",i);var m=_doc.createElementNS(d,"use");m.setAttributeNS(e,"xlink:href","#"+this.getImageElement(a).getAttribute("id")),j.appendChild(m),h.appendChild(j)}return j},fillText:function(a,b,c,d){var e=this.vid?this.elements[this.vid]:null;if(a&&this.fillStyle&&"none"!==this.fillStyle){var f=this.fillText_main(e,a,b,c,d||"");!e&&this.vid&&(this.elements[this.vid]=f)}else e&&this.hide(e);this.vid=""},fillText_main:function(b,d,e,h,i){var j=!b,k=this.vid?this._textcache[this.vid]||{}:{};if(j?b=a("text"):this.show(b),b.getAttribute("fill")!==this.fillStyle&&b.setAttribute("fill",this.fillStyle),k.x!==e||k.y!==h||k.ml!==i||k.ta!==this.textAlign||k.tb!==this.textBaseline||k.font!==this.font){var l=h-Candle.getoffsetHeight(d,this.font)*c[this.textBaseline.toLowerCase()],m=g[this.textAlign.toLowerCase()];b.getAttribute("x")!==e&&b.setAttribute("x",e),b.getAttribute("y")!==l&&b.setAttribute("y",l),b.getAttribute("text-anchor")!==m&&b.setAttribute("text-anchor",m),(b.getAttribute("textLength")||"")!==i&&(i?(b.setAttribute("textLength",i),b.setAttribute("lengthAdjust","spacingAndGlyphs")):(b.removeAttribute("textLength"),b.removeAttribute("lengthAdjust"))),k.x=e,k.y=h,k.ml=i,k.ta=this.textAlign,k.tb=this.textBaseline}if(k.font!==this.font){if(this.font.match(/(.+\s)?([0-9]+)px (.+)$/)){var n=RegExp.$1,o=RegExp.$2,p=RegExp.$3;b.setAttribute("font-size",o),p.match(/^sans\-serif$/i)?b.removeAttribute("font-family"):b.setAttribute("font-family",p),n.match(/(italic|oblique)/)?b.setAttribute("font-style",RegExp.$1):b.removeAttribute("font-style"),n.match(/(bold|bolder|lighter|[1-9]00)/)?b.setAttribute("font-weight",RegExp.$1):b.removeAttribute("font-weight")}else b.setAttribute("font",this.font);k.font=this.font}if(b.textContent!==d&&(b.textContent=d),this.vid&&(this._textcache[this.vid]=k),j&&this.target.appendChild(b),f&&this.enableTextLengthWA&&("center"===k.ta||"right"===k.ta)&&i){b.removeAttribute("textLength");var q=b.getBoundingClientRect();b.setAttribute("x",k.x+(q.width-i)/("center"===k.ta?2:1)),b.setAttribute("textLength",i)}return b},drawImage:function(a,b,c,d,e,f,g,h,i){var j=this.vid?this.elements[this.vid]:null;if(a){void 0===d&&(d=a.width,e=a.height),void 0===f&&(f=b,b=0,g=c,c=0,h=d,i=e);var k=this.drawImage_main(j,a,b,c,d,e,f,g,h,i);!j&&this.vid&&(this.elements[this.vid]=k)}else j&&this.hide(j);this.vid=""},drawImage_main:function(b,c,d,f,g,h,i,j,k,l){var m=!b;m?b=a("use"):this.show(b);var n=this.getImageSymbol(c,d,f,g,h).getAttribute("id");return b.getAttribute("x")!==i&&b.setAttribute("x",i),b.getAttribute("y")!==j&&b.setAttribute("y",j),b.getAttribute("width")!==k&&b.setAttribute("width",k),b.getAttribute("height")!==l&&b.setAttribute("height",l),b.getAttributeNS(e,"xlink:href")!=="#"+n&&b.setAttributeNS(e,"xlink:href","#"+n),m&&this.target.appendChild(b),b},addVectorElement:function(a,b){a=a&&!!this.fillStyle&&"none"!==this.fillStyle,b=b&&!!this.strokeStyle&&"none"!==this.strokeStyle;var c=this.vid?this.elements[this.vid]:null,d=null;return a||b?(d=this.addVectorElement_main(c,a,b),!c&&this.vid&&(this.elements[this.vid]=d)):c&&this.hide(c),this.vid="",d},addVectorElement_main:function(b,c,d){var e=!b;if(e?(b=a("path"),b.setAttribute("fill","none"),b.setAttribute("stroke","none")):this.show(b),!this.freezepath||e){var f=this.cpath.join(" "),g=d?this.lineWidth:null;b.getAttribute("d")!==f&&b.setAttribute("d",f),b.getAttribute("stroke-width")!==g&&b.setAttribute("stroke-width",g)}var h=c?this.fillStyle:"none",i=d?this.strokeStyle:"none";return b.getAttribute("fill")!==h&&b.setAttribute("fill",h),b.getAttribute("stroke")!==i&&b.setAttribute("stroke",i),e&&this.target.appendChild(b),b},vhide:function(a){var b=this.elements[this.vid];b&&this.hide(b)},show:function(a){a.removeAttribute("display")},hide:function(a){a.setAttribute("display","none")}})}}(),function(){function a(){var a="undefined"!=typeof navigator?navigator.userAgent||"":"";b=0,b=a.match(/Chrome/)?-.72:a.match(/AppleWebKit/)?-.7:a.match(/Trident/)?-.74:a.match(/Win/)?-.7:-.76}if(Candle.env.browser){if(!function(){var a=_doc.createElement("canvas");return!!a.getContext&&(!a.probablySupportsContext||a.probablySupportsContext("2d"))}())return}else try{Candle.Canvas=require("canvas")}catch(a){return}var b;Candle.addWrapper("canvas",{initialize:function(c){this.context=null,this.use=new Candle.TypeList("canvas"),this.currentLayerId="_empty",this.isedgearray={_empty:!1},this.isedge=!1,b||a(),this.x0=0,this.y0=0,Candle.wrapperbase.initialize.call(this,c)},setkey:function(a){return this},hidekey:function(a){return this},release:function(a){return this},initElement:function(){var a=this.child=Candle.env.browser?_doc.createElement("canvas"):new Candle.Canvas;Candle.env.browser&&(this.canvas.style.overflow="hidden");var b=Candle.getRectSize(this.canvas);a.width=b.width,a.height=b.height,Candle.env.browser&&(a.style.width=b.width+"px",a.style.height=b.height+"px",this.canvas.appendChild(a)),this.context=a.getContext("2d")},initFunction:function(){function a(a){return Candle.env.browser?window.atob(a):new Buffer(RegExp.$2,"base64").toString("binary")}var b=this.child;this.canvas.toDataURL=function(a,c){return b.toDataURL(a||void 0,c)},this.canvas.toBlob=function(c,d,e){if("function"==typeof b.toBlob)b.toBlob(c,d,e);else{b.toDataURL(d||void 0,e).match(/data:(.*);base64,(.*)/);for(var f=a(RegExp.$2),g=f.length,h=new Uint8Array(g),i=0;i<g;i++)h[i]=f.charCodeAt(i);c(new Blob([h.buffer],{type:RegExp.$1}))}},this.canvas.toBuffer=function(c,d){var e=b.toDataURL(c||void 0,d).replace(/^data:image\/\w+?;base64,/,"");if(Candle.env.node)return new Buffer(e,"base64");var f;if("undefined"!=typeof Uint8Array){var g=a(e);f=new Uint8Array(g.length);for(var h=0;h<g.length;h++)f[h]=g.charCodeAt(h)}else f=a(e);return f}},initLayer:function(){this.setLayer()},clear:function(){if(this.setProperties(!0,!0),this.context.setTransform(1,0,0,1,0,0),this.context.translate(this.x0,this.y0),Candle.env.browser){var a=Candle.getRectSize(this.canvas);this.context.clearRect(0,0,a.width,a.height)}},setLayer:function(a,b){var c=this.currentLayerId=a?a:"_empty";this.isedge=this.isedgearray[void 0!==this.isedgearray[c]?c:"_empty"],this.setEdgeStyle(),b=b||{},b.rendering&&this.setRendering(b.rendering)},setEdgeStyle:function(){if(Candle.env.browser){var a=this.canvas.style;"imageRendering"in a&&(a.imageRendering="",this.isedge&&(a.imageRendering="pixelated",a.imageRendering||(a.imageRendering="-webkit-optimize-contrast"),a.imageRendering||(a.imageRendering="-moz-crisp-edges"),a.imageRendering||(a.imageRendering="-o-crisp-edges")))}},setRendering:function(a){this.isedge=this.isedgearray[this.currentLayerId]="crispEdges"===a,this.setEdgeStyle()},changeSize:function(a,b){if(Candle.env.browser){var c=this.canvas;c.style.width=a+"px",c.style.height=b+"px"}var d=this.child;if(Candle.env.browser){var e=parseInt(d.style.left),f=parseInt(d.style.top);a+=e<0?-e:0,b+=f<0?-f:0,d.style.width=a+"px",d.style.height=b+"px"}d.width=a,d.height=b},translate:function(a,b){this.x0=a,this.y0=b,this.context.translate(a,b)},setProperties:function(a,b){a=a&&!!this.fillStyle&&"none"!==this.fillStyle,b=b&&!!this.strokeStyle&&"none"!==this.strokeStyle;var c=this.context;return a&&(c.fillStyle=this.fillStyle),b&&(c.strokeStyle=this.strokeStyle),c.lineWidth=this.lineWidth,c.font=this.font,c.textAlign=this.textAlign,c.textBaseline=this.textBaseline,a||b},beginPath:function(){this.context.beginPath()},closePath:function(){this.context.closePath()},moveTo:function(a,b){this.context.moveTo(a,b)},lineTo:function(a,b){this.context.lineTo(a,b)},rect:function(a,b,c,d){this.context.rect(a,b,c,d)},arc:function(a,b,c,d,e,f){this.context.arc(a,b,c,d,e,f)},fill:function(){this.setProperties(!0,!1)&&this.context.fill()},stroke:function(){this.setProperties(!1,!0)&&this.context.stroke()},shape:function(){if(this.setProperties(!0,!0)){var a=this.context;this.fillStyle&&"none"!==this.fillStyle&&a.fill(),this.strokeStyle&&"none"!==this.strokeStyle&&a.stroke()}},fillRect:function(a,b,c,d){this.setProperties(!0,!1)&&this.context.fillRect(a,b,c,d)},strokeRect:function(a,b,c,d){this.setProperties(!1,!0)&&this.context.strokeRect(a,b,c,d)},shapeRect:function(a,b,c,d){if(this.setProperties(!0,!0)){var e=this.context;this.fillStyle&&"none"!==this.fillStyle&&e.fillRect(a,b,c,d),this.strokeStyle&&"none"!==this.strokeStyle&&e.strokeRect(a,b,c,d)}},setLinePath:function(){for(var a=arguments,b=a.length,c=b-(1|b?1:2),d=[],e=0;e<c;e+=2)d[e>>1]=[a[e],a[e+1]];this.context.beginPath(),this.setLinePath_com.call(this,d),a[b-1]&&this.context.closePath()},setOffsetLinePath:function(){for(var a=arguments,b=a.length,c=b-(1|b?1:2)-2,d=[],e=0;e<c;e+=2)d[e>>1]=[a[e+2]+a[0],a[e+3]+a[1]];this.context.beginPath(),this.setLinePath_com.call(this,d),a[b-1]&&this.context.closePath()},setLinePath_com:function(a){for(var b=0,c=a.length;b<c;b++){var d=a[b];0===b?this.context.moveTo(d[0],d[1]):this.context.lineTo(d[0],d[1])}},strokeLine:function(a,b,c,d){if(this.setProperties(!1,!0)){var e=this.context;e.beginPath(),e.moveTo(a,b),e.lineTo(c,d),e.stroke()}},strokeDashedLine:function(a,b,c,d,e){this.strokeDashedLine=this.context.setLineDash?function(a,b,c,d,e){var f=this.context;this.setProperties(!1,!0)&&(f.beginPath(),f.moveTo(a,b),f.lineTo(c,d),f.setLineDash(e),f.stroke(),f.setLineDash([]))}:function(a,b,c,d,e){e.length%2===1&&(e=e.concat(e));var f=Math.sqrt((c-a)*(c-a)+(d-b)*(d-b)),g=0,h=0,i=null,j=null;if(a!==c&&(i=(d-b)/(c-a),j=i*i+1),this.setProperties(!1,!0)){var k=this.context;for(k.beginPath(),k.moveTo(a,b);g<f;){var l,m;if(null!==i){var n=Math.sqrt(g*g/j);l=a+n,m=b+i*n}else l=a,m=b+g;0===(1&h)?k.moveTo(l,m):k.lineTo(l,m),g+=e[h],h++,h>=e.length&&(h=0)}k.stroke()}},this.strokeDashedLine(a,b,c,d,e)},strokeCross:function(a,b,c){if(this.setProperties(!1,!0)){var d=this.context;d.beginPath(),d.moveTo(a-c,b-c),d.lineTo(a+c,b+c),d.moveTo(a-c,b+c),d.lineTo(a+c,b-c),d.stroke()}},fillCircle:function(a,b,c){if(this.setProperties(!0,!1)){var d=this.context;d.beginPath(),d.arc(a,b,c,0,_2PI,!1),d.fill()}},strokeCircle:function(a,b,c){if(this.setProperties(!1,!0)){var d=this.context;d.beginPath(),d.arc(a,b,c,0,_2PI,!1),d.stroke()}},shapeCircle:function(a,b,c){if(this.setProperties(!0,!0)){var d=this.context;d.beginPath(),d.arc(a,b,c,0,_2PI,!1),this.fillStyle&&"none"!==this.fillStyle&&d.fill(),this.strokeStyle&&"none"!==this.strokeStyle&&d.stroke()}},fillText:function(a,c,d,e){a&&this.setProperties(!0,!1)&&("candle-top"===this.textBaseline&&(d-=Candle.getoffsetHeight(a,this.font)*b,this.context.textBaseline="alphabetic"),e?this.context.fillText(a,c,d,e):this.context.fillText(a,c,d))},drawImage:function(){arguments[0]&&this.context.drawImage.apply(this.context,arguments)}})}();
// candle-outro.js

})(module,exports);

pzpr.Candle = module.exports;

})();

//---------------------------------------------------------------------------
// node.js環境向けの対策
//---------------------------------------------------------------------------
    document      = this.document      || pzpr.Candle.document;
var DOMParser     = this.DOMParser     || pzpr.Candle.DOMParser;
var XMLSerializer = this.XMLSerializer || pzpr.Candle.XMLSerializer;

// langs.js

pzpr.failcodes = {
	en: {"akariDup.lightup":"Akari is shined from another Akari.","anHatenaNe.crossstitch":"There are no crossings in the given direction.","anLineGt.castle":"The number of line segments is not correct.","anLineLt.castle":"The number of line segments is not correct.","anLineLt.disloop":"There is no line segment in the cell adjacent to the arrow.","anNoAdjBd.yajitatami":"There is no border in front of the arrowed number.","anNoArrow":"A number has no arrow.","anNoShade":"The cell next to the arrow is not shaded.","anNumberNe.crossstitch":"The number of crossings is not correct.","anNumberNe.hebi":"A clue points at the wrong number.","anShadeNe.lixloop":"A clue does not indicate the type of cell that is most common.","anShadeNe.outofsight":"An arrow points to a symbol with the same color.","anShadeNe.yajisoko":"The number of boxes is not correct.","anShadeNe":"The number of shaded cells is not correct.","anTatamiNe.yajitatami":"The number of tatamis are not correct.","anTurn.turnaround":"The number of turns is not correct.","anUnitNe.kuroclone":"The size of the pointed unit is not correct.","arAdjPair.yajirushi2":"Paired arrows are adjacent.","arAdjPair.toichika":"There are paired arrows in adjacent countries.","arAdjPair.toichika2":"There are paired numbers in adjacent countries.","arAgainstWind.nagare":"The direction of the arrow is against the wind.","arAlone.toichika":"There is no paired arrow in the direction of an arrow.","arAlone.toichika2":"A number can not see an identical number.","arBlkEdge.loute":"An arrow is not at the endpoint of an area.","arBlocked.toichika2":"Other numbers are between a pair of numbers.","arBlockLt2.evolmino":"The arrow passes through less than two blocks.","arCountGt.arrowflow":"A number has too many arrows pointing towards it.","arCountLt.arrowflow":"A number does not have enough arrows pointing towards it.","arDistance.distopia":"A number is not equal to the sum of the closest distances.","arDistance.toichika2":"A pair of numbers does not have the correct distance.","arDistanceGt.myopia":"There is a line closer to a clue in an unmarked direction.","arDistanceGt.pentopia":"There is a shaded cell closer to a clue in an unmarked direction.","arDistanceNe.myopia":"The lines pointed to by a clue are at different distances.","arDistanceNe.pentopia":"The shaded cells pointed to by a clue are at different distances.","arInvalid.evolmino":"The arrow is invalid.","arNoLine":"A line doesn't go through some arrows.","arNoLineSeen":"There is no line in the direction of an arrow.","arNoShade.distopia":"A number cannot see any shaded cells.","arNoShade.pentopia":"There is no shaded cell in the direction of an arrow.","arNotMax.makaro":"An arrow doesn't point out biggest number.","arNotPtCnr.loute":"An arrow doesn't point at the corner of an area.","arNotRelative.news":"A letter doesn't indicate its position relative to the other letter in the area.","asLblockNe.triplace":"The number of straight areas below or to the right is not correct.","asShadeNe.tilepaint":"The number of shaded cells underward or rightward is not correct.","baDir.lollipops":"A stick has the wrong orientation.","bankGt.battleship":"A ship appears too many times on the board.","bankGt.snakeegg":"A given size appears too many times on the board.","bankGt":"A piece appears too many times on the board.","bankInvalid.battleship":"The board contains an invalid ship.","bankInvalid.snakeegg":"The board contains an unshaded block of invalid size.","bankInvalid":"The board contains an invalid piece.","bankLt.battleship":"Some ships are not used on the board.","bankLt.snakeegg":"Some given sizes are not used on the board.","bankLt":"Some pieces are not used on the board.","bankNe.tachibk":"The left and right grids contain different pieces.","baParaGe3.juosan":"There are at least three vertical or horizontal bars in parallel.","baPlNum.tateyoko":"A line passes more than one number.","bdBranch.kramma":"There is a branch line.","bdBranchExBP.bdblock":"Lines are branched out of the point.","bdCountLt3BP.bdblock":"A point has two or less lines.","bdCross":"There is a crossing border line.","bdCrossBP.kramma":"There is a crossing line on the point.","bdCrossExBP.bdblock":"Lines are crossed out of the point.","bdCurveExBP.kramma":"A line curves out of the points.","bdDeadEnd":"There is a dead-end line.","bdDoorsGt.oneroom":"Two rooms have more than one door between them.","bdEqual.antmill":"A square clue does not overlap two cells of the same color.","bdIgnoreBP.bdblock":"A point has no line.","bdIgnoreBP.kramma":"A point has no line.","bdNotChassis.shwolf":"A line doesn't connect to the chassis.","bdPassStar.nuriuzu":"A star overlaps a shaded cell.","bdPassStar.tentaisho":"A line goes over a star.","bdPierceGt1.blindrush":"A network of walls is pierced more than once.","bdPierceLt1.blindrush":"A network of walls is not pierced by a line.","bdUnequal.antmill":"A cross clue does not overlap exactly 1 shaded cell.","bdUnused.fillomino":"A given border does not divide two regions.","bdUnused.kissing":"A bar is not adjacent to two different blocks.","bdUnused.lohkous":"There is an unused border.","bdUnused.mirrorbk":"A mirror does not divide two regions.","bdUnused.tren":"A border is not adjacent to a block.","bdUnusedCircle.wafusuma":"A circle does not divide two areas.","bdVoxasBlack":"Two areas separated by a black dot have the same size or the same orientation.","bdVoxasGray":"Two areas separated by a gray dot are identical, or have both a different size and different orientation.","bdVoxasWhite":"Two areas separated by a white dot are different.","bdwGroundFloor.bdwalk":"The line goes below the 1st floor.","bdwInvalidDown.bdwalk":"The line goes down at an upward elevator.","bdwInvalidUp.bdwalk":"The line goes up at a downward elevator.","bdwMismatch.bdwalk":"The line goes through different numbers without switching floors.","bdwSkipElevator.bdwalk":"The line doesn't change floors at an elevator.","bdwTopFloor.bdwalk":"The line goes above the top floor.","bkArafEqual.araf":"An area is equal to a number.","bkArafTooBig.araf":"An area is larger than both numbers.","bkArafTooSmall.araf":"An area is smaller than both numbers.","bkBothMarksPassed.dotchi2":"A line passes through both white and black pearls in the same region.","bkBothMarksPassed.moonsun":"A line passes both the marks of the moon and the sun.","bkCircleNe.familyphoto":"A number does not indicate the amount of circles in the area.","bkCircleNe.fracdiv":"A number does not indicate the ratio of circles and cells in the area.","bkClue.toichika2":"A number does not match the clue for the country.","bkDifferentLetters.nikoji":"Two areas with different letters have the same shape.","bkDifferentLines.pmemory":"Two regions of the same shape have different lines.","bkDifferentOrientation.nikoji":"Two areas with equal letters have different orientation.","bkDifferentPosition.nikoji":"Two areas with equal letters have the letter in different positions.","bkDifferentShape.dbchoco":"The two shapes inside a block are different.","bkDifferentShape.kuroclone":"Two units in an area have different shapes.","bkDifferentShape.nikoji":"Two areas with equal letters have different shapes.","bkDifferentShape.nuritwin":"The two blocks inside an area have different sizes.","bkDivide":"The unused cells are divided.","bkDoubleBn.yosenabe":"There is two or more numbers in a crock.","bkDupNum.hakoiri":"A box has duplicate shapes.","bkDupNum.hebi":"A snake has duplicate numbers.","bkDupNum.makaro":"A room has two or more same numbers.","bkDupNum.renban":"A room has two or more equal numbers.","bkDupNum.ripple":"A room has two or more same numbers.","bkDupNum.roma":"An area has duplicate arrows.","bkDupNum.sukoro":"A room has two or more same numbers.","bkDupNum.sukororoom":"A room has two or more same numbers.","bkDupNum.view":"A room has two or more same numbers.","bkDupNum":"There are equal numbers in a block.","bkHingeGt.hinge":"A block goes through multiple borders.","bkHingeLt.hinge":"A block does not go through any borders.","bkHingeMirror.hinge":"A block is not symmetric along the region border.","bkHingeSplit.hinge":"The region border which separates a block is not continuous.","bkLadderNe.ladders":"A number does not indicate the amount of ladders overlapping the region.","bkLenGt4.fillmat":"The width of the tatami is more than one, or the length is more than four.","bkLessThan2Num.araf":"An area has less than two numbers.","bkLiarNe1.usoone":"The number of liars in a room is not one.","bkLineGt.nagenawa":"The number of the cells that is passed any line in the room and the number written in the room is different.","bkLineGt1.balloon":"A balloon has more than one connected string.","bkLineLt.nagenawa":"The number of the cells that is passed any line in the room and the number written in the room is different.","bkLineLt1.balloon":"A balloon has no connected string.","bkLineNe.country":"The number of the cells that is passed any line in the country and the number written in the country is different.","bkLineNe.nothing":"A country isn't fully visited.","bkMajorBarGt.juosan":"The number of majority of vertical or horizontal bars is greater than the number of the area.","bkMajorBarLt.juosan":"The number of majority of vertical or horizontal bars is less than the number of the area.","bkMaxSizeNe.tilecity":"The number is not equal to the amount of connected tiles.","bkMirror.mirrorbk":"The two blocks divided by a mirror are not reflections of each other.","bkMissingNum":"A block doesn't contain every number.","bkMixed.sukoro":"A room includes both numbered and non-numbered cells.","bkMixed.sukororoom":"A room includes both numbered and non-numbered cells.","bkMixed.view":"A room includes both numbered and non-numbered cells.","bkMixed":"A tile includes both shaded and unshaded cells.","bkMixedNum.fillomino":"An area has two or more kinds of numbers.","bkMoreThan2Num.araf":"An area has more than two numbers.","bkMSGe2.nondango":"An area has two or more shaded circles.","bkMSPassedGt2.moonsun":"A line passes the marks of the moon for two rooms in a row.","bkMUPassedGt2.moonsun":"A line passes the marks of the sun for two rooms in a row.","bkNoChain.chainedb":"A block is not diagonally adjacent to another block.","bkNoChain.mrtile":"A block is not diagonally adjacent to another identical block.","bkNoColor.interbd":"A country has no color.","bkNoLevel.aquarium":"A region has different water surface levels.","bkNoLine.country":"A line doesn't pass a country.","bkNoLine.icebarn":"A icebarn is not gone through.","bkNoLine.moonsun":"A line doesn't pass a room.","bkNoLine.onsen":"A room remains blank.","bkNoLine.ovotovata":"A line doesn't pass a shaded country.","bkNoLineNe.mejilink":"The size of the tile is not equal to the total of length of lines that is remained dotted around the tile.","bkNoMarksPassed.dotchi2":"A line doesn't visit any pearls in a region.","bkNoMarksPassed.moonsun":"A line passes neither the marks of the moon nor the sun.","bkNoMatch.dotchi":"Circles in a region contain both curves and straight lines.","bkNoMS.nondango":"An area has no shaded circle.","bkNoNum.bonsan":"A room has no circle.","bkNoNum.fillmat":"A tatami has no numbers.","bkNoNum.hanare":"A room has no numbers.","bkNoNum.kaero":"An area has no letters.","bkNoNum.kramma":"An area has no marks.","bkNoNum.nanro":"There is an empty room.","bkNoNum.narrow":"A region has no symbols.","bkNoNum.nawabari":"A room has no numbers.","bkNoNum.nikoji":"An area has no letter.","bkNoNum.nurikabe":"An area of unshaded cells has no numbers.","bkNoNum.putteria":"A room has no numbers.","bkNoNum.shikaku":"An area has no numbers.","bkNoNum.shwolf":"An area has neither sheeps nor wolves.","bkNoNum.tatamibari":"A tatami has no marks.","bkNoNum.toichika":"A country has no arrow.","bkNoNum.yosenabe":"A crock has no circle.","bkNoNum":"A block has no number.","bkNoObj.kinkonkan":"A room has no mirrors.","bkNoSC.dosufuwa":"An area has no iron ball.","bkNoShade.shimaguni":"A marine area has no shaded cells.","bkNoShade":"A room has no shaded cell.","bkNoShade.fakearrow":"A room has no shaded arrow.","bkNoStar.tentaisho":"An area has no stars.","bkNotAllMSPassed.dotchi2":"A line doesn't pass all black pearls.","bkNotAllMSPassed.moonsun":"A line doesn't pass all of the marks of the moon.","bkNotAllMUPassed.dotchi2":"A line doesn't pass all white pearls.","bkNotAllMUPassed.moonsun":"A line doesn't pass all of the marks of the sun.","bkNotClosed.balloon":"A balloon is not enclosed by borders.","bkNotHRect.tatamibari":"A tatami is not a horizontally long rectangle.","bkNotLshape.loute":"An area is not L-shaped or its width is not 1.","bkNotLshape3.shikaku":"An area whose size is a multiple of three is not L-shaped.","bkNotPassTwice.doubleback":"A room isn't passed exactly twice.","bkNotRect.balloon":"A balloon is not a rectangle.","bkNotRect.scrin":"An area is not a rectangle.","bkNotRect.shikaku":"An area is not a rectangle.","bkNotRect.tatamibari":"A tatami is not rectangle.","bkNotRect.voxas":"An area is not a rectangle.","bkNotRect.zabajaba":"There is a block that's not a 1x3 or 2x2 rectangle.","bkNotRect":"There is a room whose shape is not a rectangle.","bkNotRect3.shikaku":"An area whose size is not a multiple of three is not a rectangle.","bkNotSeqNum.renban":"The numbers in the room are not consecutive.","bkNotSquare":"An area is not a square.","bkNotSquare.tatamibari":"A tatami is not a square.","bkNotSymmRoom.fillomino":"An area is not point symmetric.","bkNotSymRoom.ayeheya":"The room is not point symmetric.","bkNotSymShade.ayeheya":"Position of shaded cells in the room is not point symmetric.","bkNotSymSt.tentaisho":"An area is not point symmetric about the star.","bkNotVRect.tatamibari":"A tatami is not a vertically long rectangle.","bkNoUC.dosufuwa":"An area has no balloon.","bkNumDivisor.meidjuluk":"A number is not a factor of its room size.","bkNumGe2.compass":"There is an area with more than one clue.","bkNumGe2.fillmat":"A tatami has more than one number.","bkNumGe2.hanare":"A room has more than one number.","bkNumGe2.lohkous":"There is an area with more than one clue.","bkNumGe2.narrow":"A region has more than one symbol.","bkNumGe2.nawabari":"A room has more than one number.","bkNumGe2.nikoji":"An area has multiple letters.","bkNumGe2.nurikabe":"An area of unshaded cells has more than one number.","bkNumGe2.putteria":"A room has more than one number.","bkNumGe2.scrin":"An area has multiple clues.","bkNumGe2.shikaku":"An area has more than one number.","bkNumGe2.tatamibari":"A tatami has multiple marks.","bkNumGe2.toichika":"A country has more than one arrow.","bkNumGe2":"A block has multiple numbers.","bkNumGe3.news":"An area has more than two letters.","bkNumGt2.magnets":"A room has more than two poles.","bkNumGt2.sashikazune":"A block has more than two numbers.","bkNumGt3.hakoiri":"A box has more than three shapes.","bkNumLt2.magnets":"A room has half a magnet.","bkNumLt2.news":"An area has less than two letters.","bkNumLt3.hakoiri":"A box has less than three shapes.","bkNumUnshade.scrin":"A clue is not inside a rectangle.","bkObjGe2.kinkonkan":"A room has more than one mirror.","bkObjNotSym.bonsan":"Position of circles in the room is not point symmetric.","bkOddSize.kazunori":"The size of the room is not even.","bkOverlap.subomino":"A block fits entirely in an adjacent block.","bkOverNum":"A block contains too many numbers.","bkPassTwice.country":"A line passes a country twice or more.","bkPassTwice.moonsun":"A line passes a room twice or more.","bkPinNe.heyapin":"A number does not indicate the amount of pins overlapping the region.","bkPlColor.interbd":"A country has more than one color.","bkPlNum.kaero":"An area has more than one kind of letter.","bkPlNum.kramma":"An area has both white and black circles.","bkPlNum.shwolf":"An area has both sheeps and wolves.","bkPlNum":"A block has two or more kinds of number.","bkPlStar.tentaisho":"A block has two or more stars.","bkPluralShade.parquet":"A region has multiple shaded tiles.","bkRect":"A block is rectangle.","bkSameNumGt2.kazunori":"The room has three or more same numbers.","bkSameShape.narrow":"Two regions with the same symbol have the same shape.","bkSameTouch.zabajaba":"Two blocks of the same shape and orientation are adjacent.","bkSameTouch":"Two areas of the same shape and orientation are adjacent.","bkSCGe2.dosufuwa":"An area has two or more iron balls.","bkSepColor.interbd":"One kind of color is included in different countries.","bkSepNum.kaero":"Letters of one kind are placed in different areas.","bkSepNum":"One kind of number is included in different blocks.","bkShadeDistNe.mannequin":"The amount of empty cells between the two shaded cells is different from the number.","bkShadeDivide.invlitso":"Unshaded cells are divided in a room.","bkShadeDivide.shimaguni":"The shaded cells in a marine area are divided.","bkShadeDivide":"Shaded cells are divided in a room.","bkShadeGe2.fakearrow":"A room has more than one shaded arrow.","bkShadeGt2":"A room has three or more shaded cells.","bkShadeGt4.invlitso":"A room has three or less unshaded cells.","bkShadeGt4.lits":"A room has five or more shaded cells.","bkShadeLt2":"A room has only one shaded cell.","bkShadeLt4.invlitso":"A room has five or more unshaded cells.","bkShadeLt4.lits":"A room has three or less shaded cells.","bkShadeNe.chocona":"The number of shaded cells in the area and the number written in the area is different.","bkShadeNe.shimaguni":"The number of shaded cells is not equal to the number.","bkShadeNe":"The number of shaded cells in the room and the number written in the room is different.","bkSideNe.squarejam":"The side length of a room is not equal to a number inside of it.","bkSize1.archipelago":"There is an island not touching another island.","bkSize1.rectslider":"There is an isolated shaded cell.","bkSize1.yajitatami":"The length of the tatami is one.","bkSizeEq.fillmat":"The number is equal to the size of the tatami.","bkSizeEq.morningwalk":"A shaded visit and the following unshaded visit have the same length.","bkSizeGt.aquapelago":"A group of shaded cells is larger than the number.","bkSizeGt.dbchoco":"A number is smaller than the size of the shape.","bkSizeGt.fillomino":"A number is smaller than the size of the area.","bkSizeGt.icewalk":"A section of unshaded cells is longer than the number.","bkSizeGt.lightshadow":"A number is smaller than the size of the area.","bkSizeGt.martini":"A number is smaller than the amount of circles in the area.","bkSizeGt2.lollipops":"Lollipops are adjacent.","bkSizeGt2.waterwalk":"A line goes through 3 or more water cells.","bkSizeGt2":"The size of an area is larger than two.","bkSizeGt3":"The size of an area is larger than three.","bkSizeGt4":"The size of an area is larger than four.","bkSizeGt5":"The size of an area is larger than five.","bkSizeLt.aquapelago":"A group of shaded cells is smaller than the number.","bkSizeLt.dbchoco":"A number is bigger than the size of the shape.","bkSizeLt.fillomino":"A number is bigger than the size of the area.","bkSizeLt.icewalk":"A section of unshaded cells is shorter than the number.","bkSizeLt.lightshadow":"A number is bigger than the size of the area.","bkSizeLt.martini":"A number is bigger than the amount of circles in the area.","bkSizeLt2.lollipops":"There are incomplete lollipops.","bkSizeLt2":"The size of an area is smaller than two.","bkSizeLt3":"The size of an area is smaller than three.","bkSizeLt4":"The size of an area is smaller than four.","bkSizeLt5":"The size of an area is smaller than five.","bkSizeNe.balloon":"The size of the balloon is not equal to the number.","bkSizeNe.cbanana":"The number is not equal to the size of the area.","bkSizeNe.fillmat":"The number is different from the size of the tatami.","bkSizeNe.hanare":"The size of the room is not equal to the number.","bkSizeNe.nurikabe":"The number is not equal to the size of the area.","bkSizeNe.putteria":"The size of the room is not equal to the number.","bkSizeNe.scrin":"The size of the area is not equal to the number.","bkSizeNe.shikaku":"The size of the area is not equal to the number.","bkSizeNe.tateyoko":"The number is different from the length of the line.","bkSizeNe.tontti":"The amount of empty cells is not equal to the number.","bkSizeNe.yajitatami":"The size of tatami and the number written in Tatami is different.","bkSizeNe":"The size of the block is not equal to the number.","bkSizeNe5.hebi":"The size of a snake is not five.","bkSmallOnBig.ripple":"There is a smaller number on top of a bigger number in a room.","bkStarGt.starbattle":"The number of stars in an area is too large.","bkStarLt.starbattle":"The number of stars in an area is too small.","bkSubdivided.oneroom":"A room is divided internally by shaded cells.","bkSubGt2.cbblock":"A block has three or more areas framed by dotted line.","bkSubGt2.dbchoco":"A block has three or more shapes.","bkSubLt2.cbblock":"A block has one area framed by dotted line.","bkSubLt2.dbchoco":"A block contains a single color.","bkSumNe.twinarea":"The sum of numbers in a gray area is not equal to the size of the gray area.","bkSumNeBn.yosenabe":"Sum of filling is not equal to a crock.","bkUCGe2.dosufuwa":"An area has two or more balloons.","bkUnitNe2.kuroclone":"There is an area without exactly two units.","bkUnitNe2.nuritwin":"An area doesn't have exactly two blocks.","bkUnknown.lohkous":"A room has a segment of invalid length.","bkUnshade.lapaz":"A 1x1 region is unshaded.","bkUnshadeConsecGt3":"There is a line of consecutive unshaded cells that goes through 2 region borders.","bkWidthGt1":"The width of the tatami is not one.","bkWrongNum.armyants":"The numbers on the ant are wrong.","blLineDiff.onsen":"The length of the path in a room is different in some rooms.","blLineLong.maxi":"A line in a room is longer than the number.","blLineNe.onsen":"The length of the path in a room is different from the number of the loop.","blLineNe.wataridori":"A number does not indicate the amount of rooms visited by the path.","blLineShort.maxi":"All lines in a room are shorter than the number.","blNoHatena.ovotovata":"Lines that exit a \"?\" region turn at different positions.","blNoNumber.ovotovata":"A line that exits a numbered region turns at the wrong position.","blPassTwice.rassi":"A room has more than one line.","blPassTwice":"A line passes a room more than once.","blRemLength":"A number does not indicate the length of the visit in the next room.","blWrongTurns.detour":"A room has the wrong number of turns.","bnIllegalPos.yosenabe":"There is a number out of a crock.","brNoLine.kouchoku":"There is no segment.","brNoLine":"There is no line on the board.","brNoShade":"There are no shaded cells on the board.","brNoStone.goishi":"There are no goishis on the board.","brNoTriangle.shakashaka":"There are no triangles on the board.","brNoValidNum":"There are no numbers on the board.","brObjNotSym.bonsan":"Position of circles is not point symmetric.","bsAnt.armyants":"Two ants are adjacent.","bsArrowGt2.evolmino":"The block has more than one square that is placed on arrows.","bsEqShade.mannequin":"The distance between the two shaded cells is the same in adjacent rooms.","bsEqShade.shimaguni":"The sizes of countries that are in adjacent marine areas are the same.","bsNoArrow.evolmino":"The block isn't placed on an arrow.","bsNoSequence.archipelago":"A chain does not contain one island of every size from 1 to N.","bsNoSequence.tilecity":"A country does not contain one tile of every size from 1 to N.","bsNotEvol.evolmino":"The block doesn't have the same shape as the previous block with one additional square.","bsSameNum.archipelago":"A chain contains two islands of identical size.","bsSameNum.fillomino":"Adjacent areas have the same number.","bsSameNum.tilecity":"A country contains two tiles of identical size.","bsSameShape.chainedb":"A chain contains two identical blocks.","bsSameShape.lits":"Some tetrominoes that have the same shape are adjacent.","bsSameShape":"Two blocks that have the same shape are adjacent.","bsSizeEq.fillmat":"Tatamis of the same size are adjacent.","bsSnake.hebi":"Different snakes are adjacent.","cbDiffLenNe.renban":"The difference between two numbers is not equal to the length of the line between them.","cbNoLine.country":"Adjacent cells in different countries are both unused by the loop.","cbNoLine.nothing":"Two unvisited countries are adjacent.","cbSameNum.nanro":"Adjacent blocks have the same number.","cbShade.shimaguni":"Countries in different marine areas are adjacent.","cbShade":"Shaded cells are adjacent over a border.","cbUnshade":"Unshaded cells are adjacent over a border.","ceAddLine":"A cell with given lines has extra lines.","ceDark.lightup":"A cell is not shined.","ceDirection.compass":"The number of cells in the direction is wrong.","ceDirection.mukkonn":"A line that exits a cell turns at the wrong position.","ceDirection.guidearrow":"A cell does not follow the indicated direction towards the goal.","ceDirection.turnrun":"A line that exits a cell turns at the wrong position.","ceEmpty.kaidan":"There is an empty cell.","ceEmpty.lightshadow":"There is an undetermined cell.","ceEmpty.shugaku":"There is an empty cell.","ceEmpty.yajilin":"There is an empty cell.","ceIntersect.nanameguri":"A line goes over a diagonal border.","ceInvalidLadder.ladders":"A ladder doesn't connect two separate regions.","ceNoBar.juosan":"There is an empty cell.","ceNoBomb.timebomb":"A boulder is not destroyed by a bomb.","ceNoBar.tateyoko":"There is an empty cell.","ceNoEnd.kaidan":"A rectangle is not closed.","ceNoLine.arukone":"A crossing is left blank.","ceNoLine":"There is an empty cell.","ceNoNum.compass":"There is an area without a clue.","ceNoNum.kakuro":"There is an empty cell.","ceNoNum.lohkous":"There is an area without a clue.","ceNoNum.yinyang":"There is an empty cell.","ceNoNum":"There is an empty cell.","ceNoSlash.gokigen":"There is an empty cell.","ceNumGtSize.armyants":"A number is greater than the size of the ant.","ceOverlap.tachibk":"A block in the left grid overlaps an equally sized block in the right grid.","cePortalMiscount.portal":"There aren't exactly two portals with the same number.","cePluralLine.bunnyhop":"A cell is visited multiple times.","ceSuspend.sukoro":"There is a cell that is not filled in number.","ceSuspend.sukororoom":"There is a cell that is not filled in number.","ceSuspend.view":"There is a cell that is not filled in number.","ceTapaNe.tapa":"The number is not equal to the length of surrounding shaded cells.","ceTooManyBlocks.doppelblock":"There are more than two blocks in a row or column.","ceUnused.kinkonkan":"A mirror is unused.","ciNotOnCnr.loute":"A circle is not at the corner of an area.","circleNotPromontory.kurodoko":"A circle is not a dead end.","circleShade.kissing":"A crossed cell is shaded.","circleShade":"A white circle is shaded.","circleUnshade.snake":"A circle is not shaded.","circleUnshade":"A black circle is not shaded.","circNoLine.balance":"A circle has no line.","clueUnused.railpool":"Some of the region's numbers don't match with any segment's length.","complete":"Complete!","crAdjacent.tajmahal":"A square does not touch the correct amount of other squares.","crConnSlNe.gokigen":"A number is not equal to count of lines that is connected to it.","crNoSegment.tajmahal":"A clue is not inside a square.","crShadeGt.creek":"The number of shaded cells overlapping a number is too high.","crShadeLt.creek":"The number of shaded cells overlapping a number is too low.","cs1x1.cityspace":"There is an isolated shaded cell.","cs2x2.bosnianroad":"The loop goes back on itself.","cs2x2.snake":"The snake loops back on itself.","cs2x2":"There is a 2x2 block of shaded cells.","cs3.aqre":"There are 4 or more shaded cells in a row.","csAdjacent.fakearrow":"Shaded arrows are adjacent.","csAdjacent.kaidan":"Some circles are adjacent.","csAdjacent":"Some shaded cells are adjacent.","csDotBlack":"A black dot doesn't overlap more shaded cells than unshaded cells.","csDotGray":"A gray dot doesn't overlap an equal number of shaded and unshaded cells.","csDotWhite":"A white dot doesn't overlap more unshaded cells than shaded cells.","csConnOut.kurodoko":"Some shaded cells are not connected to the outside.","csConsecGt3.tawa":"Three or more shaded cells continue horizontally.","csCornerSize.nuribou":"Masses of shaded cells with the same length share a corner.","csdDivide.scrin":"There is a rectangle that is not connected to the other rectangles.","csDistance.nothree":"Three consecutive cells in the same row have the same distance.","csDivide.shugaku":"The aisle is divided.","csDivide":"The shaded cells are divided.","csDivide8.mochikoro":"The unshaded cells are divided.","csGt1.nothree":"A dot overlaps more than one shaded cell.","csGt1.sumiwake":"A circle overlaps more than one shaded cell.","csGt1.takoyaki":"A line has more than one circle in the middle.","csGt2":"The size of a mass of shaded cells is over two.","csGt4":"The size of a mass of shaded cells is over four.","csGtLimit.kissing":"Two blocks are adjacent in an invalid location.","csGtN.isowatari":"The size of a mass of shaded cells is greater than the indicated number.","csLoop.parquet":"There is a loop of shaded cells.","csLt1.nothree":"A dot doesn't overlap a shaded cell.","csLt1.sumiwake":"A circle doesn't overlap a shaded cell.","csLt1.takoyaki":"A line has no circle in the middle.","csLt2.sumiwake":"A black circle doesn't overlap two shaded cells.","csLt2":"There is a single shaded cell.","csLt4":"The size of a mass of shaded cells is less than four.","csLtN.isowatari":"The size of a mass of shaded cells is less than the indicated number.","csMismatch.retroships":"A shaded piece has missing cells.","csMismatch":"A given piece has missing cells.","csNoLevel.aquarium":"A body of water has different surface levels.","csNoSupport.aquarium":"A water cell is next to or above an empty cell.","csNotBottom.dosufuwa":"An iron ball is not on the bottom of the row or on another iron ball.","csNotOnShade.tawa":"There are no shaded cells under a shaded cell.","csNotRect":"A mass of shaded cells is not rectangle.","csNotSquare":"A group of shaded cells is not a square.","csOnArrow":"A cell with a clue is shaded.","csPieceExtra.retroships":"A shaded piece has incorrect cells around it.","csPieceExtra":"A given piece has incorrect cells around it.","csRect.mochikoro":"There is a block of shaded cells that is a rectangle.","csSameJunction":"A shaded cell touches multiple T-junctions with the same orientation.","csUpper.stostone":"Shaded cells remain in the upper half of the board after the blocks have fallen.","csWidthGt1.nuribou":"There is a mass of shaded cells whose width is more than one.","csWidthGt1.cityspace":"There is a mass of shaded cells that is not a 1xN rectangle.","cu2x2":"There is a 2x2 block of unshaded cells.","cu3.aqre":"There are 4 or more unshaded cells in a row.","cuConnOut":"Some unshaded cells are not connected to the outside.","cuDivide.kaidan":"The rectangles are divided.","cuDivide.wittgen":"The cells not used by rectangles are divided.","cuDivide":"The unshaded cells are divided.","cuDivideRB":"The unshaded cells are divided.","cuEndpoint.takoyaki":"An endpoint does not have a circle.","cuLt2.sansaroad":"An empty cell is adjacent to less than 2 unshaded cells.","cuLt3.sansaroad":"A triangle is adjacent to less than 3 unshaded cells.","cuGt2.sansaroad":"An empty cell is adjacent to more than 2 unshaded cells.","cuGt3.sansaroad":"A triangle is adjacent to more than 3 unshaded cells.","cuLoop":"There is a loop of unshaded cells.","cuLower.stostone":"Unshaded cells exist in the lower half of the board after the blocks have fallen.","cuNoLine.icebarn":"The line doesn't pass all of the non-icy cell.","cuNoLine.nagenawa":"There is no line on the unshaded cell.","cuNotPointed.yajirushi":"An empty cell is not between a pair of arrows.","cuNotRect.mochikoro":"There is a block of unshaded cells that is not a rectangle.","cuNotRectx.shakashaka":"A white area is not rectangle.","cuNotSquare":"An unshaded area is not a square.","cuNotTop.dosufuwa":"A balloon is not on the top of the row or under another balloon.","cuOutside.castle":"An unshaded cell is outside of the loop.","cuRect":"A mass of unshaded cells is a rectangle.","cuRoomGt.akichi":"A cluster of unshaded cells is larger than the number.","cuRoomLt.akichi":"All clusters of unshaded cells are smaller than the number.","cxAdjacent.crossstitch":"Crossings are adjacent.","cxNoLine":"A point is not visited.","cxOverlap.diamond":"Two diamonds overlap.","cxOverlap.heyapin":"A pin overlaps a single region.","exMinusNe.magnets":"The number of Minus signs in the row or column is not correct.","exNoMatch.nonogram":"The shaded cells don't match the clues in the row or column.","exPlusNe.magnets":"The number of Plus signs in the row or column is not correct.","exShadeNe.aquarium":"The number of shaded cells in the row or column is not correct.","exShadeNe.batten":"The number of shaded cells in the row or column is not correct.","exShadeNe.battleship":"The number of shaded cells in the row or column is not correct.","exShadeNe.snake":"The number of shaded cells in the row or column is not correct.","exTentNe.tents":"The number of tents in the row or column is not correct.","futonHalf.shugaku":"There is a half-size futon.","futonMidPos.shugaku":"There is a futon that is not connected to the aisle.","gateRedup.slalom":"A line goes through a gate twice or more.","gateUnpass.slalom":"A gate is not passed by the loop.","goishiRemains.goishi":"There is remaining Goishi.","haisuError.haisu":"A number is not passed on the right visit.","haisuError.kaisu":"A region visit contains an incorrect amount of circles.","haisuSG.haisu":"The line goes through S/G.","haisuSG.recoil":"The start point has multiple lines.","invalid":"Invalid Error","curvingNoTurns.curving":"A path between circles does not turn.","curvingOneTurn.curving":"A path between circles turns only once.","kitamakura.shugaku":"There is a futon that faces down.","laCurve.herugolf":"A ball curves halfway.","laCurve.kaidan":"Two rectangles overlap.","laCurve":"A line has curve.","laIsolate.bonsan":"A line doesn't connect any circle.","laIsolate.herugolf":"A line doesn't connect any ball.","laIsolate.oyakodori":"A line doesn't connect to any bird.","laIsolate.rectslider":"A line doesn't connect any shaded cell.","laIsolate.yosenabe":"A line doesn't connect any filling.","laIsolate":"A line doesn't connect to any letter.","laLenNe.blindrush":"A number doesn't go through the correct amount of walls.","laLenNe.herugolf":"A ball stops halfway.","laLenNe":"The length of a line is wrong.","laLoop":"A line forms a loop.","laMoveOver.herugolf":"You make a bogey or more.","laOnBorder":"There is a line across a border.","laOnHole.herugolf":"A line goes through a hole.","laOnIce.oyakodori":"A line goes through a nest cell.","laOnNum.armyants":"There is a line across a number.","laOnNum.bonsan":"A line goes through a circle.","laOnNum.herugolf":"A line goes through a ball.","laOnNum.oyakodori":"A line goes through a bird.","laOnNum.rectslider":"A line goes through a shaded cell.","laOnNum.yajisoko":"A line goes through a box.","laOnNum.yosenabe":"A line goes through a filling.","laOnNum":"A line goes through a letter.","laShadeOnBorder.oyakodori":"A black bird goes over a border.","laUnshadeNoBorder.oyakodori":"A white bird does not go over a border.","laWallStop.blindrush":"A circle does not stop at a wall.","laWaterHazard.herugolf":"A ball lands into the water.","lbDivide.amibo":"The bars are not connected.","lbIsolate.walllogic":"A line doesn't connect to any number.","lbLenGt.amibo":"The length of the bar is too long.","lbLenLt.amibo":"The length of the bar is too short.","lbLoop.amibo":"There is a loop of bars.","lbNotCrossEq.amibo":"A bar doesn't cross a bar whose length is the same.","lcBalance.coffeemilk":"A group doesn't have an equal number of white and black circles.","lcCurveGt1.ichimaga":"The number of curves is twice or more.","lcCurveGt2.kusabi":"A line turns more than twice.","lcCurveLt2.kusabi":"A line turns less than twice.","lcCurveNe.firefly":"The number of curves is different from a firefly's number.","lcCurveNe.mintonette":"A number doesn't indicate the amount of turns taken by the path.","lcDeadEnd":"There is a dead-end line.","lcDivided.tjunction":"Not all T-junctions are connected.","lcDivided":"All lines and numbers are not connected to each other.","lcGrayGt.coffeemilk":"A group has more than one gray circle.","lcInvalid.coffeemilk":"A white and black circle are connected directly.","lcInvalid.kusabi":"The types of connected circles don't match.","lcInvBlack.wblink":"Two black circles are connected.","lcInvDirB.firefly":"Points are connected each other.","lcInvDirW.firefly":"Fireflies are connected without a line starting from point.","lcInvWhite.wblink":"Two white circles are connected.","lcIsolate.arukone":"A line doesn't connect any alphabet.","lcIsolate.balloon":"A string doesn't connect to any number.","lcIsolate.kusabi":"A line isn't connected to any circle.","lcIsolate.uturns":"A line doesn't connect two gray circles.","lcIsolate":"A line doesn't connect to any number.","lcLenInvDiff.kusabi":"The relative lengths of the legs of a U don't match the clues.","lcLenInvNe.kusabi":"The legs of a U have different lengths.","lcNotKusabi.kusabi":"A line is not U-shaped.","lcOnNum.anglers":"A line goes through a symbol.","lcOnNum.arukone":"A line goes through an alphabet.","lcOnNum.kusabi":"A line goes through a circle.","lcOnNum.uturns":"A line goes through a gray circle.","lcOnNum":"A line goes through a number.","lcSameNum.ichimaga":"Same numbers are connected each other.","lcTripleNum.arukone":"Three or more alphabets are connected.","lcTripleNum.kusabi":"Three or more objects are connected.","lcTripleNum.wblink":"Three or more objects are connected.","lcTripleNum":"Three or more numbers are connected.","lnAdjacent.balloon":"A string loops back on itself.","lnAdjacent.ladders":"Two ladders touch.","lnAdjacent.pmemory":"The path loops back on itself.","lnAdjacent.timebomb":"The paths of two different bombs are adjacent.","lnAdjacent.tjunction":"T-junctions with the same orientation are adjacent.","lnAdjacent.tontti":"Identical line shapes are connected.","lnBranch.energywalk":"There is a branch line outside of an energy cell.","lnBranch.forestwalk":"There is a branch line outside of a forest cell.","lnBranch":"There is a branch line.","lnConsecutive.kaidan":"Two adjacent rectangles don't have a size difference of 1.","lnCross.crossstitch":"A loop crosses itself.","lnCross":"There is a crossing line.","lnCrossExCir.pipelink":"There is a crossing line out of circles.","lnCrossExIce":"A line is crossed outside of ice.","lnCrossExIce.energywalk":"A line is crossed outside of an energy cell.","lnCrossExMk":"There is a crossing outside given crosses.","lnCrossOnNum.pipelink":"Lines are crossed on a number.","lnCrossPencil.pencils":"A line crosses a pencil.","lnCurveOnCir.pipelink":"A line turns on a circle.","lnCurveOnCir.portal":"A line turns on an unmarked portal.","lnCurveOnIce":"A line turns on ice.","lnCurveOnNum":"A line turns on a station.","lnDeadEnd":"There is a dead-end line.","lnDeadEndAround.rassi":"Two line ends are adjacent.","lnDivide.familyphoto":"A line divides two circles.","lnDoubleTurn.firewalk":"A cell with double turns has its center outside of the loop.","lnEnds.kaidan":"The short ends of two rectangles are adjacent.","lnExTri.reflect":"A line doesn't goes through a triangle.","lnHasLoop.lither":"A tree includes a loop.","lnIsolate.anglers":"A symbol has no line.","lnIsolate.bdwalk":"A symbol has no line.","lnIsolate.country":"A circle doesn't have a line.","lnIsolate.icewalk":"A number has no line.","lnIsolate.kouchoku":"A segment starts outside a clue.","lnIsolate.nanameguri":"A cell with a diagonal border has no line.","lnIsolate.tajmahal":"A square does not have a clue at the center.","lnLenGt.anglers":"A line is longer than the number.","lnLenGt.reflect":"The lines passing a triangle are too long.","lnLengthGt.pencils":"A line is longer than the connected pencil.","lnLengthLt.pencils":"A line is shorter than the connected pencil.","lnLengthNe3.wittgen":"A block does not cover exactly 3 cells.","lnLenLt.anglers":"A line is shorter than the number.","lnLenLt.reflect":"The lines passing a triangle are too short.","lnMultipleTips.pencils":"A line connects to more than one pencil tip.","lnNoBorder.ladders":"A ladder doesn't touch two region borders.","lnNoBranch.energywalk":"A visited energy cell doesn't branch off in all directions.","lnNoBranch.forestwalk":"A visited forest cell doesn't contain a T-junction.","lnNoBranch.tjunction":"A cell doesn't contain a T-junction.","lnNoBranchOrTerm.lither":"A line does not branch or terminate at a grid vertex.","lnNoFish.anglers":"A line has no fish.","lnNoIce.balloon":"A string doesn't connect to a balloon.","lnNoNum":"A line has no number.","lnNotCrossMk":"A cross-joint cell doesn't have four-way lines.","lnNotValid.recoil":"A move doesn't add a recoiled cell.","lnNoTip.pencils":"A line is not connected to a pencil tip.","lnNotRect.nagenawa":"There is a non-rectangle loop.","lnNotSq.tajmahal":"A segment doesn't form a square.","lcNotUTurns.uturns":"A line does not turn twice in the same direction between circles.","lnOnCenter.midloop":"A circle is not the center point of a line.","lnOnClue.tajmahal":"A corner is on top of a clue.","lnOnCorner.tajmahal":"A segment overlaps a corner.","lnOnDot.midloop":"A line doesn't go over a circle.","lnOnShade.dotchi":"A line goes over a shaded circle.","lnOnShade.kaidan":"A rectangle overlaps an obstacle.","lnOnShade.recoil":"There is a line on a recoiled cell.","lnOnShade.yajisoko":"A line goes over a shaded cell.","lnOnShade":"There is a line on a shaded cell.","lnOnWhite.uturns":"A white circle is not in the middle of a line.","lnOverlap.kouchoku":"Some segments overlap.","lnOverlap.tontti":"A line overlaps a number.","lnPassOver.kouchoku":"A segment passes over a clue.","lnPlLine":"There are multiple lines.","lnPlLoop.crossstitch":"There aren't exactly two loops.","lnPlLoop.diamond":"Not all shaded cells and diamonds are connected.","lnPlLoop.forestwalk":"There are multiple networks.","lnPlLoop.ladders":"Not all regions are connected.","lnPlLoop.tajmahal":"There is a square that is not connected to the other squares.","lnPlLoop":"There are multiple loops.","lnPortalCross.portal":"A line passes over a portal.","lnPortalCurve.portal":"The line exits a portal in the wrong direction.","lnRightAngle.kouchoku":"Segments don't intersect at a right angle.","lnSnLine.lither":"There is only one tree.","lnStarNe.starbattle":"The number of stars in a line is wrong.","lnStraightOnIce.firewalk":"A line goes straight through fire.","lnStraightOnNum":"A line goes straight through a number.","lnWrongAngle.kouchoku":"Some segments meet at the wrong angle.","lookairBC.lookair":"Two squares of the same size can see each other.","lpEnergy.energywalk":"An energy cell connects directly to itself through unshaded cells.","lpNoNum.onsen":"A loop has no numbers.","lpNoNum.pipelink":"A loop has no numbers.","lpNumGt2.onsen":"A loop has more than one number.","lpNumGt2.orbital":"A loop encloses more than one black circle.","lpPlNum.pipelink":"A loop has multiple kinds of number.","lpSepNum.pipelink":"A kind of number is in different loops.","lrAcrossArrow.nagare":"The line doesn't go straight in the arrow's direction.","lrAcrossWind.nagare":"The line passes across the wind.","lrAgainstArrow.nagare":"The line passes against an arrow.","lrFollowsFake.fakearrow":"The line follows a shaded arrow.","lrAgainstWind.nagare":"The line passes against the wind.","lrDeadEnd.icebarn":"There is a dead-end line.","lrOffField.icebarn":"A line is not reached out the 'OUT' arrow.","lrOrder.icebarn":"A line goes through an arrow reverse.","lrOrder.slalom":"A gate is passed in the wrong order.","lrReverse.icebarn":"A line goes through an arrow reverse.","mashuBCvNbr":"Lines turn next to a black pearl.","mashuBStrig":"Lines go straight through a black pearl.","mashuOnLine":"Lines don't pass some pearls.","mashuWCurve":"Lines turn on a white pearl.","mashuWStNbr":"Lines go straight next to a white pearl on both sides.","ms2x2.yinyang":"There is a 2x2 block of shaded circles.","msConsecGt3.nondango":"There are three or more shaded circles in a row.","msDivide.yinyang":"Shaded circles are divided.","mu2x2.yinyang":"There is a 2x2 block of unshaded circles.","muConsecGt3.nondango":"There are three or more unshaded circles in a row.","muDivide.yinyang":"Unshaded circles are divided.","nm2x2.nanro":"There is a 2x2 block of numbers.","nmAdjacent.arrowflow":"Equal arrows are adjacent.","nmAdjacent.hanare":"Some numbers are adjacent.","nmAdjacent.magnets":"Equal poles are adjacent.","nmAdjacent.numcity":"Equal numbers are adjacent over a border.","nmAdjacent.sananko":"Different numbers are adjacent.","nmAdjacent":"Equal numbers are adjacent.","nmAdjacentGt2.tontonbeya":"A cluster of symbols is adjacent to 2 or more clusters with the same symbol.","nmAdjacentLt2.tontonbeya":"A cluster of symbols is not adjacent to another cluster with the same symbol.","nmAdjDiff.magnets":"Adjacent poles of different magnets are not equal.","nmAkariNe.lightup":"The number is not equal to the number of Akari around it.","nmAround.hakoiri":"Equal shapes touch.","nmAround.kakuru":"Same numbers are adjacent.","nmAround.ripple":"Equal numbers touch.","nmArrowGt":"There are too many arrows adjacent to a number.","nmArrowLt":"There are not enough arrows adjacent to a number.","nmBorderNe.nawabari":"The number is not equal to the number of border lines around it.","nmBranch.snakepit":"A snake branches off.","nmCircleNe.brownies":"A number is not equal to the amount of circles in the surrounding cells.","nmCircleNe.crossstitch":"A circled number is not equal to the amount of corners used by a loop.","nmConnBarWrong":"The number of lines connected to a shaded cell is wrong.","nmConnDiff.arukone":"Different alphabets are connected.","nmConnDiff.kouchoku":"Different letters are connected directly.","nmConnDiff.numlin":"Different numbers are connected.","nmConnected.bonsan":"There are connected circles.","nmConnected.herugolf":"There are connected balls.","nmConnected.oyakodori":"There are connected birds.","nmConnected.rectslider":"There are connected shaded cells.","nmConnected.yajisoko":"There are connected boxes.","nmConnected.yosenabe":"There are connected fillings.","nmConnected":"There are connected letters.","nmConnNoWall.walllogic":"The number isn't connected by any lines.","nmConnWallGt.walllogic":"The lines connected to a number is long.","nmConnWallLt.walllogic":"The lines connected to a number is short.","nmCountGt.nanro":"A number is smaller than the count.","nmCountGt.simplegako":"The number of the identical numbers in the same row or column is bigger than the number in the cell.","nmCountLt.nanro":"A number is bigger than the count.","nmCountLt.simplegako":"The number of the identical numbers in the same row or column is smaller than the number in the cell.","nmDiag.snakepit":"A snake touches itself diagonally.","nmDiamondGt.diamond":"There are too many diamonds adjacent to a number.","nmDiamondLt.diamond":"There are not enough diamonds adjacent to a number.","nmDiffDistNe.hanare":"The distance of the paired numbers is not equal to their difference.","nmDiffDistNe.putteria":"The distance of the paired numbers is not equal to their difference.","nmDistNe.sashikazune":"A number is not equal to the distance to the region's corner.","nmDivEq2.kropki":"The number is double the other between two adjacent cells without shaded circle.","nmDivide.hakoiri":"The shapes are divided.","nmDivide.numcity":"Identical numbers are divided in a city.","nmDivide.tontonbeya":"Identical symbols are divided in a room.","nmDivide":"Numbers are divided.","nmDivNe2.kropki":"The number is not double the other between two adjacent cells with shaded circle.","nmDupRow.alter":"A row or column does not have alternating symbols.","nmDupRow.easyasabc":"There are equal letters in a row or column.","nmDupRow.lollipops":"Two identical symbols can see each other.","nmDupRow.takoyaki":"Two circles in the same row or column belong to the same line.","nmDupRow":"There are equal numbers in a row or column.","nmDupRowCol.toichika2":"A number has an identical number in both the same row and column.","nmEndpoint.snakepit":"A circle is not on an endpoint.","nmEqOne.snakepit":"There is a snake of length 1.","nmGt2.oyakodori":"There are more than two birds in the same nest.","nmHatenaNe.crossstitch":"A circled question mark does not have any corners used by a loop.","nmIgnored.herugolf":"There is a Hole without a ball.","nmIneqNe.minarism":"A inequality sign is not correct.","nmInside":"A wolf is inside the loop.","nmLineAdjacent.keywest":"Two adjacent islands have the same number of connecting bridges.","nmLineGt.hashikake":"The number of bridges connecting to a number is not correct.","nmLineGt.kaidan":"The number of blocks adjacent to a number is not correct.","nmLineGt1.amibo":"Multiple lines connect to a white circle.","nmLineLt.hashikake":"The number of bridges connecting to a number is not correct.","nmLineLt.kaidan":"The number of blocks adjacent to a number is not correct.","nmLineLt2.kouchoku":"A clue doesn't have two segments.","nmLineNe.ichimaga":"The number is not equal to the number of lines out of the circle.","nmLineNe.lither":"The number is not equal to the number of lines around it.","nmLineNe.slither":"The number is not equal to the number of lines around it.","nmLoop.snakepit":"A snake has no head or tail.","nmLt1.lapaz":"A number is not contained in a 1x2 region.","nmLt2.oyakodori":"There is a lonely bird.","nmMidpoint.snakepit":"A grey cell is not a middle part of a snake.","nmMinesNe.mines":"The number of mines in the surrounding cells is not equal to the number.","nmMissing.lohkous":"There is no segment of the given length in the room.","nmMissRow.alter":"A row or column has less than two symbols.","nmMissRow.easyasabc":"There are missing letters in a row or column.","nmMixed.aquapelago":"A group contains different numbers.","nmMoveNe.tren":"A block cannot move in the correct number of spaces.","nmNoLine.amibo":"No bar connects to a white circle.","nmNoLine.coffeemilk":"A white or black circle doesn't have a line.","nmNoLine.firefly":"There is a lonely firefly.","nmNoLine.ichimaga":"A circle doesn't start any line.","nmNoLine.kusabi":"A circle is not connected to another object.","nmNoLine.wblink":"A circle doesn't start any line.","nmNoLine":"A number is not connected to another number.","nmNoMove.bonsan":"A circle doesn't move.","nmNoMove.rectslider":"A shaded cell doesn't move.","nmNoOrbit.orbital":"A black circle is not inside a loop.","nmNoSequence.numcity":"A city does not contain one district of every number from 1 to N.","nmNoSideShade.tasquare":"No shaded cells are adjacent to square marks.","nmNotConsecNeighbors.ripple":"A number is not the neighbor of its consecutive numbers.","nmNotConseq.kouchoku":"Equal letters are not connected directly.","nmNotConseq.trainstations":"A number doesn't connect to the next consecutive number.","nmNotConseqFull.trainstations":"A number doesn't connect to the next consecutive number.","nmNotLink.kazunori":"A number doesn't link to other cells in the room.","nmNotSeq.numrope":"The numbers on a line are not consecutive.","nmNumberEq.oyakodori":"Two identical birds are in the same nest.","nmNumberNe.sukoro":"The number of numbers placed in four adjacent cells is not equal to the number.","nmNumberNe.sukororoom":"The number of numbers placed in four adjacent cells is not equal to the number.","nmNumberNe.view":"The number of numbers placed in four adjacent cells is not equal to the number.","nmOrbitNe.orbital":"A number does not indicate the amount of white circles used by the loop.","nmOrder.numcity":"The size of a district is larger or equal to the size of the previous district.","nmOutOfBk.oyakodori":"A bird is outside a nest.","nmOutOfBk.yosenabe":"A filling isn't in a crock.","nmOutOfHole.herugolf":"A ball doesn't cup in.","nmOutside":"A sheep is outside the loop.","nmOutsidePencil.pencils":"A number is not inside a pencil.","nmOutsideTren.tren":"A number is not contained inside a 1x2 or 1x3 block.","nmPillowGt.shugaku":"The number of pillows around the number is wrong.","nmPillowLt.shugaku":"The number of pillows around the number is wrong.","nmPlOrbit.orbital":"A black circle is inside multiple loops.","nmProduct.factors":"A number of room is not equal to the product of these numbers.","nmRange.kakuru":"A number is larger than 9.","nmRange.sananko":"A number is larger than 3.","nmRange.trainstations":"A number is out of range.","nmSame2x2.kazunori":"There is a 2x2 block of the same number.","nmSame2x2.narrow":"A 2x2 block of cells belongs to regions with the same symbol.","nmSame2x2.snakepit":"A snake loops back on itself.","nmShade5Ne.lookair":"The number is not equal to the number of shaded cells in the cell and the four adjacent cells.","nmShadeDiagNe.context":"The number of shaded cells diagonally adjacent to a shaded number is not correct.","nmShadeEq.retsurin":"The number is equal to both the amount of shaded cells in its row and in its column.","nmShadeEq.smullyan":"The number of shaded cells in a shaded number's domain is equal to the number.","nmShadeGt.interbd":"The number of shaded cells around a number is not correct.","nmShadeGt.kaidan":"The number of circles around a number is not correct.","nmShadeGt.kuromenbun":"The number of shaded cells around an area is not correct.","nmShadeGt.smullyan":"The number of shaded cells in an unshaded number's domain is not correct.","nmShadeLt.interbd":"The number of shaded cells around a number is not correct.","nmShadeLt.kaidan":"The number of circles around a number is not correct.","nmShadeLt.kuromenbun":"The number of shaded cells around an area is not correct.","nmShadeNe.lapaz":"The number of shaded cells in the row or column is not correct.","nmShadeNe.paintarea":"The number is not equal to the number of shaded cells in the four adjacent cells.","nmShadeNe.retsurin":"The number is not equal to the amount of shaded cells in its row or column.","nmShadeNe.tawa":"The number of shaded cells around a number is not correct.","nmShadeViewNe.canal":"A cell containing a clue number sees a different number of shaded cells in the four orthogonal directions.","nmShapeNe":"A shape does not match the given letter.","nmShootShadeNe1.kurochute":"There is not exactly one shaded cell at the given distance from the number.","nmSightNe.easyasabc":"The letter is not the closest.","nmSightNe.roundtrip":"The length of the closest line segment is wrong.","nmSightNe.skyscrapers":"The number of visible buildings is wrong.","nmSizeGt.pencils":"A number is larger than the length of the pencil.","nmSizeLt.pencils":"A number is smaller than the length of the pencil.","nmSizeNe.tontonbeya":"The clusters inside a room are of different sizes.","nmSmallGap.ripple":"The distance between two equal numbers is smaller than the number.","nmSubEq1.kropki":"The difference is one between two adjacent cells without white circle.","nmSubNe.minarism":"The difference between two adjacent cells is not equal to the number on circle.","nmSubNe1.kropki":"The difference is not one between two adjacent cells with white circle.","nmSubNe1.numrope":"The difference between two connected numbers is not one.","nmSum.doppelblock":"The sum of the numbers between the two blocks is wrong.","nmSumNe.kazunori":"The sum between two adjacent cells is not equal to the number on circle.","nmSumNe.wafusuma":"The sum of the size of the two adjacent areas is not equal to the number on the circle.","nmSumOfDiff.bosanowa":"Sum of the differences between the number and adjacent numbers is not equal to the number.","nmSumOrderRowNe.japanesesums":"The numbers don't match the sums in the row or column.","nmSumRowNe.kakuro":"The sum of the cells is not correct.","nmSumRowShadeNe.box":"A number is not equal to the sum of the number of shaded cells.","nmSumSizeNe.kurotto":"A number doesn't indicate the sum of the size of the adjacent blocks.","nmSumSizeNe.tasquare":"Sum of the adjacent masses of shaded cells is not equal to the number.","nmSumViewNe.teri":"The size of the largest possible rectangle is not equal to the number.","nmSumViewNe.view":"Sum of four-way gaps to another number is not equal to the number.","nmSumViewNe":"A cell containing a clue number sees a different number of cells in the four orthogonal directions.","nmTentGt.tents":"There are too many tents around a tree.","nmTentLt.tents":"There aren't enough tents around a tree.","nmTentNone.tents":"A tree has no tent.","nmTouchNe.tslither":"The number is not equal to the number of separate visits to the cell's edges/vertices.","nmTreeNone.tents":"A tent is not next to a tree.","nmTriangleGt.shakashaka":"There are too many triangles adjacent to a number.","nmTriangleLt.shakashaka":"There are not enough triangles adjacent to a number.","nmTripRow.alter":"A row or column has three different symbols.","nmTripRow.toichika2":"A number appears more than twice in the same row or column.","nmUnpass.icebarn":"The line doesn't pass all of the number.","nmUnshadeAdjNe.context":"The number of shaded cells orthogonally adjacent to an unshaded number is not correct.","nmVertexNe.vslither":"The number is not equal to the number of visited vertices around it.","nonCirclePromontory.kurodoko":"A dead end has no circle.","nqAroundDup.kakuru":"There are same numbers around the pre-numbered cell.","nqAroundSumNe.kakuru":"A sum of numbers around the pre-numbered cell is incorrect.","numNoLine":"A number has no line.","objShaded.nurimaze":"An object is shaded.","objShaded.tilecity":"A number is shaded.","pairedLetterNe.kinkonkan":"Beam from a light doesn't reach its pair.","pairedNumberNe.kinkonkan":"The number of reflections is wrong.","pcMultipleTips.pencils":"A pencil has more than one tip.","ptInPencil.pencils":"A tip is inside a pencil.","ptNoLine.pencils":"A pencil tip is not connected to a line.","ptNoPencil.pencils":"A tip is not at the short end of a 1xN rectangle.","rmBranch.scrin":"There is a branch of rectangles.","rmDeadend.scrin":"There is a dead-end rectangle.","rmIsolated.scrin":"There is an isolated rectangle.","rmRectUnshade.scrin":"A rectangle is not part of the solution.","routeLenLoop":"The route does not contain a loop.","routeIgnoreCP.nurimaze":"There is a circle out of the shortest route from S to G.","routePassDeadEnd.nurimaze":"There is a triangle on the shortest route from S to G.","segBlackEq.balance":"Segments through a black circle are equal.","segDiff.geradeweg":"Segments have different length.","segLong.balance":"A segment is too long.","segLong.geradeweg":"A segment is longer than a number.","segShort.balance":"A segment is too short.","segShort.geradeweg":"A segment is shorter than a number.","segUnclued.railpool":"The segment's length isn't in the region's set of numbers.","segWhiteUneq.balance":"Segments through a white circle are different.","shBranch.bosnianroad":"The loop branches off.","shBranch.snake":"The snake branches off.","shDeadEnd.bosnianroad":"There is a dead-end cell.","shDiag.batten":"A checkerboard pattern isn't marked with a clue.","shDiag.battleship":"Two ships are diagonally adjacent.","shDiag.bosnianroad":"The loop touches itself diagonally.","shDiag.pentatouch":"A place where two pieces touch isn't marked with a point.","shDiag.snake":"The snake touches itself diagonally.","shDiag":"Two pieces are diagonally adjacent.","shEndpoint.snake":"A black circle is not on an endpoint.","shIncorrect.curvedata":"A shape does not match the clue.","shInside":"A shaded cell is inside of the loop.","shLoop.snake":"The snake has no head or tail.","shMidpoint.snake":"A white circle is not a middle.","shMultiple.curvedata":"A shape is connected to multiple clues.","shNoDiag.batten":"A clue does not overlap a checkerboard pattern.","shNoDiag.pentatouch":"A point is not adjacent to two different pieces.","shNoDivide.interbd":"A shaded cell does not divide two or more countries.","shNone.curvedata":"A shape is not connected to a clue.","shSurrounded.interbd":"A shaded cell cannot divide two or more countries.","slLoop.gokigen":"There is a loop consisted in some slashes.","slLoopGiri.gokigen":"There is a loop that consists '切'.","slNotLoopWa.gokigen":"There is not a loop that consists '輪'.","snakeAttack.hebi":"A snake can see another snake.","starAround.starbattle":"Some stars touch.","stInvalid.icebarn":"System can't detect start position.","stLineNe2.slalom":"Start/goal circle doesn't have two lines.","stNoLine.icebarn":"The line doesn't go through the 'IN' arrow.","stopHalfway.roma":"A cell cannot reach a goal.","tapaloopError.disloop":"Following the loop from the arrow does not lead to segments of the correct length.","tapaloopError.tapaloop":"The segments around a clue are not the same length as the numbers.","tentAround.tents":"Some tents touch.","tooFewUnspecified.railpool":"The region contains fewer unspecified segment lengths than question marks.","tooManyUnspecified.railpool":"The region contains more unspecified segment lengths than question marks.","unusedCell":"A cell is unused."},
	ja: {"akariDup.lightup":"照明に別の照明の光が当たっています。","anHatenaNe.crossstitch":"矢印の先に、ループが交わっているマスがありません。","anLineGt.castle":"矢印の方向にあるループの長さが数字よりも長いです。","anLineLt.castle":"矢印の方向にあるループの長さが数字よりも短いです。","anNoAdjBd.yajitatami":"矢印の方向に境界線がありません。","anNoArrow":"矢印がない数字のマスがあります。","anNoShade":"矢印の１マス先に黒マスがありません。","anNumberNe.crossstitch":"ループが交わっているマスの数が正しくありません。","anNumberNe.hebi":"矢印の先にある数字が正しくありません。","anShadeNe":"矢印の方向にある黒マスの数が正しくありません。","anTatamiNe.yajitatami":"矢印の方向にあるタタミの数が正しくありません。","anUnitNe.kuroclone":"矢印の先にあるユニットの大きさが正しくありません。","arAdjPair.toichika":"辺を共有する国にペアとなる矢印が入っています。","arAdjPair.toichika2":"ペアとなる数字の入っている領域が隣り合っています。","arAgainstWind.nagare":"矢印の向きが風の指示と合っていません。","arAlone.toichika":"矢印の先にペアとなる矢印がいません。","arAlone.toichika2":"ペアとなる数字がありません。","arBlkEdge.loute":"矢印がブロックの端にありません。","arBlocked.toichika2":"ペアとなる数字どうしの間に別の数字があります。","arBlockLt2.evolmino":"矢印が２つ以上のブロックを通っていません。","arDistance.toichika2":"数字の間のマス数が正しくありません。","arInvalid.evolmino":"矢印の形が不正です。","arNoLine":"線が通っていない矢印があります。","arNotMax.makaro":"矢印の先が最も大きい数字でありません。","arNotPtCnr.loute":"矢印の先にブロックの角がありません。","asLblockNe.triplace":"数字の下か右にあるまっすぐのブロックの数が間違っています。","asShadeNe.tilepaint":"数字の下か右にある黒マスの数が間違っています。","bankGt":"ブロックが現れる回数が異なります。","bankInvalid":"形の異なるブロックが入っています。","bankLt":"入っていないブロックがあります。","baParaGe3.juosan":"縦棒か横棒が3マス以上並んでいます。","baPlNum.tateyoko":"1つの棒に2つ以上の数字が入っています。","bdBranch.kramma":"線が分岐しています。","bdBranchExBP.bdblock":"黒点以外のところで線が分岐しています。","bdCountLt3BP.bdblock":"黒点から線が３本以上出ていません。","bdCross":"十字の交差点があります。","bdCrossBP.kramma":"黒点上で線が交差しています。","bdCrossExBP.bdblock":"黒点以外のところで線が交差しています。","bdCurveExBP.kramma":"黒点以外のところで線が曲がっています。","bdDeadEnd":"線が途切れています。","bdDoorsGt.oneroom":"２部屋の間にドアが２つ以上あります。","bdIgnoreBP.bdblock":"黒点上を線が通過していません。","bdIgnoreBP.kramma":"黒点上を線が通過していません。","bdNotChassis.shwolf":"外枠につながっていない線があります。","bdPassStar.tentaisho":"星を線が通過しています。","bdUnused.lohkous":"使われていない線があります。","bdUnused.tren":"余分な線があります。","bdVoxasBlack":"黒丸をはさんだ長方形の大きさまたは向きが同じです。","bdVoxasGray":"灰色の丸をはさんだ長方形が、大きさも向きも全く同じ、または全く違います。","bdVoxasWhite":"白丸をはさんだ長方形の大きさまたは向きが違います。","bdwGroundFloor.bdwalk":"線が1階よりも下を通っています。","bdwInvalidDown.bdwalk":"▲のエレベーターで降りています。","bdwInvalidUp.bdwalk":"▼のエレベーターで昇っています。","bdwMismatch.bdwalk":"エレベーターのマスを通らずに階を移動しています。","bdwSkipElevator.bdwalk":"エレベーターで階を移動していません。","bdwTopFloor.bdwalk":"線が最上階よりも上を通っています。","bkArafEqual.araf":"面積が数字と一致しています。","bkArafTooBig.araf":"面積が大きすぎるブロックがあります。","bkArafTooSmall.araf":"面積が小さすぎるブロックがあります。","bkBothMarksPassed.moonsun":"線が月と太陽を両方通っています。","bkClue.toichika2":"ヒントと異なる数字が入っています。","bkDifferentLetters.nikoji":"異なる文字のブロックが同じ形になっています。","bkDifferentOrientation.nikoji":"ブロックの向きが異なります。","bkDifferentPosition.nikoji":"文字の位置が異なります。","bkDifferentShape.dbchoco":"ブロック内で、白マスと灰色マスのカタマリの形が異なっています。","bkDifferentShape.kuroclone":"部屋内でユニットの形が異なっています。","bkDifferentShape.nikoji":"同じ文字のブロックの形が異なります。","bkDivide":"クルマのないマスが分断されています。","bkDoubleBn.yosenabe":"鍋に数字が２つ以上書いてあります。","bkDupNum.hakoiri":"1つのハコに同じ記号が複数入っています。","bkDupNum.hebi":"同じ数字が入っています。","bkDupNum.makaro":"1つの部屋に同じ数字が複数入っています。","bkDupNum.renban":"1つの部屋に同じ数字が複数入っています。","bkDupNum.ripple":"1つの部屋に同じ数字が複数入っています。","bkDupNum.roma":"1つの領域に2つ以上の同じ矢印が入っています。","bkDupNum.sukoro":"1つの部屋に同じ数字が複数入っています。","bkDupNum.sukororoom":"1つの部屋に同じ数字が複数入っています。","bkDupNum.view":"1つの部屋に同じ数字が複数入っています。","bkDupNum":"同じブロックに同じ数字が入っています。","bkHingeGt.hinge":"黒マスのカタマリが複数の太線をまたいでいます。","bkHingeLt.hinge":"黒マスのカタマリが太線をまたいでいません。","bkHingeMirror.hinge":"太線を軸とした線対称の図形になっていません。","bkHingeSplit.hinge":"黒マスのカタマリが太線を複数回またいでいます。","bkLenGt4.fillmat":"「幅１マス、長さ１～４マス」ではないタタミがあります。","bkLessThan2Num.araf":"1つしか数字を含まないブロックがあります。","bkLiarNe1.usoone":"部屋に含まれる嘘つきの数字が1つでありません。","bkLineGt.nagenawa":"数字のある部屋と線が通過するマスの数が違います。","bkLineLt.nagenawa":"数字のある部屋と線が通過するマスの数が違います。","bkLineNe.country":"数字のある国と線が通過するマスの数が違います。","bkMajorBarGt.juosan":"縦棒か横棒の多い方の数が部屋の数字より多いです。","bkMajorBarLt.juosan":"縦棒か横棒の多い方の数が部屋の数字より少ないです。","bkMixed.sukoro":"数字のあるなしが混在した部屋があります。","bkMixed.sukororoom":"数字のあるなしが混在した部屋があります。","bkMixed.view":"数字のあるなしが混在した部屋があります。","bkMixed":"白マスと黒マスの混在したタイルがあります。","bkMixedNum.fillomino":"1つのブロックに2種類以上の数字が入っています。","bkMoreThan2Num.araf":"3つ以上の数字を含むブロックがあります。","bkMSGe2.nondango":"1つの領域に複数のくろまるがあります。","bkMSPassedGt2.moonsun":"月を通った部屋が連続しています。","bkMUPassedGt2.moonsun":"太陽を通った部屋が連続しています。","bkNoChain.chainedb":"ブロックが他のブロックと斜めに繋がっていません。","bkNoColor.interbd":"どの色も含まれていない国があります。","bkNoLevel.aquarium":"同じブロック内で、水のマスの水位が等しくないブロックがあります。","bkNoLine.country":"線の通っていない国があります。","bkNoLine.icebarn":"すべてのアイスバーンを通っていません。","bkNoLine.moonsun":"線の通っていない部屋があります。","bkNoLine.onsen":"線の通っていない部屋があります。","bkNoLine.ovotovata":"線が灰色マスを通っていません。","bkNoLineNe.mejilink":"タイルと周囲の線が引かれない点線の長さが異なります。","bkNoMarksPassed.moonsun":"線が月も太陽も通っていません。","bkNoMatch.dotchi":"直進する◯と曲がる◯が同じ領域にあります。","bkNoMS.nondango":"くろまるのない領域があります。","bkNoNum.bonsan":"○のない部屋があります。","bkNoNum.fillmat":"数字の入っていないタタミがあります。","bkNoNum.hanare":"数字の入っていない部屋があります。","bkNoNum.kaero":"アルファベットのないブロックがあります。","bkNoNum.kramma":"白丸も黒丸も含まれない領域があります。","bkNoNum.nanro":"数字が含まれていないブロックがあります。","bkNoNum.nawabari":"数字の入っていない部屋があります。","bkNoNum.nikoji":"領域内に文字がありません。","bkNoNum.nurikabe":"数字の入っていないシマがあります。","bkNoNum.putteria":"数字の入っていない部屋があります。","bkNoNum.shikaku":"数字の入っていない領域があります。","bkNoNum.shwolf":"ヤギもオオカミもいない領域があります。","bkNoNum.tatamibari":"記号の入っていないタタミがあります。","bkNoNum.toichika":"国に矢印が入っていません。","bkNoNum.yosenabe":"具材のない鍋があります。","bkNoNum":"数字のないブロックがあります。","bkNoObj.kinkonkan":"斜線の引かれていない部屋があります。","bkNoSC.dosufuwa":"鉄球が入っていない領域があります。","bkNoShade.shimaguni":"黒マスのカタマリがない海域があります。","bkNoShade":"黒マスがない部屋があります。","bkNoStar.tentaisho":"星が含まれていない領域があります。","bkNotAllMSPassed.moonsun":"線が全ての月を通っていません。","bkNotAllMUPassed.moonsun":"線が全ての太陽を通っていません。","bkNotHRect.tatamibari":"横長ではないタタミがあります。","bkNotLshape.loute":"ブロックが幅1のL字型になっていません。","bkNotLshape3.shikaku":"大きさが3の倍数である領域がL字型になっていません。","bkNotPassTwice.doubleback":"線がちょうど２回通過していない部屋があります。","bkNotRect.scrin":"四角形ではない領域があります。","bkNotRect.shikaku":"四角形ではない領域があります。","bkNotRect.tatamibari":"タタミの形が長方形ではありません。","bkNotRect.voxas":"四角形ではない領域があります。","bkNotRect":"四角形ではない部屋があります。","bkNotRect3.shikaku":"大きさが3の倍数ではないのに四角形ではない領域があります。","bkNotSeqNum.renban":"数字が連番になっていない部屋があります。","bkNotSquare.tatamibari":"正方形でないタタミがあります。","bkNotSymmRoom.fillomino":"部屋の形が点対称ではありません。","bkNotSymRoom.ayeheya":"部屋の形が点対称ではありません。","bkNotSymShade.ayeheya":"部屋の中の黒マスが点対称に配置されていません。","bkNotSymSt.tentaisho":"領域が星を中心に点対称になっていません。","bkNotVRect.tatamibari":"縦長ではないタタミがあります。","bkNoUC.dosufuwa":"風船が入っていない領域があります。","bkNumGe2.compass":"２つ以上の記号マスを含むブロックがあります。","bkNumGe2.fillmat":"1つのタタミに2つ以上の数字が入っています。","bkNumGe2.hanare":"1つの部屋に2つ以上の数字が入っています。","bkNumGe2.lohkous":"２つ以上の記号マスを含むブロックがあります。","bkNumGe2.nawabari":"1つの部屋に2つ以上の数字が入っています。","bkNumGe2.nikoji":"領域内に複数の文字があります。","bkNumGe2.nurikabe":"1つのシマに2つ以上の数字が入っています。","bkNumGe2.putteria":"1つの部屋に2つ以上の数字が入っています。","bkNumGe2.scrin":"1つの領域に2つ以上の数字が入っています。","bkNumGe2.shikaku":"1つの領域に2つ以上の数字が入っています。","bkNumGe2.tatamibari":"1つのタタミに2つ以上の記号が入っています。","bkNumGe2.toichika":"1つの国に2つ以上の矢印が入っています。","bkNumGe2":"1つのブロックに2つ以上の数字が入っています。","bkNumGt3.hakoiri":"1つのハコに4つ以上の記号が入っています。","bkNumLt3.hakoiri":"1つのハコに2つ以下の記号しか入っていません。","bkNumUnshade.scrin":"長方形の中に含まれていない丸があります。","bkObjGe2.kinkonkan":"斜線が複数引かれた部屋があります。","bkObjNotSym.bonsan":"部屋の中の○が点対称に配置されていません。","bkOddSize.kazunori":"部屋のサイズが奇数になっています。","bkPassTwice.country":"線が１つの国を２回以上通っています。","bkPassTwice.moonsun":"線が１つの部屋を２回以上通っています。","bkPlColor.interbd":"色が複数含まれる領域があります。","bkPlNum.kaero":"１つのブロックに異なるアルファベットが入っています。","bkPlNum.kramma":"白丸と黒丸が両方含まれる領域があります。","bkPlNum.shwolf":"ヤギとオオカミが両方いる領域があります。","bkPlNum":"複数種類の数字が入っているブロックがあります。","bkPlStar.tentaisho":"星が複数含まれる領域があります。","bkPluralShade.parquet":"複数のタイルが黒く塗られている領域があります。","bkRect":"ブロックが四角形になっています。","bkSameNumGt2.kazunori":"部屋に同じ数字が3つ以上入っています。","bkSameTouch":"向きも形も同じブロックが接しています。","bkSCGe2.dosufuwa":"1つの領域に鉄球が複数入っています。","bkSepColor.interbd":"同じ色のマスが異なる領域にあります。","bkSepNum.kaero":"同じアルファベットが異なるブロックに入っています。","bkSepNum":"同じ数字が異なるブロックに入っています。","bkShadeDivide.shimaguni":"1つの海域に入る国が2つ以上に分裂しています。","bkShadeDivide":"1つの部屋に入る黒マスが2つ以上に分裂しています。","bkShadeGt2":"２マス以上の黒マスがある部屋が存在します。","bkShadeGt4.lits":"５マス以上の黒マスがある部屋が存在します。","bkShadeLt2":"１マスしか黒マスがない部屋があります。","bkShadeLt4.lits":"黒マスのカタマリが４マス未満の部屋があります。","bkShadeNe.chocona":"数字のある領域と、領域の中にある黒マスの数が違います。","bkShadeNe.shimaguni":"海域内の数字と国のマス数が一致していません。","bkShadeNe":"部屋の数字と黒マスの数が一致していません。","bkSize1.rectslider":"黒マスが一つで孤立しています。","bkSize1.yajitatami":"長さが１マスのタタミがあります。","bkSizeEq.fillmat":"数字とタタミの大きさが同じです。","bkSizeGt.dbchoco":"同じ色のマスのカタマリの大きさより数字が小さいです。","bkSizeGt.fillomino":"ブロックの大きさよりも数字が小さいです。","bkSizeGt2":"サイズが2マスより大きいブロックがあります。","bkSizeGt3":"サイズが3マスより大きいブロックがあります。","bkSizeGt4":"サイズが4マスより大きいブロックがあります。","bkSizeGt5":"サイズが5マスより大きいブロックがあります。","bkSizeLt.dbchoco":"同じ色のマスのカタマリの大きさより数字が大きいです。","bkSizeLt.fillomino":"ブロックの大きさより数字のほうが大きいです。","bkSizeLt2":"サイズが2マスより小さいブロックがあります。","bkSizeLt3":"サイズが3マスより小さいブロックがあります。","bkSizeLt4":"サイズが4マスより小さいブロックがあります。","bkSizeLt5":"サイズが5マスより小さいブロックがあります。","bkSizeNe.cbanana":"数字とシマの面積が違います。","bkSizeNe.fillmat":"数字とタタミの大きさが違います。","bkSizeNe.hanare":"数字と部屋の大きさが違います。","bkSizeNe.nurikabe":"数字とシマの面積が違います。","bkSizeNe.putteria":"数字と部屋の大きさが違います。","bkSizeNe.scrin":"数字と領域の大きさが違います。","bkSizeNe.shikaku":"数字と領域の大きさが違います。","bkSizeNe.tateyoko":"数字と棒の長さが違います。","bkSizeNe.tontti":"線が通らないマスの数がヒントと異なります。","bkSizeNe.yajitatami":"数字とタタミの大きさが違います。","bkSizeNe":"数字とブロックの大きさが違います。","bkSizeNe5.hebi":"大きさが５ではない蛇がいます。","bkSmallOnBig.ripple":"同じ部屋で上に小さい数字が乗っています。","bkStarGt.starbattle":"ブロックに入る星の数が多すぎます。","bkStarLt.starbattle":"ブロックに入る星の数が少ないです。","bkSubdivided.oneroom":"部屋が黒マスで分断されています。","bkSubGt2.cbblock":"ブロックが3つ以上の点線からなる領域で構成されています。","bkSubGt2.dbchoco":"同じ色のマスのカタマリが3個以上入っているブロックがあります。","bkSubLt2.cbblock":"ブロックが1つの点線からなる領域で構成されています。","bkSubLt2.dbchoco":"1色のマスしか入っていないブロックがあります。","bkSumNeBn.yosenabe":"具材の合計値が正しくありません。","bkUCGe2.dosufuwa":"1つの領域に風船が複数入っています。","bkUnitNe2.kuroclone":"ユニットの数が２つでない部屋があります。","bkUnknown.lohkous":"領域内に数字と異なる長さのセグメントがあります。","bkUnshade.lapaz":"1x1の領域が黒く塗られていません。","bkUnshadeConsecGt3":"白マスが２つ以上の太線を連続してまたいでいます。","bkWidthGt1":"幅が１マスではないタタミがあります。","bkWrongNum.armyants":"アリの数字がおかしいです。","blLineDiff.onsen":"各部屋で線が通過するマスの数が違います。","blLineLong.maxi":"枠内を連続して通るマス数が、数字よりも大きい線があります。","blLineNe.onsen":"線が通過するマスの数が数字と違います。","blLineShort.maxi":"枠内のどの線も、連続して通るマス数が数字よりも小さいです。","blNoHatena.ovotovata":"？の領域を出た線が異なる場所で曲がっています。","blNoNumber.ovotovata":"線が領域から出てから、正しいマス数だけ直進していません。","blPassTwice.rassi":"部屋の中に線が複数あります。","blPassTwice":"ある線が１つの国を２回以上通っています。","blWrongTurns.detour":"線の曲がった回数が数字と違っています。","bnIllegalPos.yosenabe":"鍋の外に数字が書いてあります。","brNoLine.kouchoku":"線が存在していません。","brNoLine":"線が引かれていません。","brNoShade":"盤面に黒マスがありません。","brNoStone.goishi":"盤面に碁石がありません。","brNoTriangle.shakashaka":"盤面に三角形がありません。","brNoValidNum":"盤面に数字がありません。","brObjNotSym.bonsan":"○が点対称に配置されていません。","bsAnt.armyants":"別々のアリが接しています。","bsArrowGt2.evolmino":"ブロックが２マス以上矢印に乗っています。","bsEqShade.shimaguni":"隣り合う海域にある国の大きさが同じです。","bsNoArrow.evolmino":"ブロックに矢印が通っていません。","bsNotEvol.evolmino":"１つ前のブロックに四角を１つ付け足してできる形になっていません。","bsSameNum.fillomino":"同じ数字のブロックが辺を共有しています。","bsSameShape.chainedb":"チェーンの中に、大きさも形も同じブロックが入っています。","bsSameShape.lits":"同じ形のテトロミノが接しています。","bsSameShape":"同じ形のブロックが接しています。","bsSizeEq.fillmat":"隣り合うタタミの大きさが同じです。","bsSnake.hebi":"別々の蛇が接しています。","cbDiffLenNe.renban":"数字の差がその間にある線の長さと等しくありません。","cbNoLine.country":"線が通らないマスが、太線をはさんでタテヨコにとなりあっています。","cbSameNum.nanro":"同じ数字が境界線を挟んで隣り合っています。","cbShade.shimaguni":"異なる海域にある国どうしが辺を共有しています。","cbShade":"異なる部屋にある黒マスどうしが辺を共有しています。","ceAddLine":"最初から引かれている線があるマスに線が足されています。","ceDark.lightup":"照明に照らされていないセルがあります。","ceDirection.compass":"数字の方向にあるブロック内のマス数が、数字と一致していないブロックがあります。","ceEmpty.shugaku":"布団でも黒マスでもないマスがあります。","ceEmpty.yajilin":"黒マスも線も引かれていないマスがあります。","ceNoBar.juosan":"何も入っていないマスがあります。","ceNoBar.tateyoko":"何も入っていないマスがあります。","ceNoLine.arukone":"線が引かれていない交差点があります。","ceNoLine":"線が引かれていないマスがあります。","ceNoNum.compass":"記号マスを１つも含まないブロックがあります。","ceNoNum.kakuro":"すべてのマスに数字が入っていません。","ceNoNum.lohkous":"記号マスを１つも含まないブロックがあります。","ceNoNum.yinyang":"まるの入っていないマスがあります。","ceNoNum":"数字の入っていないマスがあります。","ceNoSlash.gokigen":"斜線がないマスがあります。","ceNumGtSize.armyants":"数字がアリの大きさよりも大きいです。","ceSuspend.sukoro":"数字の入っていないマスがあります。","ceSuspend.sukororoom":"数字の入っていないマスがあります。","ceSuspend.view":"数字の入っていないマスがあります。","ceTapaNe.tapa":"数字と周囲の黒マスの長さが異なっています。","ceTooManyBlocks.doppelblock":"3つ以上の黒マスがある行または列があります。","ciNotOnCnr.loute":"白丸がブロックの角にありません。","circleNotPromontory.kurodoko":"丸のマスが岬になっていません。","circleShade":"白丸が黒マスになっています。","circleUnshade.snake":"塗られていない丸があります。","circleUnshade":"黒丸が黒マスになっていません。","circNoLine.balance":"線が通っていない丸があります。","clueUnused.railpool":"数字が表す長さの線分がありません。","complete":"正解です！","crAdjacent.tajmahal":"数字が接している正方形の数と一致しません。","crConnSlNe.gokigen":"数字に繋がる線の数が間違っています。","crNoSegment.tajmahal":"正方形が配置されていません。","crShadeGt.creek":"数字のまわりにある黒マスの数が間違っています。","crShadeLt.creek":"数字のまわりにある黒マスの数が間違っています。","cs2x2.snake":"スネークが自分自身とタテヨコナナメに接しています。","cs2x2":"2x2の黒マスのカタマリがあります。","cs3.aqre":"黒マスが4マス連続しています。","csAdjacent":"黒マスがタテヨコに連続しています。","csConnOut.kurodoko":"盤面の外につながっていない黒マスがあります。","csConsecGt3.tawa":"黒マスが横に3マス以上続いています。","csCornerSize.nuribou":"同じ面積の黒マスのカタマリが、角を共有しています。","csdDivide.scrin":"長方形で出来た輪っかに含まれていない長方形があります。","csDivide.shugaku":"通路が分断されています。","csDivide":"黒マスが分断されています。","csDivide8.mochikoro":"孤立した白マスのブロックがあります。","csGt2":"２マスより大きい黒マスのカタマリがあります。","csLoop.parquet":"黒マスがループになっています。","csLt2":"１マスだけの黒マスのカタマリがあります。","csNoLevel.aquarium":"ひとつながりの水のマスの水位が等しくなっていません。","csNoSupport.aquarium":"水の入っているマスの隣や下のマスが空白になっています。","csNotBottom.dosufuwa":"鉄球の下の鉄球や黒マスがありません。","csNotOnShade.tawa":"黒マスの下に黒マスがありません。","csNotRect":"黒マスのカタマリが正方形か長方形ではありません。","csNotSquare":"正方形でない黒マスのカタマリがあります。","csRect.mochikoro":"四角形になっている黒マスのブロックがあります。","csUpper.stostone":"ブロックを落とした後に黒マスが盤面の上半分に残っています。","csWidthGt1.nuribou":"「幅１マス、長さ１マス以上」ではない黒マスのカタマリがあります。","cu2x2":"2x2の白マスのカタマリがあります。","cu3.aqre":"白マスが4マス連続しています。","cuConnOut":"盤面の辺に到達できない白マスがあります。","cuDivide":"白マスが分断されています。","cuDivideRB":"白マスが分断されています。","cuLoop":"白マスで輪っかができています。","cuLower.stostone":"ブロックを落とした後の空間が盤面の下半分にあります。","cuNoLine.icebarn":"通過していない白マスがあります。","cuNoLine.nagenawa":"白マスの上に線が引かれていません。","cuNotRect.mochikoro":"四角形でない白マスのブロックがあります。","cuNotRectx.shakashaka":"白マスが長方形(正方形)ではありません。","cuNotSquare":"白マスが正方形ではありません。","cuNotTop.dosufuwa":"風船の上に風船や黒マスがありません。","cuOutside.castle":"白マスがループの外にあります。","cuRect":"白マスのカタマリが正方形または長方形になっています。","cxAdjacent.crossstitch":"線が交差するマスが隣り合っています。","exNoMatch.nonogram":"黒マスの数が正しくありません。","exShadeNe.aquarium":"行または列内にある水のマスの数と外の数字が異なります。","exShadeNe.snake":"行または列内にあるスネークのマスの数と外の数字が異なります。","exTentNe.tents":"行または列にあるテントの数が正しくありません。","futonHalf.shugaku":"布団が2マスになっていません。","futonMidPos.shugaku":"通路に接していない布団があります。","gateRedup.slalom":"線が２回以上通過している旗門があります。","gateUnpass.slalom":"線が通過していない旗門があります。","goishiRemains.goishi":"拾われていない碁石があります。","haisuError.haisu":"線が領域に入った回数と数字が異なります。","haisuSG.haisu":"線がSまたはGを通りすぎています。","invalid":"不明なエラーです","kitamakura.shugaku":"北枕になっている布団があります。","laCurve.herugolf":"ボールが移動途中に曲がっています。","laCurve":"曲がっている線があります。","laIsolate.bonsan":"○につながっていない線があります。","laIsolate.herugolf":"ボールにつながっていない線があります。","laIsolate.rectslider":"黒マスにつながっていない線があります。","laIsolate.yosenabe":"具材につながっていない線があります。","laIsolate":"アルファベットにつながっていない線があります。","laLenNe.herugolf":"ボールが移動途中に止まっています。","laLenNe":"数字と線の長さが違います。","laLoop":"線がループになっています。","laMoveOver.herugolf":"ボールが指示された打数を超えて動いています。","laOnBorder":"線が境界線をまたいでいます。","laOnHole.herugolf":"ホールの上を線が通過しています。","laOnNum.armyants":"数字の上を線が通過しています。","laOnNum.bonsan":"○の上を線が通過しています。","laOnNum.herugolf":"ボールの上を線が通過しています。","laOnNum.rectslider":"黒マスの上を線が通過しています。","laOnNum.yosenabe":"具材の上を線が通過しています。","laOnNum":"アルファベットの上を線が通過しています。","laWaterHazard.herugolf":"ウォーターハザードになっています。","lbDivide.amibo":"棒が１つに繋がっていません。","lbIsolate.walllogic":"数字につながっていない線があります。","lbLenGt.amibo":"白丸から出る棒の長さが長いです。","lbLenLt.amibo":"白丸から出る棒の長さが短いです。","lbLoop.amibo":"棒で輪っかができています。","lbNotCrossEq.amibo":"同じ長さの棒と交差していません。","lcCurveGt1.ichimaga":"線が2回以上曲がっています。","lcCurveGt2.kusabi":"線が2回以上曲がっています。","lcCurveLt2.kusabi":"線が2回曲がっていません。","lcCurveNe.firefly":"線の曲がった回数が数字と違っています。","lcDeadEnd":"線が途中で途切れています。","lcDivided":"線が全体でひとつながりになっていません。","lcInvalid.kusabi":"繋がる丸が正しくありません。","lcInvBlack.wblink":"黒丸同士が繋がっています。","lcInvDirB.firefly":"黒点同士が線で繋がっています。","lcInvDirW.firefly":"白丸の、黒点でない部分どうしがくっついています。","lcInvWhite.wblink":"白丸同士が繋がっています。","lcIsolate.arukone":"アルファベットにつながっていない線があります。","lcIsolate.kusabi":"○につながっていない線があります。","lcIsolate":"数字につながっていない線があります。","lcLenInvDiff.kusabi":"線の長短の指示に反してます。","lcLenInvNe.kusabi":"線の長さが同じではありません。","lcNotKusabi.kusabi":"丸がコの字型に繋がっていません。","lcOnNum.arukone":"アルファベットの上を線が通過しています。","lcOnNum.kusabi":"○の上を線が通過しています。","lcOnNum":"数字の上を線が通過しています。","lcSameNum.ichimaga":"同じ数字同士が線で繋がっています。","lcTripleNum.arukone":"3つ以上のアルファベットがつながっています。","lcTripleNum.kusabi":"3つ以上の○が繋がっています。","lcTripleNum.wblink":"3つ以上の○が繋がっています。","lcTripleNum":"3つ以上の数字がつながっています。","lnAdjacent.tontti":"繋がっている線の形が同じです。","lnBranch":"分岐している線があります。","lnCross.crossstitch":"線が自己交差しています。","lnCross":"線が交差しています。","lnCrossExCir.pipelink":"○の部分以外で線が交差しています。","lnCrossExIce":"氷の部分以外で線が交差しています。","lnCrossExMk":"十字以外の場所で線が交差しています。","lnCrossOnNum.pipelink":"○の部分で線が交差しています。","lnCrossPencil.pencils":"線が鉛筆の軸と交差しています。","lnCurveOnCir.pipelink":"○の部分で線が曲がっています。","lnCurveOnIce":"氷の部分で線が曲がっています。","lnDeadEnd":"途中で途切れている線があります。","lnDeadEndAround.rassi":"線の端がたてよこななめに隣り合っています。","lnExTri.reflect":"線が三角形を通過していません。","lnIsolate.bdwalk":"線がすべての数字とエレベーターを通っていません。","lnIsolate.country":"線の通っていない○があります。","lnIsolate.kouchoku":"線がマークのないところから出ています。","lnIsolate.tajmahal":"正方形の中心に黒丸がありません。","lnLenGt.reflect":"三角形の数字とそこから延びる線の長さが一致していません。","lnLengthGt.pencils":"鉛筆から引かれた線が軸よりも長くなっているところがあります。","lnLengthLt.pencils":"鉛筆から引かれた線が軸よりも短くなっているところがあります。","lnLenLt.reflect":"三角形の数字とそこから延びる線の長さが一致していません。","lnMultipleTips.pencils":"2つ以上の芯に繋がっている線があります。","lnNotCrossMk":"十字の場所で線が交差していません。","lnNoTip.pencils":"芯に繋がっていない線があります。","lnNotRect.nagenawa":"長方形か正方形でない輪っかがあります。","lnNotSq.tajmahal":"線が正方形になっていません。","lnOnCenter.midloop":"線分の中点になっていない黒丸があります。","lnOnClue.tajmahal":"正方形の頂点が他の黒丸に接しています。","lnOnCorner.tajmahal":"頂点が線の途中で接しています。","lnOnDot.midloop":"ループが通過していない黒丸があります。","lnOnShade.dotchi":"線が●のマスを通っています。","lnOnShade":"黒マスの上に線が引かれています。","lnOverlap.kouchoku":"線が同一直線上で重なっています。","lnOverlap.tontti":"線がヒントマスを通っています。","lnPassOver.kouchoku":"線がマークを通過しています。","lnPlLine":"線がひとつながりではありません。","lnPlLoop.crossstitch":"ループが2つではありません。","lnPlLoop.tajmahal":"正方形がひとつながりになっていません。","lnPlLoop":"輪っかが一つではありません。","lnRightAngle.kouchoku":"線が直角に交差していません。","lnStarNe.starbattle":"1つの行に入る星の数が間違っています。","lnWrongAngle.kouchoku":"直線のなす角度がマークと違います。","lookairBC.lookair":"同じ大きさの黒マスのカタマリの間に他の黒マスのカタマリがありません。","lpNoNum.onsen":"○を含んでいないループがあります。","lpNoNum.pipelink":"○を含んでいないループがあります。","lpNumGt2.onsen":"数字が2つ以上含まれたループがあります。","lpPlNum.pipelink":"異なる数字を含んだループがあります。","lpSepNum.pipelink":"同じ数字が異なるループに含まれています。","lrAcrossArrow.nagare":"線が矢印で直進していません。","lrAcrossWind.nagare":"線が風で流されずに横切っています。","lrAgainstArrow.nagare":"線が矢印に反して進んでいます。","lrAgainstWind.nagare":"線が風上に向かって進んでいます。","lrDeadEnd.icebarn":"途中で途切れている線があります。","lrOffField.icebarn":"盤面の外に出てしまった線があります。","lrOrder.icebarn":"数字の通過順が間違っています。","lrOrder.slalom":"旗門を通過する順番が間違っています。","lrReverse.icebarn":"矢印を逆に通っています。","mashuBCvNbr":"黒丸の隣で線が曲がっています。","mashuBStrig":"黒丸の上で線が直進しています。","mashuOnLine":"線が上を通っていない丸があります。","mashuWCurve":"白丸の上で線が曲がっています。","mashuWStNbr":"白丸の隣で線が曲がっていません。","ms2x2.yinyang":"2x2のくろまるのカタマリがあります。","msConsecGt3.nondango":"くろまるが3つ以上連続しています。","msDivide.yinyang":"タテヨコにつながっていないくろまるがあります。","mu2x2.yinyang":"2x2のしろまるのカタマリがあります。","muConsecGt3.nondango":"しろまるが3つ以上連続しています。","muDivide.yinyang":"タテヨコにつながっていないしろまるがあります。","nm2x2.nanro":"数字が2x2のカタマリになっています。","nmAdjacent.hanare":"数字がタテヨコに連続しています。","nmAdjacent":"同じ数字がタテヨコに連続しています。","nmAkariNe.lightup":"数字のまわりにある照明の数が間違っています。","nmAround.hakoiri":"同じ記号がタテヨコナナメに隣接しています。","nmAround.kakuru":"同じ数字がタテヨコナナメに隣接しています。","nmAround.ripple":"同じ数字がタテヨコナナメに隣接しています。","nmBorderNe.nawabari":"数字の周りにある境界線の本数が違います。","nmCircleNe.crossstitch":"丸囲みの数字と、線が通る格子点の数が異なります。","nmConnBarWrong":"黒マスに繋がる線の数が正しくありません。","nmConnDiff.arukone":"異なるアルファベットがつながっています。","nmConnDiff.kouchoku":"異なる文字が直接繋がっています。","nmConnDiff.numlin":"異なる数字がつながっています。","nmConnected.bonsan":"○が繋がっています。","nmConnected.herugolf":"ボールが繋がっています。","nmConnected.rectslider":"黒マスが繋がっています。","nmConnected.yosenabe":"具材が繋がっています。","nmConnected":"アルファベットが繋がっています。","nmConnNoWall.walllogic":"数字に線が繋がっていません。","nmConnWallGt.walllogic":"数字に繋がる線が長いです。","nmConnWallLt.walllogic":"数字に繋がる線が短いです。","nmCountGt.nanro":"入っている数字の数が数字より多いです。","nmCountGt.simplegako":"同じ行と列にある同じ数字の個数がそのマスの数字より大きいです。","nmCountLt.nanro":"入っている数字の数が数字より少ないです。","nmCountLt.simplegako":"同じ行と列にある同じ数字の個数がそのマスの数字より小さいです。","nmDiffDistNe.hanare":"２つの数字の差とその間隔が正しくありません。","nmDiffDistNe.putteria":"２つの数字の差とその間隔が正しくありません。","nmDivEq2.kropki":"黒まるのない両側の数字が2倍になっています。","nmDivide.hakoiri":"タテヨコにつながっていない記号があります。","nmDivide":"タテヨコにつながっていない数字があります。","nmDivNe2.kropki":"黒まるの両側の数字が2倍ではありません。","nmDupRow.easyasabc":"同じ列に同じアルファベットが入っています。","nmDupRow":"同じ列に同じ数字が入っています。","nmDupRowCol.toichika2":"同じ数字が、同じ行にも同じ列にもあります。","nmHatenaNe.crossstitch":"丸囲みの？の周囲に、線が通っていません。","nmIgnored.herugolf":"ボールの入っていないホールがあります。","nmIneqNe.minarism":"不等号と数字が矛盾しています。","nmLineGt.hashikake":"数字につながる橋の数が違います。","nmLineGt1.amibo":"白丸に線が2本以上つながっています。","nmLineLt.hashikake":"数字につながる橋の数が違います。","nmLineLt2.kouchoku":"線が2本出ていない丸があります。","nmLineNe.ichimaga":"○から出る線の本数が正しくありません。","nmLineNe.slither":"数字の周りにある線の本数が違います。","nmLt1.lapaz":"数字が1x2のブロックに含まれていません。","nmMinesNe.mines":"タテヨコナナメに接する爆弾の数が数字と異なります。","nmMissing.lohkous":"領域内に数字と同じ長さのセグメントがありません。","nmMissRow.easyasabc":"列に入っていないアルファベットがあります。","nmMoveNe.tren":"数字がクルマの動けるマス数と異なります。","nmNoLine.amibo":"白丸に線がつながっていません。","nmNoLine.firefly":"ホタルから線が出ていません。","nmNoLine.ichimaga":"○から線が出ていません。","nmNoLine.kusabi":"どこにもつながっていない○があります。","nmNoLine.wblink":"○から線が出ていません。","nmNoLine":"どこにもつながっていない数字があります。","nmNoMove.bonsan":"○から線が出ていません。","nmNoMove.rectslider":"黒マスから線が出ていません。","nmNoSideShade.tasquare":"□に黒マスが接していません。","nmNotConsecNeighbors.ripple":"連続する数字がタテヨコに隣り合っていません。","nmNotConseq.kouchoku":"同じ文字がひとつながりになっていません。","nmNotLink.kazunori":"同じ数字が部屋の中でつながっていません。","nmNumberNe.sukoro":"数字と、その数字の上下左右に入る数字の数が一致していません。","nmNumberNe.sukororoom":"数字と、その数字の上下左右に入る数字の数が一致していません。","nmNumberNe.view":"数字と、その数字の上下左右に入る数字の数が一致していません。","nmOutOfBk.yosenabe":"鍋に入っていない具材があります。","nmOutOfHole.herugolf":"ホールに入っていないボールがあります。","nmOutsidePencil.pencils":"軸の中に入っていない数字があります。","nmOutsideTren.tren":"クルマに含まれていない数字があります。","nmPillowGt.shugaku":"柱のまわりにある枕の数が間違っています。","nmPillowLt.shugaku":"柱のまわりにある枕の数が間違っています。","nmProduct.factors":"ブロックの数字と数字の積が同じではありません。","nmSame2x2.kazunori":"同じ数字が2x2のカタマリになっています。","nmShade5Ne.lookair":"数字およびその上下左右にある黒マスの数が間違っています。","nmShadeGt.interbd":"タテヨコに接する黒マスの数が正しくありません。","nmShadeLt.interbd":"タテヨコに接する黒マスの数が正しくありません。","nmShadeNe.lapaz":"同じ行または同じ列にある黒マスの数が正しくありません。","nmShadeNe.paintarea":"数字の上下左右にある黒マスの数が間違っています。","nmShadeNe.tawa":"数字の周りに入っている黒マスの数が違います。","nmShadeViewNe.canal":"タテヨコに接する黒マスの個数の和が数字と異なります。","nmShapeNe":"ブロックの形と文字が一致しません。","nmShootShadeNe1.kurochute":"数字の数だけ離れたマスのうち、1マスだけ黒マスになっていません。","nmSightNe.easyasabc":"アルファベットが最も手前にありません。","nmSightNe.skyscrapers":"見えるビルの数が正しくありません。","nmSizeGt.pencils":"中の数字よりも短い軸があります。","nmSizeLt.pencils":"中の数字よりも長い軸があります。","nmSmallGap.ripple":"数字よりもその間隔が短いところがあります。","nmSubEq1.kropki":"白まるのない両側の数字の差が1になっています。","nmSubNe.minarism":"丸付き数字とその両側の数字の差が一致していません。","nmSubNe1.kropki":"白まるの両側の数字の差が1ではありません。","nmSum.doppelblock":"黒マスに挟まれた数字の和と、枠外の数字が一致していません。","nmSumNe.kazunori":"丸付き数字とその両側の数字の和が一致していません。","nmSumOfDiff.bosanowa":"数字とその隣の数字の差の合計が合っていません。","nmSumOrderRowNe.japanesesums":"黒マスを挟まずに連続した数字の和の順番が、枠外の数字と一致していません。","nmSumRowNe.kakuro":"数字の下か右にある数字の合計が間違っています。","nmSumRowShadeNe.box":"数字と黒マスになった数字の合計が正しくありません。","nmSumSizeNe.kurotto":"隣り合う黒マスの個数の合計が数字と違います。","nmSumSizeNe.tasquare":"数字とそれに接する黒マスの大きさの合計が一致しません。","nmSumViewNe.view":"数字と、他のマスにたどり着くまでのマスの数の合計が一致していません。","nmSumViewNe":"数字と黒マスにぶつかるまでの4方向のマスの合計が違います。","nmTentGt.tents":"木の数よりもテントの数が多い部分があります。","nmTentLt.tents":"木の数よりもテントの数が少ない部分があります。","nmTentNone.tents":"テントが隣り合っていない木があります。","nmTreeNone.tents":"木に接していないテントがあります。","nmTriangleGt.shakashaka":"数字のまわりにある黒い三角形の数が間違っています。","nmTriangleLt.shakashaka":"数字のまわりにある黒い三角形の数が間違っています。","nmTripRow.toichika2":"同じ行または同じ列に、同じ数字が３つ以上あります。","nmUnpass.icebarn":"通過していない数字があります。","nonCirclePromontory.kurodoko":"丸のないマスが岬になっています。","nqAroundDup.kakuru":"初めから出ている数字の周りに同じ数字が入っています。","nqAroundSumNe.kakuru":"初めから出ている数字の周りに入る数の合計が正しくありません。","numNoLine":"線の通っていない数字があります。","objShaded.nurimaze":"オブジェクトが黒マスになっています。","pairedLetterNe.kinkonkan":"光が同じ文字の場所へ到達しません。","pairedNumberNe.kinkonkan":"光の反射回数が正しくありません。","pcMultipleTips.pencils":"2つ以上の芯を持つ鉛筆があります。","ptInPencil.pencils":"芯が他の鉛筆の軸に入り込んでいます。","ptNoLine.pencils":"線が繋がっていない芯があります。","ptNoPencil.pencils":"幅が1の長方形の軸の先端に位置していない芯があります。","rmBranch.scrin":"３つ以上の頂点を共有している長方形があります。","rmDeadend.scrin":"頂点を１つしか共有していない長方形があります。","rmIsolated.scrin":"頂点を全く共有していない長方形があります。","rmRectUnshade.scrin":"輪の中に長方形が出来ています。","routeIgnoreCP.nurimaze":"○がSからGへの経路上にありません。","routePassDeadEnd.nurimaze":"△がSからGへの経路上にあります。","segBlackEq.balance":"黒丸から線の端までの長さが同じになっています。","segDiff.geradeweg":"？に当てはまる数字がありません。","segLong.balance":"線の長さの和が数字より大きいです。","segLong.geradeweg":"線の長さが数字より長いです。","segShort.balance":"線の長さの和が数字より小さいです。","segShort.geradeweg":"線の長さが数字より短いです。","segUnclued.railpool":"線分の長さが数字に一致しません。","segWhiteUneq.balance":"白丸から線の端までの長さが異なっています。","shBranch.snake":"スネークが分岐しています。","shDiag.snake":"スネークが自分自身とタテヨコナナメに接しています。","shEndpoint.snake":"頭または尾になっていない黒丸があります。","shIncorrect.curvedata":"記号の形に合っていない線があります。","shInside":"黒マスがループの中にあります。","shLoop.snake":"頭または尾がありません。","shMidpoint.snake":"胴体になっていない白丸があります。","shMultiple.curvedata":"2つ以上の記号マスを通る線があります。","shNoDivide.interbd":"黒マスが2つ以上の国と接していません。","shNone.curvedata":"記号マスを通っていない線があります。","shSurrounded.interbd":"黒マスが2つ以上の国と接していません。","slLoop.gokigen":"斜線で輪っかができています。","slLoopGiri.gokigen":"'切'が含まれた線が輪っかになっています。","slNotLoopWa.gokigen":"'輪'が含まれた線が輪っかになっていません。","snakeAttack.hebi":"蛇の視線の先に別の蛇がいます。","starAround.starbattle":"星がタテヨコナナメに隣接しています。","stInvalid.icebarn":"スタート位置を特定できませんでした。","stLineNe2.slalom":"○から線が２本出ていません。","stNoLine.icebarn":"INに線が通っていません。","stopHalfway.roma":"ゴールにたどり着かないセルがあります。","tapaloopError.tapaloop":"線の長さと数字が一致していません。","tentAround.tents":"テント同士が接しています。","tooManyUnspecified.railpool":"線分の長さの種類が多すぎます。","tooFewUnspecified.railpool":"線分の長さの種類が少なすぎます。","unusedCell":"何も書かれていないマスがあります。","lcBalance.coffeemilk":"グループに含まれる白マルと黒マルの数が異なります。","lcInvalid.coffeemilk":"白マルと黒マルが直接線で結ばれています。","lcGrayGt.coffeemilk":"グループに2つ以上の灰マルがあります。","lnHasLoop.lither":"ループになっている部分があります。","lnNoBranchOrTerm.lither":"点が枝分かれする節点にも葉にもなっていません。","lnSnLine.lither":"木が１つしかありません。","nmLineNe.lither":"数字の周りにある線の本数が違います。","tapaloopError.disloop":"矢印の指すマスから先の線の長さが正しくありません。","csDistance.nothree":"連続した黒マスが等間隔に3つ以上並んでいます。","csGt1.nothree":"小さな丸が2マス以上の黒マスと接しています。","csLt1.nothree":"小さな丸が黒マスと接していません。","anLineLt.disloop":"矢印が指すマスから線が伸びていません。","bdPassStar.nuriuzu":"星と黒マスが重なっています。","nmBranch.snakepit":"スネークが枝分かれしています。","nmDiag.snakepit":"スネークが自分自身とナナメに接触しています。","nmEndpoint.snakepit":"丸のマスがスネークの頭か尾になっていません。","nmEqOne.snakepit":"1マスの領域があります。","nmLoop.snakepit":"スネークに端がありません。","nmMidpoint.snakepit":"灰色のマスがスネークの端になっています。","nmSame2x2.snakepit":"スネークが自分自身とタテヨコに接しています。","bkNotSquare":"領域が正方形ではありません。","anShadeNe.yajisoko":"箱の数が正しくありません。","bkSideNe.squarejam":"数字と領域の大きさが異なります。","laOnNum.yajisoko":"線が箱を通り過ぎています。","nmConnected.yajisoko":"箱どうしが線でつながっています。","nmNotSeq.numrope":"線上の数字が連続していません。","nmRange.kakuru":"数字が9より大きいです。","nmRange.sananko":"数字が3より大きいです。","nmSubNe1.numrope":"隣り合う数字の差が1ではありません。","nmUnshadeAdjNe.context":"タテヨコに隣り合う黒マスの数が数字と異なります。","arDistanceGt.pentopia":"矢印のない方向に、近すぎる黒マスがあります。","arDistanceNe.pentopia":"矢印の指す方向の黒マスまでの距離が異なります。","arNoShade.pentopia":"矢印の指す方向に黒マスがありません。","csOnArrow":"矢印のあるマスが黒マスになっています。","nmShadeDiagNe.context":"ナナメに隣り合う黒マスの数が数字と異なります。","shDiag":"黒マスのカタマリがナナメに接しています。","nmSightNe.roundtrip":"最も近い線の長さが正しくありません。","bdUnequal.antmill":"バツ印に隣接するマスのうち１つだけが黒マスになるようにします。","bdEqual.antmill":"正方形に隣接するマスが同色になっていません。","lnOnShade.yajisoko":"線が黒マスの上を通っています。","lnNoFish.anglers":"魚のいない線があります。","ceEmpty.kaidan":"空白のマスがあります。","lnNoNum":"数字のない線があります。","bkCircleNe.familyphoto":"数字と人数が一致していません。","bkMirror.mirrorbk":"鏡を軸に、ブロックが線対称になっていません。","csAdjacent.kaidan":"「〇」がタテヨコに連続しています。","csGt1.takoyaki":"両端を除く線上に丸が2つ以上あります。","cuEndpoint.takoyaki":"線の両端に丸がありません。","bkLadderNe.ladders":"数字とはしごの数が一致していません。","ceInvalidLadder.ladders":"異なる領域をつないでいないはしごがあります。","ceEmpty.lightshadow":"黒マスでも白マスでもないマスがあります。","ceNoEnd.kaidan":"長方形が完成していません。","cuDivide.kaidan":"長方形が辺を通してひとつながりになっていません。","bkSizeGt.icewalk":"数字が通っている白色のマスの数よりも少なくなっています。","bkSizeGt.lightshadow":"数字がブロックに含まれるマスの数よりも少なくなっています。","bkSizeGt2.lollipops":"キャンディどうしが隣り合っています。","bkSizeLt.icewalk":"数字が通っている白色のマスの数よりも多くなっています。","bkSizeLt.lightshadow":"数字がブロックに含まれるマスの数よりも多くなっています。","bkSizeLt2.lollipops":"キャンディが完成していません。","csLt1.takoyaki":"両端を除く線上に丸がありません。","baDir.lollipops":"｜か―の向きが違います。","lcOnNum.anglers":"線が魚を通り過ぎています。","nmShadeLt.kaidan":"数字のまわりにある丸の数が間違っています。","lnNoBorder.ladders":"はしごの両端が太線になっていません。","nmShadeGt.kaidan":"数字のまわりにある丸の数が間違っています。","lnAdjacent.ladders":"はしごどうしがつながっています。","lnConsecutive.kaidan":"隣り合う長方形の長さの差が1になっていません。","lnDivide.familyphoto":"隣り合った人が異なる写真に写っています。","lnLenGt.anglers":"線が長すぎます。","lnPlLoop.ladders":"すべての部屋がはしごでつながっていません。","nmDupRow.takoyaki":"同じ線に属する丸どうしが同じ列や行にあります。","nmDupRow.lollipops":"同じ記号のあいだに別の記号がありません。","cuRoomLt.akichi":"数字と等しいサイズの白マスのかたまりがありません。","cuRoomGt.akichi":"白マスのかたまりの面積が数字よりも大きくなっています。","lnEnds.kaidan":"幅1マスの辺どうしが隣り合っています。","laCurve.kaidan":"長方形どうしが重なっています。","lnOnShade.kaidan":"長方形と「〇」が重なっています。","lnLenLt.anglers":"線が短すぎます。","bdUnused.mirrorbk":"鏡に接する2マスが同じブロックに含まれています。","bkSizeGt.martini":"数字が白丸の個数より小さいです。","bkSizeLt.martini":"数字が白丸の個数より大きいです。","ceDirection.guidearrow":"矢印の方向に出発しても★にたどり着けません。","ceIntersect.nanameguri":"線がナナメの太線をまたいでいます。","lnIsolate.icewalk":"線が数字を通っていません。","bdUnusedCircle.wafusuma":"丸がある辺に線が引かれていません。","bkNumGe3.news":"領域内に文字が3つ以上あります。","bkNumLt2.news":"領域内に文字が1つしかありません。","bkOverNum":"領域に含まれる数字の数が多すぎます。","bdUnused.fillomino":"線が余分になっています。","lnCurveOnNum":"線が駅のマスで曲がっています。","lnIsolate.anglers":"線が魚のマスを通っていません。","lnIsolate.nanameguri":"線がナナメの太線があるマスを通っていません。","laIsolate.oyakodori":"余分な線があります。","laOnNum.oyakodori":"線が鳥を通り過ぎています。","laUnshadeNoBorder.oyakodori":"親鳥が仕切りをまたいでいません。","nmGt2.oyakodori":"巣に鳥が3匹以上います。","nmLt2.oyakodori":"巣に鳥が1匹しかいません。","nmNotConseqFull.trainstations":"数字から次の数字へと線が通っていません。","nmOutOfBk.oyakodori":"鳥が巣にいません。","nmNoLine.coffeemilk":"白マルまたは黒マルが、線で結ばれていません。","nmRange.trainstations":"数字が1から順になっていません。","nmSizeNe.tontonbeya":"部屋の中で、各記号の個数が同じではありません。","arNotRelative.news":"文字の位置関係が正しくありません。","blRemLength":"数字が、次の領域内を連続して通過するマス数と異なっています。","nmSumNe.wafusuma":"数字が、丸に接する2部屋のマス数の合計になっていません。","nmNotConseq.trainstations":"数字の順番通りに線が通っていません。","laOnIce.oyakodori":"線が巣を通り過ぎています。","laShadeOnBorder.oyakodori":"雛鳥が仕切りをまたいでいます。","nmAdjacentLt2.tontonbeya":"1つの部屋内にしかつながらないカタマリがあります。","nmConnected.oyakodori":"鳥どうしがつながっています。","nmAdjacentGt2.tontonbeya":"同じ記号のカタマリであって、2つ以上のカタマリとつながっているものがあります。","nmDivide.tontonbeya":"同じ記号が部屋の中でタテヨコにひとつながりになっていません。","nmNumberEq.oyakodori":"同じ種類の鳥が同じ巣に入っています。","bkShadeDivide.invlitso":"白マスが領域内でタテヨコに連なっていません。","bkShadeGt4.invlitso":"領域に白マスが４つ以下しかありません。","bkShadeLt4.invlitso":"領域に白マスが５つ以上あります。","nmVertexNe.vslither":"ループが通る頂点の数が正しくありません。","csLt4":"黒マスの数が４より少ないです。","csGt4":"黒マスの数が４より多いです。","exPlusNe.magnets":"列に入る「＋」の数が正しくありません。","exMinusNe.magnets":"列に入る「－」の数が正しくありません。","nmAdjacent.magnets":"同じ極が隣り合っています。","nmCircleNe.brownies":"数字が、タテヨコナナメに接する○の数と一致していません。","bankGt.battleship":"艦の数が多すぎます。","bankLt.battleship":"配置されていない艦があります。","bkCircleNe.fracdiv":"数字が、ブロック内の(黒丸の数)÷(マスの数)と一致していません。","bkNumLt2.magnets":"磁石が一方の極しかありません。","nmAdjDiff.magnets":"磁石が同じ極で隣り合っていません。","nmTouchNe.tslither":"マスの周りの頂点や辺にループが訪れる回数が正しくありません。","shDiag.battleship":"異なる艦がナナメに接しています。","bkMissingNum":"ブロックにすべての数字が入っていません。","bkNumGt2.sashikazune":"１つのブロックに数字が３個以上入っています。","exShadeNe.battleship":"列に入る艦の数が正しくありません。","bkPinNe.heyapin":"部屋にあるピンの数が正しくありません。","bkNumGt2.magnets":"領域の中に同じ極が2つ以上入っています。","nmDistNe.sashikazune":"数字が、角からのマス数と一致していません。","cxOverlap.heyapin":"ピンが複数の部屋にまたがっていません。","bkSizeGt2.waterwalk":"ループが水のマスを3マス以上連続して通過しています。","bkSizeGt.aquapelago":"数字とカタマリのマス数が異なります。","bkSizeLt.aquapelago":"数字とカタマリのマス数が異なります。","nmMixed.aquapelago":"カタマリが異なる数字を含んでいます。","ceUnused.kinkonkan":"光の当たらない鏡があります。","nmLineGt.kaidan":"長方形の置かれるマスの数が正しくありません。","cuDivide.wittgen":"机の置かれていないマスが分断されています。","cbNoLine.nothing":"全く線が通らないブロック同士が辺で接しています。","nmLineLt.kaidan":"長方形の置かれるマスの数が正しくありません。","ceOverlap.tachibk":"左右の盤面の同じ位置に当たるマスが、同じマス数のブロックになっています。","bkLineNe.nothing":"ブロックの一部のマスにしか線が通っていません。","lnLengthNe3.wittgen":"長方形が3マスではありません。","ceDirection.mukkonn":"線の長さが数字と異なっています。","bsEqShade.mannequin":"黒マスどうしの距離が隣り合う領域で一致しています。","bkShadeDistNe.mannequin":"黒マスどうしの距離が数字と異なります。","cbUnshade":"太線をまたいで黒マスが隣り合っています。","arNoLineSeen":"矢印の指す方向に線がありません。","arDistanceGt.myopia":"最も近い線が、矢印の指していない方向にあります。","arDistanceNe.myopia":"矢印から線までの距離が異なります。","bankNe.tachibk":"左右でブロックの形が違います。","csPieceExtra":"配置すべき艦の周りに誤ったマスがあります。","bankGt.snakeegg":"カタマリが指定された個数よりも多いです。","bankInvalid.snakeegg":"カタマリの大きさが違います。","bankLt.snakeegg":"指定されたカタマリが入っていません。","csMismatch.retroships":"艦が完成していません。","csPieceExtra.retroships":"艦どうしが接しています。","exShadeNe.batten":"黒マスの数が正しくありません。","lnDoubleTurn.firewalk":"線が2回曲がる炎マスの中心が、ループの内側に入っていません。","lnAdjacent.pmemory":"線が自分自身と接しています。","lnStraightOnIce.firewalk":"線が炎マスを直進しています。","nmAdjacent.sananko":"異なるブロックが隣り合っています。","shBranch.bosnianroad":"ループが分岐しています。","shDeadEnd.bosnianroad":"ループが途切れています。","shDiag.batten":"2x2の市松模様に塗られる場所に記号がありません。","shNoDiag.batten":"記号のある場所で盤面が2x2の市松模様に塗られていません。","shNoDiag.pentatouch":"黒点で二つのブロックが接していません。","curvingNoTurns.curving":"曲がらずに丸同士を結ぶ経路があります。","curvingOneTurn.curving":"１回しか曲がらずに丸同士を結ぶ経路があります。","lnCurveOnCir.portal":"数字のないポータルで線が曲がっています。","nmMissRow.alter":"列に記号が1つしか並んでいません。","nmShadeLt.kuromenbun":"シマと接する黒マスの数が違います。","nmSumViewNe.teri":"数字が、取り出せる最大の長方形の面積と一致しません。","nmTripRow.alter":"列に記号が3種類並んでいます。","shDiag.bosnianroad":"ループが自分自身と接しています。","shDiag.pentatouch":"黒点がない場所でブロック同士が接しています。","circleShade.kissing":"バツの書かれたマスに黒マスが入っています。","bankInvalid.battleship":"艦の形が違います。","bkDifferentLines.pmemory":"線の通り方が同じになっていません。","nmDupRow.alter":"列に記号が1種類しか並んでいません。","csMismatch":"配置すべき艦が欠けています。","cs2x2.bosnianroad":"ループが自分自身と辺で接しています。","csGtLimit.kissing":"異なるカタマリが太線のないところで隣り合っています。","haisuError.kaisu":"領域を何回目に通るかと、何個の白マスを通るかの値が異なります。","lnPortalCross.portal":"線がポータルを通り過ぎています。","lnPortalCurve.portal":"ポータルの入口と出口で線の方向が異なります。","anShadeNe.lixloop":"矢印のついた文字が、最も多いものを表していません。","bkNoChain.mrtile":"タイルが、大きさも形も同じものと接していません。","bdUnused.kissing":"太線で異なるカタマリが隣り合っていません。","bkNotRect.zabajaba":"ブロックが1×3マスでも2×2マスでもありません。","bkOverlap.subomino":"隣り合うブロックが、一方が他方を包含する形になっています。","bkSameTouch.zabajaba":"同じ向きのブロック同士が隣り合っています。","nmShadeGt.kuromenbun":"シマと接する黒マスの数が違います。","cePortalMiscount.portal":"同じ番号のポータルが2個ずつになっていません。","csAdjacent.fakearrow":"黒く塗られた矢印が隣り合っています。","lrFollowsFake.fakearrow":"間違っていない矢印が黒く塗られています。","bkShadeGe2.fakearrow":"間違っている矢印が部屋に2つ以上あります。","bkNoShade.fakearrow":"間違っている矢印が部屋にありません。","bkDifferentShape.nuritwin":"同じ領域にある2つのブロックの大きさが異なります。","arCountLt.arrowflow":"数字に向けられた矢印の数が少なすぎます。","nmAdjacent.arrowflow":"同じ向きの矢印が隣接しています。","arCountGt.arrowflow":"数字に向けられた矢印の数が多すぎます。","lnAdjacent.tjunction":"同じ方向の枝分かれした線が隣接しています。","bkMaxSizeNe.tilecity":"県の中で最も大きい市の面積と数字が違います。","bkSizeNe.balloon":"風船の大きさと数字が一致していません。","bkUnitNe2.nuritwin":"領域に置かれているブロックの数が2つではありません。","lcDivided.tjunction":"線が分断されています。","csSameJunction":"黒マスが同じ方向をした複数の枝分かれした線に触れています。","haisuSG.recoil":"菱形から複数本の線が伸びています。","nmOutside":"羊が輪っかの外にいます。","lnNoBranch.tjunction":"枝分かれした線が引かれていません。","lpNumGt2.orbital":"ループが2つ以上の黒丸を囲んでいます。","nmInside":"狼が輪っかの中にいます。","nmNoOrbit.orbital":"黒丸がループの中に入っていません。","lcIsolate.balloon":"数字が線で繋がれていません。","lnAdjacent.balloon":"線がループして戻っています。","lnNoIce.balloon":"線が風船に繋がれていません。","bkNotAllMSPassed.dotchi2":"線が全ての黒真珠を通っていません。","bkNotAllMUPassed.dotchi2":"線が全ての白真珠を通っていません。","bkNotClosed.balloon":"風船が線で囲まれていません。","bkNotRect.balloon":"風船が長方形になっていません。","objShaded.tilecity":"数字が黒く塗られています。","bkLineGt1.balloon":"風船が複数の線で繋がれています。","bkLineLt1.balloon":"風船が線で繋がれていません。","anShadeNe.outofsight":"矢印が自身と同じ色のシンボルを指しています。","nmOrbitNe.orbital":"ループの中の数字と線が通る白丸の数が一致していません。","nmPlOrbit.orbital":"同じ黒マスが複数の線の内側に入っています。","arAdjPair.yajirushi2":"対になる矢印同士が隣接しています。","bsSameNum.tilecity":"1つの県の中に複数の同じ面積の市があります。","lnPlLoop.forestwalk":"輪っかが1つではありません。","nmShadeEq.retsurin":"タテ列とヨコ列それぞれに含まれる黒マスの数が両方とも数字と同じです。","csGt1.sumiwake":"○に接している黒マスの数が1つより多いです。","csLt1.sumiwake":"○に黒マスが接していません。","lnNoBranch.forestwalk":"森を通る線が枝分かれになっていません。","lnOnShade.recoil":"線が障害物を通っています。","csLt2.sumiwake":"●に接している黒マスの数が2つではありません。","nmShadeNe.retsurin":"タテ列またはヨコ列に含まれる黒マスの数がどちらも数字と一致していません。","blLineNe.wataridori":"鳥の持つ数字と線の通った国の数が一致しません。","ceNoBomb.timebomb":"爆弾で壊されない岩があります。","lnBranch.forestwalk":"線が森の外で分岐しています。","lnAdjacent.timebomb":"異なる爆弾の移動経路が隣り合っています。","lnNotValid.recoil":"線が障害物の置かれないマスの通り方をしています。","bsNoSequence.tilecity":"県が、1からその県の最大面積の市までの全ての大きさの市を含んでいません。","cuNotPointed.yajirushi":"矢印にはさまれていない白マスがあります。","bkSize1.archipelago":"他の島と接していない島があります。","bsNoSequence.archipelago":"1つの群島に、1マスから最大のマス数の島までの、各マス数の島々が含まれていません。","bsSameNum.archipelago":"1つの群島に同じ大きさの島が2つ以上含まれています。","csDotBlack":"黒丸に接する黒マスの数が白マスの数を上回っていません。","csDotGray":"灰色の丸に接する白マスの数と黒マスの数が同じではありません。","csDotWhite":"白丸に接する白マスの数が黒マスの数を上回っていません。","lcCurveNe.mintonette":"線が曲がる回数が数字と違います。","anTurn.turnaround":"線が曲がる回数と数字が違います。","bkNoNum.narrow":"マークが入っていない領域があります。","bkNumGe2.narrow":"1つの領域に2つ以上のマークが入っています。","bkSameShape.narrow":"同じマークの入った2つの領域が同じ形をしています。","nmSame2x2.narrow":"2×2の白マスが同じマークの入った領域にあります。","csGtN.isowatari":"黒マスのカタマリの大きさが指定された数字より大きいです。","csLtN.isowatari":"黒マスのカタマリの大きさが示された数字より小さいです。","lcIsolate.uturns":"2つの灰色の丸が線で繋がれていません。","lcOnNum.uturns":"線が灰色の丸を通り過ぎています。","lcNotUTurns.uturns":"線が2つの丸の間で同じ方向に2回曲がっていません。","lnOnWhite.uturns":"線が白丸を経由地点としていません。","bdPierceGt1.blindrush":"ひとつながりになった壁が2回以上突き破られています。","bdPierceLt1.blindrush":"ひとつながりになった壁が一度も突き破られていません。","laLenNe.blindrush":"丸が壁を突き破った回数と数字が一致していません。","laWallStop.blindrush":"丸が壁にぶつかる前に止まっています。"}
};

// env.js v3.4.0

/**************/
/* 環境の取得 */
/**************/
pzpr.env = (function() {
	var isbrowser = pzpr.Candle.env.browser;
	var UA = isbrowser ? navigator.userAgent : "";

	var ios = UA.indexOf("like Mac OS X") > -1;
	var android = UA.indexOf("Android") > -1;
	var os = {
		iOS: ios,
		Android: android,
		mobile: ios || android
	};

	var FireFoxVersion = (function() {
		if (UA.match(/Firefox\/(\w+(\.\w+)?)/)) {
			var ver = RegExp.$1;
			if (UA.match(/rv\:(\d+(\.\d+)?)/)) {
				if (RegExp.$1 + 0.0 <= 2.1) {
					return RegExp.$1 + 0.0;
				}
			}
			return ver;
		}
		return null;
	})();
	var ChromeVersion = (function() {
		if (UA.match(/Safari\/([\w\.]+)/) && UA.match(/Chrome\/(\w+(\.\w+)?)/)) {
			return RegExp.$1;
		}
		return null;
	})();
	var SafariVersion = (function() {
		if (
			ChromeVersion === null &&
			UA.match(/Safari\/([\w\.]+)/) &&
			UA.match(/Version\/(\w+(\.\w+)?)/)
		) {
			return RegExp.$1;
		}
		return null;
	})();
	var bz = {
		AndroidBrowser: os.Android && SafariVersion,
		Presto: typeof window === "object" && !!window.opera
	};

	var api = {
		touchevent: isbrowser && (!!window.ontouchstart || !!document.createTouch),
		pointerevent: isbrowser && !!window.PointerEvent,
		mspointerevent: isbrowser && !!window.MSPointerEvent,
		lowaccuracy:
			isbrowser &&
			window.matchMedia &&
			!!window.matchMedia("(pointer: coarse)").matches,
		maxWidth:
			isbrowser &&
			(ChromeVersion || 1000) >= 18 &&
			(SafariVersion || 1000) >= 6,
		svgTextLength: !isbrowser || (FireFoxVersion || 1000) >= 25,
		anchor_download:
			isbrowser && document.createElement("a").download !== void 0
	};

	return {
		bz: bz,
		OS: os,
		API: api,
		browser: isbrowser,
		node: pzpr.Candle.env.node
	};
})();

pzpr.lang = (function() {
	var userlang = pzpr.env.node
		? process.env.LANG
		: navigator.browserLanguage || navigator.language || navigator.userLanguage;
	return !userlang || userlang.substr(0, 2) === "ja" ? "ja" : "en";
})();

// event.js v3.4.1

(function() {
	//---------------------------------------------------------------
	// 起動時関連関数
	//---------------------------------------------------------------
	var preinit = true;
	var loadfun = [];
	pzpr.on = function(eventtype, func) {
		if (eventtype === "load") {
			if (preinit) {
				loadfun.push(func);
			} else {
				func();
			}
		}
	};

	//----------------------------------------------------------------------
	// 起動時処理実行処理
	//----------------------------------------------------------------------
	function postload(e) {
		if (navigator && "serviceWorker" in navigator) {
			navigator.serviceWorker.getRegistrations().then(function(registrations) {
				registrations.forEach(function(registration) {
					registration.unregister();
				});

				if (registrations.length > 0 && location) {
					setTimeout(function() {
						location.reload();
					}, 500);
				}
			});
		}

		if (preinit) {
			preinit = false;
			for (var i = 0; i < loadfun.length; i++) {
				loadfun[i]();
			}
			loadfun = [];
		}
	}

	if (!pzpr.env.browser) {
	} else if (document.readyState === "complete") {
		setTimeout(postload, 10);
	} else {
		document.addEventListener("DOMContentLoaded", postload, false);
		window.addEventListener("load", postload, false);
	}

	//---------------------------------------------------------------------------
	// addKeyEvents()  キーボード入力発生時に指定されたパズルへ通知する準備を行う
	// exec????()      各パズルのキー入力へ分岐する
	//---------------------------------------------------------------------------
	var keytarget = null;
	function execKeyDown(e) {
		if (!!keytarget && !!keytarget.key) {
			keytarget.key.e_keydown(e);
		}
	}
	function execKeyUp(e) {
		if (!!keytarget && !!keytarget.key) {
			keytarget.key.e_keyup(e);
		}
	}
	pzpr.on("load", function addKeyEvents() {
		// キー入力イベントの設定
		pzpr.util.addEvent(document, "keydown", pzpr, execKeyDown);
		pzpr.util.addEvent(document, "keyup", pzpr, execKeyUp);
	});

	//---------------------------------------------------------------------------
	// connectKeyEvents()  キーボード入力に関するイベントを指定したパズルへ通知する準備を行う
	//---------------------------------------------------------------------------
	pzpr.connectKeyEvents = function(puzzle) {
		keytarget = puzzle;
	};
})();

// classmgr.js v3.6.0

//---------------------------------------------------------------
// クラス設定用関数など
//---------------------------------------------------------------
pzpr.common = {}; // CoreClass保存用
pzpr.custom = { "": {} }; // パズル別クラス保存用

//----------------------------------------------------------------------------
// ★pzpr.classmgrオブジェクト (クラス作成関数等)
//---------------------------------------------------------------------------
pzpr.classmgr = {
	//---------------------------------------------------------------
	// 共通クラス・パズル別クラスに継承させる親クラスを生成する
	//---------------------------------------------------------------
	makeCommon: function(commonbase) {
		this.createCommon(commonbase);
	},
	createCommon: function(commonbase) {
		for (var key in commonbase) {
			var names = this.searchName(key),
				NewClass = pzpr.common[names.real];
			if (!NewClass) {
				NewClass = this.createClass(pzpr.common[names.base]);
				NewClass.prototype.common = NewClass.prototype;
				NewClass.prototype.pid = "";
			}
			this.extendPrototype(NewClass.prototype, commonbase[key]);
			pzpr.common[names.real] = pzpr.custom[""][names.real] = NewClass;
		}
	},

	//---------------------------------------------------------------
	// includeCustomFileでファイルを読み込んだ後の処理
	//---------------------------------------------------------------
	makeCustom: function(pidlist, custombase) {
		for (var i = 0; i < pidlist.length; i++) {
			var pid = pidlist[i];
			pzpr.custom[pid] = this.createCustom(pid, custombase, pidlist[0]);
		}
	},
	getExtension: function(pid, custombase) {
		var extension = {};
		for (var hashkey in custombase) {
			var proto = custombase[hashkey],
				name = hashkey,
				pidcond = [],
				isexist = false;
			var name = !hashkey.match("#")
				? hashkey
				: hashkey.substr(0, hashkey.indexOf("#"));
			if (name.match("@")) {
				pidcond = name.substr(name.indexOf("@") + 1).split(/,/);
				name = name.substr(0, name.indexOf("@"));
				for (var n = 0; n < pidcond.length; n++) {
					if (pidcond[n] === pid) {
						isexist = true;
						break;
					}
				}
				if (!isexist) {
					continue;
				}
			}
			if (!extension[name]) {
				extension[name] = {};
			}
			for (var key in proto) {
				extension[name][key] = proto[key];
			}
		}
		return extension;
	},
	createCustom: function(pid, custombase, pidbase) {
		var custom = {};
		var extension = this.getExtension(pid, custombase);

		// 追加プロパティが指定されているクラスを作成する
		for (var key in extension) {
			var names = this.searchName(key),
				NewClass = custom[names.real];
			if (!NewClass) {
				NewClass = this.createClass(
					custom[names.base] || pzpr.common[names.base]
				);
				NewClass.prototype.pid = pid;
				NewClass.prototype.pidbase = pidbase;
			}
			this.extendPrototype(NewClass.prototype, extension[key]);
			custom[names.real] = NewClass;
		}

		// 指定がなかった残りの共通クラスを作成(コピー)する
		for (var classname in pzpr.common) {
			if (!custom[classname]) {
				custom[classname] = this.createClass(pzpr.common[classname]);
				custom[classname].prototype.pid = pid;
				custom[classname].prototype.pidbase = pidbase;
			}
		}

		return custom;
	},

	//---------------------------------------------------------------
	// createCommon, createCustomから呼び出される共通処理
	//---------------------------------------------------------------
	searchName: function(key) {
		key = key.replace(/\s+/g, "");
		var colon = key.indexOf(":"),
			basename = "",
			realname = key;
		if (colon >= 0) {
			basename = key.substr(colon + 1);
			realname = key.substr(0, colon);
		}
		return { base: basename || realname, real: realname };
	},
	createClass: function(BaseClass) {
		function NewClass() {}
		if (!!BaseClass) {
			this.extendPrototype(NewClass.prototype, BaseClass.prototype);
		}
		return NewClass;
	},
	extendPrototype: function(NewProto, proto) {
		proto = proto || {};
		for (var name in proto) {
			if (
				proto[name] !== null &&
				typeof proto[name] === "object" &&
				proto[name].constructor === Object
			) {
				if (!NewProto[name]) {
					NewProto[name] = {};
				}
				this.extendPrototype(NewProto[name], proto[name]);
			} else {
				NewProto[name] = proto[name];
			}
		}
	},

	//---------------------------------------------------------------
	// 単体ファイルの読み込み
	// idを取得して、ファイルを読み込み
	//---------------------------------------------------------------
	includeCustomFile: function(pid) {
		var scriptid = pzpr.variety(pid).script;
		if (this.includedFile[scriptid]) {
			return;
		}
		this.includedFile[scriptid] = true;

		var customfile = pzpr.util.getpath() + "./pzpr-variety/" + scriptid + ".js";
		if (pzpr.env.browser && !pzpr.env.node) {
			var _script = document.createElement("script");
			_script.type = "text/javascript";
			_script.src = customfile + "?" + pzpr.version;
			document.getElementsByTagName("head")[0].appendChild(_script);
		} else {
			var exporteddata = require(customfile);
			this.makeCustom(exporteddata[0], exporteddata[1]);
		}
	},
	includedFile: {},

	//---------------------------------------------------------------------------
	// 新しくパズルのファイルを開く時の処理
	//---------------------------------------------------------------------------
	setPuzzleClass: function(puzzle, newpid, callback) {
		if (!pzpr.variety(newpid).valid) {
			puzzle.emit("fail-open");
			throw Error("Invalid Puzzle Variety Selected");
		}

		/* 今のパズルと別idの時 */
		if (puzzle.pid !== newpid) {
			if (!pzpr.custom[newpid]) {
				this.includeCustomFile(newpid);
				if (!pzpr.custom[newpid]) {
					/* Customファイルが読み込みできるまで待つ */
					setTimeout(function() {
						pzpr.classmgr.setPuzzleClass(puzzle, newpid, callback);
					}, 10);
					return;
				}
			}

			/* 各クラスをpzpr.customから設定する */
			this.setClasses(puzzle, newpid);
		}

		callback();
	},

	//---------------------------------------------------------------
	// パズル種類別のクラスをパズルのクラス一覧に設定する
	//      共通クラス        (pzpr.common)
	//   -> パズル種類別クラス (pzpr.custom)
	//   -> パズルが保持するクラス (initialize()の呼び出しやthis.puzzle等がつく)
	// と、ちょっとずつ変わっている状態になります
	//---------------------------------------------------------------
	setClasses: function(puzzle, pid) {
		/* 現在のクラスを消去する */
		puzzle.klass = {};

		var custom = pzpr.custom[pid];
		for (var classname in custom) {
			var PuzzleClass = (puzzle.klass[classname] = function() {
				var args = Array.prototype.slice.apply(arguments);
				if (!!this.initialize) {
					this.initialize.apply(this, args);
				}
			});
			var CustomProto = custom[classname].prototype;
			for (var name in CustomProto) {
				PuzzleClass.prototype[name] = CustomProto[name];
			}
		}

		this.setPrototypeRef(puzzle, "puzzle", puzzle);
		this.setPrototypeRef(puzzle, "klass", puzzle.klass);

		puzzle.pid = pid;
		puzzle.info = pzpr.variety(pid);
	},

	//---------------------------------------------------------------------------
	// パズルオブジェクト下に存在するクラスのprototypeへ一括でプロパティを付加する
	//---------------------------------------------------------------------------
	setPrototypeRef: function(puzzle, name, ref) {
		for (var klassname in puzzle.klass) {
			puzzle.klass[klassname].prototype[name] = ref;
		}
	}
};

// Variety.js v3.4.1

(function() {
	var _info = {},
		_list = [];
	function toPID(name) {
		if (!!_info[name]) {
			return name;
		}
		for (var pid in _info) {
			if (!_info[pid].alias) {
				continue;
			}
			for (var type in _info[pid].alias) {
				if (_info[pid].alias[type] === name) {
					return pid;
				}
			}
		}
		return "";
	}

	var variety = (pzpr.variety = pzpr.genre = function(pid) {
		return _info[toPID(pid)] || { valid: false };
	});
	variety.extend = function(obj) {
		for (var n in obj) {
			this[n] = obj[n];
		}
	};
	variety.extend({
		info: _info,
		toPID: toPID,
		exists: function(name) {
			return variety(name).valid;
		},
		each: function(func) {
			for (var pid in _info) {
				func(pid);
			}
		},
		getList: function() {
			return _list.slice();
		}
	});
	delete variety.extend;

	(function(Genre, obj) {
		for (var pzprid in obj) {
			_info[pzprid] = new Genre(pzprid, obj[pzprid]);
			try {
				Object.freeze(_info[pzprid]);
				Object.freeze(_info[pzprid].exists);
				Object.freeze(_info[pzprid].alias);
			} catch (e) {}
		}
	})(
		// eslint-disable-next-line no-unexpected-multiline
		function Genre(pzprid, datalist) {
			this.valid = true;
			this.pid = pzprid; /* パズルID */
			this.script = !!datalist[4]
				? datalist[4]
				: pzprid; /* スクリプトファイル(クラス) */
			this.ja = datalist[2]; /* 日本語パズル名 */
			this.en = datalist[3]; /* 英語パズル名 */
			this.exists = {
				pzprapp: !!datalist[0],
				kanpen: !!datalist[1],
				pencilbox: !!datalist[1]
			};
			this.exists.pencilbox =
				this.exists.pencilbox &&
				pzprid !== "nanro" &&
				pzprid !== "ayeheya" &&
				pzprid !== "kurochute";
			/* pzprurl : ぱずぷれID(URL出力用) */
			/* kanpen  : カンペンID            */
			/* kanpen2 : カンペンID(入力のみ)  */
			this.alias = !!datalist[5] ? datalist[5] : {};
			this.urlid = this.alias.pzprurl || pzprid;
			this.kanpenid = !!datalist[1] ? this.alias.kanpen || pzprid : "";
			_list.push(pzprid);
		},
		{
			aho: [0, 0, "アホになり切れ", "Aho-ni-Narikire", "shikaku"],
			akichi: [0, 0, "Akichiwake", "Akichiwake", "heyawake"],
			alter: [0, 0, "オルタネーション", "Alternation", "hakoiri"],
			amibo: [0, 0, "あみぼー", "Amibo", "amibo"],
			angleloop: [0, 0, "鋭直鈍ループ", "Angle Loop", "kouchoku"],
			anglers: [0, 0, "フィッシング", "Anglers"],
			antmill: [0, 0, "Ant Mill", "Ant Mill", "scrin"],
			archipelago: [0, 0, "アーキペラゴ", "Archipelago", "chainedb"],
			aqre: [0, 0, "Aqre", "Aqre", "aqre"],
			aquapelago: [0, 0, "Aquapelago", "Aquapelago"],
			aquarium: [0, 0, "アクアプレース", "Aquarium", "aquarium"],
			araf: [0, 0, "相ダ部屋", "Araf", "araf"],
			armyants: [0, 0, "ぐんたいあり", "Army Ants", "kaero"],
			arrowflow: [0, 0, "アローフロー", "Arrow Flow", "roma"],
			arukone: [0, 0, "アルコネ", "Arukone", "numlin"],
			ayeheya: [0, 1, "∀人∃ＨＥＹＡ", "Ayeheya", "heyawake"],
			balance: [0, 0, "Balance Loop", "Balance Loop"],
			balloon: [0, 0, "風船箱", "Balloon Box"],
			barns: [1, 0, "バーンズ", "Barns"],
			batten: [0, 0, "Battenberg Painting", "Battenberg Painting"],
			battleship: [0, 0, "Battleship", "Battleship", "statuepark"],
			bdblock: [1, 0, "ボーダーブロック", "Border Block"],
			bdwalk: [0, 0, "ビルウォーク", "Building Walk", "haisu"],
			blindrush: [0, 0, "猪突猛進", "Blind Rush"],
			bonsan: [1, 0, "ぼんさん", "Bonsan", "bonsan"],
			bosanowa: [1, 0, "ボサノワ", "Bosanowa", "", { alias: "bossanova" }],
			bosnianroad: [0, 0, "Bosnian Road", "Bosnian Road"],
			box: [0, 0, "ボックス", "Box"],
			brownies: [0, 0, "ブラウニー", "Brownies", "yosenabe"],
			bunnyhop: [0, 0, "Bunnyhop", "Bunnyhop", "", { alias: "bnuuyhop" }],
			cave: [1, 0, "バッグ", "Cave", "kurodoko", { alias: "bag" }],
			cbanana: [0, 0, "チョコバナナ", "Choco Banana"],
			circlesquare: [0, 0, "Circles and Squares", "Circles and Squares"],
			context: [0, 0, "Context", "Context"],
			crossstitch: [0, 0, "Crossstitch", "Crossstitch"],
			cts: [0, 0, "Cross the Streams", "Cross the Streams", "nonogram"],
			skyscrapers: [
				0,
				0,
				"ビルディングパズル",
				"Skyscrapers",
				"",
				{ alias: "building", alias2: "skyscraper" }
			],
			canal: [0, 0, "Canal View", "Canal View", "nurikabe"],
			castle: [0, 0, "Castle Wall", "Castle Wall"],
			cbblock: [0, 0, "コンビブロック", "Combi Block"],
			chainedb: [0, 0, "チェンブロ", "Chained Block"],
			chocona: [0, 0, "チョコナ", "Chocona", "shimaguni"],
			cityspace: [1, 0, "City Space", "City Space", "kurodoko"],
			cocktail: [0, 0, "カクテルランプ", "Cocktail Lamp", "shimaguni"],
			coffeemilk: [0, 0, "コーヒー牛乳", "Coffee Milk", "wblink"],
			cojun: [0, 0, "コージュン", "Cojun", "ripple"],
			compass: [0, 0, "Compass", "Compass", "compass"],
			coral: [0, 0, "Coral", "Coral", "nonogram"],
			country: [1, 0, "カントリーロード", "Country Road"],
			creek: [1, 0, "クリーク", "Creek"],
			curvedata: [0, 0, "カーブデータ", "Curve Data"],
			"curvedata-aux": [0, 0, "図形の編集", "Edit shape"],
			curving: [0, 0, "カービングロード", "Curving Road"],
			dbchoco: [0, 0, "ダブルチョコ", "Double Choco", "cbblock"],
			detour: [0, 0, "Detour", "Detour", "country"],
			diamond: [0, 0, "Diamond Chain", "Diamond Chain"],
			disloop: [0, 0, "Disorderly Loop", "Disorderly Loop", "tapaloop"],
			distopia: [0, 0, "Distopia", "Distopia", "statuepark"],
			dominion: [0, 0, "ドミニオン", "Dominion"],
			doppelblock: [0, 0, "Doppelblock", "Doppelblock", "doppelblock"],
			dosufuwa: [0, 0, "ドッスンフワリ", "Dosun-Fuwari"],
			dotchi: [0, 0, "ドッチループ", "Dotchi-Loop", "country"],
			dotchi2: [0, 0, "ドッチドッチループ", "Dotchi Dotchi Loop", "country"],
			doubleback: [0, 0, "Double Back", "Double Back", "country"],
			easyasabc: [0, 0, "ABCプレース", "Easy as ABC"],
			energywalk: [0, 0, "Energy Walk", "Energy Walk", "icewalk"],
			evolmino: [0, 0, "シンカミノ", "Evolmino"],
			factors: [0, 0, "因子の部屋", "Rooms of Factors"],
			fakearrow: [0, 0, "フェイクアロー", "Fake Arrow", "nagare"],
			familyphoto: [0, 0, "家族写真", "Family Photo"],
			fillmat: [1, 0, "フィルマット", "Fillmat", "fillmat"],
			fillomino: [
				0,
				1,
				"フィルオミノ",
				"Fillomino",
				"",
				{ kanpen2: "fillomino01" }
			],
			firefly: [1, 0, "ホタルビーム", "Hotaru Beam"],
			firewalk: [1, 0, "ファイアウォーク", "Fire Walk", "icewalk"],
			fivecells: [0, 0, "ファイブセルズ", "FiveCells", "nawabari"],
			forestwalk: [0, 0, "フォレストウォーク", "Forest Walk", "icewalk"],
			fourcells: [0, 0, "フォーセルズ", "FourCells", "nawabari"],
			fracdiv: [0, 0, "分数分割", "Fractional Division"],
			geradeweg: [0, 0, "グラーデヴェグ", "Geradeweg"],
			goishi: [0, 1, "碁石ひろい", "Goishi"],
			gokigen: [1, 0, "ごきげんななめ", "Slant", "gokigen"],
			guidearrow: [0, 0, "ガイドアロー", "Guide Arrow"],
			haisu: [0, 0, "Haisu", "Haisu"],
			hakoiri: [1, 0, "はこいり○△□", "Hakoiri-masashi"],
			hanare: [0, 0, "はなれ組", "Hanare-gumi", "hanare"],
			hashikake: [
				0,
				1,
				"橋をかけろ",
				"Hashiwokakero",
				"",
				{ pzprurl: "hashi", kanpen: "hashi", alias: "bridges" }
			],
			hebi: [1, 0, "へびいちご", "Hebi-Ichigo", "", { old: "snakes" }],
			herugolf: [0, 0, "ヘルゴルフ", "Herugolf"],
			heteromino: [0, 0, "ヘテロミノ", "Heteromino", "nawabari"],
			heyablock: [0, 0, "へやブロ", "Heyablock", "shimaguni"],
			heyabon: [1, 0, "へやぼん", "Heya-Bon", "bonsan"],
			heyapin: [0, 0, "へやピン", "Heyapin"],
			heyawake: [
				0,
				1,
				"へやわけ",
				"Heyawake",
				"heyawake",
				{ alias: "heyawacky" }
			],
			hinge: [0, 0, "ちょうつがい", "Hinge", "shimaguni"],
			hitori: [0, 1, "ひとりにしてくれ", "Hitori"],
			icebarn: [1, 0, "アイスバーン", "Icebarn", "icebarn"],
			icelom: [0, 0, "アイスローム", "Icelom", "icebarn"],
			icelom2: [0, 0, "アイスローム２", "Icelom 2", "icebarn"],
			icewalk: [0, 0, "アイスウォーク", "Ice Walk"],
			ichimaga: [0, 0, "イチマガ", "Ichimaga", "ichimaga"],
			ichimagam: [0, 0, "磁石イチマガ", "Magnetic Ichimaga", "ichimaga"],
			ichimagax: [
				0,
				0,
				"一回曲がって交差もするの",
				"Crossing Ichimaga",
				"ichimaga"
			],
			interbd: [0, 0, "International Borders", "International Borders"],
			invlitso: [0, 0, "Inverse LITSO", "Inverse LITSO", "lits"],
			island: [0, 0, "アイランド", "Inaba's Island", "kurotto"],
			isowatari: [0, 0, "イソワタリ", "Isowatari"],
			japanesesums: [0, 0, "Japanese Sums", "Japanese Sums"],
			juosan: [0, 0, "縦横さん", "Juosan"],
			kaero: [1, 0, "お家に帰ろう", "Return Home"],
			kaidan: [0, 0, "かいだんしばり", "Stairwell"],
			kaisu: [0, 0, "Kaisu", "Kaisu", "haisu"],
			kakuro: [0, 1, "カックロ", "Kakuro"],
			kakuru: [0, 0, "カックル", "Kakuru"],
			kazunori: [0, 0, "かずのりのへや", "Kazunori Room"],
			keywest: [0, 0, "キーウエスト", "Key West"],
			kinkonkan: [1, 0, "キンコンカン", "Kin-Kon-Kan"],
			kissing: [
				0,
				0,
				"Kissing Polyominoes",
				"Kissing Polyominoes",
				"statuepark"
			],
			koburin: [0, 0, "コブリン", "Koburin", "yajilin"],
			kouchoku: [0, 0, "交差は直角に限る", "Kouchoku"],
			kramma: [0, 0, "快刀乱麻", "KaitoRamma", "kramma"],
			kramman: [0, 0, "新・快刀乱麻", "New KaitoRamma", "kramma"],
			kropki: [0, 0, "Kropki", "Kropki", "minarism"],
			kurarin: [0, 0, "クラリン", "Kurarin"],
			kurochute: [0, 1, "クロシュート", "Kurochute"],
			kuroclone: [0, 0, "クロクローン", "Kuroclone"],
			kurodoko: [0, 1, "黒どこ(黒マスはどこだ)", "Kurodoko"],
			kuromenbun: [0, 0, "クロメンブン", "Kuromenbun"],
			kurotto: [0, 0, "クロット", "Kurotto"],
			kusabi: [0, 0, "クサビリンク", "Kusabi"],
			ladders: [0, 0, "はしごをかけろ", "Ladders"],
			lapaz: [0, 0, "La Paz", "La Paz"],
			lightshadow: [0, 0, "Light and Shadow", "Light and Shadow"],
			lightup: [
				0,
				1,
				"美術館",
				"Akari",
				"",
				{ pzprurl: "akari", kanpen: "bijutsukan" }
			],
			lineofsight: [0, 0, "サイトライン", "Line of Sight"],
			lither: [0, 0, "Litherslink", "Litherslink"],
			lits: [1, 1, "ＬＩＴＳ", "LITS", "lits"],
			lixloop: [0, 0, "LIX Loop", "LIX Loop", "yajilin"],
			lohkous: [0, 0, "Lohkous", "Lohkous"],
			lollipops: [0, 0, "ペロペロキャンディ", "Lollipops"],
			lookair: [0, 0, "るっくえあ", "Look-Air"],
			loopsp: [1, 0, "環状線スペシャル", "Loop Special", "pipelink"],
			loute: [0, 0, "エルート", "L-route"],
			magnets: [0, 0, "Magnets", "Magnets"],
			makaro: [0, 0, "マカロ", "Makaro"],
			mannequin: [0, 0, "マネキンゲート", "Mannequin Gate"],
			martini: [0, 0, "マティーニ", "Martini", "shimaguni"],
			mashu: [0, 1, "ましゅ", "Masyu", "", { kanpen: "masyu", alias: "pearl" }],
			maxi: [0, 0, "Maxi Loop", "Maxi Loop", "country"],
			meander: [0, 0, "にょろにょろナンバー", "Meandering Numbers", "ripple"],
			meidjuluk: [0, 0, "Meidjuluk", "Meidjuluk", "snakeegg"],
			mejilink: [0, 0, "メジリンク", "Mejilink"],
			minarism: [1, 0, "マイナリズム", "Minarism"],
			mines: [0, 0, "マインスイーパ", "Minesweeper", "kurotto"],
			midloop: [0, 0, "ミッドループ", "Mid-loop"],
			mintonette: [0, 0, "Mintonette", "Mintonette", "firefly"],
			mirrorbk: [0, 0, "ミラーブロック", "Mirror Block", "cbblock"],
			mochikoro: [1, 0, "モチコロ", "Mochikoro", "nurikabe"],
			mochinyoro: [1, 0, "モチにょろ", "Mochinyoro", "nurikabe"],
			moonsun: [0, 0, "月か太陽", "Moon or Sun", "country"],
			morningwalk: [0, 0, "Morning Walk", "Morning Walk", "icewalk"],
			mrtile: [0, 0, "ミラーリングタイル", "Mirroring Tile", "chainedb"],
			mukkonn: [0, 0, "Mukkonn Enn", "Mukkonn Enn", "compass"],
			myopia: [0, 0, "Myopia", "Myopia"],
			nagare: [0, 0, "流れるループ", "Nagareru-Loop"],
			nagenawa: [0, 0, "なげなわ", "Nagenawa", "nagenawa"],
			nanameguri: [0, 0, "ななめぐり", "Nanameguri"],
			nanro: [0, 1, "ナンロー", "Nanro"],
			narrow: [0, 0, "Narrowfence", "Narrowfence", "nawabari"],
			nawabari: [1, 0, "なわばり", "Nawabari", "nawabari"],
			news: [0, 0, "NEWS", "NEWS", "toichika"],
			nibunnogo: [0, 0, "ニブンノゴ", "Nibun-nogo", "lightshadow"],
			nikoji: [0, 0, "NIKOJI", "NIKOJI", "cbblock"],
			nondango: [0, 0, "ノンダンゴ", "Nondango"],
			nonogram: [0, 0, "ののぐらむ", "Nonogram"],
			norinori: [0, 1, "のりのり", "Norinori", "lits"],
			norinuri: [0, 0, "海苔ぬり", "Norinuri", "nurikabe"],
			nothing: [0, 0, "オールｏｒナッシング", "All or Nothing", "country"],
			nothree: [0, 0, "ノースリー", "No Three"],
			numcity: [0, 0, "ナンバーシティ一", "Number City", "fillomino"],
			numlin: [
				0,
				1,
				"ナンバーリンク",
				"Numberlink",
				"",
				{ kanpen: "numberlink" }
			],
			numrope: [0, 0, "ナンバーロープ", "Number Rope", "kakuru"],
			nuribou: [1, 0, "ぬりぼう", "Nuribou", "nurikabe"],
			nurikabe: [0, 1, "ぬりかべ", "Nurikabe", "nurikabe"],
			nurimaze: [0, 0, "ぬりめいず", "Nuri-Maze", "nurimaze"],
			nurimisaki: [0, 0, "ぬりみさき", "Nurimisaki", "kurodoko"],
			nuritwin: [0, 0, "ぬりツイン", "Nuritwin", "shimaguni"],
			nuriuzu: [0, 0, "ぬりうず", "Nuri-uzu", "tentaisho"],
			ovotovata: [0, 0, "Ovotovata", "Ovotovata", "country"],
			oneroom: [0, 0, "ワンルームワンドア", "One Room One Door", "heyawake"],
			onsen: [0, 0, "温泉めぐり", "Onsen-meguri", "country"],
			orbital: [0, 0, "オービタル", "Orbital", "nagenawa"],
			outofsight: [0, 0, "Out Of Sight", "Out Of Sight", "yajikazu"],
			oyakodori: [0, 0, "おやこどり", "Oyakodori", "kaero"],
			paintarea: [1, 0, "ペイントエリア", "Paintarea"],
			parquet: [0, 0, "Parquet", "Parquet"],
			patchwork: [0, 0, "パッチワーク", "Patchwork"],
			pencils: [0, 0, "ペンシルズ", "Pencils"],
			pentatouch: [0, 0, "Penta Touch", "Penta Touch", "statuepark"],
			pentominous: [0, 0, "Pentominous", "Pentominous", "fillomino"],
			pentopia: [0, 0, "Pentopia", "Pentopia", "statuepark"],
			pipelink: [1, 0, "パイプリンク", "Pipelink", "pipelink"],
			pipelinkr: [
				1,
				0,
				"帰ってきたパイプリンク",
				"Pipelink Returns",
				"pipelink"
			],
			pmemory: [0, 0, "Persistence of Memory", "Persistence of Memory"],
			portal: [0, 0, "Portal Loop", "Portal Loop"],
			putteria: [0, 0, "プッテリア", "Putteria", "hanare"],
			ququ: [0, 0, "区区", "Ququ"],
			railpool: [0, 0, "Rail Pool", "Rail Pool"],
			rassi: [0, 0, "Rassi Silai", "Rassi Silai", "country"],
			recoil: [0, 0, "Recoil", "Recoil"],
			rectslider: [0, 0, "四角スライダー", "Rectangle-Slider", "bonsan"],
			reflect: [1, 0, "リフレクトリンク", "Reflect Link"],
			"regional-poly": [
				0,
				0,
				"Regional Polyominoes",
				"Regional Polyominoes",
				"statuepark"
			],
			remlen: [0, 0, "Remembered Length", "Remembered Length", "country"],
			renban: [0, 0, "連番窓口", "Renban-Madoguchi"],
			retroships: [
				0,
				0,
				"Retrograde Battleships",
				"Retrograde Battleships",
				"statuepark"
			],
			retsurin: [0, 0, "Retsurin", "Retsurin", "yajilin"],
			ringring: [0, 0, "リングリング", "Ring-ring", "nagenawa"],
			ripple: [
				0,
				1,
				"波及効果",
				"Ripple Effect",
				"ripple",
				{ kanpen: "hakyukoka" }
			],
			roma: [0, 0, "ろーま", "Roma", "", { alias: "rome" }],
			roundtrip: [0, 0, "Round Trip", "Round Trip"],
			sananko: [0, 0, "サンアンコー", "San-Anko", "kakuru"],
			sansaroad: [0, 0, "サンサロード", "Sansa Road", "kurarin"],
			sashikabe: [0, 0, "Sashikabe", "Sashikabe", "loute"],
			sashigane: [0, 0, "さしがね", "Sashigane", "loute"],
			sashikazune: [0, 0, "さしカズね", "Sashikazune", "loute"],
			satogaeri: [
				0,
				1,
				"さとがえり",
				"Satogaeri",
				"bonsan",
				{ alias: "sato", kanpen: "satogaeri" }
			],
			scrin: [0, 0, "スクリン", "Scrin"],
			shakashaka: [0, 1, "シャカシャカ", "Shakashaka"],
			shikaku: [0, 1, "四角に切れ", "Shikaku", "shikaku"],
			shimaguni: [1, 0, "島国", "Shimaguni", "shimaguni"],
			shugaku: [1, 0, "修学旅行の夜", "School Trip"],
			shwolf: [0, 0, "ヤギとオオカミ", "Goats and Wolves", "kramma"],
			simplegako: [0, 0, "シンプルガコ", "Simple Gako"],
			simpleloop: [0, 0, "シンプルループ", "Simple Loop", "country"],
			slalom: [1, 1, "スラローム", "Slalom", "", { alias: "suraromu" }],
			slashpack: [0, 0, "Slash Pack", "Slash Pack"],
			slither: [
				0,
				1,
				"スリザーリンク",
				"Slitherlink",
				"",
				{ kanpen: "slitherlink" }
			],
			smullyan: [0, 0, "Smullyanic Dynasty", "Smullyanic Dynasty", "context"],
			snake: [0, 0, "Snake", "Snake"],
			snakeegg: [0, 0, "Snake Egg", "Snake Egg"],
			snakepit: [0, 0, "Snake Pit", "Snake Pit", "fillomino"],
			starbattle: [0, 0, "スターバトル", "Star Battle"],
			squarejam: [0, 0, "Square Jam", "Square Jam"],
			statuepark: [0, 0, "Statue Park", "Statue Park"],
			"statuepark-aux": [0, 0, "図形の編集", "Edit shape"],
			stostone: [0, 0, "ストストーン", "Stostone", "shimaguni"],
			subomino: [0, 0, "Subomino", "Subomino", "nawabari"],
			sudoku: [0, 1, "数独", "Sudoku"],
			sukoro: [1, 0, "数コロ", "Sukoro", "sukoro"],
			sukororoom: [0, 0, "数コロ部屋", "Sukoro-room", "sukoro"],
			sumiwake: [0, 0, "すみわけ", "Sumiwake", "heyawake"],
			swslither: [
				0,
				0,
				"Sheep Wolf Slitherlink",
				"Sheep Wolf Slitherlink",
				"slither"
			],
			symmarea: [0, 0, "シンメトリーエリア", "Symmetry Area", "fillomino"],
			tachibk: [0, 0, "たちあわせブロック", "Tachiawase Block"],
			tajmahal: [0, 0, "タージ・マハル", "Taj Mahal", "kouchoku"],
			takoyaki: [0, 0, "たこ焼き", "Takoyaki", "kaidan"],
			tapa: [0, 0, "Tapa", "Tapa"],
			tapaloop: [0, 0, "Tapa-Like Loop", "Tapa-Like Loop"],
			tasquare: [0, 0, "たすくえあ", "Tasquare"],
			tatamibari: [1, 0, "タタミバリ", "Tatamibari"],
			tateyoko: [1, 0, "タテボーヨコボー", "Tatebo-Yokobo"],
			tawa: [0, 0, "たわむれんが", "Tawamurenga"],
			tentaisho: [0, 0, "天体ショー", "Tentaisho"],
			tents: [0, 0, "Tents", "Tents", "tents"],
			teri: [0, 0, "テリトリー", "Territory", "kurodoko"],
			tetrochain: [0, 0, "テトロチェーンＹ", "Tetro Chain-Y"],
			tetrochaink: [0, 0, "テトロチェーンＫ", "Tetro Chain-K", "kurarin"],
			tetrominous: [0, 0, "Tetrominous", "Tetrominous", "fillomino"],
			tilecity: [0, 0, "タイルシティー", "Tile City"],
			tilepaint: [1, 0, "タイルペイント", "Tilepaint"],
			timebomb: [0, 0, "時限爆弾", "Time Bomb", "bonsan"],
			tjunction: [0, 0, "T-Junction", "T-Junction", "tontti"],
			toichika: [0, 0, "遠い誓い", "Toichika"],
			toichika2: [0, 0, "遠い誓い２", "Toichika 2", "toichika"],
			tontonbeya: [0, 0, "とんとんべや", "Tontonbeya", "hakoiri"],
			tontti: [0, 0, "Tonttiraja", "Tonttiraja"],
			trainstations: [0, 0, "Train Stations", "Train Stations"],
			tren: [0, 0, "パーキング", "Tren"],
			triplace: [0, 0, "トリプレイス", "Tri-place"],
			tslither: [0, 0, "Touch Slitherlink", "Touch Slitherlink", "vslither"],
			turnaround: [0, 0, "ターンアラウンド", "Turnaround"],
			turnrun: [0, 0, "トツゲキループ", "Turn and Run", "trainstations"],
			twinarea: [0, 0, "ツインエリア", "Twin Area", "hanare"],
			usotatami: [0, 0, "ウソタタミ", "Uso-tatami", "fillmat"],
			usoone: [0, 0, "ウソワン", "Uso-one"],
			uturns: [0, 0, "U-Turns", "U-Turns", "kusabi"],
			view: [1, 0, "ヴィウ", "View", "sukoro"],
			voxas: [0, 0, "Voxas", "Voxas"],
			vslither: [0, 0, "Vertex Slitherlink", "Vertex Slitherlink"],
			wafusuma: [0, 0, "和フスマ", "Wafusuma", "fillomino"],
			wagiri: [0, 0, "ごきげんななめ・輪切", "Wagiri", "gokigen"],
			walllogic: [0, 0, "ウォールロジック", "Wall Logic"],
			wataridori: [0, 0, "わたりどり", "Wataridori", "country"],
			waterwalk: [0, 0, "ウォーターウォーク", "Water Walk", "icewalk"],
			wblink: [0, 0, "シロクロリンク", "Shirokuro-link"],
			wittgen: [0, 0, "デスクプレース", "Wittgenstein Briquet", "kaidan"],
			yajikazu: [1, 0, "やじさんかずさん", "Yajisan-Kazusan"],
			yajilin: [
				0,
				1,
				"ヤジリン",
				"Yajilin",
				"",
				{ pzprurl: "yajilin", kanpen: "yajilin", alias: "yajirin" }
			],
			"yajilin-regions": [
				0,
				0,
				"ヘヤジリン",
				"Regional Yajilin",
				"yajilin",
				{ alias: "yajirin-regions" }
			],
			yajirushi: [0, 0, "見つめあう矢印", "Yajirushi", "toichika"],
			yajirushi2: [0, 0, "見つめあう矢印２", "Yajirushi 2", "toichika"],
			yajisoko: [0, 0, "やじさん倉庫番", "Yajisan-Sokoban", "yosenabe"],
			yajitatami: [0, 0, "ヤジタタミ", "Yajitatami"],
			yinyang: [0, 0, "しろまるくろまる", "Yin-Yang"],
			yosenabe: [0, 0, "よせなべ", "Yosenabe"],
			zabajaba: [0, 0, "Zabajaba", "Zabajaba", "kaidan"]
		}
	);
})();

// Parser.js v3.4.1

(function() {
	var URL_AUTO = 0,
		URL_PZPRV3 = 1,
		URL_PZPRAPP = 2,
		URL_KANPEN = 3,
		URL_KANPENP = 4,
		URL_HEYAAPP = 5,
		URL_PZPRFILE = 6,
		FILE_AUTO = 0,
		FILE_PZPR = 1,
		FILE_PBOX = 2,
		FILE_PBOX_XML = 3;

	var URLData, FileData, Parser;

	Parser = pzpr.parser = function(data, variety) {
		return Parser.parse(data, variety);
	};
	Parser.extend = function(obj) {
		for (var n in obj) {
			this[n] = obj[n];
		}
	};
	Parser.extend({
		// 定数(URL形式)
		URL_AUTO: URL_AUTO,
		URL_PZPRV3: URL_PZPRV3,
		URL_PZPRAPP: URL_PZPRAPP,
		URL_KANPEN: URL_KANPEN,
		URL_KANPENP: URL_KANPENP,
		URL_HEYAAPP: URL_HEYAAPP,
		URL_PZPRFILE: URL_PZPRFILE,

		// 定数(ファイル形式)
		FILE_AUTO: FILE_AUTO,
		FILE_PZPR: FILE_PZPR,
		FILE_PBOX: FILE_PBOX,
		FILE_PBOX_XML: FILE_PBOX_XML,

		/* 入力された文字列を、URLおよびファイルデータとして解析し返します        */
		/* ただし最初から解析済みのデータが渡された場合は、それをそのまま返します */
		parse: function(data, variety) {
			if (data instanceof URLData || data instanceof FileData) {
				return data;
			}

			return this.parseFile(data, variety) || this.parseURL(data);
		},

		parseURL: function(url) {
			if (url instanceof URLData) {
				return url;
			}

			url = url.replace(/(\r|\n)/g, ""); // textarea上の改行が実際の改行扱いになるUAに対応(Operaとか)
			return new URLData(url).parse();
		},
		parseFile: function(fstr, variety) {
			if (fstr instanceof FileData) {
				return fstr;
			}

			if (!fstr.match(/^\<\?xml/)) {
				fstr = fstr.replace(/[\t\r]*\n/g, "\n").replace(/\//g, "\n");
			}
			return new FileData(fstr, variety).parse();
		}
	});
	delete Parser.extend;

	//---------------------------------------------------------------------------
	// ★ URLData() URLデータのencode/decodeのためのオブジェクト
	//---------------------------------------------------------------------------
	URLData = pzpr.parser.URLData = function(url, mode) {
		this.url = url;
		if (mode !== void 0) {
			this.mode = mode;
		}
	};
	pzpr.parser.URLData.prototype = {
		pid: "",
		mode: "",
		type: URL_AUTO /* ==0 */,
		url: "",
		qdata: "",
		pflag: null,
		variant: null,
		cols: 0,
		rows: 0,
		body: "",

		isurl: true,
		isfile: false,

		// 定数(URL形式)
		URL_AUTO: URL_AUTO,
		URL_PZPRV3: URL_PZPRV3,
		URL_PZPRAPP: URL_PZPRAPP,
		URL_KANPEN: URL_KANPEN,
		URL_KANPENP: URL_KANPENP,
		URL_HEYAAPP: URL_HEYAAPP,
		URL_PZPRFILE: URL_PZPRFILE,

		parse: function() {
			this.parseURLType();
			this.parseURLData();
			this.changeProperPid();
			return this;
		},
		generate: function() {
			return this.outputURLType() + this.outputURLData();
		},

		//---------------------------------------------------------------------------
		// ★ parseURLType() 入力されたURLからどのパズルか、およびURLの種類を抽出する
		//                   入力=URL 例:http://pzv.jp/p.html?(pid)/(qdata)
		//                   出力={pid:パズル種類, type:URL種類, qdata:タテヨコ以下のデータ}
		//                         qdata -> [(variant)/][(pflag)/](cols)/(rows)/(bstr)
		//---------------------------------------------------------------------------
		parseURLType: function() {
			/* URLからパズルの種類・URLの種類を判定する */
			var url = this.url;
			delete this.url;
			// カンペンの場合
			if (
				url.match(/www\.kanpen\.net/) ||
				url.match(/www\.geocities(\.co)?\.jp\/pencil_applet/)
			) {
				url.match(/([0-9a-z]+)\.html/);
				this.pid = RegExp.$1;
				// カンペンだけどデータ形式はへやわけアプレット
				if (url.indexOf("?heyawake=") >= 0) {
					this.qdata = url.substr(url.indexOf("?heyawake=") + 10);
					this.type = URL_HEYAAPP;
				}
				// カンペンだけどデータ形式はぱずぷれ
				else if (url.indexOf("?pzpr=") >= 0) {
					this.qdata = url.substr(url.indexOf("?pzpr=") + 6);
					this.type = URL_KANPENP;
				} else {
					this.qdata = url.substr(url.indexOf("?problem=") + 9);
					this.type = URL_KANPEN;
				}
			}
			// へやわけアプレットの場合
			else if (url.match(/www\.geocities(\.co)?\.jp\/heyawake/)) {
				this.pid = "heyawake";
				this.qdata = url.substr(url.indexOf("?problem=") + 9);
				this.type = URL_HEYAAPP;
			}
			// ぱずぷれアプレットの場合
			else if (url.match(/indi\.s58\.xrea\.com\/(.+)\/(sa|sc)\//)) {
				this.pid = RegExp.$1;
				this.qdata = url.substr(url.indexOf("?"));
				this.type = URL_PZPRAPP;
			}
			// ぱずぷれv3の場合
			else {
				var start = url.indexOf("?");
				var qs = url.indexOf("/", start);
				var first = "";
				if (qs > -1) {
					first = url.substring(start + 1, qs);

					while (first.match(/^(\w+)\=(\w+)\&/)) {
						if (RegExp.$1 === "type") {
							this.mode = RegExp.$2;
						}

						start = url.indexOf("&", start + 1);
						first = url.substring(start + 1, qs);
					}
				} else {
					first = url.substring(start + 1);
				}

				if (first.startsWith("v:")) {
					var newstart = start + first.length + 2;
					var next = url.indexOf("/", newstart);
					first = url.substring(newstart, next);
				}

				if (first.match(/^pzprv[0-9.]*$/)) {
					if (start > -1 && start < qs) {
						// Remove other querystring parameters
						url = url.substring(start + 1);
					}

					// encoded file; extract pid
					url = decodeURIComponent(url);
					var parts = url.split("/", 4);
					this.pid = parts[0].startsWith("v:") ? parts[2] : parts[1];
					this.qdata = url;
					this.type = URL_PZPRFILE;
				} else {
					if (qs > -1) {
						this.qdata = url.substr(qs + 1);
					}
					var pid = first;
					if (pid.match(/_edit$/)) {
						this.mode = "editor";
					} else if (pid.match(/_play$/)) {
						this.mode = "player";
					}
					this.pid = pid.replace(/(_edit|_play)$/, "");
					this.type = URL_PZPRV3;
				}
			}
			this.pid = pzpr.variety.toPID(this.pid);
		},

		//---------------------------------------------------------------------------
		// ★ outputURLType() パズル種類, URL種類からURLを生成する
		//---------------------------------------------------------------------------
		outputURLType: function() {
			var url = "";
			if (pzpr.env.node) {
				url = "http://pzv.jp/p.html";
			} else {
				url = location.protocol + "//" + location.host + location.pathname;
			}
			switch (this.type) {
				case URL_PZPRV3:
					url = url + "?%PID%/";
					break;
				case URL_KANPEN:
					url = "http://www.kanpen.net/%KID%.html?problem=";
					break;
				case URL_KANPENP:
					url = "http://www.kanpen.net/%KID%.html?pzpr=";
					break;
				case URL_HEYAAPP:
					url = "http://www.geocities.co.jp/heyawake/?problem=";
					break;
				case URL_PZPRFILE:
					url = url + "?";
					break;
			}
			var pid = this.pid,
				typ = "";
			switch (this.mode) {
				case "player":
					pid = pid + "_play";
					typ = "type=player&";
					break;
				case "editor":
					pid = pid + "_edit";
					typ = "type=editor&";
					break;
			}
			if (this.type === URL_PZPRFILE) {
				url = url + typ;
			}
			return url
				.replace("%PID%", pzpr.variety(pid).urlid)
				.replace("%KID%", pzpr.variety(this.pid).kanpenid);
		},

		//---------------------------------------------------------------------------
		// ★ parseURLData() URLを縦横・問題部分などに分解する
		//                   qdata -> [(variant)/][(pflag)/](cols)/(rows)/(bstr)
		//---------------------------------------------------------------------------
		parseURLData: function() {
			if (this.type === URL_PZPRFILE) {
				var parts = this.qdata.split("/");
				this.cols = +parts[2];
				this.rows = +parts[3];
				this.body = this.qdata.replace(/\//g, "\n");
				delete this.qdata;
				return;
			}

			var inp = this.qdata.split("/"),
				col = 0,
				row = 0;
			delete this.qdata;
			/* URLにつけるオプション */
			if (this.type !== URL_KANPEN && this.type !== URL_HEYAAPP) {
				if (!!inp[0] && inp[0].match(/^v:(.*)/)) {
					this.variant = RegExp.$1;
					inp.shift();
				}
				if (!!inp[0] && isNaN(inp[0])) {
					this.pflag = inp[0];
					inp.shift();
				} else {
					this.pflag = "";
				}
			}

			/* サイズを表す文字列 */
			if (this.type === URL_KANPEN) {
				if (this.pid === "kakuro") {
					row = +inp.shift() - 1;
					col = +inp.shift() - 1;
				} else if (this.pid === "sudoku") {
					row = col = +inp.shift();
				} else {
					row = +inp.shift();
					col = +inp.shift();
				}
			} else if (this.type === URL_HEYAAPP) {
				var size = inp.shift().split("x");
				col = +size[0];
				row = +size[1];
			} else {
				col = +inp.shift() || NaN;
				row = +inp.shift() || NaN;
			}
			this.rows = row;
			this.cols = col;

			/* サイズ以降のデータを取得 */
			if (!inp[inp.length - 1]) {
				inp.pop();
			}
			this.body = inp.join("/");
		},

		//---------------------------------------------------------------------------
		// ★ outputURLData() qdataを生成する
		//---------------------------------------------------------------------------
		outputURLData: function() {
			var pzl = this,
				col = pzl.cols,
				row = pzl.rows,
				out = [];

			/* URLにつけるオプション */
			if (pzl.type !== URL_KANPEN && pzl.type !== URL_HEYAAPP) {
				if (pzl.variant !== null) {
					out.push("v:" + pzl.variant);
				}
				if (pzl.type === URL_KANPENP || !!pzl.pflag) {
					out.push(pzl.pflag);
				}
			}

			/* サイズを表す文字列 */
			if (pzl.type === URL_KANPEN) {
				if (pzl.pid === "kakuro") {
					out.push(row + 1);
					out.push(col + 1);
				} else if (pzl.pid === "sudoku") {
					out.push(col);
				} else {
					out.push(row);
					out.push(col);
				}
			} else if (pzl.type === URL_HEYAAPP) {
				out.push([col, row].join("x"));
			} else if (pzl.type !== URL_PZPRFILE) {
				out.push(col);
				out.push(row);
			}

			/* サイズ以降のデータを設定 */
			out.push(pzl.body);

			/* 末尾が0-9,a-z,A-Z以外の時にt.coで情報が欠落しないよう/を追加 */
			var body = out.join("/");
			if (!body.charAt(body.length - 1).match(/[a-zA-Z0-9]/)) {
				body += "/";
			}
			return body;
		},

		//---------------------------------------------------------------------------
		// ★ changeProperPid() parse後パズル種類が実際には別だった場合にpidを変更する
		//---------------------------------------------------------------------------
		changeProperPid: function() {
			// this.bodyが空の場合はEncode.jsの仕様により対象外
			// カンペンには以下のパズルは存在しないのでURL_KANPENPも対象外
			if (
				!this.body ||
				(this.type !== URL_PZPRV3 && this.type !== URL_PZPRAPP)
			) {
				return;
			}

			switch (this.pid) {
				case "ichimaga":
					if (this.pflag.indexOf("m") >= 0) {
						this.pid = "ichimagam";
					} else if (this.pflag.indexOf("x") >= 0) {
						this.pid = "ichimagax";
					} else {
						this.pid = "ichimaga";
					}
					break;
				case "icelom":
					if (this.pflag.indexOf("a") < 0) {
						this.pid = "icelom2";
					}
					break;
				case "pipelink":
					if (this.body.match(/[0-9]/)) {
						this.pid = "pipelinkr";
					}
					break;
				case "bonsan":
					if (this.pflag.indexOf("c") < 0) {
						var col = this.cols,
							row = this.rows;
						if (
							this.body
								.substr(
									0,
									((((col - 1) * row + 4) / 5) | 0) +
										(((col * (row - 1) + 4) / 5) | 0) || 0
								)
								.match(/[^0]/)
						) {
							this.pid = "heyabon";
						}
					}
					break;
				case "kramma":
					if (this.pflag.indexOf("c") < 0) {
						var len = (this.cols - 1) * (this.rows - 1),
							cc = 0;
						for (var i = 0; i < this.body.length; i++) {
							var ca = this.body.charAt(i);
							if (ca.match(/\w/)) {
								cc += parseInt(ca, 36);
								if (cc < len) {
									this.pid = "kramman";
									break;
								}
							} else if (ca === ".") {
								cc += 36;
							}
							if (cc >= len) {
								break;
							}
						}
					}
					break;
			}
		}
	};

	//---------------------------------------------------------------------------
	// ★ FileData() ファイルデータのencode/decodeのためのオブジェクト
	//---------------------------------------------------------------------------
	FileData = pzpr.parser.FileData = function(fstr, variety) {
		this.pid = !!variety ? variety : "";
		this.fstr = fstr;
		this.metadata = new pzpr.MetaData();
	};
	pzpr.parser.FileData.prototype = {
		pid: "",
		type: FILE_AUTO /* == 0 */,
		variant: null,
		filever: 0,
		fstr: "",
		qdata: "",
		cols: 0,
		rows: 0,
		body: "",
		history: "",
		metadata: null,
		xmldoc: null,

		isurl: false,
		isfile: true,

		// 定数(ファイル形式)
		FILE_AUTO: FILE_AUTO,
		FILE_PZPR: FILE_PZPR,
		FILE_PBOX: FILE_PBOX,
		FILE_PBOX_XML: FILE_PBOX_XML,

		parse: function() {
			var result = this.parseFileType() && this.parseFileData();
			if (result) {
				this.changeProperPid();
			}
			return result ? this : null;
		},
		generate: function() {
			return this.outputFileType() + this.outputFileData();
		},

		//---------------------------------------------------------------------------
		// ★ parseFileType() 入力されたファイルのデータからどのパズルか、およびパズルの種類を抽出する
		//                   出力={pid:パズル種類, type:ファイル種類, fstr:ファイルの内容}
		//---------------------------------------------------------------------------
		parseFileType: function() {
			var lines = this.fstr.split("\n");
			var firstline = lines.shift();
			delete this.fstr;

			/* ヘッダからパズルの種類・ファイルの種類を判定する */
			if (firstline.match(/^v:(.*)/)) {
				this.variant = RegExp.$1;
				firstline = lines.shift();
			}

			if (firstline.match(/^pzprv3/)) {
				this.type = FILE_PZPR;
				if (firstline.match(/pzprv3\.(\d+)/)) {
					this.filever = +RegExp.$1;
				}
				this.pid = lines.shift();
				this.qdata = lines.join("\n");
			} else if (firstline.match(/^\<\?xml/)) {
				this.type = FILE_PBOX_XML;
				lines.unshift(firstline);
				this.qdata = lines.join("\n");
				if (!!DOMParser) {
					this.body = new DOMParser().parseFromString(this.qdata, "text/xml");
					this.pid = this.body.querySelector("puzzle").getAttribute("type");
				} else {
					this.pid = "";
				}
			} else if (firstline.match(/^\d+$/)) {
				this.type = FILE_PBOX;
				lines.unshift(firstline);
				this.qdata = lines.join("\n");
			} else {
				this.pid = "";
			}
			this.pid = pzpr.variety.toPID(this.pid);

			return !!this.pid;
		},

		//---------------------------------------------------------------------------
		// ★ outputFileType() パズル種類, ファイル種類からヘッダを生成する
		//---------------------------------------------------------------------------
		outputFileType: function() {
			/* ヘッダの処理 */
			if (this.type === FILE_PZPR) {
				return [
					this.filever === 0 ? "pzprv3" : "pzprv3." + this.filever,
					this.pid,
					""
				].join("\n");
			} else if (this.type === FILE_PBOX_XML) {
				this.body
					.querySelector("puzzle")
					.setAttribute("type", pzpr.variety(this.pid).kanpenid);
			}
			return "";
		},

		//---------------------------------------------------------------------------
		// ★ parseFileData() ファイルの内容からサイズなどを求める
		//---------------------------------------------------------------------------
		parseFileData: function() {
			var lines = this.qdata.split("\n"),
				col = 0,
				row = 0;
			delete this.qdata;

			/* サイズを表す文字列 */
			if (this.type === FILE_PBOX_XML) {
				row = +this.body.querySelector("size").getAttribute("row");
				col = +this.body.querySelector("size").getAttribute("col");
				if (this.pid === "slither" || this.pid === "kakuro") {
					row--;
					col--;
				}
			} else if (this.type === FILE_PBOX && this.pid === "kakuro") {
				row = +lines.shift() - 1;
				col = +lines.shift() - 1;
			} else if (this.pid === "sudoku") {
				row = col = +lines.shift();
			} else {
				row = +lines.shift();
				col = +lines.shift();
			}
			if (row <= 0 || col <= 0) {
				return false;
			}
			this.rows = row;
			this.cols = col;

			/* サイズ以降のデータを取得 */
			if (this.type === FILE_PZPR) {
				var historypos = null,
					str = "",
					strs = [],
					isinfo = false;
				for (var i = 0; i < lines.length; i++) {
					/* かなり昔のぱずぷれファイルは最終行にURLがあったので、末尾扱いする */
					if (lines[i].match(/^http\:\/\//)) {
						break;
					}

					/* info行に到達した場合 */
					if (lines[i].match(/info:\{/)) {
						historypos = i;
						isinfo = true;
						break;
					}

					/* 履歴行に到達した場合 */
					if (lines[i].match(/history:\{|__HISTORY__/)) {
						historypos = i;
						break;
					}

					strs.push(lines[i]);
				}
				this.body += strs.join("\n");

				/* 履歴部分の読み込み */
				if (historypos !== null && !!JSON) {
					var count = 0,
						cnt;
					for (var i = historypos; i < lines.length; i++) {
						str += lines[i];

						cnt = count;
						count += (lines[i].match(/\{/g) || []).length;
						count -= (lines[i].match(/\}/g) || []).length;
						if (cnt > 0 && count === 0) {
							break;
						}
					}
				}

				/* 履歴出力があったら入力する */
				if (!!JSON) {
					if (isinfo && str.substr(0, 5) === "info:") {
						var info = JSON.parse(str.substr(5));
						this.metadata.update(info.metadata);
						this.history = info.history || "";
					} else if (str.substr(0, 8) === "history:") {
						this.history = JSON.parse(str.substr(8));
					}
				}
			} else if (this.type === FILE_PBOX) {
				this.body = lines.join("\n");
			} else if (this.type === FILE_PBOX_XML) {
				if (!!this.body) {
					var metanode = this.body.querySelector("property"),
						meta = this.metadata;
					meta.author = metanode.querySelector("author").getAttribute("value");
					meta.source = metanode.querySelector("source").getAttribute("value");
					meta.hard = metanode
						.querySelector("difficulty")
						.getAttribute("value");
					var commentnode = metanode.querySelector("comment");
					meta.comment = !!commentnode ? commentnode.childNodes[0].data : "";
				}
			}

			return true;
		},

		//---------------------------------------------------------------------------
		// ★ outputFileData() パズル種類, URL種類, fstrからファイルのデータを生成する
		//---------------------------------------------------------------------------
		outputFileData: function() {
			var pzl = this,
				col = pzl.cols,
				row = pzl.rows,
				out = [];
			var puzzlenode =
				this.type === FILE_PBOX_XML ? this.body.querySelector("puzzle") : null;

			/* サイズを表す文字列 */
			if (pzl.type === FILE_PBOX_XML) {
				var sizenode = puzzlenode.querySelector("size");
				if (sizenode) {
					puzzlenode.removeChild(sizenode);
				}
				if (pzl.pid === "slither" || pzl.pid === "kakuro") {
					row++;
					col++;
				}
				puzzlenode.appendChild(
					this.createXMLNode("size", { row: row, col: col })
				);
			} else if (pzl.type === FILE_PBOX && pzl.pid === "kakuro") {
				out.push(row + 1);
				out.push(col + 1);
			} else if (pzl.pid === "sudoku") {
				out.push(col);
			} else {
				out.push(row);
				out.push(col);
			}

			/* サイズ以降のデータを設定 */
			if (pzl.type !== FILE_PBOX_XML) {
				out.push(pzl.body);
			}

			/* 履歴・メタデータ出力がある形式ならば出力する */
			if (pzl.type === FILE_PZPR && !!JSON) {
				if (!pzl.metadata.empty()) {
					var info = { metadata: pzl.metadata.getvaliddata() };
					if (pzl.history) {
						info.history = pzl.history;
					}
					out.push("info:" + JSON.stringify(info, null, 1));
				} else if (pzl.history) {
					out.push("history:" + JSON.stringify(pzl.history, null, 1));
				}
			} else if (pzl.type === FILE_PBOX_XML) {
				var propnode = puzzlenode.querySelector("property");
				if (propnode) {
					puzzlenode.removeChild(propnode);
				}
				propnode = this.createXMLNode("property");
				var meta = pzl.metadata;
				propnode.appendChild(
					this.createXMLNode("author", { value: meta.author })
				);
				propnode.appendChild(
					this.createXMLNode("source", { value: meta.source })
				);
				propnode.appendChild(
					this.createXMLNode("difficulty", { value: meta.hard })
				);
				if (!!meta.comment) {
					var commentnode = this.createXMLNode("comment");
					commentnode.appendChild(this.body.createTextNode(meta.comment));
					propnode.appendChild(commentnode);
				}
				puzzlenode.appendChild(propnode);

				// 順番を入れ替え
				puzzlenode.appendChild(puzzlenode.querySelector("board"));
				puzzlenode.appendChild(puzzlenode.querySelector("answer"));
			}

			var outputdata;
			if (pzl.type !== FILE_PBOX_XML) {
				outputdata = out.join("\n");
			} else {
				outputdata = new XMLSerializer().serializeToString(this.body);
				if (!outputdata.match(/^\<\?xml/)) {
					outputdata = '<?xml version="1.0" encoding="UTF-8"?>\n' + outputdata;
				}
			}
			return outputdata;
		},

		createXMLNode: function(name, attrs) {
			var node = this.body.createElement(name);
			if (!!attrs) {
				for (var i in attrs) {
					node.setAttribute(i, attrs[i]);
				}
			}
			return node;
		},

		//---------------------------------------------------------------------------
		// ★ changeProperPid() parse後パズル種類が実際には別だった場合にpidを変更する
		//---------------------------------------------------------------------------
		changeProperPid: function() {
			if (this.type !== FILE_PZPR) {
				return;
			}

			switch (this.pid) {
				case "ichimaga":
					var pzlflag = this.body.split("\n")[0];
					if (pzlflag === "mag") {
						this.pid = "ichimagam";
					} else if (pzlflag === "cross") {
						this.pid = "ichimagax";
					}
					break;
				case "icelom":
					var pzltype = this.body.split("\n")[2];
					if (pzltype === "skipwhite") {
						this.pid = "icelom2";
					}
					break;
				case "pipelink":
					var lines = this.body.split("\n"),
						row = 1,
						len = this.rows;
					if (
						lines
							.slice(row, row + len)
							.join("")
							.match(/o/)
					) {
						this.pid = "pipelinkr";
					}
					break;
				case "bonsan":
					var lines = this.body.split("\n"),
						row = 2 * this.rows,
						len = 2 * this.rows - 1;
					if (
						lines
							.slice(row, row + len)
							.join("")
							.match(/1/)
					) {
						this.pid = "heyabon";
					}
					break;
				case "kramma":
					var lines = this.body.split("\n"),
						row = this.rows,
						len = this.rows + 1;
					if (
						lines
							.slice(row, row + len)
							.join("")
							.match(/1/)
					) {
						this.pid = "kramman";
					}
					break;
			}
		}
	};
})();

// metadata.js v3.5.2

//---------------------------------------------------------------------------
//  MetaData構造体  作者やコメントなどの情報を保持する
//---------------------------------------------------------------------------
pzpr.MetaData = function() {};
pzpr.MetaData.prototype = {
	author: "",
	source: "",
	hard: "",
	comment: "",
	items: { author: "", source: "", hard: "", comment: "" },

	update: function(metadata) {
		if (!metadata) {
			return;
		}
		for (var i in this.items) {
			if (typeof metadata[i] === "string") {
				this[i] = metadata[i];
			}
		}
	},
	getvaliddata: function() {
		var obj = {};
		for (var i in this.items) {
			if (!!this[i]) {
				obj[i] = this[i];
			}
		}
		return obj;
	},
	reset: function() {
		for (var i in this.items) {
			this[i] = "";
		}
	},
	empty: function() {
		for (var i in this.items) {
			if (!!this[i]) {
				return false;
			}
		}
		return true;
	}
};

// util.js v3.4.0

(function() {
	var api = pzpr.env.API,
		eventMouseDown = ["mousedown"],
		eventMouseMove = ["mousemove"],
		eventMouseUp = ["mouseup"],
		eventMouseCancel = [""];

	if (pzpr.env.bz.AndroidBrowser) {
		eventMouseDown = [""];
		eventMouseMove = [""];
		eventMouseUp = [""];
	}

	if (api.pointerevent) {
		eventMouseDown = ["pointerdown"];
		eventMouseMove = ["pointermove"];
		eventMouseUp = ["pointerup"];
		eventMouseCancel = ["pointercancel"];
	} else if (api.mspointerevent) {
		eventMouseDown = ["MSPointerDown"];
		eventMouseMove = ["MSPointerMove"];
		eventMouseUp = ["MSPointerUp"];
		eventMouseCancel = ["MSPointerCancel"];
	} else if (api.touchevent) {
		eventMouseDown.push("touchstart");
		eventMouseMove.push("touchmove");
		eventMouseUp.push("touchend");
		eventMouseCancel.push("touchcancel");
	}

	//----------------------------------------------------------------------
	// EventやDOM関連のツール的関数群
	//----------------------------------------------------------------------
	pzpr.util = {
		//---------------------------------------------------------------
		// pzpr.jsが読み込まれているスクリプトのパスを取得する
		getpath: function() {
			if (pzpr.env.browser) {
				var srcs = document.getElementsByTagName("script");
				for (var i = 0; i < srcs.length; i++) {
					var result = srcs[i].src.match(/^(.*\/)pzpr\.js(?:\?.*)?$/);
					if (result) {
						return result[1] + (!result[1].match(/\/$/) ? "/" : "");
					}
				}
			} else {
				return (
					require("path").dirname(__filename) +
					"/" +
					(__filename.match("pzpr.js") ? "" : "../")
				);
			}
			return "";
		},

		//---------------------------------------------------------------
		// 現在の時間を取得
		currentTime: function() {
			return new Date().getTime();
		},

		//---------------------------------------------------------------
		// Elementの生成関連
		//---------------------------------------------------------------
		unselectable: function(el) {
			el.style.MozUserSelect = "none";
			el.style.KhtmlUserSelect = "none";
			el.style.webkitUserSelect = "none";
			el.style.msUserSelect = "none";
			el.style.userSelect = "none";
			el.unselectable = "on";
			return this;
		},

		//----------------------------------------------------------------------
		// pzpr.util.addEvent()          addEventListener()を呼び出す
		//----------------------------------------------------------------------
		addEvent: function(el, type, self, callback, capt) {
			var types = [type];
			if (type === "mousedown") {
				types = eventMouseDown;
			} else if (type === "mousemove") {
				types = eventMouseMove;
			} else if (type === "mouseup") {
				types = eventMouseUp;
			} else if (type === "mousecancel") {
				types = eventMouseCancel;
			}

			function executer(e) {
				callback.call(self, e);
			}
			types.forEach(function(type) {
				el.addEventListener(type, executer, !!capt);
			});

			return function remover() {
				types.forEach(function(type) {
					el.removeEventListener(type, executer, !!capt);
				});
			};
		},

		//---------------------------------------------------------------------------
		// pzpr.util.getMouseButton() 左/中/右ボタンが押されているかチェックする
		//---------------------------------------------------------------------------
		getMouseButton: function(e) {
			if (e.touches !== void 0) {
				/* touchイベントだった場合 */
				return e.touches.length === 1 ? "left" : "";
			} else if (!!e.pointerType && e.pointerType !== "mouse") {
				/* pointerイベントだった場合 */
				return e.isPrimary ? "left" : "";
			}
			return (
				["left", "middle", "right"][
					e.button !== void 0 ? e.button : e.which - 1
				] || ""
			);
		},

		//----------------------------------------------------------------------
		// pzpr.util.getPagePos() イベントが起こったページ上の座標を返す
		// pzpr.util.pageX()      イベントが起こったページ上のX座標を返す
		// pzpr.util.pageY()      イベントが起こったページ上のY座標を返す
		//----------------------------------------------------------------------
		getPagePos: function(e) {
			return { px: this.pageX(e), py: this.pageY(e) };
		},
		pageX: function(e) {
			if (e.touches !== void 0 && e.touches.length > 0) {
				var len = e.touches.length,
					pos = 0;
				if (len > 0) {
					for (var i = 0; i < len; i++) {
						pos += e.touches[i].pageX;
					}
					return pos / len;
				}
			}
			return e.pageX || 0;
		},
		pageY: function(e) {
			if (e.touches !== void 0 && e.touches.length > 0) {
				var len = e.touches.length,
					pos = 0;
				if (len > 0) {
					for (var i = 0; i < len; i++) {
						pos += e.touches[i].pageY;
					}
					return pos / len;
				}
			}
			return e.pageY || 0;
		},

		//--------------------------------------------------------------------------------
		// pzpr.util.getRect()   エレメントの四辺の座標を返す
		//--------------------------------------------------------------------------------
		getRect: function(el) {
			if (!pzpr.env.browser) {
				return { top: 0, bottom: 0, left: 0, right: 0, height: 0, width: 0 };
			}
			var rect = el.getBoundingClientRect(),
				scrollLeft,
				scrollTop;
			if (window.scrollX !== void 0) {
				scrollLeft = window.scrollX;
				scrollTop = window.scrollY;
			} else {
				/* IE11以下向け */
				var _html = document.documentElement;
				scrollLeft = _html.scrollLeft;
				scrollTop = _html.scrollTop;
			}
			var left = rect.left + scrollLeft;
			var top = rect.top + scrollTop;
			var right = rect.right + scrollLeft;
			var bottom = rect.bottom + scrollTop;
			return {
				top: top,
				bottom: bottom,
				left: left,
				right: right,
				height: bottom - top,
				width: right - left
			};
		},

		//---------------------------------------------------------------------------
		// pzpr.util.checkpid()  メニューなどが表示対象のパズルかどうか返す
		//---------------------------------------------------------------------------
		checkpid: function(str, pid) {
			var matches = str.match(/!?[a-z0-9-]+/g),
				isdisp = true;
			if (!!matches) {
				isdisp = false;
				for (var i = 0; i < matches.length; i++) {
					if (matches[i].charAt(0) !== "!") {
						if (matches[i] === pid) {
							isdisp = true;
						}
					} else {
						isdisp = matches[i].substr(1) !== pid;
					}
				}
			}
			return isdisp;
		},

		sameArray: function(array1, array2) {
			if (array1.length !== array2.length) {
				return false;
			}
			for (var k = 0; k < array2.length; k++) {
				if (array1[k] !== array2[k]) {
					return false;
				}
			}
			return true;
		}
	};
})();

// Puzzle.js v3.6.0

(function() {
	//---------------------------------------------------------------------------
	// ★Puzzleクラス ぱずぷれv3のベース処理やその他の処理を行う
	//---------------------------------------------------------------------------
	pzpr.Puzzle = function(canvas, option) {
		this.pzpr = pzpr;

		if (option === void 0 && (!canvas || !canvas.parentNode)) {
			option = canvas;
			canvas = void 0;
		}
		option = option || {};

		this.instancetype = option.type || "editor";
		var modeid = { player: 1, viewer: 2 }[this.instancetype || 0] || 0;
		this.playeronly = !!modeid; // 回答モードのみで動作する
		this.editmode = !this.playeronly; // 問題配置モード
		this.playmode = !this.editmode; // 回答モード

		this.resetTime();

		this.preInitCanvasInfo = {
			type: option.graphic || "",
			width: option.width || null,
			height: option.height || null,
			cellsize: option.cellsize || null
		};

		this.listeners = {};

		this.metadata = new pzpr.MetaData();

		this.config = new this.Config(this);
		if (option.config !== void 0) {
			this.config.setAll(option.config);
		}
		if (option.mode !== void 0) {
			this.setMode(option.mode);
		}
		if (option.variant !== void 0) {
			this.config.set("variant", true);
		}

		if (!!canvas) {
			this.setCanvas(canvas);
		}

		pzpr.classmgr.setClasses(this, "");
		initObjects(this);
	};
	pzpr.Puzzle.prototype = {
		pid: null, // パズルのID("creek"など)
		info: {}, // VarietyInfoへの参照

		klass: null,

		ready: false, // 盤面の準備ができたかを示す (Canvas準備完了前にtrueになる)
		editmode: false, // 問題配置モード
		playmode: false, // 回答モード
		playeronly: false, // 回答モードのみで動作する
		instancetype: "", // editpr/player/viewerのいずれか

		starttime: 0,
		pausetime: null,

		canvas: null, // 描画canvas本体
		subcanvas: null, // 補助canvas

		listeners: null,

		config: null,

		metadata: null, // 作者やコメントなどの情報

		// モード設定用定数
		MODE_EDITOR: 1,
		MODE_PLAYER: 3,

		//---------------------------------------------------------------------------
		// owner.open()    パズルデータを入力して盤面の初期化を行う
		//---------------------------------------------------------------------------
		open: function(data, variety, callback) {
			openExecute(this, data, variety, callback);
			return this;
		},

		//---------------------------------------------------------------------------
		// owner.on()   イベントが発生した時に呼ぶ関数を登録する
		// owner.once() イベントが発生した時に1回だけ呼ぶ関数を登録する
		// owner.addListener() on, onceの共通処理
		// owner.emit() イベントが発生した時に呼ぶ関数を実行する
		//---------------------------------------------------------------------------
		on: function(eventname, func) {
			this.addListener(eventname, func, false);
		},
		once: function(eventname, func) {
			this.addListener(eventname, func, true);
		},
		addListener: function(eventname, func, once) {
			if (!this.listeners[eventname]) {
				this.listeners[eventname] = [];
			}
			this.listeners[eventname].push({ func: func, once: !!once });
		},
		emit: function() {
			var args = Array.prototype.slice.apply(arguments),
				eventname = args.shift();
			var evlist = this.listeners[eventname];
			if (!!evlist) {
				args.unshift(this);
				for (var i = 0; i < evlist.length; i++) {
					var ev = evlist[i];
					if (evlist[i].once) {
						evlist.splice(i, 1);
						i--;
					}
					ev.func.apply(this, args);
				}
			}
		},

		//---------------------------------------------------------------------------
		// owner.setCanvas()  描画キャンバスをセットする
		//---------------------------------------------------------------------------
		setCanvas: function(el, type) {
			if (!el) {
				return;
			}

			var rect = pzpr.util.getRect(el);
			var _div = document.createElement("div");
			_div.style.width = rect.width + "px";
			_div.style.height = rect.height + "px";
			el.appendChild(_div);
			this.canvas = _div;

			setCanvas_main(this, type || this.preInitCanvasInfo.type);
		},

		//---------------------------------------------------------------------------
		// owner.setCanvasSize()           盤面のサイズを設定する
		// owner.setCanvasSizeByCellSize() セルのサイズを指定して盤面のサイズを設定する
		//---------------------------------------------------------------------------
		setCanvasSize: function(width, height) {
			if (!this.preInitCanvasInfo) {
				this.painter.resizeCanvas(width, height);
			} else {
				this.preInitCanvasInfo.width = width;
				this.preInitCanvasInfo.height = height;
			}
		},
		setCanvasSizeByCellSize: function(cellsize, absolute) {
			if (!this.preInitCanvasInfo) {
				this.painter.resizeCanvasByCellSize(cellsize, absolute);
			} else {
				this.preInitCanvasInfo.cellsize =
					cellsize * (absolute ? 1 : this.painter.cellexpandratio);
			}
		},

		//---------------------------------------------------------------------------
		// owner.redraw()      盤面の再描画を行う
		// owner.irowake()     色分けをする場合、色をふり直すルーチンを呼び出す
		//---------------------------------------------------------------------------
		redraw: function(forcemode) {
			if (!forcemode) {
				this.painter.paintAll();
			} // 盤面キャッシュを保持して再描画
			else {
				this.painter.resizeCanvas();
			} // 盤面キャッシュを破棄して再描画
		},
		irowake: function() {
			this.board.irowakeRemake();
			if (this.execConfig("irowake") || this.execConfig("irowakeblk")) {
				this.redraw();
			}
		},

		//---------------------------------------------------------------------------
		// owner.toDataURL() 盤面画像をDataURLとして出力する
		// owner.toBlob()    盤面画像をBlobとして出力する
		// owner.toBuffer()  盤面画像をファイルデータそのままで出力する
		//---------------------------------------------------------------------------
		toDataURL: function(type, quality, option) {
			var imageopt = parseImageOption(type, quality, option);
			var canvas = getLocalCanvas(this, imageopt);
			var dataurl = canvas.toDataURL(imageopt.mimetype, imageopt.quality);
			if (!!canvas.parentNode) {
				canvas.parentNode.removeChild(canvas);
			}
			return dataurl;
		},
		toBlob: function(callback, type, quality, option) {
			var imageopt = parseImageOption(type, quality, option);
			var canvas = getLocalCanvas(this, imageopt);
			canvas.toBlob(
				function(blob) {
					callback(blob);
					if (!!canvas.parentNode) {
						canvas.parentNode.removeChild(canvas);
					}
				},
				imageopt.mimetype,
				imageopt.quality
			);
		},
		toBuffer: function(type, quality, option) {
			var imageopt = parseImageOption(type, quality, option);
			var canvas = getLocalCanvas(this, imageopt);
			var data = canvas.toBuffer(imageopt.mimetype, imageopt.quality);
			if (!!canvas.parentNode) {
				canvas.parentNode.removeChild(canvas);
			}
			return data;
		},

		//---------------------------------------------------------------------------
		// owner.getURL()      URLを取得する
		// owner.getFileData() ファイルデータを取得する
		//---------------------------------------------------------------------------
		getURL: function(type, mode) {
			return new this.klass.Encode().encodeURL(type, mode);
		},
		getFileData: function(type, option) {
			return new this.klass.FileIO().fileencode(type, option);
		},

		//---------------------------------------------------------------------------
		// owner.resetTime()      開始時間をリセットする
		// owner.getTime()        開始からの時間をミリ秒単位で取得する
		//---------------------------------------------------------------------------
		resetTime: function() {
			this.starttime = pzpr.util.currentTime();
		},
		getTime: function() {
			return this.pausetime === null
				? pzpr.util.currentTime() - this.starttime
				: this.pausetime - this.starttime;
		},
		togglePause: function() {
			if (this.pausetime === null) {
				document.body.classList.add("paused");
				this.pausetime = pzpr.util.currentTime();
			} else {
				document.body.classList.remove("paused");
				this.starttime += pzpr.util.currentTime() - this.pausetime;
				this.pausetime = null;
			}
		},

		//---------------------------------------------------------------------------
		// owner.undo()  Undoを実行する
		// owner.redo()  Redoを実行する
		// owner.undoall()  Undoを最後まで実行する
		// owner.redoall()  Redoを最後まで実行する
		// owner.isModified() ファイルに保存されていない操作がある時にtrueを返す
		// owner.saved()      ismodifiedで返す値をfalseに戻す
		//---------------------------------------------------------------------------
		undo: function() {
			return this.opemgr.undo();
		},
		redo: function() {
			return this.opemgr.redo();
		},
		undoall: function() {
			while (this.opemgr.undo()) {}
		},
		redoall: function() {
			while (this.opemgr.redo()) {}
		},
		ismodified: function() {
			return this.opemgr.isModified();
		},
		saved: function() {
			return this.opemgr.resetModifiedState();
		},

		//---------------------------------------------------------------------------
		// puzzle.enterTrial()      TrialModeに設定する (多重設定可能)
		// puzzle.acceptTrial()     TrialModeを確定する
		// puzzle.rejectTrial()     TrialModeの履歴をすべて破棄する
		// puzzle.rejectCurrentTrial() TrialModeの現在の履歴を破棄して一つ前のTrial mode stageに戻る
		//---------------------------------------------------------------------------
		enterTrial: function() {
			this.opemgr.enterTrial();
		},
		acceptTrial: function() {
			this.opemgr.acceptTrial();
		},
		rejectTrial: function() {
			this.opemgr.rejectTrial(true);
		},
		rejectCurrentTrial: function() {
			this.opemgr.rejectTrial(false);
		},

		//------------------------------------------------------------------------------
		// owner.check()          正答判定処理を行う
		//------------------------------------------------------------------------------
		check: function(activemode) {
			if (!!activemode) {
				this.key.keyreset();
				this.mouse.mousereset();
			}
			return this.checker.check(activemode);
		},

		//------------------------------------------------------------------------------
		// owner.ansclear()       回答を消去する
		// owner.subclear()       補助記号を消去する
		// owner.errclear()       エラー表示を消去する
		// owner.clear()          回答・履歴を消去する
		//------------------------------------------------------------------------------
		ansclear: function() {
			this.board.ansclear();
			this.board.rebuildInfo();
			this.redraw();
		},
		subclear: function() {
			this.board.subclear();
			this.redraw();
		},
		errclear: function() {
			var isclear = this.board.errclear();
			if (isclear) {
				this.redraw(true); /* 描画キャッシュを破棄して描画し直す */
			}
			return isclear;
		},
		clear: function() {
			if (this.playeronly) {
				this.ansclear();
				this.opemgr.allerase();
			} else {
				this.board.initBoardSize();
				this.redraw();
			}
		},

		//------------------------------------------------------------------------------
		// owner.setMode() モード変更時の処理を行う
		//------------------------------------------------------------------------------
		setMode: function(newval) {
			if (this.playeronly) {
				return;
			}
			if (typeof newval === "string") {
				newval = { edit: 1, play: 3 }[newval.substr(0, 4)];
				if (newval === void 0) {
					return;
				}
			}
			this.editmode = newval === this.MODE_EDITOR;
			this.playmode = !this.editmode;

			if (!!this.klass) {
				this.cursor.adjust_modechange();
				this.key.keyreset();
				this.mouse.modechange();
				this.board.errclear();
				this.redraw();
			}

			this.emit("config", "mode", newval);
			this.emit("mode");
		},

		//------------------------------------------------------------------------------
		// owner.getConfig()  設定値の取得を行う
		// owner.setConfig()  設定値の設定を行う
		// owner.resetConfig()設定値を初期値に戻す
		// owner.validConfig() 設定値が現在のパズルで有効な設定値かどうか返す
		// owner.execConfig() 設定値と、パズルごとに有効かどうかの条件をANDして返す
		//------------------------------------------------------------------------------
		getConfig: function(idname) {
			return this.config.get(idname);
		},
		setConfig: function(idname, val) {
			return this.config.set(idname, val);
		},
		resetConfig: function(idname) {
			return this.config.reset(idname);
		},
		validConfig: function(idname) {
			return this.config.getexec(idname);
		},
		execConfig: function(idname) {
			return this.config.get(idname) && this.config.getexec(idname);
		},

		//------------------------------------------------------------------------------
		// owner.getCurrentConfig() 現在有効な設定と設定値を返す
		// owner.saveConfig()     設定値の保存を行う
		// owner.restoreConfig()  設定値の復帰を行う
		//------------------------------------------------------------------------------
		getCurrentConfig: function() {
			return this.config.getList();
		},
		saveConfig: function() {
			return this.config.getAll();
		},
		restoreConfig: function(obj) {
			this.config.setAll(obj);
		}
	};

	//---------------------------------------------------------------------------
	//  openExecute()      各オブジェクトの生成などの処理
	//---------------------------------------------------------------------------
	function openExecute(puzzle, data, variety, callback) {
		if (typeof variety !== "string" && !callback) {
			callback = variety;
			variety = void 0;
		}

		puzzle.ready = false;

		var classes = puzzle.klass;
		var Board = !!classes && !!classes.Board ? classes.Board : null;
		var pzl = pzpr.parser(data, variety || puzzle.pid);

		pzpr.classmgr.setPuzzleClass(puzzle, pzl.pid, function() {
			/* パズルの種類が変わっていればオブジェクトを設定しなおす */
			if (Board !== puzzle.klass.Board) {
				initObjects(puzzle);
			} else {
				puzzle.painter.suspendAll();
			}

			try {
				puzzle.metadata.reset();
				if (pzl.isurl) {
					new puzzle.klass.Encode().decodeURL(pzl);
				} else if (pzl.isfile) {
					new puzzle.klass.FileIO().filedecode(pzl);
				}

				puzzle.ready = true;
				puzzle.emit("ready");
				puzzle.emit("mode");

				if (!!puzzle.canvas) {
					postCanvasReady(puzzle);
				}

				puzzle.resetTime();

				if (!!callback) {
					callback(puzzle);
				}
			} catch (e) {
				puzzle.emit("fail-open");
				throw e;
			}
		});
	}

	//---------------------------------------------------------------------------
	//  initObjects()      各オブジェクトの生成などの処理
	//---------------------------------------------------------------------------
	function initObjects(puzzle) {
		var classes = puzzle.klass;

		// クラス初期化
		puzzle.board = new classes.Board(); // 盤面オブジェクト
		pzpr.classmgr.setPrototypeRef(puzzle, "board", puzzle.board);

		puzzle.checker = new classes.AnsCheck(); // 正解判定オブジェクト
		puzzle.painter = new classes.Graphic(); // 描画系オブジェクト

		puzzle.cursor = new classes.TargetCursor(); // 入力用カーソルオブジェクト
		puzzle.mouse = new classes.MouseEvent(); // マウス入力オブジェクト
		puzzle.key = new classes.KeyEvent(); // キーボード入力オブジェクト

		puzzle.opemgr = new classes.OperationManager(); // 操作情報管理オブジェクト

		puzzle.faillist = new classes.FailCode(); // 正答判定文字列を保持するオブジェクト
	}

	//---------------------------------------------------------------------------
	//  setCanvas_main()  描画キャンバスをセットする
	//  createSubCanvas() 補助キャンバスを作成する
	//---------------------------------------------------------------------------
	function setCanvas_main(puzzle, type) {
		/* fillTextが使えない場合は強制的にSVG描画に変更する */
		if (
			type === "canvas" &&
			!!pzpr.Candle.enable.canvas &&
			!CanvasRenderingContext2D.prototype.fillText
		) {
			type = "svg";
		}

		pzpr.Candle.start(puzzle.canvas, type, function(g) {
			pzpr.util.unselectable(g.canvas);
			g.child.style.pointerEvents = "none";
			if (g.use.canvas && !puzzle.subcanvas) {
				var canvas = (puzzle.subcanvas = createSubCanvas("canvas"));
				if (!!document.body) {
					canvas.id =
						"_" + new Date().getTime() + type; /* 何か他とかぶらないようなID */
					canvas.style.position = "absolute";
					canvas.style.left = "-10000px";
					canvas.style.top = "0px";
					document.body.appendChild(canvas);
				}
			}
			if (puzzle.ready) {
				postCanvasReady(puzzle);
			}
		});
	}
	function createSubCanvas(type) {
		if (!pzpr.Candle.enable[type]) {
			return null;
		}
		var el = document.createElement("div");
		pzpr.Candle.start(el, type);
		return el;
	}

	//---------------------------------------------------------------------------
	//  postCanvasReady()  Canvas設定＆ready後の初期化処理を行う
	//---------------------------------------------------------------------------
	function postCanvasReady(puzzle) {
		var pc = puzzle.painter,
			opt = puzzle.preInitCanvasInfo;

		if (puzzle.preInitCanvasInfo) {
			if (puzzle.instancetype !== "viewer") {
				setCanvasEvents(puzzle);
			} else {
				pc.outputImage = true;
			}
			if (!pc.canvasWidth || !pc.canvasHeight) {
				if (!!opt.width && !!opt.height) {
					pc.resizeCanvas(opt.width, opt.height);
				} else if (!!opt.cellsize) {
					pc.resizeCanvasByCellSize(opt.cellsize, true);
				}
			}
			delete puzzle.preInitCanvasInfo;
		}

		pc.initCanvas();
	}

	//---------------------------------------------------------------------------
	//  setCanvasEvents() マウス入力に関するイベントを設定する
	//  exec????()        マウス入力へ分岐する(puzzle.mouseが不変でないためバイパスする)
	//---------------------------------------------------------------------------
	function setCanvasEvents(puzzle) {
		function ae(type, func) {
			pzpr.util.addEvent(puzzle.canvas, type, puzzle, func);
		}

		// マウス入力イベントの設定
		ae("mousedown", execMouseDown);
		ae("mousemove", execMouseMove);
		ae("mouseup", execMouseUp);
		ae("mousecancel", execMouseCancel);
		puzzle.canvas.oncontextmenu = function() {
			return false;
		};
		puzzle.canvas.style.touchAction = "pinch-zoom";

		// キー入力イベントの設定
		ae("keydown", execKeyDown);
		ae("keyup", execKeyUp);

		ae("click", function(e) {
			e.stopPropagation();
			e.preventDefault();
		});
	}
	function execMouseDown(e) {
		if (!!this.mouse) {
			this.mouse.e_mousedown(e);
		}
	}
	function execMouseMove(e) {
		if (!!this.mouse) {
			this.mouse.e_mousemove(e);
		}
	}
	function execMouseUp(e) {
		if (!!this.mouse) {
			this.mouse.e_mouseup(e);
		}
	}
	function execMouseCancel(e) {
		if (!!this.mouse) {
			this.mouse.e_mousecancel(e);
		}
	}
	function execKeyDown(e) {
		if (!!this.key) {
			this.key.e_keydown(e);
		}
	}
	function execKeyUp(e) {
		if (!!this.key) {
			this.key.e_keyup(e);
		}
	}

	//---------------------------------------------------------------------------
	//  generateLocalCanvas()  toDataURL, toBlobの共通処理
	//---------------------------------------------------------------------------
	function getLocalCanvas(puzzle, imageopt) {
		var imgcanvas = createSubCanvas(imageopt.type);

		var pc2 = new puzzle.klass.Graphic();
		pc2.context = imgcanvas.getContext("2d");
		pc2.context.enableTextLengthWA = false;
		pc2.outputImage = true; /* 一部画像出力時に描画しないオブジェクトがあるパズル向け設定 */
		if ("bgcolor" in imageopt) {
			pc2.bgcolor = imageopt.bgcolor;
		}
		if (puzzle.pid === "kramma" || puzzle.pid === "swslither") {
			pc2.imgtile = puzzle.painter.imgtile;
		}
		if ("bank" in imageopt) {
			pc2.showBank = imageopt.bank;
		}

		// canvasの設定を適用して、再描画
		pc2.resizeCanvasByCellSize(imageopt.cellsize);
		pc2.unsuspend();

		return imgcanvas;
	}

	//---------------------------------------------------------------------------
	//  generateLocalCanvas()  toDataURL, toBlobの入力オプション解析処理
	//---------------------------------------------------------------------------
	function parseImageOption() {
		// (type,quality,option)のはず
		var imageopt = {};
		var type = pzpr.Candle.current;
		var cellsize = null,
			bgcolor = null,
			quality = null,
			bank = null;
		for (var i = 0; i < arguments.length; i++) {
			var argv = arguments[i];
			switch (typeof argv) {
				case "string":
					type = argv;
					break;
				case "number":
					if (argv > 1.01) {
						cellsize = argv;
					} else {
						quality = argv;
					}
					break;
				case "object":
					if ("cellsize" in argv) {
						cellsize = argv.cellsize;
					}
					if ("bgcolor" in argv) {
						bgcolor = argv.bgcolor;
					}
					if ("bank" in argv) {
						bank = argv.bank;
					}
					break;
			}
		}

		imageopt.type = (type || pzpr.Candle.current).match(/svg/)
			? "svg"
			: "canvas";
		imageopt.mimetype =
			imageopt.type !== "svg" ? "image/" + type : "image/svg+xml";
		if (quality !== null && quality !== void 0) {
			imageopt.quality = quality;
		}

		if (cellsize !== null) {
			imageopt.cellsize = cellsize;
		}
		if (bgcolor !== null) {
			imageopt.bgcolor = bgcolor;
		}
		if (bank !== null) {
			imageopt.bank = bank;
		}

		return imageopt;
	}
})();

// Config.js v3.4.1

(function() {
	//---------------------------------------------------------------------------
	// ★Configクラス 設定値の値などを保持する
	//---------------------------------------------------------------------------
	var Config = (pzpr.Puzzle.prototype.Config = function(puzzle) {
		this.puzzle = puzzle;
		this.init();
	});
	Config.prototype = {
		list: null /* 設定値 */,

		//---------------------------------------------------------------------------
		// config.init()        各設定値を初期化する
		// config.add()         初期化時に設定を追加する
		//---------------------------------------------------------------------------
		init: function() {
			this.list = {};

			var touchDevice = pzpr.env.API.lowaccuracy || pzpr.env.API.touchevent;

			/* 盤面表示設定 */
			this.add("font", 1, {
				option: [1, 2]
			}); /* 文字の描画 1:ゴシック 2:明朝 */
			this.add("cursor", true); /* カーソルの表示 */
			this.add("trialmarker", true); /* show trial marker */
			this.add("timer", true); /* show timer */
			this.add("irowake", false, { variety: true }); /* 線の色分け */
			this.add("irowakeblk", false, { variety: true }); /* 黒マスの色分け */

			this.add("dispmove", true); /* 線で動かすパズルで実際に動いたように描画 */
			this.add("disptype_yajilin", 1, {
				option: [1, 2]
			}); /* yajilin: 表示形式 */
			this.add("disptype_bosanowa", 1, {
				option: [1, 2, 3]
			}); /* bosanowa: 表示形式 */
			this.add("disptype_interbd", 3, {
				option: [1, 2, 3]
			}); /* interbd: Clue display mode */
			this.add("snakebd", false); /* hebi: へびの境界線を表示する */
			this.add(
				"ensquare",
				true
			); /* tajmahal: Only draw given from square centers */
			this.add("context_marks", true);
			this.add("dispqnumbg", false); /* yinyang: 問題のまるに背景色をつける */
			this.add("undefcell", true); /* shugaku: 未確定マスはグレー表示にする */
			this.add("mouseonly", false); /* lollipops: Alternative mouse input */
			this.add(
				"patchwork_leftaux",
				true
			); /* patchwork: Alternative mouse input */
			this.add("squarecell", true); /* セルは正方形にする */

			/* 入力方法設定 */
			this.add("use", !touchDevice ? 1 : 2, {
				option: [1, 2]
			}); /* 黒マスの入力方法 */
			this.add("use_tri", 1, {
				option: [1, 2, 3]
			}); /* shakashaka: 三角形の入力方法 */
			this.add(
				"support_tri",
				true
			); /* shakashaka: 三角形の入力補助 (for 2つ以上の壁に接したCell) */

			this.add("bgcolor", false); /* slither 背景色入力 */
			this.add(
				"singlenum",
				!touchDevice
			); /* hanare: 部屋に回答数字を一つだけ入力 */
			this.add("singleregion", true); /* parquet: Unshade all other regions */
			this.add("enline", true); /* kouchoku: 線は点の間のみ引ける */
			this.add("lattice", true); /* kouchoku: 格子点チェック */

			/* 回答お助け機能 */
			this.add("autocmp", true, {
				variety: true
			}); /* 数字 or kouchokuの正解の点をグレーにする */
			this.add("autoerr", false, {
				variety: true
			}); /* hitori:ひとくれの重複した数字を表示, gokigen,wagiri:斜線の色分け */

			/* 正解判定 */
			this.add("multierr", false); /* エラー判定で複数エラーを出力する */
			this.add(
				"forceallcell",
				false
			); /* fillomino: すべての数字が入っている時のみ正解とする */

			/* puzzle variant rules; must defaut to false */
			this.add("dontpassallcell", false, {
				variant: true,
				volatile: true
			}); /* arukone: don't require passing all cells */
			this.add("aquarium_regions", false, {
				variant: true,
				volatile: true
			}); /* aquarium: Rule variation for disconnected cells in one region */
			this.add("country_empty", false, { variant: true, volatile: true });
			this.add("voxas_tatami", false, {
				variant: true,
				volatile: true
			}); /* voxas: Rule variation for disallowing crossing borders */
			this.add("tren_new", false, {
				variant: true,
				volatile: true
			}); /* tren: Rule variation for connecting unused cells */
			this.add("nuriuzu_connect", false, {
				variant: true,
				volatile: true
			}); /* nuriuzu: Rule variation for shaded connectivity */
			this.add("balloon_adjacent", false, {
				variant: true,
				volatile: true
			}); /* balloon: Disallow strings being adjacent */
			this.add("bdwalk_height", false, {
				variant: true,
				volatile: true
			}); /* bdwalk: Rule variation for allowing any height */
			this.add("pentopia_transparent", false, {
				variant: true,
				volatile: true
			}); /* pentopia: Allow shading clues */
			this.add("yajilin_out", false, {
				variant: true,
				volatile: true
			}); /* yajilin: All shaded cells are outside the loop */
			this.add("koburin_minesweeper", false, {
				variant: true,
				volatile: true
			}); /* koburin: Orthogonal and diagonal clues */
			this.add("akichi_maximum", false, {
				variant: true,
				volatile: true
			}); /* akichi: Numbers don't need to be attained */
			this.add("magnets_anti", false, {
				variant: true,
				volatile: true
			}); /* magnets: Adjacent poles of different magnets must be equal */
			this.add("heyapin_overlap", false, {
				variant: true,
				volatile: true
			}); /* heyapin: Pins must overlap at least 2 regions */
			this.add("aqre_borders", false, {
				variant: true,
				volatile: true
			}); /* Borders must touch exactly one shaded cell */
			this.add("fillomino_tri", false, {
				variant: true,
				volatile: true
			}); /* Maximum number is 3 */
			this.add("slither_full", false, {
				variant: true,
				volatile: true
			}); /* All vertices must be visited */
			this.add("loop_full", false, {
				variant: true,
				volatile: true
			}); /* All cells must be visited */
			/* generic variant */
			this.add("variant", false, { variant: true, volatile: true });
			this.add("variantid", "", { volatile: true });

			/* EDITORのみ */
			this.add("discolor", false); /* tentaisho: 色分け無効化 */
			/* その他の特殊項目(保存なし) */
			this.add("uramashu", false, { volatile: true }); /* 裏ましゅにする */
		},
		add: function(name, defvalue, extoption) {
			if (!extoption) {
				extoption = {};
			}
			var item = {
				val: defvalue,
				defval: defvalue,
				volatile: !!(extoption.volatile || extoption.variant),
				extoption: extoption // stored for the benefit of ui.MenuConfig
			};
			if (!!extoption.option) {
				item.option = extoption.option;
			}
			if (!!extoption.variety) {
				item.variety = {};
			}
			if (!!extoption.variant) {
				item.variant = true;
			}
			this.list[name] = item;
		},

		//---------------------------------------------------------------------------
		// config.getCurrentName() 以前のconfig名から現在使用している名称を取得する
		// config.getNormalizedName() Config名が@付きだった場合varietyのpidを返す
		//---------------------------------------------------------------------------
		getCurrentName: function(name) {
			switch (name) {
				case "color_qanscolor":
					name = "color_shadecolor";
					break;
				case "autocmp_area":
					if (this.getexec("autocmp")) {
						name = "autocmp";
					}
					break;
				case "autocmp_border":
					if (this.getexec("autocmp")) {
						name = "autocmp";
					}
					break;
			}
			return name;
		},
		getNormalizedName: function(argname) {
			var info = { name: argname };
			if (argname.match(/\@/)) {
				var splitted = argname.split(/\@/);
				info.name = splitted[0];
				var pid = pzpr.variety.toPID(splitted[1]);
				if (!!pid) {
					info.pid = pid;
				}
			}
			info.name = this.getCurrentName(info.name);
			return info;
		},

		//---------------------------------------------------------------------------
		// config.get()  各フラグの設定値を返す
		// config.set()  各フラグの設定値を設定する
		// config.reset()各フラグの設定値を初期値に戻す
		//---------------------------------------------------------------------------
		get: function(argname) {
			var names = this.getNormalizedName(argname),
				name = names.name;
			var item = this.list[name];
			if (!item) {
				return null;
			}
			if (!!item.variety) {
				var pid = names.pid !== void 0 ? names.pid : this.puzzle.pid;
				if (item.variety[pid] !== void 0) {
					return item.variety[pid];
				}
			}
			return item.val;
		},
		set: function(argname, newval) {
			var names = this.getNormalizedName(argname),
				name = names.name;
			if (!this.list[name]) {
				return;
			}
			newval = this.setproper(names, newval);
			this.configevent(name, newval);
			this.puzzle.emit("config", name, newval);
		},
		reset: function(argname) {
			var names = this.getNormalizedName(argname);
			var item = this.list[names.name];
			if (!item) {
				return;
			}
			if (!!item.variety && !names.pid) {
				item.variety = {};
				this.set(names.name, item.defval);
			} else {
				this.set(argname, item.defval);
			}
		},

		//---------------------------------------------------------------------------
		// config.getList()  現在有効な設定値のリストを返す
		//---------------------------------------------------------------------------
		getList: function() {
			var conf = {};
			for (var idname in this.list) {
				if (this.getexec(idname)) {
					conf[idname] = this.get(idname);
				}
			}
			return conf;
		},

		getvariant: function(name) {
			var item = this.list[name];
			if (!item) {
				return null;
			}
			return item.variant;
		},
		getVariants: function() {
			var conf = {};
			for (var key in this.list) {
				var item = this.list[key];
				if (!item.variant) {
					continue;
				}
				if (this.getexec(key)) {
					conf[key] = this.get(key);
				}
			}
			return conf;
		},

		//---------------------------------------------------------------------------
		// config.getAll()  全フラグの設定値を返す
		// config.setAll()  全フラグの設定値を設定する
		//---------------------------------------------------------------------------
		getAll: function() {
			var object = {};
			for (var key in this.list) {
				var item = this.list[key];
				if (item.volatile) {
					continue;
				}
				if (item.val !== item.defval) {
					object[key] = item.val;
				}
				if (!item.variety) {
					continue;
				}
				for (var pid in item.variety) {
					if (item.variety[pid] !== item.defval) {
						object[key + "@" + pid] = item.variety[pid];
					}
				}
			}
			return object;
		},
		setAll: function(settings) {
			this.init();
			for (var key in settings) {
				this.set(key, settings[key]);
			}
		},

		//---------------------------------------------------------------------------
		// config.setproper()    設定値の型を正しいものに変換して設定変更する
		//---------------------------------------------------------------------------
		setproper: function(names, newval) {
			var name = names.name;
			var item = this.list[name];
			switch (typeof item.defval) {
				case "boolean":
					newval = !!newval;
					break;
				case "number":
					newval = +newval;
					break;
				case "string":
					newval = "" + newval;
					break;
			}
			if (!item.option || item.option.indexOf(newval) >= 0) {
				if (!!item.variety) {
					var pid = names.pid !== void 0 ? names.pid : this.puzzle.pid;
					if (!!pid) {
						item.variety[pid] = newval;
					}
				} else {
					item.val = newval;
				}
			}
			return newval;
		},

		//---------------------------------------------------------------------------
		// config.getexec()  設定値を現在のパズルで有効かどうか返す
		//---------------------------------------------------------------------------
		getexec: function(name) {
			var puzzle = this.puzzle,
				pid = puzzle.pid,
				EDITOR = !puzzle.playeronly,
				exec = false;
			switch (name) {
				case "use":
					exec = puzzle.mouse.use;
					break;
				case "use_tri":
					exec = pid === "shakashaka";
					break;
				case "support_tri":
					exec = pid === "shakashaka";
					break;
				case "dispmove":
					exec = puzzle.board.linegraph.moveline;
					break;
				case "disptype_bosanowa":
					exec = pid === "bosanowa";
					break;
				case "context_marks":
					exec = pid === "context";
					break;
				case "disptype_yajilin":
					exec =
						pid === "yajilin" ||
						pid === "koburin" ||
						pid === "lixloop" ||
						pid === "retsurin";
					break;
				case "disptype_interbd":
					exec =
						pid === "interbd" || (pid === "outofsight" && !puzzle.board.isMono);
					break;
				case "bgcolor":
					exec = pid === "slither" || pid === "myopia" || pid === "swslither";
					break;
				case "irowake":
					exec = puzzle.painter.irowake;
					break;
				case "irowakeblk":
					exec = puzzle.painter.irowakeblk;
					break;
				case "snakebd":
					exec = pid === "hebi";
					break;
				case "ensquare":
					exec = pid === "tajmahal";
					break;
				case "dispqnumbg":
					exec = pid === "yinyang";
					break;
				case "mouseonly":
					exec = pid === "lollipops" || pid === "magnets";
					break;
				case "patchwork_leftaux":
					exec = pid === "patchwork";
					break;
				case "undefcell":
					exec =
						pid === "shugaku" || pid === "lightshadow" || pid === "nibunnogo";
					break;
				case "autocmp":
					exec = !!puzzle.painter.autocmp;
					break;
				case "autoerr":
					exec = pid === "hitori" || pid === "gokigen" || pid === "wagiri";
					break;
				case "singlenum":
					exec = pid === "hanare" || pid === "putteria" || pid === "twinarea";
					break;
				case "singleregion":
					exec = pid === "parquet";
					break;
				case "enline":
				case "lattice":
					exec = pid === "kouchoku" || pid === "angleloop";
					break;
				case "discolor":
					exec = EDITOR && pid === "tentaisho";
					break;
				case "uramashu":
					exec = pid === "mashu";
					break;
				case "forceallcell":
					exec =
						pid === "fillomino" ||
						pid === "symmarea" ||
						pid === "snakepit" ||
						pid === "keywest";
					break;
				case "dontpassallcell":
					exec = pid === "arukone";
					break;
				case "aquarium_regions":
					exec = pid === "aquarium";
					break;
				case "country_empty":
					exec = pid === "country";
					break;
				case "voxas_tatami":
					exec = pid === "voxas";
					break;
				case "tren_new":
					exec = pid === "tren" || pid === "news";
					break;
				case "nuriuzu_connect":
					exec = pid === "nuriuzu";
					break;
				case "bdwalk_height":
					exec = pid === "bdwalk";
					break;
				case "balloon_adjacent":
					exec = pid === "balloon";
					break;
				case "pentopia_transparent":
					exec = pid === "pentopia" || pid === "distopia";
					break;
				case "koburin_minesweeper":
					exec = pid === "koburin";
					break;
				case "akichi_maximum":
					exec = pid === "akichi";
					break;
				case "magnets_anti":
					exec = pid === "magnets";
					break;
				case "heyapin_overlap":
					exec = pid === "heyapin";
					break;
				case "aqre_borders":
					exec = pid === "aqre";
					break;
				case "fillomino_tri":
					exec = pid === "fillomino";
					break;
				case "yajilin_out":
					exec =
						[
							"yajilin",
							"yajilin-regions",
							"koburin",
							"lixloop",
							"retsurin"
						].indexOf(pid) >= 0;
					break;
				case "slither_full":
					exec =
						[
							"slither",
							"tslither",
							"swslither",
							"myopia",
							"lineofsight"
						].indexOf(pid) >= 0;
					break;
				case "loop_full":
					exec =
						[
							"mashu",
							"geradeweg",
							"disloop",
							"midloop",
							"ovotovata",
							"balance",
							"turnaround",
							"turnrun",
							"icewalk",
							"waterwalk",
							"firewalk",
							"forestwalk",
							"morningwalk",
							"wataridori"
						].indexOf(pid) >= 0;
					break;
				default:
					exec = !!this.list[name];
			}
			return exec;
		},

		//---------------------------------------------------------------------------
		// config.configevent()  設定変更時の動作を記述する
		//---------------------------------------------------------------------------
		configevent: function(name, newval) {
			var puzzle = this.puzzle;
			if (!puzzle.klass || !this.getexec(name)) {
				return;
			}
			switch (name) {
				case "irowake":
				case "irowakeblk":
				case "dispmove":
				case "cursor":
				case "trialmarker":
				case "undefcell":
				case "autocmp":
				case "autoerr":
				case "aquarium_regions":
				case "koburin_minesweeper":
				case "snakebd":
				case "context_marks":
				case "disptype_yajilin":
				case "disptype_interbd":
				case "dispqnumbg":
				case "mouseonly":
					puzzle.redraw();
					break;

				case "font":
					puzzle.painter.initFont();
					puzzle.redraw();
					break;

				case "multierr":
					puzzle.checker.resetCache();
					break;

				case "disptype_bosanowa":
					puzzle.setCanvasSizeByCellSize(); /* セルのサイズを変えないために、この関数を引数なしで呼び出す */
					break;

				case "uramashu":
					puzzle.board.revCircleConfig(newval);
					puzzle.redraw();
					break;
			}
		}
	};
})();

// Address.js v3.4.1

pzpr.classmgr.makeCommon({
	//----------------------------------------------------------------------------
	// ★Positionクラス Address, Pieceクラスのベースクラス
	//---------------------------------------------------------------------------
	Position: {
		bx: null,
		by: null,

		// 方向を表す定数
		NDIR: 0, // 方向なし
		UP: 1, // up, top
		DN: 2, // down, bottom
		LT: 3, // left
		RT: 4, // right

		//---------------------------------------------------------------------------
		// pos.equals() 同じ位置にあるかどうか判定する
		//---------------------------------------------------------------------------
		equals: function(pos) {
			return pos && this.bx === pos.bx && this.by === pos.by;
		},

		//---------------------------------------------------------------------------
		// pos.getaddr() 位置をAddressクラスのオブジェクトで取得する
		//---------------------------------------------------------------------------
		getaddr: function() {
			return new this.klass.Address(this.bx, this.by);
		},

		//---------------------------------------------------------------------------
		// relcell(), relcross(), relbd(), relexcell(), relobj() 相対位置に存在するオブジェクトを返す
		//---------------------------------------------------------------------------
		relcell: function(dx, dy) {
			return this.board.getc(this.bx + dx, this.by + dy);
		},
		relcross: function(dx, dy) {
			return this.board.getx(this.bx + dx, this.by + dy);
		},
		relbd: function(dx, dy) {
			return this.board.getb(this.bx + dx, this.by + dy);
		},
		relexcell: function(dx, dy) {
			return this.board.getex(this.bx + dx, this.by + dy);
		},
		relobj: function(dx, dy) {
			return this.board.getobj(this.bx + dx, this.by + dy);
		},

		//---------------------------------------------------------------------------
		// reldirbd()  指定された方向にいるオブジェクトを返す
		//---------------------------------------------------------------------------
		reldirbd: function(dir, dd) {
			return this.getaddr()
				.movedir(dir, dd)
				.getb();
		},

		//---------------------------------------------------------------------------
		// pos.draw() 盤面に自分の周囲を描画する
		// pos.drawaround() 盤面に自分の周囲1マスを含めて描画する
		//---------------------------------------------------------------------------
		draw: function() {
			this.puzzle.painter.paintRange(
				this.bx - 1,
				this.by - 1,
				this.bx + 1,
				this.by + 1
			);
		},
		drawaround: function() {
			this.puzzle.painter.paintRange(
				this.bx - 3,
				this.by - 3,
				this.bx + 3,
				this.by + 3
			);
		},

		//---------------------------------------------------------------------------
		// pos.isinside() この場所が盤面内かどうか判断する
		//---------------------------------------------------------------------------
		isinside: function() {
			var bd = this.board;
			return (
				this.bx >= bd.minbx &&
				this.bx <= bd.maxbx &&
				this.by >= bd.minby &&
				this.by <= bd.maxby
			);
		},

		//---------------------------------------------------------------------------
		// pos.getdir() 指定されたPositionがどの方向にいるか判定する
		// pos.getvert() 指定されたPositionが縦か横か判定する
		//---------------------------------------------------------------------------
		getdir: function(pos, diff) {
			var dx = pos.bx - this.bx,
				dy = pos.by - this.by;
			if (dx === 0 && dy === -diff) {
				return this.UP;
			} else if (dx === 0 && dy === diff) {
				return this.DN;
			} else if (dx === -diff && dy === 0) {
				return this.LT;
			} else if (dx === diff && dy === 0) {
				return this.RT;
			}
			return this.NDIR;
		},
		getvert: function(pos, diff) {
			var dir = this.getdir(pos, diff);
			if (dir === this.UP || dir === this.DN) {
				return true;
			} else if (dir === this.LT || dir === this.RT) {
				return false;
			}
			return void 0;
		},

		//---------------------------------------------------------------------------
		// pos.getnb()         上下左右に隣接する境界線のIDを取得する
		// pos.getborderobj()  入力対象となる境界線オブジェクトを取得する
		//---------------------------------------------------------------------------
		getnb: function(pos) {
			if (pos.bx - this.bx === 0 && pos.by - this.by === -2) {
				return this.relbd(0, -1);
			} else if (pos.bx - this.bx === 0 && pos.by - this.by === 2) {
				return this.relbd(0, 1);
			} else if (pos.bx - this.bx === -2 && pos.by - this.by === 0) {
				return this.relbd(-1, 0);
			} else if (pos.bx - this.bx === 2 && pos.by - this.by === 0) {
				return this.relbd(1, 0);
			}
			return this.board.emptyborder;
		},
		getborderobj: function(pos) {
			if (
				((pos.bx & 1) === 0 &&
					this.bx === pos.bx &&
					Math.abs(this.by - pos.by) === 1) ||
				((pos.by & 1) === 0 &&
					this.by === pos.by &&
					Math.abs(this.bx - pos.bx) === 1)
			) {
				return (this.onborder() ? this : pos).getb();
			}
			return this.board.nullobj;
		}
	},

	//----------------------------------------------------------------------------
	// ★Addressクラス (bx,by)座標を扱う
	//---------------------------------------------------------------------------
	"Address:Position": {
		initialize: function(bx, by) {
			if (arguments.length >= 2) {
				this.init(bx, by);
			}
		},

		reset: function() {
			this.bx = null;
			this.by = null;
		},
		clone: function() {
			return new this.constructor(this.bx, this.by);
		},

		set: function(addr) {
			this.bx = addr.bx;
			this.by = addr.by;
			return this;
		},
		init: function(bx, by) {
			this.bx = bx;
			this.by = by;
			return this;
		},
		move: function(dx, dy) {
			this.bx += dx;
			this.by += dy;
			return this;
		},

		//---------------------------------------------------------------------------
		// oncell(), oncross(), onborder()  オブジェクトが存在する位置にいるかどうかを返す
		//---------------------------------------------------------------------------
		oncell: function() {
			return !!(this.bx & 1 && this.by & 1);
		},
		oncross: function() {
			return !!(!(this.bx & 1) && !(this.by & 1));
		},
		onborder: function() {
			return !!((this.bx + this.by) & 1);
		},

		//---------------------------------------------------------------------------
		// getc(), getx(), getb(), getex(), getobj() Positionに存在するオブジェクトを返す
		//---------------------------------------------------------------------------
		getc: function() {
			return this.board.getc(this.bx, this.by);
		},
		getx: function() {
			return this.board.getx(this.bx, this.by);
		},
		getb: function() {
			return this.board.getb(this.bx, this.by);
		},
		getex: function() {
			return this.board.getex(this.bx, this.by);
		},
		getobj: function() {
			return this.board.getobj(this.bx, this.by);
		},
		getDot: function() {
			return this.board.getDot(this.bx, this.by);
		},

		//---------------------------------------------------------------------------
		// addr.movedir() 指定した方向に指定した数移動する
		//---------------------------------------------------------------------------
		movedir: function(dir, dd) {
			switch (dir) {
				case this.UP:
					this.by -= dd;
					break;
				case this.DN:
					this.by += dd;
					break;
				case this.LT:
					this.bx -= dd;
					break;
				case this.RT:
					this.bx += dd;
					break;
			}
			return this;
		}
	},

	//----------------------------------------------------------------------------
	// ★RawAddressクラス (bx,by)座標を扱う ※端数あり
	//---------------------------------------------------------------------------
	"RawAddress:Address": {},

	//----------------------------------------------------------------------------
	// ★Dot class: Puzzle element using multiple underlying Piece subclasses
	//----------------------------------------------------------------------------
	"Dot:Position": {
		isnull: true,
		id: null,

		piece: null,

		getDot: function() {
			return this.piece.qnum;
		},
		setDot: function(val) {
			this.puzzle.opemgr.disCombine = true;
			this.piece.setQnum(val);
			this.puzzle.opemgr.disCombine = false;
		},
		iserror: function() {
			return this.piece.error > 0;
		},

		getaddr: function() {
			return new this.klass.Address(this.bx, this.by);
		}
	}
});

// Piece.js v3.4.1

pzpr.classmgr.makeCommon({
	//---------------------------------------------------------------------------
	// ★BoardPieceクラス Cell, Cross, Border, ExCellクラスのベース
	//---------------------------------------------------------------------------
	"BoardPiece:Position": {
		group: "none",
		id: null,
		isnull: true,

		// デフォルト値
		/* 問題データを保持するプロパティ */
		ques: 0, // cell  :(1:黒マス 2-5:三角形 6:アイス・なべ等 7:盤面外 8:盤面内だが入力不可
		//         11-17:十字型パーツ 21-22:旗門 31:Hole 41-42:ぬりめいずの○△ 51:カックロ)
		// cross :(交点の黒点)
		// border:(問題の境界線)
		qdir: 0, // cell  :(数字につく矢印の向き)
		// border:(アイスバーンの矢印/マイナリズムの不等号)
		qnum: -1, // cell  :(セルの数字/○△□/マカロ以外の単体矢印/白丸黒丸/カックロの右側)
		// cross :(交点の数字)
		// border:(マイナリズムの数字/天体ショーの星)
		qnum2: -1, // cell  :(カックロの下側/よせなべの丸無し数字)
		qnum3: -1,
		qnum4: -1,
		qnums: [],

		qchar: 0, // excell:キンコンカンの文字

		/* 回答データを保持するプロパティ */
		qans: 0, // cell  :(1:黒マス/あかり 2-5:三角形 11-13:棒 31-32:斜線 41-50:ふとん)
		// border:(回答の境界線)
		anum: -1, // cell  :(セルの数字/○△□/単体矢印)
		line: 0, // border:(ましゅやスリリンなどの線)

		/* 補助データを保持するプロパティ */
		qsub: 0, // cell  :(1:白マス 1-2:背景色/○× 3:絵になる部分)
		// border:(1:補助線 2:× 11-14:方向記号)
		qcmp: 0, // cell  :(1:cmpマス 1-2:○×)
		snum: -1, // cell  :補助数字を保持する

		/* 履歴保存しないプロパティ */
		error: 0,
		qinfo: 0,
		trial: 0, // TrialModeのstateを保持する変数

		propques: [
			"ques",
			"qdir",
			"qnum",
			"qnum2",
			"qnum3",
			"qnum4",
			"qchar",
			"qnums"
		],
		propans: ["qans", "anum", "line", "trial"],
		propsub: ["qsub", "qcmp", "snum"],
		propinfo: ["error", "qinfo"],
		propnorec: { color: 1, error: 1, qinfo: 1 },

		// 入力できる最大・最小の数字
		maxnum: 999,
		minnum: 1,

		//---------------------------------------------------------------------------
		// initAdjacent()   隣接セルの情報を設定する
		// initAdjBorder()  隣接境界線の情報を設定する
		//---------------------------------------------------------------------------
		initAdjacent: function() {
			this.adjacent = {
				top: this.relobj(0, -2),
				bottom: this.relobj(0, 2),
				left: this.relobj(-2, 0),
				right: this.relobj(2, 0)
			};
		},
		initAdjBorder: function() {
			this.adjborder = {
				top: this.relbd(0, -1),
				bottom: this.relbd(0, 1),
				left: this.relbd(-1, 0),
				right: this.relbd(1, 0)
			};
		},

		//---------------------------------------------------------------------------
		// オブジェクト設定値のgetter/setter
		//---------------------------------------------------------------------------
		setQues: function(val) {
			this.setdata("ques", val);
		},
		setQans: function(val) {
			this.setdata("qans", val);
		},
		setQdir: function(val) {
			this.setdata("qdir", val);
		},
		setQnum: function(val) {
			this.setdata("qnum", val);
		},
		setQnum2: function(val) {
			this.setdata("qnum2", val);
		},
		setQchar: function(val) {
			this.setdata("qchar", val);
		},
		setAnum: function(val) {
			this.setdata("anum", val);
		},
		setLineVal: function(val) {
			this.setdata("line", val);
		},
		setQsub: function(val) {
			this.setdata("qsub", val);
		},
		setQcmp: function(val) {
			this.setdata("qcmp", val);
		},
		setSnum: function(val) {
			this.setdata("snum", val);
		},
		distinctQnums: false,
		isValidQnums: function(val) {
			return val.length <= 4;
		},
		setQnums: function(val) {
			this.setdata("qnums", val);
		},

		setQnumDir: function(dir, val) {
			switch (dir) {
				case this.RT:
					this.setdata("qnum", val);
					return;
				case this.DN:
					this.setdata("qnum2", val);
					return;
				case this.LT:
					this.setdata("qnum3", val);
					return;
				case this.UP:
					this.setdata("qnum4", val);
					return;
			}
		},
		getQnumDir: function(dir) {
			switch (dir) {
				case this.RT:
					return this.qnum;
				case this.DN:
					return this.qnum2;
				case this.LT:
					return this.qnum3;
				case this.UP:
					return this.qnum4;
			}
			return -1;
		},

		//---------------------------------------------------------------------------
		// setdata() Cell,Cross,Border,ExCellの値を設定する
		// addOpe()  履歴情報にプロパティの変更を通知する
		//---------------------------------------------------------------------------
		setdata: function(prop, num, force) {
			if (
				prop === "qnums"
					? this.puzzle.pzpr.util.sameArray(this[prop], num)
					: this[prop] === num
			) {
				return;
			}
			if (!!this.prehook[prop]) {
				// when force is set (undo, redo), bypass the check
				// but still execute the prehook for side-effects
				if (this.prehook[prop].call(this, num) && !force) {
					return;
				}
			}

			this.addOpe(prop, this[prop], num);
			this[prop] = num;

			var trialstage = this.board.trialstage;
			if (trialstage > 0) {
				this.trial = trialstage;
			}

			this.board.modifyInfo(this, this.group + "." + prop);

			if (!!this.posthook[prop]) {
				this.posthook[prop].call(this, num);
			}
		},
		addOpe: function(property, old, num) {
			if (property === "qnums") {
				if (this.puzzle.pzpr.util.sameArray(old, num)) {
					return;
				}
				this.puzzle.opemgr.add(new this.klass.ObjectOperation2(this, old, num));
			} else {
				if (old === num) {
					return;
				}
				this.puzzle.opemgr.add(
					new this.klass.ObjectOperation(this, property, old, num)
				);
			}
		},

		//---------------------------------------------------------------------------
		// setdata2() Cell,Cross,Border,ExCellのpos付きの値を設定する
		//---------------------------------------------------------------------------
		setdata2: function(prop, pos, num, bypassPrehook) {
			if (this[prop][pos] === num) {
				return;
			}
			if (!!this.prehook[prop]) {
				if (this.prehook[prop].call(this, pos, num) && !bypassPrehook) {
					return;
				}
			}

			this.addOpe(prop + pos, this[prop][pos], num);
			this[prop][pos] = num;

			var trialstage = this.board.trialstage;
			if (trialstage > 0) {
				this.trial = trialstage;
			}

			if (!!this.posthook[prop]) {
				this.posthook[prop].call(this, pos, num);
			}
		},

		//---------------------------------------------------------------------------
		// getprops() プロパティの値のみを取得する
		// compare()  プロパティの値を比較し違っていたらcallback関数を呼びだす
		//---------------------------------------------------------------------------
		getprops: function() {
			var props = {};
			var proplist = this.getproplist(["ques", "ans", "sub"]);
			for (var i = 0; i < proplist.length; i++) {
				var a = proplist[i];
				props[a] = this[a];
			}
			return props;
		},
		compare: function(props, callback) {
			var proplist = this.getproplist(["ques", "ans", "sub"]);
			for (var i = 0; i < proplist.length; i++) {
				var a = proplist[i];
				if (
					a === "qnums"
						? !this.puzzle.pzpr.util.sameArray(props[a], this[a])
						: props[a] !== this[a]
				) {
					callback(this.group, this.id, a);
				}
			}
		},

		//---------------------------------------------------------------------------
		// getproplist() ansclear等で使用するプロパティの配列を取得する
		//---------------------------------------------------------------------------
		getproplist: function(types) {
			var array = [];
			for (var i = 0; i < types.length; i++) {
				var array1 = [];
				switch (types[i]) {
					case "ques":
						array1 = this.propques;
						break;
					case "ans":
						array1 = this.propans;
						break;
					case "sub":
						array1 = this.propsub;
						break;
					case "info":
						array1 = this.propinfo;
						break;
					case "trial":
						array1 = ["trial"];
						break;
				}
				array = array.concat(array1);
			}
			if (array.indexOf("snum") >= 0 && this.enableSubNumberArray) {
				array.splice(
					array.indexOf("snum"),
					1,
					"snum0",
					"snum1",
					"snum2",
					"snum3"
				);
			}
			return array;
		},

		//---------------------------------------------------------------------------
		// getmaxnum() 入力できる数字の最大値を返す
		// getminnum() 入力できる数字の最小値を返す
		//---------------------------------------------------------------------------
		getmaxnum: function() {
			return typeof this.maxnum === "function" ? this.maxnum() : this.maxnum;
		},
		getminnum: function() {
			return typeof this.minnum === "function" ? this.minnum() : this.minnum;
		},

		//---------------------------------------------------------------------------
		// prehook  値の設定前にやっておく処理や、設定禁止処理を行う
		// posthook 値の設定後にやっておく処理を行う
		//---------------------------------------------------------------------------
		prehook: {},
		posthook: {},

		//---------------------------------------------------------------------------
		// seterr()  error値を設定する
		// setinfo() qinfo値を設定する
		//---------------------------------------------------------------------------
		seterr: function(num) {
			if (this.board.isenableSetError()) {
				this.error = num;
			}
		},
		setinfo: function(num) {
			this.qinfo = num;
		},

		//---------------------------------------------------------------------------
		// setCrossBorderError() 交点とその周り四方向のBorderにエラーフラグを設定する
		//---------------------------------------------------------------------------
		setCrossBorderError: function() {
			this.seterr(1);
			this.board
				.borderinside(this.bx - 1, this.by - 1, this.bx + 1, this.by + 1)
				.seterr(1);
		}
	},

	//---------------------------------------------------------------------------
	// ★Cellクラス BoardクラスがCellの数だけ保持する
	//---------------------------------------------------------------------------
	// ボードメンバデータの定義(1)
	// Cellクラスの定義
	"Cell:BoardPiece": {
		group: "cell",

		lcnt: 0, // セルに存在する線の本数
		base: null, // 丸数字やアルファベットが移動してきた場合の移動元のセルを示す (移動なし時は自分自身を指す)
		dirs51: 2,

		disInputHatena: false, // qnum==-2を入力できないようにする

		numberWithMB: false, // 回答の数字と○×が入るパズル(○は数字が入っている扱いされる)
		numberAsObject: false, // 数字以外でqnum/anumを使用する(同じ値を入力で消去できたり、回答で・が入力できる)
		numberAsLetter: false, // 数字の代わりにアルファベットを入力する

		numberRemainsUnshaded: false, // 数字のあるマスが黒マスにならないパズル
		enableSubNumberArray: false, // 補助数字の配列を作るパズル
		disableAnum: false,
		supportQnumAnum: false, // True if qnum and anum can appear at the same time.

		adjacent: {}, // 四方向に隣接するセルを保持する
		adjborder: {}, // 四方向に隣接する境界線を保持する

		initialize: function() {
			this.temp = this.constructor.prototype;
			if (this.enableSubNumberArray) {
				var anum0 = this.temp.anum;
				this.snum = [anum0, anum0, anum0, anum0];
			}
		},

		//---------------------------------------------------------------------------
		// prehook  値の設定前にやっておく処理や、設定禁止処理を行う
		// posthook 値の設定後にやっておく処理を行う
		//---------------------------------------------------------------------------
		prehook: {
			qnum: function(num) {
				return this.getminnum() > 0 && num === 0;
			},
			qnum2: function(num) {
				return this.getminnum() > 0 && num === 0;
			},
			anum: function(num) {
				return this.getminnum() > 0 && num === 0;
			}
		},
		posthook: {},

		//---------------------------------------------------------------------------
		// cell.isShade()   該当するCellが黒マスかどうか返す
		// cell.isUnshade() 該当するCellが白マスかどうか返す
		// cell.setShade()  該当するCellに黒マスをセットする
		// cell.clrShade()  該当するCellに白マスをセットする
		//---------------------------------------------------------------------------
		isShade: function() {
			return !this.isnull && this.qans === 1;
		},
		isUnshade: function() {
			return !this.isnull && this.qans !== 1;
		},
		setShade: function() {
			this.setQans(1);
		},
		clrShade: function() {
			this.setQans(0);
		},

		// disallow certain inputs
		allowShade: function() {
			if (this.numberRemainsUnshaded) {
				return this.qnum === -1;
			}
			return true;
		},
		allowUnshade: function() {
			if (this.numberRemainsUnshaded) {
				return this.qnum === -1 || this.puzzle.painter.enablebcolor;
			}
			return true;
		},

		// is cell shading status decided for the purpose of auto-answer check
		isShadeDecided: function() {
			if (this.isnull) {
				return true;
			}
			if (this.isShade()) {
				return true;
			}
			if (this.qsub > 0) {
				return true;
			}
			if (!this.allowShade() || !this.allowUnshade()) {
				return true;
			}
			return false;
		},

		//-----------------------------------------------------------------------
		// cell.getNum()     該当するCellの数字を返す
		// cell.setNum()     該当するCellに数字を設定する
		//-----------------------------------------------------------------------
		getNum: function() {
			return this.qnum !== -1 ? this.qnum : this.anum;
		},
		setNum: function(val) {
			if (this.getminnum() > 0 && val === 0) {
				return;
			}
			// editmode時 val>=0は数字 val=-1は消去 val=-2は？など
			if (this.puzzle.editmode) {
				val =
					(this.numberAsObject || val === -2) && this.qnum === val ? -1 : val;
				this.setQnum(val);
				this.setAnum(-1);
				if (this.numberRemainsUnshaded) {
					this.setQans(0);
				}
				if (!this.puzzle.painter.enablebcolor) {
					this.setQsub(0);
				}
				this.setQcmp(0);
				this.clrSnum();
			}
			// playmode時 val>=0は数字 val=-1は消去 numberAsObjectの・はval=-2 numberWithMBの○×はval=-2,-3
			else if (this.qnum === -1 && !this.disableAnum) {
				var vala =
					val > -1 && !(this.numberAsObject && this.anum === val) ? val : -1;
				var vals =
					val < -1 && !(this.numberAsObject && this.qsub === -val - 1)
						? -val - 1
						: 0;
				this.setAnum(vala);
				this.setQsub(vals);
				this.setQdir(0);
				this.setQcmp(0);
				if (!(this.numberWithMB && vala === -1)) {
					this.clrSnum();
				}
			}
		},

		//-----------------------------------------------------------------------
		// cell.isNum()       該当するCellに数字があるか返す
		// cell.noNum()       該当するCellに数字がないか返す
		// cell.isValidNum()  該当するCellに0以上の数字があるか返す
		// cell.isNumberObj() 該当するCellに数字or○があるか返す
		// cell.sameNumber()  ２つのCellに同じ有効な数字があるか返す
		//-----------------------------------------------------------------------
		isNum: function() {
			return (
				!this.isnull &&
				(this.qnum !== this.temp.qnum || this.anum !== this.temp.anum)
			);
		},
		isLineShapeEndpoint: function() {
			return this.isNum();
		},
		noNum: function() {
			return (
				!this.isnull &&
				this.qnum === this.temp.qnum &&
				this.anum === this.temp.anum
			);
		},
		isValidNum: function() {
			return (
				!this.isnull &&
				(this.qnum >= 0 || (this.anum >= 0 && this.qnum === this.temp.qnum))
			);
		},
		isNumberObj: function() {
			return (
				this.qnum !== this.temp.qnum ||
				this.anum !== this.temp.anum ||
				(this.numberWithMB && this.qsub === 1)
			);
		},
		sameNumber: function(cell) {
			return (
				this.isValidNum() &&
				cell.isValidNum() &&
				this.getNum() === cell.getNum()
			);
		},

		//---------------------------------------------------------------------------
		// cell.setSnum() Cellの補助数字を設定する
		// cell.clrSnum() Cellの補助数字を消去する
		//---------------------------------------------------------------------------
		setSnum: function(pos, num) {
			if (this.isNum() && num !== -1) {
				return;
			}
			if (!this.enableSubNumberArray) {
				this.setdata("snum", num); // 1つ目の数字のみ
			} else {
				this.setdata2("snum", pos, num);
			}
		},
		clrSnum: function() {
			if (!this.enableSubNumberArray) {
				this.setSnum(-1);
			} else {
				this.setSnum(0, -1);
				this.setSnum(1, -1);
				this.setSnum(2, -1);
				this.setSnum(3, -1);
			}
		},

		//---------------------------------------------------------------------------
		// cell.is51cell()     [＼]のセルかチェックする(カックロ以外はオーバーライドされる)
		// cell.set51cell()    [＼]を作成する(カックロ以外はオーバーライドされる)
		// cell.remove51cell() [＼]を消去する(カックロ以外はオーバーライドされる)
		//---------------------------------------------------------------------------
		// ※とりあえずカックロ用
		is51cell: function() {
			return this.ques === 51;
		},
		set51cell: function(val) {
			this.setQues(51);
			for (var dir = 1; dir <= 4; dir++) {
				this.setQnumDir(dir, -1);
			}
			this.setAnum(-1);
		},
		remove51cell: function(val) {
			this.setQues(0);
			for (var dir = 1; dir <= 4; dir++) {
				this.setQnumDir(dir, -1);
			}
			this.setAnum(-1);
		},

		//---------------------------------------------------------------------------
		// cell.ice() アイスのマスかどうか判定する
		//---------------------------------------------------------------------------
		ice: function() {
			return this.ques === 6;
		},

		isDot: function() {
			return this.qsub === 1;
		},

		//---------------------------------------------------------------------------
		// cell.isEmpty() / cell.isValid() 不定形盤面などで、入力できるマスか判定する
		//---------------------------------------------------------------------------
		isEmpty: function() {
			return this.isnull || this.ques === 7;
		},
		isValid: function() {
			return !this.isnull && this.ques !== 7;
		},

		setValid: function(inputData) {
			this.setQues(inputData);
			this.setQnum(-1);
			this.setQans(0);
			this.setQsub(0);
			for (var dir in this.adjborder) {
				this.adjborder[dir].setQans(0);
			}
			this.drawaround();
			this.board.roommgr.rebuild();
		},

		//---------------------------------------------------------------------------
		// cell.isDeparture()   オブジェクトを動かすパズルで移動元セルかどうか判定する
		// cell.isDestination() オブジェクトを動かすパズルで移動先セルかどうか判定する
		// ※動いていない場合は、isDestinationのみtrueを返します
		//---------------------------------------------------------------------------
		isDeparture: function() {
			return !this.isnull && !!this.base && this.isNum();
		},
		isDestination: function() {
			return !this.isnull && !!this.base && !this.base.isnull;
		},

		//---------------------------------------------------------------------------
		// cell.isLineStraight()   セルの上で線が直進しているか判定する
		// cell.isLineCurve()      セルの上で線がカーブしているか判定する
		//---------------------------------------------------------------------------
		isLineStraight: function() {
			// 0:直進ではない 1:縦に直進 2:横に直進
			if (
				this.lcnt === 2 &&
				this.adjborder.top.isLine() &&
				this.adjborder.bottom.isLine()
			) {
				return 1;
			} else if (
				this.lcnt === 2 &&
				this.adjborder.left.isLine() &&
				this.adjborder.right.isLine()
			) {
				return 2;
			}
			return 0;
		},
		isLineCurve: function() {
			return this.lcnt === 2 && !this.isLineStraight();
		},

		//---------------------------------------------------------------------------
		// cell.isLP()  線が必ず存在するセルの条件を判定する
		// cell.noLP()  線が引けないセルの条件を判定する
		//---------------------------------------------------------------------------
		// 下記の関数で用いる定数
		isLPobj: {
			1: { 11: 1, 12: 1, 14: 1, 15: 1 } /* UP */,
			2: { 11: 1, 12: 1, 16: 1, 17: 1 } /* DN */,
			3: { 11: 1, 13: 1, 15: 1, 16: 1 } /* LT */,
			4: { 11: 1, 13: 1, 14: 1, 17: 1 } /* RT */
		},
		noLPobj: {
			1: { 1: 1, 4: 1, 5: 1, 13: 1, 16: 1, 17: 1, 21: 1 } /* UP */,
			2: { 1: 1, 2: 1, 3: 1, 13: 1, 14: 1, 15: 1, 21: 1 } /* DN */,
			3: { 1: 1, 2: 1, 5: 1, 12: 1, 14: 1, 17: 1, 22: 1 } /* LT */,
			4: { 1: 1, 3: 1, 4: 1, 12: 1, 15: 1, 16: 1, 22: 1 } /* RT */
		},

		isLP: function(dir) {
			return !!this.isLPobj[dir][this.ques];
		},
		// ans.checkenableLinePartsからnoLP()関数が直接呼ばれている
		noLP: function(dir) {
			return !!this.noLPobj[dir][this.ques];
		},

		//---------------------------------------------------------------------------
		// cell.countDir4Cell()  上下左右4方向で条件func==trueになるマスの数をカウントする
		//---------------------------------------------------------------------------
		countDir4Cell: function(func) {
			var adc = this.adjacent,
				cnt = 0;
			var cells = [adc.top, adc.bottom, adc.left, adc.right];
			for (var i = 0; i < 4; i++) {
				if (cells[i].group === "cell" && !cells[i].isnull && func(cells[i])) {
					cnt++;
				}
			}
			return cnt;
		},

		//---------------------------------------------------------------------------
		// cell.getdir4clist()   上下左右4方向の存在するセルを返す
		// cell.getdir4cblist()  上下左右4方向のセル＆境界線＆方向を返す
		// cell.getdir8clist()   Get orthogonally and diagonally adjacent cells
		// cell.getdiagclist()   Get diagonally adjacent cells
		//---------------------------------------------------------------------------
		getdir4clist: function() {
			var adc = this.adjacent,
				list = [];
			var cells = [adc.top, adc.bottom, adc.left, adc.right];
			for (var i = 0; i < 4; i++) {
				if (cells[i].group === "cell" && !cells[i].isnull) {
					list.push([cells[i], i + 1]);
				} /* i+1==dir */
			}
			return list;
		},
		getdir4cblist: function() {
			var adc = this.adjacent,
				adb = this.adjborder,
				cblist = [];
			var cells = [adc.top, adc.bottom, adc.left, adc.right];
			var bds = [adb.top, adb.bottom, adb.left, adb.right];
			for (var i = 0; i < 4; i++) {
				if ((cells[i].group === "cell" && !cells[i].isnull) || !bds[i].isnull) {
					cblist.push([cells[i], bds[i], i + 1]);
				} /* i+1==dir */
			}
			return cblist;
		},
		getdir8clist: function() {
			var list = [];
			var cells = [
				this.relcell(-2, -2),
				this.relcell(0, -2),
				this.relcell(2, -2),
				this.relcell(-2, 0),
				this.relcell(2, 0),
				this.relcell(-2, 2),
				this.relcell(0, 2),
				this.relcell(2, 2)
			];
			for (var i = 0; i < 8; i++) {
				if (cells[i].group === "cell" && !cells[i].isnull) {
					list.push([cells[i], i + 1]);
				} /* i+1==dir */
			}
			return list;
		},
		getdiagclist: function() {
			var list = [];
			var cells = [
				this.relcell(-2, -2),
				this.relcell(2, -2),
				this.relcell(-2, 2),
				this.relcell(2, 2)
			];
			for (var i = 0; i < 4; i++) {
				if (cells[i].group === "cell" && !cells[i].isnull) {
					list.push([cells[i], i + 1]);
				}
			}
			return list;
		},

		//------------------------------------------------------------------------------------
		// cell.getOrthogonalCell()  Get an adjacent cell in the direction of the target cell.
		//------------------------------------------------------------------------------------
		getOrthogonalCell: function(target) {
			if (this.bx === target.bx) {
				if (this.by === target.by) {
					return this.board.emptycell;
				}
				return this.by > target.by ? this.adjacent.top : this.adjacent.bottom;
			} else if (this.by === target.by) {
				return this.bx > target.bx ? this.adjacent.left : this.adjacent.right;
			}

			return this.board.emptycell;
		},

		//--------------------------------------------------------------------------------
		// cell.eraseMovedLines()  移動系パズルの丸が消えたとき等、領域に含まれる線を消去する
		//--------------------------------------------------------------------------------
		eraseMovedLines: function() {
			if (this.path === null) {
				return;
			}
			var clist = this.path.clist,
				count = 0;
			for (var i = 0, len = clist.length; i < len; i++) {
				for (var j = i + 1; j < len; j++) {
					var border = clist[i].getnb(clist[j]);
					if (!border.isnull) {
						border.removeLine();
						count++;
					}
				}
			}
			if (count > 0) {
				clist.draw();
			}
		}
	},

	//---------------------------------------------------------------------------
	// ★Crossクラス BoardクラスがCrossの数だけ保持する(hascross>=1の時)
	//---------------------------------------------------------------------------
	// ボードメンバデータの定義(2)
	// Crossクラスの定義
	"Cross:BoardPiece": {
		group: "cross",

		lcnt: 0, // 交点に存在する線の本数

		adjborder: {}, // 四方向に隣接する境界線を保持する

		//-----------------------------------------------------------------------
		// cross.getNum()     該当するCrossの数字を返す
		// cross.setNum()     該当するCrossに数字を設定する
		// cross.noNum()      該当するCrossに数字がないか返す
		//-----------------------------------------------------------------------
		getNum: function() {
			return this.qnum;
		},
		setNum: function(val) {
			val = val === -2 && this.qnum === val ? -1 : val;
			this.setQnum(val);
		},
		noNum: function() {
			return !this.isnull && this.qnum === -1;
		}
	},

	//---------------------------------------------------------------------------
	// ★Borderクラス BoardクラスがBorderの数だけ保持する(hasborder>0の時)
	//---------------------------------------------------------------------------
	// ボードメンバデータの定義(3)
	// Borderクラスの定義
	"Border:BoardPiece": {
		initialize: function() {
			this.sidecell = [null, null]; // 隣接セルのオブジェクト
			this.sidecross = [null, null]; // 隣接交点のオブジェクト
			this.sideobj = []; // LineManager用
		},
		group: "border",

		isvert: false, // true:境界線が垂直(縦) false:境界線が水平(横)
		inside: false, // true:盤面内 false:外枠上or盤面外

		path: null, // このLineを含む線情報への参照

		// isLineNG関連の変数など
		enableLineNG: false,

		//---------------------------------------------------------------------------
		// initSideObject() 隣接オブジェクトの情報を設定する
		//---------------------------------------------------------------------------
		initSideObject: function() {
			var allowexcell =
				this.board.hasborder === 2 && this.board.hasexcell === 2;
			if (this.isvert) {
				this.sidecell[0] =
					!allowexcell || this.bx > 0
						? this.relcell(-1, 0)
						: this.relexcell(-1, 0);
				this.sidecell[1] =
					!allowexcell || this.bx < this.board.cols * 2
						? this.relcell(1, 0)
						: this.relexcell(1, 0);
				this.sidecross[0] = this.relcross(0, -1);
				this.sidecross[1] = this.relcross(0, 1);
			} else {
				this.sidecell[0] =
					!allowexcell || this.by > 0
						? this.relcell(0, -1)
						: this.relexcell(0, -1);
				this.sidecell[1] =
					!allowexcell || this.by < this.board.rows * 2
						? this.relcell(0, 1)
						: this.relexcell(0, 1);
				this.sidecross[0] = this.relcross(-1, 0);
				this.sidecross[1] = this.relcross(1, 0);
			}

			// LineManager用
			this.sideobj = !this.board.borderAsLine ? this.sidecell : this.sidecross;
		},

		//---------------------------------------------------------------------------
		// prehook  値の設定前にやっておく処理や、設定禁止処理を行う
		// posthook 値の設定後にやっておく処理を行う
		//---------------------------------------------------------------------------
		prehook: {
			qans: function(num) {
				return this.ques !== 0;
			},
			line: function(num) {
				return this.checkStableLine(num);
			}
		},
		posthook: {},

		//---------------------------------------------------------------------------
		// border.draw() 盤面に自分の周囲を描画する (Borderはちょっと範囲が広い)
		//---------------------------------------------------------------------------
		draw: function() {
			this.puzzle.painter.paintRange(
				this.bx - 2,
				this.by - 2,
				this.bx + 2,
				this.by + 2
			);
		},

		//-----------------------------------------------------------------------
		// border.isLine()      該当するBorderにlineが引かれているか判定する
		// border.setLine()     該当するBorderに線を引く
		// border.setPeke()     該当するBorderに×印をつける
		// border.removeLine()  該当するBorderから線を消す
		// border.removeLineAndQsub()  removes line and qsub
		//-----------------------------------------------------------------------
		isLine: function() {
			return this.line > 0;
		},
		setLine: function(id) {
			this.setLineVal(1);
			if (this.qsub === 2) {
				this.setQsub(0);
			}
		},
		setPeke: function(id) {
			this.setLineVal(0);
			this.setQsub(2);
		},
		removeLine: function(id) {
			this.setLineVal(0);
			if (this.qsub === 2) {
				this.setQsub(0);
			}
		},
		removeLineAndQsub: function(id) {
			this.setLineVal(0);
			this.setQsub(0);
		},

		//---------------------------------------------------------------------------
		// border.isBorder()     該当するBorderに境界線が引かれているか判定する
		// border.setBorder()    該当するBorderに境界線を引く
		// border.removeBorder() 該当するBorderから線を消す
		//---------------------------------------------------------------------------
		isBorder: function() {
			return this.ques > 0 || this.qans > 0;
		},
		setBorder: function() {
			if (this.puzzle.editmode) {
				this.setQues(1);
				this.setQans(0);
			} else if (this.ques !== 1) {
				this.setQans(1);
			}
		},
		removeBorder: function() {
			if (this.puzzle.editmode) {
				this.setQues(0);
				this.setQans(0);
			} else if (this.ques !== 1) {
				this.setQans(0);
			}
		},

		//---------------------------------------------------------------------------
		// border.isVert()  該当するBorderが垂直(縦)かどうか返す
		// border.isHorz()  該当するBorderに水平(横)かどうか返す
		//---------------------------------------------------------------------------
		isVert: function() {
			return this.isvert;
		},
		isHorz: function() {
			return !this.isvert;
		},

		//---------------------------------------------------------------------------
		// border.checkStableLine() 線が引けない or 必ず存在する状態になっているか判定する
		// border.isLineEX() 線が必ず存在するborderの条件を判定する
		// border.isLineNG() 線が引けないborderの条件を判定する
		//---------------------------------------------------------------------------
		// [pipelink, loopsp], [barns, slalom, reflect, yajirin]で呼ばれる関数
		checkStableLine: function(num) {
			// border.setLineから呼ばれる
			if (this.enableLineNG) {
				return num !== 0 && this.isLineNG();
			}
			return false;
		},

		// Check if adding a line would create a corner in the side cells.
		checkFormCurve: function(num) {
			if (num === 0) {
				return false;
			}
			for (var i = 0; i <= 1; i++) {
				if (
					this.isVert() &&
					(this.sidecell[i].adjborder.top.isLine() ||
						this.sidecell[i].adjborder.bottom.isLine())
				) {
					return true;
				}
				if (
					!this.isVert() &&
					(this.sidecell[i].adjborder.left.isLine() ||
						this.sidecell[i].adjborder.right.isLine())
				) {
					return true;
				}
			}
			return false;
		},

		// cell.setQues => setCombinedLineから呼ばれる関数 (exist->ex)
		//  -> cellidの片方がnullになっていることを考慮していません
		isLineEX: function() {
			return false;
		},
		// border.setLineCal => checkStableLineから呼ばれる関数
		//  -> cellidの片方がnullになっていることを考慮していません
		isLineNG: function() {
			var cell1 = this.sidecell[0],
				cell2 = this.sidecell[1];
			return this.isVert()
				? cell1.noLP(cell1.RT) || cell2.noLP(cell2.LT)
				: cell1.noLP(cell1.DN) || cell2.noLP(cell2.UP);
		}
	},

	//---------------------------------------------------------------------------
	// ★ExCellクラス BoardクラスがExCellの数だけ保持する
	//---------------------------------------------------------------------------
	// ボードメンバデータの定義(4)
	// ExCellクラスの定義
	"ExCell:BoardPiece": {
		group: "excell",

		adjacent: {}, // 四方向に隣接するセルを保持する

		//-----------------------------------------------------------------------
		// excell.getNum()     該当するCellの数字を返す
		// excell.setNum()     該当するCellに数字を設定する
		// excell.noNum()      該当するCellに数字がないか返す
		//-----------------------------------------------------------------------
		getNum: function() {
			return this.qnum;
		},
		setNum: function(val) {
			this.setQnum(val);
		},
		noNum: function() {
			return !this.isnull && this.qnum === -1;
		},

		//---------------------------------------------------------------------------
		// excell.is51cell()   [＼]のセルかチェックする
		//---------------------------------------------------------------------------
		is51cell: function() {
			return this.ques === 51;
		},

		//---------------------------------------------------------------------------
		// excell.ice() アイスのマスかどうか判定する
		//---------------------------------------------------------------------------
		ice: function() {
			return false;
		}
	}
});

// PieceList.js v3.4.1

/* global Set:false */

pzpr.classmgr.makeCommon({
	//----------------------------------------------------------------------------
	// ★PieceListクラス オブジェクトの配列を扱う
	//---------------------------------------------------------------------------
	PieceList: {
		initialize: function(list) {
			if (!!list) {
				this.extend(list);
			}
		},

		length: 0,

		//--------------------------------------------------------------------------------
		// ☆Arrayオブジェクト関連の関数
		// list.add()      与えられたオブジェクトを配列の末尾に追加する(push()相当)
		// list.extend()   与えられたPieceListを配列の末尾に追加する
		// list.pop()      配列の最後のオブジェクトを取り除いて返す
		//--------------------------------------------------------------------------------
		add: Array.prototype.push,
		extend: function(list) {
			if (list instanceof Set) {
				list = Array.from(list);
			}

			var len = list.length,
				n = this.length;
			this.length += len;
			for (var i = 0; i < len; i++) {
				this[n + i] = list[i];
			}
		},
		pop: Array.prototype.pop,

		//--------------------------------------------------------------------------------
		// ☆Arrayオブジェクトiterator関連の関数
		// list.each()     全てのオブジェクトに指定された関数を実行する
		// list.some()     条件がtrueとなるオブジェクトが存在するか判定する
		//--------------------------------------------------------------------------------
		each: Array.prototype.forEach,
		some: Array.prototype.some,

		//--------------------------------------------------------------------------------
		// list.filter()   条件がtrueとなるオブジェクトを抽出したclistを新たに作成する
		// list.notnull()  nullではないオブジェクトを抽出したclistを新たに作成する
		//--------------------------------------------------------------------------------
		/* constructorが変わってしまうので、Array.prototypeが使用できない */
		filter: function(cond) {
			var list = new this.constructor(),
				len = this.length,
				n = 0;
			for (var i = 0; i < len; i++) {
				if (cond(this[i])) {
					list[n] = this[i];
					n++;
				}
			}
			list.length = n;
			return list;
		},
		notnull: function(cond) {
			return this.filter(function(piece) {
				return !piece.isnull;
			});
		},

		//--------------------------------------------------------------------------------
		// list.map()      clistの各要素に指定された関数を適用したclistを新たに作成する
		//--------------------------------------------------------------------------------
		/* constructorが変わってしまうので、Array.prototypeが使用できない */
		map: function(changer) {
			var list = new this.constructor(),
				len = (list.length = this.length);
			for (var i = 0; i < len; i++) {
				list[i] = changer(this[i]);
			}
			return list;
		},

		//--------------------------------------------------------------------------------
		// list.indexOf()  与えられたオブジェクトの配列上の位置を取得する
		// list.include()  与えられたオブジェクトが配列に存在するか判定する
		// list.remove()   与えられたオブジェクトを配列から取り除く
		//--------------------------------------------------------------------------------
		indexOf: Array.prototype.indexOf,
		include: function(target) {
			return this.indexOf(target) >= 0;
		},
		remove: function(piece) {
			var idx = this.indexOf(piece);
			if (idx >= 0) {
				Array.prototype.splice.call(this, idx, 1);
			}
		},

		//--------------------------------------------------------------------------------
		// list.seterr()   保持しているオブジェクトにerror値を設定する
		// list.setnoerr() エラー値が設定されていないオブジェクトにerror=-1を設定する
		// list.setinfo()  保持しているオブジェクトにqinfo値を設定する
		//--------------------------------------------------------------------------------
		seterr: function(num) {
			if (!this.board.isenableSetError()) {
				return;
			}
			for (var i = 0; i < this.length; i++) {
				this[i].error = num;
			}
		},
		setnoerr: function() {
			if (!this.board.isenableSetError()) {
				return;
			}
			for (var i = 0; i < this.length; i++) {
				if (this[i].error === 0) {
					this[i].error = -1;
				}
			}
		},
		setinfo: function(num) {
			for (var i = 0; i < this.length; i++) {
				this[i].qinfo = num;
			}
		},

		//---------------------------------------------------------------------------
		// list.allclear() 位置,描画情報以外をクリアする
		// list.ansclear() qans,anum,line,qsub,error情報をクリアする
		// list.subclear() qsub,error情報をクリアする
		// list.errclear() error情報をクリアする
		// list.trialclear() Trial情報をクリアする
		// list.propclear() 4つの共通処理
		//---------------------------------------------------------------------------
		/* undo,redo以外で盤面縮小やったときは, isrec===true */
		allclear: function(isrec) {
			this.propclear(["ques", "ans", "sub", "info"], isrec);
		},
		ansclear: function() {
			this.propclear(["ans", "sub", "info"], true);
		},
		subclear: function() {
			this.propclear(["sub", "info"], true);
		},
		errclear: function() {
			this.propclear(["info"], false);
		},
		trialclear: function() {
			this.propclear(["trial"], false);
		},
		propclear: function(target, isrec) {
			var props = [],
				norec = {};
			if (this.length > 0) {
				props = this[0].getproplist(target);
				norec = this[0].propnorec;
			}
			for (var i = 0; i < this.length; i++) {
				var piece = this[i];
				for (var j = 0; j < props.length; j++) {
					var pp = props[j],
						pos = "";
					if (pp.length > 4 && pp.substr(0, 4) === "snum") {
						pos = pp.charAt(4);
						pp = pp.substr(0, 4);
						var def = piece.constructor.prototype[pp];
						if (piece[pp][pos] !== def) {
							if (isrec && !norec[pp]) {
								piece.addOpe(pp + pos, piece[pp][pos], def);
							}
							piece[pp][pos] = def;
						}
					} else {
						var def = piece.constructor.prototype[pp];
						if (
							pp === "qnums"
								? !this.puzzle.pzpr.util.sameArray(piece[pp], def)
								: piece[pp] !== def
						) {
							if (isrec && !norec[pp]) {
								piece.addOpe(pp, piece[pp], def);
							}
							piece[pp] = def;
						}
					}
				}
			}
		}
	},

	//----------------------------------------------------------------------------
	// ★CellListクラス Cellの配列を扱う
	//---------------------------------------------------------------------------
	"CellList:PieceList": {
		//---------------------------------------------------------------------------
		// clist.getRectSize()  指定されたCellのリストの上下左右の端と、セルの数を返す
		//---------------------------------------------------------------------------
		getRectSize: function() {
			var bd = this.board;
			var d = {
				x1: bd.maxbx + 1,
				x2: bd.minbx - 1,
				y1: bd.maxby + 1,
				y2: bd.minby - 1,
				cols: 0,
				rows: 0,
				cnt: 0
			};
			for (var i = 0; i < this.length; i++) {
				var cell = this[i];
				if (d.x1 > cell.bx) {
					d.x1 = cell.bx;
				}
				if (d.x2 < cell.bx) {
					d.x2 = cell.bx;
				}
				if (d.y1 > cell.by) {
					d.y1 = cell.by;
				}
				if (d.y2 < cell.by) {
					d.y2 = cell.by;
				}
				d.cnt++;
			}
			d.cols = (d.x2 - d.x1 + 2) / 2;
			d.rows = (d.y2 - d.y1 + 2) / 2;
			return d;
		},

		//--------------------------------------------------------------------------------
		// clist.getQnumCell()  指定されたClistの中で一番左上にある数字のあるセルを返す
		//--------------------------------------------------------------------------------
		singleQnumCell: false,
		getQnumCell: function() {
			var ret = null;
			for (var i = 0, len = this.length; i < len; i++) {
				if (this[i].isNum()) {
					if (this.singleQnumCell) {
						if (ret) {
							return this.board.emptycell;
						}
					} else {
						if (this[i].qnum !== -2) {
							return this[i];
						}
					}

					ret = this[i];
				}
			}
			return ret || this.board.emptycell;
		},

		//--------------------------------------------------------------------------------
		// clist.getTopCell()  指定されたClistの中で一番左上にあるセルを返す
		//--------------------------------------------------------------------------------
		getTopCell: function() {
			var bd = this.board,
				tcell = null,
				bx = bd.maxbx,
				by = bd.maxby;
			for (var i = 0; i < this.length; i++) {
				var cell = this[i];
				if (cell.bx > bx || (cell.bx === bx && cell.by >= by)) {
					continue;
				}
				tcell = this[i];
				bx = cell.bx;
				by = cell.by;
			}
			return tcell;
		},

		//---------------------------------------------------------------------------
		// clist.eraseLines()  Clistに含まれるlineを消去します
		//---------------------------------------------------------------------------
		eraseLines: function() {
			var count = 0;
			for (var i = 0, len = this.length; i < len; i++) {
				for (var j = i + 1; j < len; j++) {
					var border = this.puzzle.mouse.getnb(
						this[i].getaddr(),
						this[j].getaddr()
					);
					if (!border.isnull) {
						border.removeLine();
						count++;
					}
				}
			}
			if (count > 0) {
				this.draw();
			}
		},

		//---------------------------------------------------------------------------
		// clist.draw()   盤面に自分の周囲を描画する
		//---------------------------------------------------------------------------
		draw: function() {
			var d = this.getRectSize();
			this.puzzle.painter.paintRange(d.x1 - 1, d.y1 - 1, d.x2 + 1, d.y2 + 1);
		},

		//---------------------------------------------------------------------------
		// clist.getBlockShapes() Encode the block shape into a string,
		//     and return keys for matching shapes without considering orientation,
		//     or matching shapes with the exact orientation.
		//---------------------------------------------------------------------------
		getBlockShapes: function() {
			if (!!this.shape) {
				return this.shape;
			}

			var bd = this.board;
			var d = this.getRectSize();
			var dx = d.x2 - d.x1 === d.cols - 1 ? 1 : 2;
			var dy = d.y2 - d.y1 === d.rows - 1 ? 1 : 2;
			var data = [[], [], [], [], [], [], [], []];
			var shapes = [];

			for (var by = 0; by <= d.y2 - d.y1; by += dy) {
				for (var bx = 0; bx <= d.x2 - d.x1; bx += dx) {
					data[0].push(this.include(bd.getc(d.x1 + bx, d.y1 + by)) ? 1 : 0);
					data[1].push(this.include(bd.getc(d.x1 + bx, d.y2 - by)) ? 1 : 0);
				}
			}
			for (var bx = 0; bx <= d.x2 - d.x1; bx += dx) {
				for (var by = 0; by <= d.y2 - d.y1; by += dy) {
					data[4].push(this.include(bd.getc(d.x1 + bx, d.y1 + by)) ? 1 : 0);
					data[5].push(this.include(bd.getc(d.x1 + bx, d.y2 - by)) ? 1 : 0);
				}
			}
			data[2] = data[1].concat().reverse();
			data[3] = data[0].concat().reverse();
			data[6] = data[5].concat().reverse();
			data[7] = data[4].concat().reverse();
			for (var i = 0; i < 8; i++) {
				shapes[i] = (i < 4 ? d.cols : d.rows) + ":" + data[i].join("");
			}

			var first = shapes[0];
			shapes.sort();
			return (this.shape = { canon: shapes[0], id: first });
		}
	},

	//----------------------------------------------------------------------------
	// ★CrossListクラス Crossの配列を扱う
	//---------------------------------------------------------------------------
	"CrossList:PieceList": {},

	//----------------------------------------------------------------------------
	// ★BorderListクラス Borderの配列を扱う
	//---------------------------------------------------------------------------
	"BorderList:PieceList": {
		//---------------------------------------------------------------------------
		// blist.cellinside()  線が重なるセルのリストを取得する
		// blist.crossinside() 線が重なる交点のリストを取得する
		//---------------------------------------------------------------------------
		cellinside: function() {
			var clist = new this.klass.CellList(),
				pushed = [];
			for (var i = 0; i < this.length; i++) {
				var border = this[i],
					cell1 = border.sidecell[0],
					cell2 = border.sidecell[1];
				if (!cell1.isnull && pushed[cell1.id] !== true) {
					clist.add(cell1);
					pushed[cell1.id] = true;
				}
				if (!cell2.isnull && pushed[cell2.id] !== true) {
					clist.add(cell2);
					pushed[cell2.id] = true;
				}
			}
			return clist;
		},
		crossinside: function() {
			var clist = new this.klass.CrossList(),
				pushed = [];
			for (var i = 0; i < this.length; i++) {
				var border = this[i],
					cross1 = border.sidecross[0],
					cross2 = border.sidecross[1];
				if (!cross1.isnull && pushed[cross1.id] !== true) {
					clist.add(cross1);
					pushed[cross1.id] = true;
				}
				if (!cross2.isnull && pushed[cross2.id] !== true) {
					clist.add(cross2);
					pushed[cross2.id] = true;
				}
			}
			return clist;
		}
	},

	//----------------------------------------------------------------------------
	// ★ExCellListクラス ExCellの配列を扱う
	//---------------------------------------------------------------------------
	"ExCellList:PieceList": {}
});

// Board.js v3.4.1

//---------------------------------------------------------------------------
// ★Boardクラス 盤面の情報を保持する。Cell, Cross, Borderのオブジェクトも保持する
//---------------------------------------------------------------------------
// Boardクラスの定義
pzpr.classmgr.makeCommon({
	//---------------------------------------------------------
	Board: {
		initialize: function() {
			var classes = this.klass;

			// 盤面の範囲
			this.minbx = 0;
			this.minby = 0;
			this.maxbx = 0;
			this.maxby = 0;

			// エラー設定可能状態かどうか
			this.diserror = 0;

			// エラー表示中かどうか
			this.haserror = false;

			// Info表示中かどうか
			this.hasinfo = false;

			// 盤面上にあるセル・境界線等のオブジェクト
			this.cell = new classes.CellList();
			this.cross = new classes.CrossList();
			this.border = new classes.BorderList();
			this.excell = new classes.ExCellList();

			// 空オブジェクト
			this.nullobj = new classes.BoardPiece();
			this.emptycell = new classes.Cell();
			this.emptycross = new classes.Cross();
			this.emptyborder = new classes.Border();
			this.emptyexcell = new classes.ExCell();
			try {
				Object.freeze(this.nullobj);
				Object.freeze(this.emptycell);
				Object.freeze(this.emptycross);
				Object.freeze(this.emptyborder);
				Object.freeze(this.emptyexcell);
			} catch (e) {}

			this.createExtraObject();

			// 補助オブジェクト
			this.disrecinfo = 0;
			this.infolist = [];

			this.linegraph = this.addInfoList(classes.LineGraph); // 交差なし線のグラフ
			this.roommgr = this.addInfoList(classes.AreaRoomGraph); // 部屋情報を保持する
			this.sblkmgr = this.addInfoList(classes.AreaShadeGraph); // 黒マス情報を保持する
			this.sblk8mgr = this.addInfoList(classes.AreaShade8Graph);
			this.ublkmgr = this.addInfoList(classes.AreaUnshadeGraph); // 白マス情報を保持する
			this.nblkmgr = this.addInfoList(classes.AreaNumberGraph); // 数字情報を保持する

			if (classes.Bank.prototype.enabled) {
				this.bank = new classes.Bank();
				this.bank.init();
				this.bank.initialize(this.bank.defaultPreset());
			}

			this.addExtraInfo();

			this.exec = new classes.BoardExec();
			this.exec.insex.cross = this.hascross === 1 ? { 2: true } : { 0: true };

			this.trialstage = 0; // TrialMode
		},
		addInfoList: function(Klass) {
			var instance = new Klass();
			if (instance.enabled) {
				this.infolist.push(instance);
			}
			return instance;
		},
		addExtraInfo: function() {},

		cols: 10 /* 盤面の横幅(デフォルト) */,
		rows: 10 /* 盤面の縦幅(デフォルト) */,

		hascross: 2, // 1:盤面内側のCrossが操作可能なパズル 2:外枠上を含めてCrossが操作可能なパズル (どちらもCrossは外枠上に存在します)
		hasborder: 0, // 1:Border/Lineが操作可能なパズル 2:外枠上も操作可能なパズル
		hasexcell: 0, // 1:上・左側にセルを用意するパズル 2:四方にセルを用意するパズル
		hasflush: 0,
		borderAsLine: false, // 境界線をlineとして扱う
		disable_subclear: false, // "補助消去"ボタン不要

		excellRows: function(cols, rows) {
			return 1;
		},
		excellCols: function(cols, rows) {
			return 1;
		},

		//---------------------------------------------------------------------------
		// bd.initBoardSize() 指定されたサイズで盤面の初期化を行う
		//---------------------------------------------------------------------------
		initBoardSize: function(col, row) {
			if (col === void 0 || isNaN(col)) {
				col = this.cols;
				row = this.rows;
			}

			this.allclear(false); // initGroupで、新Objectに対しては別途allclearが呼ばれます

			this.initGroup("cell", col, row);
			this.initGroup("cross", col, row);
			this.initGroup("border", col, row);
			this.initGroup("excell", col, row);

			this.cols = col;
			this.rows = row;
			this.setminmax();
			this.setposAll();

			if (this.hasdots) {
				this.initDots(this.cols, this.rows, this.hasdots === 2);
			}

			this.initExtraObject(col, row);

			if (this.bank) {
				this.bank.width = this.cols / this.puzzle.painter.bankratio;
				this.bank.performLayout();
			}

			this.rebuildInfo();

			this.puzzle.cursor.initCursor();
			this.puzzle.opemgr.allerase();
		},
		createExtraObject: function() {},
		initExtraObject: function(col, row) {},

		//---------------------------------------------------------------------------
		// bd.getBankPiecesInGrid(): Returns an array of [strings, PieceList] tuples
		// which can be compared to the pieces inside the bank.
		//---------------------------------------------------------------------------
		getBankPiecesInGrid: function() {
			return [];
		},

		//---------------------------------------------------------------------------
		// bd.initGroup()     数を比較して、オブジェクトの追加か削除を行う
		// bd.getGroup()      指定したタイプのオブジェクト配列を返す
		// bd.estimateSize()  指定したオブジェクトがいくつになるか計算を行う
		// bd.newObject()     指定されたタイプの新しいオブジェクトを返す
		//---------------------------------------------------------------------------
		initGroup: function(group, col, row) {
			var groups = this.getGroup(group);
			var len = this.estimateSize(group, col, row),
				clen = groups.length;
			// 既存のサイズより小さくなるならdeleteする
			if (clen > len) {
				for (var id = clen - 1; id >= len; id--) {
					groups.pop();
				}
			}
			// 既存のサイズより大きくなるなら追加する
			else if (clen < len) {
				var groups2 = new groups.constructor();
				for (var id = clen; id < len; id++) {
					var piece = this.newObject(group, id);
					groups.add(piece);
					groups2.add(piece);
				}
				groups2.allclear(false);
			}
			groups.length = len;
			return len - clen;
		},
		getGroup: function(group) {
			if (group === "cell") {
				return this.cell;
			} else if (group === "cross") {
				return this.cross;
			} else if (group === "border") {
				return this.border;
			} else if (group === "excell") {
				return this.excell;
			}
			return new this.klass.PieceList();
		},
		estimateSize: function(group, col, row) {
			if (group === "cell") {
				return col * row;
			} else if (group === "cross") {
				return (col + 1) * (row + 1);
			} else if (group === "border") {
				if (this.hasborder === 1) {
					return 2 * col * row - (col + row);
				} else if (this.hasborder === 2) {
					return 2 * col * row + (col + row);
				}
			} else if (group === "excell") {
				if (this.hasexcell === 1) {
					var exrows = this.excellRows(col, row);
					var excols = this.excellCols(col, row);
					col *= exrows;
					row *= excols;
					return col + row + (this.emptyexcell.ques === 51 ? 1 : 0);
				} /* 左上角のExCellを追加 */ else if (this.hasexcell === 2) {
					return 2 * (col + row);
				}
			}
			return 0;
		},
		newObject: function(group, id) {
			var piece = this.nullobj,
				classes = this.klass;
			if (group === "cell") {
				piece = new classes.Cell();
			} else if (group === "cross") {
				piece = new classes.Cross();
			} else if (group === "border") {
				piece = new classes.Border();
			} else if (group === "excell") {
				piece = new classes.ExCell();
			}
			if (piece !== this.nullobj && id !== void 0) {
				piece.id = id;
			}
			return piece;
		},

		//---------------------------------------------------------------------------
		// bd.setposAll()    全てのCell, Cross, BorderオブジェクトのsetposCell()等を呼び出す
		//                   盤面の新規作成や、拡大/縮小/回転/反転時などに呼び出される
		// bd.setposGroup()  指定されたタイプのsetpos関数を呼び出す
		// bd.setposCell()   該当するidのセルのbx,byプロパティを設定する
		// bd.setposCross()  該当するidの交差点のbx,byプロパティを設定する
		// bd.setposBorder() 該当するidの境界線/Lineのbx,byプロパティを設定する
		// bd.setposExCell() 該当するidのExtendセルのbx,byプロパティを設定する
		// bd.set_xnum()     crossは存在しないが、bd._xnumだけ設定したい場合に呼び出す
		//---------------------------------------------------------------------------
		/* setpos関連関数 */
		setposAll: function() {
			this.setposCells();
			this.setposCrosses();
			this.setposBorders();
			this.setposExCells();
		},
		setposGroup: function(group) {
			if (group === "cell") {
				this.setposCells();
			} else if (group === "cross") {
				this.setposCrosses();
			} else if (group === "border") {
				this.setposBorders();
			} else if (group === "excell") {
				this.setposExCells();
			}
		},

		setposCells: function() {
			var qc = this.cols;
			for (var id = 0; id < this.cell.length; id++) {
				var cell = this.cell[id];
				cell.id = id;
				cell.isnull = false;

				cell.bx = (id % qc) * 2 + 1;
				cell.by = ((id / qc) << 1) + 1;

				cell.initAdjacent();
				cell.initAdjBorder();
			}
		},
		setposCrosses: function() {
			var qc = this.cols;
			for (var id = 0; id < this.cross.length; id++) {
				var cross = this.cross[id];
				cross.id = id;
				cross.isnull = false;

				cross.bx = (id % (qc + 1)) * 2;
				cross.by = (id / (qc + 1)) << 1;

				cross.initAdjBorder();
			}
		},
		setposBorders: function() {
			var qc = this.cols,
				qr = this.rows;
			var bdinside = 2 * qc * qr - qc - qr;
			for (var id = 0; id < this.border.length; id++) {
				var border = this.border[id],
					i = id;
				border.id = id;
				border.isnull = false;

				if (i >= 0 && i < (qc - 1) * qr) {
					border.bx = (i % (qc - 1)) * 2 + 2;
					border.by = ((i / (qc - 1)) << 1) + 1;
				}
				i -= (qc - 1) * qr;
				if (i >= 0 && i < qc * (qr - 1)) {
					border.bx = (i % qc) * 2 + 1;
					border.by = ((i / qc) << 1) + 2;
				}
				i -= qc * (qr - 1);
				if (this.hasborder === 2) {
					if (i >= 0 && i < qc) {
						border.bx = i * 2 + 1;
						border.by = 0;
					}
					i -= qc;
					if (i >= 0 && i < qc) {
						border.bx = i * 2 + 1;
						border.by = 2 * qr;
					}
					i -= qc;
					if (i >= 0 && i < qr) {
						border.bx = 0;
						border.by = i * 2 + 1;
					}
					i -= qr;
					if (i >= 0 && i < qr) {
						border.bx = 2 * qc;
						border.by = i * 2 + 1;
					}
					i -= qr;
				}
				border.isvert = !(border.bx & 1);
				border.inside = id < bdinside;

				border.initSideObject();
			}
		},
		setposExCells: function() {
			var exrows = this.excellRows(this.cols, this.rows),
				excols = this.excellCols(this.cols, this.rows),
				qc = this.cols * exrows,
				qr = this.rows * excols;
			for (var id = 0; id < this.excell.length; id++) {
				var excell = this.excell[id],
					i = id;
				excell.id = id;
				excell.isnull = false;

				if (this.hasexcell === 1) {
					if (i >= 0 && i < qc) {
						excell.bx = ((i / exrows) | 0) * 2 + 1;
						excell.by = (i % exrows) * -2 - 1;
					}
					i -= qc;
					if (i >= 0 && i < qr) {
						excell.bx = (i % excols) * -2 - 1;
						excell.by = ((i / excols) | 0) * 2 + 1;
					}
					i -= qr;
					if (i === 0 && excell.ques === 51) {
						excell.bx = -1;
						excell.by = -1;
					}
					i--; /* 左上角のExCellを追加 */
				} else if (this.hasexcell === 2) {
					if (i >= 0 && i < qc) {
						excell.bx = i * 2 + 1;
						excell.by = -1;
					}
					i -= qc;
					if (i >= 0 && i < qc) {
						excell.bx = i * 2 + 1;
						excell.by = 2 * qr + 1;
					}
					i -= qc;
					if (i >= 0 && i < qr) {
						excell.bx = -1;
						excell.by = i * 2 + 1;
					}
					i -= qr;
					if (i >= 0 && i < qr) {
						excell.bx = 2 * qc + 1;
						excell.by = i * 2 + 1;
					}
					i -= qr;
				}

				excell.initAdjacent();
			}
		},

		//---------------------------------------------------------------------------
		// bd.setminmax()   盤面のbx,byの最小値/最大値をセットする
		//---------------------------------------------------------------------------
		setminmax: function() {
			var extUL = this.hasexcell > 0;
			var extDR = this.hasexcell === 2;
			this.minbx = !extUL ? 0 : -2 * this.excellCols(this.cols, this.rows);
			this.minby = !extUL ? 0 : -2 * this.excellRows(this.cols, this.rows);
			this.maxbx = !extDR ? 2 * this.cols : 2 * this.cols + 2;
			this.maxby = !extDR ? 2 * this.rows : 2 * this.rows + 2;

			this.puzzle.cursor.setminmax();
		},

		//---------------------------------------------------------------------------
		// bd.allclear() 全てのCell, Cross, Borderオブジェクトのallclear()を呼び出す
		// bd.ansclear() 全てのCell, Cross, Borderオブジェクトのansclear()を呼び出す
		// bd.subclear() 全てのCell, Cross, Borderオブジェクトのsubclear()を呼び出す
		// bd.errclear() 全てのCell, Cross, Borderオブジェクトのerrorプロパティを0にして、Canvasを再描画する
		// bd.trialclear() 全てのCell, Cross, Borderオブジェクトのtrialプロパティを0にして、Canvasを再描画する
		//---------------------------------------------------------------------------
		// 呼び出し元：this.initBoardSize()
		allclear: function(isrec) {
			this.cell.allclear(isrec);
			this.cross.allclear(isrec);
			this.border.allclear(isrec);
			this.excell.allclear(isrec);
			if (isrec) {
				this.puzzle.opemgr.rejectTrial(true);
			}
		},
		// 呼び出し元：回答消去ボタン押した時
		ansclear: function() {
			var opemgr = this.puzzle.opemgr;
			opemgr.rejectTrial(true);
			opemgr.newOperation();
			opemgr.add(new this.puzzle.klass.BoardClearOperation());

			this.cell.ansclear();
			this.cross.ansclear();
			this.border.ansclear();
			this.excell.ansclear();
			if (this.bank) {
				this.bank.ansclear();
			}
			this.rebuildInfo();
		},
		// 呼び出し元：補助消去ボタン押した時
		subclear: function() {
			this.puzzle.opemgr.newOperation();

			this.cell.subclear();
			this.cross.subclear();
			this.border.subclear();
			this.excell.subclear();
			if (this.bank) {
				this.bank.subclear();
			}
			this.rebuildInfo();
		},

		errclear: function() {
			var isclear = this.haserror || this.hasinfo;
			if (isclear) {
				this.cell.errclear();
				this.cross.errclear();
				this.border.errclear();
				this.excell.errclear();
				if (this.bank) {
					this.bank.errclear();
				}
				this.haserror = false;
				this.hasinfo = false;
			}
			return isclear;
		},

		trialclear: function(forcemode) {
			if (this.trialstage > 0 || !!forcemode) {
				this.cell.trialclear();
				this.cross.trialclear();
				this.border.trialclear();
				this.excell.trialclear();
				this.puzzle.redraw();
				this.trialstage = 0;
			}
		},

		//---------------------------------------------------------------------------
		// bd.getObjectPos()  (X,Y)の位置にあるオブジェクトを計算して返す
		//---------------------------------------------------------------------------
		getObjectPos: function(group, bx, by) {
			var obj = this.nullobj;
			if (group === "cell") {
				obj = this.getc(bx, by);
			} else if (group === "cross") {
				obj = this.getx(bx, by);
			} else if (group === "border") {
				obj = this.getb(bx, by);
			} else if (group === "excell") {
				obj = this.getex(bx, by);
			} else if (group === "obj") {
				obj = this.getobj(bx, by);
			}
			return obj;
		},

		//---------------------------------------------------------------------------
		// bd.getc()  (X,Y)の位置にあるCellオブジェクトを返す
		// bd.getx()  (X,Y)の位置にあるCrossオブジェクトを返す
		// bd.getb()  (X,Y)の位置にあるBorderオブジェクトを返す
		// bd.getex() (X,Y)の位置にあるextendCellオブジェクトを返す
		// bd.getobj() (X,Y)の位置にある何らかのオブジェクトを返す
		//---------------------------------------------------------------------------
		getc: function(bx, by) {
			var id = null,
				qc = this.cols,
				qr = this.rows;
			if (
				bx < 0 ||
				bx > qc << 1 ||
				by < 0 ||
				by > qr << 1 ||
				!(bx & 1) ||
				!(by & 1)
			) {
			} else {
				id = (bx >> 1) + (by >> 1) * qc;
			}

			return id !== null ? this.cell[id] : this.emptycell;
		},
		getx: function(bx, by) {
			var id = null,
				qc = this.cols,
				qr = this.rows;
			if (
				bx < 0 ||
				bx > qc << 1 ||
				by < 0 ||
				by > qr << 1 ||
				!!(bx & 1) ||
				!!(by & 1)
			) {
			} else {
				id = (bx >> 1) + (by >> 1) * (qc + 1);
			}

			if (this.hascross !== 0) {
				return id !== null ? this.cross[id] : this.emptycross;
			}
			return this.emptycross;
		},
		getb: function(bx, by) {
			var id = null,
				qc = this.cols,
				qr = this.rows;
			if (
				!!this.hasborder &&
				bx >= 1 &&
				bx <= 2 * qc - 1 &&
				by >= 1 &&
				by <= 2 * qr - 1
			) {
				if (!(bx & 1) && by & 1) {
					id = (bx >> 1) - 1 + (by >> 1) * (qc - 1);
				} else if (bx & 1 && !(by & 1)) {
					id = (bx >> 1) + ((by >> 1) - 1) * qc + (qc - 1) * qr;
				}
			} else if (this.hasborder === 2) {
				if (by === 0 && bx & 1 && bx >= 1 && bx <= 2 * qc - 1) {
					id = (qc - 1) * qr + qc * (qr - 1) + (bx >> 1);
				} else if (by === 2 * qr && bx & 1 && bx >= 1 && bx <= 2 * qc - 1) {
					id = (qc - 1) * qr + qc * (qr - 1) + qc + (bx >> 1);
				} else if (bx === 0 && by & 1 && by >= 1 && by <= 2 * qr - 1) {
					id = (qc - 1) * qr + qc * (qr - 1) + 2 * qc + (by >> 1);
				} else if (bx === 2 * qc && by & 1 && by >= 1 && by <= 2 * qr - 1) {
					id = (qc - 1) * qr + qc * (qr - 1) + 2 * qc + qr + (by >> 1);
				}
			}

			return id !== null ? this.border[id] : this.emptyborder;
		},
		getex: function(bx, by) {
			var xr = this.excellRows(this.cols, this.rows);
			var xc = this.excellCols(this.cols, this.rows);
			var id = null,
				qc = this.cols * xr,
				qr = this.rows * xc;

			if (this.hasexcell === 1) {
				if (this.emptyexcell.ques === 51 && bx === -1 && by === -1) {
					id = qc + qr; /* 左上角のExCellを追加 */
				} else if (by >= this.minby && by < 0 && bx > 0 && bx < 2 * qc) {
					id = (-by >> 1) + (bx >> 1) * xr;
				} else if (bx >= this.minbx && bx < 0 && by > 0 && by < 2 * qr) {
					id = (-bx >> 1) + qc + (by >> 1) * xc;
				}
			} else if (this.hasexcell === 2) {
				if (by === -1 && bx > 0 && bx < 2 * qc) {
					id = bx >> 1;
				} else if (by === 2 * qr + 1 && bx > 0 && bx < 2 * qc) {
					id = qc + (bx >> 1);
				} else if (bx === -1 && by > 0 && by < 2 * qr) {
					id = 2 * qc + (by >> 1);
				} else if (bx === 2 * qc + 1 && by > 0 && by < 2 * qr) {
					id = 2 * qc + qr + (by >> 1);
				}
			}

			return id !== null ? this.excell[id] : this.emptyexcell;
		},

		getobj: function(bx, by) {
			if ((bx + by) & 1) {
				return this.getb(bx, by);
			} else if (!(bx & 1) && !(by & 1)) {
				return this.getx(bx, by);
			}

			var cell = this.getc(bx, by);
			return cell !== this.emptycell || !this.hasexcell
				? cell
				: this.getex(bx, by);
		},

		//---------------------------------------------------------------------------
		// bd.operate()  BoardExecの拡大縮小・回転反転処理を実行する
		//---------------------------------------------------------------------------
		operate: function(type) {
			if (this.trialstage > 0 && this.exec.isBoardOp(type)) {
				throw Error("board operations are not possible in trial mode");
			}
			this.exec.execadjust(type);
		},

		flushexcell: function() {
			this.puzzle.opemgr.newOperation();
			var cols = this.cols,
				rows = this.rows,
				excell = this.excell;
			this.genericFlush(
				this.excellCols(cols, rows),
				this.excellRows(cols, rows),
				cols,
				rows,
				function(i) {
					return excell[i].qnum;
				},
				function(i, num) {
					excell[i].setQcmp(0);
					excell[i].setQnum(num);
				}
			);
			this.puzzle.redraw();
		},

		genericFlush: function(excols, exrows, cols, rows, get_func, set_func) {
			var qc = cols * exrows,
				qr = rows * excols,
				dest = 0;

			for (var id = 0; id < qc + qr; id++) {
				if (get_func(id) !== -1) {
					if (id !== dest - 1) {
						set_func(dest, get_func(id));
					}
					dest++;
				}

				if (
					(id < qc && id % exrows === exrows - 1) ||
					(id >= qc && (id - qc) % excols === excols - 1)
				) {
					for (var b = dest; b <= id; b++) {
						set_func(b, -1);
					}
					dest = id + 1;
				}
			}
		},

		//---------------------------------------------------------------------------
		// bd.objectinside() 座標(x1,y1)-(x2,y2)に含まれるオブジェクトのリストを取得する
		//---------------------------------------------------------------------------
		objectinside: function(group, x1, y1, x2, y2) {
			if (group === "cell") {
				return this.cellinside(x1, y1, x2, y2);
			} else if (group === "cross") {
				return this.crossinside(x1, y1, x2, y2);
			} else if (group === "border") {
				return this.borderinside(x1, y1, x2, y2);
			} else if (group === "excell") {
				return this.excellinside(x1, y1, x2, y2);
			}
			return new this.klass.PieceList();
		},

		//---------------------------------------------------------------------------
		// bd.cellinside()   座標(x1,y1)-(x2,y2)に含まれるCellのリストを取得する
		// bd.crossinside()  座標(x1,y1)-(x2,y2)に含まれるCrossのリストを取得する
		// bd.borderinside() 座標(x1,y1)-(x2,y2)に含まれるBorderのリストを取得する
		// bd.excellinside() 座標(x1,y1)-(x2,y2)に含まれるExCellのリストを取得する
		//---------------------------------------------------------------------------
		cellinside: function(x1, y1, x2, y2) {
			var clist = new this.klass.CellList();
			for (var by = y1 | 1; by <= y2; by += 2) {
				for (var bx = x1 | 1; bx <= x2; bx += 2) {
					var cell = this.getc(bx, by);
					if (!cell.isnull) {
						clist.add(cell);
					}
				}
			}
			return clist;
		},
		crossinside: function(x1, y1, x2, y2) {
			var clist = new this.klass.CrossList();
			if (!!this.hascross) {
				for (var by = y1 + (y1 & 1); by <= y2; by += 2) {
					for (var bx = x1 + (x1 & 1); bx <= x2; bx += 2) {
						var cross = this.getx(bx, by);
						if (!cross.isnull) {
							clist.add(cross);
						}
					}
				}
			}
			return clist;
		},
		borderinside: function(x1, y1, x2, y2) {
			var blist = new this.klass.BorderList();
			if (!!this.hasborder) {
				for (var by = y1; by <= y2; by++) {
					for (var bx = x1 + (((x1 + by) & 1) ^ 1); bx <= x2; bx += 2) {
						var border = this.getb(bx, by);
						if (!border.isnull) {
							blist.add(border);
						}
					}
				}
			}
			return blist;
		},
		excellinside: function(x1, y1, x2, y2) {
			var exlist = new this.klass.ExCellList();
			if (!!this.hasexcell) {
				for (var by = y1 | 1; by <= y2; by += 2) {
					for (var bx = x1 | 1; bx <= x2; bx += 2) {
						var excell = this.getex(bx, by);
						if (excell && !excell.isnull) {
							exlist.add(excell);
						}
					}
				}
			}
			return exlist;
		},

		//---------------------------------------------------------------------------
		// bd.disableInfo()  Area/LineManagerへの登録を禁止する
		// bd.enableInfo()   Area/LineManagerへの登録を許可する
		// bd.isenableInfo() 操作の登録できるかを返す
		//---------------------------------------------------------------------------
		disableInfo: function() {
			this.puzzle.opemgr.disableRecord();
			this.disrecinfo++;
		},
		enableInfo: function() {
			this.puzzle.opemgr.enableRecord();
			if (this.disrecinfo > 0) {
				this.disrecinfo--;
			}
		},
		isenableInfo: function() {
			return this.disrecinfo === 0;
		},

		//--------------------------------------------------------------------------------
		// bd.rebuildInfo()      部屋、黒マス、白マスの情報を再生成する
		// bd.modifyInfo()       黒マス・白マス・境界線や線が入力されたり消された時に情報を変更する
		//--------------------------------------------------------------------------------
		rebuildInfo: function() {
			if (this.bank) {
				this.bank.rebuildExtraData();
			}
			this.infolist.forEach(function(info) {
				info.rebuild();
			});
		},
		modifyInfo: function(obj, type) {
			if (!this.isenableInfo()) {
				return;
			}
			for (var i = 0; i < this.infolist.length; ++i) {
				var info = this.infolist[i];
				if (!!info.relation[type]) {
					info.modifyInfo(obj, type);
				}
			}
		},

		//---------------------------------------------------------------------------
		// bd.irowakeRemake() 「色分けしなおす」ボタンを押した時などに色分けしなおす
		//---------------------------------------------------------------------------
		irowakeRemake: function() {
			for (var i = 0; i < this.infolist.length; ++i) {
				var info = this.infolist[i];
				if (info.coloring) {
					info.newIrowake();
				}
			}
		},

		//---------------------------------------------------------------------------
		// bd.disableSetError()  盤面のオブジェクトにエラーフラグを設定できないようにする
		// bd.enableSetError()   盤面のオブジェクトにエラーフラグを設定できるようにする
		// bd.isenableSetError() 盤面のオブジェクトにエラーフラグを設定できるかどうかを返す
		//---------------------------------------------------------------------------
		disableSetError: function() {
			this.diserror++;
		},
		enableSetError: function() {
			this.diserror--;
		},
		isenableSetError: function() {
			return this.diserror <= 0;
		},

		//---------------------------------------------------------------------------
		// bd.freezecopy()  盤面のオブジェクト値のみを取得する
		// bd.compareData() 盤面のオブジェクト値のみを比較し異なる場合にcallback関数を呼ぶ
		//---------------------------------------------------------------------------
		freezecopy: function() {
			var bd2 = { cell: [], cross: [], border: [], excell: [] };
			for (var group in bd2) {
				for (var c = 0; c < this[group].length; c++) {
					bd2[group][c] = this[group][c].getprops();
				}
			}
			return bd2;
		},
		compareData: function(bd2, callback) {
			for (var group in bd2) {
				if (!this[group]) {
					continue;
				}
				for (var c = 0; c < bd2[group].length; c++) {
					if (!this[group][c]) {
						continue;
					}
					this[group][c].compare(bd2[group][c], callback);
				}
			}
		},

		dotsmax: 0,
		dots: [],

		//---------------------------------------------------------------------------
		initDots: function(col, row, outer) {
			var width = 2 * col + (outer ? 1 : -1);
			var height = 2 * row + (outer ? 1 : -1);
			this.dotsmax = width * height;
			this.dots = [];
			for (var id = 0; id < this.dotsmax; id++) {
				this.dots[id] = new this.klass.Dot();
				var dot = this.dots[id];
				dot.id = id;

				dot.bx = (id % width) + (outer ? 0 : 1);
				dot.by = ((id / width) | 0) + (outer ? 0 : 1);

				dot.isnull = false;
				dot.piece = dot.getaddr().getobj();
			}
		},

		getDot: function(bx, by) {
			var qc = this.cols,
				qr = this.rows,
				id = -1;

			if (this.hasdots === 1) {
				if (bx <= 0 || bx >= qc << 1 || by <= 0 || by >= qr << 1) {
					return null;
				}
				id = bx - 1 + (by - 1) * (2 * qc - 1);
			}
			if (this.hasdots === 2) {
				if (bx < 0 || bx > qc << 1 || by < 0 || by > qr << 1) {
					return null;
				}
				id = bx + by * (2 * qc + 1);
			}
			if (id === -1) {
				return null;
			}
			var dot = this.dots[id];
			return dot.isnull ? null : dot;
		},

		dotinside: function(x1, y1, x2, y2) {
			var dlist = new this.klass.PieceList();
			for (var by = y1; by <= y2; by++) {
				for (var bx = x1; bx <= x2; bx++) {
					var dot = this.getDot(bx, by);
					if (!!dot) {
						dlist.add(dot);
					}
				}
			}
			return dlist;
		}
	}
});

// BoardExec.js v3.4.1

(function() {
	// 拡大縮小・回転反転用定数
	var UP = 0x01,
		DN = 0x02,
		LT = 0x03,
		RT = 0x04,
		EXPAND = 0x10,
		REDUCE = 0x20,
		TURN = 0x40,
		FLIP = 0x80;

	pzpr.classmgr.makeCommon({
		//---------------------------------------------------------------------------
		// ★BoardExecクラス 盤面の拡大縮小、反転回転等を行う (MenuExec.js, Board.jsから移動)
		//---------------------------------------------------------------------------
		BoardExec: {
			// 拡大縮小・回転反転用定数
			UP: UP,
			DN: DN,
			LT: LT,
			RT: RT,

			EXPAND: EXPAND,
			REDUCE: REDUCE,
			TURN: TURN,
			FLIP: FLIP,
			TURNFLIP: TURN | FLIP,

			EXPANDUP: EXPAND | UP,
			EXPANDDN: EXPAND | DN,
			EXPANDLT: EXPAND | LT,
			EXPANDRT: EXPAND | RT,

			REDUCEUP: REDUCE | UP,
			REDUCEDN: REDUCE | DN,
			REDUCELT: REDUCE | LT,
			REDUCERT: REDUCE | RT,

			TURNL: TURN | 1,
			TURNR: TURN | 2,

			FLIPX: FLIP | 1,
			FLIPY: FLIP | 2,

			ALLOWALL: TURN | FLIP | 3,

			allowedOperations: function(isplaymode) {
				return this.ALLOWALL;
			},

			boardtype: {
				expandup: [REDUCE | UP, EXPAND | UP],
				expanddn: [REDUCE | DN, EXPAND | DN],
				expandlt: [REDUCE | LT, EXPAND | LT],
				expandrt: [REDUCE | RT, EXPAND | RT],
				reduceup: [EXPAND | UP, REDUCE | UP],
				reducedn: [EXPAND | DN, REDUCE | DN],
				reducelt: [EXPAND | LT, REDUCE | LT],
				reducert: [EXPAND | RT, REDUCE | RT],
				turnl: [TURN | 2, TURN | 1],
				turnr: [TURN | 1, TURN | 2],
				flipy: [FLIP | 2, FLIP | 2],
				flipx: [FLIP | 1, FLIP | 1]
			},

			// expand/reduce処理用
			qnumw: [], // ques==51の回転･反転用
			qnumh: [], // ques==51の回転･反転用

			// expand/reduce処理で消える/増えるオブジェクトの判定用
			insex: {
				cell: { 1: true },
				cross: {} /* Board初期化時に設定します */,
				border: { 1: true, 2: true },
				excell: { 1: true }
			},

			isBoardOp: function(name) {
				return !!this.boardtype[name];
			},

			adjustSize: function() {
				var bd = this.board;
				return { x1: 0, y1: 0, x2: 2 * bd.cols, y2: 2 * bd.rows }; // TURNFLIPには範囲が必要
			},

			//------------------------------------------------------------------------------
			// bd.exec.execadjust()   盤面の調整、回転、反転で対応する関数へジャンプする
			// bd.exec.execadjust_main() 盤面の調整、回転、反転処理の実行部
			//------------------------------------------------------------------------------
			execadjust: function(name) {
				if (!this.isBoardOp(name)) {
					return;
				}

				var puzzle = this.puzzle,
					bd = this.board;
				if (name.indexOf("reduce") === 0) {
					if (name === "reduceup" || name === "reducedn") {
						if (bd.rows <= 1) {
							return;
						}
					} else if (name === "reducelt" || name === "reducert") {
						if (bd.cols <= 1) {
							return;
						}
					}
				}

				puzzle.opemgr.newOperation();

				puzzle.painter.suspendAll();

				// undo/redo時はexecadjust_mainを直接呼びます
				var d = this.adjustSize(); // TURNFLIPには範囲が必要
				this.execadjust_main(this.boardtype[name][1], d);
				this.addOpe(d, name);

				bd.setminmax();
				bd.rebuildInfo();

				// Canvasを更新する
				puzzle.painter.resizeCanvas();
				puzzle.emit("adjust");
				puzzle.painter.unsuspend();
			},
			execadjust_main: function(key, d) {
				var bd = this.board;
				this.adjustBoardData(key, d);
				if (bd.roommgr.hastop && key & REDUCE) {
					this.reduceRoomNumber(key, d);
				}

				if (key & TURN) {
					var tmp = bd.cols;
					bd.cols = bd.rows;
					bd.rows = tmp;
					d = { x1: 0, y1: 0, x2: d.y2, y2: d.x2 };
				} else if (key & EXPAND) {
					if (key === this.EXPANDUP || key === this.EXPANDDN) {
						bd.rows++;
					} else if (key === this.EXPANDLT || key === this.EXPANDRT) {
						bd.cols++;
					}
				}

				// main operation
				["cell", "cross", "border", "excell"].forEach(function(group) {
					if (key & EXPAND) {
						bd.exec.expandGroup(group, key);
					} else if (key & REDUCE) {
						bd.exec.reduceGroup(group, key);
					} else {
						bd.exec.turnflipGroup(group, key, d);
					}
				});

				if (key & REDUCE) {
					if (key === this.REDUCEUP || key === this.REDUCEDN) {
						bd.rows--;
					} else if (key === this.REDUCELT || key === this.REDUCERT) {
						bd.cols--;
					}
				}
				bd.setminmax();
				bd.setposAll();

				if (bd.hasdots) {
					bd.initDots(bd.cols, bd.rows, bd.hasdots === 2);
				}
				if (bd.bank) {
					bd.bank.width = bd.cols / this.puzzle.painter.bankratio;
					bd.bank.performLayout();
				}

				this.adjustBoardData2(key, d);
			},

			//------------------------------------------------------------------------------
			// bd.exec.addOpe() 指定された盤面(拡大・縮小, 回転・反転)操作を追加する
			//------------------------------------------------------------------------------
			addOpe: function(d, name) {
				var key = this.boardtype[name][1],
					puzzle = this.puzzle,
					ope;
				if (key & this.TURNFLIP) {
					ope = new puzzle.klass.BoardFlipOperation(d, name);
				} else {
					ope = new puzzle.klass.BoardAdjustOperation(name);
				}
				puzzle.opemgr.add(ope);
			},

			//------------------------------------------------------------------------------
			// bd.exec.expandGroup()  オブジェクトの追加を行う
			// bd.exec.reduceGroup()  オブジェクトの消去を行う
			// bd.exec.isdel()        消去されるオブジェクトかどうか判定する
			//------------------------------------------------------------------------------
			expandGroup: function(group, key) {
				var bd = this.board;
				var margin = bd.initGroup(group, bd.cols, bd.rows);
				var groups = bd.getGroup(group);
				var groups2 = new groups.constructor();
				bd.setposGroup(group);
				for (var i = groups.length - 1; i >= 0; i--) {
					var piece = groups[i];
					if (this.isdel(key, piece)) {
						piece = bd.newObject(group, i);
						groups[i] = piece;
						groups2.add(piece);
						margin--;
					} else if (margin > 0) {
						groups[i] = groups[i - margin];
					}
				}
				groups2.allclear(false);

				if (group === "border") {
					this.expandborder(key);
				}
			},
			reduceGroup: function(group, key) {
				var bd = this.board;
				if (group === "border") {
					this.reduceborder(key);
				}

				var margin = 0,
					groups = bd.getGroup(group),
					groups2 = new groups.constructor();
				for (var i = 0; i < groups.length; i++) {
					var piece = groups[i];
					if (this.isdel(key, piece)) {
						piece.id = i;
						groups2.add(piece);
						margin++;
					} else if (margin > 0) {
						groups[i - margin] = groups[i];
					}
				}
				var opemgr = this.puzzle.opemgr;
				if (!opemgr.undoExec && !opemgr.redoExec) {
					opemgr.forceRecord = true;
					groups2.allclear(true);
					opemgr.forceRecord = false;
				}
				for (var i = 0; i < margin; i++) {
					groups.pop();
				}
			},
			isdel: function(key, piece) {
				if (piece.group === "excell" && key & (this.EXPAND | this.REDUCE)) {
					var bd = this.board,
						oldcols = bd.cols,
						oldrows = bd.rows;

					if ((key & 7) === this.UP || (key & 7) === this.DN) {
						oldrows--;
					} else {
						oldcols--;
					}

					var oldexcols = bd.excellCols(oldcols, oldrows);
					var oldexrows = bd.excellRows(oldcols, oldrows);

					var oldminx = oldexcols * -2 + 1;
					var oldminy = oldexrows * -2 + 1;

					if (piece.bx < oldminx || piece.by < oldminy) {
						return true;
					}
				}

				return !!this.insex[piece.group][this.distObj(key, piece)];
			},

			//------------------------------------------------------------------------------
			// bd.exec.turnflipGroup() execadjust_main()から内部的に呼ばれる回転反転実行部
			//------------------------------------------------------------------------------
			turnflipGroup: function(group, key, d) {
				var bd = this.board;
				if (group === "excell") {
					if (bd.hasexcell === 1 && key & this.FLIP) {
						var d2 = { x1: d.x1, y1: d.y1, x2: d.x2, y2: d.y2 };
						if (key === this.FLIPY) {
							d2.x1 = bd.excellCols(bd.cols, bd.rows) * -2 + 1;
							d2.x2 = -1;
						} else if (key === this.FLIPX) {
							d2.y1 = bd.excellRows(bd.cols, bd.rows) * -2 + 1;
							d2.y2 = -1;
						}
						d = d2;
					} else if (bd.hasexcell === 2) {
						d = { x1: -1, y1: -1, x2: d.x2 + 1, y2: d.y2 + 1 };
					}
				}

				var objlist = bd.objectinside(group, d.x1, d.y1, d.x2, d.y2);
				var converted = {},
					xx = d.x1 + d.x2,
					yy = d.y1 + d.y2;
				for (var i = 0; i < objlist.length; i++) {
					var obj = objlist[i],
						id = null;
					switch (key) {
						case this.FLIPY:
							id = bd.getObjectPos(group, obj.bx, yy - obj.by).id;
							break;
						case this.FLIPX:
							id = bd.getObjectPos(group, xx - obj.bx, obj.by).id;
							break;
						case this.TURNL:
							id = bd.getObjectPos(group, obj.by, yy - obj.bx).id;
							break;
						case this.TURNR:
							id = bd.getObjectPos(group, xx - obj.by, obj.bx).id;
							break;
					}
					converted[id] = obj;
				}

				var groups = bd.getGroup(group);
				for (var n in converted) {
					groups[+n] = converted[n];
				}
			},

			//---------------------------------------------------------------------------
			// bd.exec.distObj()      上下左右いずれかの外枠との距離を求める
			//---------------------------------------------------------------------------
			distObj: function(key, piece) {
				var bd = this.board;
				if (piece.isnull) {
					return -1;
				}

				key &= 0x0f;
				if (key === this.UP) {
					return piece.by;
				} else if (key === this.DN) {
					return 2 * bd.rows - piece.by;
				} else if (key === this.LT) {
					return piece.bx;
				} else if (key === this.RT) {
					return 2 * bd.cols - piece.bx;
				}
				return -1;
			},

			//---------------------------------------------------------------------------
			// bd.exec.expandborder() 盤面の拡大時、境界線を伸ばす
			// bd.exec.reduceborder() 盤面の縮小時、線を移動する
			//---------------------------------------------------------------------------
			expandborder: function(key) {
				var bd = this.board,
					bdAsLine = bd.borderAsLine;
				// borderAsLineじゃないUndo時は、後でオブジェクトを代入するので下の処理はパス
				if (bdAsLine || !bd.puzzle.opemgr.undoExec) {
					var group2 = new this.klass.BorderList();
					// 直前のexpandGroupで、bx,byプロパティが不定なままなので設定する
					bd.setposBorders();

					var dist = bdAsLine ? 2 : 1;
					for (var id = 0; id < bd.border.length; id++) {
						var border = bd.border[id];
						if (this.distObj(key, border) !== dist) {
							continue;
						}

						var source = bdAsLine
							? this.outerBorder(id, key)
							: this.innerBorder(id, key);
						this.copyBorder(border, source);
						group2.add(source);
					}
					if (bdAsLine) {
						group2.allclear(false);
					}
				}
			},
			reduceborder: function(key) {
				var bd = this.board;
				if (bd.borderAsLine) {
					for (var id = 0; id < bd.border.length; id++) {
						var border = bd.border[id];
						if (this.distObj(key, border) !== 0) {
							continue;
						}

						var source = this.innerBorder(id, key);
						this.copyBorder(border, source);
					}
				}
			},

			//---------------------------------------------------------------------------
			// bd.exec.copyBorder()   (expand/reduceBorder用) 指定したデータをコピーする
			// bd.exec.innerBorder()  (expand/reduceBorder用) ひとつ内側に入ったborderのidを返す
			// bd.exec.outerBorder()  (expand/reduceBorder用) ひとつ外側に行ったborderのidを返す
			//---------------------------------------------------------------------------
			copyBorder: function(border1, border2) {
				border1.ques = border2.ques;
				border1.qans = border2.qans;
				if (this.board.borderAsLine) {
					border1.line = border2.line;
					border1.qsub = border2.qsub;
				}
			},
			innerBorder: function(id, key) {
				var border = this.board.border[id];
				key &= 0x0f;
				if (key === this.UP) {
					return border.relbd(0, 2);
				} else if (key === this.DN) {
					return border.relbd(0, -2);
				} else if (key === this.LT) {
					return border.relbd(2, 0);
				} else if (key === this.RT) {
					return border.relbd(-2, 0);
				}
				return null;
			},
			outerBorder: function(id, key) {
				var border = this.board.border[id];
				key &= 0x0f;
				if (key === this.UP) {
					return border.relbd(0, -2);
				} else if (key === this.DN) {
					return border.relbd(0, 2);
				} else if (key === this.LT) {
					return border.relbd(-2, 0);
				} else if (key === this.RT) {
					return border.relbd(2, 0);
				}
				return null;
			},

			//---------------------------------------------------------------------------
			// bd.exec.reduceRoomNumber()   盤面縮小時に数字つき部屋の処理を行う
			//---------------------------------------------------------------------------
			reduceRoomNumber: function(key, d) {
				var qnums = [];
				var bd = this.board;
				for (var c = 0; c < bd.cell.length; c++) {
					var cell = bd.cell[c];
					if (!!this.insex.cell[this.distObj(key, cell)]) {
						if (cell.qnum !== -1) {
							qnums.push({
								cell: cell,
								area: cell.room,
								pos: [cell.bx, cell.by],
								val: cell.qnum
							});
							cell.qnum = -1;
						}
						cell.room.clist.remove(cell);
					}
				}
				for (var i = 0; i < qnums.length; i++) {
					var data = qnums[i],
						area = data.area;
					var tcell = area.clist.getTopCell();
					if (tcell.isnull) {
						var opemgr = this.puzzle.opemgr;
						if (!opemgr.undoExec && !opemgr.redoExec) {
							opemgr.forceRecord = true;
							data.cell.addOpe("qnum", data.val, -1);
							opemgr.forceRecord = false;
						}
					} else {
						tcell.qnum = data.val;
					}
				}
			},

			//------------------------------------------------------------------------------
			// bd.exec.adjustBoardData()    回転・反転開始前に各セルの調節を行う(共通処理)
			// bd.exec.adjustBoardData2()   回転・反転終了後に各セルの調節を行う(共通処理)
			//------------------------------------------------------------------------------
			adjustBoardData: function(key, d) {},
			adjustBoardData2: function(key, d) {}
		}
	});
})();

// GraphBase.js

//---------------------------------------------------------------------------
// ★GraphBaseクラス 線や領域情報を管理する
//---------------------------------------------------------------------------
// GraphBaseクラスの定義
pzpr.classmgr.makeCommon({
	GraphBase: {
		enabled: false,
		relation: {},

		pointgroup: "",
		linkgroup: "",

		coloring: false,

		//--------------------------------------------------------------------------------
		// graph.removeFromArray()    Arrayからitemを取り除く
		//--------------------------------------------------------------------------------
		removeFromArray: function(array, item) {
			var idx = array.indexOf(item);
			if (idx >= 0) {
				Array.prototype.splice.call(array, idx, 1);
			}
		},

		//--------------------------------------------------------------------------------
		// graph.setComponentRefs()    objにcomponentの設定を行う (性能対策)
		//
		// graph.getObjNodeList()      objにあるnodeを取得する
		// graph.resetObjNodeList()    objからnodeをクリアする
		//--------------------------------------------------------------------------------
		setComponentRefs: function(obj, component) {},

		getObjNodeList: function(nodeobj) {
			return [];
		},
		resetObjNodeList: function(nodeobj) {},

		//--------------------------------------------------------------------------------
		// graph.isnodevalid()           そのセルにNodeが存在すべきかどうか返す
		// graph.isedgevalidbylinkobj()  そのborderにEdgeが存在すべきかどうか返す
		// graph.isedgevalidbynodeobj()  接続してはいけないかどうか判定する
		// graph.isedgeexistsbylinkobj() linkobjにedgeが存在するか判定する
		//--------------------------------------------------------------------------------
		isnodevalid: function(nodeobj) {
			return false;
		},
		isedgevalidbylinkobj: function(linkobj) {
			return true;
		},
		isedgevalidbynodeobj: function(nodeobj1, nodeobj2) {
			return true;
		},
		isedgeexistsbylinkobj: function(linkobj) {
			var sidenodes = this.getSideNodesBySeparator(linkobj);
			if (!sidenodes) {
				return false;
			}
			return sidenodes[0].nodes.indexOf(sidenodes[1]) >= 0;
		},

		//--------------------------------------------------------------------------------
		// graph.calcNodeCount()    そのセルにあるべきNode数を返す
		//--------------------------------------------------------------------------------
		calcNodeCount: function(cell) {
			return this.isnodevalid(cell) ? 1 : 0;
		},

		//---------------------------------------------------------------------------
		// graph.rebuild()  既存の情報からデータを再設定する
		// graph.rebuild2() 継承先に固有のデータを設定する
		//---------------------------------------------------------------------------
		rebuildmode: false,
		rebuild: function() {
			if (!this.enabled) {
				return;
			}

			this.rebuildmode = true;

			this.components = [];
			this.modifyNodes = [];

			this.rebuild2();

			this.searchGraph();

			this.rebuildmode = false;
		},
		rebuild2: function() {
			var nodeobjs = this.board[this.pointgroup],
				linkobjs = this.board[this.linkgroup];
			for (var c = 0; c < nodeobjs.length; c++) {
				this.setComponentRefs(nodeobjs[c], null);
				this.resetObjNodeList(nodeobjs[c]);
				if (this.isnodevalid(nodeobjs[c])) {
					this.createNode(nodeobjs[c]);
				}
			}
			if (this.linkgroup) {
				for (var id = 0; id < linkobjs.length; id++) {
					this.setComponentRefs(linkobjs[id], null);
					if (this.isedgevalidbylinkobj(linkobjs[id])) {
						this.addEdgeByLinkObj(linkobjs[id]);
					}
				}
			} else {
				for (var c = 0; c < nodeobjs.length; c++) {
					if (this.isnodevalid(nodeobjs[c])) {
						this.setEdgeByNodeObj(nodeobjs[c]);
					}
				}
			}
		},

		//---------------------------------------------------------------------------
		// graph.createComponent()  GraphComponentオブジェクトを作成する
		// graph.deleteComponent()  GraphComponentオブジェクトを削除してNodeをmodifyNodesに戻す
		//---------------------------------------------------------------------------
		createComponent: function() {
			var component = new this.klass.GraphComponent();
			this.components.push(component);
			return component;
		},
		deleteComponent: function(component) {
			for (var i = 0; i < component.nodes.length; i++) {
				this.modifyNodes.push(component.nodes[i]);
				this.setComponentRefs(component.nodes[i].obj, null);
				component.nodes[i].component = null;
			}
			this.removeFromArray(this.components, component);
		},

		//---------------------------------------------------------------------------
		// graph.createNode()    GraphNodeオブジェクトを生成する
		// graph.deleteNode()    GraphNodeオブジェクトをグラフから削除する (先にEdgeを0本にしてください)
		//---------------------------------------------------------------------------
		createNode: function(cell) {
			var node = new this.klass.GraphNode(cell);
			this.getObjNodeList(cell).push(node);
			this.modifyNodes.push(node);
			return node;
		},
		deleteNode: function(node) {
			var cell = node.obj;
			this.setComponentRefs(cell, null);
			this.removeFromArray(this.getObjNodeList(cell), node);

			// rebuildmode中にはこの関数は呼ばれません
			this.removeFromArray(this.modifyNodes, node);
			var component = node.component;
			if (component !== null) {
				this.removeFromArray(component.nodes, node);
				this.resetExtraData(cell);
				if (component.nodes.length === 0) {
					this.deleteComponent(component);
				}
			}
		},

		//---------------------------------------------------------------------------
		// linegraph.createNodeIfEmpty()  指定されたオブジェクトの場所にNodeを生成する
		// linegraph.deleteNodeIfEmpty()  指定されたオブジェクトの場所からNodeを除去する
		//---------------------------------------------------------------------------
		createNodeIfEmpty: function(nodeobj) {
			// 周囲のNode生成が必要かもしれないのでチェック＆create
			if (this.getObjNodeList(nodeobj).length === 0) {
				this.createNode(nodeobj);
			}
		},
		deleteNodeIfEmpty: function(nodeobj) {
			var nodes = this.getObjNodeList(nodeobj);

			// 周囲のNodeが消えるかもしれないのでチェック＆remove
			if (nodes[0].nodes.length === 0 && !this.isnodevalid(nodeobj)) {
				this.deleteNode(nodes[0]);
			}
		},

		//---------------------------------------------------------------------------
		// graph.addEdge()    Node間にEdgeを追加する
		// graph.removeEdge() Node間からEdgeを除外する
		//---------------------------------------------------------------------------
		addEdge: function(node1, node2) {
			if (node1.nodes.indexOf(node2) >= 0) {
				return;
			} // 多重辺にしないため
			node1.nodes.push(node2);
			node2.nodes.push(node1);

			if (!this.rebuildmode) {
				if (this.modifyNodes.indexOf(node1) < 0) {
					this.modifyNodes.push(node1);
				}
				if (this.modifyNodes.indexOf(node2) < 0) {
					this.modifyNodes.push(node2);
				}
			}
		},
		removeEdge: function(node1, node2) {
			if (node1.nodes.indexOf(node2) < 0) {
				return;
			} // 存在しない辺を削除しない
			this.removeFromArray(node1.nodes, node2);
			this.removeFromArray(node2.nodes, node1);

			if (!this.rebuildmode) {
				if (this.modifyNodes.indexOf(node1) < 0) {
					this.modifyNodes.push(node1);
				}
				if (this.modifyNodes.indexOf(node2) < 0) {
					this.modifyNodes.push(node2);
				}
			}
		},

		//---------------------------------------------------------------------------
		// graph.getSideObjByLinkObj()   borderから接続するNodeにあるobjを取得する
		// graph.getSideObjByNodeObj()   cellから接続するNodeにあるobjを取得する
		//---------------------------------------------------------------------------
		getSideObjByLinkObj: function(border) {
			return border.sideobj;
		},
		getSideObjByNodeObj: function(cell) {
			var list = cell.getdir4clist(),
				cells = [];
			for (var i = 0; i < list.length; i++) {
				var cell2 = list[i][0];
				if (this.isnodevalid(cell2)) {
					cells.push(cell2);
				}
			}
			return cells;
		},

		//---------------------------------------------------------------------------
		// graph.getSideNodesByLinkObj()   borderからEdgeに接続するNodeを取得する
		// graph.getSideNodesBySeparator() borderからEdgeに接続するNodeを取得する
		//---------------------------------------------------------------------------
		getSideNodesByLinkObj: function(border) {
			var sidenodes = [],
				sidenodeobj = this.getSideObjByLinkObj(border);
			for (var i = 0; i < sidenodeobj.length; i++) {
				var cell = sidenodeobj[i],
					nodes = this.getObjNodeList(cell),
					node = nodes[0];
				// 交差あり盤面の特殊処理 border.isvertはfalseの時タテヨコ線
				if (!!nodes[1] && border.isvert) {
					node = nodes[1];
				}
				sidenodes.push(node);
			}
			return sidenodes;
		},
		getSideNodesBySeparator: function(border) {
			var sidenodes = [],
				sidenodeobj = border.sideobj;
			for (var i = 0; i < sidenodeobj.length; i++) {
				var nodes = this.getObjNodeList(sidenodeobj[i]);
				if (!!nodes && !!nodes[0]) {
					sidenodes.push(nodes[0]);
				}
			}
			return sidenodes.length >= 2 ? sidenodes : null;
		},

		//---------------------------------------------------------------------------
		// graph.modifyInfo() 黒マスや線が引かれたり消された時に、lcnt変数や線の情報を生成しなおす
		//---------------------------------------------------------------------------
		modifyInfo: function(obj, type) {
			if (!this.enabled) {
				return;
			}
			var relation = this.relation[type];
			if (!relation) {
				return;
			}

			this.modifyNodes = [];

			switch (relation) {
				case "node":
					this.setEdgeByNodeObj(obj);
					break;
				case "link":
					this.setEdgeByLinkObj(obj);
					break;
				case "separator":
					this.setEdgeBySeparator(obj);
					break;
				default:
					this.modifyOtherInfo(obj, relation);
					break;
			}

			if (this.modifyNodes.length > 0) {
				this.remakeComponent();
			}
		},

		//---------------------------------------------------------------------------
		// graph.setEdgeBySeparator() 境界線が引かれたり消された時に、lcnt変数や線の情報を生成しなおす
		//---------------------------------------------------------------------------
		setEdgeBySeparator: function(border) {
			var isset = this.isedgevalidbylinkobj(border);
			if (isset === this.isedgeexistsbylinkobj(border)) {
				return;
			}

			if (!!this.incdecBorderCount) {
				this.incdecBorderCount(border, !isset);
			}

			if (isset) {
				this.addEdgeBySeparator(border);
			} else {
				this.removeEdgeBySeparator(border);
			}
		},

		//---------------------------------------------------------------------------
		// graph.addEdgeBySeparator()    指定されたオブジェクトの場所にEdgeを生成する
		// graph.removeEdgeBySeparator() 指定されたオブジェクトの場所からEdgeを除去する
		//---------------------------------------------------------------------------
		addEdgeBySeparator: function(border) {
			// 境界線を消した時の処理
			var sidenodes = this.getSideNodesBySeparator(border);
			if (!sidenodes) {
				return;
			}
			this.addEdge(sidenodes[0], sidenodes[1]);
		},
		removeEdgeBySeparator: function(border) {
			// 境界線を引いた時の処理
			var sidenodes = this.getSideNodesBySeparator(border);
			if (!sidenodes) {
				return;
			}
			this.removeEdge(sidenodes[0], sidenodes[1]);
			if (this.linkgroup) {
				this.setComponentRefs(border, null);
			}
		},

		//---------------------------------------------------------------------------
		// graph.attachNode()    指定されたオブジェクトを別Componentにくっつけて終了する
		//---------------------------------------------------------------------------
		attachNode: function(node, component) {
			node.component = component;
			component.nodes.push(node);
			this.setComponentInfo(component);
		},

		//---------------------------------------------------------------------------
		// graph.remakeComponent() modifyNodesに含まれるsubgraph成分からremakeしたりします
		// graph.getAffectedComponents() modifyNodesを含むcomponentsを取得します
		// graph.checkDividedComponent() 指定されたComponentがひとつながりかどうか探索します
		// graph.remakeMaximalComponents()指定されたcomponentsを探索し直します
		//---------------------------------------------------------------------------
		remakeComponent: function() {
			// subgraph中にcomponentが何種類あるか調べる
			var remakeComponents = this.getAffectedComponents();

			// Component数が1ならsubgraphが分断していないかどうかチェック
			if (remakeComponents.length === 1) {
				this.checkDividedComponent(remakeComponents[0]);
			}

			// Component数が0なら現在のmodifyNodesに新規IDを割り振り終了
			// Component数が2以上ならmodifyNodesに極大部分グラフを取り込んで再探索
			if (!!this.modifyNodes && this.modifyNodes.length > 0) {
				this.remakeMaximalComponents(remakeComponents);
			}
		},
		getAffectedComponents: function() {
			var remakeComponents = [];
			for (var i = 0; i < this.modifyNodes.length; i++) {
				var component = this.modifyNodes[i].component;
				if (component !== null) {
					if (!component.isremake) {
						remakeComponents.push(component);
						component.isremake = true;
					}
				}
			}
			return remakeComponents;
		},
		checkDividedComponent: function(component) {
			// 1つだけsubgraphを生成してみる
			for (var i = 0, len = this.modifyNodes.length; i < len; i++) {
				var node = this.modifyNodes[i];
				node.component = null;
				this.setComponentRefs(node.obj, null);
				this.removeFromArray(component.nodes, node);
			}
			var pseudoComponent = new this.klass.GraphComponent();
			this.searchSingle(this.modifyNodes[0], pseudoComponent);
			// subgraphがひとつながりならComponentに属していないNodeをそのComponentに割り当てる
			if (pseudoComponent.nodes.length === this.modifyNodes.length) {
				for (var i = 0; i < this.modifyNodes.length; i++) {
					var node = this.modifyNodes[i];
					node.component = component;
					component.nodes.push(node);
				}
				this.modifyNodes = [];
				this.setComponentInfo(component);
				component.isremake = false;
			}
			// subgraphがひとつながりでないなら再探索ルーチンを回す
		},
		remakeMaximalComponents: function(remakeComponents) {
			var longColor = this.coloring
				? this.getLongColor(remakeComponents)
				: null;
			for (var p = 0; p < remakeComponents.length; p++) {
				this.deleteComponent(remakeComponents[p]);
			}
			var newComponents = this.searchGraph();
			if (this.coloring) {
				this.setLongColor(newComponents, longColor);
			}
		},

		//---------------------------------------------------------------------------
		// graph.searchGraph()  ひとつながりの線にlineidを設定する
		// graph.searchSingle() 初期idを含む一つの領域内のareaidを指定されたものにする
		//---------------------------------------------------------------------------
		searchGraph: function() {
			var partslist = this.modifyNodes;
			var newcomponents = [];
			for (var i = 0, len = partslist.length; i < len; i++) {
				partslist[i].component = null;
			}
			for (var i = 0, len = partslist.length; i < len; i++) {
				if (partslist[i].component !== null) {
					continue;
				} // 既にidがついていたらスルー
				var component = this.createComponent();
				this.searchSingle(partslist[i], component);

				// defer setExtraData to avoid problems with half-built graph, compare #117
				this.setComponentInfoExtra(component, false);

				newcomponents.push(component);
			}
			this.modifyNodes = [];

			for (var i = 0; i < newcomponents.length; i++) {
				this.setExtraData(newcomponents[i]);
			}
			return newcomponents;
		},
		searchSingle: function(startparts, component) {
			var stack = [startparts];
			while (stack.length > 0) {
				var node = stack.pop();
				if (node.component !== null) {
					continue;
				}

				node.component = component;
				component.nodes.push(node);

				for (var i = 0; i < node.nodes.length; i++) {
					stack.push(node.nodes[i]);
				}
			}
		},

		//--------------------------------------------------------------------------------
		// graph.setComponentInfo() Componentオブジェクトのデータを設定する
		//--------------------------------------------------------------------------------
		setComponentInfo: function(component) {
			this.setComponentInfoExtra(component, true);
		},
		setComponentInfoExtra: function(component, setExtra) {
			var edges = 0;
			for (var i = 0; i < component.nodes.length; i++) {
				var node = component.nodes[i];
				edges += node.nodes.length;

				this.setComponentRefs(node.obj, component);
			}
			component.circuits = (edges >> 1) - component.nodes.length + 1;

			if (setExtra) {
				this.setExtraData(component);
			}
		},

		//--------------------------------------------------------------------------------
		// graph.resetExtraData() 指定されたオブジェクトの拡張データをリセットする
		// graph.setExtraData()   指定された領域の拡張データを設定する
		//--------------------------------------------------------------------------------
		resetExtraData: function(nodeobj) {},
		setExtraData: function(component) {},

		//--------------------------------------------------------------------------------
		// graph.getLargeComponent()
		// graph.getLongColor() ブロックを設定した時、ブロックにつける色を取得する
		// graph.setLongColor() ブロックに色をつけなおす
		// graph.repaintNodes() ブロックを再描画する
		//--------------------------------------------------------------------------------
		getLargeComponent: function(components) {
			if (components.length === 0) {
				return null;
			}
			var largeComponent = components[0];
			var largeTrial = largeComponent.isTrial();
			for (var i = 1; i < components.length; i++) {
				var comp = components[i],
					trial = comp.isTrial();
				if (trial === largeTrial) {
					if (largeComponent.nodes.length < comp.nodes.length) {
						largeComponent = comp;
						largeTrial = trial;
					}
				} else if (!trial) {
					largeComponent = comp;
					largeTrial = trial;
				}
			}
			return largeComponent;
		},
		getLongColor: function(components) {
			var largeComponent = this.getLargeComponent(components);
			return !!largeComponent ? largeComponent.color : null;
		},
		setLongColor: function(components, longColor) {
			if (components.length === 0 || !longColor) {
				return;
			}
			var puzzle = this.puzzle;

			// できた線の中でもっとも長いものを取得する
			var largeComponent = this.getLargeComponent(components);
			if (!!largeComponent) {
				largeComponent.color = longColor;
			}

			if (
				this.coloring &&
				(puzzle.execConfig("irowake") || puzzle.execConfig("irowakeblk"))
			) {
				this.repaintNodes(components);
			}
		},
		repaintNodes: function(components) {},

		//---------------------------------------------------------------------------
		// graph.newIrowake()  線の情報が再構築された際、線に色をつける
		//---------------------------------------------------------------------------
		newIrowake: function() {
			var paths = this.components,
				npaths = paths.length;

			var thetaStartDeg = Math.random() * 360,
				spacingDeg = 360 / npaths;

			var lFloor = 60,
				lLevels = 3,
				maxL = lFloor + this.puzzle.painter.maxYdeg * (100 - lFloor),
				minL = lFloor + this.puzzle.painter.minYdeg * (100 - lFloor),
				maxabRadius = 127,
				minabRadius = 75;

			for (var i = 0; i < npaths; i++) {
				var currentThetaDeg = (thetaStartDeg + i * spacingDeg) % 360,
					LCoord = ((i % lLevels) * (maxL - minL)) / (lLevels - 1) + minL,
					abRadius = Math.random() * (maxabRadius - minabRadius) + minabRadius,
					aCoord = Math.sin((currentThetaDeg * Math.PI) / 180) * abRadius,
					bCoord = Math.cos((currentThetaDeg * Math.PI) / 180) * abRadius;

				paths[i].color = this.puzzle.painter.labToRgbStr(
					LCoord,
					aCoord,
					bCoord
				);
			}

			for (var i = npaths - 1; i > 0; i--) {
				var j = Math.floor(Math.random() * (i + 1));
				var temp = paths[i].color;
				paths[i].color = paths[j].color;
				paths[j].color = temp;
			}
		}
	},
	GraphComponent: {
		initialize: function() {
			this.nodes = [];
			this.color = "";
			this.circuits = -1;
		},

		//---------------------------------------------------------------------------
		// component.getLinkObjByNodes()  node間のオブジェクトを取得する
		//---------------------------------------------------------------------------
		getLinkObjByNodes: function(node1, node2) {
			var bx1 = node1.obj.bx,
				by1 = node1.obj.by,
				bx2 = node2.obj.bx,
				by2 = node2.obj.by;
			if (bx1 > bx2 || (bx1 === bx2 && by1 > by2)) {
				return null;
			}
			return this.board.getobj((bx1 + bx2) >> 1, (by1 + by2) >> 1);
		},

		//---------------------------------------------------------------------------
		// component.getnodeobjs()  nodeのオブジェクトリストを取得する
		// component.getedgeobjs()  edgeのオブジェクトリストを取得する
		//---------------------------------------------------------------------------
		getnodeobjs: function() {
			var objs = new (this.board.getGroup(
				this.nodes[0].obj.group
			).constructor)();
			for (var i = 0; i < this.nodes.length; i++) {
				objs.add(this.nodes[i].obj);
			}
			return objs;
		},
		getedgeobjs: function() {
			var objs = [];
			for (var i = 0; i < this.nodes.length; i++) {
				var node = this.nodes[i];
				for (var n = 0; n < node.nodes.length; n++) {
					var obj = this.getLinkObjByNodes(node, node.nodes[n]);
					if (!!obj) {
						objs.push(obj);
					}
				}
			}
			return objs;
		},

		//---------------------------------------------------------------------------
		// component.checkAutoCmp()  autocmp設定有効時に条件を満たしているかチェックして背景を描画する
		//---------------------------------------------------------------------------
		checkAutoCmp: function() {
			var iscmp = !!this.clist.checkCmp ? this.clist.checkCmp() : false;
			if (this.cmp !== iscmp) {
				this.cmp = iscmp;
				if (this.puzzle.execConfig("autocmp")) {
					this.clist.draw();
				}
			}
		},

		//---------------------------------------------------------------------------
		// component.isTrial()  check whether this component is entirely made up of trial edges (irowake)
		//---------------------------------------------------------------------------
		isTrial: function() {
			var edges = this.getedgeobjs();
			for (var i = 0; i < edges.length; i++) {
				if (!edges[i].trial) {
					return false;
				}
			}
			return true;
		},

		//---------------------------------------------------------------------------
		// component.setedgeerr()   edgeにerror値を設定する
		// component.setedgeinfo()  edgeにqinfo値を設定する
		//---------------------------------------------------------------------------
		setedgeerr: function(val) {
			var objs = this.getedgeobjs();
			for (var i = 0; i < objs.length; i++) {
				objs[i].seterr(val);
			}
		},
		setedgeinfo: function(val) {
			var objs = this.getedgeobjs();
			for (var i = 0; i < objs.length; i++) {
				objs[i].setinfo(val);
			}
		}
	},
	GraphNode: {
		initialize: function(obj) {
			this.obj = obj;
			this.nodes = []; // Array of Linked GraphNode
			this.component = null;
		}
	}
});

// LineManager.js

//---------------------------------------------------------------------------
// ★LineGraphクラス 主に線や色分けの情報を管理する
//---------------------------------------------------------------------------
pzpr.classmgr.makeCommon({
	"LineGraph:GraphBase": {
		initialize: function() {
			if (this.moveline) {
				this.relation["cell.qnum"] = "move";
			}
		},

		enabled: false,
		relation: { "border.line": "link" },

		pointgroup: "cell",
		linkgroup: "border",
		countprop: "lcnt",

		isLineCross: false, // 線が交差するパズル

		makeClist: false, // 線が存在するclistを生成する
		moveline: false, // 丸数字などを動かすパズル

		coloring: true,

		//--------------------------------------------------------------------------------
		// linegraph.setComponentRefs()    objにcomponentの設定を行う (性能対策)
		// linegraph.isedgeexistsbylinkobj() linkobjにedgeが存在するか判定する
		//
		// linegraph.getObjNodeList()      objにあるnodeを取得する
		// linegraph.resetObjNodeList()    objからnodeをクリアする
		//--------------------------------------------------------------------------------
		setComponentRefs: function(obj, component) {
			obj.path = component;
		},
		isedgeexistsbylinkobj: function(linkobj) {
			return linkobj.path !== null;
		},

		getObjNodeList: function(nodeobj) {
			return nodeobj.pathnodes;
		},
		resetObjNodeList: function(nodeobj) {
			nodeobj.pathnodes = [];
			if (this.moveline) {
				this.resetExtraData(nodeobj);
			}
		},

		//--------------------------------------------------------------------------------
		// linegraph.isnodevalid()           そのセルにNodeが存在すべきかどうか返す
		// linegraph.isedgevalidbylinkobj()  そのborderにEdgeが存在すべきかどうか返す
		// linegraph.iscrossing()            そのセルで交差するかどうか返す
		//--------------------------------------------------------------------------------
		isnodevalid: function(cell) {
			return cell[this.countprop] > 0 || (this.moveline && cell.isNum());
		},
		isedgevalidbylinkobj: function(border) {
			return border.isLine();
		},
		iscrossing: function(cell) {
			return this.isLineCross;
		},

		//---------------------------------------------------------------------------
		// linegraph.rebuild()  既存の情報からデータを再設定する
		// linegraph.rebuild2() 継承先に固有のデータを設定する
		//---------------------------------------------------------------------------
		rebuild: function() {
			if (this.board.borderAsLine) {
				this.pointgroup = "cross";
			}
			pzpr.common.GraphBase.prototype.rebuild.call(this);
		},
		rebuild2: function() {
			if (!!this.incdecLineCount) {
				this.resetLineCount();
			}
			pzpr.common.GraphBase.prototype.rebuild2.call(this);
		},

		//---------------------------------------------------------------------------
		// linegraph.resetLineCount()  初期化時に、lcnt情報を初期化する
		// linegraph.incdecLineCount() 線が引かれたり消された時に、lcnt変数を生成し直す
		//---------------------------------------------------------------------------
		resetLineCount: function() {
			var cells = this.board[this.pointgroup],
				borders = this.board[this.linkgroup];
			this.ltotal = [cells.length];
			for (var c = 0; c < cells.length; c++) {
				cells[c][this.countprop] = 0;
			}
			for (var id = 0; id < borders.length; id++) {
				if (this.isedgevalidbylinkobj(borders[id])) {
					this.incdecLineCount(borders[id], true);
				}
			}
		},
		incdecLineCount: function(border, isset) {
			if (border.group !== this.linkgroup) {
				return;
			}
			for (var i = 0; i < 2; i++) {
				var cell = border.sideobj[i];
				if (!cell.isnull) {
					this.ltotal[cell[this.countprop]]--;
					if (isset) {
						cell[this.countprop]++;
					} else {
						cell[this.countprop]--;
					}
					this.ltotal[cell[this.countprop]] =
						(this.ltotal[cell[this.countprop]] || 0) + 1;
				}
			}
		},

		//---------------------------------------------------------------------------
		// linegraph.setEdgeByLinkObj() 線が引かれたり消された時に、lcnt変数や線の情報を生成しなおす
		//---------------------------------------------------------------------------
		setEdgeByLinkObj: function(linkobj) {
			var isset = this.isedgevalidbylinkobj(linkobj);
			if (isset === this.isedgeexistsbylinkobj(linkobj)) {
				return;
			}

			if (!!this.incdecLineCount) {
				this.incdecLineCount(linkobj, isset);
			}

			if (isset) {
				this.addEdgeByLinkObj(linkobj);
			} else {
				this.removeEdgeByLinkObj(linkobj);
			}
		},

		//---------------------------------------------------------------------------
		// graph.addEdgeByLinkObj()    指定されたオブジェクトの場所にEdgeを生成する
		// graph.removeEdgeByLinkObj() 指定されたオブジェクトの場所からEdgeを除去する
		//---------------------------------------------------------------------------
		addEdgeByLinkObj: function(linkobj) {
			// 線(など)を引いた時の処理
			var enattach = this.modifyNodes.length === 0;
			var sidenodeobj = this.getSideObjByLinkObj(linkobj);

			// 周囲のNodeをグラフに追加するかどうか確認する
			this.createNodeIfEmpty(sidenodeobj[0]);
			this.createNodeIfEmpty(sidenodeobj[1]);

			// linkするNodeを取得する
			var sidenodes = this.getSideNodesByLinkObj(linkobj);

			// 周囲のNodeとlink
			this.addEdge(sidenodes[0], sidenodes[1]);

			// 周囲のComponentにくっついただけの場合は情報を更新して終了
			if (this.rebuildmode || !enattach) {
				return;
			}
			var attachnodes = null,
				node1 = sidenodes[0],
				node2 = sidenodes[1];
			if (
				node1.obj[this.countprop] === 1 &&
				node1.component === null &&
				node2.component !== null
			) {
				attachnodes = [sidenodes[0], sidenodes[1]];
			} else if (
				node2.obj[this.countprop] === 1 &&
				node2.component === null &&
				node1.component !== null
			) {
				attachnodes = [sidenodes[1], sidenodes[0]];
			}
			if (!!attachnodes) {
				this.attachNode(attachnodes[0], attachnodes[1].component);
				this.modifyNodes = [];
			}
		},
		removeEdgeByLinkObj: function(linkobj) {
			// 線(など)を消した時の処理
			// unlinkするNodeを取得する
			var endetach = this.modifyNodes.length === 0;
			var sidenodes = this.getSideNodesByLinkObj(linkobj);

			// 周囲のNodeとunlink
			this.removeEdge(sidenodes[0], sidenodes[1]);

			// 周囲のNodeをグラフから取り除くかどうか確認する
			this.deleteNodeIfEmpty(sidenodes[0].obj);
			this.deleteNodeIfEmpty(sidenodes[1].obj);

			this.setComponentRefs(linkobj, null);

			// 周囲のComponent末端から切り離されただけの場合は情報を更新して終了
			if (!endetach) {
				return;
			}
			var detachnodes = null,
				node1 = sidenodes[0],
				node2 = sidenodes[1];
			var lcnt1 = node1.obj[this.countprop],
				lcnt2 = node2.obj[this.countprop];
			if (
				lcnt1 === 0 &&
				(lcnt2 === 1 || (!this.isLineCross && lcnt2 > 1)) &&
				node2.component !== null
			) {
				detachnodes = [sidenodes[0], sidenodes[1]];
			} else if (
				lcnt2 === 0 &&
				(lcnt1 === 1 || (!this.isLineCross && lcnt1 > 1)) &&
				node1.component !== null
			) {
				detachnodes = [sidenodes[1], sidenodes[0]];
			}
			if (!!detachnodes) {
				this.setComponentInfo(detachnodes[1].component);
				this.modifyNodes = [];
			}
		},

		//---------------------------------------------------------------------------
		// linegraph.setOtherInformation() 移動系パズルで数字などが入力された時に線の情報を生成しなおす
		//---------------------------------------------------------------------------
		modifyOtherInfo: function(cell, relation) {
			var haspath = !!cell.path;
			if (haspath !== this.isnodevalid(cell)) {
				if (haspath) {
					this.deleteNodeIfEmpty(cell);
				} else {
					this.createNodeIfEmpty(cell);
				}
			} else {
				if (haspath) {
					this.setComponentInfo(cell.path);
				} else {
					this.resetExtraData(cell);
				}
			}
		},

		//---------------------------------------------------------------------------
		// linegraph.createNodeIfEmpty()  指定されたオブジェクトの場所にNodeを生成する
		// linegraph.deleteNodeIfEmpty()  指定されたオブジェクトの場所からNodeを除去する
		//---------------------------------------------------------------------------
		usesSecondNode: function(cell, other) {
			return cell.getvert(other, 2);
		},

		createNodeIfEmpty: function(cell) {
			var nodes = this.getObjNodeList(cell);

			// 周囲のNode生成が必要かもしれないのでチェック＆create
			if (nodes.length === 0) {
				this.createNode(cell);
			}
			// 交差あり盤面の処理
			else if (
				!nodes[1] &&
				nodes[0].nodes.length === 2 &&
				this.iscrossing(cell)
			) {
				// 2本->3本になる時はNodeを追加して分離します
				// 上下/左右の線が1本ずつだった場合は左右の線をnodes[1]に付加し直します
				var nbnodes = nodes[0].nodes;
				var isvert = [
					this.usesSecondNode(cell, nbnodes[0].obj),
					this.usesSecondNode(cell, nbnodes[1].obj)
				];
				if (isvert[0] !== isvert[1]) {
					// breaking up a corner; we create two new nodes to ensure
					// that the graph gets rebuilt correctly
					var vertnode = nbnodes[isvert[0] ? 0 : 1];
					var horiznode = nbnodes[isvert[0] ? 1 : 0];
					this.removeEdge(nodes[0], vertnode);
					this.removeEdge(nodes[0], horiznode);
					this.deleteNode(nodes[0]);
					this.createNode(cell);
					this.createNode(cell);
					this.addEdge(nodes[0], vertnode);
					this.addEdge(nodes[1], horiznode);
				}
				// 両方左右線の場合はnodes[0], nodes[1]を交換してnodes[0]に0本、nodes[1]に2本付加する
				else {
					this.createNode(cell);
					if (
						isvert[0] === isvert[1] &&
						isvert[0] === this.board.borderAsLine
					) {
						nodes.push(nodes.shift());
					}
				}
			}
		},
		deleteNodeIfEmpty: function(cell) {
			var nodes = this.getObjNodeList(cell);

			// 周囲のNodeが消えるかもしれないのでチェック＆remove
			if (
				nodes.length === 1 &&
				nodes[0].nodes.length === 0 &&
				!this.isnodevalid(cell)
			) {
				this.deleteNode(nodes[0]);
			}
			// 交差あり盤面の処理
			else if (
				!!nodes[1] &&
				nodes[0].nodes.length + nodes[1].nodes.length === 2 &&
				this.iscrossing(cell)
			) {
				// 3本->2本になってnodes[0], nodes[1]に1本ずつEdgeが存在する場合はnodes[0]に統合
				if (nodes[1].nodes.length === 1) {
					var lrnode = nodes[1].nodes[0];
					this.removeEdge(nodes[1], lrnode);
					this.addEdge(nodes[0], lrnode);
				}
				// 両方左右線の場合はnodes[0], nodes[1]を交換してnodes[0]に2本、nodes[1]に0本にする
				else if (nodes[1].nodes.length === 2) {
					nodes.push(nodes.shift());
				}

				// 不要になったNodeを削除
				this.deleteNode(nodes[1]);
			}
		},

		//--------------------------------------------------------------------------------
		// linegraph.resetExtraData() 指定されたオブジェクトの拡張データをリセットする
		// linegraph.setExtraData()   指定された領域の拡張データを設定する
		//--------------------------------------------------------------------------------
		resetExtraData: function(nodeobj) {
			if (this.moveline) {
				nodeobj.base = nodeobj.isNum() ? nodeobj : this.board.emptycell;
			}
		},
		setExtraData: function(component) {
			if (this.coloring && !component.color) {
				component.color = this.puzzle.painter.getNewLineColor();
			}

			var edgeobjs = component.getedgeobjs();
			for (var i = 0; i < edgeobjs.length; i++) {
				this.setComponentRefs(edgeobjs[i], component);
			}

			if (this.makeClist || this.moveline) {
				component.clist = new this.klass.CellList(component.getnodeobjs());
				if (this.moveline) {
					this.setMovedBase(component);
				}
			}
		},

		//--------------------------------------------------------------------------------
		// linegraph.repaintNodes() ブロックを再描画する
		//--------------------------------------------------------------------------------
		repaintNodes: function(components) {
			var blist_all = new this.klass.BorderList();
			for (var i = 0; i < components.length; i++) {
				blist_all.extend(components[i].getedgeobjs());
			}
			this.puzzle.painter.repaintLines(blist_all);
		},

		//--------------------------------------------------------------------------------
		// linemgr.setMovedBase()    指定された領域の移動情報を設定する
		//--------------------------------------------------------------------------------
		setMovedBase: function(component) {
			var emptycell = this.board.emptycell;
			component.departure = component.destination = emptycell;
			component.movevalid = false;

			var clist = component.clist;
			if (clist.length < 1) {
				return;
			}

			var hasQnum = false;
			for (var i = 0; i < clist.length; i++) {
				var cell = clist[i];
				cell.base = cell.isNum() ? cell : emptycell;
				if (cell.anum === -1 && cell.isNum()) {
					hasQnum = true;
				}
			}

			var before = null,
				after = null,
				point = 0;
			if (clist.length === 1) {
				before = after = clist[0];
				point = 2;
			} else {
				for (var i = 0; i < clist.length; i++) {
					var cell = clist[i];
					if (cell[this.countprop] === 1) {
						point++;
						if (cell.isNum() && (cell.anum === -1 || !hasQnum)) {
							/*
							 * Pick the before cell once. If a qnum and anum are both
							 * present, only go for the cell with the qnum.
							 */
							before = cell;
						} else {
							after = cell;
						}
					}
				}
			}
			if (before !== null && after !== null && point === 2) {
				before.base = emptycell;
				component.departure = after.base = before;
				component.destination = after;
				component.movevalid = true;
			}
		}
	}
});

// AreaManager.js

pzpr.classmgr.makeCommon({
	//--------------------------------------------------------------------------------
	// ★AreaGraphBaseクラス セルの部屋情報などを保持するクラス
	//   ※このクラスで管理しているroomsは左上からの順番に並ばないので
	//     回答チェックやURL出力前には一旦resetRoomNumber()等が必要です。
	//--------------------------------------------------------------------------------
	"AreaGraphBase:GraphBase": {
		pointgroup: "cell",
		countprop: "lcnt",

		isedgevalidbynodeobj: function(cell1, cell2) {
			return this.isedgevalidbylinkobj(
				this.board.getb((cell1.bx + cell2.bx) >> 1, (cell1.by + cell2.by) >> 1)
			);
		},

		//---------------------------------------------------------------------------
		// areagraph.setEdgeByNodeObj() 黒マスになったりした時にブロックの情報を生成しなおす
		//---------------------------------------------------------------------------
		setEdgeByNodeObj: function(nodeobj) {
			// 一度Edgeを取り外す
			if (this.getObjNodeList(nodeobj).length > 0) {
				this.removeEdgeByNodeObj(nodeobj);
			}

			// Edgeを付け直す
			if (this.calcNodeCount(nodeobj) > 0) {
				this.addEdgeByNodeObj(nodeobj);
			}
		},

		//---------------------------------------------------------------------------
		// areagraph.removeEdgeByNodeObj() 黒マスになったりした時にブロックの情報を消去する
		// areagraph.addEdgeByNodeObj()    黒マスになったりした時にブロックの情報を生成する
		//---------------------------------------------------------------------------
		removeEdgeByNodeObj: function(cell) {
			// Edgeの除去
			var sidenodeobj = this.getSideObjByNodeObj(cell);
			var node1 = this.getObjNodeList(cell)[0];
			var preedges = node1.nodes.length,
				component = node1.component,
				endetach = this.modifyNodes.length === 0;
			for (var i = 0; i < sidenodeobj.length; i++) {
				var node2 = this.getObjNodeList(sidenodeobj[i])[0];
				if (!!node1 && !!node2) {
					this.removeEdge(node1, node2);

					if (!!this.incdecBorderCount) {
						this.incdecBorderCount(
							this.board.getb(
								(node1.obj.bx + node2.obj.bx) >> 1,
								(node1.obj.by + node2.obj.by) >> 1
							),
							true
						);
					}
				}
			}

			// Nodeを一旦取り除く
			if (!!node1) {
				this.deleteNode(node1);
			}

			// 周囲のComponent末端から切り離されただけの場合は情報を更新して終了
			if (!this.rebuildmode && preedges === 1 && endetach) {
				this.setComponentInfo(component);
				this.modifyNodes = [];
			}
		},
		addEdgeByNodeObj: function(cell) {
			// Nodeを付加する
			for (var i = 0, len = this.calcNodeCount(cell); i < len; i++) {
				this.createNode(cell);
			}

			// Edgeの付加
			var sidenodeobj = this.getSideObjByNodeObj(cell);
			var node1 = this.getObjNodeList(cell)[0];
			var enattach = this.modifyNodes.length === 0;
			for (var i = 0; i < sidenodeobj.length; i++) {
				if (!this.isedgevalidbynodeobj(cell, sidenodeobj[i])) {
					continue;
				}
				var node2 = this.getObjNodeList(sidenodeobj[i])[0];
				if (!!node1 && !!node2) {
					this.addEdge(node1, node2);

					if (!!this.incdecBorderCount) {
						this.incdecBorderCount(
							this.board.getb(
								(node1.obj.bx + node2.obj.bx) >> 1,
								(node1.obj.by + node2.obj.by) >> 1
							),
							false
						);
					}
				}
			}

			// 周囲のComponentに1か所くっついただけの場合は情報を更新して終了
			if (!this.rebuildmode && node1.nodes.length === 1 && enattach) {
				this.attachNode(node1, node1.nodes[0].component);
				this.modifyNodes = [];
			}
		},

		//--------------------------------------------------------------------------------
		// areagraph.setExtraData()   指定された領域の拡張データを設定する
		//--------------------------------------------------------------------------------
		setExtraData: function(component) {
			if (component.nodes.length) {
				component.clist = new this.klass.CellList(component.getnodeobjs());
			} else {
				component.clist = new this.klass.CellList();
			}
		}
	},

	//--------------------------------------------------------------------------------
	// ☆AreaShadeGraphクラス  黒マス情報オブジェクトのクラス
	// ☆AreaUnshadeGraphクラス  白マス情報オブジェクトのクラス
	// ☆AreaNumberGraphクラス 数字情報オブジェクトのクラス
	//--------------------------------------------------------------------------------
	"AreaShadeGraph:AreaGraphBase": {
		relation: { "cell.qans": "node" },
		setComponentRefs: function(obj, component) {
			obj.sblk = component;
		},
		getObjNodeList: function(nodeobj) {
			return nodeobj.sblknodes;
		},
		resetObjNodeList: function(nodeobj) {
			nodeobj.sblknodes = [];
		},

		isnodevalid: function(cell) {
			return cell.isShade();
		},

		//--------------------------------------------------------------------------------
		// sblkmgr.setExtraData()   指定された領域の拡張データを設定する
		//--------------------------------------------------------------------------------
		setExtraData: function(component) {
			component.clist = new this.klass.CellList(component.getnodeobjs());
			if (this.coloring && !component.color) {
				component.color = this.puzzle.painter.getNewLineColor();
			}
		},

		//--------------------------------------------------------------------------------
		// sblkmgr.repaintNodes() ブロックを再描画する
		//--------------------------------------------------------------------------------
		repaintNodes: function(components) {
			var clist_all = new this.klass.CellList();
			for (var i = 0; i < components.length; i++) {
				clist_all.extend(components[i].getnodeobjs());
			}
			this.puzzle.painter.repaintBlocks(clist_all);
		}
	},
	"AreaShade8Graph:AreaShadeGraph": {
		setComponentRefs: function(obj, component) {
			obj.blk8 = component;
		},
		getObjNodeList: function(nodeobj) {
			return nodeobj.blk8nodes;
		},
		resetObjNodeList: function(nodeobj) {
			nodeobj.blk8nodes = [];
		},

		getSideObjByNodeObj: function(cell) {
			var list = cell.getdir8clist(),
				cells = [];
			for (var i = 0; i < list.length; i++) {
				var cell2 = list[i][0];
				if (this.isnodevalid(cell2)) {
					cells.push(cell2);
				}
			}
			return cells;
		}
	},

	"AreaUnshadeGraph:AreaGraphBase": {
		relation: { "cell.qans": "node" },
		getComponentRefs: function(obj) {
			return obj.ublk;
		},
		setComponentRefs: function(obj, component) {
			obj.ublk = component;
		},
		getObjNodeList: function(nodeobj) {
			return nodeobj.ublknodes;
		},
		resetObjNodeList: function(nodeobj) {
			nodeobj.ublknodes = [];
		},

		isnodevalid: function(cell) {
			return cell.isUnshade();
		}
	},

	"AreaNumberGraph:AreaGraphBase": {
		relation: { "cell.qnum": "node", "cell.anum": "node", "cell.qsub": "node" },
		setComponentRefs: function(obj, component) {
			obj.nblk = component;
		},
		getObjNodeList: function(nodeobj) {
			return nodeobj.nblknodes;
		},
		resetObjNodeList: function(nodeobj) {
			nodeobj.nblknodes = [];
		},

		isnodevalid: function(cell) {
			return cell.isNumberObj();
		}
	},

	//--------------------------------------------------------------------------------
	// ☆AreaRoomGraphクラス 部屋情報オブジェクトのクラス
	//--------------------------------------------------------------------------------
	"AreaRoomGraph:AreaGraphBase": {
		relation: {
			"cell.ques": "node",
			"border.ques": "separator",
			"border.qans": "separator"
		},

		hastop: false,

		getComponentRefs: function(obj) {
			return obj.room;
		}, // getSideAreaInfo用
		setComponentRefs: function(obj, component) {
			obj.room = component;
		},
		getObjNodeList: function(nodeobj) {
			return nodeobj.roomnodes;
		},
		resetObjNodeList: function(nodeobj) {
			nodeobj.roomnodes = [];
		},

		isnodevalid: function(cell) {
			return cell.ques !== 7;
		},
		isedgevalidbylinkobj: function(border) {
			return !border.isBorder();
		},

		//--------------------------------------------------------------------------------
		// roomgraph.rebuild2() 部屋情報の再設定を行う
		//--------------------------------------------------------------------------------
		rebuild2: function() {
			this.klass.AreaGraphBase.prototype.rebuild2.call(this);
			this.resetBorderCount();
		},

		//---------------------------------------------------------------------------
		// roomgraph.resetBorderCount()  初期化時に、lcnt情報を初期化する
		// roomgraph.incdecBorderCount() 線が引かれたり消された時に、lcnt変数を生成し直す
		//---------------------------------------------------------------------------
		resetBorderCount: function() {
			var bd = this.board,
				borders = bd.border;
			/* 外枠のカウントをあらかじめ足しておく */
			for (var c = 0; c < bd.cross.length; c++) {
				var cross = bd.cross[c],
					bx = cross.bx,
					by = cross.by;
				var ischassis =
					bd.hasborder === 1
						? bx === 0 || bx === bd.cols * 2 || by === 0 || by === bd.rows * 2
						: false;
				cross[this.countprop] = ischassis ? 2 : 0;
			}
			for (var id = 0; id < borders.length; id++) {
				if (!this.isedgevalidbylinkobj(borders[id])) {
					this.incdecBorderCount(borders[id], true);
				}
			}
		},
		incdecBorderCount: function(border, isset) {
			for (var i = 0; i < 2; i++) {
				var cross = border.sidecross[i];
				if (!cross.isnull) {
					if (isset) {
						cross[this.countprop]++;
					} else {
						cross[this.countprop]--;
					}
				}
			}
		},

		//---------------------------------------------------------------------------
		// roommgr.addEdgeBySeparator()    指定されたオブジェクトの場所にEdgeを生成する
		// roommgr.removeEdgeBySeparator() 指定されたオブジェクトの場所からEdgeを除去する
		//---------------------------------------------------------------------------
		addEdgeBySeparator: function(border) {
			// 境界線を消した時の処理
			var sidenodes = this.getSideNodesBySeparator(border);
			if (!sidenodes) {
				return;
			}
			this.addEdge(sidenodes[0], sidenodes[1]);
			if (this.hastop && sidenodes.length >= 2) {
				this.setTopOfRoom_combine(sidenodes[0].obj, sidenodes[1].obj);
			}
		},

		//--------------------------------------------------------------------------------
		// roommgr.setTopOfRoom_combine()  部屋が繋がったとき、部屋のTOPを設定する
		//--------------------------------------------------------------------------------
		setTopOfRoom_combine: function(cell1, cell2) {
			if (!cell1.room || !cell2.room || cell1.room === cell2.room) {
				return;
			}
			var merged, keep;
			var tcell1 = cell1.room.top;
			var tcell2 = cell2.room.top;
			if (
				tcell1.bx > tcell2.bx ||
				(tcell1.bx === tcell2.bx && tcell1.by > tcell2.by)
			) {
				merged = tcell1;
				keep = tcell2;
			} else {
				merged = tcell2;
				keep = tcell1;
			}

			// 消える部屋のほうの数字を消す
			if (merged.isNum()) {
				// 数字が消える部屋にしかない場合 -> 残るほうに移動させる
				if (keep.noNum()) {
					keep.setQnum(merged.qnum);
					keep.draw();
				}
				merged.setQnum(-1);
				merged.draw();
			}
		},

		//--------------------------------------------------------------------------------
		// roommgr.setExtraData()   指定された領域の拡張データを設定する
		//--------------------------------------------------------------------------------
		setExtraData: function(component) {
			var clist = (component.clist = new this.klass.CellList(
				component.getnodeobjs()
			));
			if (this.hastop) {
				component.top = clist.getTopCell();

				if (this.rebuildmode) {
					var val = -1,
						clist = clist,
						top = component.top;
					for (var i = 0, len = clist.length; i < len; i++) {
						var cell = clist[i];
						if (cell.room === component && cell.qnum !== -1) {
							if (val === -1) {
								val = cell.qnum;
							}
							if (top !== cell) {
								cell.qnum = -1;
							}
						}
					}
					if (val !== -1 && top.qnum === -1) {
						top.qnum = val;
					}
				}
			}
			if (this.puzzle.validConfig("autocmp")) {
				component.checkAutoCmp();
			}
		},

		//---------------------------------------------------------------------------
		// roommgr.getSideAreaInfo()  接しているが異なる領域部屋の情報を取得する
		//---------------------------------------------------------------------------
		getSideAreaInfo: function() {
			var sides = [],
				len = this.components.length,
				adjs = {},
				bd = this.board;
			for (var r = 0; r < this.components.length; r++) {
				this.components[r].id = r;
			}
			for (var id = 0; id < bd.border.length; id++) {
				var room1 = this.getComponentRefs(bd.border[id].sidecell[0]);
				var room2 = this.getComponentRefs(bd.border[id].sidecell[1]);
				if (room1 === room2 || !room1 || !room2) {
					continue;
				}

				var key =
					room1.id < room2.id
						? room1.id * len + room2.id
						: room2.id * len + room1.id;
				if (!!adjs[key]) {
					continue;
				}
				adjs[key] = true;

				sides.push([room1, room2]);
			}
			return sides;
		}
	}
});

// Graphic.js v3.4.1

(function() {
	var CENTER = 1,
		BOTTOMLEFT = 2,
		BOTTOMRIGHT = 3,
		TOPRIGHT = 4,
		TOPLEFT = 5,
		UP = 6,
		DN = 7,
		LT = 8,
		RT = 9;

	//---------------------------------------------------------------------------
	// ★Graphicクラス Canvasに描画する
	//---------------------------------------------------------------------------
	// パズル共通 Canvas/DOM制御部
	// Graphicクラスの定義
	pzpr.classmgr.makeCommon({
		//---------------------------------------------------------
		Graphic: {
			initialize: function() {
				this.gridcolor =
					this.gridcolor_list[this.gridcolor_type] || this.gridcolor;

				var pc = this;
				[
					["getQuesCellColor", this.fgcellcolor_func],
					["getBGCellColor", this.bgcellcolor_func],
					["getBorderColor", this.bordercolor_func],
					["getQuesNumberColor", this.numbercolor_func],
					["getCircleFillColor", this.circlefillcolor_func],
					["getCircleStrokeColor", this.circlestrokecolor_func]
				].forEach(function(item) {
					if (pc[item[0]] !== pzpr.common.Graphic.prototype[item[0]]) {
						return;
					} // パズル個別の関数が定義されている場合はそのまま使用
					pc[item[0]] = pc[item[0] + "_" + item[1]] || pc[item[0]];
				});

				this.resetRange();

				this.initFont();
			},

			context: null,
			subcontext: null,

			fgcellcolor_func: "ques", // getQuesCellColor()の種類
			bgcellcolor_func: "error1", // getBGCellColor()の種類
			bordercolor_func: "ques", // getBorderColor()の種類
			numbercolor_func: "mixed", // getQuesNumberColor()の種類

			circlefillcolor_func: "qnum", // getCircleFillColor()の種類
			circlestrokecolor_func: "qnum", // getCircleStrokeColor()の種類

			// 標準の色設定
			quescolor: "black",
			qanscolor: "rgb(0, 160, 0)",
			qcmpcolor: "silver",
			qcmpbgcolor: "rgb(224, 224, 255)",
			trialcolor: "rgb(160, 160, 160)",
			subcolor: "rgb(127, 127, 255)",
			subshadecolor: "rgb(220, 220, 255)",

			// 黒マスの色
			shadecolor: "black",
			errcolor1: "rgb(192, 0, 0)",
			errcolor2: "rgb(32, 32, 255)",
			fontShadecolor: "rgb(224, 224, 224)",

			// 白マス確定マスの背景色
			enablebcolor: false,
			bcolor: "rgb(160, 255, 160)",
			errbcolor1: "rgb(255, 160, 160)",
			errbcolor2: "rgb(64, 255, 64)",

			qsubcolor1: "rgb(160,255,160)",
			qsubcolor2: "rgb(255,255,127)",
			qsubcolor3: "rgb(192,192,192)", // 絵が出るパズルの背景入力

			icecolor: "rgb(192, 224, 255)",
			erricecolor: "rgb(224,  96, 160)",

			// セルの丸数字内部の背景色
			circlebasecolor: "white",

			// セルの○×の色(補助記号)
			mbcolor: "rgb(0, 160, 0)",

			// 線・×の色
			linecolor: "rgb(0, 160, 0)", // 色分けなしの場合
			errlinecolor: "rgb(255, 0, 0)",
			noerrcolor: "rgb(160, 160, 160)", // エラー表示時, エラーでない線/境界線の描画色
			linetrialcolor: "rgb(160, 160, 160)",

			movelinecolor: "silver",
			movetrialcolor: "rgb(255, 160, 0)",

			pekecolor: "rgb(0, 127, 0)",

			// 境界線と黒マスを分ける色(BoxBorder)
			bbcolor: "rgb(160, 160, 160)",

			// 入力ターゲットの色
			targetColorEdit: "rgb(255, 64,  64)",
			targetColorPlay: "rgb(64,  64, 255)",
			targetColorTrial: "rgb(255,  64, 255)",
			ttcolor: "rgb(127,255,127)", // ques=51の入力ターゲット(TargetTriangle)
			ttshadecolor: "rgb(0,127,0)",

			movecolor: "red",

			// 盤面のCellを分ける色
			gridcolor: "black",
			gridcolor_type: "",
			gridcolor_list: {
				// 色々なパズルで定義してた固定色
				DARK: "rgb( 48,  48,  48)" /* LITSでの指定 */,
				LIGHT: "rgb(127, 127, 127)" /* ほとんどはこの色を指定している */,
				DLIGHT: "rgb(160, 160, 160)" /* 領域分割系で使ってることが多い */,
				SLIGHT: "rgb(191, 191, 191)" /* 部屋＋線を引くパズル           */,
				THIN: "rgb(224, 224, 224)" /* 問題入力時のみGrid表示のパズル */
			},

			// 盤面(枠の中)の背景色
			bgcolor: "white",

			// その他サイズ指定
			textoption: null,
			fontsizeratio: 0.8, // Fontサイズのcellsizeとの比率
			fontwidth: [0.5, 0.4, 0.33], // 2文字以上のTextの横幅 (2文字〜の文字単位横幅を指定する)
			fontfamily: "",
			isSupportMaxWidth: true, // maxWidthサポートブラウザ
			crosssize: 0.4,
			circleratio: [0.4, 0.35],

			// 枠外の一辺のmargin(セル数換算)
			margin: 0.15,
			bankratio: 0.5,
			bankVerticalOffset: 0.5,

			// canvasの大きさを保持する
			canvasWidth: null,
			canvasHeight: null,

			// canvas内での盤面の左上座標
			x0: 0,
			y0: 0,
			basex0: 0,
			basey0: 0,

			// 描画単位(デフォルト値)
			cw: 36, // セルの横幅
			ch: 36, // セルの縦幅
			bw: 18, // セルの横幅/2
			bh: 18, // セルの縦幅/2

			devicePixelRatio: 1,
			gw: 1, // grid width
			lw: 1, // LineWidth 境界線・Lineの太さ
			lwmin: 3,
			lm: 1, // LineMargin
			lwratio: 10, // onresize_processでlwの値の算出に用いる
			addlw: 0, // エラー時に線の太さを広げる

			// getNewColorの設定
			lastHdeg: 0,
			lastYdeg: 0,
			minYdeg: 0.18,
			maxYdeg: 0.7,

			// その他の描画設定
			range: null, // 描画領域を保持するオブジェクト

			useBuffer: false, // Buffer描画を行うか
			outputImage: false, // 画像保存中
			showBank: true,

			// resize関数が呼ばれたが、初期化されていない等でresizeしていないことを示すフラグ
			pendingResize: false,

			// 初期化前、およびsuspend呼び出し中を示すフラグ
			suspended: true,
			suspendedAll: true,

			// Cellのqnumが-2のときに？を表示しないパズルごとの設定
			hideHatena: false,

			// 正解条件を満たしたオブジェクトを描画するかどうかの設定
			autocmp: "",

			// 色分け設定
			irowake: false,
			irowakeblk: false,

			//---------------------------------------------------------------------------
			// pc.initCanvas()       このオブジェクトで使用するキャンバスを設定する
			//---------------------------------------------------------------------------
			initCanvas: function() {
				var puzzle = this.puzzle;
				var g = (this.context = !!puzzle.canvas
					? puzzle.canvas.getContext("2d")
					: null);
				if (g.use.canvas) {
					this.subcontext = !!puzzle.subcanvas
						? puzzle.subcanvas.getContext("2d")
						: null;
					this.useBuffer = !!this.subcontext;
				}

				if (this.canvasWidth === null || this.canvasHeight === null) {
					var rect = pzpr.util.getRect(puzzle.canvas);
					this.resizeCanvas(rect.width, rect.height);
				}

				this.pendingResize = true;
				this.resize_canvas_main();
				puzzle.emit("canvasReady");

				this.unsuspend();
			},

			//---------------------------------------------------------------------------
			// pc.initFont()  数字を記入するためのフォントを設定する
			//---------------------------------------------------------------------------
			initFont: function() {
				var isgothic = this.puzzle.getConfig("font") === 1;
				if (this.puzzle.pzpr.env.OS.Android) {
					this.fontfamily = isgothic
						? "Helvetica, Verdana, Arial, "
						: '"Times New Roman", ';
				} else {
					this.fontfamily = "";
				}
				this.fontfamily += isgothic ? "sans-serif" : "serif";
			},

			//---------------------------------------------------------------------------
			// pc.resizeCanvas()    キャンバスのサイズを設定する
			//                      (指定なしの場合は、前のキャンバスのサイズを用いる)
			// pc.resizeCanvasByCellSize() セルのサイズを指定してキャンバスのサイズを変える
			//                             (指定なしの場合は、前のセルのサイズを用いる)
			//---------------------------------------------------------------------------
			cellexpandratio: 1.0,

			resizeCanvas: function(cwid, chgt) {
				var insuspend = this.suspended;
				this.suspendAll();

				this.canvasWidth = cwid || this.canvasWidth;
				this.canvasHeight = chgt || this.canvasHeight;

				this.pendingResize = true;
				if (!insuspend) {
					this.unsuspend();
				}
			},
			resizeCanvasByCellSize: function(cellsize, absolute) {
				var insuspend = this.suspended;
				this.suspendAll();

				if (cellsize) {
					this.cw = cellsize * (absolute ? 1 : this.cellexpandratio);
					this.ch = cellsize * (absolute ? 1 : this.cellexpandratio);
				}
				this.canvasWidth = this.cw * this.getCanvasCols();
				this.canvasHeight = this.ch * this.getCanvasRows();

				this.pendingResize = true;
				if (!insuspend) {
					this.unsuspend();
				}
			},

			//---------------------------------------------------------------------------
			// pc.resize_canvas_main() ウィンドウのLoad/Resize時の処理。
			//                         Canvas/表示するマス目の大きさを設定する。
			// pc.setParameter()       cw, ch等の変数を大きさに応じて再設定する
			// pc.setOffset()          盤面のサイズや大きさを再設定する
			// pc.setPagePos()         盤面のページ内座標を設定する
			// pc.clearObject()        contextのclearなどを呼び出す関数
			//---------------------------------------------------------------------------
			resize_canvas_main: function() {
				if (!this.pendingResize) {
					return;
				}
				this.pendingResize = false;

				// セルのサイズなどを取得・設定
				this.setParameter();

				// Canvasのサイズ、オフセット位置の変更
				this.setOffset();

				// Listener呼び出し
				this.puzzle.emit("resize");

				// contextのclear等を呼び出す
				this.clearObject();
			},

			setParameter: function() {
				var cwid = this.canvasWidth,
					chgt = this.canvasHeight;
				var cols = this.getCanvasCols(),
					rows = this.getCanvasRows();
				var cw = (cwid / cols) | 0,
					ch = (chgt / rows) | 0;

				this.devicePixelRatio = this.puzzle.pzpr.env.browser
					? window.devicePixelRatio || 1
					: 1;

				if (this.puzzle.getConfig("squarecell")) {
					this.cw = this.ch = Math.min(cw, ch);
				} else {
					this.cw = cw;
					this.ch = ch;
				}

				this.bw = this.cw / 2;
				this.bh = this.ch / 2;

				var gwmax = 1,
					gwratio = 40;
				var gw = Math.min(this.cw / gwratio, gwmax);
				var pxSize = 1 / this.devicePixelRatio;
				var gwdev = Math.max(1, Math.round(gw / pxSize));
				this.gw = gwdev * pxSize;

				var lw = Math.max(this.cw / this.lwratio, this.lwmin);
				var lwdev = Math.max(1, Math.round(lw / pxSize));
				this.lw = lwdev * pxSize;
				this.lm = this.lw / 2;
			},
			setOffset: function() {
				var g = this.context,
					g2 = this.subcontext;
				var cwid = this.canvasWidth,
					chgt = this.canvasHeight;

				// canvas要素のサイズを変更する
				g.changeSize(cwid | 0, chgt | 0);
				if (!!g2) {
					g2.changeSize(cwid | 0, chgt | 0);
				}

				// 盤面のセルID:0が描画される左上の位置の設定 (Canvas左上からのオフセット)
				var x0 =
					(this.x0 =
						(((cwid - this.cw * this.getBoardCols()) / 2 +
							this.cw * this.getOffsetCols()) |
							0) +
						0.5) + this.basex0;
				var y0 =
					(this.y0 =
						(((chgt - this.ch * this.getBoardRows()) / 2 +
							this.ch * this.getOffsetRows()) |
							0) +
						0.5) + this.basey0;

				// CanvasのOffset位置変更 (SVGの時、小数点以下の端数調整を行う)
				if (!g.use.canvas) {
					var rect = pzpr.util.getRect(g.canvas);
					g.translate(x0 - (rect.left % 1), y0 - (rect.top % 1));
				} else {
					g.translate(x0, y0);
					if (!!g2) {
						g2.translate(x0, y0);
					}
				}
			},
			clearObject: function() {
				this.context.clear();
			},

			//---------------------------------------------------------------------------
			// pc.getCanvasCols()  Canvasの横幅としてセル何個分が必要か返す
			// pc.getCanvasRows()  Canvasの縦幅としてセル何個分が必要か返す
			// pc.getBoardCols()   マージンを除いた盤面の横幅としてセル何個分が必要か返す
			// pc.getBoardRows()   マージンを除いた盤面の縦幅としてセル何個分が必要か返す
			// pc.getOffsetCols()  有効範囲が(0,0)-(C,R)からずれているパズルで、左右の中心位置を調整する
			// pc.getOffsetRows()  有効範囲が(0,0)-(C,R)からずれているパズルで、上下の中心位置を調整する
			//---------------------------------------------------------------------------
			getCanvasCols: function() {
				return this.getBoardCols() + 2 * this.margin;
			},
			getCanvasRows: function() {
				var rows = this.getBoardRows() + 2 * this.margin;
				if (this.board.bank && this.showBank) {
					rows += this.board.bank.height * this.bankratio + 1 / 16;
				}
				return rows;
			},

			getBoardCols: function() {
				var bd = this.board;
				return (bd.maxbx - bd.minbx) / 2;
			},
			getBoardRows: function() {
				var bd = this.board;
				return (bd.maxby - bd.minby) / 2;
			},

			getOffsetCols: function() {
				/* 右にずらしたい分プラス、左にずらしたい分マイナス */
				return (0 - this.board.minbx) / 2;
			},
			getOffsetRows: function() {
				/* 下にずらしたい分プラス、上にずらしたい分マイナス */
				var rows = (0 - this.board.minby) / 2;
				if (this.board.bank && this.showBank) {
					rows -= (this.board.bank.height * this.bankratio) / 2;
				}
				return rows;
			},

			//---------------------------------------------------------------------------
			// pc.suspend()     描画処理を一時停止する
			// pc.suspendAll()  全盤面の描画処理を一時停止する
			// pc.unsuspend()   描画処理を再開する
			//---------------------------------------------------------------------------
			suspend: function() {
				this.suspended = true;
			},
			suspendAll: function() {
				this.suspendedAll = true;
				this.suspended = true;
			},
			unsuspend: function() {
				if (!this.context) {
					return;
				}

				this.resize_canvas_main();

				if (this.suspendedAll) {
					var bd = this.board;
					this.range.bank = true;
					this.setRange(bd.minbx - 2, bd.minby - 2, bd.maxbx + 2, bd.maxby + 2);
					this.suspendedAll = false;
				}
				if (this.suspended) {
					this.suspended = false;
					this.prepaint();
				}
			},

			//---------------------------------------------------------------------------
			// pc.prepaint()    paint関数を呼び出す
			// pc.paint()       座標(x1,y1)-(x2,y2)を再描画する。各パズルのファイルでオーバーライドされる。
			//
			// pc.setRange()       rangeオブジェクトを設定する
			// pc.setRangeObject() 描画対象となるオブジェクトを取得する
			// pc.resetRange()     rangeオブジェクトを初期化する
			//---------------------------------------------------------------------------
			prepaint: function() {
				var hasIndicator =
					this.pid === "starbattle" || this.pid === "isowatari";
				if (this.suspended || !this.context) {
					return;
				}

				this.isSupportMaxWidth =
					(this.context.use.svg && pzpr.env.API.svgTextLength) ||
					(this.context.use.canvas && pzpr.env.API.maxWidth);

				var bd = this.board,
					bm = 2 * this.margin,
					x1 = this.range.x1,
					y1 = this.range.y1,
					x2 = this.range.x2,
					y2 = this.range.y2,
					bank =
						this.showBank &&
						(this.range.bank || this.range.bankPieces.length > 0);
				if (
					!bank &&
					(x1 > x2 ||
						y1 > y2 ||
						x1 >= bd.maxbx + bm ||
						y1 >= bd.maxby + bm ||
						x2 <= bd.minbx - bm ||
						y2 <= bd.minby - (bm + (hasIndicator ? 2 : 0)))
				) {
					/* 入力が範囲外ならば何もしない */
				} else if (!this.useBuffer) {
					this.setRangeObject(x1, y1, x2, y2);
					this.flushCanvas();
					this.paintMain();
				} else {
					var g = this.context,
						g2 = this.subcontext;
					this.context = g2;
					this.setRangeObject(x1 - 1, y1 - 1, x2 + 1, y2 + 1);
					this.flushCanvas();
					this.paintMain();
					this.context = g;
					this.copyBufferData(g, g2, x1, y1, x2, y2);
				}

				this.resetRange();
			},
			paintMain: function() {
				this.paint();
				this.paintPost();
			},
			paint: function() {}, //オーバーライド用
			paintPost: function() {},

			setRange: function(x1, y1, x2, y2) {
				if (this.range.x1 > x1) {
					this.range.x1 = x1;
				}
				if (this.range.y1 > y1) {
					this.range.y1 = y1;
				}
				if (this.range.x2 < x2) {
					this.range.x2 = x2;
				}
				if (this.range.y2 < y2) {
					this.range.y2 = y2;
				}
			},
			setRangeObject: function(x1, y1, x2, y2) {
				var bd = this.board;
				this.range.cells = bd.cellinside(x1, y1, x2, y2);
				this.range.crosses = bd.crossinside(x1, y1, x2, y2);
				this.range.borders = bd.borderinside(x1, y1, x2, y2);
				this.range.excells = bd.excellinside(x1, y1, x2, y2);
			},
			resetRange: function() {
				var puzzle = this.puzzle,
					bd = puzzle.board,
					classes = puzzle.klass;
				this.range = {
					x1: bd.maxbx + 1,
					y1: bd.maxby + 1,
					x2: bd.minbx - 1,
					y2: bd.minby - 1,
					cells: new classes.CellList(),
					crosses: new classes.CrossList(),
					borders: new classes.BorderList(),
					excells: new classes.ExCellList(),
					bank: false,
					bankPieces: []
				};
			},

			//---------------------------------------------------------------------------
			// pc.copyBufferData()    Bufferに描画したデータを盤面へコピーする
			//---------------------------------------------------------------------------
			copyBufferData: function(g, g2, x1, y1, x2, y2) {
				// source側はtaranslateのぶん足されていないので、加算しておきます
				var sx1 = this.x0 + x1 * this.bw - 1,
					sy1 = this.y0 + y1 * this.bh - 1,
					sx2 = this.x0 + x2 * this.bw + 2,
					sy2 = this.y0 + y2 * this.bh + 2;
				if (sx1 < 0) {
					sx1 = 0;
				}
				if (sx2 > g2.child.width) {
					sx2 = g2.child.width;
				}
				if (sy1 < 0) {
					sy1 = 0;
				}
				if (sy2 > g2.child.height) {
					sy2 = g2.child.height;
				}
				g.drawImage(
					g2.child,
					sx1,
					sy1,
					sx2 - sx1,
					sy2 - sy1,
					sx1 - this.x0,
					sy1 - this.y0,
					sx2 - sx1,
					sy2 - sy1
				);
			},

			//---------------------------------------------------------------------------
			// pc.paintRange()  座標(x1,y1)-(x2,y2)を再描画する
			// pc.paintAll()    全体を再描画する
			//---------------------------------------------------------------------------
			paintRange: function(x1, y1, x2, y2) {
				this.setRange(x1, y1, x2, y2);
				this.prepaint();
			},
			paintAll: function() {
				if (this.suspended) {
					this.suspendedAll = true;
				}
				var bd = this.board;
				this.range.bank = true;
				this.paintRange(bd.minbx - 2, bd.minby - 2, bd.maxbx + 2, bd.maxby + 2);
			},

			//---------------------------------------------------------------------------
			// pc.getNewLineColor() 新しい色を返す
			//---------------------------------------------------------------------------
			labToRgbStr: function(LCoord, aCoord, bCoord) {
				var delta = 6 / 29,
					Xn = 95.0489,
					Yn = 100,
					Zn = 108.884;

				var fInv = function(value) {
					if (value > delta) {
						return Math.pow(value, 3);
					} else {
						return 3 * Math.pow(delta, 2) * (value - 4 / 29);
					}
				};

				var Ladj = (LCoord + 16) / 116,
					X = Xn * fInv(Ladj + aCoord / 500),
					Y = Yn * fInv(Ladj),
					Z = Zn * fInv(Ladj - bCoord / 500);

				var r = 2.041369 * X - 0.5649464 * Y - 0.3446944 * Z,
					g = -0.969266 * X + 1.8760108 * Y + 0.041556 * Z,
					b = 0.0134474 * X - 0.1183897 * Y + 1.0154096 * Z;

				r = Math.max(Math.min(r * 2.55, 255), 0) | 0;
				g = Math.max(Math.min(g * 2.55, 255), 0) | 0;
				b = Math.max(Math.min(b * 2.55, 255), 0) | 0;
				return "rgb(" + r + "," + g + "," + b + ")";
			},
			getNewLineColor: function() {
				var lFloor = 60,
					maxL = lFloor + this.puzzle.painter.maxYdeg * (100 - lFloor),
					minL = lFloor + this.puzzle.painter.minYdeg * (100 - lFloor),
					LCoord = Math.random() * (maxL - minL) + minL;

				if (typeof this.currentColorTheta === "undefined") {
					this.currentColorTheta = Math.random() * 360;
				} else {
					this.currentColorTheta += 137.28;
				}

				var maxabRadius = 127,
					minabRadius = 75,
					abRadius = Math.random() * (maxabRadius - minabRadius) + minabRadius,
					aCoord =
						Math.sin((this.currentColorTheta * Math.PI) / 180) * abRadius,
					bCoord =
						Math.cos((this.currentColorTheta * Math.PI) / 180) * abRadius;

				return this.labToRgbStr(LCoord, aCoord, bCoord);
			},
			//---------------------------------------------------------------------------
			// pc.repaintBlocks()  色分け時にブロックを再描画する
			// pc.repaintLines()   ひとつながりの線を再描画する
			// pc.repaintParts()   repaintLine()関数で、さらに上から描画しなおしたい処理を書く
			//                     canvas描画時のみ呼ばれます(他は描画しなおす必要なし)
			//---------------------------------------------------------------------------
			repaintBlocks: function(clist) {
				clist.draw();
			},
			repaintLines: function(blist) {
				this.range.borders = blist;
				this.drawLines();

				if (this.context.use.canvas) {
					this.repaintParts(blist);
				}
			},
			repaintParts: function(blist) {}, // オーバーライド用

			//---------------------------------------------------------------------------
			// pc.flushCanvas()    指定された領域を白で塗りつぶす
			//---------------------------------------------------------------------------
			flushCanvas: function() {
				var g = this.vinc("background", "crispEdges", true);
				var bw = this.bw,
					bh = this.bh,
					fm = this.margin > 0.15 ? this.margin : 0;
				var bd = this.board;
				var minbx = bd.minbx - fm;
				var minby = bd.minby - fm;
				var bwidth = bd.maxbx + fm - minbx;
				var bheight = bd.maxby + fm - minby;

				g.vid = "BG";
				g.fillStyle = this.bgcolor;
				// TODO test if piecebank is flushed
				g.fillRect(
					minbx * bw - 0.5,
					minby * bh - 0.5,
					bwidth * bw + 1,
					bheight * bh + 1
				);
			},

			//---------------------------------------------------------------------------
			// pc.vinc()  レイヤーを返す
			//---------------------------------------------------------------------------
			vinc: function(layerid, rendering, freeze) {
				var g = this.context,
					option = { freeze: !!freeze };
				option.rendering = rendering;
				g.setLayer(layerid, option);
				return g;
			},

			//---------------------------------------------------------------------------
			// pc.disptext()  数字を記入するための共通関数
			//---------------------------------------------------------------------------
			CENTER: CENTER,
			BOTTOMLEFT: BOTTOMLEFT,
			BOTTOMRIGHT: BOTTOMRIGHT,
			TOPRIGHT: TOPRIGHT,
			TOPLEFT: TOPLEFT,
			UP: UP,
			DN: DN,
			RT: RT,
			LT: LT,

			disptext: function(text, px, py, option) {
				option = option || {};
				var g = this.context;

				var realsize = (this.cw * (option.ratio || this.fontsizeratio)) | 0;
				var maxLength = void 0;
				var widtharray = option.width || this.fontwidth;
				var widthratiopos =
					text.length <= widtharray.length + 1
						? text.length - 2
						: widtharray.length - 1;
				var widthratio =
					widthratiopos >= 0 ? widtharray[widthratiopos] * text.length : null;
				if (this.isSupportMaxWidth) {
					// maxLengthサポートブラウザ
					maxLength = !!widthratio ? realsize * widthratio : void 0;
				} else {
					// maxLength非サポートブラウザ
					if (!!widthratio) {
						realsize = ((realsize * widthratio * 1.5) / text.length) | 0;
					}
				}

				var style = option.style ? option.style + " " : "";
				g.font = style + realsize + "px " + this.fontfamily;

				var hoffset = this.bw * (option.hoffset || 0.9);
				var voffset = this.bh * (option.voffset || 0.82);
				var position = option.position || CENTER;
				switch (position) {
					case CENTER:
					case UP:
					case DN:
						g.textAlign = "center";
						break;
					case BOTTOMLEFT:
					case TOPLEFT:
					case LT:
						g.textAlign = "left";
						px -= hoffset;
						break;
					case BOTTOMRIGHT:
					case TOPRIGHT:
					case RT:
						g.textAlign = "right";
						px += hoffset;
						break;
				}
				switch (position) {
					case CENTER:
					case LT:
					case RT:
						g.textBaseline = "middle";
						break;
					case TOPRIGHT:
					case TOPLEFT:
					case UP:
						g.textBaseline = "candle-top";
						py -= voffset;
						break;
					case BOTTOMRIGHT:
					case BOTTOMLEFT:
					case DN:
						g.textBaseline = "alphabetic";
						py += voffset;
						break;
				}

				g.fillText(text, px, py, maxLength);
			}
		},

		//---------------------------------------------------------
		// ImageTile: Container for a tileset of images.
		//---------------------------------------------------------
		ImageTile: {
			cols: 1,
			rows: 1,
			width: 0,
			height: 0,

			initialize: function() {
				var puzzle = this.puzzle;
				if (typeof Image !== "undefined") {
					this.image_canvas = this.image_svg = new Image();
					this.image_canvas.onload = function() {
						puzzle.painter.paintAll();
					};
				} else {
					this.image_canvas = !!puzzle.pzpr.Candle.Canvas
						? new puzzle.pzpr.Candle.Canvas.Image()
						: {};
					this.image_svg = {};
				}
				this.image_canvas.src = this.image_svg.src = this.imgsrc_dataurl;
				this.image_canvas.height = this.image_svg.height = this.height;
				this.image_canvas.width = this.image_svg.width = this.width;

				this.cwidth = this.image_canvas.width / this.cols;
				this.cheight = this.image_canvas.height / this.rows;
				this.loaded = true;
			},

			//---------------------------------------------------------
			// imgTile.putImage: Draw one image from the tileset.
			//---------------------------------------------------------
			putImage: function(ctx, key, n, dx, dy, dw, dh) {
				var img = ctx.use.canvas ? this.image_canvas : this.image_svg;
				var sw = this.cwidth,
					sh = this.cheight;
				var sx = sw * (n % this.cols),
					sy = sh * ((n / this.cols) | 0);
				if (dw === void 0) {
					dw = sw;
					dh = sh;
				}

				ctx.vid = key;
				ctx.drawImage(n !== null ? img : null, sx, sy, sw, sh, dx, dy, dw, dh);
			}
		}
	});
})();

// MouseInput.js v3.5.2

//---------------------------------------------------------------------------
// ★MouseEventクラス マウス入力に関する情報の保持とイベント処理を扱う
//---------------------------------------------------------------------------
// パズル共通 マウス入力部
// MouseEventクラスを定義
pzpr.classmgr.makeCommon({
	//---------------------------------------------------------
	MouseEvent: {
		initialize: function() {
			this.cursor = this.puzzle.cursor;

			this.enableMouse = true; // マウス入力は有効か

			this.mouseCell = null; // 入力されたセル等のID
			this.firstCell = null; // mousedownされた時のセルのID(連黒分断禁用)

			this.inputPoint = new this.klass.RawAddress(); // 入力イベントが発生したborder座標 ※端数あり
			this.firstPoint = new this.klass.RawAddress(); // mousedownされた時のborder座標 ※端数あり
			this.prevPos = new this.klass.Address(); // 前回のマウス入力イベントのborder座標

			this.btn = ""; // 押されているボタン
			this.inputData = null; // 入力中のデータ番号(実装依存)
			this.firstState = null;

			this.bordermode = false; // 境界線を入力中かどうか

			this.mousestart = false; // mousedown/touchstartイベントかどうか
			this.mousemove = false; // mousemove/touchmoveイベントかどうか
			this.mouseend = false; // mouseup/touchendイベントかどうか

			this.inputMode = "auto";
			this.savedInputMode = { edit: "auto", play: "auto" };

			this.mousereset();
		},

		RBShadeCell: false, // 連黒分断禁のパズル

		use: false, // 黒マスの入力方法選択
		bgcolor: false, // 背景色の入力を可能にする

		inputMode: "auto", // 現在のinputMode
		savedInputMode: {}, // モード変更時の保存値
		inputModes: { edit: [], play: [] }, // 現在のパズル種類にてauto以外で有効なinputModeの配列

		inversion: false, // マウスのボタンを左右反転する

		//---------------------------------------------------------------------------
		// mv.mousereset() マウス入力に関する情報を初期化する
		// mv.modechange() モード変更時に設定を初期化する
		//---------------------------------------------------------------------------
		mousereset: function() {
			var cell0 = this.mouseCell;

			this.mouseCell = this.firstCell = this.board.emptycell; // 下の行へ続く

			this.firstPoint.reset();
			this.prevPos.reset();

			this.btn = "";
			this.inputData = null;

			this.bordermode = false;

			this.mousestart = false;
			this.mousemove = false;
			this.mouseend = false;

			var pc = this;
			[
				["mouseinputAutoEdit", this.autoedit_func],
				["mouseinputAutoPlay", this.autoplay_func]
			].forEach(function(item) {
				if (pc[item[0]] !== pzpr.common.MouseEvent.prototype[item[0]]) {
					return;
				} // パズル個別の関数が定義されている場合はそのまま使用
				pc[item[0]] = pc[item[0] + "_" + item[1]] || pc[item[0]];
			});

			if (this.puzzle.execConfig("dispmove") && !!cell0 && !cell0.isnull) {
				cell0.draw();
			}
		},
		modechange: function() {
			this.mousereset();
			this.inputMode = this.savedInputMode[
				this.puzzle.editmode ? "edit" : "play"
			];
		},

		//---------------------------------------------------------------------------
		// mv.e_mousedown() Canvas上でマウスのボタンを押した際のイベント共通処理
		// mv.e_mouseup()   Canvas上でマウスのボタンを放した際のイベント共通処理
		// mv.e_mousemove() Canvas上でマウスを動かした際のイベント共通処理
		// mv.e_mousecancel() Canvas上でマウス操作がキャンセルされた場合のイベント共通処理
		//---------------------------------------------------------------------------
		//イベントハンドラから呼び出される
		// この3つのマウスイベントはCanvasから呼び出される(mvをbindしている)
		e_mousedown: function(e) {
			if (!this.enableMouse) {
				return true;
			}

			this.setMouseButton(e); /* どのボタンが押されたか取得 (mousedown時のみ) */
			if (!this.btn) {
				this.mousereset();
				return;
			}
			var addrtarget = this.getBoardAddress(e);
			this.moveTo(addrtarget.bx, addrtarget.by);

			e.stopPropagation();
			e.preventDefault();
		},
		e_mouseup: function(e) {
			if (!this.enableMouse || !this.btn) {
				return true;
			}

			this.inputEnd();

			e.stopPropagation();
			e.preventDefault();
		},
		e_mousemove: function(e) {
			if (!this.enableMouse || !this.btn) {
				return true;
			}

			if (
				e.touches !== void 0 ||
				e.which === void 0 ||
				e.which !== 0 ||
				(e.type.match(/pointermove/i) && e.buttons > 0)
			) {
				var addrtarget = this.getBoardAddress(e);
				this.lineTo(addrtarget.bx, addrtarget.by);
			} else {
				this.mousereset();
			}

			e.stopPropagation();
			e.preventDefault();
		},
		e_mousecancel: function(e) {
			this.mousereset();
		},

		//---------------------------------------------------------------------------
		// mv.setMouseButton()  イベントが起こったボタンを設定する
		// mv.getBoardAddress() イベントが起こったcanvas内の座標を取得する
		//---------------------------------------------------------------------------
		setMouseButton: function(e) {
			this.btn = pzpr.util.getMouseButton(e);

			// SHIFTキー/Commandキーを押している時は左右ボタン反転
			var kc = this.puzzle.key;
			kc.checkmodifiers(e);
			if (
				(kc.isSHIFT || kc.isMETA) !== this.inversion ||
				(this.inputMode &&
					this.inputMode.indexOf("-") === this.inputMode.length - 1)
			) {
				if (this.btn === "left") {
					this.btn = "right";
				} else if (this.btn === "right") {
					this.btn = "left";
				}
			}
		},
		getBoardAddress: function(e) {
			var puzzle = this.puzzle,
				pc = puzzle.painter;
			var pix = { px: NaN, py: NaN };
			var g = pc.context;
			if (!g) {
				return pix;
			}
			if (
				!pzpr.env.API.touchevent ||
				pzpr.env.API.pointerevent ||
				pzpr.env.OS.iOS
			) {
				if (!isNaN(e.offsetX)) {
					pix = { px: e.offsetX, py: e.offsetY };
				} else {
					pix = { px: e.layerX, py: e.layerY };
				} // Firefox 39以前, iOSはこちら
			} else {
				var pagePos = pzpr.util.getPagePos(e),
					rect = pzpr.util.getRect(pc.context.child);
				pix = { px: pagePos.px - rect.left, py: pagePos.py - rect.top };
			}
			return { bx: (pix.px - pc.x0) / pc.bw, by: (pix.py - pc.y0) / pc.bh };
		},

		//---------------------------------------------------------------------------
		// mv.moveTo()   Canvas上にマウスの位置を設定する
		// mv.lineTo()   Canvas上でマウスを動かす
		// mv.inputEnd() Canvas上のマウス入力処理を終了する
		// mv.inputPath() Canvas上でひとつながりになる線を入力する
		//---------------------------------------------------------------------------
		moveTo: function(bx, by) {
			this.inputPoint.init(bx, by);
			this.mouseevent(0);
		},
		lineTo: function(bx, by) {
			/* 前回の位置からの差分を順番に入力していきます */
			var dx = bx - this.inputPoint.bx,
				dy = by - this.inputPoint.by;
			var distance =
				(((dx >= 0 ? dx : -dx) + (dy >= 0 ? dy : -dy)) * 2 + 0.9) |
				0; /* 0.5くらいずつ動かす */
			var mx = dx / distance,
				my = dy / distance;
			for (var i = 0; i < distance - 1; i++) {
				this.inputPoint.move(mx, my);
				this.mouseevent(1);
			}
			this.inputPoint.init(bx, by);
			this.mouseevent(1);
		},
		inputEnd: function() {
			this.mouseevent(2);
			this.mousereset();
		},
		inputPath: function() {
			var args = Array.prototype.slice.call(arguments);
			this.mousereset();
			this.btn = typeof args[0] === "string" ? args.shift() : "left";
			this.moveTo(args[0], args[1]);
			for (var i = 2; i < args.length - 1; i += 2) {
				/* 奇数個の最後の一つは切り捨て */
				this.lineTo(args[i], args[i + 1]);
			}
			this.inputEnd();
		},

		//---------------------------------------------------------------------------
		// mv.mouseevent() マウスイベント処理
		//---------------------------------------------------------------------------
		mouseevent: function(step) {
			this.cancelEvent = false;
			this.mousestart = step === 0;
			this.mousemove = step === 1;
			this.mouseend = step === 2;
			var puzzle = this.puzzle;

			puzzle.emit("mouse");
			if (!this.cancelEvent && (this.btn === "left" || this.btn === "right")) {
				if (this.mousestart) {
					puzzle.opemgr.newOperation();
					puzzle.errclear();
					puzzle.opemgr.updateStarts();
				} else {
					puzzle.opemgr.newChain();
				}

				this.mouseinput();
			}
		},

		//---------------------------------------------------------------------------
		// mv.mouseinput()       マウスイベント共通処理。
		// mv.mouseinput_number()数字入力処理
		// mv.mouseinput_clear() セル内容の消去処理
		// mv.mouseinput_auto()  マウスイベント処理。各パズルのファイルでオーバーライドされる。
		// mv.mouseinput_other() inputMode指定時のマウスイベント処理。各パズルのファイルでオーバーライドされる。
		//---------------------------------------------------------------------------
		mouseinput: function() {
			var mode = this.inputMode;
			if (this.puzzle.key.isZ && this.inputMode.indexOf(/info\-/) === -1) {
				var hasUblk = this.inputModes.play.indexOf("info-ublk") >= 0;

				if (this.inputModes.play.indexOf("info-line") >= 0) {
					mode = "info-line";
				} else if (this.inputModes.play.indexOf("info-blk") >= 0) {
					var cell = this.getcell();
					if (hasUblk && cell.isUnshade()) {
						mode = "info-ublk";
					} else {
						mode = "info-blk";
					}
				} else if (hasUblk) {
					mode = "info-ublk";
				} else if (this.inputModes.play.indexOf("info-room") >= 0) {
					mode = "info-room";
				}
			}
			switch (mode) {
				case "auto":
					this.mouseinput_auto();
					break; /* 各パズルのルーチンへ */
				case "number":
				case "number-":
					this.mouseinput_number();
					break;
				case "clear":
					this.mouseinput_clear();
					break;
				case "cell51":
					this.input51_fixed();
					break;
				case "circle-unshade":
					this.inputFixedNumber(1);
					break;
				case "circle-shade":
					this.inputFixedNumber(2);
					break;
				case "undef":
					this.inputFixedNumber(-2);
					break;
				case "ice":
					this.inputIcebarn();
					break;
				case "numexist":
					this.inputFixedNumber(-2);
					break;
				case "numblank":
					this.inputFixedNumber(-3);
					break;
				case "bgcolor":
					this.inputBGcolor();
					break;
				case "subcircle":
				case "bgcolor1":
					this.inputFixedQsub(1);
					break;
				case "subcross":
				case "bgcolor2":
					this.inputFixedQsub(2);
					break;
				case "completion":
					if (this.mousestart) {
						this.inputqcmp();
					}
					break;
				case "objblank":
					this.inputDot();
					break;
				case "direc":
					this.inputdirec();
					break;
				case "arrow":
					this.inputarrow_cell();
					break;
				case "crossdot":
					if (this.mousestart) {
						this.inputcrossMark();
					}
					break;
				case "border":
					this.inputborder();
					break;
				case "subline":
					this.inputQsubLine();
					break;
				case "shade":
				case "unshade":
					this.inputShade();
					break;
				case "line":
					this.inputLine();
					break;
				case "peke":
					this.inputpeke();
					break;
				case "bar":
					this.inputTateyoko();
					break;
				case "empty":
					this.inputempty();
					break;
				case "info-line":
					if (this.mousestart) {
						this.dispInfoLine();
					}
					break;
				case "info-blk":
					if (this.mousestart) {
						this.dispInfoBlk();
					}
					break;
				case "info-ublk":
					if (this.mousestart) {
						this.dispInfoUblk();
					}
					break;
				case "info-room":
					if (this.mousestart) {
						this.dispInfoRoom();
					}
					break;
				default:
					this.mouseinput_other();
					break; /* 各パズルのルーチンへ */
			}
		},
		mouseinput_number: function() {
			if (this.mousestart) {
				this.inputqnum();
			}
		},
		mouseinput_clear: function() {
			this.inputclean_cell();
		},
		//オーバーライド用
		mouseinput_auto: function() {
			if (this.puzzle.playmode) {
				this.mouseinputAutoPlay();
			} else if (this.puzzle.editmode) {
				this.mouseinputAutoEdit();
			}
		},
		mouseinputAutoEdit: function() {},
		mouseinputAutoPlay: function() {},
		autoedit_func: "", // mouseinputAutoEdit
		autoplay_func: "", // mouseinputAutoPlay

		mouseinput_other: function() {},

		//---------------------------------------------------------------------------
		// mv.notInputted()   盤面への入力が行われたかどうか判定する
		//---------------------------------------------------------------------------
		notInputted: function() {
			return !this.puzzle.opemgr.changeflag;
		},

		//---------------------------------------------------------------------------
		// mv.setInputMode()     入力されるinputModeを固定する (falsyな値でresetする)
		// mv.getInputModeList() 有効なinputModeを配列にして返す (通常はauto)
		//---------------------------------------------------------------------------
		setInputMode: function(mode) {
			mode = mode || "auto";
			if (
				this.getInputModeList().indexOf(mode === "number-" ? "number" : mode) >=
				0
			) {
				this.inputMode = mode;
				this.savedInputMode[this.puzzle.editmode ? "edit" : "play"] = mode;
				this.puzzle.redraw();
			} else {
				throw Error("Invalid input mode :" + mode);
			}
		},
		getInputModeList: function(type) {
			if (this.puzzle.instancetype === "viewer") {
				return [];
			}
			type = !!type ? type : this.puzzle.editmode ? "edit" : "play";
			var list = ["auto"];
			list = list.concat(this.inputModes[type]);
			if (list.indexOf("number") >= 0) {
				list.splice(list.indexOf("number") + 1, 0, "number-");
			}
			return list;
		},

		//---------------------------------------------------------------------------
		// mv.setInversion()     マウスの左右反転設定を行う
		//---------------------------------------------------------------------------
		setInversion: function(input) {
			this.inversion = !!input;
		},

		//---------------------------------------------------------------------------
		// mv.getcell()    入力された位置がどのセルに該当するかを返す
		// mv.getcell_excell()  入力された位置がどのセル/EXCELLに該当するかを返す
		// mv.getcross()   入力された位置がどの交差点に該当するかを返す
		// mv.getborder()  入力された位置がどの境界線・Lineに該当するかを返す(クリック用)
		// mv.getpos()    入力された位置が仮想セル上でどこの(X*2,Y*2)に該当するかを返す。
		//                外枠の左上が(0,0)で右下は(bd.cols*2,bd.rows*2)。rcは0～0.5のパラメータ。
		// mv.isBorderMode() 境界線入力モードかどうか判定する
		//---------------------------------------------------------------------------
		getcell: function() {
			return this.getpos(0).getc();
		},
		getcell_excell: function() {
			var pos = this.getpos(0),
				excell = pos.getex();
			return !excell.isnull ? excell : pos.getc();
		},
		getcross: function() {
			return this.getpos(0.5).getx();
		},
		getbank: function() {
			var bank = this.board.bank;
			var r = this.puzzle.painter.bankratio;
			var bx = this.inputPoint.bx / (r * 2);
			var by = (this.inputPoint.by - (this.board.maxby + 1)) / (r * 2);

			if (bx < 0 || by < 0) {
				return null;
			}

			var len = bank.pieces.length;
			var allowAdd =
				this.puzzle.editmode &&
				(typeof this.allowAdd === "function"
					? bank.allowAdd()
					: !!bank.allowAdd);
			for (var p = 0; p < len + (allowAdd ? 1 : 0); p++) {
				var piece = p < len ? bank.pieces[p] : bank.addButton;
				if (
					piece.index !== null &&
					bx >= piece.x - 0.25 &&
					by >= piece.y - 0.25 &&
					bx < piece.x + piece.w + 0.75 &&
					by < piece.y + piece.h + 0.75
				) {
					return piece;
				}
			}
			return null;
		},

		getpos: function(spc) {
			var addr = this.inputPoint,
				m1 = 2 * spc,
				m2 = 2 * (1 - spc),
				minaxis = Math.min(this.board.minbx, this.board.minby);

			// Add a constant to ensure all intermediate values aren't negative
			var extra = 4 + (minaxis >= 0 ? 0 : -minaxis & ~1);

			var bx = addr.bx + extra,
				by = addr.by + extra,
				dx = bx % 2,
				dy = by % 2;
			bx = (bx & ~1) + +(dx >= m1) + +(dx >= m2) - extra;
			by = (by & ~1) + +(dy >= m1) + +(dy >= m2) - extra;
			return new this.klass.Address(bx, by);
		},

		getcrossorcell: function(spc) {
			var adj = this.inputPoint.clone();
			adj.bx += 1;
			var addr = this.getDiagonalAddress(adj, spc, false);
			if (addr) {
				addr.bx -= 1;
				return addr;
			}
			return this.getpos(0.25);
		},

		getborder: function(spc) {
			var addr = this.getDiagonalAddress(this.inputPoint, spc, true);
			return addr ? addr.getb() : this.board.emptyborder;
		},

		getDiagonalAddress: function(addr, spc, isBorder) {
			var bx = (addr.bx & ~1) + 1,
				by = (addr.by & ~1) + 1;
			var dx = addr.bx + 1 - bx,
				dy = addr.by + 1 - by;

			// 真ん中のあたりはどこにも該当しないようにする
			var bd = this.board;
			if (isBorder && bd.linegraph.isLineCross) {
				if (!bd.borderAsLine) {
					var m1 = 2 * spc,
						m2 = 2 * (1 - spc);
					if ((dx < m1 || m2 < dx) && (dy < m1 || m2 < dy)) {
						return null;
					}
				} else {
					var m1 = 2 * (0.5 - spc),
						m2 = 2 * (0.5 + spc);
					if (m1 < dx && dx < m2 && m1 < dy && dy < m2) {
						return null;
					}
				}
			}

			if (dx < 2 - dy) {
				//左上
				if (dx > dy) {
					return new this.klass.Address(bx, by - 1);
				} //左上＆右上 -> 上
				else {
					return new this.klass.Address(bx - 1, by);
				} //左上＆左下 -> 左
			} else {
				//右下
				if (dx > dy) {
					return new this.klass.Address(bx + 1, by);
				} //右下＆右上 -> 右
				else {
					return new this.klass.Address(bx, by + 1);
				} //右下＆左下 -> 下
			}
			// unreachable
		},

		isBorderMode: function() {
			if (this.mousestart) {
				this.bordermode = !this.getpos(0.25).oncell();
			}
			return this.bordermode;
		},

		//---------------------------------------------------------------------------
		// mv.setcursor() TargetCursorの場所を移動する
		// mv.setcursorsnum() TargetCursorの補助記号に対する場所を移動する
		//---------------------------------------------------------------------------
		setcursor: function(pos) {
			var pos0 = this.cursor.getaddr();
			this.cursor.setaddr(pos);
			pos0.draw();
			pos.draw();
		},
		setcursorsnum: function(pos) {
			var pos0 = this.cursor.getaddr();
			this.cursor.setaddr(pos);
			var target;
			var bx = this.inputPoint.bx,
				by = this.inputPoint.by;

			if (this.cursor.disableAnum) {
				bx = bx % 2 | 0;
				by = by % 2 | 0;
				target = [5, 4, 2, 3][by * 2 + bx];
			} else {
				bx = (((bx + 12) % 2) * 1.5) | 0;
				by = (((by + 12) % 2) * 1.5) | 0;
				if (this.pid !== "factors") {
					target = [5, 0, 4, 0, 0, 0, 2, 0, 3][by * 3 + bx];
				} else {
					target = [0, 0, 4, 0, 0, 0, 2, 0, 3][by * 3 + bx];
				}
			}
			if (this.cursor.targetdir !== target) {
				this.cursor.targetdir = target;
			}
			pos0.draw();
			pos.draw();
		}
	}
});

// KeyInput.js v3.4.1

//---------------------------------------------------------------------------
// ★KeyEventクラス キーボード入力に関する情報の保持とイベント処理を扱う
//---------------------------------------------------------------------------
// パズル共通 キーボード入力部
// KeyEventクラスを定義
pzpr.classmgr.makeCommon({
	//---------------------------------------------------------
	KeyEvent: {
		initialize: function() {
			this.cursor = this.puzzle.cursor;

			this.enableKey = true; // キー入力は有効か

			this.keyreset();
		},

		enablemake: false,
		enableplay: false,
		keyup_event: false /* keyupイベントでもパズル個別のキーイベント関数を呼び出す */,

		//---------------------------------------------------------------------------
		// kc.keyreset()     キーボード入力に関する情報を初期化する
		// kc.isenablemode() 現在のモードでキー入力が有効か判定する
		//---------------------------------------------------------------------------
		keyreset: function() {
			this.isCTRL = false;
			this.isMETA = false; // MacのCommandキーなど
			this.isALT = false; // ALTはメニュー用なので基本的に使わない
			this.isSHIFT = false;
			this.isZ = false;
			this.isX = false;
			this.isY = false;

			this.keydown = false;
			this.keyup = false;

			this.ca = "";

			this.prev = null;
		},
		isenablemode: function() {
			return (
				(this.puzzle.editmode && this.enablemake) ||
				(this.puzzle.playmode && this.enableplay)
			);
		},

		//---------------------------------------------------------------------------
		// kc.e_keydown()  キーを押した際のイベント共通処理
		// kc.e_keyup()    キーを離した際のイベント共通処理
		//---------------------------------------------------------------------------
		// この3つのキーイベントはwindowから呼び出される(kcをbindしている)
		e_keydown: function(e) {
			var c = this.getchar(e);
			if (!this.enableKey) {
				if (e.target === document.body && (c === "BS" || c === " ")) {
					e.stopPropagation();
					e.preventDefault();
				}
				return;
			}

			this.checkbutton(c, 0);
			if (c) {
				this.keyevent(c, 0);
			}

			if (e.target === this.puzzle.canvas || this.cancelDefault) {
				e.stopPropagation();
				e.preventDefault();
			}
		},
		e_keyup: function(e) {
			var c = this.getchar(e);
			if (!this.enableKey) {
				if (e.target === document.body && (c === "BS" || c === " ")) {
					e.stopPropagation();
					e.preventDefault();
				}
				return;
			}

			this.checkbutton(c, 1);
			if (c) {
				this.keyevent(c, 1);
			}

			if (e.target === this.puzzle.canvas || this.cancelDefault) {
				e.stopPropagation();
				e.preventDefault();
			}
		},

		//---------------------------------------------------------------------------
		// kc.checkmodifiers()  Shift, Ctrl, Alt, Metaキーをチェックする
		// kc.checkbutton()     Z, X, Yキーの押下状況をチェックする
		//---------------------------------------------------------------------------
		checkmodifiers: function(e) {
			this.isSHIFT = e.shiftKey;
			this.isCTRL = e.ctrlKey;
			this.isMETA = e.metaKey;
			this.isALT = e.altKey;
		},
		checkbutton: function(charall, step) {
			var c = charall.split(/\+/).pop();
			if (c === "z") {
				this.isZ = step === 0;
			}
			if (c === "x") {
				this.isX = step === 0;
			}
			if (c === "y") {
				this.isY = step === 0;
			}
		},

		//---------------------------------------------------------------------------
		// kc.getchar()  入力されたキーを表す文字列を返す
		//---------------------------------------------------------------------------
		// 48～57は0～9キー、65～90はa～z、96～105はテンキー、112～123はF1～F12キー
		getchar: function(e) {
			this.checkmodifiers(e);

			var key = "",
				keycode = !!e.keyCode ? e.keyCode : e.charCode;

			if (keycode === 38) {
				key = "up";
			} else if (keycode === 40) {
				key = "down";
			} else if (keycode === 37) {
				key = "left";
			} else if (keycode === 39) {
				key = "right";
			} else if (48 <= keycode && keycode <= 57) {
				key = (keycode - 48).toString(36);
			} else if (65 <= keycode && keycode <= 90) {
				key = (keycode - 55).toString(36);
			} //アルファベット
			else if (96 <= keycode && keycode <= 105) {
				key = (keycode - 96).toString(36);
			} //テンキー対応
			else if (112 <= keycode && keycode <= 123) {
				key = "F" + (keycode - 111).toString(10);
			} /* 112～123はF1～F12キー */ else if (keycode === 32 || keycode === 46) {
				key = " ";
			} // 32はスペースキー 46はdelキー
			else if (keycode === 8) {
				key = "BS";
			} else if (keycode === 109 || keycode === 189 || keycode === 173) {
				key = "-";
			} else if (keycode === 106) {
				key = "*";
			} else if (keycode === 107) {
				key = "+";
			}

			var keylist = !!key ? [key] : [];
			if (this.isMETA) {
				keylist.unshift("meta");
			}
			if (this.isALT) {
				keylist.unshift("alt");
			}
			if (this.isCTRL) {
				keylist.unshift("ctrl");
			}
			if (this.isSHIFT) {
				keylist.unshift("shift");
			}
			key = keylist.join("+");

			if (key === "alt+h") {
				key = "left";
			} else if (key === "alt+k") {
				key = "up";
			} else if (key === "alt+j") {
				key = "down";
			} else if (key === "alt+l") {
				key = "right";
			}

			return key;
		},

		//---------------------------------------------------------------------------
		// kc.inputKeys()   キーボードイベントを実行する
		//---------------------------------------------------------------------------
		inputKeys: function(array) {
			for (var i = 0; i < arguments.length; i++) {
				this.keyevent(arguments[i], 0);
				this.keyevent(arguments[i], 1);
			}
		},

		//---------------------------------------------------------------------------
		// kc.keyevent()  キーイベント処理
		//---------------------------------------------------------------------------
		keyevent: function(c, step) {
			var puzzle = this.puzzle;
			this.cancelEvent = false;
			this.cancelDefault = false;
			this.keydown = step === 0;
			this.keyup = step === 1;

			// always prevent backspace navigation, space scrolling
			if (c === "BS" || c === " ") {
				this.cancelDefault = true;
			}

			if (this.keydown) {
				puzzle.opemgr.newOperation();
			} else {
				puzzle.opemgr.newChain();
			}

			if (this.keydown && !this.isZ) {
				puzzle.errclear();
				puzzle.opemgr.updateStarts();
			}

			if (this.keydown && c === "F4" && puzzle.playeronly) {
				puzzle.togglePause();
				return;
			}
			if (puzzle.pausetime !== null) {
				return;
			}

			puzzle.emit("key", c);
			if (this.cancelEvent) {
				return;
			}
			if (!this.keyexec(c)) {
				return;
			}
			if (!this.keyDispInfo(c)) {
				return;
			}
			if (!this.isenablemode()) {
				return;
			}
			if (this.keydown && this.moveTarget(c)) {
				this.cancelDefault = true;
				return;
			}
			if (this.keydown || (this.keyup && this.keyup_event)) {
				this.keyinput(c);
			} /* 各パズルのルーチンへ */
		},

		//---------------------------------------------------------------------------
		// kc.keyexec() モードに共通で行う処理を実行します
		//---------------------------------------------------------------------------
		keyexec: function(c) {
			var puzzle = this.puzzle;
			if (this.keydown && c === "alt+c" && !puzzle.playeronly) {
				puzzle.setMode(
					puzzle.playmode ? puzzle.MODE_EDITOR : puzzle.MODE_PLAYER
				);
				return false;
			}
			return true;
		},

		//---------------------------------------------------------------------------
		// kc.keyDispInfo() 一時的に情報を表示する処理を追加します
		//---------------------------------------------------------------------------
		keyDispInfo: function(c) {
			return true;
		},

		//---------------------------------------------------------------------------
		// kc.keyinput() キーを押した/離した際の各パズルごとのイベント処理。
		//               各パズルのファイルでオーバーライドされる。
		//---------------------------------------------------------------------------
		// オーバーライド用
		keyinput: function(c) {
			this.key_inputqnum(c); /* デフォルトはCell数字入力 */
		},

		//---------------------------------------------------------------------------
		// kc.moveTarget()  キーボードからの入力対象を矢印キーで動かす
		// kc.moveTCell()   Cellのキーボードからの入力対象を矢印キーで動かす
		// kc.moveTCross()  Crossのキーボードからの入力対象を矢印キーで動かす
		// kc.moveTBorder() Borderのキーボードからの入力対象を矢印キーで動かす
		// kc.moveTC()      上記3つの関数の共通処理
		//---------------------------------------------------------------------------
		moveTarget: function(ca) {
			return this.moveTCell(ca);
		},
		moveTCell: function(ca) {
			return this.moveTC(ca, 2);
		},
		moveTCross: function(ca) {
			return this.moveTC(ca, 2);
		},
		moveTBorder: function(ca) {
			return this.moveTC(ca, 1);
		},
		moveTC: function(ca, mv) {
			var cursor = this.cursor,
				pos0 = cursor.getaddr(),
				flag = true,
				dir = cursor.NDIR;

			var hasIndicator = this.pid === "easyasabc" || this.pid === "isowatari";

			switch (ca) {
				case "up":
					if (
						(hasIndicator && cursor.by === cursor.miny) ||
						cursor.by - mv >= cursor.miny
					) {
						dir = cursor.UP;
					}
					break;
				case "down":
					if (cursor.by + mv <= cursor.maxy) {
						dir = cursor.DN;
					}
					break;
				case "left":
					if (cursor.bx - mv >= cursor.minx) {
						dir = cursor.LT;
					}
					break;
				case "right":
					if (cursor.bx + mv <= cursor.maxx) {
						dir = cursor.RT;
					}
					break;
				default:
					flag = false;
					break;
			}

			if (flag) {
				cursor.movedir(dir, mv);

				pos0.draw();
				cursor.draw();
			}
			return flag;
		},

		//---------------------------------------------------------------------------
		// kc.moveExCell()  ExCellのキーボードからの入力対象を矢印キーで動かす
		//---------------------------------------------------------------------------
		moveExCell: function(ca) {
			var cursor = this.cursor,
				addr0 = cursor.getaddr(),
				flag = true,
				dir = addr0.NDIR;
			switch (ca) {
				case "up":
					if (
						cursor.by === cursor.maxy &&
						cursor.minx < cursor.bx &&
						cursor.bx < cursor.maxx
					) {
						cursor.by = cursor.miny;
					} else if (cursor.by > cursor.miny) {
						dir = addr0.UP;
					} else {
						flag = false;
					}
					break;
				case "down":
					if (
						cursor.by === cursor.miny &&
						cursor.minx < cursor.bx &&
						cursor.bx < cursor.maxx
					) {
						cursor.by = cursor.maxy;
					} else if (cursor.by < cursor.maxy) {
						dir = addr0.DN;
					} else {
						flag = false;
					}
					break;
				case "left":
					if (
						cursor.bx === cursor.maxx &&
						cursor.miny < cursor.by &&
						cursor.by < cursor.maxy
					) {
						cursor.bx = cursor.minx;
					} else if (cursor.bx > cursor.minx) {
						dir = addr0.LT;
					} else {
						flag = false;
					}
					break;
				case "right":
					if (
						cursor.bx === cursor.minx &&
						cursor.miny < cursor.by &&
						cursor.by < cursor.maxy
					) {
						cursor.bx = cursor.maxx;
					} else if (cursor.bx < cursor.maxx) {
						dir = addr0.RT;
					} else {
						flag = false;
					}
					break;
				default:
					flag = false;
					break;
			}

			if (flag) {
				if (dir !== addr0.NDIR) {
					cursor.movedir(dir, 2);
				}

				addr0.draw();
				cursor.draw();
			}
			return flag;
		}
	},

	//---------------------------------------------------------------------------
	// ★TargetCursorクラス キー入力のターゲットを保持する
	//---------------------------------------------------------------------------
	"TargetCursor:Address": {
		initialize: function() {
			this.bx = 1;
			this.by = 1;
			this.bankpiece = null;
			this.mode51 = this.puzzle.klass.ExCell.prototype.ques === 51;
			this.modesnum = this.puzzle.klass.Cell.prototype.enableSubNumberArray;
			this.disableAnum = this.puzzle.klass.Cell.prototype.disableAnum;
			this.targetdirs = this.puzzle.klass.Cell.prototype.dirs51;
			if (this.mode51 && this.puzzle.editmode) {
				this.targetdir = 4; // right
			} else if (this.disableAnum && this.puzzle.playmode) {
				this.targetdir = 5;
			}
		},
		init: function(bx, by) {
			this.bx = bx;
			this.by = by;
			this.bankpiece = null;
			if (!this.mode51) {
				this.targetdir = this.disableAnum && this.puzzle.playmode ? 5 : 0;
			}
			return this;
		},

		getc: function() {
			return this.bankpiece === null
				? this.board.getc(this.bx, this.by)
				: this.board.emptycell;
		},

		// 有効な範囲(minx,miny)-(maxx,maxy)
		minx: null,
		miny: null,
		maxx: null,
		maxy: null,

		crosstype: false,

		//---------------------------------------------------------------------------
		// tc.initCursor()           初期化時にカーソルの位置を設定する
		//---------------------------------------------------------------------------
		initCursor: function() {
			if (this.crosstype) {
				this.init(0, 0);
			} else {
				this.init(1, 1);
			}

			this.adjust_init();
		},

		//---------------------------------------------------------------------------
		// tc.setminmax()            初期化時・モード変更時にプロパティを設定する
		// tc.setminmax_customize()  初期化時・モード変更時のプロパティをパズルごとに調節する
		//---------------------------------------------------------------------------
		setminmax: function() {
			var bd = this.board,
				bm = !this.crosstype ? 1 : 0;
			this.minx = bd.minbx + bm;
			this.miny = bd.minby + bm;
			this.maxx = bd.maxbx - bm;
			this.maxy = bd.maxby - bm;

			this.setminmax_customize();

			this.adjust_init();
		},
		setminmax_customize: function() {},

		//---------------------------------------------------------------------------
		// tc.adjust_init()       初期化時にカーソルの位置がおかしい場合に調整する
		// tc.adjust_modechange() モード変更時にカーソルの位置を調節する
		// tc.adjust_cell_to_excell() モード変更時にカーソルの位置をCellからExCellへ移動する
		//---------------------------------------------------------------------------
		adjust_init: function() {
			if (this.bx < this.minx) {
				this.bx = this.minx;
			}
			if (this.by < this.miny) {
				this.by = this.miny;
			}
			if (this.bx > this.maxx) {
				this.bx = this.maxx;
			}
			if (this.by > this.maxy) {
				this.by = this.maxy;
			}
		},
		adjust_modechange: function() {
			if (this.setminmax_customize !== this.common.setminmax_customize) {
				this.setminmax();
			} // editmode, playmodeでminmaxが異なるパズル
			if (this.mode51 && this.puzzle.editmode) {
				this.targetdir = 4;
			} // right
			else if (this.modesnum) {
				this.targetdir = this.puzzle.playmode && this.disableAnum ? 5 : 0;
			}
			if (this.puzzle.playmode) {
				this.bankpiece = null;
			}
		},
		adjust_cell_to_excell: function() {
			var bd = this.board;
			var shortest = Math.min(
				this.bx,
				bd.cols * 2 - this.bx,
				this.by,
				bd.rows * 2 - this.by
			);
			if (shortest <= 0) {
				return;
			} else if (this.by === shortest) {
				this.by = this.miny;
			} else if (bd.rows * 2 - this.by === shortest) {
				this.by = this.maxy;
			} else if (this.bx === shortest) {
				this.bx = this.minx;
			} else if (bd.cols * 2 - this.bx === shortest) {
				this.bx = this.maxx;
			}
		},

		//---------------------------------------------------------------------------
		// tc.checksnum()  ターゲットの位置かどうか判定する (Cellのみ)
		//---------------------------------------------------------------------------
		checksnum: function(pos) {
			var bx = ((((pos.bx + 12) / 2) | 0) - 6) * 2 + 1;
			var by = ((((pos.by + 12) / 2) | 0) - 6) * 2 + 1;
			var result = this.bx === bx && this.by === by;
			if (result && this.modesnum && this.puzzle.playmode) {
				if (this.disableAnum) {
					var tmpx = pos.bx % 2 | 0;
					var tmpy = pos.by % 2 | 0;
					result = [5, 4, 2, 3][tmpy * 2 + tmpx] === this.targetdir;
				} else {
					var tmpx = (((pos.bx + 12) % 2) * 1.5) | 0;
					var tmpy = (((pos.by + 12) % 2) * 1.5) | 0;
					if (this.pid !== "factors") {
						result =
							[5, 0, 4, 0, 0, 0, 2, 0, 3][tmpy * 3 + tmpx] === this.targetdir;
					} else {
						result =
							[0, 0, 4, 0, 0, 0, 2, 0, 3][tmpy * 3 + tmpx] === this.targetdir;
					}
				}
			}
			return result;
		},

		//---------------------------------------------------------------------------
		// tc.getaddr() ターゲットの位置を移動する
		//---------------------------------------------------------------------------
		movedir: function(dir, mv) {
			if (this.bankpiece !== null) {
				return this;
			}

			this.puzzle.klass.Address.prototype.movedir.call(this, dir, mv);
			if (this.modesnum && this.puzzle.playmode && !this.disableAnum) {
				this.targetdir = 0;
			}
			return this;
		},

		//---------------------------------------------------------------------------
		// tc.getaddr() ターゲットの位置をAddressクラスのオブジェクトで取得する
		// tc.setaddr() ターゲットの位置をAddressクラス等のオブジェクトで設定する
		//---------------------------------------------------------------------------
		setaddr: function(pos) {
			var hasIndicator = this.pid === "easyasabc" || this.pid === "isowatari";
			/* Address, Cellなどのオブジェクトいずれを入力しても良い */
			if (
				pos.bx < this.minx ||
				this.maxx < pos.bx ||
				pos.by < this.miny - (hasIndicator ? 2 : 0) ||
				this.maxy < pos.by
			) {
				return;
			}
			this.bankpiece = null;
			this.set(pos);
			if (this.modesnum && this.puzzle.playmode && !this.disableAnum) {
				this.targetdir = 0;
			}
		},

		//---------------------------------------------------------------------------
		// tc.moveTo() ターゲットの位置を指定した(bx,by)に設定する
		//---------------------------------------------------------------------------
		moveTo: function(bx, by) {
			this.init(bx, by);
			if (this.modesnum && this.puzzle.playmode && !this.disableAnum) {
				this.targetdir = 0;
			}
		},

		//---------------------------------------------------------------------------
		// tc.chtarget()     SHIFTを押した時に[＼]の入力するところを選択する
		// tc.detectTarget() [＼]の右・下どちらに数字を入力するか判断する
		// tc.getNumOfTarget() Cell上でtargetとして取りうる数を返す
		//---------------------------------------------------------------------------
		targetdir: 0,
		chtarget: function(mouse, dx, dy) {
			if (this.oncell() && this.modesnum && this.puzzle.playmode) {
				if (this.disableAnum) {
					this.targetdir = [5, 1, 3, 5, 2, 4][this.targetdir];
				} else if (this.pid !== "factors") {
					this.targetdir = [5, 1, 3, 0, 2, 4][this.targetdir];
				} else {
					this.targetdir = [4, 1, 3, 0, 2, 0][this.targetdir];
				}
			} else {
				if (this.targetdirs === 4) {
					if (mouse) {
						var ur = dx - dy > 0,
							ul = dx + dy < 0;
						if (ur) {
							if (ul) {
								this.targetdir = 1;
							} else {
								this.targetdir = 4;
							}
						} else {
							if (ul) {
								this.targetdir = 3;
							} else {
								this.targetdir = 2;
							}
						}
					} else {
						this.targetdir = [4, 0, 3, 1, 2, 0][this.targetdir];
					}
				} else {
					if (mouse) {
						this.targetdir = dx - dy > 0 ? 4 : 2;
					} else {
						this.targetdir = this.targetdir === 2 ? 4 : 2;
					}
				}
			}
			this.draw();
		},
		detectTarget: function(piece) {
			piece = piece || this.getobj();
			var bd = this.board,
				adc = piece.adjacent;
			if (piece.isnull) {
				return 0;
			} else if (piece.group === "cell") {
				if (piece.ques !== 51) {
					return 0;
				} else if (this.targetdirs === 2) {
					var invalidRight = adc.right.isnull || adc.right.ques === 51;
					var invalidBottom = adc.bottom.isnull || adc.bottom.ques === 51;
					if (invalidRight && invalidBottom) {
						return 0;
					} else if (invalidBottom) {
						return piece.RT;
					} else if (invalidRight) {
						return piece.DN;
					}
				}
			} else if (piece.group === "excell") {
				if (piece.id === bd.cols + bd.rows) {
					return 0;
				} else if (
					(piece.by === -1 && adc.bottom.ques === 51) ||
					(piece.bx === -1 && adc.right.ques === 51)
				) {
					return 0;
				} else if (piece.by === -1) {
					return piece.DN;
				} else if (piece.bx === -1) {
					return piece.RT;
				}
			} else {
				return 0;
			}

			return this.targetdir;
		},
		getNumOfTarget: function(piece) {
			var num = 1;
			if (piece.isnull) {
				num = 0;
			} else if (piece.group === "cell") {
				if (this.modesnum && this.puzzle.playmode) {
					num = 4 - (this.pid === "factors" ? 1 : 0);
				} else if (piece.ques === 51) {
					var adc = piece.adjacent;
					num =
						(!adc.right.isnull && adc.right.ques !== 51 ? 1 : 0) +
						(!adc.bottom.isnull && adc.bottom.ques !== 51 ? 1 : 0);
				}
			}
			return num;
		},

		getDot: function() {
			return this.board.getDot(this.bx, this.by);
		}
	}
});

// Encode.js v3.4.1

//---------------------------------------------------------------------------
// ★Encodeクラス URLのエンコード/デコードを扱う
//---------------------------------------------------------------------------
// URLエンコード/デコード
// Encodeクラス
pzpr.classmgr.makeCommon({
	//---------------------------------------------------------
	Encode: {
		pflag: "",
		outpflag: "",
		outvariant: null,
		outcols: null,
		outrows: null,
		outbstr: "",
		fio: null,

		//---------------------------------------------------------------------------
		// enc.checkpflag()   pflagに指定した文字列が含まれているか調べる
		//---------------------------------------------------------------------------
		// ぱずぷれApplet->v3でURLの仕様が変わったパズル:
		//     creek, gokigen, lits (Applet+c===v3, Applet===v3+d)
		// 何回かURL形式を変更したパズル:
		//     icebarn (v3, Applet+c, Applet), slalom (v3+p, v3+d, v3/Applet)
		// v3になって以降pidを分離したパズルのうち元パズルのURL形式を変更して短くしたパズル:
		//     bonsan, kramma (cを付加)
		// URL形式は同じで表示形式の情報をもたせているパズル:
		//     bosanowa, pipelink, yajilin
		checkpflag: function(ca) {
			return this.pflag.indexOf(ca) >= 0;
		},

		//---------------------------------------------------------------------------
		// enc.decodeURL()   parseURL()を行い、各種各パズルのdecode関数を呼び出す
		// enc.encodeURL()   各種各パズルのencode関数を呼び出し、URLを出力する
		//
		// enc.decodePzpr()  各パズルのURL入力用(オーバーライド用)
		// enc.encodePzpr()  各パズルのURL出力用(オーバーライド用)
		//---------------------------------------------------------------------------
		decodeURL: function(url) {
			var pzl = pzpr.parser.parseURL(url),
				puzzle = this.puzzle,
				bd = puzzle.board;

			if (pzl.variant !== null) {
				puzzle.setConfig("variant", true);
				puzzle.setConfig("variantid", pzl.variant);
			}
			if (pzl.type === pzl.URL_PZPRFILE) {
				new puzzle.klass.FileIO().filedecode(pzl.body);
				return;
			}

			bd.initBoardSize(pzl.cols, pzl.rows);

			if (!!pzl.body) {
				this.pflag = pzl.pflag;
				this.outbstr = pzl.body;
				switch (pzl.type) {
					case pzl.URL_PZPRV3:
					case pzl.URL_KANPENP:
						this.decodePzpr(pzl.URL_PZPRV3);
						break;
					case pzl.URL_PZPRAPP:
						this.decodePzpr(pzl.URL_PZPRAPP);
						break;
					case pzl.URL_KANPEN:
						this.fio = new puzzle.klass.FileIO();
						this.fio.dataarray = this.outbstr.replace(/_/g, " ").split("/");
						this.decodeKanpen();
						this.fio = null;
						break;
					case pzl.URL_HEYAAPP:
						this.decodeHeyaApp();
						break;
				}
			}

			bd.rebuildInfo();
		},
		encodeURL: function(type, mode) {
			var puzzle = this.puzzle,
				pid = puzzle.pid,
				bd = puzzle.board;
			var pzl = new pzpr.parser.URLData("", mode);

			type =
				type || pzl.URL_PZPRV3; /* type===pzl.URL_AUTO(0)もまとめて変換する */
			if (type === pzl.URL_KANPEN && pid === "lits") {
				type = pzl.URL_KANPENP;
			}

			this.outpflag = null;
			var variant = puzzle.getConfig("variant");
			this.outvariant = variant ? puzzle.getConfig("variantid") : null;
			this.outcols = bd.cols;
			this.outrows = bd.rows;
			this.outbstr = "";

			switch (type) {
				case pzl.URL_PZPRV3:
					this.encodePzpr(pzl.URL_PZPRV3);
					break;

				case pzl.URL_PZPRFILE:
					var lines = this.puzzle.getFileData(pzl.FILE_PZPRV3).split("\n");
					lines = lines.map(encodeURIComponent);
					this.outbstr = lines.join("/");
					break;

				case pzl.URL_PZPRAPP:
					throw Error("no implementation");

				case pzl.URL_KANPENP:
					if (!puzzle.info.exists.kanpen) {
						throw Error("no implementation");
					}
					this.encodePzpr(pzl.URL_PZPRAPP);
					this.outpflag = this.outpflag || "";
					break;

				case pzl.URL_KANPEN:
					this.fio = new puzzle.klass.FileIO();
					this.encodeKanpen();
					this.outbstr = this.fio.datastr
						.replace(/\r?\n/g, "/")
						.replace(/ /g, "_");
					this.fio = null;
					break;

				case pzl.URL_HEYAAPP:
					this.encodeHeyaApp();
					break;

				default:
					throw Error("invalid URL Type");
			}

			pzl.pid = pid;
			pzl.type = type;
			pzl.pflag = this.outpflag;
			pzl.variant = this.outvariant;
			pzl.cols = this.outcols;
			pzl.rows = this.outrows;
			pzl.body = this.outbstr;

			return pzl.generate();
		},

		// オーバーライド用
		decodePzpr: function(type) {
			throw Error("no implementation");
		},
		encodePzpr: function(type) {
			throw Error("no implementation");
		},
		decodeKanpen: function() {
			throw Error("no implementation");
		},
		encodeKanpen: function() {
			throw Error("no implementation");
		},
		decodeHeyaApp: function() {
			throw Error("no implementation");
		},
		encodeHeyaApp: function() {
			throw Error("no implementation");
		}
	}
});

// FileData.js

(function() {
	function throwNoImplementation() {
		throw Error("no implementation");
	}

	//---------------------------------------------------------------------------
	// ★FileIOクラス ファイルのデータ形式エンコード/デコードを扱う
	//---------------------------------------------------------------------------
	pzpr.classmgr.makeCommon({
		//---------------------------------------------------------
		FileIO: {
			filever: 0,
			lineseek: 0,
			dataarray: null,
			xmldoc: null,
			datastr: "",
			currentType: 0,

			//---------------------------------------------------------------------------
			// fio.filedecode()  ファイルデータ(文字列)からのデコード実行関数
			//---------------------------------------------------------------------------
			filedecode: function(datastr) {
				var puzzle = this.puzzle,
					bd = puzzle.board,
					pzl = pzpr.parser.parseFile(datastr, puzzle.pid);
				var filetype = (this.currentType = pzl.type);

				bd.initBoardSize(pzl.cols, pzl.rows);

				if (pzl.variant !== null) {
					puzzle.setConfig("variant", true);
					puzzle.setConfig("variantid", pzl.variant);
				}

				this.filever = pzl.filever;
				if (filetype !== pzl.FILE_PBOX_XML) {
					this.lineseek = 0;
					this.dataarray = pzl.body.split("\n");
				} else {
					this.xmldoc = pzl.body;
				}

				// メイン処理
				switch (filetype) {
					case pzl.FILE_PZPR:
						this.decodeData();
						if ((this.readLine() || "").match(/TrialData/)) {
							this.lineseek--;
							this.decodeTrial();
						}
						break;

					case pzl.FILE_PBOX:
						this.kanpenOpen();
						break;

					case pzl.FILE_PBOX_XML:
						this.kanpenOpenXML();
						break;
				}

				puzzle.metadata.update(pzl.metadata);
				if (pzl.history && filetype === pzl.FILE_PZPR) {
					puzzle.opemgr.decodeHistory(pzl.history);
				}

				bd.rebuildInfo();

				this.dataarray = null;
			},
			//---------------------------------------------------------------------------
			// fio.fileencode() ファイルデータ(文字列)へのエンコード実行関数
			//---------------------------------------------------------------------------
			fileencode: function(filetype, option) {
				var puzzle = this.puzzle,
					bd = puzzle.board;
				var pzl = new pzpr.parser.FileData("", puzzle.pid);

				this.currentType = filetype =
					filetype ||
					pzl.FILE_PZPR; /* type===pzl.FILE_AUTO(0)もまとめて変換する */
				option = option || {};

				this.filever = 0;
				this.datastr = "";
				if (filetype === pzl.FILE_PBOX_XML) {
					this.xmldoc = new DOMParser().parseFromString(
						'<?xml version="1.0" encoding="utf-8" ?><puzzle />',
						"text/xml"
					);
					var puzzlenode = this.xmldoc.querySelector("puzzle");
					puzzlenode.appendChild(this.createXMLNode("board"));
					puzzlenode.appendChild(this.createXMLNode("answer"));
				}

				// メイン処理
				switch (filetype) {
					case pzl.FILE_PZPR:
						this.encodeData();
						if (!option.history && option.trial && bd.trialstage > 0) {
							this.encodeTrial();
						}
						break;

					case pzl.FILE_PBOX:
						this.kanpenSave();
						break;

					case pzl.FILE_PBOX_XML:
						this.kanpenSaveXML();
						break;

					default:
						throw Error("invalid filetype");
				}

				pzl.type = filetype;
				pzl.filever = this.filever;
				pzl.cols = bd.cols;
				pzl.rows = bd.rows;
				if (filetype !== pzl.FILE_PBOX_XML) {
					pzl.body = this.datastr;
				} else {
					pzl.body = this.xmldoc;
				}
				pzl.metadata.update(puzzle.metadata);
				if (option.history && filetype === pzl.FILE_PZPR) {
					pzl.history = puzzle.opemgr.encodeHistory({ time: !!option.time });
				}

				this.datastr = "";

				return pzl.generate();
			},

			// オーバーライド用
			decodeData: throwNoImplementation,
			encodeData: throwNoImplementation,
			kanpenOpen: throwNoImplementation,
			kanpenSave: throwNoImplementation,
			kanpenOpenXML: throwNoImplementation,
			kanpenSaveXML: throwNoImplementation,

			//---------------------------------------------------------------------------
			// fio.decodeTrial() 仮置きデータを復旧する
			// fio.encodeTrial() 仮置きデータを出力する
			//---------------------------------------------------------------------------
			decodeTrial: function() {
				var opemgr = this.puzzle.opemgr;
				var bd = this.board;
				var len = this.readLine().match(/TrialData\((\d+)\)/)[1] | 0;
				for (var i = len - 1; i >= 0; i--) {
					var opes = [];
					var bd1 = bd.freezecopy();
					bd.allclear(false);
					this.decodeData();
					bd.compareData(bd1, function(group, c, a) {
						var obj = bd[group][c];
						var old = obj[a];
						var num = bd1[group][c][a];
						opes.push(new this.puzzle.klass.ObjectOperation(obj, a, old, num));
					});
					opemgr.history.unshift(opes);
					opemgr.history.unshift([
						new this.puzzle.klass.TrialEnterOperation(i, i + 1)
					]);
					opemgr.trialpos.unshift(i * 2);
					this.readLine(); // 次の"TrialData"文字列は読み捨て
				}
				opemgr.position = opemgr.history.length;
				opemgr.resumeTrial();
			},
			encodeTrial: function() {
				var opemgr = this.puzzle.opemgr,
					pos = opemgr.position;
				opemgr.disableRecord();
				for (var stage = this.board.trialstage; stage > 0; stage--) {
					this.writeLine("TrialData(" + stage + ")");
					opemgr.resumeGoto(opemgr.trialpos[stage - 1]);
					this.encodeData();
				}
				opemgr.resumeGoto(pos);
				opemgr.resumeTrial();
				opemgr.enableRecord();
			},

			//---------------------------------------------------------------------------
			// fio.readLine()    ファイルに書かれている1行の文字列を返す
			// fio.getItemList() ファイルに書かれている改行＋スペース区切りの
			//                   複数行の文字列を配列にして返す
			//---------------------------------------------------------------------------
			readLine: function() {
				this.lineseek++;
				return this.dataarray[this.lineseek - 1];
			},

			getItemList: function(rows) {
				var item = [],
					line;
				for (var i = 0; i < rows; i++) {
					if (!(line = this.readLine())) {
						continue;
					}
					var array1 = line.split(" ");
					for (var c = 0; c < array1.length; c++) {
						if (array1[c] !== "") {
							item.push(array1[c]);
						}
					}
				}
				return item;
			},

			//---------------------------------------------------------------------------
			// fio.writeLine()    ファイルに1行出力する
			//---------------------------------------------------------------------------
			writeLine: function(data) {
				if (typeof data === "number") {
					data = "" + data;
				} else {
					data = data || "";
				} // typeof data==='string'
				this.datastr += data + "\n";
			},

			//---------------------------------------------------------------------------
			// fio.decodeObj()     配列で、個別文字列から個別セルなどの設定を行う
			// fio.decodeCell()    配列で、個別文字列から個別セルの設定を行う
			// fio.decodeCross()   配列で、個別文字列から個別Crossの設定を行う
			// fio.decodeBorder()  配列で、個別文字列から個別Borderの設定を行う
			// fio.decodeCellExCell()  配列で、個別文字列から個別セル/ExCellの設定を行う
			//---------------------------------------------------------------------------
			decodeObj: function(func, group, startbx, startby, endbx, endby) {
				var bx = startbx,
					by = startby,
					step = 2;
				var item = this.getItemList((endby - startby) / step + 1);
				for (var i = 0; i < item.length; i++) {
					func.call(this, this.board.getObjectPos(group, bx, by), item[i]);

					bx += step;
					if (bx > endbx) {
						bx = startbx;
						by += step;
					}
					if (by > endby) {
						break;
					}
				}
			},
			decodeCell: function(func) {
				this.decodeObj(
					func,
					"cell",
					1,
					1,
					2 * this.board.cols - 1,
					2 * this.board.rows - 1
				);
			},
			decodeCross: function(func, isInset) {
				var inset = isInset ? 2 : 0;
				this.decodeObj(
					func,
					"cross",
					inset,
					inset,
					2 * this.board.cols - inset,
					2 * this.board.rows - inset
				);
			},
			decodeBorder: function(func, hasborder) {
				var puzzle = this.puzzle,
					bd = puzzle.board;
				if (!hasborder) {
					hasborder = bd.hasborder;
				}
				if (hasborder === 1) {
					this.decodeObj(
						func,
						"border",
						2,
						1,
						2 * bd.cols - 2,
						2 * bd.rows - 1
					);
					this.decodeObj(
						func,
						"border",
						1,
						2,
						2 * bd.cols - 1,
						2 * bd.rows - 2
					);
				} else if (hasborder === 2) {
					if (this.currentType === pzpr.parser.FILE_PZPR) {
						this.decodeObj(func, "border", 0, 1, 2 * bd.cols, 2 * bd.rows - 1);
						this.decodeObj(func, "border", 1, 0, 2 * bd.cols - 1, 2 * bd.rows);
					}
					// pencilboxでは、outsideborderの時はぱずぷれとは順番が逆になってます
					else if (this.currentType === pzpr.parser.FILE_PBOX) {
						this.decodeObj(func, "border", 1, 0, 2 * bd.cols - 1, 2 * bd.rows);
						this.decodeObj(func, "border", 0, 1, 2 * bd.cols, 2 * bd.rows - 1);
					}
				}
			},
			decodeCellExCell: function(func) {
				this.decodeObj(
					func,
					"obj",
					this.board.minbx + 1,
					this.board.minby + 1,
					this.board.maxbx - 1,
					this.board.maxby - 1
				);
			},

			//---------------------------------------------------------------------------
			// fio.encodeObj()     個別セルデータ等から個別文字列の設定を行う
			// fio.encodeCell()    個別セルデータから個別文字列の設定を行う
			// fio.encodeCross()   個別Crossデータから個別文字列の設定を行う
			// fio.encodeBorder()  個別Borderデータから個別文字列の設定を行う
			// fio.encodeCellExCell()  個別セル/ExCellデータから個別文字列の設定を行う
			//---------------------------------------------------------------------------
			encodeObj: function(func, group, startbx, startby, endbx, endby) {
				var step = 2;
				for (var by = startby; by <= endby; by += step) {
					var data = "";
					for (var bx = startbx; bx <= endbx; bx += step) {
						data += func.call(this, this.board.getObjectPos(group, bx, by));
					}
					this.writeLine(data);
				}
			},
			encodeCell: function(func) {
				this.encodeObj(
					func,
					"cell",
					1,
					1,
					2 * this.board.cols - 1,
					2 * this.board.rows - 1
				);
			},
			encodeCross: function(func, isInset) {
				var inset = isInset ? 2 : 0;
				this.encodeObj(
					func,
					"cross",
					inset,
					inset,
					2 * this.board.cols - inset,
					2 * this.board.rows - inset
				);
			},
			encodeBorder: function(func, hasborder) {
				var puzzle = this.puzzle,
					bd = puzzle.board;
				if (!hasborder) {
					hasborder = bd.hasborder;
				}
				if (hasborder === 1) {
					this.encodeObj(
						func,
						"border",
						2,
						1,
						2 * bd.cols - 2,
						2 * bd.rows - 1
					);
					this.encodeObj(
						func,
						"border",
						1,
						2,
						2 * bd.cols - 1,
						2 * bd.rows - 2
					);
				} else if (hasborder === 2) {
					if (this.currentType === pzpr.parser.FILE_PZPR) {
						this.encodeObj(func, "border", 0, 1, 2 * bd.cols, 2 * bd.rows - 1);
						this.encodeObj(func, "border", 1, 0, 2 * bd.cols - 1, 2 * bd.rows);
					}
					// pencilboxでは、outsideborderの時はぱずぷれとは順番が逆になってます
					else if (this.currentType === pzpr.parser.FILE_PBOX) {
						this.encodeObj(func, "border", 1, 0, 2 * bd.cols - 1, 2 * bd.rows);
						this.encodeObj(func, "border", 0, 1, 2 * bd.cols, 2 * bd.rows - 1);
					}
				}
			},
			encodeCellExCell: function(func) {
				this.encodeObj(
					func,
					"obj",
					this.board.minbx + 1,
					this.board.minby + 1,
					this.board.maxbx - 1,
					this.board.maxby - 1
				);
			},

			decodeFlags: function() {
				var flags = this.readLine().split(",");
				for (var i = 0; i < flags.length; i++) {
					this.puzzle.setConfig(flags[i], true);
				}
			},
			encodeFlags: function(flagnames) {
				var flags = [];
				for (var i = 0; i < flagnames.length; i++) {
					if (this.puzzle.getConfig(flagnames[i])) {
						flags.push(flagnames[i]);
					}
				}
				this.writeLine(flags.join(","));
			},

			//---------------------------------------------------------------------------
			// fio.decodeConfigFlag() Set a config bool based on the presence of a string
			// fio.encodeConfigFlag() Conditionally write a string
			//---------------------------------------------------------------------------

			decodeConfigFlag: function(flag, configkey, truevalue, falsevalue) {
				if (truevalue === undefined) {
					truevalue = true;
				}
				if (falsevalue === undefined) {
					falsevalue = !truevalue;
				}
				if (this.dataarray[this.lineseek] === flag) {
					this.puzzle.setConfig(configkey, truevalue);
					this.readLine();
				} else {
					this.puzzle.setConfig(configkey, falsevalue);
				}
			},
			encodeConfigFlag: function(flag, configkey, truevalue) {
				if (truevalue === undefined) {
					truevalue = true;
				}
				if (this.puzzle.getConfig(configkey) === truevalue) {
					this.writeLine(flag);
				}
			},

			//---------------------------------------------------------------------------
			// fio.decodeCellXMLBoard()  配列で、個別文字列から個別セルの設定を行う (XML board用)
			// fio.decodeCellXMLBrow()   配列で、個別文字列から個別セルの設定を行う (XML board用)
			// fio.decodeCellXMLArow()   配列で、個別文字列から個別セルの設定を行う (XML answer用)
			// fio.encodeCellXMLBoard()  個別セルデータから個別文字列の設定を行う (XML board用)
			// fio.encodeCellXMLBrow()   個別セルデータから個別文字列の設定を行う (XML board用)
			// fio.encodeCellXMLArow()   個別セルデータから個別文字列の設定を行う (XML answer用)
			// fio.createXMLNode()  指定されたattributeを持つXMLのノードを作成する
			//---------------------------------------------------------------------------
			decodeCellXMLBoard: function(func) {
				var nodes = this.xmldoc.querySelectorAll("board number");
				for (var i = 0; i < nodes.length; i++) {
					var node = nodes[i];
					var cell = this.board.getc(
						+node.getAttribute("c") * 2 - 1,
						+node.getAttribute("r") * 2 - 1
					);
					if (!cell.isnull) {
						func(cell, +node.getAttribute("n"));
					}
				}
			},
			encodeCellXMLBoard: function(func) {
				var boardnode = this.xmldoc.querySelector("board");
				var bd = this.board;
				for (var i = 0; i < bd.cell.length; i++) {
					var cell = bd.cell[i],
						val = func(cell);
					if (val !== null) {
						boardnode.appendChild(
							this.createXMLNode("number", {
								r: ((cell.by / 2) | 0) + 1,
								c: ((cell.bx / 2) | 0) + 1,
								n: val
							})
						);
					}
				}
			},

			PBOX_ADJUST: 0,
			decodeCellXMLBrow: function(func) {
				this.decodeCellXMLrow_com(func, "board", "brow");
			},
			encodeCellXMLBrow: function(func) {
				this.encodeCellXMLrow_com(func, "board", "brow");
			},
			decodeCellXMLArow: function(func) {
				this.decodeCellXMLrow_com(func, "answer", "arow");
			},
			encodeCellXMLArow: function(func) {
				this.encodeCellXMLrow_com(func, "answer", "arow");
			},
			decodeCellXMLrow_com: function(func, parentnodename, targetnodename) {
				var rownodes = this.xmldoc.querySelectorAll(
					parentnodename + " " + targetnodename
				);
				var ADJ = this.PBOX_ADJUST;
				for (var b = 0; b < rownodes.length; b++) {
					var bx = 1 - ADJ,
						by = +rownodes[b].getAttribute("row") * 2 - 1 - ADJ;
					var nodes = rownodes[b].childNodes;
					for (var i = 0; i < nodes.length; i++) {
						if (nodes[i].nodeType !== 1) {
							continue;
						}
						var name = nodes[i].nodeName,
							n = nodes[i].getAttribute("n") || 1;
						if (name === "z") {
							name = "n0";
						} else if (name === "n") {
							name = "n" + +nodes[i].getAttribute("v");
						}
						for (var j = 0; j < n; j++) {
							func(this.board.getobj(bx, by), name);
							bx += 2;
						}
					}
				}
			},
			encodeCellXMLrow_com: function(func, parentnodename, targetnodename) {
				var boardnode = this.xmldoc.querySelector(parentnodename);
				var ADJ = this.PBOX_ADJUST;
				var bd = this.board;
				for (var by = 1 - ADJ; by <= bd.maxby; by += 2) {
					var rownode = this.createXMLNode(targetnodename, {
						row: (((by + ADJ) / 2) | 0) + 1
					});
					for (var bx = 1 - ADJ; bx <= bd.maxbx; bx += 2) {
						var piece = bd.getobj(bx, by),
							nodename = func(piece),
							node;
						if (nodename.match(/n(\d\d+)/) || nodename.match(/n(\-\d+)/)) {
							node = this.createXMLNode("n", { v: RegExp.$1 });
						} else if (nodename === "n0") {
							node = this.createXMLNode("z");
						} else {
							node = this.createXMLNode(nodename);
						}
						rownode.appendChild(node);
					}
					boardnode.appendChild(rownode);
				}
			},

			createXMLNode: function(name, attrs) {
				var node = this.xmldoc.createElement(name);
				if (!!attrs) {
					for (var i in attrs) {
						node.setAttribute(i, attrs[i]);
					}
				}
				return node;
			}
		}
	});
})();

// Answer.js v3.4.1

//---------------------------------------------------------------------------
// ★AnsCheckクラス 答えチェック関連の関数を扱う
//---------------------------------------------------------------------------

// 回答チェッククラス
// AnsCheckクラス
pzpr.classmgr.makeCommon({
	//---------------------------------------------------------
	AnsCheck: {
		initialize: function() {
			this.inCheck = false;
			this.checkOnly = false;

			this.makeCheckList();
		},
		failcodemode: void 0,
		failcode: void 0,
		_info: void 0,
		checklist: [],

		//---------------------------------------------------------------------------
		// ans.makeCheckList() 最初にchecklistの配列を生成する
		//---------------------------------------------------------------------------
		makeCheckList: function() {
			/* 当該パズルで使用しないchecklistのアイテムをフィルタリング */
			var checklist = this.checklist,
				order = [];
			for (var i = 0; i < checklist.length; i++) {
				var item = checklist[i],
					isexist = true,
					prio = 0;
				if (item.match("@")) {
					isexist = pzpr.util.checkpid(
						item.substr(item.indexOf("@") + 1),
						this.puzzle.pid
					);
					item = item.substr(0, item.indexOf("@"));
				}
				if (isexist) {
					prio = (item.match(/\+/) || []).length;
					item = item.replace(/\+/g, "");

					if (!(item in this)) {
						throw Error("Function " + item + " does not exist in AnsCheck");
					}

					order.push([this[item], prio]);
				}
			}

			this.checklist_normal = [];
			for (var i = 0; i < order.length; i++) {
				this.checklist_normal.push(order[i][0]);
			}

			/* autocheck用のエラーをソートする */
			order = order.sort(function(a, b) {
				return b[1] - a[1];
			});
			this.checklist_auto = [];
			for (var i = 0; i < order.length; i++) {
				this.checklist_auto.push(order[i][0]);
			}
		},

		//---------------------------------------------------------------------------
		// ans.check()     答えのチェックを行う
		// ans.checkAns()  答えのチェックを行い、エラーコードを返す(nullはNo Error)
		//---------------------------------------------------------------------------
		check: function(activemode) {
			var puzzle = this.puzzle,
				bd = this.board;
			this.inCheck = true;

			if (!!activemode) {
				this.checkOnly = false;
				this.checkAns(false);
				if (!this.failcode.complete) {
					bd.haserror = true;
					puzzle.redraw(true); /* 描画キャッシュを破棄して描画し直す */
				}
			} else if (this.failcode === void 0 || this.failcodemode !== activemode) {
				/* activemodeでなく、前回の判定結果が残っていない場合はチェックします */
				bd.disableSetError();
				this.checkOnly = true;
				this.checkAns(activemode === false);
				this.failcodemode = activemode;
				bd.enableSetError();
			}
			/* activemodeでなく、前回の判定結果が残っている場合はそれを返します */

			this.inCheck = false;
			return this.failcode;
		},
		checkAns: function(break_if_error) {
			this.failcode = new this.klass.CheckInfo();
			var checkSingleError =
				!this.puzzle.getConfig("multierr") || break_if_error;
			var checklist =
				this.checkOnly && checkSingleError
					? this.checklist_auto
					: this.checklist_normal;
			for (var i = 0; i < checklist.length; i++) {
				checklist[i].call(this);
				if (checkSingleError && this.failcode.length > 0) {
					break;
				}
			}
			if (!break_if_error) {
				this.failcode.text = this.failcode.gettext();
			}
		},

		//---------------------------------------------------------------------------
		// ans.resetCache() 前回のエラー情報等を破棄する
		//---------------------------------------------------------------------------
		resetCache: function() {
			this.failcode = this.failcodemode = void 0;
			this._info = {};
		}
	},

	//---------------------------------------------------------------------------
	// ★CheckInfoクラス ans.checkで返すインスタンスのクラス
	//---------------------------------------------------------------------------
	CheckInfo: {
		initialize: function(code) {
			this.add(code);
		},
		complete: true,
		undecided: false,
		text: "",
		length: 0,
		lastcode: null,

		add: function(code) {
			if (!code) {
				return;
			}
			if (code !== this.lastcode) {
				this[this.length++] = this.lastcode = code;
			}
			this.complete = false;
		},
		gettext: function(lang) {
			var puzzle = this.puzzle,
				textlist = pzpr.failcodes,
				texts = [];
			var langcode = (lang || pzpr.lang) === "ja" ? "ja" : "en";
			if (this.length === 0) {
				return textlist[langcode].complete;
			}
			for (var i = 0; i < this.length; i++) {
				var key = this[i];

				var specKey = key + "." + this.pid;
				var baseKey = key + "." + this.pidbase;

				if (key in puzzle.faillist) {
					key = puzzle.faillist[key];
				} else if (specKey in textlist.en) {
					key = specKey;
				} else if (baseKey in textlist.en) {
					key = baseKey;
				}

				var textitem =
					textlist[langcode][key] ||
					textlist.en[key] ||
					textlist[langcode].invalid;
				texts.push(textitem);
			}
			return texts.join("\n");
		},
		setUndecided: function() {
			this.undecided = true;
		}
	},

	//---------------------------------------------------------------------------
	// ★FailCodeクラス 答えの文字列を扱う
	//---------------------------------------------------------------------------
	// FailCodeクラス
	FailCode: {}
});

// Operation.js v3.4.1

// 入力情報管理クラス
// Operationクラス
pzpr.classmgr.makeCommon({
	//---------------------------------------------------------------------------
	// ★Operation(派生)クラス 単体の操作情報を保持する
	//---------------------------------------------------------------------------
	Operation: {
		external: false,

		initialize: function() {
			this.manager = this.puzzle.opemgr;

			if (arguments.length > 0) {
				var args = Array.prototype.slice.call(arguments);
				this.setData.apply(this, args);
			}
		},

		reqReset: false,

		//---------------------------------------------------------------------------
		// ope.setData()  オブジェクトのデータを設定する
		// ope.decode()   ファイル出力された履歴の入力用ルーチン
		// ope.toString() ファイル出力する履歴の出力用ルーチン
		// ope.toJSON()   ファイル保存時に使用するルーチン
		//---------------------------------------------------------------------------
		setData: function(old, num) {
			this.old = old;
			this.num = num;
		},
		decode: function(strs) {
			return false;
		},
		toString: function() {
			return "";
		},
		toJSON: function() {
			return this.toString();
		},
		broadcast: function() {},

		//---------------------------------------------------------------------------
		// ope.undo()  操作opeを一手前に戻す
		// ope.redo()  操作opeを一手進める
		// ope.exec()  操作opeを反映する
		//---------------------------------------------------------------------------
		undo: function() {
			this.exec(this.old);
		},
		redo: function() {
			this.exec(this.num);
		},
		exec: function(num) {}
	},

	// ObjectOperationクラス
	"ObjectOperation:Operation": {
		group: "",
		property: "",
		pos: null,

		/* 変換テーブル */
		STRGROUP: {
			C: "cell",
			X: "cross",
			B: "border",
			E: "excell"
		},
		STRPROP: {
			U: "ques",
			N: "qnum",
			Z: "qnum2",
			C: "qchar",
			M: "anum",
			D: "qdir",
			A: "qans",
			S: "qsub",
			K: "qcmp",
			B: "snum",
			L: "line"
		},

		//---------------------------------------------------------------------------
		// ope.setData()  オブジェクトのデータを設定する
		// ope.decode()   ファイル出力された履歴の入力用ルーチン
		// ope.toString() ファイル出力する履歴の出力用ルーチン
		//---------------------------------------------------------------------------
		setData: function(piece, property, old, num) {
			this.group = piece.group;
			this.property = property;
			this.bx = piece.bx;
			this.by = piece.by;
			this.old = old;
			this.num = num;
			if (property.length > 4 && property.substr(0, 4) === "snum") {
				this.property = "snum";
				this.pos = property.substr(4);
			}
		},
		decode: function(strs) {
			this.group = this.STRGROUP[strs[0].charAt(0)];
			this.property = this.STRPROP[strs[0].charAt(1)];
			if (!this.group || !this.property) {
				return false;
			}
			this.pos =
				strs[0].substr(0, 2) === "CB" && strs[0].length > 2
					? +strs[0].charAt(2)
					: null;
			this.bx = +strs[1];
			this.by = +strs[2];
			this.old = +strs[3];
			this.num = +strs[4];
			return true;
		},
		toString: function() {
			var prefix = "";
			for (var i in this.STRGROUP) {
				if (this.group === this.STRGROUP[i]) {
					prefix += i;
					break;
				}
			}
			for (var i in this.STRPROP) {
				if (this.property === this.STRPROP[i]) {
					prefix += i;
					break;
				}
			}
			if (prefix === "CB" && this.pos !== null) {
				prefix += this.pos;
			}
			return [prefix, this.bx, this.by, this.old, this.num].join(",");
		},
		broadcast: function() {
			if (this.external) {
				return;
			}
			this.puzzle.emit("cellop", this.toJSON());
		},

		//---------------------------------------------------------------------------
		// ope.isModify()  前の履歴をこのオブジェクトで更新するかどうか確認する
		//---------------------------------------------------------------------------
		isModify: function(lastope) {
			// 前回と同じ場所なら前回の更新のみ
			var property = this.property;
			if (
				lastope.group === this.group &&
				lastope.property === this.property &&
				lastope.num === this.old &&
				lastope.bx === this.bx &&
				lastope.by === this.by &&
				(property === "qnum" ||
					property === "qnum2" ||
					property === "qchar" ||
					property === "anum" ||
					(property === "snum" && lastope.pos === this.pos))
			) {
				lastope.num = this.num;
				return true;
			}
			return false;
		},

		isNoop: function() {
			return this.num === this.old;
		},

		//---------------------------------------------------------------------------
		// ope.exec()  操作opeを反映する。ope.undo(),ope.redo()から内部的に呼ばれる
		//---------------------------------------------------------------------------
		getPiece: function() {
			var bd = this.board;
			return bd.getObjectPos(this.group, this.bx, this.by);
		},
		exec: function(num) {
			var piece = this.getPiece(),
				bd = this.board;
			if (this.group !== piece.group) {
				return true;
			}

			// force setting data, to bypass prehook checks
			if (this.pos === null) {
				piece.setdata(this.property, num, true);
			} else {
				piece.setdata2(this.property, this.pos, num, true);
			}
			piece.draw();

			switch (this.property) {
				case "qcmp":
					bd.cell.each(function(cell) {
						if (piece === cell.base) {
							cell.draw();
						}
					});
					break;
				default:
					this.puzzle.checker.resetCache();
					break;
			}
		}
	},

	"ObjectOperation2:Operation": {
		setData: function(cell, old, val) {
			this.bx = cell.bx;
			this.by = cell.by;
			this.old = old;
			this.val = val;
			this.property = "qnums";
		},
		decode: function(strs) {
			if (strs.shift() !== "CR") {
				return false;
			}
			this.bx = +strs.shift();
			this.by = +strs.shift();
			var str = strs.join(",");
			var strs2 = str.substr(1, str.length - 2).split(/\],\[/);
			if (strs2[0].length === 0) {
				this.old = [];
			} else {
				this.old = strs2[0].split(/,/);
				for (var i = 0; i < this.old.length; i++) {
					this.old[i] = +this.old[i];
				}
			}
			if (strs2[1].length === 0) {
				this.val = [];
			} else {
				this.val = strs2[1].split(/,/);
				for (var i = 0; i < this.val.length; i++) {
					this.val[i] = +this.val[i];
				}
			}
			return true;
		},
		toString: function() {
			return [
				"CR",
				this.bx,
				this.by,
				"[" + this.old.join(",") + "]",
				"[" + this.val.join(",") + "]"
			].join(",");
		},

		isModify: function(lastope) {
			// 前回と同じ場所なら前回の更新のみ
			if (
				lastope.property === this.property &&
				lastope.bx === this.bx &&
				lastope.by === this.by &&
				this.puzzle.pzpr.util.sameArray(lastope.val, this.old)
			) {
				lastope.val = this.val;
				return true;
			}
			return false;
		},

		undo: function() {
			this.exec(this.old);
		},
		redo: function() {
			this.exec(this.val);
		},
		exec: function(val) {
			var puzzle = this.puzzle,
				cell = puzzle.board.getobj(this.bx, this.by);
			cell.setQnums(val);
			cell.draw();
			puzzle.checker.resetCache();
		}
	},

	// BoardClearOperationクラス
	"BoardClearOperation:Operation": {
		prefix: "AC",
		reqReset: true,

		//---------------------------------------------------------------------------
		// ope.decode()   ファイル出力された履歴の入力用ルーチン
		// ope.toString() ファイル出力する履歴の出力用ルーチン
		//---------------------------------------------------------------------------
		decode: function(strs) {
			if (strs[0] !== this.prefix) {
				return false;
			}
			return true;
		},
		toString: function() {
			return this.prefix;
		}
	},

	// BoardAdjustOperationクラス
	"BoardAdjustOperation:Operation": {
		prefix: "AJ",
		reqReset: true,
		//---------------------------------------------------------------------------
		// ope.setData()  オブジェクトのデータを設定する
		// ope.decode()   ファイル出力された履歴の入力用ルーチン
		// ope.toString() ファイル出力する履歴の出力用ルーチン
		//---------------------------------------------------------------------------
		setData: function(name) {
			this.old = this.num = name;
		},
		decode: function(strs) {
			if (strs[0] !== this.prefix) {
				return false;
			}
			this.old = this.num = strs[1];
			return true;
		},
		toString: function() {
			return [this.prefix, this.num].join(",");
		},

		//---------------------------------------------------------------------------
		// ope.undo()  操作opeを一手前に戻す
		// ope.redo()  操作opeを一手進める
		// ope.exec()  操作opeを反映する。ope.undo(),ope.redo()から内部的に呼ばれる
		//---------------------------------------------------------------------------
		undo: function() {
			var key_undo = this.board.exec.boardtype[this.old][0];
			this.exec(key_undo);
		},
		redo: function() {
			var key_redo = this.board.exec.boardtype[this.num][1];
			this.exec(key_redo);
		},
		exec: function(num) {
			var puzzle = this.puzzle,
				bd = puzzle.board,
				d = { x1: 0, y1: 0, x2: 2 * bd.cols, y2: 2 * bd.rows };
			bd.exec.execadjust_main(num, d);
			puzzle.redraw();
		}
	},

	// BoardFlipOperationクラス
	"BoardFlipOperation:Operation": {
		prefix: "AT",
		reqReset: true,
		area: {},
		//---------------------------------------------------------------------------
		// ope.setData()  オブジェクトのデータを設定する
		// ope.decode()   ファイル出力された履歴の入力用ルーチン
		// ope.toString() ファイル出力する履歴の出力用ルーチン
		//---------------------------------------------------------------------------
		setData: function(d, name) {
			this.area = d;
			this.old = this.num = name;
		},
		decode: function(strs) {
			if (strs[0] !== this.prefix) {
				return false;
			}
			this.old = this.num = strs[1];
			this.area.x1 = +strs[2];
			this.area.y1 = +strs[3];
			this.area.x2 = +strs[4];
			this.area.y2 = +strs[5];
			return true;
		},
		toString: function() {
			var d = this.area;
			return [this.prefix, this.num, d.x1, d.y1, d.x2, d.y2].join(",");
		},

		//---------------------------------------------------------------------------
		// ope.undo()  操作opeを一手前に戻す
		// ope.redo()  操作opeを一手進める
		// ope.exec()  操作opeを反映する。ope.undo(),ope.redo()から内部的に呼ばれる
		//---------------------------------------------------------------------------
		undo: function() {
			// とりあえず盤面全部の対応だけ
			var d0 = this.area,
				d = { x1: d0.x1, y1: d0.y1, x2: d0.x2, y2: d0.y2 };
			var key_undo = this.board.exec.boardtype[this.old][0];
			if (key_undo & this.board.exec.TURN) {
				var tmp = d.x1;
				d.x1 = d.y1;
				d.y1 = tmp;
				tmp = d.x2;
				d.x2 = d.y2;
				d.y2 = tmp;
			}
			this.exec(key_undo, d);
		},
		redo: function() {
			// とりあえず盤面全部の対応だけ
			var d0 = this.area,
				d = { x1: d0.x1, y1: d0.y1, x2: d0.x2, y2: d0.y2 };
			var key_redo = this.board.exec.boardtype[this.num][1];
			this.exec(key_redo, d);
		},
		exec: function(num, d) {
			var puzzle = this.puzzle;
			puzzle.board.exec.execadjust_main(num, d);
			puzzle.redraw();
		}
	},

	// TrialEnterOperationクラス
	"TrialEnterOperation:Operation": {
		setData: function(old, num) {
			this.old = old;
			this.num = num;
		},
		undo: function() {
			this.manager.position--;
			this.manager.resumeTrial();
			this.manager.position++;

			this.manager.trialpos.pop();
			this.manager.emitTrial(this.old);
		},
		redo: function() {
			this.manager.trialpos.push(this.manager.position);
			this.manager.emitTrial(this.num);
		},

		decode: function(strs) {
			if (strs[0] !== "TE") {
				return false;
			}
			this.old = +strs[1];
			this.num = +strs[2];
			return true;
		},
		toString: function() {
			return ["TE", this.old, this.num].join(",");
		}
	},

	// TrialFinalizeOperationクラス
	"TrialFinalizeOperation:Operation": {
		num: [],
		setData: function(old) {
			this.old = old; // trialpos array
		},
		exec: function(num) {
			this.manager.trialpos = num.concat();
			if (num.length === 0) {
				this.board.trialclear();
			} else {
				this.manager.position--;
				this.manager.resumeTrial();
				this.manager.position++;
			}
			this.manager.emitTrial(num.length);
			this.puzzle.redraw();
		},

		decode: function(strs) {
			if (strs[0] !== "TF") {
				return false;
			}
			strs.shift();
			this.old = JSON.parse(strs.join(","));
			return true;
		},
		toString: function() {
			return "TF,[" + this.old.join(",") + "]";
		}
	},

	//---------------------------------------------------------------------------
	// ★OperationListクラス OperationのListと時刻を保持する
	//---------------------------------------------------------------------------
	OperationList: {
		initialize: function() {
			this.time = this.puzzle.getTime();
			this.length = 0;
		},
		push: function(ope) {
			this[this.length++] = ope;
		},
		pop: function() {
			if (this.length > 0) {
				var ope = this[this.length - 1];
				delete this[this.length - 1];
				this.length--;
				return ope;
			}
			return null;
		},
		some: function(func) {
			return Array.prototype.slice.call(this).some(func);
		}
		//	toString : function(){
		//		return Array.prototype.toString.call(this);
		//	}
	},

	//---------------------------------------------------------------------------
	// ★OperationManagerクラス 操作情報を扱い、Undo/Redoの動作を実装する
	//---------------------------------------------------------------------------
	// OperationManagerクラス
	OperationManager: {
		initialize: function() {
			this.lastope = null; // this.opeの最後に追加されたOperationへのポインタ
			this.history = []; // OperationListのオブジェクトを保持する配列
			this.position = 0; // 現在の表示操作番号を保持する
			this.trialpos = []; // TrialModeの位置を保持する配列
			this.disEmitTrial = 0; // Trial eventの呼び出し有効無効フラグ
			this.savedStarts = [];

			this.broken = false; // "以前の操作"を消して元に戻れなくなった状態
			this.initpos = 0; // 盤面初期化時のposition

			this.disrec = 0; // このクラスからの呼び出し時は1にする
			this.disCombine = false; // 数字がくっついてしまうので、それを一時的に無効にするためのフラグ
			this.forceRecord = false; // 強制的に登録する(盤面縮小時限定)
			this.changeflag = false; // 操作が行われたらtrueにする(mv.notInputted()用)
			this.chainflag = false; // 同じope直下の配列に新しいOperationオブジェクトを追加する

			this.enableUndo = false; // Undoできる状態か？
			this.enableRedo = false; // Redoできる状態か？
			this.limitTrialUndo = false; // 仮置きモードでUndoを止める状態かどうか

			this.undoExec = false; // Undo中
			this.redoExec = false; // Redo中
			this.reqReset = false; // Undo/Redo時に盤面回転等が入っていた時、resize,rebuildInfo関数のcallを要求する

			this.enableNetwork = true;

			var classes = this.klass;
			this.operationlist = [
				classes.ObjectOperation,
				classes.ObjectOperation2,
				classes.BankEditOperation,
				classes.BankReplaceOperation,
				classes.BankPieceOperation,
				classes.BoardClearOperation,
				classes.BoardAdjustOperation,
				classes.BoardFlipOperation,
				classes.TrialEnterOperation,
				classes.TrialFinalizeOperation
			];
			this.addExtraOperation();
		},
		addExtraOperation: function() {},

		getStarts: function() {
			var starts = [];
			for (var i = 0; i < this.trialpos.length; i++) {
				var pos = this.trialpos[i];
				// it appears that the first input is always
				// at index +1
				if (pos + 1 < this.history.length) {
					var ope = this.history[pos + 1][0];
					if (!!ope.getPiece) {
						starts.push(ope.getPiece());
					}
				}
			}
			return starts;
		},
		updateStarts: function() {
			var oldstarts = this.savedStarts;
			var count;
			for (
				count = oldstarts.length;
				count > 0 && oldstarts[count - 1].isnull;
				count--
			) {}

			var starts = this.getStarts();
			if (count === starts.length) {
				// this implies that nothing changed,
				// assuming updateStarts gets called regularly
				return;
			}
			for (var i = 0; i < starts.length; i++) {
				this.savedStarts[i] = starts[i];
			}
			// keep the full array length around since that's what we use to
			// key the markers, hence to hide
			for (var i = starts.length; i < this.savedStarts.length; i++) {
				this.savedStarts[i] = new this.puzzle.board.klass.BoardPiece();
			}
			// this is more redraws than we need technically
			for (var i = 0; i < oldstarts.length; i++) {
				oldstarts[i].draw();
			}
			for (var i = 0; i < this.savedStarts.length; i++) {
				this.savedStarts[i].draw();
			}
		},

		//---------------------------------------------------------------------------

		// um.disableRecord()  操作の登録を禁止する
		// um.enableRecord()   操作の登録を許可する
		// um.checkexec()      html上の[戻][進]ボタンを押すことが可能か設定する
		// um.allerase()       記憶していた操作を全て破棄する
		// um.newOperation()   マウス、キー入力開始時に呼び出す
		//---------------------------------------------------------------------------

		// 今この関数でレコード禁止になるのは、UndoRedo時、URLdecode、fileopen、adjustGeneral/Special時
		// 連動して実行しなくなるのはaddOpe().
		//  -> ここで使っているUndo/RedoとaddOpe以外はsetQues系関数を使用しないように変更
		//     変な制限事項がなくなるし、動作速度にもかなり効くしね
		disableRecord: function() {
			this.disrec++;
		},
		enableRecord: function() {
			if (this.disrec > 0) {
				this.disrec--;
			}
		},

		checkexec: function() {
			if (this.history === void 0) {
				return;
			}

			this.checkenable();

			this.puzzle.emit("history");
		},
		atStartOfTrial: function() {
			return (
				this.trialpos.length > 0 &&
				this.position <= this.trialpos[this.trialpos.length - 1] + 1
			);
		},
		checkenable: function() {
			if (this.limitTrialUndo && this.trialpos.length > 0) {
				this.enableUndo = !this.atStartOfTrial();
			} else {
				this.enableUndo = this.position > 0;
			}
			this.enableRedo = this.position < this.history.length;

			this.board.trialstage = this.trialpos.length;
		},
		allerase: function() {
			this.lastope = null;
			this.history = [];
			this.position = 0;
			this.broken = false;
			this.initpos = 0;
			this.changeflag = false;
			this.chainflag = false;
			this.checkexec();
			this.trialpos = [];
			this.limitTrialUndo = false;
			this.puzzle.checker.resetCache();
		},
		newOperation: function() {
			this.changeflag = false;
			this.chainflag = false;
		},
		newChain: function() {
			this.chainflag = false;
		},

		//---------------------------------------------------------------------------
		// opemgr.isModified()     操作がファイル等に保存されていないか確認する
		// opemgr.resetModifiedState() ファイルに保存された時などに保存した状態にする
		//---------------------------------------------------------------------------
		isModified: function() {
			return this.broken || this.initpos < this.position;
		},
		resetModifiedState: function() {
			this.broken = false;
			this.initpos = this.position;
		},

		//---------------------------------------------------------------------------
		// opemgr.removeDescendant()  現在以降の履歴を消去する
		//---------------------------------------------------------------------------
		removeDescendant: function() {
			if (this.position < this.initpos) {
				this.broken = true;
			}
			for (var i = this.history.length - 1; i >= this.position; i--) {
				this.history.pop();
			}
			this.position = this.history.length;
			this.chainflag = false;
		},

		//---------------------------------------------------------------------------
		// um.add()  指定された操作を追加する(共通操作)
		//---------------------------------------------------------------------------
		add: function(newope) {
			if (!this.puzzle.ready || (!this.forceRecord && this.disrec > 0)) {
				return;
			}

			newope.broadcast();

			/* Undoした場所で以降の操作がある時に操作追加された場合、以降の操作は消去する */
			if (this.enableRedo) {
				this.removeDescendant();
			}

			/* 前の履歴を更新するかどうか判定 */
			var puzzle = this.puzzle;
			if (
				this.disCombine ||
				!this.lastope ||
				!newope.isModify ||
				!newope.isModify(this.lastope)
			) {
				/* 履歴を追加する */
				if (!this.chainflag) {
					this.history.push(new this.klass.OperationList());
					this.position++;
					this.chainflag = true;
				}
				this.history[this.history.length - 1].push(newope);
				this.lastope = newope;
				this.updateStarts();
			} else {
				/* merged into previous operation, remove if noop */
				if (this.lastope.isNoop && this.lastope.isNoop()) {
					if (this.history[this.history.length - 1].length <= 1) {
						this.history.pop();
						this.position--;
					} else {
						this.history[this.history.length - 1].pop();
					}
					this.lastope = null;
				}
			}

			if (newope.property !== "qcmp" && newope.property !== "snum") {
				puzzle.checker.resetCache();
			}
			this.changeflag = true;
			this.checkexec();
		},

		//---------------------------------------------------------------------------
		// um.decodeHistory() オブジェクトを履歴情報に変換する
		// um.encodeHistory() 履歴情報をオブジェクトに変換する
		//---------------------------------------------------------------------------
		decodeHistory: function(historyinfo) {
			this.allerase();

			this.initpos = this.position = historyinfo.current || 0;
			this.history = [];
			var datas = historyinfo.datas || [];
			for (var i = 0, len = datas.length; i < len; i++) {
				var opelist = new this.klass.OperationList();
				this.history.push(opelist);
				var array = datas[i];
				if (array.time !== void 0) {
					opelist.time = array.time;
					array = array.ope;
				}
				for (var j = 0, len2 = array.length; j < len2; j++) {
					var strs = array[j].split(/,/);
					var ope = null,
						List = this.operationlist;
					for (var k = 0; k < List.length; k++) {
						var ope1 = new List[k]();
						if (ope1.decode(strs)) {
							ope = ope1;
							break;
						}
					}
					if (!!ope) {
						opelist.push(ope);
						this.lastope = ope;
					}
				}
			}

			this.checkexec();

			this.trialpos = historyinfo.trialpos || [];
			if (this.trialpos.length > 0) {
				this.resumeTrial();
				this.limitTrialUndo = true;
			}
		},
		encodeHistory: function(extoption) {
			extoption = extoption || {};
			this.initpos = this.position;
			var historyinfo = {
				type: "pzpr",
				version: 0.4
			};
			if (extoption.time) {
				historyinfo.time = this.puzzle.getTime();
			}
			if (this.history.length > 0) {
				historyinfo.current = this.position;
				if (this.trialpos.length > 0) {
					historyinfo.trialpos = this.trialpos;
				}
				var history = [];
				for (var i = 0; i < this.history.length; ++i) {
					var array = Array.prototype.slice.call(this.history[i]);
					if (!extoption.time) {
						history.push(array);
					} else {
						history.push({ ope: array, time: this.history[i].time });
					}
				}
				historyinfo.datas = history;
			}
			return historyinfo;
		},

		//---------------------------------------------------------------------------
		// opemgr.undo()  Undoを実行する
		// opemgr.redo()  Redoを実行する
		//---------------------------------------------------------------------------
		undo: function() {
			if (!this.enableUndo) {
				return false;
			}
			var opes = this.history[this.position - 1];
			this.reqReset = this.checkReqReset(opes);
			this.preproc();
			this.undoCore();
			this.postproc();
			return this.enableUndo;
		},
		redo: function() {
			if (!this.enableRedo) {
				return false;
			}
			var opes = this.history[this.position];
			this.reqReset = this.checkReqReset(opes);
			this.preproc();
			this.redoCore();
			this.postproc();
			return this.enableRedo;
		},

		//---------------------------------------------------------------------------
		// opemgr.undoCore()  Undoを実行する(preproc/postprocなし)
		// opemgr.redoCore()  Redoを実行する(preproc/postprocなし)
		// opemgr.resumeGoto()  指定された履歴の位置まで移動する(preproc/postprocなし)
		//---------------------------------------------------------------------------
		undoCore: function() {
			this.undoExec = true;
			var opes = this.history[this.position - 1];
			for (var i = opes.length - 1; i >= 0; i--) {
				if (!!opes[i]) {
					opes[i].undo();
				}
			}
			this.position--;
			this.undoExec = false;
		},
		redoCore: function() {
			this.redoExec = true;
			var opes = this.history[this.position];
			for (var i = 0; i < opes.length; ++i) {
				if (!!opes[i]) {
					opes[i].redo();
				}
			}
			this.position++;
			this.redoExec = false;
		},
		resumeGoto: function(pos) {
			if (pos < this.position) {
				while (pos < this.position) {
					this.undoCore();
				}
			} else if (this.position < pos) {
				while (this.position < pos) {
					this.redoCore();
				}
			}
			this.checkenable();
		},

		//---------------------------------------------------------------------------
		// um.checkReqReset() 盤面全体に影響する処理が含まれているかどうか判定する
		// um.preproc()  Undo/Redo実行前の処理を行う
		// um.postproc() Undo/Redo実行後の処理を行う
		//---------------------------------------------------------------------------
		checkReqReset: function(opes) {
			return opes.some(function(ope) {
				return ope.reqReset;
			});
		},
		preproc: function(opes) {
			var puzzle = this.puzzle,
				bd = puzzle.board;
			this.disableRecord();

			puzzle.painter.suspend();
			puzzle.errclear();
			this.updateStarts();
			if (this.reqReset) {
				bd.disableInfo();
			}
		},
		postproc: function() {
			var puzzle = this.puzzle,
				bd = puzzle.board;
			if (this.reqReset) {
				bd.setposAll();
				bd.setminmax();
				bd.enableInfo();
				bd.rebuildInfo();
				puzzle.redraw(true);
				puzzle.emit("adjust");
			}
			puzzle.painter.unsuspend();

			this.enableRecord();
			this.checkexec();
		},

		//---------------------------------------------------------------------------
		// opemgr.enterTrial()   TrialModeにする
		// opemgr.acceptTrial()  現在のTrial状態を確定する
		// opemgr.rejectTrial()  Trial状態と履歴を破棄する
		// opemgr.resumeTrial()  ファイル読み込み時などにTrial状態を復帰する
		// opemgr.emtiTrial()    trial eventを呼び出す
		//---------------------------------------------------------------------------
		enterTrial: function() {
			if (this.atStartOfTrial()) {
				return;
			}
			this.newOperation();
			this.add(
				new this.puzzle.klass.TrialEnterOperation(
					this.trialpos.length,
					this.trialpos.length + 1
				)
			);
			this.trialpos.push(this.position - 1);
			this.limitTrialUndo = true;
			this.checkexec();
			this.newOperation();
			this.emitTrial();
		},
		acceptTrial: function() {
			if (this.trialpos[this.trialpos.length - 1] + 1 === this.position) {
				this.position--;
				this.removeDescendant();
				this.trialpos.pop();
			}
			if (this.trialpos.length > 0) {
				this.newOperation();
				this.add(new this.puzzle.klass.TrialFinalizeOperation(this.trialpos));
				this.board.trialclear();
			}
			this.trialpos = [];
			this.limitTrialUndo = false;
			this.removeDescendant();
			this.checkexec();
			this.newOperation();
			this.emitTrial();
		},
		rejectTrial: function(rejectall) {
			if (this.trialpos.length === 0) {
				return;
			}
			this.disableRecord();
			this.board.errclear();
			if (rejectall || this.trialpos.length === 1) {
				var pos = this.trialpos[0];
				this.board.trialclear();
				this.trialpos = [];
				this.limitTrialUndo = false;
				this.resumeGoto(pos);
			} else {
				this.resumeGoto(this.trialpos[this.trialpos.length - 1]);
				this.resumeTrial();
			}
			this.enableRecord();
			this.removeDescendant();
			this.checkexec();
			this.newOperation();
			this.emitTrial();
		},
		resumeTrial: function() {
			if (this.trialpos.length > 0) {
				this.disEmitTrial++;
				var pos = this.position;
				this.checkenable();
				this.resumeGoto(this.trialpos[0]);
				this.board.trialclear(true);
				if (this.position < pos) {
					this.board.trialstage = 1;
					this.resumeGoto(pos);
				}
				this.disEmitTrial--;
			}
		},
		emitTrial: function(num) {
			if (this.disEmitTrial === 0) {
				this.puzzle.emit("trial", num === void 0 ? this.trialpos.length : num);
			}
		}
	}
});

pzpr.classmgr.makeCommon({
	Bank: {
		enabled: false,

		// Valid values are: boolean | function(): boolean
		allowAdd: false,

		// One entry contains one of these:
		// {
		//   title: string
		//   shortkey: string
		//   constant: [string]
		// } | {
		//   title: string
		//   allowsInput: boolean
		//   func: string
		// }
		presets: [],

		// The current list of BankPiece objects.
		pieces: null,
		addButton: null,

		init: function() {
			this.addButton = new this.klass.BankAddButton();
		},

		defaultPreset: function() {
			return [];
		},

		applyPreset: function(preset, param) {
			var pieces;
			if (preset.func) {
				pieces = this[preset.func](param);
			} else if (preset.constant) {
				pieces = preset.constant;
			} else {
				return;
			}
			var ope = new this.klass.BankReplaceOperation(pieces);
			if (!ope.isNoop()) {
				this.ansclear();
				ope.redo();
				this.puzzle.opemgr.add(ope);
			}
		},

		initialize: function(pieces) {
			this.pieces = [];
			if (!pieces) {
				return;
			}

			for (var p in pieces) {
				var piece = new this.klass.BankPiece();
				piece.deserialize(pieces[p]);
				this.pieces.push(piece);
			}

			this.rebuildExtraData();
			this.performLayout();
		},

		width: 1,
		height: 1,

		shouldDrawBank: function() {
			return true;
		},

		performLayout: function() {
			if (!this.pieces || !this.width) {
				return;
			}

			var x = 0,
				y = 0,
				nexty = 0;

			var showAdd = !this.puzzle.playeronly && !!this.allowAdd;
			var len = this.pieces.length;

			for (var i = 0; i < len + (showAdd ? 1 : 0); i++) {
				var p = i < len ? this.pieces[i] : this.addButton;
				if (x + p.w + 1 > this.width) {
					x = 0;
					y = nexty;
				}

				p.x = x;
				p.y = y;
				nexty = Math.max(nexty, y + p.h + 1);
				p.index = i;
				x += p.w + 1;
			}

			if (!showAdd) {
				this.addButton.index = null;
			}

			this.height = nexty;
		},

		rebuildExtraData: function() {},

		draw: function() {
			this.puzzle.painter.range.bank = true;
			this.puzzle.painter.prepaint();
		},

		errclear: function() {
			for (var i = 0; i < this.pieces.length; i++) {
				this.pieces[i].seterr(0);
			}
		},

		setPiece: function(piece, index) {
			var ope = new this.klass.BankEditOperation(piece, index);
			if (!ope.isNoop()) {
				if (index < this.pieces.length) {
					var old = this.pieces[index];
					old.setQcmp(0);
				}

				ope.redo();
				this.puzzle.opemgr.add(ope);
			}
		},

		ansclear: function() {
			this.subclear();
		},

		subclear: function() {
			for (var i = 0; i < this.pieces.length; i++) {
				this.pieces[i].setQcmp(0);
			}
		}
	},

	BankPiece: {
		count: 1,

		// For editor purposes. The amount that the count can vary between.
		mincount: 1,
		maxcount: 1,

		deserialize: function(str) {},

		canonize: function() {
			return this.serialize();
		},

		serialize: function() {
			return "";
		},

		w: 1,
		h: 1,

		index: 0,
		x: 0,
		y: 0,

		error: 0,
		qcmp: 0,

		seterr: function(num) {
			if (this.board.isenableSetError()) {
				this.error = num;
			}
		},

		setQcmp: function(num) {
			this.addOpe("qcmp", num);
		},

		draw: function() {
			this.puzzle.painter.range.bankPieces.push(this);
			this.puzzle.painter.prepaint();
		},

		addOpe: function(property, num) {
			var ope = new this.klass.BankPieceOperation(
				this.index,
				property,
				this[property],
				num
			);
			if (!ope.isNoop()) {
				ope.redo();
				this.puzzle.opemgr.add(ope);
			}
		}
	},

	"BankAddButton:BankPiece": {
		isadd: true,

		w: 2,
		h: 2,

		serialize: function() {
			return "";
		},

		addOpe: function() {}
	},

	"BankEditOperation:Operation": {
		old: null,
		num: null,
		index: null,

		setData: function(value, index) {
			var len = this.board.bank.pieces.length;
			if (index < 0 || index > len) {
				throw Error("Index out of range");
			}

			this.old = index < len ? this.board.bank.pieces[index].serialize() : null;
			this.num = value;
			this.index = index;
		},

		undo: function() {
			var piece = new this.klass.BankPiece();
			if (this.old !== null) {
				piece.deserialize(this.old);
				if (this.num !== null) {
					this.board.bank.pieces[this.index] = piece;
				} else {
					this.board.bank.pieces.splice(this.index, 0, piece);
				}
			} else {
				var popped = this.board.bank.pieces.pop();
				if (popped) {
					popped.index = null;
				}
			}

			this.board.bank.rebuildExtraData();
			this.board.bank.performLayout();
			this.puzzle.painter.resizeCanvas();
			this.puzzle.emit("adjust");
		},
		redo: function() {
			var piece = new this.klass.BankPiece();
			if (this.num !== null) {
				piece.deserialize(this.num);
			}
			if (this.index < this.board.bank.pieces.length) {
				if (this.num !== null) {
					this.board.bank.pieces[this.index] = piece;
				} else {
					this.board.bank.pieces[this.index].index = null;
					this.board.bank.pieces.splice(this.index, 1);
				}
			} else {
				this.board.bank.pieces.push(piece);
			}

			this.board.bank.rebuildExtraData();
			this.board.bank.performLayout();
			this.puzzle.painter.resizeCanvas();
			this.puzzle.emit("adjust");
		},

		isNoop: function() {
			return this.old === this.num;
		},

		toString: function() {
			return ["PP", this.index, this.num, this.old].join(",");
		},

		decode: function(strs) {
			if (strs[0] !== "PP") {
				return false;
			}

			this.index = +strs[0];
			this.num = strs[1] || null;
			this.old = strs[2] || null;

			return true;
		}
	},

	"BankReplaceOperation:Operation": {
		old: [],
		num: [],

		setData: function(value, index) {
			this.old = this.board.bank.pieces.map(function(p) {
				return p.serialize();
			});

			if (value && typeof value !== "string") {
				this.num = value;
			} else {
				this.num = this.old.concat();
				if (!value) {
					this.num.splice(index, 1);
				} else if (index === this.old.length) {
					this.num.push(value);
				} else {
					this.num[index] = value;
				}
			}
		},

		exec: function(num) {
			this.board.bank.initialize(num);
			this.puzzle.painter.resizeCanvas();
			this.puzzle.emit("adjust");
		},

		isNoop: function() {
			return this.puzzle.pzpr.util.sameArray(this.old, this.num);
		},

		toString: function() {
			return ["PR", this.num.join("/"), this.old.join("/")].join(",");
		},

		decode: function(strs) {
			if (strs[0] !== "PR") {
				return false;
			}

			this.num = strs[1].split("/");
			this.old = strs[2].split("/");

			return true;
		}
	},

	"BankPieceOperation:Operation": {
		index: 0,
		num: 0,
		old: 0,
		property: "",

		STRPROP: {
			K: "qcmp"
		},

		isNoop: function() {
			return this.num === this.old;
		},

		setData: function(index, property, old, num) {
			this.index = index;
			this.property = property;
			this.old = old;
			this.num = num;
		},

		exec: function(num) {
			var piece = this.board.bank.pieces[this.index];
			piece[this.property] = num;
			piece.draw();
		},

		toString: function() {
			var prefix = "P";
			for (var i in this.STRPROP) {
				if (this.property === this.STRPROP[i]) {
					prefix += i;
					break;
				}
			}

			return [prefix, this.index, this.num, this.old].join(",");
		},

		decode: function(strs) {
			this.property = this.STRPROP[strs[0].charAt(1)];
			if (!this.property || strs[0].charAt(0) !== "P") {
				return false;
			}

			this.index = +strs[1];
			this.num = +strs[2];
			this.old = +strs[3];

			return true;
		}
	}
});

// GraphicCommon.js v3.4.1

pzpr.classmgr.makeCommon({
	//---------------------------------------------------------
	Graphic: {
		paintPost: function() {
			this.drawTrialStarts();
		},

		//---------------------------------------------------------------------------
		// pc.drawQuesCells()    Cellの、境界線の上に描画される問題の黒マスをCanvasに書き込む
		// pc.getQuesCellColor() 問題の黒マスの設定・描画判定する
		//---------------------------------------------------------------------------
		drawQuesCells: function() {
			this.vinc("cell_front", "crispEdges", true);
			this.drawCells_common("c_fullf_", this.getQuesCellColor);
		},
		getQuesCellColor: function(cell) {
			// initialize()で上書きされる
			return null;
		},
		getQuesCellColor_ques: function(cell) {
			if (cell.ques !== 1) {
				return null;
			}
			if ((cell.error || cell.qinfo) === 1) {
				return this.errcolor1;
			}
			return this.quescolor;
		},
		getQuesCellColor_qnum: function(cell) {
			if (cell.qnum === -1) {
				return null;
			}
			if ((cell.error || cell.qinfo) === 1) {
				return this.errcolor1;
			}
			return this.quescolor;
		},

		//---------------------------------------------------------------------------
		// pc.drawShadedCells()    Cellの、境界線の上から描画される回答の黒マスをCanvasに書き込む
		// pc.getShadedCellColor() 回答の黒マスの設定・描画判定する
		//---------------------------------------------------------------------------
		drawShadedCells: function() {
			this.vinc("cell_shaded", "crispEdges", true);
			this.drawCells_common("c_fulls_", this.getShadedCellColor);
		},
		getShadedCellColor: function(cell) {
			if (cell.qans !== 1) {
				return null;
			}
			var hasinfo = this.board.haserror || this.board.hasinfo;
			var info = cell.error || cell.qinfo;
			if (info === 1) {
				return this.errcolor1;
			} else if (info === 2) {
				return this.errcolor2;
			} else if (cell.trial) {
				return this.trialcolor;
			} else if (this.puzzle.execConfig("irowakeblk") && !hasinfo) {
				return cell.sblk.color;
			}
			return this.shadecolor;
		},

		//---------------------------------------------------------------------------
		// pc.drawBGCells()    Cellの、境界線の下に描画される背景色をCanvasに書き込む
		// pc.getBGCellColor() 背景色の設定・描画判定する
		//---------------------------------------------------------------------------
		drawBGCells: function() {
			this.vinc("cell_back", "crispEdges", true);
			this.drawCells_common("c_fullb_", this.getBGCellColor);
		},
		getBGCellColor: function(cell) {
			// initialize()で上書きされる
			return null;
		},
		getBGCellColor_error1: function(cell) {
			if (cell.error === 1 || cell.qinfo === 1) {
				return this.errbcolor1;
			}
			return null;
		},
		getBGCellColor_error2: function(cell) {
			var info = cell.error || cell.qinfo;
			if (info === 1) {
				return this.errbcolor1;
			} else if (info === 2) {
				return this.errbcolor2;
			}
			return null;
		},
		getBGCellColor_qcmp: function(cell) {
			if (cell.error === 1 || cell.qinfo === 1) {
				return this.errbcolor1;
			} else if (
				this.puzzle.execConfig("autocmp") &&
				!!cell.room &&
				cell.room.cmp
			) {
				return this.qcmpbgcolor;
			}
			return null;
		},
		getBGCellColor_qcmp1: function(cell) {
			if (cell.error === 1 || cell.qinfo === 1) {
				return this.errbcolor1;
			} else if (cell.qsub === 1) {
				return this.bcolor;
			} else if (
				this.puzzle.execConfig("autocmp") &&
				!!cell.room &&
				cell.room.cmp
			) {
				return this.qcmpbgcolor;
			}
			return null;
		},
		getBGCellColor_qsub1: function(cell) {
			if ((cell.error || cell.qinfo) === 1) {
				return this.errbcolor1;
			} else if (cell.qsub === 1) {
				return this.bcolor;
			}
			return null;
		},
		getBGCellColor_qsub2: function(cell) {
			this.bcolor = "silver"; /* 数字入力で背景が消えないようにする応急処置 */
			if ((cell.error || cell.qinfo) === 1) {
				return this.errbcolor1;
			} else if (cell.qsub === 1) {
				return this.qsubcolor1;
			} else if (cell.qsub === 2) {
				return this.qsubcolor2;
			}
			return null;
		},
		getBGCellColor_qsub3: function(cell) {
			if ((cell.error || cell.qinfo) === 1) {
				return this.errbcolor1;
			} else if (cell.qsub === 1) {
				return this.qsubcolor1;
			} else if (cell.qsub === 2) {
				return this.qsubcolor2;
			} else if (cell.qsub === 3) {
				return this.qsubcolor3;
			}
			return null;
		},
		getBGCellColor_icebarn: function(cell) {
			if (cell.error === 1 || cell.qinfo === 1) {
				if (cell.ques === 6) {
					return this.erricecolor;
				} else {
					return this.errbcolor1;
				}
			} else if (cell.ques === 6) {
				return this.icecolor;
			}
			return null;
		},

		//---------------------------------------------------------------------------
		// pc.drawCells_common()  drawShadedCells, drawQuesCells, drawBGCellsの共通ルーチン
		//---------------------------------------------------------------------------
		drawCells_common: function(header, colorfunc) {
			var g = this.context;
			var clist = this.range.cells;
			for (var i = 0; i < clist.length; i++) {
				var cell = clist[i],
					color = colorfunc.call(this, cell);
				g.vid = header + cell.id;
				if (!!color) {
					g.fillStyle = color;
					g.fillRectCenter(
						cell.bx * this.bw + this.getCellHorizontalOffset(cell),
						cell.by * this.bh,
						this.bw + 0.5,
						this.bh + 0.5
					);
				} else {
					g.vhide();
				}
			}
		},

		getCellHorizontalOffset: function(cell) {
			return 0;
		},

		//---------------------------------------------------------------------------
		// pc.drawBGExCells()    ExCellに描画される背景色をCanvasに書き込む
		// pc.getBGExCellColor() 背景色の設定・描画判定する
		//---------------------------------------------------------------------------
		drawBGExCells: function() {
			var g = this.vinc("excell_back", "crispEdges", true);

			var exlist = this.range.excells;
			for (var i = 0; i < exlist.length; i++) {
				var excell = exlist[i],
					color = this.getBGExCellColor(excell);

				g.vid = "ex_full_" + excell.id;
				if (!!color) {
					g.fillStyle = color;
					g.fillRectCenter(
						excell.bx * this.bw,
						excell.by * this.bh,
						this.bw + 0.5,
						this.bh + 0.5
					);
				} else {
					g.vhide();
				}
			}
		},

		getBGExCellColor: function(excell) {
			if (excell.error === 1 || excell.qinfo === 1) {
				return this.errbcolor1;
			}
		},

		//---------------------------------------------------------------------------
		// pc.drawDotCells()  ・だけをCanvasに書き込む
		//---------------------------------------------------------------------------
		drawDotCells: function() {
			var g = this.vinc("cell_dot", "auto", true);

			var dsize = Math.max(this.cw * 0.06, 2);
			var clist = this.range.cells;
			for (var i = 0; i < clist.length; i++) {
				var cell = clist[i];

				g.vid = "c_dot_" + cell.id;
				if (cell.isDot()) {
					g.fillStyle = !cell.trial ? this.qanscolor : this.trialcolor;
					g.fillCircle(cell.bx * this.bw, cell.by * this.bh, dsize);
				} else {
					g.vhide();
				}
			}
		},

		//---------------------------------------------------------------------------
		// pc.drawCellArrows() 矢印だけをCanvasに書き込む
		//---------------------------------------------------------------------------
		drawCellArrows: function(wide) {
			var g = this.vinc("cell_arrow", "auto");
			var al, aw, tl, tw;

			if (!wide) {
				al = this.cw * 0.4; // ArrowLength
				aw = this.cw * 0.03; // ArrowWidth
				tl = this.cw * 0.16; // 矢じりの長さの座標(中心-長さ)
				tw = this.cw * 0.16; // 矢じりの幅
			} else if (wide === 0.5) {
				/* 太い矢印 */
				al = this.cw * 0.35; // ArrowLength
				aw = this.cw * 0.1; // ArrowWidth
				tl = 0; // 矢じりの長さの座標(中心-長さ)
				tw = this.cw * 0.27; // 矢じりの幅
			} else {
				/* 太い矢印 */
				al = this.cw * 0.35; // ArrowLength
				aw = this.cw * 0.12; // ArrowWidth
				tl = 0; // 矢じりの長さの座標(中心-長さ)
				tw = this.cw * 0.35; // 矢じりの幅
			}
			aw = aw >= 1 ? aw : 1;
			tw = tw >= 5 ? tw : 5;

			var clist = this.range.cells;
			for (var item = 0; item < 2; item++) {
				var func =
					item === 1 ? this.getCellArrowOutline : this.getCellArrowColor;
				if (!func) {
					continue;
				}

				for (var i = 0; i < clist.length; i++) {
					var cell = clist[i],
						dir = !!cell.getArrow
							? cell.getArrow()
							: !cell.numberAsObject
							? cell.qdir
							: cell.getNum();
					var color = dir >= 1 && dir <= 4 ? func.call(this, cell) : null;

					g.vid = "c_arrow_" + item + "_" + cell.id;
					if (!!color) {
						g.lineWidth = 1.5;
						g.strokeStyle = g.fillStyle = color;
						g.beginPath();
						var px = cell.bx * this.bw,
							py = cell.by * this.bh;
						switch (dir) {
							case cell.UP:
								g.setOffsetLinePath(
									px,
									py,
									0,
									-al,
									-tw,
									-tl,
									-aw,
									-tl,
									-aw,
									al,
									aw,
									al,
									aw,
									-tl,
									tw,
									-tl,
									true
								);
								break;
							case cell.DN:
								g.setOffsetLinePath(
									px,
									py,
									0,
									al,
									-tw,
									tl,
									-aw,
									tl,
									-aw,
									-al,
									aw,
									-al,
									aw,
									tl,
									tw,
									tl,
									true
								);
								break;
							case cell.LT:
								g.setOffsetLinePath(
									px,
									py,
									-al,
									0,
									-tl,
									-tw,
									-tl,
									-aw,
									al,
									-aw,
									al,
									aw,
									-tl,
									aw,
									-tl,
									tw,
									true
								);
								break;
							case cell.RT:
								g.setOffsetLinePath(
									px,
									py,
									al,
									0,
									tl,
									-tw,
									tl,
									-aw,
									-al,
									-aw,
									-al,
									aw,
									tl,
									aw,
									tl,
									tw,
									true
								);
								break;
						}
						if (item === 1) {
							g.stroke();
						} else {
							g.fill();
						}
					} else {
						g.vhide();
					}
				}
			}
		},
		getCellArrowOutline: null,
		getCellArrowColor: function(cell) {
			var dir = !cell.numberAsObject ? cell.qdir : cell.getNum();
			if (dir >= 1 && dir <= 4) {
				if (!cell.numberAsObject || cell.qnum !== -1) {
					return this.quescolor;
				} else {
					return !cell.trial ? this.qanscolor : this.trialcolor;
				}
			}
			return null;
		},

		//---------------------------------------------------------------------------
		// pc.drawSlashes() 斜線をCanvasに書き込む
		//---------------------------------------------------------------------------
		drawSlashes: function() {
			var g = this.vinc("cell_slash", "auto");

			var basewidth = Math.max(this.bw / 4, 2);
			var irowake = this.puzzle.execConfig("irowake");

			var clist = this.range.cells;
			for (var slash = 0; slash <= 1; slash++) {
				for (var i = 0; i < clist.length; i++) {
					var cell = clist[i];
					g.vid = "c_slash_" + slash + "_" + cell.id;

					var isQues = cell.ques >= 31 && cell.ques <= 33;
					var value = isQues ? cell.ques : cell.qans;

					if (value === 33 || value === (slash ? 32 : 31)) {
						var info = cell.qinfo || cell.error,
							addwidth = 0,
							color;
						if (isQues) {
							addwidth = -basewidth / 2;
						} else if (cell.trial && this.puzzle.execConfig("irowake")) {
							addwidth = -basewidth / 2;
						} else if (
							(this.pid === "gokigen" || this.pid === "wagiri") &&
							(info === 1 || info === 3)
						) {
							addwidth = basewidth / 2;
						}

						if (isQues) {
							color = this.quescolor;
						} else if (this.pid !== "kinkonkan" && info > 0) {
							if (info & (slash ? 4 : 8)) {
								color = this.noerrcolor;
							} else if (info & 1) {
								color = this.errcolor1;
							} else if (info & 2) {
								color = this.errcolor2;
							}
						} else if (info === -1) {
							color = this.noerrcolor;
						} else if (irowake && value === 33) {
							color =
								!!slash === cell.parity() ? cell.path.color : cell.path2.color;
						} else if (irowake && cell.path && cell.path.color) {
							color = cell.path.color;
						} else if (irowake && cell.path2 && cell.path2.color) {
							color = cell.path2.color;
						} else if (cell.trial) {
							color = this.linetrialcolor;
						} else {
							color = this.linecolor;
						}

						g.lineWidth = basewidth + addwidth;
						g.strokeStyle = color;
						g.beginPath();
						var px = cell.bx * this.bw,
							py = cell.by * this.bh;
						if (!slash) {
							g.setOffsetLinePath(
								px,
								py,
								-this.bw,
								-this.bh,
								this.bw,
								this.bh,
								true
							);
						} else {
							g.setOffsetLinePath(
								px,
								py,
								this.bw,
								-this.bh,
								-this.bw,
								this.bh,
								true
							);
						}
						g.stroke();
					} else {
						g.vhide();
					}
				}
			}
		},

		//---------------------------------------------------------------------------
		// pc.drawQuesNumbers()  Cellの問題数字をCanvasに書き込む
		// pc.drawAnsNumbers()   Cellの回答数字をCanvasに書き込む
		// pc.drawHatenas()      ques===-2の時に？をCanvasに書き込む
		// pc.getQuesNumberText()  書き込む数のテキストを取得する
		// pc.getQuesNumberColor() 問題数字の設定・描画判定する
		//---------------------------------------------------------------------------
		drawQuesNumbers: function() {
			this.vinc("cell_number", "auto");
			this.drawNumbers_com(
				this.getQuesNumberText,
				this.getQuesNumberColor,
				"cell_text_",
				this.textoption
			);
		},
		drawAnsNumbers: function() {
			this.vinc("cell_ans_number", "auto");
			this.drawNumbers_com(
				this.getAnsNumberText,
				this.getAnsNumberColor,
				"cell_ans_text_",
				{}
			);
		},
		drawHatenas: function() {
			function getQuesHatenaText(cell) {
				return cell.ques === -2 || cell.qnum === -2 ? "?" : "";
			}
			this.vinc("cell_number", "auto");
			this.drawNumbers_com(
				getQuesHatenaText,
				this.getQuesNumberColor_qnum,
				"cell_text_",
				this.textoption
			);
		},
		drawNumbers_com: function(textfunc, colorfunc, header, textoption) {
			var g = this.context;
			var clist = this.range.cells;
			for (var i = 0; i < clist.length; i++) {
				var cell = clist[i];
				var text = textfunc.call(this, cell);
				g.vid = header + cell.id;
				if (!!text) {
					g.fillStyle = colorfunc.call(this, cell);
					var x = cell.bx * this.bw + this.getCellHorizontalOffset(cell);
					var y = cell.by * this.bh + this.getNumberVerticalOffset(cell);
					this.disptext(text, x, y, textoption);
				} else {
					g.vhide();
				}
			}
		},

		getNumberVerticalOffset: function(cell) {
			return 0;
		},

		getQuesNumberText: function(cell) {
			return this.getNumberText(
				cell,
				(this.puzzle.execConfig("dispmove") ? cell.base : cell).qnum
			);
		},
		getAnsNumberText: function(cell) {
			return this.getNumberText(cell, cell.anum);
		},
		getNumberText: function(cell, num) {
			if (!cell.numberAsLetter) {
				return this.getNumberTextCore(num);
			} else {
				return this.getNumberTextCore_letter(num);
			}
		},
		getNumberTextCore: function(num) {
			return num >= 0 ? "" + num : !this.hideHatena && num === -2 ? "?" : "";
		},
		getNumberTextCore_letter: function(num) {
			var text = "" + num;
			if (num === -1) {
				text = "";
			} else if (num === -2) {
				text = "?";
			} else if (num > 0 && num <= 26) {
				text = (num + 9).toString(36).toUpperCase();
			} else if (num > 26 && num <= 52) {
				text = (num - 17).toString(36).toLowerCase();
			}
			return text;
		},

		getQuesNumberColor: function(cell) {
			// initialize()で上書きされる
			return null;
		},
		getQuesNumberColor_fixed: function(cell) {
			return this.quescolor;
		},
		getQuesNumberColor_fixed_shaded: function(cell) {
			return this.fontShadecolor;
		},
		getQuesNumberColor_qnum: function(cell) {
			return (cell.error || cell.qinfo) === 1 ? this.errcolor1 : this.quescolor;
		},
		getQuesNumberColor_move: function(cell) {
			var puzzle = this.puzzle;
			var info = cell.error || cell.qinfo;
			if (info === 1 || info === 4) {
				return this.errcolor1;
			} else if (
				puzzle.execConfig("dispmove") &&
				puzzle.mouse.mouseCell === cell
			) {
				return this.movecolor;
			}
			return this.quescolor;
		},
		getQuesNumberColor_mixed: function(cell) {
			var info = cell.error || cell.qinfo;
			if ((cell.ques >= 1 && cell.ques <= 5) || cell.qans === 1) {
				return this.fontShadecolor;
			} else if (info === 1 || info === 4) {
				return this.errcolor1;
			}
			return this.quescolor;
		},

		getAnsNumberColor: function(cell) {
			if ((cell.error || cell.qinfo) === 1) {
				return this.errcolor1;
			}
			return !cell.trial ? this.qanscolor : this.trialcolor;
		},

		//---------------------------------------------------------------------------
		// pc.drawNumbersExCell()  ExCellの数字をCanvasに書き込む
		//---------------------------------------------------------------------------
		drawNumbersExCell: function() {
			var g = this.vinc("excell_number", "auto");

			var exlist = this.range.excells;
			for (var i = 0; i < exlist.length; i++) {
				var excell = exlist[i];
				var text = this.getQuesNumberText(excell);

				g.vid = "excell_text_" + excell.id;
				if (!!text) {
					g.fillStyle = this.getQuesNumberColor(excell);
					this.disptext(text, excell.bx * this.bw, excell.by * this.bh);
				} else {
					g.vhide();
				}
			}
		},

		//---------------------------------------------------------------------------
		// pc.drawSubNumbers()  Cellの補助数字をCanvasに書き込む
		//---------------------------------------------------------------------------
		drawSubNumbers: function(onshade) {
			var g = this.vinc("cell_subnumber", "auto");
			var posarray = [5, 4, 2, 3];

			var clist = this.range.cells;
			for (var i = 0; i < clist.length; i++) {
				var cell = clist[i];
				for (var n = 0; n < 4; n++) {
					var text = !cell.numberAsLetter
						? this.getNumberTextCore(cell.snum[n])
						: this.getNumberTextCore_letter(cell.snum[n]);
					g.vid = "cell_subtext_" + cell.id + "_" + n;
					if (!!text) {
						g.fillStyle =
							onshade && cell.isShade()
								? this.subshadecolor
								: !cell.trial
								? this.subcolor
								: this.trialcolor;
						var px = cell.bx * this.bw + this.getCellHorizontalOffset(cell);
						this.disptext(text, px, cell.by * this.bh, {
							position: posarray[n],
							ratio: 0.33,
							hoffset: 0.8
						});
					} else {
						g.vhide();
					}
				}
			}
		},

		//---------------------------------------------------------------------------
		// pc.drawArrowNumbers() Cellの数字と矢印をCanvasに書き込む
		//---------------------------------------------------------------------------
		drawArrowNumbers: function(opts) {
			var g = this.vinc("cell_arrownumber", "auto");

			var scale = (opts && opts.scale) || 1;

			var al = this.cw * 0.4 * scale; // ArrowLength
			var aw = this.cw * 0.03 * scale; // ArrowWidth
			var tl = this.cw * 0.16 * scale; // 矢じりの長さの座標(中心-長さ)
			var tw = this.cw * 0.12 * scale; // 矢じりの幅
			var dy = -this.bh * 0.6;
			var dx = [this.bw * 0.6, this.bw * 0.7, this.bw * 0.8, this.bw * 0.85];

			if (opts && opts.bottom) {
				dy *= -1;
			}

			var clist = this.range.cells;
			for (var i = 0; i < clist.length; i++) {
				var cell = clist[i],
					dir = cell.qdir;
				var text = this.getQuesNumberText(cell);
				var px = cell.bx * this.bw,
					py = cell.by * this.bh;
				var digit = text.length - 1;

				if (!!text) {
					g.fillStyle = this.getQuesNumberColor(cell);
				}

				// 矢印の描画
				g.vid = "cell_arrow_" + cell.id;
				if (!!text && dir !== cell.NDIR) {
					g.beginPath();
					switch (dir) {
						case cell.UP:
							g.setOffsetLinePath(
								px + dx[digit] * scale,
								py,
								0,
								-al,
								-tw,
								-tl,
								-aw,
								-tl,
								-aw,
								al,
								aw,
								al,
								aw,
								-tl,
								tw,
								-tl,
								true
							);
							break;
						case cell.DN:
							g.setOffsetLinePath(
								px + dx[digit] * scale,
								py,
								0,
								al,
								-tw,
								tl,
								-aw,
								tl,
								-aw,
								-al,
								aw,
								-al,
								aw,
								tl,
								tw,
								tl,
								true
							);
							break;
						case cell.LT:
							g.setOffsetLinePath(
								px,
								py + dy,
								-al,
								0,
								-tl,
								-tw,
								-tl,
								-aw,
								al,
								-aw,
								al,
								aw,
								-tl,
								aw,
								-tl,
								tw,
								true
							);
							break;
						case cell.RT:
							g.setOffsetLinePath(
								px,
								py + dy,
								al,
								0,
								tl,
								-tw,
								tl,
								-aw,
								-al,
								-aw,
								-al,
								aw,
								tl,
								aw,
								tl,
								tw,
								true
							);
							break;
					}
					g.fill();
				} else {
					g.vhide();
				}

				// 数字の描画
				g.vid = "cell_arnum_" + cell.id;
				if (!!text) {
					var option = { ratio: this.fontsizeratio };
					if (dir !== cell.NDIR) {
						option.ratio =
							opts && opts.arrowfontsize ? opts.arrowfontsize : 0.7;
					}

					if (dir === cell.UP || dir === cell.DN) {
						px -= this.cw * 0.1;
					} else if (dir === cell.LT || dir === cell.RT) {
						py += this.ch * 0.1 * (opts && opts.bottom ? -0.5 : +1);
					}

					this.disptext(text, px, py, option);
				} else {
					g.vhide();
				}
			}
		},

		//---------------------------------------------------------------------------
		// pc.drawCircledNumbers() Cell上の丸数字をCanvasに書き込む
		//---------------------------------------------------------------------------
		drawCircledNumbers: function() {
			this.drawCircles();

			this.vinc("cell_number", "auto");
			this.drawNumbers_com(
				this.getQuesNumberText,
				this.getQuesNumberColor,
				"cell_text_",
				{ ratio: 0.65 }
			);
		},

		//---------------------------------------------------------------------------
		// pc.drawTapaNumbers() draw Tapa-like clues
		//---------------------------------------------------------------------------
		drawTapaNumbers: function() {
			var g = this.vinc("cell_tapanum", "auto");
			var bw = this.bw,
				bh = this.bh;
			var opts = [
				{ option: {}, pos: [{ x: 0, y: 0 }] },
				{
					option: { ratio: 0.56 },
					pos: [
						{ x: -0.4, y: -0.4 },
						{ x: 0.4, y: 0.4 }
					]
				},
				{
					option: { ratio: 0.48 },
					pos: [
						{ x: -0.5, y: -0.4 },
						{ x: 0.5, y: -0.4 },
						{ x: 0, y: 0.4 }
					]
				},
				{
					option: { ratio: 0.4 },
					pos: [
						{ x: -0.55, y: 0 },
						{ x: 0, y: -0.5 },
						{ x: 0.55, y: 0 },
						{ x: 0, y: 0.5 }
					]
				}
			];

			var clist = this.range.cells;
			for (var i = 0; i < clist.length; i++) {
				var cell = clist[i],
					bx = cell.bx,
					by = cell.by;
				var nums = cell.qnums,
					n = nums.length;

				for (var k = 0; k < 4; k++) {
					g.fillStyle = this.getQuesNumberColor(cell, k);
					g.vid = "cell_text_" + cell.id + "_" + k;
					if (k < n && nums[k] !== -1 && n <= 4) {
						var opt = opts[n - 1],
							px = (bx + opt.pos[k].x) * bw,
							py = (by + opt.pos[k].y) * bh;
						var text = nums[k] >= 0 ? "" + nums[k] : "?";
						this.disptext(text, px, py, opt.option);
					} else {
						g.vhide();
					}
				}
			}
		},

		//---------------------------------------------------------------------------
		// pc.drawCrosses()    Crossの丸数字をCanvasに書き込む
		// pc.drawCrossMarks() Cross上の黒点をCanvasに書き込む
		// pc.drawCrossErrors() Cross error dots
		//---------------------------------------------------------------------------
		drawCrosses: function() {
			var g = this.vinc("cross_base", "auto", true);

			var csize = this.cw * this.crosssize + 1;
			g.lineWidth = 1;

			var option = { ratio: 0.6 };
			var clist = this.range.crosses;
			for (var i = 0; i < clist.length; i++) {
				var cross = clist[i],
					px = cross.bx * this.bw,
					py = cross.by * this.bh;

				// ○の描画
				g.vid = "x_cp_" + cross.id;
				if (cross.qnum !== -1) {
					g.fillStyle =
						cross.error === 1 || cross.qinfo === 1 ? this.errcolor1 : "white";
					g.strokeStyle = "black";
					g.shapeCircle(px, py, csize);
				} else {
					g.vhide();
				}

				// 数字の描画
				g.vid = "cross_text_" + cross.id;
				if (cross.qnum >= 0) {
					g.fillStyle = this.quescolor;
					this.disptext("" + cross.qnum, px, py, option);
				} else {
					g.vhide();
				}
			}
		},
		drawCrossMarks: function() {
			var g = this.vinc("cross_mark", "auto", true);

			var csize = this.cw * this.crosssize;
			var clist = this.range.crosses;
			for (var i = 0; i < clist.length; i++) {
				var cross = clist[i];

				g.vid = "x_cm_" + cross.id;
				if (cross.qnum === 1) {
					g.fillStyle =
						cross.error === 1 || cross.qinfo === 1
							? this.errcolor1
							: this.quescolor;
					g.fillCircle(cross.bx * this.bw, cross.by * this.bh, csize);
				} else {
					g.vhide();
				}
			}
		},
		drawCrossErrors: function(isdraw) {
			var g = this.vinc("cross_error", "auto");
			g.strokeStyle = this.errcolor1;
			g.lineWidth = Math.max(this.cw * 0.04, 1);

			var size = this.cw / 4;
			var clist = this.range.crosses;
			for (var i = 0; i < clist.length; i++) {
				var cross = clist[i];
				g.vid = "x_ce_" + cross.id;
				if (cross.error) {
					g.fillStyle = cross.lcnt === 2 ? this.errbcolor1 : "white";
					g.shapeCircle(cross.bx * this.bw, cross.by * this.bh, size / 2);
				} else {
					g.vhide();
				}
			}
		},

		//---------------------------------------------------------------------------
		// pc.drawBorders()        境界線をCanvasに書き込む
		// pc.drawBorders_common() 境界線をCanvasに書き込む(共通処理)
		// pc.getBorderColor()     境界線の設定・描画判定する
		//---------------------------------------------------------------------------
		drawBorders: function() {
			this.vinc("border", "crispEdges", true);
			this.drawBorders_common("b_bd_");
		},
		drawBorders_common: function(header) {
			var g = this.context;

			var blist = this.range.borders;
			for (var i = 0; i < blist.length; i++) {
				var border = blist[i],
					color = this.getBorderColor(border);

				g.vid = header + border.id;
				if (!!color) {
					var px = border.bx * this.bw + this.getBorderHorizontalOffset(border),
						py = border.by * this.bh;
					var lm = (this.lw + this.addlw) / 2;
					g.fillStyle = color;
					if (border.isVert()) {
						g.fillRectCenter(px, py, lm, this.bh + lm);
					} else {
						g.fillRectCenter(px, py, this.bw + lm, lm);
					}
				} else {
					g.vhide();
				}
			}
		},

		getBorderHorizontalOffset: function(cell) {
			return 0;
		},

		getBorderColor: function(border) {
			// initialize()で上書きされる
			return null;
		},
		getBorderColor_ques: function(border) {
			if (border.isBorder()) {
				return this.quescolor;
			}
			return null;
		},
		getBorderColor_qans: function(border) {
			var err = border.error || border.qinfo;
			if (border.isBorder()) {
				if (err === 1) {
					return this.errcolor1;
				} else if (err === -1) {
					return this.noerrcolor;
				} else if (border.trial) {
					return this.linetrialcolor;
				} else {
					return this.qanscolor;
				}
			} else if (!!border.isCmp && border.isCmp()) {
				return this.qcmpcolor;
			}
			return null;
		},
		getBorderColor_ice: function(border) {
			var cell1 = border.sidecell[0],
				cell2 = border.sidecell[1];
			if (
				border.inside &&
				!cell1.isnull &&
				!cell2.isnull &&
				cell1.ice() ^ cell2.ice()
			) {
				return this.quescolor;
			}
			return null;
		},

		//---------------------------------------------------------------------------
		// pc.drawQansBorders()    問題の境界線をCanvasに書き込む
		// pc.drawQuesBorders()    回答の境界線をCanvasに書き込む
		// pc.getQuesBorderColor() 問題の境界線の設定・描画判定する
		// pc.getQansBorderColor() 回答の境界線の設定・描画判定する
		//---------------------------------------------------------------------------
		drawQuesBorders: function() {
			this.vinc("border_question", "crispEdges", true);
			this.getBorderColor = this.getQuesBorderColor;
			this.drawBorders_common("b_bdques_");
		},
		drawQansBorders: function() {
			this.vinc("border_answer", "crispEdges", true);
			this.getBorderColor = this.getQansBorderColor;
			this.drawBorders_common("b_bdans_");
		},
		getQuesBorderColor: function(border) {
			if (border.ques >= 1) {
				return this.getBorderColor_ques(border);
			}
			return null;
		},
		getQansBorderColor: function(border) {
			if (border.qans >= 1) {
				return this.getBorderColor_qans(border);
			}
			return null;
		},

		//---------------------------------------------------------------------------
		// pc.drawBorderQsubs() 境界線用の補助記号をCanvasに書き込む
		// pc.drawBoxBorders()  境界線と黒マスの間の線を描画する
		//---------------------------------------------------------------------------
		drawBorderQsubs: function() {
			var g = this.vinc("border_qsub", "crispEdges", true);

			var m = this.cw * 0.15; //Margin
			var blist = this.range.borders;
			for (var i = 0; i < blist.length; i++) {
				var border = blist[i];

				g.vid = "b_qsub1_" + border.id;
				if (border.qsub === 1) {
					var px = border.bx * this.bw + this.getBorderHorizontalOffset(border),
						py = border.by * this.bh;
					g.fillStyle = !border.trial ? this.pekecolor : this.linetrialcolor;
					if (border.isHorz()) {
						g.fillRectCenter(px, py, 0.5, this.bh - m);
					} else {
						g.fillRectCenter(px, py, this.bw - m, 0.5);
					}
				} else {
					g.vhide();
				}
			}
		},

		// 外枠がない場合は考慮していません
		drawBoxBorders: function(tileflag) {
			var g = this.vinc("boxborder", "crispEdges");

			var lm = this.lm;
			var cw = this.cw;
			var ch = this.ch;

			g.strokeStyle = this.bbcolor;
			g.lineWidth = 1;

			var clist = this.range.cells;
			for (var i = 0; i < clist.length; i++) {
				var cell = clist[i],
					isdraw = cell.qans === 1;
				if (this.pid === "stostone" && this.board.falling) {
					isdraw = false;
				}

				g.vid = "c_bb_" + cell.id;
				if (isdraw) {
					var px = (cell.bx - 1) * this.bw,
						py = (cell.by - 1) * this.bh;
					var px0 = px - 0.5,
						px1 = px + lm + 0.5,
						px2 = px + cw - lm - 0.5,
						px3 = px + cw + 0.5;
					var py0 = py - 0.5,
						py1 = py + lm + 0.5,
						py2 = py + ch - lm - 0.5,
						py3 = py + ch + 0.5;

					// この関数を呼ぶ場合は全てhasborder===1なので
					// 外枠用の考慮部分を削除しています。
					var adb = cell.adjborder;
					var UPin = cell.by > 2,
						DNin = cell.by < 2 * this.board.rows - 2;
					var LTin = cell.bx > 2,
						RTin = cell.bx < 2 * this.board.cols - 2;

					var isUP = !UPin || adb.top.isBorder();
					var isDN = !DNin || adb.bottom.isBorder();
					var isLT = !LTin || adb.left.isBorder();
					var isRT = !RTin || adb.right.isBorder();

					var isUL =
						isUP ||
						isLT ||
						cell.relbd(-2, -1).isBorder() ||
						cell.relbd(-1, -2).isBorder();
					var isUR =
						isUP ||
						isRT ||
						cell.relbd(2, -1).isBorder() ||
						cell.relbd(1, -2).isBorder();
					var isDL =
						isDN ||
						isLT ||
						cell.relbd(-2, 1).isBorder() ||
						cell.relbd(-1, 2).isBorder();
					var isDR =
						isDN ||
						isRT ||
						cell.relbd(2, 1).isBorder() ||
						cell.relbd(1, 2).isBorder();

					g.beginPath();

					if (isUP || isUL) {
						g.moveTo(px1, py1);
					}
					if (!isUP && isUL) {
						g.lineTo(px1, py0);
					}
					if (!isUP && isUR) {
						g.moveTo(px2, py0);
					}
					if (isUP || isUR) {
						g.lineTo(px2, py1);
					} else if (isRT || isUR) {
						g.moveTo(px2, py1);
					}
					if (!isRT && isUR) {
						g.lineTo(px3, py1);
					}
					if (!isRT && isDR) {
						g.moveTo(px3, py2);
					}
					if (isRT || isDR) {
						g.lineTo(px2, py2);
					} else if (isDN || isDR) {
						g.moveTo(px2, py2);
					}
					if (!isDN && isDR) {
						g.lineTo(px2, py3);
					}
					if (!isDN && isDL) {
						g.moveTo(px1, py3);
					}
					if (isDN || isDL) {
						g.lineTo(px1, py2);
					} else if (isLT || isDL) {
						g.moveTo(px1, py2);
					}
					if (!isLT && isDL) {
						g.lineTo(px0, py2);
					}
					if (!isLT && isUL) {
						g.moveTo(px0, py1);
					}
					if (isLT || isUL) {
						g.lineTo(px1, py1);
					}

					g.stroke();
				} else {
					g.vhide();
				}
			}
		},

		//---------------------------------------------------------------------------
		// pc.drawLines()    回答の線をCanvasに書き込む
		// pc.getLineColor() 描画する線の色を設定する
		//---------------------------------------------------------------------------
		drawLines: function() {
			var g = this.vinc("line", "crispEdges");

			var blist = this.range.borders;
			for (var i = 0; i < blist.length; i++) {
				var border = blist[i],
					color = this.getLineColor(border);

				g.vid = "b_line_" + border.id;
				if (!!color) {
					var px = border.bx * this.bw,
						py = border.by * this.bh;
					var isvert = this.board.borderAsLine === border.isVert();
					var lm = this.lm + this.addlw / 2;

					g.fillStyle = color;
					if (isvert) {
						g.fillRectCenter(px, py, lm, this.bh + lm);
					} else {
						g.fillRectCenter(px, py, this.bw + lm, lm);
					}
				} else {
					g.vhide();
				}
			}
			this.addlw = 0;
		},
		getLineColor: function(border) {
			this.addlw = 0;
			if (border.isLine()) {
				var info = border.error || border.qinfo,
					puzzle = this.puzzle;
				var isIrowake =
					puzzle.execConfig("irowake") && border.path && border.path.color;
				var isDispmove = puzzle.execConfig("dispmove");

				if (border.trial && puzzle.execConfig("irowake")) {
					this.addlw = -this.lm;
				} else if (info === 1) {
					this.addlw = 1;
				}

				if (info === 1) {
					return this.errlinecolor;
				} else if (info === -1) {
					return this.noerrcolor;
				} else if (isDispmove) {
					return border.trial ? this.movetrialcolor : this.movelinecolor;
				} else if (isIrowake) {
					return border.path.color;
				} else {
					return border.trial ? this.linetrialcolor : this.linecolor;
				}
			}
			return null;
		},

		//---------------------------------------------------------------------------
		// pc.drawTip()    動いたことを示す矢印のやじりを書き込む
		//---------------------------------------------------------------------------
		drawTip: function() {
			var g = this.vinc("cell_linetip", "auto");

			var tsize = this.cw * 0.3;
			var tplus = this.cw * 0.05;

			var clist = this.range.cells;
			for (var i = 0; i < clist.length; i++) {
				var cell = clist[i],
					dir = 0,
					border = null;
				if (
					cell.lcnt === 1 &&
					!this.puzzle.execConfig("dispmove") &&
					cell.qnum === -1 &&
					/* Inverse arrow direction if a temporary departure was added by the solver */
					(cell.path.departure.anum === -1) ^ (cell.path.departure === cell)
				) {
					var adb = cell.adjborder;
					if (adb.top.isLine()) {
						dir = 2;
						border = adb.top;
					} else if (adb.bottom.isLine()) {
						dir = 1;
						border = adb.bottom;
					} else if (adb.left.isLine()) {
						dir = 4;
						border = adb.left;
					} else if (adb.right.isLine()) {
						dir = 3;
						border = adb.right;
					}
				}

				g.vid = "c_tip_" + cell.id;
				if (dir !== 0) {
					g.strokeStyle = this.getLineColor(border) || this.linecolor;
					g.lineWidth = this.lw + this.addlw; //LineWidth

					g.beginPath();
					var px = cell.bx * this.bw + 1,
						py = cell.by * this.bh + 1;
					if (dir === 1) {
						g.setOffsetLinePath(
							px,
							py,
							-tsize,
							tsize,
							0,
							-tplus,
							tsize,
							tsize,
							false
						);
					} else if (dir === 2) {
						g.setOffsetLinePath(
							px,
							py,
							-tsize,
							-tsize,
							0,
							tplus,
							tsize,
							-tsize,
							false
						);
					} else if (dir === 3) {
						g.setOffsetLinePath(
							px,
							py,
							tsize,
							-tsize,
							-tplus,
							0,
							tsize,
							tsize,
							false
						);
					} else if (dir === 4) {
						g.setOffsetLinePath(
							px,
							py,
							-tsize,
							-tsize,
							tplus,
							0,
							-tsize,
							tsize,
							false
						);
					}
					g.stroke();
				} else {
					g.vhide();
				}
			}
		},

		//---------------------------------------------------------------------------
		// pc.drawPekes()    境界線上の×をCanvasに書き込む
		//---------------------------------------------------------------------------
		drawPekes: function() {
			var g = this.vinc("border_peke", "auto", true);

			var size = this.cw * 0.15 + 1;
			if (size < 4) {
				size = 4;
			}
			g.lineWidth = (1 + this.cw / 40) | 0;

			var blist = this.range.borders;
			for (var i = 0; i < blist.length; i++) {
				var border = blist[i];
				g.vid = "b_peke_" + border.id;
				if (border.qsub === 2) {
					g.strokeStyle = !border.trial ? this.pekecolor : this.trialcolor;
					g.strokeCross(border.bx * this.bw, border.by * this.bh, size - 1);
				} else {
					g.vhide();
				}
			}
		},

		//---------------------------------------------------------------------------
		// pc.drawBaseMarks() 交点のdotをCanvasに書き込む
		//---------------------------------------------------------------------------
		drawBaseMarks: function(isdraw) {
			var g = this.vinc("cross_mark", "auto", true);
			g.fillStyle = this.quescolor;

			var size = this.cw / 10;
			var clist = this.range.crosses;
			for (var i = 0; i < clist.length; i++) {
				var cross = clist[i];
				g.vid = "x_cm_" + cross.id;
				if (isdraw !== false) {
					g.fillCircle(cross.bx * this.bw, cross.by * this.bh, size / 2);
				} else {
					g.vhide();
				}
			}
		},

		//---------------------------------------------------------------------------
		// pc.drawTriangle()   三角形をCanvasに書き込む
		// pc.drawTriangle1()  三角形をCanvasに書き込む(1マスのみ)
		//---------------------------------------------------------------------------
		drawTriangle: function() {
			var g = this.vinc("cell_triangle", "crispEdges");

			var clist = this.range.cells;
			for (var i = 0; i < clist.length; i++) {
				var cell = clist[i],
					num = cell.ques !== 0 ? cell.ques : cell.qans;

				g.vid = "c_tri_" + cell.id;
				if (num >= 2 && num <= 5) {
					g.fillStyle = this.getTriangleColor(cell);
					this.drawTriangle1(cell.bx * this.bw, cell.by * this.bh, num);
				} else {
					g.vhide();
				}
			}
		},
		getTriangleColor: function(cell) {
			return this.quescolor;
		},
		drawTriangle1: function(px, py, num) {
			var g = this.context;
			var mgn = this.pid === "reflect" ? 1 : 0.5,
				bw = this.bw + 1 - mgn,
				bh = this.bh + 1 - mgn;
			g.beginPath();
			switch (num) {
				case 2:
					g.setOffsetLinePath(px, py, -bw, -bh, -bw, bh, bw, bh, true);
					break;
				case 3:
					g.setOffsetLinePath(px, py, bw, -bh, -bw, bh, bw, bh, true);
					break;
				case 4:
					g.setOffsetLinePath(px, py, -bw, -bh, bw, -bh, bw, bh, true);
					break;
				case 5:
					g.setOffsetLinePath(px, py, -bw, -bh, bw, -bh, -bw, bh, true);
					break;
			}
			g.fill();
		},
		drawTriangle2: function(px, py, dir) {
			var g = this.context;
			var bw = this.bw + 1,
				bh = this.bh + 1;
			g.beginPath();
			switch (dir) {
				case 1:
					g.setOffsetLinePath(px, py, 0, 0, -bw, -bh, bw, -bh, true);
					break;
				case 2:
					g.setOffsetLinePath(px, py, 0, 0, -bw, bh, bw, bh, true);
					break;
				case 3:
					g.setOffsetLinePath(px, py, 0, 0, -bw, -bh, -bw, bh, true);
					break;
				case 4:
					g.setOffsetLinePath(px, py, 0, 0, bw, -bh, bw, bh, true);
					break;
			}
			g.fill();
		},

		//---------------------------------------------------------------------------
		// pc.drawMBs()    Cell上の○,×をCanvasに書き込む
		//---------------------------------------------------------------------------
		drawMBs: function() {
			var g = this.vinc("cell_mb", "auto", true);
			g.lineWidth = 1;

			var rsize = this.cw * 0.35;
			var clist = this.range.cells;
			for (var i = 0; i < clist.length; i++) {
				var cell = clist[i],
					px,
					py;
				if (cell.qsub > 0) {
					px = cell.bx * this.bw;
					py = cell.by * this.bh;
					g.strokeStyle = !cell.trial ? this.mbcolor : "rgb(192, 192, 192)";
				}

				g.vid = "c_MB1_" + cell.id;
				if (cell.qsub === 1) {
					g.strokeCircle(px, py, rsize);
				} else {
					g.vhide();
				}

				g.vid = "c_MB2_" + cell.id;
				if (cell.qsub === 2) {
					g.strokeCross(px, py, rsize);
				} else {
					g.vhide();
				}
			}
		},

		//---------------------------------------------------------------------------
		// pc.drawBorderAuxDir()    directional aux marks
		//---------------------------------------------------------------------------
		drawBorderAuxDir: function() {
			var g = this.vinc("border_dirsub", "crispEdges");
			var ssize = this.cw * 0.1;

			g.lineWidth = this.cw * 0.1;

			var blist = this.range.borders;
			for (var i = 0; i < blist.length; i++) {
				var border = blist[i],
					px = border.bx * this.bw,
					py = border.by * this.bh,
					dir = border.qsub - 10;

				// 向き補助記号の描画
				g.vid = "b_daux_" + border.id;
				if (dir >= 1 && dir <= 8) {
					g.strokeStyle = !border.trial ? "rgb(64,64,64)" : this.linetrialcolor;
					this.strokeSingleAuxDir(g, dir, px, py, ssize);
				} else {
					g.vhide();
				}
			}
		},
		strokeSingleAuxDir: function(g, dir, px, py, ssize) {
			var piece = this.board.emptycell;

			switch (dir) {
				case piece.UP:
					g.setOffsetLinePath(
						px,
						py,
						-ssize * 2,
						+ssize,
						0,
						-ssize,
						+ssize * 2,
						+ssize,
						false
					);
					break;
				case piece.DN:
					g.setOffsetLinePath(
						px,
						py,
						-ssize * 2,
						-ssize,
						0,
						+ssize,
						+ssize * 2,
						-ssize,
						false
					);
					break;
				case piece.LT:
					g.setOffsetLinePath(
						px,
						py,
						+ssize,
						-ssize * 2,
						-ssize,
						0,
						+ssize,
						+ssize * 2,
						false
					);
					break;
				case piece.RT:
					g.setOffsetLinePath(
						px,
						py,
						-ssize,
						-ssize * 2,
						+ssize,
						0,
						-ssize,
						+ssize * 2,
						false
					);
					break;
			}
			g.stroke();
		},

		//---------------------------------------------------------------------------
		// pc.drawCircles()          数字や白丸黒丸等を表すCellの丸を書き込む
		// pc.getCircleStrokeColor() 描画する円の線の色を設定する
		// pc.getCircleFillColor()   描画する円の背景色を設定する
		//---------------------------------------------------------------------------
		drawCircles: function() {
			var g = this.vinc("cell_circle", "auto", true);

			var ra = this.circleratio;
			var rsize_stroke = (this.cw * (ra[0] + ra[1])) / 2,
				rsize_fill = this.cw * ra[0];

			var clist = this.range.cells;
			for (var i = 0; i < clist.length; i++) {
				var cell = clist[i];

				var color = this.getCircleFillColor(cell);
				g.vid = "c_cirb_" + cell.id;
				if (!!color) {
					g.fillStyle = color;
					g.fillCircle(
						cell.bx * this.bw + this.getCellHorizontalOffset(cell),
						cell.by * this.bh,
						rsize_fill
					);
				} else {
					g.vhide();
				}
			}

			g = this.vinc("cell_circle_stroke", "auto", true);
			g.lineWidth = Math.max(this.cw * (ra[0] - ra[1]), 1);

			for (var i = 0; i < clist.length; i++) {
				var cell = clist[i];

				var color = this.getCircleStrokeColor(cell);
				g.vid = "c_cira_" + cell.id;
				if (!!color) {
					g.strokeStyle = color;
					g.strokeCircle(
						cell.bx * this.bw + this.getCellHorizontalOffset(cell),
						cell.by * this.bh,
						rsize_stroke
					);
				} else {
					g.vhide();
				}
			}
		},

		getCircleStrokeColor: function(cell) {
			// initialize()で上書きされる
			return null;
		},
		getCircleStrokeColor_qnum: function(cell) {
			var puzzle = this.puzzle,
				error = cell.error || cell.qinfo;
			var isdrawmove = puzzle.execConfig("dispmove");
			var num = (!isdrawmove ? cell : cell.base).qnum;
			if (num !== -1) {
				if (isdrawmove && puzzle.mouse.mouseCell === cell) {
					return this.movecolor;
				} else if (error === 1 || error === 4) {
					return this.errcolor1;
				} else {
					return this.quescolor;
				}
			}
			return null;
		},
		getCircleStrokeColor_qnum2: function(cell) {
			if (cell.qnum === 1) {
				return cell.error === 1 ? this.errcolor1 : this.quescolor;
			}
			return null;
		},

		getCircleFillColor: function(cell) {
			// initialize()で上書きされる
			return null;
		},
		getCircleFillColor_qnum: function(cell) {
			if (cell.qnum !== -1) {
				var error = cell.error || cell.qinfo;
				if (error === 1 || error === 4) {
					return this.errbcolor1;
				} else {
					return this.circlebasecolor;
				}
			}
			return null;
		},
		getCircleFillColor_qnum2: function(cell) {
			if (cell.qnum === 1) {
				return cell.error === 1 ? this.errbcolor1 : "white";
			} else if (cell.qnum === 2) {
				return cell.error === 1 ? this.errcolor1 : this.quescolor;
			}
			return null;
		},
		getCircleFillColor_qcmp: function(cell) {
			var puzzle = this.puzzle,
				error = cell.error || cell.qinfo;
			var isdrawmove = puzzle.execConfig("dispmove");
			var num = (!isdrawmove ? cell : cell.base).qnum;
			if (num !== -1) {
				if (error === 1 || error === 4) {
					return this.errbcolor1;
				} else if (cell.isCmp()) {
					return this.qcmpcolor;
				} else {
					return this.circlebasecolor;
				}
			}
			return null;
		},

		//---------------------------------------------------------------------------
		// pc.drawDepartures()    移動系パズルで、移動元を示す記号を書き込む
		//---------------------------------------------------------------------------
		drawDepartures: function() {
			var g = this.vinc("cell_depart", "auto", true);
			g.fillStyle = this.movelinecolor;

			var rsize = this.cw * 0.15;
			var isdrawmove = this.puzzle.execConfig("dispmove");
			var clist = this.range.cells;
			for (var i = 0; i < clist.length; i++) {
				var cell = clist[i];

				g.vid = "c_dcir_" + cell.id;
				if (isdrawmove && cell.isDeparture()) {
					var px = cell.bx * this.bw,
						py = cell.by * this.bh;
					g.fillCircle(px, py, rsize);
				} else {
					g.vhide();
				}
			}
		},

		//---------------------------------------------------------------------------
		// pc.drawLineParts()   ╋などをCanvasに書き込む
		//---------------------------------------------------------------------------
		drawLineParts: function() {
			var g = this.vinc("cell_lineparts", "crispEdges");
			g.fillStyle = this.quescolor;

			var lm = this.lm,
				bw = this.bw,
				bh = this.bh;
			var clist = this.range.cells;
			for (var i = 0; i < clist.length; i++) {
				var cell = clist[i],
					qu = cell.ques;

				g.vid = "c_lp_" + cell.id;
				if (qu >= 11 && qu <= 17) {
					var px = cell.bx * this.bw,
						py = cell.by * this.bh;
					var px0 = px - bw - 0.5,
						px1 = px - lm,
						px2 = px + lm,
						px3 = px + bw + 0.5;
					var py0 = py - bh - 0.5,
						py1 = py - lm,
						py2 = py + lm,
						py3 = py + bh + 0.5;

					var flag = { 11: 15, 12: 3, 13: 12, 14: 9, 15: 5, 16: 6, 17: 10 }[qu];
					g.beginPath();
					g.moveTo(px1, py1);
					if (flag & 1) {
						g.lineTo(px1, py0);
						g.lineTo(px2, py0);
					} // top
					g.lineTo(px2, py1);
					if (flag & 8) {
						g.lineTo(px3, py1);
						g.lineTo(px3, py2);
					} // right
					g.lineTo(px2, py2);
					if (flag & 2) {
						g.lineTo(px2, py3);
						g.lineTo(px1, py3);
					} // bottom
					g.lineTo(px1, py2);
					if (flag & 4) {
						g.lineTo(px0, py2);
						g.lineTo(px0, py1);
					} // left
					g.closePath();
					g.fill();
				} else {
					g.vhide();
				}
			}
		},

		//---------------------------------------------------------------------------
		// pc.drawTateyokos()   縦棒・横棒をCanvasに書き込む
		// pc.getBarColor()     縦棒・横棒の色を取得する
		//---------------------------------------------------------------------------
		drawTateyokos: function() {
			var g = this.vinc("cell_tateyoko", "crispEdges");
			var lm = Math.max(this.cw / 6, 3) / 2; //LineWidth

			var clist = this.range.cells;
			for (var i = 0; i < clist.length; i++) {
				var cell = clist[i],
					px = cell.bx * this.bw,
					py = cell.by * this.bh;
				var qa = cell.qans;

				g.vid = "c_bar1_" + cell.id;
				if (qa === 11 || qa === 12) {
					g.fillStyle = this.getBarColor(cell, true);
					g.fillRectCenter(px, py, lm + this.addlw / 2, this.bh);
				} else {
					g.vhide();
				}

				g.vid = "c_bar2_" + cell.id;
				if (qa === 11 || qa === 13) {
					g.fillStyle = this.getBarColor(cell, false);
					g.fillRectCenter(px, py, this.bw, lm + this.addlw / 2);
				} else {
					g.vhide();
				}
			}
			this.addlw = 0;
		},

		getBarColor: function(cell, vert) {
			var err = cell.error,
				isErr =
					err === 1 || err === 4 || (err === 5 && vert) || (err === 6 && !vert),
				color = "";
			this.addlw = 0;
			if (isErr) {
				color = this.errlinecolor;
				this.addlw = 1;
			} else if (err !== 0) {
				color = this.noerrcolor;
			} else if (cell.trial) {
				color = this.linetrialcolor;
			} else {
				color = this.linecolor;
			}
			return color;
		},

		//---------------------------------------------------------------------------
		// pc.drawQues51()         Ques===51があるようなパズルで、描画関数を呼び出す
		// pc.drawSlash51Cells()   [＼]のナナメ線をCanvasに書き込む
		// pc.drawSlash51ExCells() ExCell上の[＼]のナナメ線をCanvasに書き込む
		// pc.drawExCellGrid()     ExCell間の境界線をCanvasに書き込む
		//---------------------------------------------------------------------------
		drawQues51: function() {
			this.drawExCellGrid();
			this.drawTargetTriangle();
			this.drawSlash51Cells();
			this.drawSlash51ExCells();
		},
		drawSlash51Cells: function() {
			var g = this.vinc("cell_ques51", "crispEdges", true);

			g.strokeStyle = this.quescolor;
			g.lineWidth = 1;
			var clist = this.range.cells;
			for (var i = 0; i < clist.length; i++) {
				var cell = clist[i];

				g.vid = "c_slash51_" + cell.id;
				if (cell.ques === 51) {
					var px = cell.bx * this.bw,
						py = cell.by * this.bh;
					g.strokeLine(px - this.bw, py - this.bh, px + this.bw, py + this.bh);
				} else {
					g.vhide();
				}

				g.vid = "c_slash51b_" + cell.id;
				if (cell.ques === 51 && cell.dirs51 === 4) {
					var px = cell.bx * this.bw,
						py = cell.by * this.bh;
					g.strokeLine(px - this.bw, py + this.bh, px + this.bw, py - this.bh);
				} else {
					g.vhide();
				}
			}
		},
		drawSlash51ExCells: function() {
			var g = this.vinc("excell_ques51", "crispEdges", true);

			g.strokeStyle = this.quescolor;
			g.lineWidth = 1;
			var exlist = this.range.excells;
			for (var i = 0; i < exlist.length; i++) {
				var excell = exlist[i],
					px = excell.bx * this.bw,
					py = excell.by * this.bh;
				g.vid = "ex_slash51_" + excell.id;
				g.strokeLine(px - this.bw, py - this.bh, px + this.bw, py + this.bh);
			}
		},
		drawExCellGrid: function() {
			var g = this.vinc("grid_excell", "crispEdges", true);

			g.fillStyle = this.quescolor;
			var exlist = this.range.excells;
			for (var i = 0; i < exlist.length; i++) {
				var excell = exlist[i];
				var px = excell.bx * this.bw,
					py = excell.by * this.bh;

				g.vid = "ex_bdx_" + excell.id;
				if (excell.by === -1 && excell.bx < this.board.maxbx) {
					g.fillRectCenter(px + this.bw, py, 0.5, this.bh);
				} else {
					g.vhide();
				}

				g.vid = "ex_bdy_" + excell.id;
				if (excell.bx === -1 && excell.by < this.board.maxby) {
					g.fillRectCenter(px, py + this.bh, this.bw, 0.5);
				} else {
					g.vhide();
				}
			}
		},

		//---------------------------------------------------------------------------
		// pc.drawQuesNumbersOn51()   [＼]に数字を記入する
		// pc.drawQuesNumbersOn51_1() 1つの[＼]に数字を記入する
		//---------------------------------------------------------------------------
		drawQuesNumbersOn51: function() {
			this.vinc("cell_number51", "auto");

			var d = this.range;
			for (var bx = d.x1 | 1; bx <= d.x2; bx += 2) {
				for (var by = d.y1 | 1; by <= d.y2; by += 2) {
					var piece = this.board.getobj(bx, by); /* cell or excell */
					if (!piece.isnull) {
						if (piece.dirs51 === 4) {
							this.drawQuesNumbersOn51_2(piece);
						} else {
							this.drawQuesNumbersOn51_1(piece);
						}
					}
				}
			}
		},
		drawQuesNumbersOn51_1: function(piece) {
			/* cell or excell */
			var g = this.context,
				val,
				adj,
				px = piece.bx * this.bw,
				py = piece.by * this.bh;
			var option = { ratio: 0.45 };
			g.fillStyle =
				piece.error === 1 || piece.qinfo === 1
					? this.errcolor1
					: this.quescolor;

			adj = piece.relcell(2, 0);
			val = piece.ques === 51 ? piece.qnum : -1;

			g.vid = [piece.group, piece.id, "text_ques51_rt"].join("_");
			if (val >= 0 && !adj.isnull && adj.ques !== 51) {
				option.position = this.TOPRIGHT;
				this.disptext("" + val, px, py, option);
			} else {
				g.vhide();
			}

			adj = piece.relcell(0, 2);
			val = piece.ques === 51 ? piece.qnum2 : -1;

			g.vid = [piece.group, piece.id, "text_ques51_dn"].join("_");
			if (val >= 0 && !adj.isnull && adj.ques !== 51) {
				option.position = this.BOTTOMLEFT;
				this.disptext("" + val, px, py, option);
			} else {
				g.vhide();
			}
		},
		drawQuesNumbersOn51_2: function(piece) {
			var g = this.context,
				val,
				px = piece.bx * this.bw,
				py = piece.by * this.bh;
			var option = { ratio: 0.4, width: [0.35, 0.23, 0.15] };
			g.fillStyle =
				piece.error === 1 || piece.qinfo === 1
					? this.errcolor1
					: this.quescolor;

			for (var dir = 1; dir <= 4; dir++) {
				val = piece.getQnumDir(dir);
				g.vid = [piece.group, piece.id, "text_ques51", dir].join("_");
				if (val >= 0) {
					option.position = dir + 5;
					this.disptext("" + val, px, py, option);
				} else {
					g.vhide();
				}
			}
		},

		//---------------------------------------------------------------------------
		// pc.drawTarget()  入力対象となる場所を描画する
		// pc.drawCursor()  キーボードからの入力対象をCanvasに書き込む
		// pc.drawTargetSubNumber() Cellの補助数字の入力対象に背景色をつける
		// pc.drawTargetTriangle() [＼]のうち入力対象のほうに背景色をつける
		//---------------------------------------------------------------------------
		drawTarget: function() {
			this.drawCursor(true, this.puzzle.editmode);
		},

		drawCursor: function(islarge, isdraw) {
			this.drawRawCursor(
				"target_cursor",
				"",
				this.puzzle.cursor,
				islarge,
				isdraw !== false && this.puzzle.getConfig("cursor"),
				this.puzzle.editmode ? this.targetColorEdit : this.targetColorPlay
			);
		},

		drawTrialStarts: function() {
			var starts = this.puzzle.opemgr.savedStarts;
			for (var i = 0; i < starts.length; i++) {
				var piece = starts[i];
				this.drawRawCursor(
					"trial_cursor",
					"trial_" + i,
					piece,
					false,
					!piece.isnull && this.puzzle.getConfig("trialmarker"),
					this.targetColorTrial
				);
			}
		},

		drawRawCursor: function(layerid, prefix, cursor, islarge, isdraw, color) {
			var g = this.vinc(layerid, "crispEdges");

			var px = cursor.bx * this.bw,
				py = cursor.by * this.bh;

			var obj = !cursor.group ? cursor.getobj() : cursor;

			if (obj && obj.group === "cell") {
				px += this.getCellHorizontalOffset(obj);
			} else if (obj && obj.group === "border") {
				px += this.getBorderHorizontalOffset(obj);
			}

			var t, w, h;
			if (islarge !== false) {
				t = Math.max(this.cw / 16, 2) | 0;
				w = this.bw - 0.5;
				h = w;
			} else {
				t = Math.max(this.cw / 24, 1) | 0;
				w = this.bw * 0.56;
				h = w;
			}

			if (typeof cursor.bankpiece === "number") {
				var piece = this.board.bank.pieces[cursor.bankpiece];
				if (cursor.bankpiece === this.board.bank.pieces.length) {
					piece = this.board.bank.addButton;
				}
				if (piece) {
					var r = this.puzzle.painter.bankratio;

					px = (piece.x + 0.25 + piece.w / 2) * this.cw * r;
					py = (piece.y + 0.25 + piece.h / 2) * this.ch * r;
					py += (this.board.rows + this.bankVerticalOffset) * this.ch;
					w = (piece.w + 0.25) * this.cw * r * 0.5;
					h = (piece.h + 0.25) * this.ch * r * 0.5;
				} else {
					isdraw = false;
				}
			}

			isdraw = isdraw !== false && !this.outputImage;
			g.fillStyle = color;

			g.vid = prefix + "ti1_";
			if (isdraw) {
				g.fillRect(px - w, py - h, w * 2, t);
			} else {
				g.vhide();
			}
			g.vid = prefix + "ti2_";
			if (isdraw) {
				g.fillRect(px - w, py - h, t, h * 2);
			} else {
				g.vhide();
			}
			g.vid = prefix + "ti3_";
			if (isdraw) {
				g.fillRect(px - w, py + h - t, w * 2, t);
			} else {
				g.vhide();
			}
			g.vid = prefix + "ti4_";
			if (isdraw) {
				g.fillRect(px + w - t, py - h, t, h * 2);
			} else {
				g.vhide();
			}
		},

		drawTargetSubNumber: function(onshade) {
			var g = this.vinc("target_subnum", "crispEdges");

			var d = this.range,
				cursor = this.puzzle.cursor;
			if (cursor.bx < d.x1 || d.x2 < cursor.bx) {
				return;
			}
			if (cursor.by < d.y1 || d.y2 < cursor.by) {
				return;
			}

			var target = cursor.targetdir;
			var cell = cursor.getc();

			if (
				cursor.disableAnum &&
				this.puzzle.mouse.inputMode.indexOf("number") === -1
			) {
				target = 0;
			}

			g.vid = "target_subnum";
			g.fillStyle =
				onshade && cell && cell.isShade() ? this.ttshadecolor : this.ttcolor;
			if (this.puzzle.playmode && target !== 0) {
				var bw = this.bw,
					bh = this.bh;
				var px = cursor.bx * bw + 0.5 + this.getCellHorizontalOffset(cell),
					py = cursor.by * bh + 0.5;
				var tw = bw * 0.8,
					th = bh * 0.8;
				if (target === 5) {
					g.fillRect(px - bw, py - bh, tw, th);
				} else if (target === 4) {
					g.fillRect(px + bw - tw, py - bh, tw, th);
				} else if (target === 2) {
					g.fillRect(px - bw, py + bh - th, tw, th);
				} else if (target === 3) {
					g.fillRect(px + bw - tw, py + bh - th, tw, th);
				}
			} else {
				g.vhide();
			}
		},
		drawTargetTriangle: function() {
			var g = this.vinc("target_triangle", "auto");

			var d = this.range,
				cursor = this.puzzle.cursor;
			if (cursor.bx < d.x1 || d.x2 < cursor.bx) {
				return;
			}
			if (cursor.by < d.y1 || d.y2 < cursor.by) {
				return;
			}

			var target = cursor.detectTarget();

			g.vid = "target_triangle";
			g.fillStyle = this.ttcolor;
			if (this.puzzle.editmode && target !== 0) {
				if (cursor.targetdirs === 4) {
					this.drawTriangle2(cursor.bx * this.bw, cursor.by * this.bh, target);
				} else {
					this.drawTriangle1(
						cursor.bx * this.bw,
						cursor.by * this.bh,
						target === 4 ? 4 : 2
					);
				}
			} else {
				g.vhide();
			}
		},

		//--------------------------------------------------------------------------
		// pc.drawStartGoal()  draw Start and Goal symbols
		//--------------------------------------------------------------------------
		drawStartGoal: function() {
			var g = this.vinc("cell_sg", "auto");
			var bd = this.board,
				d = this.range;

			g.vid = "text_stpos";
			var cell = bd.startpos ? bd.startpos.getc() : bd.emptycell;
			if (
				cell.bx >= d.x1 &&
				d.x2 >= cell.bx &&
				cell.by >= d.y1 &&
				d.y2 >= cell.by
			) {
				if (!cell.isnull) {
					g.fillStyle =
						this.puzzle.mouse.draggingSG && this.puzzle.mouse.inputData === 10
							? "red"
							: cell.qans === 1
							? this.fontShadecolor
							: this.quescolor;
					this.disptext("S", cell.bx * this.bw, cell.by * this.bh);
				} else {
					g.vhide();
				}
			}

			g.vid = "text_glpos";
			cell = bd.goalpos.getc();
			if (
				cell.bx >= d.x1 &&
				d.x2 >= cell.bx &&
				cell.by >= d.y1 &&
				d.y2 >= cell.by
			) {
				if (!cell.isnull) {
					g.fillStyle =
						this.puzzle.mouse.draggingSG && this.puzzle.mouse.inputData === 11
							? "red"
							: cell.qans === 1
							? this.fontShadecolor
							: this.quescolor;
					this.disptext("G", cell.bx * this.bw, cell.by * this.bh);
				} else {
					g.vhide();
				}
			}
		},

		fillStar: function(g, px, py, sizeX, sizeY) {
			// 星を描画するときの頂点の位置
			var starXOffset = [
				0,
				0.235,
				0.95,
				0.38,
				0.588,
				0,
				-0.588,
				-0.38,
				-0.95,
				-0.235
			];
			var starYOffset = [
				-1,
				-0.309,
				-0.309,
				0.124,
				0.809,
				0.4,
				0.809,
				0.124,
				-0.309,
				-0.309
			];

			g.beginPath();
			g.moveTo(px, py - sizeY);
			for (var p = 1; p < 10; p++) {
				g.lineTo(px + sizeX * starXOffset[p], py + sizeY * starYOffset[p]);
			}
			g.closePath();
			g.fill();
		},

		//--------------------------------------------------------------------------
		// pc.getDotFillColor()  The circle fill color, or null for no fill.
		// pc.getDotOutlineColor()  The circle outline color, or null for no outline.
		// pc.getDotRadius()  The circle radius, as a fraction.
		// pc.drawDots()  Draw circles on all dot positions
		//--------------------------------------------------------------------------
		getDotFillColor: function(dot) {
			if (dot.getDot() === 1) {
				return "white";
			}
			if (dot.getDot() === 2) {
				return dot.iserror() ? this.errcolor1 : this.quescolor;
			}
			return null;
		},
		getDotOutlineColor: function(dot) {
			if (dot.getDot() === 1) {
				return dot.iserror() ? this.errcolor1 : this.quescolor;
			}
			return null;
		},
		getDotRadius: function(dot) {
			return 0.18;
		},

		drawDots: function() {
			var g = this.vinc("dot", "auto");

			g.lineWidth = Math.max(this.cw * 0.04, 1);
			var d = this.range;
			var dlist = this.board.dotinside(d.x1, d.y1, d.x2, d.y2);
			for (var i = 0; i < dlist.length; i++) {
				var dot = dlist[i],
					bx = dot.bx,
					by = dot.by;

				g.vid = "s_dot_" + dot.id;
				var outline = this.getDotOutlineColor(dot);
				var color = this.getDotFillColor(dot);
				if (!!color || !!outline) {
					g.strokeStyle = outline;
					g.fillStyle = color;
					g.shapeCircle(
						bx * this.bw,
						by * this.bh,
						this.cw * this.getDotRadius(dot)
					);
				} else {
					g.vhide();
				}
			}
		},

		//---------------------------------------------------------------------------
		// pc.drawDashedCenterLines() セルの中心から中心にひかれる点線をCanvasに描画する
		//---------------------------------------------------------------------------
		drawDashedCenterLines: function() {
			var g = this.vinc("centerline", "crispEdges", true),
				bd = this.board;

			var x1 = this.range.x1,
				y1 = this.range.y1,
				x2 = this.range.x2,
				y2 = this.range.y2;
			if (x1 < bd.minbx + 1) {
				x1 = bd.minbx + 1;
			}
			if (x2 > bd.maxbx - 1) {
				x2 = bd.maxbx - 1;
			}
			if (y1 < bd.minby + 1) {
				y1 = bd.minby + 1;
			}
			if (y2 > bd.maxby - 1) {
				y2 = bd.maxby - 1;
			}
			x1 -= ~x1 & 1;
			y1 -= ~y1 & 1;
			x2 += ~x2 & 1;
			y2 += ~y2 & 1; /* (x1,y1)-(x2,y2)を外側の奇数範囲まで広げる */

			var dasharray = this.getDashArray();

			g.lineWidth = 1;
			g.strokeStyle = this.gridcolor;
			for (var i = x1; i <= x2; i += 2) {
				var px = i * this.bw,
					py1 = y1 * this.bh,
					py2 = y2 * this.bh;
				g.vid = "cliney_" + i;
				g.strokeDashedLine(px, py1, px, py2, dasharray);
			}
			for (var i = y1; i <= y2; i += 2) {
				var py = i * this.bh,
					px1 = x1 * this.bw,
					px2 = x2 * this.bw;
				g.vid = "clinex_" + i;
				g.strokeDashedLine(px1, py, px2, py, dasharray);
			}
		},

		getDashArray: function() {
			var dashCount = Math.max(Math.round(this.cw / 10), 4);
			var stepSize = this.cw / dashCount;
			var lengthOn = (5 / 8) * stepSize;
			var lengthOff = stepSize - lengthOn;

			var dasharray = [];
			dasharray.push(lengthOn / 2, lengthOff);
			for (var i = 0; i < dashCount - 1; i++) {
				dasharray.push(lengthOn, lengthOff);
			}
			dasharray.push(lengthOn / 2);
			dasharray.push(0);
			return dasharray;
		},

		//---------------------------------------------------------------------------
		// pc.drawGrid()        セルの枠線(実線)をCanvasに書き込む
		// pc.drawDashedGrid()  セルの枠線(点線)をCanvasに書き込む
		//---------------------------------------------------------------------------
		drawGrid: function(haschassis, isdraw) {
			var g = this.vinc("grid", "crispEdges", true),
				bd = this.board;

			// ignore excells
			var minx = Math.max(bd.minbx, 0),
				maxx = Math.min(bd.maxbx, 2 * bd.cols);
			var miny = Math.max(bd.minby, 0),
				maxy = Math.min(bd.maxby, 2 * bd.rows);

			// 外枠まで描画するわけじゃないので、maxbxとか使いません
			var x1 = this.range.x1,
				y1 = this.range.y1,
				x2 = this.range.x2,
				y2 = this.range.y2;
			if (x1 < minx) {
				x1 = minx;
			}
			if (x2 > maxx) {
				x2 = maxx;
			}
			if (y1 < miny) {
				y1 = miny;
			}
			if (y2 > maxy) {
				y2 = maxy;
			}
			x1 -= x1 & 1;
			y1 -= y1 & 1; /* (x1,y1)を外側の偶数位置に移動する */
			if (x1 >= x2 || y1 >= y2) {
				return;
			}

			var bs = bd.hasborder !== 2 && haschassis !== false ? 2 : 0,
				bw = this.bw,
				bh = this.bh;
			var xa = Math.max(x1, minx + bs),
				xb = Math.min(x2, maxx - bs);
			var ya = Math.max(y1, miny + bs),
				yb = Math.min(y2, maxy - bs);

			// isdraw!==false: 指定無しかtrueのときは描画する
			g.lineWidth = this.gw;
			g.strokeStyle = this.gridcolor;
			for (var i = xa; i <= xb; i += 2) {
				g.vid = "bdy_" + i;
				if (isdraw !== false) {
					var px = i * bw,
						py1 = y1 * bh,
						py2 = y2 * bh;
					g.strokeLine(px, py1, px, py2);
				} else {
					g.vhide();
				}
			}
			for (var i = ya; i <= yb; i += 2) {
				g.vid = "bdx_" + i;
				if (isdraw !== false) {
					var py = i * bh,
						px1 = x1 * bw,
						px2 = x2 * bw;
					g.strokeLine(px1, py, px2, py);
				} else {
					g.vhide();
				}
			}
		},
		drawDashedGrid: function(haschassis) {
			var g = this.vinc("grid", "crispEdges", true),
				bd = this.board;

			// ignore excells
			var minx = Math.max(bd.minbx, 0),
				maxx = Math.min(bd.maxbx, 2 * bd.cols);
			var miny = Math.max(bd.minby, 0),
				maxy = Math.min(bd.maxby, 2 * bd.rows);

			// 外枠まで描画するわけじゃないので、maxbxとか使いません
			var x1 = this.range.x1,
				y1 = this.range.y1,
				x2 = this.range.x2,
				y2 = this.range.y2;
			if (x1 < minx) {
				x1 = minx;
			}
			if (x2 > maxx) {
				x2 = maxx;
			}
			if (y1 < miny) {
				y1 = miny;
			}
			if (y2 > maxy) {
				y2 = maxy;
			}
			x1 -= x1 & 1;
			y1 -= y1 & 1;
			x2 += x2 & 1;
			y2 += y2 & 1; /* (x1,y1)-(x2,y2)を外側の偶数範囲に移動する */

			var dasharray = this.getDashArray();

			var bs = haschassis !== false ? 2 : 0,
				bw = this.bw,
				bh = this.bh;
			var xa = Math.max(x1, minx + bs),
				xb = Math.min(x2, maxx - bs);
			var ya = Math.max(y1, miny + bs),
				yb = Math.min(y2, maxy - bs);

			g.lineWidth = this.gw;
			g.strokeStyle = this.gridcolor;
			for (var i = xa; i <= xb; i += 2) {
				var px = i * bw,
					py1 = y1 * bh,
					py2 = y2 * bh;
				g.vid = "bdy_" + i;
				g.strokeDashedLine(px, py1, px, py2, dasharray);
			}
			for (var i = ya; i <= yb; i += 2) {
				var py = i * bh,
					px1 = x1 * bw,
					px2 = x2 * bw;
				g.vid = "bdx_" + i;
				g.strokeDashedLine(px1, py, px2, py, dasharray);
			}
		},

		//---------------------------------------------------------------------------
		// pc.drawChassis()     外枠をCanvasに書き込む
		// pc.drawChassis_ex1() bd.hasexcell==1の時の外枠をCanvasに書き込む
		//---------------------------------------------------------------------------
		drawChassis: function(withexcell) {
			var g = this.vinc("chassis", "crispEdges", true),
				bd = this.board;

			var exWidth = withexcell ? bd.minbx * -0.5 * this.cw : 0;
			var exHeight = withexcell ? bd.minby * -0.5 * this.ch : 0;

			var boardWidth = bd.cols * this.cw,
				boardHeight = bd.rows * this.ch;
			var lw = this.lw,
				lm = this.lm;
			if (this.pid === "bosanowa") {
				lw = 1;
				lm = 0.5;
			}
			g.fillStyle = this.quescolor;
			g.vid = "chs1_";
			g.fillRect(-lm, -exHeight - lm, lw, boardHeight + exHeight + lw);
			g.vid = "chs2_";
			g.fillRect(
				boardWidth - lm,
				-exHeight - lm,
				lw,
				boardHeight + exHeight + lw
			);
			g.vid = "chs3_";
			g.fillRect(-exWidth - lm, -lm, boardWidth + exWidth + lw, lw);
			g.vid = "chs4_";
			g.fillRect(
				-exWidth - lm,
				boardHeight - lm,
				boardWidth + exWidth + lw,
				lw
			);
		},
		drawChassis_ex1: function(boldflag) {
			var g = this.vinc("chassis_ex1", "crispEdges", true),
				bd = this.board;

			var x1 = this.range.x1,
				y1 = this.range.y1,
				x2 = this.range.x2,
				y2 = this.range.y2;
			if (x1 <= 0) {
				x1 = bd.minbx;
			}
			if (x2 > bd.maxbx) {
				x2 = bd.maxbx;
			}
			if (y1 <= 0) {
				y1 = bd.minby;
			}
			if (y2 > bd.maxby) {
				y2 = bd.maxby;
			}

			var lw = this.lw,
				lm = this.lm;
			var boardWidth = bd.cols * this.cw,
				boardHeight = bd.rows * this.ch;

			// extendcell==1も含んだ外枠の描画
			g.fillStyle = this.quescolor;
			g.vid = "chsex1_1_";
			g.fillRect(-this.cw - lm, -this.ch - lm, lw, boardHeight + this.ch + lw);
			g.vid = "chsex1_2_";
			g.fillRect(
				boardWidth - lm,
				-this.ch - lm,
				lw,
				boardHeight + this.ch + lw
			);
			g.vid = "chsex1_3_";
			g.fillRect(-this.cw - lm, -this.ch - lm, boardWidth + this.cw + lw, lw);
			g.vid = "chsex1_4_";
			g.fillRect(
				-this.cw - lm,
				boardHeight - lm,
				boardWidth + this.cw + lw,
				lw
			);

			// 通常のセルとextendcell==1の間の描画
			if (boldflag) {
				// すべて太線で描画する場合
				g.vid = "chs1_";
				g.fillRect(-lm, -lm, lw, boardHeight + lw - 1);
				g.vid = "chs2_";
				g.fillRect(-lm, -lm, boardWidth + lw - 1, lw);
			} else {
				// ques==51のセルが隣接している時に細線を描画する場合
				g.vid = "chs1_";
				g.fillRect(-0.5, -0.5, 1, boardHeight);
				g.vid = "chs2_";
				g.fillRect(-0.5, -0.5, boardWidth, 1);

				var clist = this.range.cells;
				for (var i = 0; i < clist.length; i++) {
					var cell = clist[i],
						px = (cell.bx - 1) * this.bw,
						py = (cell.by - 1) * this.bh;

					if (cell.bx === 1) {
						g.vid = "chs1_sub_" + cell.by;
						if (cell.ques !== 51) {
							g.fillRect(-lm, py - lm, lw, this.ch + lw);
						} else {
							g.vhide();
						}
					}

					if (cell.by === 1) {
						g.vid = "chs2_sub_" + cell.bx;
						if (cell.ques !== 51) {
							g.fillRect(px - lm, -lm, this.cw + lw, lw);
						} else {
							g.vhide();
						}
					}
				}
			}
		},

		lastBankPieceCount: 0,
		drawBank: function() {
			if (
				!this.showBank ||
				(!this.range.bank && this.range.bankPieces.length === 0)
			) {
				return;
			}

			var g = this.vinc("piecebank"),
				bd = this.board;

			var count = Math.max(bd.bank.pieces.length, this.lastBankPieceCount);

			for (var p = 0; p < count; p++) {
				var piece = bd.bank.pieces[p];
				if (!this.range.bank && this.range.bankPieces.indexOf(piece) === -1) {
					continue;
				}

				this.drawBankPiece(g, piece, p);
			}

			this.drawBankAddButton();

			this.lastBankPieceCount = bd.bank.pieces.length;
		},
		drawBankPiece: function(g, piece, idx) {},
		getBankPieceColor: function(piece) {
			return piece.error
				? this.errcolor1
				: piece.qcmp
				? this.qcmpcolor
				: this.quescolor;
		},
		drawBankAddButton: function() {
			var g = this.vinc("piecebank_add", "crispEdges"),
				bd = this.board,
				addButton = bd.bank.addButton;
			var showAdd =
				this.puzzle.editmode &&
				!this.outputImage &&
				addButton.index !== null &&
				(this.range.bank || this.range.bankPieces.indexOf(addButton) !== -1);

			if (
				addButton.index !== null &&
				(this.range.bank || this.range.bankPieces.indexOf(addButton) !== -1)
			) {
				var r = this.bankratio;
				var px = this.cw * r * (addButton.x + 0.25) + 1;
				var py = this.ch * r * (addButton.y + 0.25) + 1;
				py += (this.board.rows + this.bankVerticalOffset) * this.ch;
				var px2 = px + this.cw * r * addButton.w - 1;
				var py2 = py + this.ch * r * addButton.h - 1;
				for (var i = 0; i < 4; i++) {
					g.vid = "pb_piece_add_" + i;
					if (showAdd) {
						g.strokeStyle = "blue";
						g.strokeDashedLine(
							i < 2 ? px : px2,
							i < 2 ? py : py2,
							i % 2 ? px : px2,
							i % 2 ? py2 : py,
							[3]
						);
					} else {
						g.vhide();
					}
				}

				g.vid = "pb_piece_add_symbol";
				if (showAdd) {
					g.fillStyle = "blue";
					var option = { style: "bold" };
					this.disptext(
						"+",
						px + 0.5 * r * this.cw * addButton.w,
						py + 0.5 * r * this.ch * addButton.h,
						option
					);
				} else {
					g.vhide();
				}
			}
		}
	}
});

// KeyCommon.js v3.4.1

pzpr.classmgr.makeCommon({
	//---------------------------------------------------------
	KeyEvent: {
		//---------------------------------------------------------------------------
		// kc.key_inputcross() 上限maxまでの数字をCrossの問題データをして入力する(keydown時)
		//---------------------------------------------------------------------------
		key_inputcross: function(ca) {
			var cross = this.cursor.getx();
			var max = cross.getmaxnum(),
				val = -1;

			if ("0" <= ca && ca <= "9") {
				var num = +ca,
					cur = cross.qnum;
				if (cur <= 0 || cur * 10 + num > max) {
					cur = 0;
				}
				val = cur * 10 + num;
				if (val > max) {
					return;
				}
			} else if (ca === "-") {
				val = cross.qnum !== -2 ? -2 : -1;
			} else if (ca === " " || ca === "BS") {
				val = -1;
			} else {
				return;
			}

			cross.setQnum(val);
			cross.draw();
		},
		//---------------------------------------------------------------------------
		// kc.key_inputqnum() 上限maxまでの数字をCellの問題データをして入力する(keydown時)
		//---------------------------------------------------------------------------
		key_inputqnum: function(ca) {
			var cell = this.cursor.getc();
			if (
				cell.enableSubNumberArray &&
				this.puzzle.playmode &&
				ca === "shift" &&
				cell.noNum()
			) {
				this.cursor.chtarget();
			} else {
				this.key_inputqnum_main(cell, ca);
			}
		},
		key_inputqnum_main: function(cell, ca) {
			var cell0 = cell,
				puzzle = this.puzzle,
				bd = puzzle.board;
			if (puzzle.editmode && bd.roommgr.hastop) {
				cell0 = cell = cell.room.top;
			} else if (puzzle.execConfig("dispmove")) {
				if (cell.isDestination()) {
					cell = cell.base;
				} else if (cell.lcnt > 0) {
					return;
				}
			}

			if (cell.enableSubNumberArray && this.cursor.targetdir >= 2) {
				var snumpos = [-1, -1, 2, 3, 1, 0][this.cursor.targetdir];
				if (snumpos === -1) {
					return;
				}
				var val = this.getNewNumber(cell, ca, cell.snum[snumpos]);
				if (val === null) {
					return;
				}
				cell.setSnum(snumpos, val);
			} else {
				var val = this.getNewNumber(cell, ca, cell.getNum());
				if (val === null) {
					return;
				}
				cell.setNum(val);
				if (cell.numberWithMB && cell.enableSubNumberArray && ca === " ") {
					cell.clrSnum();
				}
			}

			if (puzzle.execConfig("dispmove") && cell.noNum()) {
				cell.eraseMovedLines(); /* 丸数字がなくなったら付属する線も消去する */
			}

			cell0.draw();
			this.prev = cell;
			this.cancelDefault = true;
		},
		getNewNumber: function(cell, ca, cur) {
			var max = cell.getmaxnum(),
				min = cell.getminnum(),
				val = null;

			if ("0" <= ca && ca <= "9" && !cell.numberAsLetter) {
				var num = +ca;
				if (cur <= 0 || cur * 10 + num > max || this.prev !== cell) {
					cur = 0;
				}
				val = cur * 10 + num;
				if (val > max || (min > 0 && val === 0)) {
					val = null;
				}
			} else if (
				"a" <= ca &&
				ca <= "z" &&
				ca.length === 1 &&
				cell.numberAsLetter
			) {
				if (ca.length > 1 && ca !== "BS") {
					return null;
				}
				var num = parseInt(ca, 36) - 10;
				if (cur > 0 && (cur - 1) % 26 === num) {
					// Same alphabet
					val = cur <= 26 ? cur + 26 : -1;
				} else {
					val = num + 1;
				}
				if (val > max || (min > 0 && val === 0)) {
					val = null;
				}
			} else if (ca === "BS") {
				if (cur < 10 || cell.numberAsLetter) {
					val = -1;
				} else {
					val = (cur / 10) | 0;
				}
			} else if (ca === "-") {
				val = this.puzzle.editmode && !cell.disInputHatena ? -2 : -1;
			} else if (ca === " ") {
				val = -1;
			} else if (ca === "s1") {
				val = -2;
			} else if (ca === "s2") {
				val = -3;
			} else if (ca === "s3") {
				val = -4;
			} else if (ca === "s4") {
				val = -5;
			} else {
				val = null;
			}

			return val;
		},

		//---------------------------------------------------------------------------
		// kc.key_inputqnums()  Input for Tapa-style clues
		//---------------------------------------------------------------------------
		key_inputqnums: function(ca) {
			var cell = this.cursor.getc(),
				nums = cell.qnums,
				val = [];

			if (("0" <= ca && ca <= "9") || ca === "-") {
				var num = ca !== "-" ? +ca : -2;
				if (num !== -2 && (num < cell.getminnum() || num > cell.getmaxnum())) {
					return;
				}
				if (this.prev === cell) {
					val = nums.slice();
				}
				var existing = cell.distinctQnums && num !== -2 ? val.indexOf(num) : -1;
				if (existing >= 0) {
					val.splice(existing, 1);
				} else {
					val.push(num);
				}
				if (!cell.isValidQnums(val)) {
					val = [num];
				}
			} else if (ca === "BS") {
				if (nums.length > 1) {
					for (var i = 0; i < nums.length - 1; i++) {
						val.push(nums[i]);
					}
				}
			} else if (ca === " ") {
				val = [];
			} else {
				return;
			}

			cell.setQnums(val);
			cell.setQans(0);
			cell.setQsub(0);

			this.prev = cell;
			cell.draw();
		},

		//---------------------------------------------------------------------------
		// kc.key_inputexcell()  Input for excell clues
		//---------------------------------------------------------------------------
		key_inputexcell: function(ca) {
			var excell = this.cursor.getex();
			if (excell.isnull) {
				return;
			}

			var qn = excell.qnum,
				max = excell.getmaxnum();

			if ("0" <= ca && ca <= "9") {
				var num = +ca;

				if (qn <= 0 || this.prev !== excell) {
					if (num <= max) {
						excell.setQnum(num);
					}
				} else {
					if (qn * 10 + num <= max) {
						excell.setQnum(qn * 10 + num);
					} else if (num <= max) {
						excell.setQnum(num);
					}
				}
			} else if (ca === " " || ca === "-") {
				excell.setQnum(-1);
			} else {
				return;
			}

			this.prev = excell;
			this.cursor.draw();
		},

		//---------------------------------------------------------------------------
		// kc.key_inputarrow()  四方向の矢印などを設定する
		// kc.key_inputdirec()  四方向の矢印つき数字の矢印を設定する
		//---------------------------------------------------------------------------
		key_inputarrow: function(ca) {
			return this.key_inputdirec_common(ca, false);
		},
		key_inputdirec: function(ca) {
			return this.key_inputdirec_common(ca, true);
		},
		key_inputdirec_common: function(ca, arrownum) {
			// 共通処理
			var cell = this.cursor.getc();
			if (arrownum && cell.getNum() === -1) {
				return false;
			}

			var dir = cell.NDIR;
			switch (ca) {
				case "shift+up":
					dir = cell.UP;
					break;
				case "shift+down":
					dir = cell.DN;
					break;
				case "shift+left":
					dir = cell.LT;
					break;
				case "shift+right":
					dir = cell.RT;
					break;
			}

			if (dir !== cell.NDIR) {
				cell.setQdir(cell.qdir !== dir ? dir : cell.NDIR);
				if (arrownum === false) {
					cell.setNum(-1);
				} else if (cell.getNum() === -1) {
					cell.setNum(-2);
				}
				this.cursor.draw();
				return true;
			}
			return false;
		},

		//---------------------------------------------------------------------------
		// kc.inputnumber51()  [＼]の数字等を入力する
		// kc.setnum51()      モード別に数字を設定する
		// kc.getnum51()      モード別に数字を取得する
		//---------------------------------------------------------------------------
		inputnumber51: function(ca) {
			var cursor = this.cursor;
			if (ca === "shift") {
				cursor.chtarget();
				return;
			}

			var piece = cursor.getobj(); /* cell or excell */
			var target = cursor.detectTarget(piece);
			if (target === 0 || (piece.group === "cell" && piece.is51cell())) {
				if (ca === "q" && !piece.isnull) {
					if (!piece.is51cell()) {
						piece.set51cell();
					} else {
						piece.remove51cell();
					}
					cursor.drawaround();
					return;
				}
			}
			if (target === 0) {
				return;
			}

			var def = this.klass.Cell.prototype[
				target === piece.RT ? "qnum" : "qnum2"
			];
			var max = piece.getmaxnum(),
				val = def;

			if ("0" <= ca && ca <= "9") {
				var num = +ca,
					cur = this.getnum51(piece, target);
				if (cur <= 0 || cur * 10 + num > max || this.prev !== piece) {
					cur = 0;
				}
				val = cur * 10 + num;
				if (val > max) {
					return;
				}
			} else if (ca === "BS") {
				var cur = this.getnum51(piece, target);
				val = cur >= 10 ? (cur / 10) | 0 : def;
			} else if (ca === "-" || ca === " ") {
				val = def;
			} else {
				return;
			}

			this.setnum51(piece, target, val);
			this.prev = piece;
			cursor.draw();
		},
		setnum51: function(piece, target, val) {
			/* piece : cell or excell */
			piece.setQnumDir(target, val);
		},
		getnum51: function(piece, target) {
			/* piece : cell or excell */
			return piece.getQnumDir(target);
		}
	}
});

// MouseCommon.js v3.4.1

pzpr.classmgr.makeCommon({
	//---------------------------------------------------------
	MouseEvent: {
		// 共通関数
		//---------------------------------------------------------------------------
		// mv.inputcell() Cellのqans(回答データ)に0/1/2のいずれかを入力する。
		// mv.decIC()     0/1/2どれを入力すべきかを決定する。
		//---------------------------------------------------------------------------
		inputShade: function() {
			this.inputcell();
		},
		inputcell: function() {
			var cell = this.getcell();
			if (cell.isnull || cell === this.mouseCell) {
				return;
			}
			if (this.inputData === null) {
				this.decIC(cell);
			}

			this.mouseCell = cell;
			this.initFirstCell(cell);

			var shade = 1,
				unshade = 2;
			if (this.inputData === shade && !cell.allowShade()) {
				return;
			}
			if (this.inputData === unshade && !cell.allowUnshade()) {
				return;
			}

			if (this.RBShadeCell && this.inputData === shade) {
				var cell0 = this.firstCell;
				if (
					((cell0.bx & 2) ^ (cell0.by & 2)) !==
					((cell.bx & 2) ^ (cell.by & 2))
				) {
					return;
				}
			}
			if (this.RBShadeCell && this.inputData !== shade) {
				if (this.firstState !== 1 && cell.qans === 1 && this.btn === "right") {
					return;
				}
			}

			cell.setQans(this.inputData === shade ? 1 : 0);
			cell.setQsub(this.inputData === unshade ? 1 : 0);

			cell.draw();
		},
		initFirstCell: function(cell) {
			if (!this.firstCell.isnull) {
				return;
			}
			this.firstCell = cell;
			this.firstState = cell.qans;
		},
		decIC: function(cell) {
			if (this.inputMode === "shade") {
				this.inputData = cell.qans !== 1 ? 1 : 0;
			} else if (this.inputMode === "unshade") {
				this.inputData = cell.qsub !== 1 ? 2 : 0;
			} else if (
				this.puzzle.getConfig("use") === 1 &&
				this.pid !== "patchwork"
			) {
				if (this.btn === "left") {
					this.inputData = cell.qans !== 1 ? 1 : 0;
				} else if (this.btn === "right") {
					this.inputData = cell.qsub !== 1 ? 2 : 0;
				}
			} else {
				if (!cell.allowShade()) {
					this.inputData = cell.qsub !== 1 ? 2 : 0;
				} else if (!cell.allowUnshade()) {
					this.inputData = cell.qans !== 1 ? 1 : 0;
				} else if (this.btn === "left") {
					if (cell.qans === 1) {
						this.inputData = 2;
					} else if (cell.qsub === 1) {
						this.inputData = 0;
					} else {
						this.inputData = 1;
					}
				} else if (this.btn === "right") {
					if (cell.qans === 1) {
						this.inputData = 0;
					} else if (cell.qsub === 1) {
						this.inputData = 1;
					} else {
						this.inputData = 2;
					}
				}
			}
		},

		//---------------------------------------------------------------------------
		// mv.inputclean_cell() Cellのqans(回答データ)を消去する
		//---------------------------------------------------------------------------
		inputclean_cell: function() {
			var cell = this.getcell();
			if (cell.isnull || cell === this.mouseCell) {
				return;
			}

			this.mouseCell = cell;

			var clist = new this.klass.CellList([cell]);
			if (this.puzzle.playmode) {
				clist.ansclear();
			} else {
				clist.allclear();
			}

			cell.draw();
		},

		//---------------------------------------------------------------------------
		// mv.inputqnum()      Cellのqnum(数字データ)に数字を入力する
		// mv.inputqnum_main() Cellのqnum(数字データ)に数字を入力する(メイン処理)
		//---------------------------------------------------------------------------
		inputqnum: function() {
			var cell = this.getcell();
			if (cell.isnull || cell === this.mouseCell) {
				return;
			}

			if (
				this.cursor.modesnum &&
				this.puzzle.playmode &&
				!this.cursor.checksnum(this.inputPoint) &&
				cell.noNum()
			) {
				this.setcursorsnum(cell);
			} else if (cell !== this.cursor.getc()) {
				this.setcursor(cell);
			} else {
				this.inputqnum_main(cell);
			}
			this.mouseCell = cell;
		},
		inputqnum_main: function(cell) {
			var cell0 = cell,
				puzzle = this.puzzle;
			if (
				puzzle.playmode &&
				cell.qnum !== puzzle.klass.Cell.prototype.qnum &&
				!puzzle.klass.Cell.prototype.supportQnumAnum
			) {
				return;
			}

			if (puzzle.editmode && puzzle.board.roommgr.hastop) {
				cell0 = cell = cell.room.top;
			} else if (puzzle.execConfig("dispmove")) {
				if (cell.isDestination()) {
					cell = cell.base;
				} else if (cell.lcnt > 0) {
					return;
				}
			}

			if (
				cell.enableSubNumberArray &&
				puzzle.playmode &&
				this.cursor.targetdir >= 2
			) {
				var snumpos = [-1, -1, 2, 3, 1, 0][this.cursor.targetdir];
				if (snumpos === -1) {
					return;
				}
				cell.setSnum(snumpos, this.getNewNumber(cell, cell.snum[snumpos]));
			} else if (puzzle.editmode && cell.ques === 51) {
				var target = puzzle.cursor.detectTarget(cell);
				puzzle.key.setnum51(
					cell,
					target,
					this.getNewNumber(cell, puzzle.key.getnum51(cell, target))
				);
			} else {
				cell.setNum(this.getNewNumber(cell, cell.getNum()));
			}

			if (puzzle.execConfig("dispmove") && cell.noNum()) {
				cell.eraseMovedLines(); /* 丸数字がなくなったら付属する線も消去する */
			}

			cell0.draw();
		},
		getNewNumber: function(cell, num) {
			var puzzle = this.puzzle,
				ishatena = puzzle.editmode && !cell.disInputHatena;
			var max = cell.getmaxnum(),
				min = cell.getminnum(),
				val = -1,
				qs = cell.qsub;

			var subtype = 0; // qsubを0～いくつまで入力可能かの設定
			if (puzzle.editmode) {
				subtype = -1;
				if (this.puzzle.painter.enablebcolor) {
					qs = 0;
				}
			} else if (this.cursor.targetdir >= 2) {
				subtype = 0;
				qs = 0;
			} else if (cell.numberWithMB) {
				subtype = 2;
				qs = cell.qsub;
			} else if (
				puzzle.pid === "roma" ||
				puzzle.pid === "arrowflow" ||
				puzzle.pid === "yinyang"
			) {
				subtype = 0;
			} // 全マス埋めるタイプのパズルは補助記号なし
			else if (cell.numberAsObject || puzzle.pid === "hebi") {
				subtype = 1;
			}

			// playmode: subtypeは0以上、 qsにqsub値が入る
			// editmode: subtypeは-1固定、qsは常に0が入る
			if (this.btn === "left") {
				if (num >= max) {
					val = subtype >= 1 ? -2 : -1;
				} else if (qs === 1) {
					val = subtype >= 2 ? -3 : -1;
				} else if (qs === 2) {
					val = -1;
				} else if (num === -1) {
					val = ishatena ? -2 : min;
				} else if (num < min) {
					val = min;
				} else {
					val = num + 1;
				}
			} else if (this.btn === "right") {
				if (qs === 1) {
					val = max;
				} else if (qs === 2) {
					val = -2;
				} else if (num === -1) {
					if (subtype === 1) {
						val = -2;
					} else if (subtype === 2) {
						val = -3;
					} else {
						val = max;
					}
				} else if (num > max) {
					val = max;
				} else if (num <= min && num !== -2) {
					val = ishatena ? -2 : -1;
				} else if (num === -2) {
					val = -1;
				} else {
					val = num - 1;
				}
			}
			return val;
		},

		//---------------------------------------------------------------------------
		// mv.inputFixedNumber() Cellに固定のqnum/anum値を入力する
		//---------------------------------------------------------------------------
		inputFixedNumber: function(num) {
			var cell = this.getcell();
			if (cell.isnull || cell === this.mouseCell) {
				return;
			}

			var val = cell.getNum();
			if (val === -1 && cell.qsub > 0) {
				val = -1 - cell.qsub;
			}
			if (this.inputData === null) {
				this.inputData = val === num ? -1 : num;
			}
			if (val !== num || this.inputData === -1) {
				cell.setNum(this.inputData);
				cell.draw();
			}
			this.mouseCell = cell;
		},

		//---------------------------------------------------------------------------
		// mv.inputQues() Cellのquesデータをarrayのとおりに入力する
		//---------------------------------------------------------------------------
		inputQues: function(array) {
			var cell = this.getcell();
			if (cell.isnull) {
				return;
			}

			if (cell !== this.cursor.getc() && this.inputMode === "auto") {
				this.setcursor(cell);
			} else {
				this.inputQues_main(array, cell);
			}
		},
		inputQues_main: function(array, cell) {
			var qu = cell.ques,
				len = array.length;
			if (this.btn === "left") {
				for (var i = 0; i <= len - 1; i++) {
					if (qu === array[i]) {
						cell.setQues(array[i < len - 1 ? i + 1 : 0]);
						break;
					}
				}
			} else {
				for (var i = len - 1; i >= 0; i--) {
					if (qu === array[i]) {
						cell.setQues(array[i > 0 ? i - 1 : len - 1]);
						break;
					}
				}
			}
			cell.draw();
		},

		//---------------------------------------------------------------------------
		// mv.inputMB()        Cellのqsub(補助記号)の○, ×データを入力する
		// mv.inputFixedQsub() Cellのqsub(補助記号)の○, ×データを固定で入力する
		// mv.inputBGcolor()   Cellの背景色を入力する
		//---------------------------------------------------------------------------
		inputMB: function() {
			var cell = this.getcell();
			if (cell.isnull) {
				return;
			}

			cell.setQsub((this.btn === "left" ? [1, 2, 0] : [2, 0, 1])[cell.qsub]);
			cell.draw();
		},
		inputFixedQsub: function(val) {
			var cell = this.getcell();
			if (cell.isnull || cell.is51cell() || cell === this.mouseCell) {
				return;
			}

			if (this.inputData === null) {
				this.inputData = cell.qsub !== val ? val : 0;
			}
			cell.setQsub(this.inputData);
			cell.draw();
			this.mouseCell = cell;
		},
		inputBGcolor: function() {
			var cell = this.getcell();
			if (cell.isnull || cell.is51cell() || cell === this.mouseCell) {
				return;
			}
			if (this.inputData !== null) {
			} else if (this.inputMode === "bgcolor1") {
				this.inputMode = cell.qsub !== 1 ? 11 : 10;
			} else if (this.inputMode === "bgcolor2") {
				this.inputMode = cell.qsub !== 2 ? 12 : 10;
			} else if (this.btn === "left") {
				if (cell.qsub === 0) {
					this.inputData = 11;
				} else if (cell.qsub === 1) {
					this.inputData = 12;
				} else {
					this.inputData = 10;
				}
			} else {
				if (cell.qsub === 0) {
					this.inputData = 12;
				} else if (cell.qsub === 1) {
					this.inputData = 10;
				} else {
					this.inputData = 11;
				}
			}
			cell.setQsub(this.inputData - 10);
			cell.draw();

			this.mouseCell = cell;
		},

		//---------------------------------------------------------------------------
		// mv.inputdirec()      Cellのdirec(方向)のデータを入力する
		// mv.inputarrow_cell() Cellの矢印を入力する
		//---------------------------------------------------------------------------
		inputdirec: function() {
			var pos = this.getpos(0);
			if (this.prevPos.equals(pos)) {
				return;
			}

			var cell = this.prevPos.getc();
			if (!cell.isnull) {
				if (cell.qnum !== -1) {
					var dir = this.prevPos.getdir(pos, 2);
					if (dir !== cell.NDIR) {
						cell.setQdir(cell.qdir !== dir ? dir : 0);
						cell.draw();
					}
				}
			}
			this.prevPos = pos;
		},
		inputarrow_cell: function() {
			var pos = this.getpos(0);
			if (this.prevPos.equals(pos) && this.inputData === 1) {
				return;
			}

			var dir = pos.NDIR,
				cell = this.prevPos.getc();
			if (!cell.isnull) {
				var dir = this.prevPos.getdir(pos, 2);
				if (dir !== pos.NDIR) {
					this.inputarrow_cell_main(cell, dir);
					cell.draw();
					this.mousereset();
					return;
				}
			}
			this.prevPos = pos;
		},
		inputarrow_cell_main: function(cell, dir) {
			if (cell.numberAsObject) {
				cell.setNum(dir);
			} else {
				cell.setQdir(dir);
			}
		},

		//---------------------------------------------------------------------------
		// mv.inputtile()  黒タイル、白タイルを入力する
		//---------------------------------------------------------------------------
		inputtile: function() {
			var cell = this.getcell();
			if (cell.isnull || cell.is51cell() || cell === this.mouseCell) {
				return;
			}
			if (this.inputData === null) {
				this.decIC(cell);
			}

			this.mouseCell = cell;
			var clist = cell.room.clist;
			for (var i = 0; i < clist.length; i++) {
				var cell2 = clist[i];
				if (this.inputData === 1 || cell2.qsub !== 3) {
					(this.inputData === 1 ? cell2.setShade : cell2.clrShade).call(cell2);
					cell2.setQsub(this.inputData === 2 ? 1 : 0);
				}
			}
			clist.draw();
		},

		//---------------------------------------------------------------------------
		// mv.inputIcebarn()  アイスバーンを入力する
		//---------------------------------------------------------------------------
		inputIcebarn: function() {
			var cell = this.getcell();
			if (cell.isnull || cell === this.mouseCell) {
				return;
			}
			if (this.inputData === null) {
				this.inputData = cell.ice() ? 0 : 6;
			}

			cell.setQues(this.inputData);
			cell.drawaround();
			this.mouseCell = cell;
		},

		//---------------------------------------------------------------------------
		// mv.input51()            inputMode=='auto'時に[＼]を作ったり消したりする
		//---------------------------------------------------------------------------
		input51: function() {
			var piece = this.getcell_excell(); /* piece : cell or excell */
			if (piece.isnull) {
				return;
			}

			var group = piece.group;
			if (
				group === "excell" ||
				(group === "cell" && piece !== this.cursor.getc())
			) {
				this.setcursor(piece);
			} else if (group === "cell") {
				this.input51_main(piece);
			}
		},
		input51_main: function(cell) {
			if (this.btn === "right") {
				cell.remove51cell();
			} else if (this.btn === "left") {
				if (!cell.is51cell()) {
					cell.set51cell();
				} else {
					var dx = this.inputPoint.bx - cell.bx,
						dy = this.inputPoint.by - cell.by;
					this.cursor.chtarget(true, dx, dy);
				}
			}

			cell.drawaround();
		},

		//---------------------------------------------------------------------------
		// mv.input51_fixed()      inputMode固定時に[＼]を作ったり消したりする
		//---------------------------------------------------------------------------
		input51_fixed: function() {
			var cell = this.getcell();
			if (cell.isnull || cell === this.mouseCell) {
				return;
			}

			if (this.inputMode === "clear") {
				cell.remove51cell();
				this.inputData = 0;
			} else if (this.inputMode === "cell51" && !cell.is51cell()) {
				cell.set51cell();
				this.inputData = 51;
			}

			cell.drawaround();

			this.mouseCell = cell;
		},

		//---------------------------------------------------------------------------
		// mv.inputqnum_cell51()   [＼]のCellに数字を入力する
		//---------------------------------------------------------------------------
		inputqnum_cell51: function() {
			var piece = this.getcell_excell(); /* piece : cell or excell */
			if (piece.isnull || (this.mouseCell === piece && !this.mouseend)) {
				return;
			}

			if (
				this.mousestart &&
				(piece !== this.cursor.getobj() || piece.ques !== 51)
			) {
				this.setcursor(piece);
				this.mousereset();
			} else if (
				(this.mousestart && this.cursor.getNumOfTarget(piece) < 2) ||
				this.mouseend
			) {
				this.inputqnum_main(piece);
				this.mousereset();
			} else {
				this.mouseCell = piece;
				this.inputselect_cell51(piece);
			}
		},
		inputselect_cell51: function(cell) {
			if (this.mousestart) {
				this.prevPos = this.getpos(0);
			} else if (this.mousemove) {
				var dir = this.prevPos.getdir(this.getpos(0), 2);
				if (
					(dir === cell.RT || dir === cell.DN) &&
					dir !== this.cursor.targetdir
				) {
					this.cursor.targetdir = dir;
					this.cursor.draw();
				}
				if (dir !== cell.NDIR) {
					this.mousereset();
				}
			}
		},

		//---------------------------------------------------------------------------
		// mv.inputqnum_cross() Crossのques(問題データ)に0～4を入力する。
		// mv.inputcrossMark()  Crossの黒点を入力する。
		//---------------------------------------------------------------------------
		inputqnum_cross: function() {
			var cross = this.getcross();
			if (cross.isnull || cross === this.mouseCell) {
				return;
			}

			if (cross !== this.cursor.getx()) {
				this.setcursor(cross);
			} else {
				this.inputqnum_main(cross);
			}
			this.mouseCell = cross;
		},
		inputcross_main: function(cross) {
			if (this.btn === "left") {
				cross.setQnum(cross.qnum !== 4 ? cross.qnum + 1 : -2);
			} else if (this.btn === "right") {
				cross.setQnum(cross.qnum !== -2 ? cross.qnum - 1 : 4);
			}
			cross.draw();
		},
		inputcrossMark: function() {
			var pos = this.getpos(0.24);
			if (!pos.oncross()) {
				return;
			}
			var bd = this.board,
				bm = bd.hascross === 2 ? 0 : 2;
			if (
				pos.bx < bd.minbx + bm ||
				pos.bx > bd.maxbx - bm ||
				pos.by < bd.minby + bm ||
				pos.by > bd.maxby - bm
			) {
				return;
			}

			var cross = pos.getx();
			if (cross.isnull) {
				return;
			}

			this.puzzle.opemgr.disCombine = true;
			cross.setQnum(cross.qnum === 1 ? -1 : 1);
			this.puzzle.opemgr.disCombine = false;

			cross.draw();
		},

		//---------------------------------------------------------------------------
		// mv.inputclean_cross() Crossのqans(回答データ)を消去する
		//---------------------------------------------------------------------------
		inputclean_cross: function() {
			var cross = this.getcross();
			if (cross.isnull || cross === this.mouseCell) {
				return;
			}

			this.mouseCell = cross;

			var xlist = new this.klass.CrossList([cross]);
			if (this.puzzle.playmode) {
				xlist.ansclear();
			} else {
				xlist.allclear();
			}

			cross.draw();
		},

		//---------------------------------------------------------------------------
		// mv.inputborder()     盤面境界線のデータを入力する
		// mv.inputQsubLine()   盤面の境界線用補助記号を入力する
		//---------------------------------------------------------------------------
		inputborder: function() {
			var pos = this.getpos(0.35);
			if (this.prevPos.equals(pos)) {
				return;
			}

			var border = this.prevPos.getborderobj(pos);
			if (!border.isnull) {
				if (this.inputData === null) {
					this.inputData = border.isBorder() ? 0 : 1;
				}
				if (this.inputData === 1) {
					border.setBorder();
				} else if (this.inputData === 0) {
					border.removeBorder();
				}
				border.draw();
			}
			this.prevPos = pos;
		},
		inputQsubLine: function() {
			var pos = this.getpos(0);
			if (this.prevPos.equals(pos)) {
				return;
			}

			var border = this.prevPos.getnb(pos);
			if (!border.isnull) {
				if (this.inputData === null) {
					this.inputData = border.qsub === 0 ? 1 : 0;
				}
				if (this.inputData === 1) {
					border.setQsub(1);
				} else if (this.inputData === 0) {
					border.setQsub(0);
				}
				border.draw();
			}
			this.prevPos = pos;
		},

		//---------------------------------------------------------------------------
		// mv.inputLine()     盤面の線を入力する
		// mv.inputMoveLine() 移動系パズル向けに盤面の線を入力する
		//---------------------------------------------------------------------------
		inputLine: function() {
			/* "ものを動かしたように描画する"でなければinputLineと同じ */
			if (this.puzzle.execConfig("dispmove")) {
				this.inputMoveLine();
				return;
			}

			var cell = this.getcell();
			this.initFirstCell(cell);

			var pos, border;
			if (!this.board.borderAsLine) {
				pos = this.getpos(0);
				if (this.prevPos.equals(pos)) {
					return;
				}
				border = this.prevPos.getnb(pos);
			} else {
				pos = this.getpos(0.35);
				if (this.prevPos.equals(pos)) {
					return;
				}
				border = this.prevPos.getborderobj(pos);
			}

			if (!border.isnull) {
				if (this.inputData === null) {
					this.inputData = border.isLine() ? 0 : 1;
				}
				if (this.inputData === 1) {
					border.setLine();
				} else if (this.inputData === 0) {
					border.removeLine();
				}
				border.draw();
			}
			this.prevPos = pos;
		},
		inputMoveLine: function() {
			var moving = true;
			var targetCell = this.getcell();

			while (moving) {
				moving = false;
				var cell =
					this.mouseCell && !this.mousestart
						? this.mouseCell.getOrthogonalCell(targetCell)
						: targetCell;
				if (cell.isnull) {
					return;
				}

				var cell0 = this.mouseCell,
					pos = cell.getaddr();
				/* 初回はこの中に入ってきます。 */
				if (this.mousestart && cell.isDestination()) {
					this.mouseCell = cell;
					this.prevPos = pos;
					cell.draw();
				} else if (this.mousemove && !cell0.isnull) {
					if (cell0.path && cell.path && cell.path !== cell0.path) {
						if (cell.isDeparture() && !cell.isDestination()) {
							return;
						}

						/* Allow connecting a qnum and an anum */
						if ((cell0.base.qnum === -1) === (cell.base.qnum === -1)) {
							return;
						}
					}

					/* 移動中の場合 */
					var border = this.prevPos.getnb(pos);
					if (
						!border.isnull &&
						((!border.isLine() && cell.lcnt <= 1) ||
							(border.isLine() && cell0.lcnt === 1))
					) {
						var old = border.isLine();
						if (!old) {
							border.setLine();
						} else {
							border.removeLine();
						}
						this.puzzle.opemgr.changeflag = true;
						if (old !== border.isLine()) {
							if (!cell.isDestination()) {
								this.mouseCell = this.board.emptycell;
								cell.base.draw();
								cell.path.destination.draw();
							} else {
								this.mouseCell = cell;
								this.prevPos = pos;
								moving = true;
							}
							border.draw();
						}
					}
				}
			}
		},

		//---------------------------------------------------------------------------
		// mv.inputpeke()   盤面の線が通らないことを示す×を入力する
		//---------------------------------------------------------------------------
		inputpeke: function() {
			var pos = this.getpos(0.22);
			if (this.prevPos.equals(pos)) {
				return;
			}

			var border = pos.getb();
			if (!border.isnull) {
				if (this.inputData === null) {
					this.inputData = border.qsub !== 2 ? 2 : 3;
				}
				if (
					this.inputData === 2 &&
					border.isLine() &&
					this.puzzle.execConfig("dispmove")
				) {
				} else if (this.inputData === 2) {
					border.setPeke();
				} else if (this.inputData === 3 && this.puzzle.execConfig("dispmove")) {
					border.setQsub(0);
				} else if (this.inputData === 3) {
					border.removeLineAndQsub();
				}
				border.draw();
			}
			this.prevPos = pos;
		},
		inputpeke_ifborder: function() {
			var border = this.getpos(0.22).getb();
			if (border.group === "border" && !border.isnull) {
				this.inputpeke();
				return true;
			}
			return false;
		},

		//---------------------------------------------------------------------------
		// mv.inputdiraux_mousedown()   input lines/pekes/dir aux marks: mousedown
		// mv.inputdiraux_mousemove()                                    mousemove
		// mv.clickdiraux()                                              click
		//---------------------------------------------------------------------------
		inputdiraux_mousedown: function() {
			var pos = this.getpos(0.22),
				border = pos.getb();
			if (!border.isnull) {
				this.inputData = border.isnull || border.qsub !== 2 ? 2 : 3;
				this.inputpeke();
			}
		},
		inputdiraux_mousemove: function() {
			var pos = this.getpos(0);
			if (pos.getc().isnull) {
				return;
			}

			var border = this.prevPos.getnb(pos);
			if (!border.isnull) {
				var newval = null,
					dir = this.prevPos.getdir(pos, 2);
				if (this.inputData === null) {
					this.inputData = border.qsub !== 10 + dir ? 11 : 0;
				}
				if (this.inputData === 11) {
					newval = 10 + dir;
				} else if (this.inputData === 0 && border.qsub === 10 + dir) {
					newval = 0;
				}
				if (newval !== null) {
					border.setQsub(newval);
					border.draw();
				}
			}
			this.prevPos = pos;
		},
		clickdiraux: function() {
			var pos = this.getpos(0.22);
			if (this.prevPos.equals(pos)) {
				return;
			}

			var border = pos.getb();
			if (border.isnull) {
				return;
			}

			var trans = { 0: 2, 2: 0 },
				qs = border.qsub;
			if (!border.isvert) {
				trans =
					this.btn === "left"
						? { 0: 2, 2: 11, 11: 12, 12: 0 }
						: { 0: 12, 12: 11, 11: 2, 2: 0 };
			} else {
				trans =
					this.btn === "left"
						? { 0: 2, 2: 13, 13: 14, 14: 0 }
						: { 0: 14, 14: 13, 13: 2, 2: 0 };
			}
			qs = trans[qs] || 0;
			if (this.inputMode === "diraux" && qs === 2) {
				qs = trans[qs] || 0;
			}

			border.setQsub(qs);
			border.draw();
		},

		//---------------------------------------------------------------------------
		// mv.inputTateyoko() 縦棒・横棒をドラッグで入力する
		//---------------------------------------------------------------------------
		inputTateyoko: function() {
			if (this.mouseend && this.notInputted() && !!this.clickTateyoko) {
				this.clickTateyoko();
				return;
			}

			var cell = this.getcell();
			if (cell.isnull) {
				return;
			}

			// 黒マス上なら何もしない
			if (this.pid !== "amibo" && cell.ques === 1) {
			} else if (this.pid === "amibo" && cell.isNum()) {
			}
			// 初回 or 入力し続けていて別のマスに移動した場合
			else if (this.mouseCell !== cell) {
				this.firstPoint.set(this.inputPoint);
			}
			// まだ入力していないセルの場合
			else if (this.firstPoint.bx !== null) {
				var val = null,
					dx = this.inputPoint.bx - this.firstPoint.bx,
					dy = this.inputPoint.by - this.firstPoint.by;
				if (dy <= -0.5 || 0.5 <= dy) {
					val = 1;
				} else if (dx <= -0.5 || 0.5 <= dx) {
					val = 2;
				}

				if (val !== null) {
					var plus = this.pid === "amibo" || this.pid === "tatamibari";

					var shape = 0;
					if (this.puzzle.playmode) {
						shape = { 0: 0, 11: 3, 12: 1, 13: 2 }[cell.qans];
					} else {
						shape = { "-1": 0, 1: 3, 2: 1, 3: 2 }[cell.qnum];
					}
					if (this.inputData === null ? shape & val : this.inputData <= 0) {
						val = !plus ? 0 : -val;
					}

					// 描画・後処理
					if (!plus) {
						shape = val;
					} else if (val > 0) {
						shape |= val;
					} else {
						shape &= ~-val;
					}

					if (this.puzzle.playmode) {
						cell.setQans([0, 12, 13, 11][shape]);
					} else {
						cell.setQnum([-1, 2, 3, 1][shape]);
					}
					cell.draw();

					this.inputData = +(val > 0);
					this.firstPoint.reset();

					if (this.pid === "tatamibari" || this.pid === "ladders") {
						this.mousereset();
					}
				}
			}

			this.mouseCell = cell;
		},

		inputempty: function() {
			var cell = this.getcell();
			if (cell.isnull || cell === this.mouseCell) {
				return;
			}

			if (this.inputData === null) {
				this.inputData = cell.isEmpty() ? 0 : 7;
			}

			cell.setValid(this.inputData);
			this.mouseCell = cell;
		},

		//---------------------------------------------------------------------------
		// Prefab auto modes
		//---------------------------------------------------------------------------
		mouseinputAutoEdit_qnum: function() {
			if (this.mousestart) {
				this.inputqnum();
			}
		},
		mouseinputAutoEdit_areanum: function() {
			if (this.mousestart || this.mousemove) {
				this.inputborder();
			} else if (this.mouseend && this.notInputted()) {
				this.inputqnum();
			}
		},

		mouseinputAutoPlay_cell: function() {
			this.inputcell();
		},
		mouseinputAutoPlay_cellpeke: function() {
			if (this.mousestart) {
				this.isDraggingPeke = this.puzzle.key.isALT;
			}

			if (this.isDraggingPeke) {
				this.inputpeke();
			} else {
				this.inputcell();
			}
		},
		mouseinputAutoPlay_qnum: function() {
			if (this.mousestart) {
				this.inputqnum();
			}
		},

		mouseinputAutoPlay_border: function() {
			if (this.mousestart || this.mousemove) {
				if (this.btn === "left" && this.isBorderMode()) {
					this.inputborder();
				} else {
					this.inputQsubLine();
				}
			}
		},

		mouseinputAutoPlay_line: function(withMB) {
			if (this.btn === "left") {
				if (this.mousestart || this.mousemove) {
					this.inputLine();
				}
			} else if (this.btn === "right") {
				if (this.mousestart || this.mousemove) {
					this.inputpeke();
				}
			}
			if (this.mouseend && this.notInputted()) {
				this.prevPos = new this.klass.Address();
				if (!this.inputpeke_ifborder() && withMB) {
					this.inputMB();
				}
			}
		},
		mouseinputAutoPlay_lineMB: function() {
			this.mouseinputAutoPlay_line(true);
		},

		//---------------------------------------------------------------------------
		// mv.dispInfoBlk()  ひとつながりの黒マスを赤く表示する
		// mv.dispInfoUblk()
		// mv.dispInfoBlk8() ななめつながりの黒マスを赤く表示する
		// mv.dispInfoLine()   ひとつながりの線を赤く表示する
		//---------------------------------------------------------------------------
		dispInfoBlk: function() {
			var cell = this.getcell();
			this.mousereset();
			if (cell.isnull || !cell.isShade()) {
				return;
			}
			if (!this.RBShadeCell) {
				cell.sblk.clist.setinfo(1);
			} else {
				this.dispInfoBlk8(cell);
			}
			this.board.hasinfo = true;
			this.puzzle.redraw();
		},
		dispInfoUblk: function() {
			var cell = this.getcell();
			this.mousereset();
			if (cell.isnull || !cell.isUnshade()) {
				return;
			}
			cell.ublk.clist.setinfo(1);
			this.board.hasinfo = true;
			this.puzzle.redraw();
		},
		dispInfoBlk8: function(cell0) {
			var stack = [cell0];
			while (stack.length > 0) {
				var cell = stack.pop();
				if (cell.qinfo !== 0) {
					continue;
				}

				cell.setinfo(1);
				var bx = cell.bx,
					by = cell.by,
					clist = this.board.cellinside(bx - 2, by - 2, bx + 2, by + 2);
				for (var i = 0; i < clist.length; i++) {
					var cell2 = clist[i];
					if (cell2.qinfo === 0 && cell2.isShade()) {
						stack.push(cell2);
					}
				}
			}
		},

		dispInfoLine: function() {
			var bd = this.board,
				border = this.getborder(0.15);
			this.mousereset();
			if (border.isnull) {
				return;
			}

			if (!border.isLine()) {
				var piece = !bd.borderAsLine
					? this.getcell()
					: this.getcross(); /* cell or cross */
				if (
					piece.isnull ||
					(bd.linegraph.isLineCross && (piece.lcnt === 3 || piece.lcnt === 4))
				) {
					return;
				}
				var adb = piece.adjborder;
				if (adb.left.isLine()) {
					border = adb.left;
				} else if (adb.right.isLine()) {
					border = adb.right;
				} else if (adb.top.isLine()) {
					border = adb.top;
				} else if (adb.bottom.isLine()) {
					border = adb.bottom;
				} else {
					return;
				}
			}
			if (border.isnull) {
				return;
			}

			bd.border.setinfo(-1);
			border.path.setedgeinfo(1);
			bd.hasinfo = true;
			this.puzzle.redraw();
		}
	}
});

// AnswerCommon.js v3.4.1

pzpr.classmgr.makeCommon({
	//---------------------------------------------------------
	AnsCheck: {
		//---------------------------------------------------------------------------
		// ans.checkAllCell()   条件func==trueになるマスがあったらエラーを設定する
		// ans.checkNoNumCell() 数字の入っていないセルがあるか判定する
		// ans.checkIceLines()  アイスバーン上で線が曲がっているか判定する
		// ans.checkNotCrossOnMark()  十字のマーク上で線が交差していることを判定する
		// ans.checkLineOnShadeCell() 黒マス上に線がないことを判定する
		// ans.checkNoLineObject()    線が出ていない数字や○がないかどうか判定する
		// ans.checkLineOverLetter()  線が数字などを通過しているか判定する
		// ans.checkNumberHasArrow()  For editors only. Check if a number clue is without an arrow.
		//---------------------------------------------------------------------------
		checkAllCell: function(func, code) {
			for (var c = 0; c < this.board.cell.length; c++) {
				var cell = this.board.cell[c];
				if (cell.ques === 7) {
					continue;
				}
				if (!func(cell)) {
					continue;
				}

				this.failcode.add(code);
				if (this.checkOnly) {
					break;
				}
				cell.seterr(1);
			}
		},
		checkNoNumCell: function() {
			this.checkAllCell(function(cell) {
				return cell.ques === 0 && cell.noNum();
			}, "ceNoNum");
		},
		checkIceLines: function() {
			this.checkAllCell(function(cell) {
				return cell.ice() && cell.isLineCurve();
			}, "lnCurveOnIce");
		},
		checkNotCrossOnMark: function() {
			this.checkAllCell(function(cell) {
				return cell.lcnt !== 4 && cell.ques === 11;
			}, "lnNotCrossMk");
		},
		checkLineOnShadeCell: function() {
			this.checkAllCell(function(cell) {
				return (cell.ques === 1 || cell.qans === 1) && cell.lcnt > 0;
			}, "lnOnShade");
		},
		checkNoLineObject: function() {
			this.checkAllCell(function(cell) {
				return cell.lcnt === 0 && cell.isNum();
			}, "nmNoLine");
		},
		checkLineOverLetter: function() {
			this.checkAllCell(
				function(cell) {
					return cell.lcnt >= 2 && cell.isNum();
				},
				this.board.linegraph.moveline ? "laOnNum" : "lcOnNum"
			);
		},
		checkNumberHasArrow: function() {
			this.checkAllCell(function(cell) {
				return cell.qnum >= 0 && cell.qdir === cell.NDIR;
			}, "anNoArrow");
		},

		//---------------------------------------------------------------------------
		// ans.checkDir4Cell()  セルの周囲4マスの条件がfunc==trueの時、エラーを設定する
		//---------------------------------------------------------------------------
		checkDir4Cell: function(iscount, type, code) {
			// type = 0:違う 1:numより小さい 2:numより大きい
			for (var c = 0; c < this.board.cell.length; c++) {
				var cell = this.board.cell[c];
				if (!cell.isValidNum()) {
					continue;
				}
				var num = cell.getNum(),
					count = cell.countDir4Cell(iscount);
				if (
					(type === 0 && num === count) ||
					(type === 1 && num <= count) ||
					(type === 2 && num >= count)
				) {
					continue;
				}

				this.failcode.add(code);
				if (this.checkOnly) {
					break;
				}
				cell.seterr(1);
			}
		},

		//---------------------------------------------------------------------------
		// ans.checkSideCell()  隣り合った2つのセルが条件func==trueの時、エラーを設定する
		// ans.checkAdjacentShadeCell()  黒マスが隣接している時、エラーを設定する
		// ans.checkAdjacentDiffNumber() 同じ数字が隣接している時、エラーを設定する
		// ans.checkAroundCell()  Same as checkSideCell, but also checks diagonally adjacent cells
		//---------------------------------------------------------------------------
		checkSideCell: function(func, code, mark) {
			var result = true,
				bd = this.board;
			for (var c = 0; c < bd.cell.length; c++) {
				var cell = bd.cell[c],
					cell2 = cell.adjacent.right;
				if (cell.bx < bd.maxbx - 1 && func(cell, cell2)) {
					result = false;
					if (this.checkOnly) {
						break;
					}
					if (mark !== false) {
						cell.seterr(1);
						cell2.seterr(1);
					}
				}
				cell2 = cell.adjacent.bottom;
				if (cell.by < bd.maxby - 1 && func(cell, cell2)) {
					result = false;
					if (this.checkOnly) {
						break;
					}
					if (mark !== false) {
						cell.seterr(1);
						cell2.seterr(1);
					}
				}
			}
			if (!result) {
				this.failcode.add(code);
			}
		},
		checkAdjacentShadeCell: function() {
			this.checkSideCell(function(cell1, cell2) {
				return cell1.isShade() && cell2.isShade();
			}, "csAdjacent");
		},
		checkAdjacentDiffNumber: function() {
			this.checkSideCell(function(cell1, cell2) {
				return cell1.sameNumber(cell2);
			}, "nmAdjacent");
		},
		checkAroundCell: function(func, code) {
			var bd = this.board;
			for (var c = 0; c < bd.cell.length; c++) {
				var cell = bd.cell[c];
				var target = null,
					clist = new this.klass.CellList();
				// 右・左下・下・右下だけチェック
				clist.add(cell);
				target = cell.relcell(2, 0);
				if (func(cell, target)) {
					clist.add(target);
				}
				target = cell.relcell(0, 2);
				if (func(cell, target)) {
					clist.add(target);
				}
				target = cell.relcell(-2, 2);
				if (func(cell, target)) {
					clist.add(target);
				}
				target = cell.relcell(2, 2);
				if (func(cell, target)) {
					clist.add(target);
				}
				if (clist.length <= 1) {
					continue;
				}

				this.failcode.add(code);
				if (this.checkOnly) {
					break;
				}
				clist.seterr(1);
			}
		},

		//---------------------------------------------------------------------------
		// ans.check2x2Block()      2x2のセルが全て条件func==trueの時、エラーを設定する
		// ans.check2x2ShadeCell()  2x2のセルが黒マスの時、エラーを設定する
		//---------------------------------------------------------------------------
		check2x2Block: function(func, code) {
			var bd = this.board;
			for (var c = 0; c < bd.cell.length; c++) {
				var cell = bd.cell[c];
				if (cell.bx >= bd.maxbx - 1 || cell.by >= bd.maxby - 1) {
					continue;
				}

				var bx = cell.bx,
					by = cell.by;
				var clist = bd.cellinside(bx, by, bx + 2, by + 2).filter(func);
				if (clist.length < 4) {
					continue;
				}

				this.failcode.add(code);
				if (this.checkOnly) {
					break;
				}
				clist.seterr(1);
			}
		},
		check2x2ShadeCell: function() {
			this.check2x2Block(function(cell) {
				return cell.isShade();
			}, "cs2x2");
		},
		check2x2UnshadeCell: function() {
			this.check2x2Block(function(cell) {
				return cell.isUnshade();
			}, "cu2x2");
		},

		//---------------------------------------------------------------------------
		// ans.checkSameColorTile() 白マスと黒マスが混ざったタイルがないかどうかチェックする
		//---------------------------------------------------------------------------
		checkSameColorTile: function() {
			this.checkSameObjectInRoom(
				this.board.roommgr,
				function(cell) {
					return cell.isShade() ? 1 : 2;
				},
				"bkMixed"
			);
		},

		//---------------------------------------------------------------------------
		// ans.checkConnectShade()    黒マスがひとつながりかどうかを判定する
		// ans.checkConnectUnshade()  白マスがひとつながりかどうかを判定する
		// ans.checkConnectNumber()   数字がひとつながりかどうかを判定する
		// ans.checkOneArea()  白マス/黒マス/線がひとつながりかどうかを判定する
		// ans.checkConnectUnshadeRB() 連黒分断禁のパズルで白マスが分断されているかチェックする
		//---------------------------------------------------------------------------
		checkConnectShade: function() {
			this.checkOneArea(this.board.sblkmgr, "csDivide");
		},
		checkConnectUnshade: function() {
			this.checkOneArea(this.board.ublkmgr, "cuDivide");
		},
		checkConnectNumber: function() {
			this.checkOneArea(this.board.nblkmgr, "nmDivide");
		},
		checkOneArea: function(graph, code) {
			if (graph.components.length > 1) {
				this.failcode.add(code);
				graph.components[0].getnodeobjs().seterr(1);
			}
		},

		checkConnectUnshadeRB: function() {
			if (this.board.ublkmgr.components.length > 1) {
				this.failcode.add("cuDivideRB");
				var errclist = new this.klass.CellList();
				var clist = this.board.cell.filter(function(cell) {
					return cell.isShade();
				});
				for (var i = 0; i < clist.length; i++) {
					var cell = clist[i],
						list = cell.getdir4clist(),
						fid = null;
					for (var n = 0; n < list.length; n++) {
						var cell2 = list[n][0];
						if (fid === null) {
							fid = cell2.ublk;
						} else if (fid !== cell2.ublk) {
							errclist.add(cell);
							break;
						}
					}
				}
				errclist.seterr(1);
			}
		},

		//---------------------------------------------------------------------------
		// ans.checkShadeCellExist()  盤面に少なくとも一つは黒マスがあることを判定する
		//---------------------------------------------------------------------------
		checkShadeCellExist: function() {
			var bd = this.board;
			if (bd.sblkmgr.enabled) {
				if (bd.sblkmgr.components.length > 0) {
					return;
				}
			} else if (bd.ublkmgr.enabled) {
				if (
					bd.ublkmgr.components.length === 0 ||
					bd.ublkmgr.components[0].nodes.length !== bd.cell.length
				) {
					return;
				}
			} else {
				if (
					bd.cell.some(function(cell) {
						return cell.isShade();
					})
				) {
					return;
				}
			}
			this.failcode.add("brNoShade");
		},

		// autocheck trigger: shading status of all cells explicitly decided
		doneShadingDecided: function() {
			var bd = this.board;
			if (
				bd.cell.some(function(cell) {
					return !cell.isShadeDecided();
				})
			) {
				this.failcode.setUndecided();
			}
		},

		//---------------------------------------------------------------------------
		// ans.checkOneLoop()  盤面に引かれているループが一つに繋がっていることを判定する
		// ans.checkOneLine()  check if there are multiple lines
		// ans.checkOneLineBase()
		//---------------------------------------------------------------------------
		checkOneLoop: function() {
			this.checkOneLineBase("lnPlLoop");
		},

		checkOneLine: function() {
			this.checkOneLineBase("lnPlLine");
		},

		checkOneLineBase: function(code) {
			var bd = this.board,
				paths = bd.linegraph.components;
			if (paths.length > 1) {
				this.failcode.add(code);
				bd.border.setnoerr();
				paths[0].setedgeerr(1);
			}
		},

		//---------------------------------------------------------------------------
		// ans.checkNumberExist()  盤面に少なくとも一つは数字があることを判定する
		//---------------------------------------------------------------------------
		checkNumberExist: function() {
			if (
				this.board.cell.some(function(cell) {
					return cell.isValidNum();
				})
			) {
				return;
			}
			this.failcode.add("brNoValidNum");
		},

		//---------------------------------------------------------------------------
		// ans.checkConnectAllNumber() 盤面に引かれている線が一つに繋がっていることを判定する
		//---------------------------------------------------------------------------
		checkConnectAllNumber: function() {
			var bd = this.board,
				paths = bd.linegraph.components;
			if (paths.length > 1) {
				this.failcode.add("lcDivided");
				bd.border.setnoerr();
				paths[0].setedgeerr(1);
				paths[0].clist.seterr(4);
			}
		},

		//---------------------------------------------------------------------------
		// ans.checkLineExist()  盤面に少なくとも一本は線が引かれていることを判定する
		//---------------------------------------------------------------------------
		checkLineExist: function() {
			var bd = this.board;
			if (
				bd.linegraph.ltotal[0] !==
				(!bd.borderAsLine ? bd.cell : bd.cross).length
			) {
				return;
			}
			this.failcode.add("brNoLine");
		},

		//---------------------------------------------------------------------------
		// ans.checkLineCount() セルから出ている線の本数について判定する
		//---------------------------------------------------------------------------
		checkCrossLine: function() {
			this.checkLineCount(4, "lnCross");
		},
		checkBranchLine: function() {
			this.checkLineCount(3, "lnBranch");
		},
		checkDeadendLine: function() {
			this.checkLineCount(1, "lnDeadEnd");
		},
		checkNoLine: function() {
			this.checkLineCount(0, this.board.borderAsLine ? "cxNoLine" : "ceNoLine");
		},
		checkNoLineIfVariant: function() {
			if (
				this.puzzle.getConfig("slither_full") ||
				this.puzzle.getConfig("loop_full")
			) {
				this.checkNoLine();
			}
		},
		checkLineCount: function(val, code) {
			var result = true,
				bd = this.board;
			if (!bd.linegraph.ltotal[val]) {
				return;
			}

			if (!bd.borderAsLine) {
				this.checkAllCell(function(cell) {
					return cell.lcnt === val;
				}, code);
			} else {
				var boardcross = bd.cross;
				for (var c = 0; c < boardcross.length; c++) {
					var cross = boardcross[c];
					if (cross.lcnt !== val) {
						continue;
					}

					result = false;
					if (this.checkOnly) {
						break;
					}

					if (val === 0) {
						cross.seterr(1);
					}
					bd.borderinside(
						cross.bx - 1,
						cross.by - 1,
						cross.bx + 1,
						cross.by + 1
					).seterr(1);
				}
				if (!result) {
					this.failcode.add(code);
					bd.border.setnoerr();
				}
			}
		},

		//---------------------------------------------------------------------------
		// ans.checkConnectLineCount() ○などがないセルから出ている線の本数について判定する
		//---------------------------------------------------------------------------
		checkCrossConnectLine: function() {
			this.checkConnectLineCount(4, "lnCross");
		},
		checkBranchConnectLine: function() {
			this.checkConnectLineCount(3, "lnBranch");
		},
		checkDeadendConnectLine: function() {
			this.checkConnectLineCount(1, "lnDeadEnd");
		},
		checkConnectLineCount: function(val, code) {
			if (!this.board.linegraph.ltotal[val]) {
				return;
			}

			this.checkAllCell(function(cell) {
				return cell.noNum() && cell.lcnt === val;
			}, code);
		},

		//---------------------------------------------------------------------------
		// ans.checkenableLineParts() '一部があかされている'線の部分に、線が引かれているか判定する
		//---------------------------------------------------------------------------
		checkenableLineParts: function() {
			var bd = this.board;
			for (var c = 0; c < bd.cell.length; c++) {
				var cell = bd.cell[c],
					adb = cell.adjborder;
				if (
					(!adb.top.isLine() || !cell.noLP(cell.UP)) &&
					(!adb.bottom.isLine() || !cell.noLP(cell.DN)) &&
					(!adb.left.isLine() || !cell.noLP(cell.LT)) &&
					(!adb.right.isLine() || !cell.noLP(cell.RT))
				) {
					continue;
				}

				this.failcode.add("ceAddLine");
				if (this.checkOnly) {
					break;
				}
				cell.seterr(1);
			}
		},

		//---------------------------------------------------------------------------
		// ans.checkAllArea()    すべてのエリアがevalfuncを満たすかどうか判定する
		// ans.checkAllBlock()   すべてのfuncを満たすマスで構成されるエリアが
		//                       evalfuncを満たすかどうか判定する
		// ans.checkAllArea2()   すべてのエリアがareaを引数に取るevalfuncを満たすかどうか判定する
		//---------------------------------------------------------------------------
		checkAllArea: function(graph, evalfunc, code) {
			this.checkAllBlock(graph, null, evalfunc, code);
		},
		checkAllBlock: function(graph, filterfunc, evalfunc, code) {
			var areas = graph.components;
			for (var id = 0; id < areas.length; id++) {
				var area = areas[id],
					clist = area.clist;
				var top = !!area.top ? area.top : clist.getQnumCell();
				var d = clist.getRectSize();
				var a = (!!filterfunc ? clist.filter(filterfunc) : clist).length;
				var n = !!top && !top.isnull ? top.qnum : -1;
				if (evalfunc(d.cols, d.rows, a, n)) {
					continue;
				}

				this.failcode.add(code);
				if (this.checkOnly) {
					break;
				}
				if (!!graph.seterr) {
					graph.seterr(area, 1);
				} else if (areas !== this.board.linegraph) {
					clist.seterr(this.pid !== "tateyoko" ? 1 : 4);
				} else {
					this.board.border.setnoerr();
					area.objs.seterr(1);
				}
			}
		},

		//---------------------------------------------------------------------------
		// ans.checkNumberAndSize()  部屋にある数字と面積が等しいか判定する
		// ans.checkRoomRect()       領域が全て四角形であるかどうか判定する
		//---------------------------------------------------------------------------
		checkNumberAndSize: function() {
			this.checkAllArea(
				this.board.roommgr,
				function(w, h, a, n) {
					return n <= 0 || n === a;
				},
				"bkSizeNe"
			);
		},
		checkRoomRect: function() {
			this.checkAllArea(
				this.board.roommgr,
				function(w, h, a, n) {
					return w * h === a;
				},
				"bkNotRect"
			);
		},

		//---------------------------------------------------------------------------
		// ans.checkNoNumber()       部屋に数字が含まれていないかの判定を行う
		// ans.checkDoubleNumber()   部屋に数字が2つ以上含まれていないように判定を行う
		//---------------------------------------------------------------------------
		checkNoNumber: function() {
			this.checkAllBlock(
				this.board.roommgr,
				function(cell) {
					return cell.isNum();
				},
				function(w, h, a, n) {
					return a !== 0;
				},
				"bkNoNum"
			);
		},
		checkDoubleNumber: function() {
			this.checkAllBlock(
				this.board.roommgr,
				function(cell) {
					return cell.isNum();
				},
				function(w, h, a, n) {
					return a < 2;
				},
				"bkNumGe2"
			);
		},

		//---------------------------------------------------------------------------
		// ans.checkShadeCellCount() 領域内の数字と黒マスの数が等しいか判定する
		// ans.checkNoShadeCellInArea()  部屋に黒マスがあるか判定する
		//---------------------------------------------------------------------------
		checkShadeCellCount: function() {
			this.checkAllBlock(
				this.board.roommgr,
				function(cell) {
					return cell.isShade();
				},
				function(w, h, a, n) {
					return n < 0 || n === a;
				},
				"bkShadeNe"
			);
		},
		checkNoShadeCellInArea: function() {
			this.checkAllBlock(
				this.board.roommgr,
				function(cell) {
					return cell.isShade();
				},
				function(w, h, a, n) {
					return a > 0 || n === 0;
				},
				"bkNoShade"
			);
		},

		//---------------------------------------------------------------------------
		// ans.checkLinesInArea()  領域の中で線が通っているセルの数を判定する
		//---------------------------------------------------------------------------
		checkLinesInArea: function(graph, evalfunc, code) {
			this.checkAllBlock(
				graph,
				function(cell) {
					return cell.lcnt > 0;
				},
				evalfunc,
				code
			);
		},

		//---------------------------------------------------------------------------
		// ans.checkNoMovedObjectInRoom() 領域に移動後のオブジェクトがないと判定する
		//---------------------------------------------------------------------------
		checkNoMovedObjectInRoom: function(graph) {
			this.checkAllBlock(
				graph,
				function(cell) {
					return cell.base.qnum !== -1;
				},
				function(w, h, a, n) {
					return a !== 0;
				},
				"bkNoNum"
			);
		},

		//---------------------------------------------------------------------------
		// ans.checkDisconnectLine() 数字などに繋がっていない線の判定を行う
		// ans.checkConnectObject()  数字が線で2つ以上繋がっていないように判定を行う
		// ans.checkTripleObject()   数字が線で3つ以上繋がっていないように判定を行う
		// ans.checkConnectObjectCount() 上記関数の共通処理
		//---------------------------------------------------------------------------
		checkDisconnectLine: function() {
			this.checkConnectObjectCount(
				function(a) {
					return a > 0;
				},
				this.board.linegraph.moveline ? "laIsolate" : "lcIsolate"
			);
		},
		checkConnectObject: function() {
			this.checkConnectObjectCount(function(a) {
				return a < 2;
			}, "nmConnected");
		},
		checkTripleObject: function() {
			this.checkConnectObjectCount(function(a) {
				return a < 3;
			}, "lcTripleNum");
		},
		checkConnectObjectCount: function(evalfunc, code) {
			var result = true,
				paths = this.board.linegraph.components;
			for (var id = 0; id < paths.length; id++) {
				var clist = paths[id].clist;
				if (
					evalfunc(
						clist.filter(function(cell) {
							return cell.qnum !== -1;
						}).length
					)
				) {
					continue;
				}

				result = false;
				if (this.checkOnly) {
					break;
				}
				this.board.border.setnoerr();
				paths[id].setedgeerr(1);
				paths[id].clist.seterr(4);
			}
			if (!result) {
				this.failcode.add(code);
				this.board.border.setnoerr();
			}
		},

		//---------------------------------------------------------------------------
		// ans.checkSideAreaSize() 境界線をはさんで接する部屋のgetvalで得られるサイズが異なることを判定する
		// ans.checkSideAreaCell() 境界線をはさんでタテヨコに接するセルの判定を行う
		//---------------------------------------------------------------------------
		checkSideAreaSize: function(graph, getval, code) {
			var sides = graph.getSideAreaInfo();
			for (var i = 0; i < sides.length; i++) {
				var a1 = getval(sides[i][0]),
					a2 = getval(sides[i][1]);
				if (a1 <= 0 || a2 <= 0 || a1 !== a2) {
					continue;
				}

				this.failcode.add(code);
				if (this.checkOnly) {
					break;
				}
				sides[i][0].clist.seterr(1);
				sides[i][1].clist.seterr(1);
			}
		},

		checkSideAreaCell: function(func, flag, code) {
			for (var id = 0; id < this.board.border.length; id++) {
				var border = this.board.border[id];
				if (!border.isBorder()) {
					continue;
				}
				var cell1 = border.sidecell[0],
					cell2 = border.sidecell[1];
				if (cell1.isnull || cell2.isnull || !func(cell1, cell2, border)) {
					continue;
				}

				this.failcode.add(code);
				if (this.checkOnly) {
					break;
				}
				if (!flag) {
					cell1.seterr(1);
					cell2.seterr(1);
				} else {
					cell1.room.clist.seterr(1);
					cell2.room.clist.seterr(1);
				}
			}
		},

		//---------------------------------------------------------------------------
		// ans.checkSameObjectInRoom()      部屋の中のgetvalueの値が1種類であるか判定する
		// ans.checkGatheredObjectInGraph() Check for a value appearing in no more than 1 component
		// ans.checkDifferentNumberInRoom() 部屋の中に同じ数字が存在しないことを判定する
		// ans.isDifferentNumberInClist()   clistの中に同じ数字が存在しないことを判定だけを行う
		//---------------------------------------------------------------------------
		checkSameObjectInRoom: function(graph, getvalue, code) {
			var areas = graph.components;
			allloop: for (var id = 0; id < areas.length; id++) {
				var clist = areas[id].clist;
				var roomval = -1;
				for (var i = 0; i < clist.length; i++) {
					var cell = clist[i],
						val = getvalue(cell);
					if (val === -1 || roomval === val) {
						continue;
					}
					if (roomval === -1) {
						roomval = val;
					} else {
						this.failcode.add(code);
						if (this.checkOnly) {
							break allloop;
						}
						if (areas !== this.board.linegraph.components) {
							clist.seterr(1);
						} else {
							this.board.border.setnoerr();
							areas[id].setedgeerr(1);
						}
					}
				}
			}
		},

		checkGatheredObjectInGraph: function(graph, getvalue, code) {
			var d = {},
				bd = this.board;
			for (var c = 0; c < bd.cell.length; c++) {
				var val = getvalue(bd.cell[c]);
				if (val === -1) {
					continue;
				}
				var room = graph.getComponentRefs(bd.cell[c]);
				if (d[val] === undefined) {
					d[val] = room;
				} else if (room && d[val] !== room) {
					this.failcode.add(code);
					bd.cell
						.filter(function(cell) {
							var otherroom = graph.getComponentRefs(cell);
							return room === otherroom || d[val] === otherroom;
						})
						.seterr(1);
					break;
				}
			}
		},

		checkDifferentNumberInRoom: function() {
			this.checkDifferentNumberInRoom_main(
				this.board.roommgr,
				this.isDifferentNumberInClist
			);
		},
		checkDifferentNumberInRoom_main: function(graph, evalfunc) {
			var areas = graph.components;
			for (var r = 0; r < areas.length; r++) {
				var clist = areas[r].clist;
				if (evalfunc.call(this, clist)) {
					continue;
				}

				this.failcode.add("bkDupNum");
				if (this.checkOnly) {
					break;
				}
				clist.seterr(1);
			}
		},

		isDifferentNumberInClist: function(clist) {
			return this.isIndividualObject(clist, function(cell) {
				return cell.getNum();
			});
		},
		isDifferentAnsNumberInClist: function(clist) {
			return this.isIndividualObject(clist, function(cell) {
				return cell.anum;
			});
		},
		isIndividualObject: function(clist, numfunc) {
			if (clist.length <= 0) {
				return true;
			}
			var result = true,
				d = [],
				num = [];
			var max = -1,
				bottom = clist[0].getminnum();
			for (var i = 0; i < clist.length; i++) {
				if (max < numfunc(clist[i])) {
					max = numfunc(clist[i]);
				}
			}
			for (var n = bottom; n <= max; n++) {
				d[n] = 0;
			}
			for (var i = 0; i < clist.length; i++) {
				num[clist[i].id] = numfunc(clist[i]);
			}

			for (var i = 0; i < clist.length; i++) {
				if (num[clist[i].id] >= bottom) {
					d[num[clist[i].id]]++;
				}
			}
			var clist2 = clist.filter(function(cell) {
				return num[cell.id] >= bottom && d[num[cell.id]] >= 2;
			});
			if (clist2.length > 0) {
				clist2.seterr(1);
				result = false;
			}
			return result;
		},

		//---------------------------------------------------------------------------
		// ans.checkRowsCols()              タテ列・ヨコ列の数字の判定を行う
		// ans.checkDifferentNumberInLine() タテ列・ヨコ列に同じ数字が入っていないことを判定する
		//---------------------------------------------------------------------------
		/* ともにevalfuncはAnswerクラスの関数限定 */
		checkRowsCols: function(evalfunc, code) {
			var result = true,
				bd = this.board;
			allloop: do {
				/* 横方向サーチ */
				for (var by = 1; by <= bd.maxby; by += 2) {
					var clist = bd.cellinside(bd.minbx + 1, by, bd.maxbx - 1, by);
					if (evalfunc.call(this, clist)) {
						continue;
					}

					result = false;
					if (this.checkOnly) {
						break allloop;
					}
				}
				/* 縦方向サーチ */
				for (var bx = 1; bx <= bd.maxbx; bx += 2) {
					var clist = bd.cellinside(bx, bd.minby + 1, bx, bd.maxby - 1);
					if (evalfunc.call(this, clist)) {
						continue;
					}

					result = false;
					if (this.checkOnly) {
						break allloop;
					}
				}
			} while (0);

			if (!result) {
				this.failcode.add(code);
			}
		},
		checkDifferentNumberInLine: function() {
			this.checkRowsCols(this.isDifferentNumberInClist, "nmDupRow");
		},

		//---------------------------------------------------------------------------
		// ans.checkRowsColsPartly()      黒マスや[＼]等で分かれるタテ列・ヨコ列の数字の判定を行う
		// ans.checkRowsColsFor51cell()   [＼]で分かれるタテ列・ヨコ列の数字の判定を行う
		//---------------------------------------------------------------------------
		checkRowsColsPartly: function(evalfunc, termfunc, code) {
			var result = true,
				bd = this.board,
				info;
			allloop: do {
				/* 横方向サーチ */
				info = { keycell: null, key51num: -1, isvert: false };
				for (var by = 1; by <= bd.maxby; by += 2) {
					for (var bx = 1; bx <= bd.maxbx; bx += 2) {
						for (var tx = bx; tx <= bd.maxbx; tx += 2) {
							if (termfunc(bd.getc(tx, by), false)) {
								break;
							}
						}
						info.keycell = bd.getobj(bx - 2, by);
						info.key51num = info.keycell.qnum;
						if (
							tx > bx &&
							!evalfunc.call(this, bd.cellinside(bx, by, tx - 2, by), info)
						) {
							result = false;
							if (this.checkOnly) {
								break allloop;
							}
						}
						bx = tx; /* 次のループはbx=tx+2 */
					}
				}
				/* 縦方向サーチ */
				info = { keycell: null, key51num: -1, isvert: true };
				for (var bx = 1; bx <= bd.maxbx; bx += 2) {
					for (var by = 1; by <= bd.maxby; by += 2) {
						for (var ty = by; ty <= bd.maxby; ty += 2) {
							if (termfunc(bd.getc(bx, ty), true)) {
								break;
							}
						}
						info.keycell = bd.getobj(bx, by - 2);
						info.key51num = info.keycell.qnum2;
						if (
							ty > by &&
							!evalfunc.call(this, bd.cellinside(bx, by, bx, ty - 2), info)
						) {
							result = false;
							if (this.checkOnly) {
								break allloop;
							}
						}
						by = ty; /* 次のループはbx=ty+2 */
					}
				}
			} while (0);

			if (!result) {
				this.failcode.add(code);
			}
		},
		checkRowsColsFor51cell: function(evalfunc, code) {
			this.checkRowsColsPartly(
				evalfunc,
				function(cell) {
					return cell.is51cell();
				},
				code
			);
		},
		checkShadeCount: function() {
			this.checkRowsCols(this.isExCellCount, "exShadeNe");
		},
		getRowsColsValue: function(clist) {
			return clist.filter(function(c) {
				return c.isShade();
			}).length;
		},
		isExCellCount: function(clist) {
			var d = clist.getRectSize(),
				bd = this.board;
			var count = this.getRowsColsValue(clist);

			var result = true;

			if (d.x1 === d.x2) {
				var exc = bd.getex(d.x1, -1);
				if (exc.qnum !== -1 && exc.qnum !== count) {
					exc.seterr(1);
					result = false;
				}
			}
			if (d.y1 === d.y2) {
				var exc = bd.getex(-1, d.y1);
				if (exc.qnum !== -1 && exc.qnum !== count) {
					exc.seterr(1);
					result = false;
				}
			}

			if (!result) {
				clist.seterr(1);
			}
			return result;
		},

		//---------------------------------------------------------------------------
		// ans.checkBorderCount()  ある交点との周り四方向の境界線の数を判定する(bp==1:黒点が打たれている場合)
		//---------------------------------------------------------------------------
		checkBorderCross: function() {
			this.checkBorderCount(4, 0, "bdCross");
		},
		checkBorderDeadend: function() {
			this.checkBorderCount(1, 0, "bdDeadEnd");
		},
		checkBorderCount: function(val, bp, code) {
			var result = true,
				bd = this.board;
			var crosses =
				bd.hascross === 2
					? bd.cross
					: bd.crossinside(
							bd.minbx + 2,
							bd.minby + 2,
							bd.maxbx - 2,
							bd.maxby - 2
					  );
			for (var c = 0; c < crosses.length; c++) {
				var cross = crosses[c];
				if (
					cross.lcnt !== val ||
					(bp === 1 && cross.qnum !== 1) ||
					(bp === 2 && cross.qnum === 1)
				) {
					continue;
				}

				result = false;
				if (this.checkOnly) {
					break;
				}
				cross.setCrossBorderError();
			}
			if (!result) {
				this.failcode.add(code);
				bd.border.setnoerr();
			}
		},

		//---------------------------------------------------------------------------
		// ans.checkLineShape()  すべての丸などで区切られた線が、pathを引数に取るevalfunc==falseになるかどうか判定する
		// ans.checkLineShapeDeadend()  オブジェクトを結ぶ線が途中で途切れていることを判定する
		//---------------------------------------------------------------------------
		checkLineShape: function(evalfunc, code) {
			var result = true,
				pathsegs = this.getLineShapeInfo();
			for (var id = 0; id < pathsegs.length; id++) {
				var pathseg = pathsegs[id];
				if (!pathseg || !evalfunc(pathseg)) {
					continue;
				}

				result = false;
				if (this.checkOnly) {
					break;
				}
				var cells = pathseg.cells;
				if (!!cells[0] && !cells[0].isnull) {
					cells[0].seterr(1);
				}
				if (!!cells[1] && !cells[1].isnull) {
					cells[1].seterr(1);
				}
				pathseg.objs.seterr(1);
			}
			if (!result) {
				this.failcode.add(code);
				this.board.border.setnoerr();
			}
		},
		checkLineShapeDeadend: function() {
			this.checkLineShape(function(pathseg) {
				return pathseg.cells[1].isnull;
			}, "lcDeadEnd");
		},

		//--------------------------------------------------------------------------------
		// ans.getLineShapeInfo() 丸などで区切られた線を探索し情報を設定する
		// ans.searchLineShapeInfo() 丸などで区切られた線を探索します
		//--------------------------------------------------------------------------------
		getLineShapeInfo: function() {
			if (this._info.num) {
				return this._info.num;
			}

			var bd = this.board;
			var pathsegs = [],
				passed = [];
			for (var id = 0; id < bd.border.length; id++) {
				passed[id] = false;
			}

			var clist = bd.cell.filter(function(cell) {
				return cell.isLineShapeEndpoint();
			});
			for (var i = 0; i < clist.length; i++) {
				var cell = clist[i],
					adb = cell.adjborder;
				var dir4bd = [adb.top, adb.bottom, adb.left, adb.right];
				for (var a = 0; a < 4; a++) {
					var firstbd = dir4bd[a];
					if (firstbd.isnull) {
						continue;
					}

					var pathseg = this.searchLineShapeInfo(cell, a + 1, passed);
					if (!!pathseg) {
						pathsegs.push(pathseg);
					}
				}
			}

			return (this._info.num = pathsegs);
		},
		searchLineShapeInfo: function(cell1, dir, passed) {
			var pathseg = {
				objs: new this.klass.BorderList(),
				cells: [cell1, null], // 出発したセル、到達したセル
				ccnt: 0, // 曲がった回数
				length: [], // 曲がった箇所で区切った、それぞれの線分の長さの配列
				dir1: dir, // dir1 スタート地点で線が出発した方向
				dir2: 0 // dir2 到達地点から見た、到達した線の方向
			};

			var pos = cell1.getaddr();
			while (1) {
				pos.movedir(dir, 1);
				if (pos.oncell()) {
					var cell = pos.getc(),
						adb = cell.adjborder;
					if (cell.isnull || cell1 === cell || cell.isLineShapeEndpoint()) {
						break;
					} else if (this.board.linegraph.iscrossing(cell) && cell.lcnt >= 3) {
					} else if (dir !== 1 && adb.bottom.isLine()) {
						if (dir !== 2) {
							pathseg.ccnt++;
						}
						dir = 2;
					} else if (dir !== 2 && adb.top.isLine()) {
						if (dir !== 1) {
							pathseg.ccnt++;
						}
						dir = 1;
					} else if (dir !== 3 && adb.right.isLine()) {
						if (dir !== 4) {
							pathseg.ccnt++;
						}
						dir = 4;
					} else if (dir !== 4 && adb.left.isLine()) {
						if (dir !== 3) {
							pathseg.ccnt++;
						}
						dir = 3;
					}
				} else {
					var border = pos.getb();
					if (border.isnull || !border.isLine() || passed[border.id]) {
						break;
					}

					pathseg.objs.add(border);
					passed[border.id] = true;

					if (isNaN(pathseg.length[pathseg.ccnt])) {
						pathseg.length[pathseg.ccnt] = 1;
					} else {
						pathseg.length[pathseg.ccnt]++;
					}
				}
			}

			if (pathseg.objs.length > 0) {
				pathseg.cells[1] = pos.getc();
				pathseg.dir2 = [0, 2, 1, 4, 3][dir];
				return pathseg;
			}
			return null;
		},

		//--------------------------------------------------------------------------------
		// ans.isDifferentShapeBlock() Check if two components have a different block
		//     shape, counting all orientations as equal.
		//--------------------------------------------------------------------------------
		isDifferentShapeBlock: function(area1, area2) {
			if (area1.clist.length !== area2.clist.length) {
				return true;
			}
			var s1 = area1.clist.getBlockShapes(),
				s2 = area2.clist.getBlockShapes();
			return s1.canon !== s2.canon;
		},

		//--------------------------------------------------------------------------------
		// ans.searchloop() Return all cells of a Graph component that forms a loop.
		//--------------------------------------------------------------------------------
		searchloop: function(component, graph, borders) {
			var errlist = borders
				? new this.klass.BorderList()
				: graph.pointgroup === "cross"
				? new this.klass.CrossList()
				: new this.klass.CellList();
			// Loopがない場合は何もしないでreturn
			if (component.circuits <= 0) {
				return errlist;
			}

			// どこにLoopが存在するか判定を行う
			var bd = this.board;
			var history = [component.nodes[0].obj],
				prevcell = null;
			var steps = {},
				rows = bd.maxbx - bd.minbx;

			while (history.length > 0) {
				var obj = history[history.length - 1],
					nextobj = null;
				var step = steps[obj.by * rows + obj.bx];
				if (step === void 0) {
					step = steps[obj.by * rows + obj.bx] = history.length - 1;
				}
				// ループになった場合 => ループフラグをセットする
				else if (history.length - 1 > step) {
					for (var i = history.length - 2; i >= 0; i--) {
						if ((history[i].group === "border") === !!borders) {
							errlist.add(history[i]);
						}
						if (history[i] === obj) {
							break;
						}
					}
				}

				if (obj.group !== "border") {
					prevcell = obj;
					for (var i = 0; i < graph.getObjNodeList(obj)[0].nodes.length; i++) {
						var cell2 = graph.getObjNodeList(obj)[0].nodes[i].obj;
						var border = bd.getb(
							(obj.bx + cell2.bx) >> 1,
							(obj.by + cell2.by) >> 1
						);
						if (steps[border.by * rows + border.bx] === void 0) {
							nextobj = border;
							break;
						}
					}
				} else {
					// borderの時
					var side =
						graph.pointgroup === "cross" ? obj.sidecross : obj.sidecell;
					for (var i = 0; i < side.length; i++) {
						var cell = side[i];
						if (cell !== prevcell && cell !== history[history.length - 2]) {
							nextobj = cell;
							break;
						}
					}
				}
				if (!!nextobj) {
					history.push(nextobj);
				} else {
					history.pop();
				}
			}

			return errlist;
		},

		//--------------------------------------------------------------------------------
		// ans.checkBankPiecesAvailable(): Check if all pieces on the board are
		// represented in the Bank, and no counts are exceeded.
		// ans.checkBankPiecesUsed(): Check if all piece count requirements are met.
		//--------------------------------------------------------------------------------
		getBoardPiecesMap: function() {
			if (this._info.boardpiecesmap) {
				return this._info.boardpiecesmap;
			}
			if (!this._info.boardpieces) {
				this._info.boardpieces = this.board.getBankPiecesInGrid();
			}

			var ret = {};
			this._info.boardpieces.forEach(function(p) {
				if (!(p[0] in ret)) {
					ret[p[0]] = [p[1]];
				} else {
					ret[p[0]].push(p[1]);
				}
			});
			return (this._info.boardpiecesmap = ret);
		},

		checkBankPiecesInvalid: function() {
			var pieces = this.getBoardPiecesMap();

			for (var key in pieces) {
				var found = false;
				for (var b = 0; b < this.board.bank.pieces.length && !found; b++) {
					if (key === this.board.bank.pieces[b].canonize()) {
						found = true;
					}
				}
				if (!found) {
					this.failcode.add("bankInvalid");
					if (this.checkOnly) {
						break;
					}
					pieces[key].forEach(function(list) {
						list.seterr(1);
					});
				}
			}
		},

		checkBankPiecesAvailable: function() {
			var pieces = this.getBoardPiecesMap();
			var counts = {};
			for (var b = 0; b < this.board.bank.pieces.length; b++) {
				var key = this.board.bank.pieces[b].canonize();
				if (!(key in counts)) {
					counts[key] = 0;
				}
				counts[key] += this.board.bank.pieces[b].count;
			}

			for (var key in pieces) {
				if (key in counts && counts[key] < pieces[key].length) {
					this.failcode.add("bankGt");
					if (this.checkOnly) {
						break;
					}
					this.board.bank.pieces.forEach(function(piece) {
						if (piece.canonize() === key) {
							piece.seterr(1);
						}
					});

					pieces[key].forEach(function(list) {
						list.seterr(1);
					});
				}
			}
		},
		checkBankPiecesUsed: function() {
			var pieces = this.getBoardPiecesMap();
			var counts = {};
			for (var b = 0; b < this.board.bank.pieces.length; b++) {
				var key = this.board.bank.pieces[b].canonize();
				if (!(key in counts)) {
					counts[key] = 0;
				}
				counts[key] += this.board.bank.pieces[b].count;
			}

			for (var key in counts) {
				var actual = key in pieces ? pieces[key].length : 0;
				if (counts[key] > actual) {
					this.failcode.add("bankLt");
					if (this.checkOnly) {
						break;
					}
					var skip = actual;
					this.board.bank.pieces.forEach(function(piece) {
						if (piece.canonize() === key && skip-- <= 0) {
							piece.seterr(1);
						}
					});
				}
			}
		}
	}
});

// BoardExecCommon.js v3.4.1

pzpr.classmgr.makeCommon({
	//---------------------------------------------------------
	BoardExec: {
		//------------------------------------------------------------------------------
		// bd.exec.adjustBoardData()    回転・反転開始前に各セルの調節を行う(共通処理)
		// bd.exec.adjustBoardData2()   回転・反転終了後に各セルの調節を行う(共通処理)
		//   から呼び出される共通関数
		//------------------------------------------------------------------------------

		//------------------------------------------------------------------------------
		// bd.exec.adjustNumberArrow()  回転・反転開始前の矢印つき数字の調整
		// bd.exec.adjustCellArrow()    回転・反転開始前の矢印セルの調整
		// bd.exec.adjustBorderArrow()  回転・反転開始前の境界線にある矢印セル等の調整
		//------------------------------------------------------------------------------
		adjustNumberArrow: function(key, d) {
			this.adjustCellArrowField(key, d, "qdir");
		},
		adjustCellArrow: function(key, d) {
			if (this.klass.Cell.prototype.numberAsObject) {
				this.adjustCellArrowField(key, d, "qnum");
				this.adjustCellArrowField(key, d, "anum");
			} else {
				this.adjustCellArrowField(key, d, "qdir");
			}
		},
		adjustCellArrowField: function(key, d, field) {
			if (!(key & this.TURNFLIP)) {
				return;
			}

			var trans = this.getTranslateDir(key);
			var clist = this.board.cellinside(d.x1, d.y1, d.x2, d.y2);
			for (var i = 0; i < clist.length; i++) {
				var cell = clist[i];
				var val = trans[cell[field]];
				if (!!val) {
					cell[field] = val;
				}
			}
		},

		adjustBorderArrow: function(key, d) {
			if (key & this.TURNFLIP) {
				var trans = this.getTranslateDir(key);
				var blist = this.board.borderinside(d.x1, d.y1, d.x2, d.y2);
				for (var i = 0; i < blist.length; i++) {
					var border = blist[i],
						val;
					val = trans[border.qdir];
					if (!!val) {
						border.qdir = val;
					}
				}
			}
		},
		getTranslateDir: function(key) {
			var trans = {};
			switch (key) {
				case this.FLIPY:
					trans = { 1: 2, 2: 1 };
					break; // 上下反転
				case this.FLIPX:
					trans = { 3: 4, 4: 3 };
					break; // 左右反転
				case this.TURNR:
					trans = { 1: 4, 2: 3, 3: 1, 4: 2 };
					break; // 右90°回転
				case this.TURNL:
					trans = { 1: 3, 2: 4, 3: 2, 4: 1 };
					break; // 左90°回転
			}
			return trans;
		},

		//------------------------------------------------------------------------------
		// bd.exec.adjustQues51_1()     回転・反転開始前の[＼]セルの調整
		// bd.exec.adjustQues51_2()     回転・反転終了後の[＼]セルの調整
		//------------------------------------------------------------------------------
		adjustQues51_1: function(key, d) {
			var bx1 = d.x1 | 1,
				by1 = d.y1 | 1;
			this.qnumw = [];
			this.qnumh = [];

			var bd = this.board;
			for (var by = by1; by <= d.y2; by += 2) {
				this.qnumw[by] = [bd.getex(-1, by).qnum];
				for (var bx = bx1; bx <= d.x2; bx += 2) {
					var cell = bd.getc(bx, by);
					if (cell.is51cell()) {
						this.qnumw[by].push(cell.qnum);
					}
				}
			}
			for (var bx = bx1; bx <= d.x2; bx += 2) {
				this.qnumh[bx] = [bd.getex(bx, -1).qnum2];
				for (var by = by1; by <= d.y2; by += 2) {
					var cell = bd.getc(bx, by);
					if (cell.is51cell()) {
						this.qnumh[bx].push(cell.qnum2);
					}
				}
			}
		},
		adjustQues51_2: function(key, d) {
			var xx = d.x1 + d.x2,
				yy = d.y1 + d.y2,
				bx1 = d.x1 | 1,
				by1 = d.y1 | 1,
				idx;

			var bd = this.board;
			bd.disableInfo();
			switch (key) {
				case this.FLIPY: // 上下反転
					for (var bx = bx1; bx <= d.x2; bx += 2) {
						idx = 1;
						this.qnumh[bx] = this.qnumh[bx].reverse();
						bd.getex(bx, -1).setQnum2(this.qnumh[bx][0]);
						for (var by = by1; by <= d.y2; by += 2) {
							var cell = bd.getc(bx, by);
							if (cell.is51cell()) {
								cell.setQnum2(this.qnumh[bx][idx]);
								idx++;
							}
						}
					}
					break;

				case this.FLIPX: // 左右反転
					for (var by = by1; by <= d.y2; by += 2) {
						idx = 1;
						this.qnumw[by] = this.qnumw[by].reverse();
						bd.getex(-1, by).setQnum(this.qnumw[by][0]);
						for (var bx = bx1; bx <= d.x2; bx += 2) {
							var cell = bd.getc(bx, by);
							if (cell.is51cell()) {
								cell.setQnum(this.qnumw[by][idx]);
								idx++;
							}
						}
					}
					break;

				case this.TURNR: // 右90°反転
					for (var by = by1; by <= d.y2; by += 2) {
						idx = 1;
						this.qnumh[by] = this.qnumh[by].reverse();
						bd.getex(-1, by).setQnum(this.qnumh[by][0]);
						for (var bx = bx1; bx <= d.x2; bx += 2) {
							var cell = bd.getc(bx, by);
							if (cell.is51cell()) {
								cell.setQnum(this.qnumh[by][idx]);
								idx++;
							}
						}
					}
					for (var bx = bx1; bx <= d.x2; bx += 2) {
						idx = 1;
						bd.getex(bx, -1).setQnum2(this.qnumw[xx - bx][0]);
						for (var by = by1; by <= d.y2; by += 2) {
							var cell = bd.getc(bx, by);
							if (cell.is51cell()) {
								cell.setQnum2(this.qnumw[xx - bx][idx]);
								idx++;
							}
						}
					}
					break;

				case this.TURNL: // 左90°反転
					for (var by = by1; by <= d.y2; by += 2) {
						idx = 1;
						bd.getex(-1, by).setQnum(this.qnumh[yy - by][0]);
						for (var bx = bx1; bx <= d.x2; bx += 2) {
							var cell = bd.getc(bx, by);
							if (cell.is51cell()) {
								cell.setQnum(this.qnumh[yy - by][idx]);
								idx++;
							}
						}
					}
					for (var bx = bx1; bx <= d.x2; bx += 2) {
						idx = 1;
						this.qnumw[bx] = this.qnumw[bx].reverse();
						bd.getex(bx, -1).setQnum2(this.qnumw[bx][0]);
						for (var by = by1; by <= d.y2; by += 2) {
							var cell = bd.getc(bx, by);
							if (cell.is51cell()) {
								cell.setQnum2(this.qnumw[bx][idx]);
								idx++;
							}
						}
					}
					break;
			}
			bd.enableInfo();
		},

		adjustExCellTopLeft_1: function(key, d) {
			var bx1 = d.x1 | 1,
				by1 = d.y1 | 1;
			this.qnumw = [];
			this.qnumh = [];

			var bd = this.board;
			var rowmin = bd.excellRows(bd.cols, bd.rows) * -2 + 1;
			var colmin = bd.excellCols(bd.cols, bd.rows) * -2 + 1;
			for (var by = by1; by <= d.y2; by += 2) {
				this.qnumw[by] = [];
				for (var bx = colmin; bx <= -1; bx += 2) {
					this.qnumw[by].push(bd.getex(bx, by).qnum);
				}
			}
			for (var bx = bx1; bx <= d.x2; bx += 2) {
				this.qnumh[bx] = [];
				for (var by = rowmin; by <= -1; by += 2) {
					this.qnumh[bx].push(bd.getex(bx, by).qnum);
				}
			}
		},
		adjustExCellTopLeft_2: function(key, d, preserve) {
			var xx = d.x1 + d.x2,
				yy = d.y1 + d.y2,
				bx1 = d.x1 | 1,
				by1 = d.y1 | 1;

			if (!preserve) {
				if (key === this.FLIPX || key === this.TURNL) {
					for (var id in this.qnumw) {
						this.qnumw[id].reverse();
					}
				}
				if (key === this.FLIPY || key === this.TURNR) {
					for (var id in this.qnumh) {
						this.qnumh[id].reverse();
					}
				}
			}

			var bd = this.board;
			bd.disableInfo();
			var rowmin = bd.excellRows(bd.cols, bd.rows) * -2 + 1;
			var colmin = bd.excellCols(bd.cols, bd.rows) * -2 + 1;
			switch (key) {
				case this.FLIPY: // 上下反転
					for (var bx = bx1; bx <= d.x2; bx += 2) {
						for (var by = -1; by >= rowmin; by -= 2) {
							bd.getex(bx, by).setQnum(this.qnumh[bx].pop());
						}
					}
					break;

				case this.FLIPX: // 左右反転
					for (var by = by1; by <= d.y2; by += 2) {
						for (var bx = -1; bx >= colmin; bx -= 2) {
							bd.getex(bx, by).setQnum(this.qnumw[by].pop());
						}
					}
					break;

				case this.TURNR: // 右90°反転
					for (var by = by1; by <= d.y2; by += 2) {
						for (var bx = -1; bx >= colmin; bx -= 2) {
							bd.getex(bx, by).setQnum(this.qnumh[by].pop());
						}
					}
					for (var bx = bx1; bx <= d.x2; bx += 2) {
						for (var by = -1; by >= rowmin; by -= 2) {
							bd.getex(bx, by).setQnum(this.qnumw[xx - bx].pop());
						}
					}
					break;

				case this.TURNL: // 左90°反転
					for (var by = by1; by <= d.y2; by += 2) {
						for (var bx = -1; bx >= colmin; bx -= 2) {
							bd.getex(bx, by).setQnum(this.qnumh[yy - by].pop());
						}
					}
					for (var bx = bx1; bx <= d.x2; bx += 2) {
						for (var by = -1; by >= rowmin; by -= 2) {
							bd.getex(bx, by).setQnum(this.qnumw[bx].pop());
						}
					}
					break;
			}

			bd.enableInfo();
		},

		//------------------------------------------------------------------------------
		// bd.exec.getAfterPos()  回転・反転開始前のIN/OUTなどの位置の調整
		//------------------------------------------------------------------------------
		getAfterPos: function(key, d, piece) {
			var puzzle = this.puzzle,
				bd = puzzle.board;
			var xx = d.x1 + d.x2,
				yy = d.y1 + d.y2,
				bx1 = piece.bx,
				by1 = piece.by,
				bx2,
				by2;
			switch (key) {
				case this.FLIPY:
					bx2 = bx1;
					by2 = yy - by1;
					break;
				case this.FLIPX:
					bx2 = xx - bx1;
					by2 = by1;
					break;
				case this.TURNR:
					bx2 = yy - by1;
					by2 = bx1;
					break;
				case this.TURNL:
					bx2 = by1;
					by2 = xx - bx1;
					break;
				case this.EXPANDUP:
					bx2 = bx1;
					by2 = by1 + (by1 === bd.minby ? 0 : 2);
					break;
				case this.EXPANDDN:
					bx2 = bx1;
					by2 = by1 + (by1 === bd.maxby ? 2 : 0);
					break;
				case this.EXPANDLT:
					bx2 = bx1 + (bx1 === bd.minbx ? 0 : 2);
					by2 = by1;
					break;
				case this.EXPANDRT:
					bx2 = bx1 + (bx1 === bd.maxbx ? 2 : 0);
					by2 = by1;
					break;
				case this.REDUCEUP:
					bx2 = bx1;
					by2 = by1 - (by1 <= bd.minby + 2 ? 0 : 2);
					break;
				case this.REDUCEDN:
					bx2 = bx1;
					by2 = by1 - (by1 >= bd.maxby - 2 ? 2 : 0);
					break;
				case this.REDUCELT:
					bx2 = bx1 - (bx1 <= bd.minbx + 2 ? 0 : 2);
					by2 = by1;
					break;
				case this.REDUCERT:
					bx2 = bx1 - (bx1 >= bd.maxbx - 2 ? 2 : 0);
					by2 = by1;
					break;
				default:
					bx2 = bx1;
					by2 = by1;
					break;
			}

			return {
				pos: new puzzle.klass.Address(bx2, by2),
				isdel: this.isdel(key, piece)
			};
		}
	}
});

// EncodeCommon.js v3.4.1

pzpr.classmgr.makeCommon({
	//---------------------------------------------------------
	Encode: {
		//---------------------------------------------------------------------------
		// enc.include()    文字列caはbottomとupの間にあるか
		//---------------------------------------------------------------------------
		include: function(ca, bottom, up) {
			return bottom <= ca && ca <= up;
		},

		//---------------------------------------------------------------------------
		// enc.decode4Cell()  quesが0～4までの場合、デコードする
		// enc.encode4Cell()  quesが0～4までの場合、問題部をエンコードする
		//---------------------------------------------------------------------------
		decode4Cell: function() {
			var c = 0,
				i = 0,
				bstr = this.outbstr,
				bd = this.board;
			for (i = 0; i < bstr.length; i++) {
				var cell = bd.cell[c],
					ca = bstr.charAt(i);
				if (this.include(ca, "0", "4")) {
					cell.qnum = parseInt(ca, 16);
				} else if (this.include(ca, "5", "9")) {
					cell.qnum = parseInt(ca, 16) - 5;
					c++;
				} else if (this.include(ca, "a", "e")) {
					cell.qnum = parseInt(ca, 16) - 10;
					c += 2;
				} else if (this.include(ca, "g", "z")) {
					c += parseInt(ca, 36) - 16;
				} else if (ca === ".") {
					cell.qnum = -2;
				}

				c++;
				if (!bd.cell[c]) {
					break;
				}
			}
			this.outbstr = bstr.substr(i + 1);
		},
		encode4Cell: function() {
			var count = 0,
				cm = "",
				bd = this.board;
			for (var c = 0; c < bd.cell.length; c++) {
				var pstr = "",
					qn = bd.cell[c].qnum;

				if (qn >= 0) {
					if (!!bd.cell[c + 1] && bd.cell[c + 1].qnum !== -1) {
						pstr = "" + qn.toString(16);
					} else if (!!bd.cell[c + 2] && bd.cell[c + 2].qnum !== -1) {
						pstr = "" + (5 + qn).toString(16);
						c++;
					} else {
						pstr = "" + (10 + qn).toString(16);
						c += 2;
					}
				} else if (qn === -2) {
					pstr = ".";
				} else {
					count++;
				}

				if (count === 0) {
					cm += pstr;
				} else if (pstr || count === 20) {
					cm += (count + 15).toString(36) + pstr;
					count = 0;
				}
			}
			if (count > 0) {
				cm += (count + 15).toString(36);
			}

			this.outbstr += cm;
		},

		//---------------------------------------------------------------------------
		// enc.decode1Cell()  compact variants of encode4Cell for sparse single ques value
		// enc.encode1Cell()
		//---------------------------------------------------------------------------
		decode1Cell: function(val) {
			var c = 0,
				i = 0,
				bstr = this.outbstr,
				bd = this.board;
			for (i = 0; i < bstr.length; i++) {
				var cell = bd.cell[c],
					ca = bstr.charAt(i);
				if (this.include(ca, "0", "h")) {
					cell.qnum = val;
					c += parseInt(ca, 36);
				} else {
					c += parseInt(ca, 36) - 18;
				}
				c++;
				if (!bd.cell[c]) {
					break;
				}
			}
			this.outbstr = bstr.substr(i + 1);
		},
		encode1Cell: function(val) {
			var count = -1,
				have = false,
				cm = "",
				bd = this.board;
			for (var c = 0; c < bd.cell.length; c++) {
				if (bd.cell[c].qnum === val) {
					if (count >= 0) {
						if (have) {
							cm += count.toString(36);
						} else {
							cm += (count + 18).toString(36);
						}
					}
					have = true;
					count = 0;
					continue;
				}
				count++;
				if (count === 17) {
					if (have) {
						cm += count.toString(36);
					} else {
						cm += (count + 18).toString(36);
					}
					have = false;
					count = -1;
				}
			}
			if (count >= 0) {
				if (have) {
					cm += count.toString(36);
				} else {
					cm += (count + 18).toString(36);
				}
			}

			this.outbstr += cm;
		},

		//---------------------------------------------------------------------------
		// enc.decode4Cross()  quesが0～4までの場合、デコードする
		// enc.encode4Cross()  quesが0～4までの場合、問題部をエンコードする
		//---------------------------------------------------------------------------
		decode4Cross: function() {
			var c = 0,
				i = 0,
				bstr = this.outbstr,
				bd = this.board;
			for (i = 0; i < bstr.length; i++) {
				var cross = bd.cross[c],
					ca = bstr.charAt(i);
				if (this.include(ca, "0", "4")) {
					cross.qnum = parseInt(ca, 16);
				} else if (this.include(ca, "5", "9")) {
					cross.qnum = parseInt(ca, 16) - 5;
					c++;
				} else if (this.include(ca, "a", "e")) {
					cross.qnum = parseInt(ca, 16) - 10;
					c += 2;
				} else if (this.include(ca, "g", "z")) {
					c += parseInt(ca, 36) - 16;
				} else if (ca === ".") {
					cross.qnum = -2;
				}

				c++;
				if (!bd.cross[c]) {
					break;
				}
			}
			this.outbstr = bstr.substr(i + 1);
		},
		encode4Cross: function() {
			var count = 0,
				cm = "",
				bd = this.board;
			for (var c = 0; c < bd.cross.length; c++) {
				var pstr = "",
					qn = bd.cross[c].qnum;

				if (qn >= 0) {
					if (!!bd.cross[c + 1] && bd.cross[c + 1].qnum !== -1) {
						pstr = "" + qn.toString(16);
					} else if (!!bd.cross[c + 2] && bd.cross[c + 2].qnum !== -1) {
						pstr = "" + (5 + qn).toString(16);
						c++;
					} else {
						pstr = "" + (10 + qn).toString(16);
						c += 2;
					}
				} else if (qn === -2) {
					pstr = ".";
				} else {
					count++;
				}

				if (count === 0) {
					cm += pstr;
				} else if (pstr || count === 20) {
					cm += (count + 15).toString(36) + pstr;
					count = 0;
				}
			}
			if (count > 0) {
				cm += (count + 15).toString(36);
			}

			this.outbstr += cm;
		},

		//---------------------------------------------------------------------------
		// enc.decodeNumber10()  quesが0～9までの場合、デコードする
		// enc.encodeNumber10()  quesが0～9までの場合、問題部をエンコードする
		//---------------------------------------------------------------------------
		decodeNumber10: function() {
			var c = 0,
				i = 0,
				bstr = this.outbstr,
				bd = this.board;
			for (i = 0; i < bstr.length; i++) {
				var cell = bd.cell[c],
					ca = bstr.charAt(i);

				if (ca === ".") {
					cell.qnum = -2;
				} else if (this.include(ca, "0", "9")) {
					cell.qnum = parseInt(ca, 10);
				} else if (this.include(ca, "a", "z")) {
					c += parseInt(ca, 36) - 10;
				}

				c++;
				if (!bd.cell[c]) {
					break;
				}
			}
			this.outbstr = bstr.substr(i + 1);
		},
		maybeEncodeNumber10: function() {
			var cm = "",
				count = 0,
				bd = this.board;
			for (var c = 0; c < bd.cell.length; c++) {
				var pstr = "",
					qn = bd.cell[c].qnum;

				if (qn === -2) {
					pstr = ".";
				} else if (qn >= 0 && qn < 10) {
					pstr = qn.toString(10);
				} else if (qn >= 10) {
					return "";
				} else {
					count++;
				}

				if (count === 0) {
					cm += pstr;
				} else if (pstr || count === 26) {
					cm += (9 + count).toString(36) + pstr;
					count = 0;
				}
			}
			if (count > 0) {
				cm += (9 + count).toString(36);
			}
			return cm;
		},
		encodeNumber10: function() {
			var result = this.maybeEncodeNumber10();
			if (!result) {
				throw Error("Grid contains number higher than 9");
			}
			this.outbstr += result;
		},

		//---------------------------------------------------------------------------
		// enc.decodeNumber16()  quesが0～8192?までの場合、デコードする
		// enc.encodeNumber16()  quesが0～8192?までの場合、問題部をエンコードする
		//---------------------------------------------------------------------------
		readNumber16: function(bstr, i) {
			var ca = bstr.charAt(i);

			if (this.include(ca, "0", "9") || this.include(ca, "a", "f")) {
				return [parseInt(ca, 16), 1];
			} else if (ca === "-") {
				return [parseInt(bstr.substr(i + 1, 2), 16), 3];
			} else if (ca === "+") {
				return [parseInt(bstr.substr(i + 1, 3), 16), 4];
			} else if (ca === "=") {
				return [parseInt(bstr.substr(i + 1, 3), 16) + 4096, 4];
			} else if (ca === "%" || ca === "@") {
				return [parseInt(bstr.substr(i + 1, 3), 16) + 8192, 4];
			} else if (ca === "*") {
				return [parseInt(bstr.substr(i + 1, 4), 16) + 12240, 5];
			} else if (ca === "$") {
				return [parseInt(bstr.substr(i + 1, 5), 16) + 77776, 6];
			} else if (ca === ".") {
				return [-2, 1];
			} else {
				return [-1, 0];
			}
		},
		decodeOneNumber16: function() {
			var res = this.readNumber16(this.outbstr, 0);
			this.outbstr = this.outbstr.substr(res[1]);
			return res[0];
		},
		decodeNumber16: function() {
			var bd = this.board;
			this.genericDecodeNumber16(bd.cell.length, function(c, val) {
				bd.cell[c].qnum = val;
			});
		},
		genericDecodeNumber16: function(length, set_func) {
			var c = 0,
				i = 0,
				bstr = this.outbstr;
			while (i < bstr.length && c < length) {
				var ca = bstr.charAt(i);
				var res = this.readNumber16(bstr, i);
				if (res[0] !== -1) {
					set_func(c, res[0]);
					i += res[1];
					c++;
				} else if (ca >= "g" && ca <= "z") {
					c += parseInt(ca, 36) - 15;
					i++;
				} else {
					i++;
				}
			}
			this.outbstr = bstr.substr(i);
		},
		writeNumber16: function(qn) {
			if (qn === -2) {
				return ".";
			} else if (qn >= 0 && qn < 16) {
				return qn.toString(16);
			} else if (qn >= 16 && qn < 256) {
				return "-" + qn.toString(16);
			} else if (qn >= 256 && qn < 4096) {
				return "+" + qn.toString(16);
			} else if (qn >= 4096 && qn < 8192) {
				return "=" + (qn - 4096).toString(16).padStart(3, 0);
			} else if (qn >= 8192 && qn < 12240) {
				return "@" + (qn - 8192).toString(16).padStart(3, 0);
			} else if (qn >= 12240 && qn < 77776) {
				return "*" + (qn - 12240).toString(16).padStart(4, 0);
			} else if (qn >= 77776) {
				return "$" + (qn - 77776).toString(16).padStart(5, 0);
			} else {
				// 最大1126352
				return "";
			}
		},
		encodeNumber16: function() {
			var bd = this.board;
			this.genericEncodeNumber16(bd.cell.length, function(c) {
				return bd.cell[c].qnum;
			});
		},
		genericEncodeNumber16: function(length, get_func) {
			var count = 0,
				cm = "";
			for (var c = 0; c < length; c++) {
				var qn = get_func(c);
				var pstr = this.writeNumber16(qn);
				if (pstr === "") {
					count++;
				}

				if (count === 0) {
					cm += pstr;
				} else if (pstr || count === 20) {
					cm += (15 + count).toString(36) + pstr;
					count = 0;
				}
			}
			if (count > 0) {
				cm += (15 + count).toString(36);
			}

			this.outbstr += cm;
		},

		//---------------------------------------------------------------------------
		// enc.decodeNumber10or16()  full range, but falling back to {de,en}codeNumber10 for backwards compatibility
		// enc.encodeNumber10or16()  full range, but falling back to {de,en}codeNumber10 for backwards compatibility
		//---------------------------------------------------------------------------
		decodeNumber10or16: function() {
			var bstr = this.outbstr;
			if (bstr.length === 0) {
				return;
			}
			var ca = bstr.charAt(0);
			if (ca === "-") {
				this.outbstr = bstr.substr(1);
				this.decodeNumber16();
			} else {
				this.decodeNumber10();
			}
		},
		encodeNumber10or16: function() {
			var cm = this.maybeEncodeNumber10();
			if (cm.length > 0) {
				this.outbstr += cm;
				return;
			} else {
				this.outbstr += "-";
				this.encodeNumber16();
			}
		},

		decodeNumber16ExCell: function() {
			// 盤面外数字のデコード
			var ec = 0,
				i = 0,
				bstr = this.outbstr,
				bd = this.board;
			for (i = 0; i < bstr.length; i++) {
				var ca = bstr.charAt(i),
					excell = bd.excell[ec];
				if (this.include(ca, "0", "9") || this.include(ca, "a", "f")) {
					excell.qnum = parseInt(bstr.substr(i, 1), 16);
				} else if (ca === "-") {
					excell.qnum = parseInt(bstr.substr(i + 1, 2), 16);
					i += 2;
				} else if (ca === ".") {
					excell.qnum = -2;
				} else if (ca >= "g" && ca <= "z") {
					ec += parseInt(ca, 36) - 16;
				}

				ec++;
				if (ec >= bd.excell.length) {
					break;
				}
			}

			this.outbstr = bstr.substr(i + 1);
		},
		encodeNumber16ExCell: function() {
			var bd = this.board;
			this.genericEncodeNumber16(bd.excell.length, function(c) {
				return bd.excell[c].qnum;
			});
		},

		encodeNumber16ExCellFlushed: function() {
			var bd = this.board,
				cols = bd.cols,
				rows = bd.rows;
			var nums = bd.excell.map(function(ex) {
				return ex.qnum;
			});

			bd.genericFlush(
				bd.excellCols(cols, rows),
				bd.excellRows(cols, rows),
				cols,
				rows,
				function(i) {
					return nums[i];
				},
				function(i, num) {
					nums[i] = num;
				}
			);

			this.genericEncodeNumber16(nums.length, function(c) {
				return nums[c];
			});
		},

		//---------------------------------------------------------------------------
		// enc.decodeRoomNumber16()  部屋＋部屋の一つのquesが0～8192?までの場合、デコードする
		// enc.encodeRoomNumber16()  部屋＋部屋の一つのquesが0～8192?までの場合、問題部をエンコードする
		//---------------------------------------------------------------------------
		decodeRoomNumber16: function() {
			var bd = this.board;
			bd.roommgr.rebuild();
			var rooms = bd.roommgr.components;

			this.genericDecodeNumber16(rooms.length, function(r, val) {
				rooms[r].top.qnum = val;
			});
		},
		encodeRoomNumber16: function() {
			var bd = this.board;
			bd.roommgr.rebuild();

			this.genericEncodeNumber16(bd.roommgr.components.length, function(r) {
				return bd.roommgr.components[r].top.qnum;
			});
		},

		//---------------------------------------------------------------------------
		// enc.decodeArrowNumber16()  矢印付きquesが0～8192?までの場合、デコードする
		// enc.encodeArrowNumber16()  矢印付きquesが0～8192?までの場合、問題部をエンコードする
		//---------------------------------------------------------------------------
		decodeArrowNumber16: function() {
			var c = 0,
				i = 0,
				bstr = this.outbstr,
				bd = this.board;
			for (i = 0; i < bstr.length; i++) {
				var ca = bstr.charAt(i),
					cell = bd.cell[c];

				if (ca === "+") {
					cell.qdir = 0;
					cell.qnum = -3;
				} else if (this.include(ca, "0", "4")) {
					var ca1 = bstr.charAt(i + 1);
					cell.qdir = parseInt(ca, 16);
					cell.qnum = ca1 !== "." ? parseInt(ca1, 16) : -2;
					i++;
				} else if (this.include(ca, "5", "9")) {
					cell.qdir = parseInt(ca, 16) - 5;
					cell.qnum = parseInt(bstr.substr(i + 1, 2), 16);
					i += 2;
				} else if (ca === "-") {
					cell.qdir = parseInt(bstr.substr(i + 1, 1), 16);
					cell.qnum = parseInt(bstr.substr(i + 2, 3), 16);
					i += 4;
				} else if (ca >= "a" && ca <= "z") {
					c += parseInt(ca, 36) - 10;
				}

				c++;
				if (!bd.cell[c]) {
					break;
				}
			}
			this.outbstr = bstr.substr(i + 1);
		},
		encodeArrowNumber16: function() {
			var cm = "",
				count = 0,
				bd = this.board;
			for (var c = 0; c < bd.cell.length; c++) {
				var pstr = "",
					dir = bd.cell[c].qdir,
					qn = bd.cell[c].qnum;
				if (qn === -2) {
					pstr = dir + ".";
				} else if (qn === -3) {
					pstr = "+";
				} else if (qn >= 0 && qn < 16) {
					pstr = dir + qn.toString(16);
				} else if (qn >= 16 && qn < 256) {
					pstr = dir + 5 + qn.toString(16);
				} else if (qn >= 256 && qn < 4096) {
					pstr = "-" + dir + qn.toString(16);
				} else {
					count++;
				}

				if (count === 0) {
					cm += pstr;
				} else if (pstr || count === 26) {
					cm += (count + 9).toString(36) + pstr;
					count = 0;
				}
			}
			if (count > 0) {
				cm += (count + 9).toString(36);
			}

			this.outbstr += cm;
		},

		//---------------------------------------------------------------------------
		// enc.decodeBorder() 問題の境界線をデコードする
		// enc.encodeBorder() 問題の境界線をエンコードする
		//---------------------------------------------------------------------------
		decodeBorder: function() {
			var pos1,
				pos2,
				bstr = this.outbstr,
				id,
				twi = [16, 8, 4, 2, 1];
			var bd = this.board;

			if (bstr) {
				pos1 = Math.min((((bd.cols - 1) * bd.rows + 4) / 5) | 0, bstr.length);
				pos2 = Math.min(
					(((bd.cols * (bd.rows - 1) + 4) / 5) | 0) + pos1,
					bstr.length
				);
			} else {
				pos1 = 0;
				pos2 = 0;
			}

			id = 0;
			for (var i = 0; i < pos1; i++) {
				var ca = parseInt(bstr.charAt(i), 32);
				for (var w = 0; w < 5; w++) {
					if (id < (bd.cols - 1) * bd.rows) {
						bd.border[id].ques = ca & twi[w] ? 1 : 0;
						id++;
					}
				}
			}

			id = (bd.cols - 1) * bd.rows;
			for (var i = pos1; i < pos2; i++) {
				var ca = parseInt(bstr.charAt(i), 32);
				for (var w = 0; w < 5; w++) {
					var border = bd.border[id];
					if (!!border && border.inside) {
						border.ques = ca & twi[w] ? 1 : 0;
						id++;
					}
				}
			}

			bd.roommgr.rebuild();
			this.outbstr = bstr.substr(pos2);
		},
		encodeBorder: function() {
			var cm = "",
				twi = [16, 8, 4, 2, 1],
				num = 0,
				pass = 0;
			var bd = this.board;

			for (var id = 0; id < (bd.cols - 1) * bd.rows; id++) {
				pass += bd.border[id].ques * twi[num];
				num++;
				if (num === 5) {
					cm += pass.toString(32);
					num = 0;
					pass = 0;
				}
			}
			if (num > 0) {
				cm += pass.toString(32);
			}

			num = 0;
			pass = 0;
			for (
				var id = (bd.cols - 1) * bd.rows;
				id < 2 * bd.cols * bd.rows - bd.cols - bd.rows;
				id++
			) {
				pass += bd.border[id].ques * twi[num];
				num++;
				if (num === 5) {
					cm += pass.toString(32);
					num = 0;
					pass = 0;
				}
			}
			if (num > 0) {
				cm += pass.toString(32);
			}

			this.outbstr += cm;
		},

		//---------------------------------------------------------------------------
		// enc.decodeCrossMark() 黒点をデコードする
		// enc.encodeCrossMark() 黒点をエンコードする
		//---------------------------------------------------------------------------
		decodeCrossMark: function() {
			var cc = 0,
				i = 0,
				bstr = this.outbstr,
				bd = this.board;
			var cp = bd.hascross === 2 ? 1 : 0,
				cp2 = cp << 1;
			var rows = bd.rows - 1 + cp2,
				cols = bd.cols - 1 + cp2;
			for (i = 0; i < bstr.length; i++) {
				var ca = bstr.charAt(i);

				if (this.include(ca, "0", "9") || this.include(ca, "a", "z")) {
					cc += parseInt(ca, 36);
					var bx = ((cc % cols) + (1 - cp)) << 1;
					var by = (((cc / cols) | 0) + (1 - cp)) << 1;

					if (by > bd.maxby - 2 * (1 - cp)) {
						i++;
						break;
					}
					bd.getx(bx, by).qnum = 1;
				} else if (ca === ".") {
					cc += 35;
				}

				cc++;
				if (cc >= cols * rows) {
					i++;
					break;
				}
			}
			this.outbstr = bstr.substr(i);
		},
		encodeCrossMark: function() {
			var cm = "",
				count = 0,
				bd = this.board;
			var cp = bd.hascross === 2 ? 1 : 0,
				cp2 = cp << 1;
			var rows = bd.rows - 1 + cp2,
				cols = bd.cols - 1 + cp2;
			for (var c = 0, max = cols * rows; c < max; c++) {
				var pstr = "";
				var bx = ((c % cols) + (1 - cp)) << 1;
				var by = (((c / cols) | 0) + (1 - cp)) << 1;

				if (bd.getx(bx, by).qnum === 1) {
					pstr = ".";
				} else {
					count++;
				}

				if (pstr) {
					cm += count.toString(36);
					count = 0;
				} else if (count === 36) {
					cm += ".";
					count = 0;
				}
			}
			if (count > 0 || cm === "") {
				// cm == "" && count == 0 happens for 1xn / nx1 boards
				// with no potential crosses. This is encoded as "0" as
				// "all 0 of the 0 potential crosses are not crosses"
				cm += count.toString(36);
			}

			this.outbstr += cm;
		},

		//---------------------------------------------------------------------------
		// enc.decodeCircle() 白丸・黒丸をデコードする
		// enc.encodeCircle() 白丸・黒丸をエンコードする
		//---------------------------------------------------------------------------
		genericDecodeThree: function(set_func) {
			var bd = this.board;
			var bstr = this.outbstr,
				c = 0,
				tri = [9, 3, 1];
			var pos = bstr
				? Math.min(((bd.cols * bd.rows + 2) / 3) | 0, bstr.length)
				: 0;
			for (var i = 0; i < pos; i++) {
				var ca = parseInt(bstr.charAt(i), 27);
				for (var w = 0; w < 3; w++) {
					if (!!bd.cell[c]) {
						var val = ((ca / tri[w]) | 0) % 3;
						if (val > 0) {
							set_func(bd.cell[c], val);
						}
						c++;
					}
				}
			}
			this.outbstr = bstr.substr(pos);
		},
		decodeCircle: function() {
			this.genericDecodeThree(function(cell, val) {
				cell.qnum = val;
			});
		},
		genericEncodeThree: function(get_func) {
			var bd = this.board;
			var cm = "",
				num = 0,
				pass = 0,
				tri = [9, 3, 1];
			for (var c = 0; c < bd.cell.length; c++) {
				pass += get_func(bd.cell[c]) * tri[num];
				num++;
				if (num === 3) {
					cm += pass.toString(27);
					num = 0;
					pass = 0;
				}
			}
			if (num > 0) {
				cm += pass.toString(27);
			}

			this.outbstr += cm;
		},
		encodeCircle: function() {
			this.genericEncodeThree(function(cell) {
				return Math.max(0, cell.qnum);
			});
		},

		//---------------------------------------------------------------------------
		// enc.decodeIce() cell.ques===6をデコードする
		// enc.encodeIce() cell.ques===6をエンコードする
		//---------------------------------------------------------------------------
		decodeBinary: function(prop, val) {
			var bd = this.board;
			this.genericDecodeBinary(bd.cell.length, function(c, newval) {
				if (newval) {
					bd.cell[c][prop] = val;
				}
			});
		},
		genericDecodeBinary: function(length, set_func) {
			var bstr = this.outbstr;

			var c = 0,
				twi = [16, 8, 4, 2, 1];
			for (var i = 0; i < bstr.length; i++) {
				var num = parseInt(bstr.charAt(i), 32);
				for (var w = 0; w < 5; w++) {
					if (c < length) {
						set_func(c, !!(num & twi[w]));
						c++;
					}
				}
				if (c >= length) {
					break;
				}
			}
			this.outbstr = bstr.substr(i + 1);
		},
		encodeBinary: function(prop, val, skipnone) {
			var bd = this.board;
			this.genericEncodeBinary(
				bd.cell.length,
				function(c) {
					return bd.cell[c][prop] === val;
				},
				skipnone
			);
		},
		genericEncodeBinary: function(length, get_func, skipnone) {
			var cm = "",
				num = 0,
				pass = 0,
				twi = [16, 8, 4, 2, 1];
			var found = false;
			for (var c = 0; c < length; c++) {
				if (get_func(c)) {
					pass += twi[num];
					found = true;
				}
				num++;
				if (num === 5) {
					cm += pass.toString(32);
					num = 0;
					pass = 0;
				}
			}
			if (num > 0) {
				cm += pass.toString(32);
			}

			if (found || !skipnone) {
				this.outbstr += cm;
				return true;
			}
			return false;
		},
		decodeIce: function() {
			this.decodeBinary("ques", 6);
		},
		encodeIce: function() {
			this.encodeBinary("ques", 6);
		},
		decodeEmpty: function() {
			this.decodeBinary("ques", 7);
		},
		encodeEmpty: function() {
			return this.encodeBinary("ques", 7, true);
		},

		//---------------------------------------------------------------------------
		// enc.decodecross_old() Crossの問題部をデコードする(旧形式)
		//---------------------------------------------------------------------------
		decodecross_old: function() {
			var bstr = this.outbstr,
				c = 0,
				bd = this.board;
			for (var i = 0; i < bstr.length; i++) {
				var ca = bstr.charAt(i);
				if (this.include(ca, "0", "4")) {
					bd.cross[c].qnum = parseInt(ca, 10);
				}

				c++;
				if (!bd.cross[c]) {
					i++;
					break;
				}
			}

			this.outbstr = bstr.substr(i);
		},

		//---------------------------------------------------------------------------
		// enc.decodeDot() Decodes Cross/Cell/Border values up to 2
		// enc.encodeDot() Encodes Cross/Cell/Border values up to 2
		//---------------------------------------------------------------------------
		decodeDot: function(bstr) {
			var bd = this.board;
			bd.disableInfo();
			var s = 0,
				bstr = this.outbstr;
			for (var i = 0; i < bstr.length; i++) {
				var dot = bd.dots[s],
					ca = bstr.charAt(i);
				if (this.include(ca, "0", "f")) {
					var val = parseInt(ca, 16);
					dot.setDot((val % 2) + 1);
					s += (val >> 1) + 1;
				} else if (this.include(ca, "g", "z")) {
					s += parseInt(ca, 36) - 15;
				}

				if (s >= bd.dotsmax) {
					break;
				}
			}
			bd.enableInfo();
			this.outbstr = bstr.substr(i + 1);
		},
		encodeDot: function() {
			var count = 0,
				cm = "",
				bd = this.board;
			for (var s = 0; s < bd.dotsmax; s++) {
				var pstr = "",
					dot = bd.dots[s];
				if (dot.getDot() > 0) {
					for (var i = 1; i <= 7; i++) {
						var dot2 = bd.dots[s + i];
						if (!!dot2 && dot2.getDot() > 0) {
							pstr = "" + (2 * (i - 1) + (dot.getDot() - 1)).toString(16);
							s += i - 1;
							break;
						}
					}
					if (pstr === "") {
						pstr = (13 + dot.getDot()).toString(16);
						s += 7;
					}
				} else {
					count++;
				}

				if (count === 0) {
					cm += pstr;
				} else if (pstr || count === 20) {
					cm += (count + 15).toString(36) + pstr;
					count = 0;
				}
			}
			if (count > 0) {
				cm += (count + 15).toString(36);
			}

			this.outbstr += cm;
		},

		//---------------------------------------------------------------------------
		// enc.decodePieceBank() Decode piece bank preset/custom
		// enc.encodePieceBank() Encode piece bank preset/custom
		//---------------------------------------------------------------------------
		decodePieceBank: function() {
			var bank = this.board.bank;
			if (this.outbstr.substr(0, 2) === "//") {
				var shortkey = this.outbstr[2];

				for (var i = 0; i < bank.presets.length; i++) {
					if (bank.presets[i].shortkey === shortkey) {
						bank.initialize(bank.presets[i].constant);
						break;
					}
				}

				this.outbstr = this.outbstr.substr(3);
			} else {
				// Trim slash
				this.outbstr = this.outbstr.substr(1);

				var next = this.outbstr.indexOf("/");
				var count = +this.outbstr.substr(0, next);
				this.outbstr = this.outbstr.substr(next + 1);
				var pieces = [];

				for (var i = 0; i < count; i++) {
					next = this.outbstr.indexOf("/");
					pieces.push(next >= 0 ? this.outbstr.substr(0, next) : this.outbstr);
					this.outbstr = next >= 0 ? this.outbstr.substr(next + 1) : "";
				}
				bank.initialize(pieces);
			}
		},
		encodePieceBank: function() {
			this.outbstr += "/";
			var bank = this.board.bank;

			var pieces = bank.pieces
				.map(function(p) {
					return p.serialize();
				})
				.filter(function(p) {
					return p;
				});

			for (var i = 0; i < bank.presets.length; i++) {
				if (!bank.presets[i].constant) {
					continue;
				}
				if (this.puzzle.pzpr.util.sameArray(bank.presets[i].constant, pieces)) {
					this.outbstr += "/" + bank.presets[i].shortkey;
					return;
				}
			}

			this.outbstr += pieces.length;
			for (var i = 0; i < pieces.length; i++) {
				this.outbstr += "/" + pieces[i];
			}
		}
	}
});

// FileDataCommon.js v3.4.1

pzpr.classmgr.makeCommon({
	//---------------------------------------------------------
	FileIO: {
		//---------------------------------------------------------------------------
		// fio.decodeCellQnum() 問題数字のデコードを行う
		// fio.encodeCellQnum() 問題数字のエンコードを行う
		//---------------------------------------------------------------------------
		decodeCellQnum: function() {
			this.decodeCell(function(cell, ca) {
				if (ca === "-") {
					cell.qnum = -2;
				} else if (ca !== ".") {
					cell.qnum = +ca;
				}
			});
		},
		encodeCellQnum: function() {
			this.encodeCell(function(cell) {
				if (cell.qnum >= 0) {
					return cell.qnum + " ";
				} else if (cell.qnum === -2) {
					return "- ";
				} else {
					return ". ";
				}
			});
		},
		//---------------------------------------------------------------------------
		// fio.decodeCellQnumb() 黒背景な問題数字のデコードを行う
		// fio.encodeCellQnumb() 黒背景な問題数字のエンコードを行う
		//---------------------------------------------------------------------------
		decodeCellQnumb: function() {
			this.decodeCell(function(cell, ca) {
				if (ca === "5") {
					cell.qnum = -2;
				} else if (ca !== ".") {
					cell.qnum = +ca;
				}
			});
		},
		encodeCellQnumb: function() {
			this.encodeCell(function(cell) {
				if (cell.qnum >= 0) {
					return cell.qnum + " ";
				} else if (cell.qnum === -2) {
					return "5 ";
				} else {
					return ". ";
				}
			});
		},
		//---------------------------------------------------------------------------
		// fio.decodeCellQnumAns() 問題数字＋黒マス白マスのデコードを行う
		// fio.encodeCellQnumAns() 問題数字＋黒マス白マスのエンコードを行う
		//---------------------------------------------------------------------------
		decodeCellQnumAns: function() {
			this.decodeCell(function(cell, ca) {
				if (ca === "#") {
					cell.qans = 1;
				} else if (ca === "+") {
					cell.qsub = 1;
				} else if (ca === "-") {
					cell.qnum = -2;
				} else if (ca !== ".") {
					cell.qnum = +ca;
				}
			});
		},
		encodeCellQnumAns: function() {
			this.encodeCell(function(cell) {
				if (cell.qnum >= 0) {
					return cell.qnum + " ";
				} else if (cell.qnum === -2) {
					return "- ";
				} else if (cell.qans === 1) {
					return "# ";
				} else if (cell.qsub === 1) {
					return "+ ";
				} else {
					return ". ";
				}
			});
		},
		//---------------------------------------------------------------------------
		// fio.decodeCellDirecQnum() 方向＋問題数字のデコードを行う
		// fio.encodeCellDirecQnum() 方向＋問題数字のエンコードを行う
		//---------------------------------------------------------------------------
		decodeCellDirecQnum: function() {
			this.decodeCell(function(cell, ca) {
				if (ca === "#") {
					cell.qdir = 0;
					cell.qnum = -3;
				} else if (ca !== ".") {
					var inp = ca.split(",");
					cell.qdir = inp[0] !== "0" ? +inp[0] : 0;
					cell.qnum = inp[1] !== "-" ? +inp[1] : -2;
				}
			});
		},
		encodeCellDirecQnum: function() {
			this.encodeCell(function(cell) {
				if (cell.qnum === -3) {
					return "# ";
				} else if (cell.qnum !== -1) {
					var ca1 = cell.qdir !== 0 ? "" + cell.qdir : "0";
					var ca2 = cell.qnum !== -2 ? "" + cell.qnum : "-";
					return [ca1, ",", ca2, " "].join("");
				} else {
					return ". ";
				}
			});
		},
		//---------------------------------------------------------------------------
		// fio.decodeCellAns() 黒マス白マスのデコードを行う
		// fio.encodeCellAns() 黒マス白マスのエンコードを行う
		//---------------------------------------------------------------------------
		decodeCellAns: function() {
			this.decodeCell(function(cell, ca) {
				if (ca === "#") {
					cell.qans = 1;
				} else if (ca === "+") {
					cell.qsub = 1;
				}
			});
		},
		encodeCellAns: function() {
			this.encodeCell(function(cell) {
				if (cell.qans === 1) {
					return "# ";
				} else if (cell.qsub === 1) {
					return "+ ";
				} else {
					return ". ";
				}
			});
		},
		//---------------------------------------------------------------------------
		// fio.decodeCellQanssub() 黒マスと背景色のデコードを行う
		// fio.encodeCellQanssub() 黒マスと背景色のエンコードを行う
		//---------------------------------------------------------------------------
		decodeCellQanssub: function() {
			this.decodeCell(function(cell, ca) {
				if (ca === "+") {
					cell.qsub = 1;
				} else if (ca === "-") {
					cell.qsub = 2;
				} else if (ca === "=") {
					cell.qsub = 3;
				} else if (ca === "%") {
					cell.qsub = 4;
				} else if (ca !== ".") {
					cell.qans = +ca;
				}
			});
		},
		encodeCellQanssub: function() {
			this.encodeCell(function(cell) {
				if (cell.qans !== 0) {
					return cell.qans + " ";
				} else if (cell.qsub === 1) {
					return "+ ";
				} else if (cell.qsub === 2) {
					return "- ";
				} else if (cell.qsub === 3) {
					return "= ";
				} else if (cell.qsub === 4) {
					return "% ";
				} else {
					return ". ";
				}
			});
		},
		//---------------------------------------------------------------------------
		// fio.decodeCellAnumsub() 回答数字と背景色のデコードを行う
		// fio.encodeCellAnumsub() 回答数字と背景色のエンコードを行う
		//---------------------------------------------------------------------------
		decodeCellAnumsub: function() {
			this.decodeCell(function(cell, ca) {
				if (cell.enableSubNumberArray && ca.indexOf("[") >= 0) {
					ca = this.setCellSnum(cell, ca);
				}
				if (ca === "c") {
					cell.qcmp = 1;
				} else if (ca === "+") {
					cell.qsub = 1;
				} else if (ca === "-") {
					cell.qsub = 2;
				} else if (ca === "=") {
					cell.qsub = 3;
				} else if (ca === "%") {
					cell.qsub = 4;
				} else if (ca !== ".") {
					cell.anum = +ca;
				}
			});
		},
		encodeCellAnumsub: function() {
			this.encodeCell(function(cell) {
				var ca = ".";
				if (cell.anum !== -1) {
					ca = "" + cell.anum;
				} else if (cell.qcmp === 1) {
					ca = "c";
				} else if (cell.qsub === 1) {
					ca = "+";
				} else if (cell.qsub === 2) {
					ca = "-";
				} else if (cell.qsub === 3) {
					ca = "=";
				} else if (cell.qsub === 4) {
					ca = "%";
				} else {
					ca = ".";
				}
				if (cell.enableSubNumberArray && cell.anum === -1) {
					ca += this.getCellSnum(cell);
				}
				return ca + " ";
			});
		},
		//---------------------------------------------------------------------------
		// fio.setCellSnum() 補助数字のデコードを行う   (decodeCellAnumsubで内部的に使用)
		// fio.getCellSnum() 補助数字のエンコードを行う (encodeCellAnumsubで内部的に使用)
		//---------------------------------------------------------------------------
		setCellSnum: function(cell, ca) {
			var snumtext = ca.substring(ca.indexOf("[") + 1, ca.indexOf("]"));
			var list = snumtext.split(/,/);
			for (var i = 0; i < list.length; ++i) {
				cell.snum[i] = !!list[i] ? +list[i] : -1;
			}
			return ca.substr(0, ca.indexOf("["));
		},
		getCellSnum: function(cell) {
			var list = [];
			for (var i = 0; i < cell.snum.length; ++i) {
				list[i] = cell.snum[i] !== -1 ? "" + cell.snum[i] : "";
			}
			var snumtext = list.join(",");
			return snumtext !== ",,," ? "[" + snumtext + "]" : "";
		},
		decodeCellSnum: function() {
			this.decodeCell(function(cell, ca) {
				ca = this.setCellSnum(cell, ca);
			});
		},
		encodeCellSnum: function(isforce) {
			if (!isforce) {
				var found = false;
				var cells = this.board.cell;

				for (var c = 0; c < cells.length && !found; c++) {
					var cell = cells[c];
					for (var i = 0; i < cell.snum.length; ++i) {
						if (cell.snum[i] !== -1) {
							found = true;
						}
					}
				}
				if (!found) {
					return;
				}
			}
			this.encodeCell(function(cell) {
				var ca = this.getCellSnum(cell);
				if (ca) {
					return ca + " ";
				}
				return ". ";
			});
		},
		//---------------------------------------------------------------------------
		// fio.decodeCellQsub() 背景色のデコードを行う
		// fio.encodeCellQsub() 背景色のエンコードを行う
		//---------------------------------------------------------------------------
		decodeCellQsub: function() {
			this.decodeCell(function(cell, ca) {
				if (ca !== "0") {
					cell.qsub = +ca;
				}
			});
		},
		encodeCellQsub: function() {
			this.encodeCell(function(cell) {
				if (cell.qsub > 0) {
					return cell.qsub + " ";
				} else {
					return "0 ";
				}
			});
		},
		//---------------------------------------------------------------------------
		// fio.decodeCrossNum() 交点の数字のデコードを行う
		// fio.encodeCrossNum() 交点の数字のエンコードを行う
		//---------------------------------------------------------------------------
		decodeCrossNum: function() {
			this.decodeCross(function(cross, ca) {
				if (ca === "-") {
					cross.qnum = -2;
				} else if (ca !== ".") {
					cross.qnum = +ca;
				}
			});
		},
		encodeCrossNum: function() {
			this.encodeCross(function(cross) {
				if (cross.qnum >= 0) {
					return cross.qnum + " ";
				} else if (cross.qnum === -2) {
					return "- ";
				} else {
					return ". ";
				}
			});
		},
		//---------------------------------------------------------------------------
		// fio.decodeBorderQues() 問題の境界線のデコードを行う
		// fio.encodeBorderQues() 問題の境界線のエンコードを行う
		//---------------------------------------------------------------------------
		decodeBorderQues: function() {
			this.decodeBorder(function(border, ca) {
				if (ca === "1") {
					border.ques = 1;
				}
			});
		},
		encodeBorderQues: function() {
			this.encodeBorder(function(border) {
				return (border.ques === 1 ? "1" : "0") + " ";
			});
		},
		//---------------------------------------------------------------------------
		// fio.decodeBorderAns() 問題・回答の境界線のデコードを行う
		// fio.encodeBorderAns() 問題・回答の境界線のエンコードを行う
		// fio.decodeBorderArrowAns() Decode lines and dir. aux. marks
		// fio.encodeBorderArrowAns() Encode lines and dir. aux. marks
		//---------------------------------------------------------------------------
		decodeBorderAns: function(hasborder) {
			this.decodeBorder(function(border, ca) {
				if (ca === "2") {
					border.qans = 1;
					border.qsub = 1;
				} else if (ca === "1") {
					border.qans = 1;
				} else if (ca === "-1") {
					border.qsub = 1;
				}
			}, hasborder);
		},
		encodeBorderAns: function(hasborder) {
			this.encodeBorder(function(border) {
				if (border.qans === 1 && border.qsub === 1) {
					return "2 ";
				} else if (border.qans === 1) {
					return "1 ";
				} else if (border.qsub === 1) {
					return "-1 ";
				} else {
					return "0 ";
				}
			}, hasborder);
		},
		decodeBorderArrowAns: function() {
			this.decodeBorder(function(border, ca) {
				var lca = ca.charAt(ca.length - 1);
				if (lca >= "a" && lca <= "z") {
					if (lca === "u") {
						border.qsub = 11;
					} else if (lca === "d") {
						border.qsub = 12;
					} else if (lca === "l") {
						border.qsub = 13;
					} else if (lca === "r") {
						border.qsub = 14;
					}
					ca = ca.substr(0, ca.length - 1);
				}

				if (ca !== "" && ca !== "0") {
					if (ca.charAt(0) === "-") {
						border.line = -ca - 1;
						border.qsub = 2;
					} else {
						border.line = +ca;
					}
				}
			});
		},
		encodeBorderArrowAns: function() {
			this.encodeBorder(function(border) {
				var ca = "";
				if (border.qsub === 2) {
					ca += "" + (-1 - border.line);
				} else if (border.line > 0) {
					ca += "" + border.line;
				}

				if (border.qsub >= 11) {
					ca += ["u", "d", "l", "r"][border.qsub - 11];
				}

				return ca !== "" ? ca + " " : "0 ";
			});
		},
		//---------------------------------------------------------------------------
		// fio.decodeBorderLine() Lineのデコードを行う
		// fio.encodeBorderLine() Lineのエンコードを行う
		//---------------------------------------------------------------------------
		decodeBorderLine: function() {
			this.decodeBorder(function(border, ca) {
				if (ca === "-1") {
					border.qsub = 2;
				} else if (ca !== "0") {
					border.line = +ca;
				}
			});
		},
		encodeBorderLineIfPresent: function() {
			if (
				this.board.border.some(function(border) {
					return border.line > 0 || border.qsub === 2;
				})
			) {
				this.encodeBorderLine();
			}
		},
		encodeBorderLine: function() {
			this.encodeBorder(function(border) {
				if (border.line > 0) {
					return border.line + " ";
				} else if (border.qsub === 2) {
					return "-1 ";
				} else {
					return "0 ";
				}
			});
		},
		//---------------------------------------------------------------------------
		// fio.decodeAreaRoom() 部屋のデコードを行う
		// fio.encodeAreaRoom() 部屋のエンコードを行う
		//---------------------------------------------------------------------------
		decodeAreaRoom: function() {
			this.decodeAreaRoom_com(true);
		},
		encodeAreaRoom: function() {
			this.encodeAreaRoom_com(true);
		},
		decodeAreaRoom_com: function(isques) {
			this.readLine();
			this.rdata2Border(isques, this.getItemList(this.board.rows));

			this.board.roommgr.rebuild();
		},
		encodeAreaRoom_com: function(isques) {
			var bd = this.board;
			bd.roommgr.rebuild();

			var rooms = bd.roommgr.components;
			this.writeLine(rooms.length);
			var data = "";
			for (var c = 0; c < bd.cell.length; c++) {
				var roomid = rooms.indexOf(bd.cell[c].room);
				data += "" + (roomid >= 0 ? roomid : ".") + " ";
				if ((c + 1) % bd.cols === 0) {
					this.writeLine(data);
					data = "";
				}
			}
		},
		//---------------------------------------------------------------------------
		// fio.rdata2Border() 入力された配列から境界線を入力する
		//---------------------------------------------------------------------------
		rdata2Border: function(isques, rdata) {
			var bd = this.board;
			for (var id = 0; id < bd.border.length; id++) {
				var border = bd.border[id],
					cell1 = border.sidecell[0],
					cell2 = border.sidecell[1];
				var isdiff =
					!cell1.isnull && !cell2.isnull && rdata[cell1.id] !== rdata[cell2.id];
				border[isques ? "ques" : "qans"] = isdiff ? 1 : 0;
			}
		},
		//---------------------------------------------------------------------------
		// fio.decodeCellQnum51() [＼]のデコードを行う
		// fio.encodeCellQnum51() [＼]のエンコードを行う
		//---------------------------------------------------------------------------
		decodeCellQnum51: function() {
			var bd = this.board;
			bd.disableInfo(); /* mv.set51cell()用 */
			this.decodeCellExCell(function(obj, ca) {
				if (ca === ".") {
					return;
				} else if (obj.group === "excell") {
					if (obj.bx !== -1 && obj.by === -1) {
						obj.qnum2 = +ca;
					} else if (obj.bx === -1 && obj.by !== -1) {
						obj.qnum = +ca;
					}
				} else if (obj.group === "cell") {
					var inp = ca.split(",");
					obj.set51cell();
					obj.qnum = +inp[0];
					obj.qnum2 = +inp[1];
				}
			});
			bd.enableInfo(); /* mv.set51cell()用 */
		},
		encodeCellQnum51: function() {
			this.encodeCellExCell(function(obj) {
				if (obj.group === "excell") {
					if (obj.bx === -1 && obj.by === -1) {
						return "0 ";
					}
					return (obj.by === -1 ? obj.qnum2 : obj.qnum) + " ";
				} else if (obj.group === "cell") {
					if (obj.ques === 51) {
						return obj.qnum + "," + obj.qnum2 + " ";
					}
				}
				return ". ";
			});
		},

		//---------------------------------------------------------------------------
		// fio.decodeDotFile() Decodes Cross/Cell/Border values and empty cells (ques===7)
		// fio.encodeDotFile() Encodes Cross/Cell/Border values and empty cells (ques===7)
		//---------------------------------------------------------------------------
		decodeDotFile: function() {
			var bd = this.board,
				s = 0,
				data = "";
			for (var i = 0, rows = 2 * bd.rows - 1; i < rows; i++) {
				data += this.readLine();
			}
			bd.disableInfo();
			for (var s = 0; s < data.length; ++s) {
				var dot = bd.dots[s],
					ca = data.charAt(s),
					num = +ca;
				if (num >= 1 && num <= 9) {
					dot.setDot(num);
				} else if (ca === "-") {
					dot.setDot(-2);
				} else if (ca === "X") {
					dot.piece.ques = 7;
				}
			}
			bd.enableInfo();
		},
		encodeDotFile: function() {
			var bd = this.board,
				s = 0;
			for (var by = 1; by <= 2 * bd.rows - 1; by++) {
				var data = "";
				for (var bx = 1; bx <= 2 * bd.cols - 1; bx++) {
					var dot = bd.dots[s];
					if (dot.getDot() >= 1 && dot.getDot() <= 9) {
						data += dot.getDot();
					} else if (dot.piece.ques === 7) {
						data += "X";
					} else if (dot.getDot() === -2) {
						data += "-";
					} else {
						data += ".";
					}
					s++;
				}
				this.writeLine(data);
			}
		},

		//---------------------------------------------------------------------------
		// fio.decodeQnums() Decode cells with qnums list
		// fio.encodeQnums() Encode cells with qnums list
		//---------------------------------------------------------------------------
		decodeQnums: function() {
			this.decodeCell(function(cell, ca) {
				if (ca !== ".") {
					cell.qnums = [];
					var array = ca.split(/,/);
					for (var i = 0; i < array.length; i++) {
						cell.qnums.push(array[i] !== "-" ? +array[i] : -2);
					}
				}
			});
		},
		encodeQnums: function() {
			this.encodeCell(function(cell) {
				if (cell.qnums.length > 0) {
					var array = [];
					for (var i = 0; i < cell.qnums.length; i++) {
						array.push(cell.qnums[i] >= 0 ? "" + cell.qnums[i] : "-");
					}
					return array.join(",") + " ";
				} else {
					return ". ";
				}
			});
		},

		//---------------------------------------------------------------------------
		// fio.decodePieceBank() Decode piece bank preset/custom
		// fio.encodePieceBank() Encode piece bank preset/custom
		//---------------------------------------------------------------------------
		decodePieceBank: function() {
			var bank = this.board.bank;
			var head = this.readLine();
			if (isNaN(head)) {
				for (var i = 0; i < bank.presets.length; i++) {
					if (bank.presets[i].shortkey === head) {
						bank.initialize(bank.presets[i].constant);
						break;
					}
				}
			} else {
				var pieces = [];
				for (var i = 0; i < +head; i++) {
					pieces.push(this.readLine());
				}

				bank.initialize(pieces);
			}
		},
		encodePieceBank: function() {
			var bank = this.board.bank;

			var pieces = bank.pieces.map(function(p) {
				return p.serialize();
			});

			for (var i = 0; i < bank.presets.length; i++) {
				if (!bank.presets[i].constant) {
					continue;
				}
				if (this.puzzle.pzpr.util.sameArray(bank.presets[i].constant, pieces)) {
					this.writeLine(bank.presets[i].shortkey);
					return;
				}
			}

			this.writeLine("" + pieces.length);
			for (var i = 0; i < pieces.length; i++) {
				this.writeLine(pieces[i]);
			}
		},
		decodePieceBankQcmp: function() {
			var nums = (this.readLine() || "").split(" ");
			var count = Math.min(nums.length, this.board.bank.pieces.length);
			for (var i = 0; i < count; i++) {
				this.board.bank.pieces[i].qcmp = +nums[i];
			}
		},
		encodePieceBankQcmp: function() {
			var data = this.board.bank.pieces
				.map(function(piece) {
					return piece.qcmp + " ";
				})
				.join("");
			this.writeLine(data);
		},

		//---------------------------------------------------------------------------
		// fio.decodeCellQnum_kanpen() pencilbox用問題数字のデコードを行う
		// fio.encodeCellQnum_kanpen() pencilbox用問題数字のエンコードを行う
		//---------------------------------------------------------------------------
		decodeCellQnum_kanpen: function() {
			this.decodeCell(function(cell, ca) {
				if (ca !== ".") {
					cell.qnum = +ca;
				}
			});
		},
		encodeCellQnum_kanpen: function() {
			this.encodeCell(function(cell) {
				return cell.qnum >= 0 ? cell.qnum + " " : ". ";
			});
		},
		//---------------------------------------------------------------------------
		// fio.decodeCellAnum_kanpen() pencilbox用回答数字のデコードを行う
		// fio.encodeCellAnum_kanpen() pencilbox用回答数字のエンコードを行う
		//---------------------------------------------------------------------------
		decodeCellAnum_kanpen: function() {
			this.decodeCell(function(cell, ca) {
				if (ca !== "." && ca !== "0") {
					cell.anum = +ca;
				}
			});
		},
		encodeCellAnum_kanpen: function() {
			this.encodeCell(function(cell) {
				if (cell.qnum !== -1) {
					return ". ";
				} else if (cell.anum === -1) {
					return "0 ";
				} else {
					return cell.anum + " ";
				}
			});
		},
		//---------------------------------------------------------------------------
		// fio.decodeCellQnumAns_kanpen() pencilbox用問題数字＋黒マス白マスのデコードを行う
		// fio.encodeCellQnumAns_kanpen() pencilbox用問題数字＋黒マス白マスのエンコードを行う
		//---------------------------------------------------------------------------
		decodeCellQnumAns_kanpen: function() {
			this.decodeCell(function(cell, ca) {
				if (ca === "#") {
					cell.qans = 1;
				} else if (ca === "+") {
					cell.qsub = 1;
				} else if (ca === "?") {
					cell.qnum = -2;
				} else if (ca !== ".") {
					cell.qnum = +ca;
				}
			});
		},
		encodeCellQnumAns_kanpen: function() {
			this.encodeCell(function(cell) {
				if (cell.qnum >= 0) {
					return cell.qnum + " ";
				} else if (cell.qnum === -2) {
					return "? ";
				} else if (cell.qans === 1) {
					return "# ";
				} else if (cell.qsub === 1) {
					return "+ ";
				} else {
					return ". ";
				}
			});
		},

		//---------------------------------------------------------------------------
		// fio.decodeCellQnum_XMLBoard() pencilbox XML用問題用数字のデコードを行う
		// fio.encodeCellQnum_XMLBoard() pencilbox XML用問題用数字のエンコードを行う
		//---------------------------------------------------------------------------
		UNDECIDED_NUM_XML: -1,
		decodeCellQnum_XMLBoard: function() {
			var minnum = this.board.cell[0].getminnum() > 0 ? 1 : 0;
			var undecnum = this.UNDECIDED_NUM_XML;
			this.decodeCellXMLBoard(function(cell, val) {
				if (val === undecnum) {
					cell.qnum = -2;
				} else if (val >= minnum) {
					cell.qnum = val;
				}
			});
		},
		encodeCellQnum_XMLBoard: function() {
			var minnum = this.board.cell[0].getminnum() > 0 ? 1 : 0;
			var undecnum = this.UNDECIDED_NUM_XML;
			this.encodeCellXMLBoard(function(cell) {
				var val = null;
				if (cell.qnum === -2) {
					val = undecnum;
				} else if (cell.qnum >= minnum) {
					val = cell.qnum;
				}
				return val;
			});
		},

		//---------------------------------------------------------------------------
		// fio.decodeCellQnum_XMLBoard() pencilbox XML用問題用数字(browタイプ)のデコードを行う
		// fio.encodeCellQnum_XMLBoard() pencilbox XML用問題用数字(browタイプ)のエンコードを行う
		//---------------------------------------------------------------------------
		decodeCellQnum_XMLBoard_Brow: function() {
			var undecnum = this.UNDECIDED_NUM_XML;
			this.decodeCellXMLBrow(function(cell, name) {
				if (name === "n" + undecnum) {
					cell.qnum = -2;
				} else if (name !== "s") {
					cell.qnum = +name.substr(1);
				}
			});
		},
		encodeCellQnum_XMLBoard_Brow: function() {
			var undecnum = this.UNDECIDED_NUM_XML;
			this.encodeCellXMLBrow(function(cell) {
				if (cell.qnum === -2) {
					return "n" + undecnum;
				} else if (cell.qnum >= 0) {
					return "n" + cell.qnum;
				}
				return "s";
			});
		},

		//---------------------------------------------------------------------------
		// fio.decodeCellAnum_XMLBoard() pencilbox XML用回答用数字のデコードを行う
		// fio.encodeCellAnum_XMLBoard() pencilbox XML用回答用数字のエンコードを行う
		//---------------------------------------------------------------------------
		decodeCellAnum_XMLAnswer: function() {
			this.decodeCellXMLArow(function(cell, name) {
				if (name === "n0") {
					cell.anum = -1;
				} else if (name !== "s") {
					cell.anum = +name.substr(1);
				}
			});
		},
		encodeCellAnum_XMLAnswer: function() {
			this.encodeCellXMLArow(function(cell) {
				if (cell.anum > 0) {
					return "n" + cell.anum;
				} else if (cell.anum === -1) {
					return "n0";
				}
				return "s";
			});
		},

		//---------------------------------------------------------------------------
		// fio.decodeAreaRoom_XMLBoard() pencilbox XML用問題用不定形部屋のデコードを行う
		// fio.encodeAreaRoom_XMLBoard() pencilbox XML用問題用不定形部屋のエンコードを行う
		//---------------------------------------------------------------------------
		decodeAreaRoom_XMLBoard: function() {
			var rdata = [];
			this.decodeCellXMLBrow(function(cell, name) {
				rdata.push(+name.substr(1));
			});
			this.rdata2Border(true, rdata);
			this.board.roommgr.rebuild();
		},
		encodeAreaRoom_XMLBoard: function() {
			var bd = this.board;
			bd.roommgr.rebuild();
			var rooms = bd.roommgr.components;
			this.xmldoc
				.querySelector("board")
				.appendChild(this.createXMLNode("areas", { N: rooms.length }));
			this.encodeCellXMLBrow(function(cell) {
				var roomid = rooms.indexOf(cell.room);
				return "n" + (roomid > 0 ? roomid : -1);
			});
		},

		//---------------------------------------------------------------------------
		// fio.decodeCellAns_XMLAnswer() pencilbox XML用黒マスのデコードを行う
		// fio.encodeCellAns_XMLAnswer() pencilbox XML用黒マスのエンコードを行う
		//---------------------------------------------------------------------------
		decodeCellAns_XMLAnswer: function() {
			this.decodeCellXMLArow(function(cell, name) {
				if (name === "w") {
					cell.qans = 1;
				} else if (name === "s") {
					cell.qsub = 1;
				}
			});
		},
		encodeCellAns_XMLAnswer: function() {
			this.encodeCellXMLArow(function(cell) {
				if (cell.qans === 1) {
					return "w";
				} else if (cell.qsub === 1) {
					return "s";
				}
				return "u";
			});
		},

		//---------------------------------------------------------------------------
		// fio.decodeBorderLine_XMLAnswer() pencilbox XML用Lineのデコードを行う
		// fio.encodeBorderLine_XMLAnswer() pencilbox XML用Lineのエンコードを行う
		//---------------------------------------------------------------------------
		decodeBorderLine_XMLAnswer: function() {
			this.decodeCellXMLArow(function(cell, name) {
				var val = 0;
				var bdh = cell.adjborder.bottom,
					bdv = cell.adjborder.right;
				if (name.charAt(0) === "n") {
					val = +name.substr(1);
				} else {
					if (name.match(/h/)) {
						val += 1;
					}
					if (name.match(/v/)) {
						val += 2;
					}
				}
				if (val & 1) {
					bdh.line = 1;
				}
				if (val & 2) {
					bdv.line = 1;
				}
				if (val & 4) {
					bdh.qsub = 2;
				}
				if (val & 8) {
					bdv.qsub = 2;
				}
			});
		},
		encodeBorderLine_XMLAnswer: function() {
			this.encodeCellXMLArow(function(cell) {
				var val = 0,
					nodename = "";
				var bdh = cell.adjborder.bottom,
					bdv = cell.adjborder.right;
				if (bdh.line === 1) {
					val += 1;
				}
				if (bdv.line === 1) {
					val += 2;
				}
				if (bdh.qsub === 2) {
					val += 4;
				}
				if (bdv.qsub === 2) {
					val += 8;
				}

				if (val === 0) {
					nodename = "s";
				} else if (val === 1) {
					nodename = "h";
				} else if (val === 2) {
					nodename = "v";
				} else if (val === 3) {
					nodename = "hv";
				} else {
					nodename = "n" + val;
				}
				return nodename;
			});
		}
	}
});

// Operation.js

pzpr.classmgr.makeCommon({
	//---------------------------------------------------------
	"StartGoalOperation:Operation": {
		setData: function(prop, x1, y1, x2, y2) {
			this.property = prop;
			this.bx1 = x1;
			this.by1 = y1;
			this.bx2 = x2;
			this.by2 = y2;
		},
		decode: function(strs) {
			if (strs[0] !== "PS" && strs[0] !== "PG") {
				return false;
			}
			this.property = strs[0] === "PS" ? "start" : "goal";
			this.bx1 = +strs[1];
			this.by1 = +strs[2];
			this.bx2 = +strs[3];
			this.by2 = +strs[4];
			return true;
		},
		toString: function() {
			return [
				this.property === "start" ? "PS" : "PG",
				this.bx1,
				this.by1,
				this.bx2,
				this.by2
			].join(",");
		},

		isModify: function(lastope) {
			// 1回の入力でstartpos, goalposが連続して更新されているなら前回の更新のみ
			if (
				this.manager.changeflag &&
				lastope.bx2 === this.bx1 &&
				lastope.by2 === this.by1 &&
				lastope.property === this.property
			) {
				lastope.bx2 = this.bx2;
				lastope.by2 = this.by2;
				return true;
			}
			return false;
		},

		undo: function() {
			this.exec(this.bx1, this.by1);
		},
		redo: function() {
			this.exec(this.bx2, this.by2);
		},
		exec: function(bx, by) {
			var bd = this.board,
				cell = bd.getc(bx, by);
			if (this.property === "start") {
				bd.startpos.set(cell);
			} else if (this.property === "goal") {
				bd.goalpos.set(cell);
			}
		}
	}
});

// Piece.js

pzpr.classmgr.makeCommon({
	//---------------------------------------------------------
	"StartGoalAddress:Address": {
		type: "",
		partner: null,

		init: function(bx, by) {
			this.bx = bx;
			this.by = by;
			return this;
		},

		input: function(cell) {
			if (!this.partner || !this.partner.equals(cell)) {
				if (!this.equals(cell)) {
					this.set(cell);
				} else {
					this.draw();
				}
			} else {
				this.board.exchangestartgoal();
			}
		},
		set: function(pos, record) {
			var pos0 = this.getaddr();
			if (record !== false) {
				this.addOpe(pos.bx, pos.by);
			}

			this.bx = pos.bx;
			this.by = pos.by;

			pos0.draw();
			this.draw();
		},

		addOpe: function(bx, by) {
			if (this.bx === bx && this.by === by) {
				return;
			}
			this.puzzle.opemgr.add(
				new this.klass.StartGoalOperation(this.type, this.bx, this.by, bx, by)
			);
		}
	},
	"StartAddress:StartGoalAddress": {
		type: "start"
	},
	"GoalAddress:StartGoalAddress": {
		type: "goal"
	}
});

// outro.js

})();

//# sourceMappingURL=pzpr.concat.js.map