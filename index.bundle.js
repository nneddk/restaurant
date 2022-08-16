(()=>{"use strict";var n={996:(n,t,e)=>{e.d(t,{Z:()=>s});var a=e(81),i=e.n(a),o=e(645),r=e.n(o)()(i());r.push([n.id,"\n.contact{\n    height: 100%;\n    width: 90%;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap:12px;\n}\n.about-us{\n    font-family: 'Silkscreen', cursive;\n    font-size: 6rem;\n    color:white;\n    transition: all 0.5s;\n}\n.description{\n    font-size: 3rem;\n    color:white;\n}\n\n.about-us:hover{\n    text-shadow: 12px 12px black;\n}",""]);const s=r},309:(n,t,e)=>{e.d(t,{Z:()=>s});var a=e(81),i=e.n(a),o=e(645),r=e.n(o)()(i());r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Silkscreen:wght@700&display=swap);"]),r.push([n.id,".home{\n    height: 95%;\n    width: 95%;\n    display: flex;\n}\n.home-a{\n    width: 70%;\n    height: 100%;\n}\n.home-b{\n    width: 30%;\n    height: 100%;\n}\n.home-intro{\n    height: 80%;\n    width: 100%;\n    display:flex;\n    align-items: center;\n\n    font-family: 'Silkscreen', cursive;\n    color:white;\n    font-size: 7rem;\n    overflow-wrap: break-word;\n\n    transition: all 0.5s ease-in-out;\n}\n.schedule{\n    height:20%;\n    width: 100%;\n    display:flex;\n    align-items: center;\n\n    font-family: 'Silkscreen', cursive;\n    color:white;\n    font-size: 4rem;\n\n    transition: all 0.5s ease-in-out;\n}\n\n.home-intro:hover, .schedule:hover{\n    text-shadow: 12px 12px black;\n}\n\n\n/** bottom would be animation for the shapes */\n\n.shapes {\n\tz-index: 1;\n}\n\n.shapes li {\n    top: 10vh;\n    position:absolute;\n\tlist-style: none;\n\twidth: 20px;\n\theight: 20px;\n\tbackground: white;\n    border: white;\n\tanimation: animate 25s linear infinite;\n\tbottom: calc(-150px - 40vh);\n}\n\n\n.shapes li:nth-child(1) {\n\twidth: 100px;\n\theight: 100px;\n\tanimation-delay: 0s;\n\tanimation-duration: 12s;\n\tborder-radius: 50%;\n}\n\n.shapes li:nth-child(2) {\n    right: 10%;\n\twidth: 120px;\n\theight: 120px;\n\tanimation-delay: 0s;\n\tanimation-duration: 27s;\n\tborder-radius: 50%;\n}\n\n.shapes li:nth-child(3) {\n    right: 15%;\n\twidth: 130px;\n\theight: 130px;\n\tanimation-delay: 0s;\n\tanimation-duration: 15s;\n}\n\n.shapes li:nth-child(4) {\n    right: 20%;\n\twidth: 110px;\n\theight: 110px;\n\tanimation-delay: 0s;\n\tanimation-duration: 6s;\n\tborder-radius: 50%;\n}\n\n.shapes li:nth-child(5) {\n    right: 25%;\n\twidth: 100px;\n\theight: 100px;\n\tanimation-delay: 0s;\n\tanimation-duration: 30s;\n}\n\n\n.shapes li:nth-child(6) {\n    right: 10%;\n\twidth: 90px;\n\theight: 90px;\n\tanimation-delay: 0s;\n\tanimation-duration: 18s;\n\tborder-radius: 50%;\n}\n\n.shapes li:nth-child(7) {\n    right: 5%;\n\twidth: 100px;\n\theight: 100px;\n\tanimation-delay: 0s;\n\tanimation-duration: 33s;\n\n}\n\n.shapes li:nth-child(8) {\n\twidth: 80px;\n\theight: 80px;\n\tanimation-delay: 0s;\n\tanimation-duration: 21s;\n\tborder-radius: 50%;\n}\n\n.shapes li:nth-child(9) {\n    right: 15%;\n\twidth: 100px;\n\theight: 100px;\n\tanimation-delay: 0s;\n\tanimation-duration: 12s;\n\tborder-radius: 50%;\n}\n\n.shapes li:nth-child(10) {\n    right: 20%;\n\twidth: 120px;\n\theight: 120px;\n\tanimation-delay: 0s;\n\tanimation-duration: 9s;\n}\n\n@keyframes animate {\n\t0% {\n\t\ttransform: translateY(0) rotate(0deg);\n\t\topacity: 0;\n\t}\n\t50% {\n\t\ttransform: translateY(50vh) rotate(360deg);\n\t\topacity: 1;\n\t}\n\t100% {\n\t\ttransform: translateY(70vh) rotate(720deg);\n\t\topacity: 0;\n\t}\n}\n",""]);const s=r},771:(n,t,e)=>{e.d(t,{Z:()=>s});var a=e(81),i=e.n(a),o=e(645),r=e.n(o)()(i());r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap);"]),r.push([n.id,"*{\n    font-family: 'Roboto Condensed', sans-serif;\n    font-size: 15px;\n}\nhtml, body{\n    margin: 0;\n}\n.header{\n    color: white;\n    background-color: black;\n    font-size: 3rem;\n    display: flex;\n    justify-content: space-between;\n    padding-left: 15px;\n    align-items: center;\n    height:7vh;\n}\n.header-buttons-holder{\n    display: flex;\n    align-items: center;\n    height:100%;\n}\n\n.header-button{\n    background-color:black;\n    color:white;\n    font-size: 1.5rem;\n    width:200px;\n    height:100%;\n    border:none;\n    transition: all 0.3s;\n}\n.header-button:hover{\n    background-color: yellow; \n    color:black;\n}\n\n.content{\n    height: 90vh;\n    background-image: linear-gradient(yellow, Blue);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.footer{\n    height: 3vh;\n    background-color: black;\n    color:white;\n    display:flex;\n    padding-left: 15px;\n    align-items: center;\n}",""]);const s=r},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",a=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),a&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),a&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,a,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(a)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(r[d]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);a&&r[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,a=0;a<t.length;a++)if(t[a].identifier===n){e=a;break}return e}function a(n,a){for(var o={},r=[],s=0;s<n.length;s++){var d=n[s],c=a.base?d[0]+a.base:d[0],l=o[c]||0,h="".concat(c," ").concat(l);o[c]=l+1;var u=e(h),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var m=i(p,a);a.byIndex=s,t.splice(s,0,{identifier:h,updater:m,references:1})}r.push(h)}return r}function i(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,i){var o=a(n=n||[],i=i||{});return function(n){n=n||[];for(var r=0;r<o.length;r++){var s=e(o[r]);t[s].references--}for(var d=a(n,i),c=0;c<o.length;c++){var l=e(o[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=d}}},569:n=>{var t={};n.exports=function(n,e){var a=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var a="";e.supports&&(a+="@supports (".concat(e.supports,") {")),e.media&&(a+="@media ".concat(e.media," {"));var i=void 0!==e.layer;i&&(a+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),a+=e.css,i&&(a+="}"),e.media&&(a+="}"),e.supports&&(a+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={id:a,exports:{}};return n[a](o,o.exports,e),o.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var a in t)e.o(t,a)&&!e.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:t[a]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{var n=e(379),t=e.n(n),a=e(795),i=e.n(a),o=e(569),r=e.n(o),s=e(565),d=e.n(s),c=e(216),l=e.n(c),h=e(589),u=e.n(h),p=e(771),m={};m.styleTagTransform=u(),m.setAttributes=d(),m.insert=r().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=l(),t()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;var f=e(309),v={};function g(){const n=document.createElement("div");n.classList.add("home");const t=document.createElement("div");t.classList.add("home-a"),n.appendChild(t);const e=document.createElement("div");e.classList.add("home-intro"),e.textContent="Welcome to restaurant!",t.appendChild(e);const a=document.createElement("div");a.classList.add("schedule"),a.textContent="10:00 am - 10:00 pm",t.appendChild(a);const i=document.createElement("div");i.classList.add("home-b"),n.appendChild(i);const o=document.createElement("ul");o.classList.add("shapes");for(let n=0;n<10;n++){const n=document.createElement("li");o.appendChild(n)}return i.appendChild(o),n}v.styleTagTransform=u(),v.setAttributes=d(),v.insert=r().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=l(),t()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;var y=e(996),b={};function x(n){const t=document.getElementById("content");switch(t.hasChildNodes()&&t.removeChild(t.lastChild),n){case 1:case 2:t.appendChild(g());break;case 3:t.appendChild(function(){const n=document.createElement("div");n.classList.add("contact");const t=document.createElement("div");t.classList.add("about-us"),t.textContent="Contact us";const e=document.createElement("div");e.classList.add("description"),e.textContent="555-555-5555";const a=document.createElement("div");return a.classList.add("description"),a.textContent="restaurant@email.com",n.appendChild(t),n.appendChild(e),n.appendChild(a),n}());break;default:alert("Error! page not found!")}}b.styleTagTransform=u(),b.setAttributes=d(),b.insert=r().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=l(),t()(y.Z,b),y.Z&&y.Z.locals&&y.Z.locals,document.body.appendChild(function(){const n=document.createElement("div");n.textContent="restaurant",n.classList.add("header");const t=document.createElement("div");t.classList.add("header-buttons-holder");const e=document.createElement("button");e.textContent="home",e.classList.add("header-button"),e.onclick=function(){x(1)};const a=document.createElement("button");a.textContent="menu",a.classList.add("header-button"),a.onclick=function(){x(2)};const i=document.createElement("button");return i.textContent="contact us",i.classList.add("header-button"),i.onclick=function(){x(3)},t.appendChild(e),t.appendChild(a),t.appendChild(i),n.appendChild(t),n}()),document.body.appendChild(function(){const n=document.createElement("div");return n.setAttribute("id","content"),n.classList.add("content"),n.appendChild(g()),n}()),document.body.appendChild(function(){const n=document.createElement("div");return n.textContent="nneddk",n.classList.add("footer"),n}())})()})();