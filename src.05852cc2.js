parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"uxdv":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=function(){function e(i,n,s){var a=this;t(this,e),this.el=i;var o=300,h=300;this.el.style.zIndex=window.maxZIndex++,this.isGrabbed=!1,this.isInit=!1,this.grabOffset={x:0,y:0},this.el.dataset.width&&this.el.dataset.height&&(h=this.el.dataset.width,o=this.el.dataset.height),this.el.style.width=h+"px",this.el.style.height=o+"px";var d=this.el.getBoundingClientRect();this.posX=Math.random()*(window.innerWidth-d.width),this.posY=Math.random()*(window.innerHeight-d.height),this.setWindowPosition(),i.addEventListener("mousedown",function(t){return a.onMouseDown(t)})}return i(e,[{key:"onMouseDown",value:function(t){this.el.style.zIndex=window.maxZIndex++,this.isGrabbed=!0,this.el.classList.add("is-grabbed");var e=this.el.getBoundingClientRect();this.grabOffset={x:t.clientX-e.x,y:t.clientY-e.y}}},{key:"setWindowPosition",value:function(){var t=this.el.getBoundingClientRect();this.el.dataset.initX&&this.el.dataset.initY&&(this.posX=this.el.dataset.initX/100*(window.innerWidth-t.width),this.posY=this.el.dataset.initY/100*(window.innerHeight-t.height)),this.el.style.transform="translate3d(".concat(this.posX,"px, ").concat(this.posY,"px, 0)")}}]),e}();exports.default=n;
},{}],"H99C":[function(require,module,exports) {
"use strict";var e=n(require("./js/window"));function n(e){return e&&e.__esModule?e:{default:e}}var t=document.querySelectorAll(".windows li"),o=[];window.maxZIndex=0,t.forEach(function(n){o.push(new e.default(n))}),window.addEventListener("mouseup",function(){o.forEach(function(e){e.isGrabbed=!1,e.el.classList.remove("is-grabbed")})}),window.addEventListener("mousemove",function(e){o.forEach(function(n){n.isGrabbed&&(n.el.style.transform="translate3d(".concat(e.clientX-n.grabOffset.x,"px, ").concat(e.clientY-n.grabOffset.y,"px, 0)"))})}),window.addEventListener("resize",function(){o.forEach(function(e){e.setWindowPosition()})});
},{"./js/window":"uxdv"}]},{},["H99C"], null)
//# sourceMappingURL=/csb-ct04i/src.05852cc2.js.map