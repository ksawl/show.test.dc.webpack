!function(e){function t(t){for(var r,s,i=t[0],c=t[1],l=t[2],f=0,p=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(u&&u(t);p.length;)p.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],r=!0,i=1;i<o.length;i++){var c=o[i];0!==n[c]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=o[0]))}return e}var r={},n={0:0},a=[];function s(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=r,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(o,r,function(t){return e[t]}.bind(null,r));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;a.push([121,1]),o()}({121:function(e,t,o){o(122),e.exports=o(309)},308:function(e,t,o){},309:function(e,t,o){"use strict";o.r(t);var r=o(311);document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("app"),t=e.querySelectorAll(".parallax"),o=[].map.call(t,(function(e){return{item:e,speedX:e.getAttribute("data-speed-x"),speedY:e.getAttribute("data-speed-y")}}));e.addEventListener("mousemove",(function(t){var n=t.screenX/2-.5*e.clientWidth,a=t.screenY/2-.5*e.clientHeight;o.forEach((function(e){r.d.set(e.item,{x:8e-4*(e.item.offsetLeft+n*e.speedX),y:8e-4*(e.item.offsetTop+a*e.speedY)})}))}))})),window.addEventListener("resize",(function(){document.querySelectorAll("[style]").forEach((function(e){e.classList.contains("preload")||e.removeAttribute("style")}))})),window.addEventListener("load",(function(e){(new r.c).delay(1).fromTo(".preload .inner",1.5,{opacity:1,scale:1},{opacity:0,rotate:360,scale:0},"start").fromTo(".preload",.5,{opacity:1},{opacity:0},"start+=0.8").add("startPage").from(".car",.8,{left:"-100%",opacity:.5},"start+=0.5").from(".slogan",1,{left:"-100%"},"start+=1.2").from(".rider",.5,{left:"-100%"},"start+=1").from(".dictor",.5,{right:"-100%"},"start+=1").from("nav .logo",.5,{left:"-100%"},"start+=2").from("nav .btn",.5,{right:"-100%"},"start+=2").fromTo(".make-bet .btn",.5,{scale:0},{scale:1,ease:r.a.easeOut,onComplete:function(){document.querySelector(".preload").style.display="none"}},"start+=2.5").fromTo(".make-bet .bonus",.5,{opacity:0,y:-40},{opacity:1,y:0,ease:r.b.easeInOut},"start+=3.5").fromTo(".make-bet .rules",.5,{opacity:0,y:-40},{opacity:1,y:0,ease:r.b.easeInOut},"start+=4").fromTo(".look .btn",.5,{scale:0},{scale:1,ease:r.a.easeOut},"start+=2.8").fromTo(".look .bonus",.5,{opacity:0,y:-40},{opacity:1,y:0,ease:r.b.easeInOut},"start+=3.8").from("footer",.5,{opacity:0,bottom:"-100%"},"start+=3"),setInterval((function(){document.querySelector(".btn-yellow-big").classList.add("hover"),setTimeout((function(){document.querySelector(".btn-yellow-big").classList.remove("hover")}),1e3)}),1e4)}));o(308)}});