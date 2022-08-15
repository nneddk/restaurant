(()=>{"use strict";var n={996:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"\n.contact{\n    height: 100%;\n    width: 90%;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap:12px;\n}\n.about-us{\n    font-family: 'Silkscreen', cursive;\n    font-size: 6rem;\n    color:white;\n    transition: all 0.5s;\n}\n.description{\n    font-size: 3rem;\n    color:white;\n}\n\n.about-us:hover{\n    text-shadow: 12px 12px black;\n}",""]);const s=i},309:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Silkscreen:wght@700&display=swap);"]),i.push([n.id,".home{\n    height: 90%;\n    width: 90%;\n    display: flex;\n    flex-direction: column;\n}\n\n.home-intro{\n    height: 80%;\n    display:flex;\n    align-items: center;\n    justify-content: center;\n\n    font-family: 'Silkscreen', cursive;\n    color:white;\n    font-size: 6.5rem;\n    overflow-wrap: break-word;\n\n    transition: all 0.5s ease-in-out;\n}\n.schedule{\n    height:20%;\n    display:flex;\n    align-items: center;\n    justify-content: center;\n\n    font-family: 'Silkscreen', cursive;\n    color:white;\n    font-size: 4rem;\n\n    transition: all 0.5s ease-in-out;\n}\n\n.home-intro:hover, .schedule:hover{\n    text-shadow: 12px 12px black;\n}\n",""]);const s=i},771:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap);"]),i.push([n.id,"*{\n    font-family: 'Roboto Condensed', sans-serif;\n    font-size: 15px;\n}\nhtml, body{\n    margin: 0;\n}\n.header{\n    color: white;\n    background-color: black;\n    font-size: 3rem;\n    display: flex;\n    justify-content: space-between;\n    padding-left: 15px;\n    align-items: center;\n    height:7vh;\n}\n.header-buttons-holder{\n    display: flex;\n    align-items: center;\n    height:100%;\n}\n\n.header-button{\n    background-color:black;\n    color:white;\n    font-size: 1.5rem;\n    width:200px;\n    height:100%;\n    border:none;\n    transition: all 0.3s;\n}\n.header-button:hover{\n    background-color: white; \n    color:black;\n}\n\n.content{\n    height: 90vh;\n    background-image: linear-gradient(white, blue);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.footer{\n    height: 3vh;\n    background-color: black;\n    color:white;\n    display:flex;\n    padding-left: 15px;\n    align-items: center;\n}",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=o.base?c[0]+o.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var m=r(h,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=o(n,r),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),s=t(565),c=t.n(s),d=t(216),l=t.n(d),u=t(589),p=t.n(u),h=t(771),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),e()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;var f=t(309),v={};function b(){const n=document.createElement("div");n.classList.add("home");const e=document.createElement("div");e.classList.add("home-intro"),e.textContent="Welcome to restaurant!",n.appendChild(e);const t=document.createElement("div");return t.classList.add("schedule"),t.textContent="10:00 am - 10:00 pm",n.appendChild(t),n}v.styleTagTransform=p(),v.setAttributes=c(),v.insert=i().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=l(),e()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;var y=t(996),g={};function x(n){const e=document.getElementById("content");switch(e.hasChildNodes()&&e.removeChild(e.lastChild),n){case 1:case 2:e.appendChild(b());break;case 3:e.appendChild(function(){const n=document.createElement("div");n.classList.add("contact");const e=document.createElement("div");e.classList.add("about-us"),e.textContent="Contact us";const t=document.createElement("div");t.classList.add("description"),t.textContent="555-555-5555";const o=document.createElement("div");return o.classList.add("description"),o.textContent="restaurant@email.com",n.appendChild(e),n.appendChild(t),n.appendChild(o),n}());break;default:alert("Error! page not found!")}}g.styleTagTransform=p(),g.setAttributes=c(),g.insert=i().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=l(),e()(y.Z,g),y.Z&&y.Z.locals&&y.Z.locals,document.body.appendChild(function(){const n=document.createElement("div");n.textContent="restaurant",n.classList.add("header");const e=document.createElement("div");e.classList.add("header-buttons-holder");const t=document.createElement("button");t.textContent="home",t.classList.add("header-button"),t.onclick=function(){x(1)};const o=document.createElement("button");o.textContent="menu",o.classList.add("header-button"),o.onclick=function(){x(2)};const r=document.createElement("button");return r.textContent="contact us",r.classList.add("header-button"),r.onclick=function(){x(3)},e.appendChild(t),e.appendChild(o),e.appendChild(r),n.appendChild(e),n}()),document.body.appendChild(function(){const n=document.createElement("div");return n.setAttribute("id","content"),n.classList.add("content"),n.appendChild(b()),n}()),document.body.appendChild(function(){const n=document.createElement("div");return n.textContent="nneddk",n.classList.add("footer"),n}())})()})();