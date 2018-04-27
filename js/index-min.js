"use strict";var map;function initMap(){var e=new google.maps.Map(document.getElementById("map"),{zoom:17,center:{lat:48.933567,lng:21.907837}});new google.maps.Marker({position:{lat:48.933567,lng:21.907837},map:e})}document.addEventListener("DOMContentLoaded",function(){console.log("DOM fully loaded and parsed");var e="info",t="apartmany",n="humenne";document.getElementById("actualEmail").innerText=e+"@"+t+n+".sk",document.getElementById("emailLandingPage").innerText=e+"@"+t+n+".sk";var o=document.getElementById("myNav"),a=document.getElementById("loadingModal"),d=document.getElementById("uvodNav"),i=document.getElementById("cennikNav"),l=document.getElementById("galeriaNav"),c=document.getElementById("kontaktNav"),m=document.getElementById("arrowDown"),u=document.getElementById("apartmanyNav"),r=document.getElementById("uvod"),s=document.getElementById("cennik"),g=document.getElementById("galeria"),y=document.getElementById("kontakt"),f=document.getElementById("vybavenie"),p=(document.getElementById("galeriaContainer"),document.getElementById("morePhotosButton"),document.getElementById("galleryModal")),v=document.getElementById("crossCloseGalleryModal"),E=document.getElementById("actualPhoto"),h=document.getElementById("galleryNavLeft"),I=document.getElementById("galleryNavRight"),w=document.getElementById("countTotalPhotos"),B=document.getElementById("countActualPhoto"),k=document.getElementById("modalPhotoDescription"),T=(document.getElementById("footerContainer"),document.getElementById("actualYear")),M=(new Date).getFullYear();T.innerText=M;var L=!1;function x(){var e,t,n;window.innerWidth>414&&(e=void 0!==window.pageXOffset,t="CSS1Compat"===(document.compatMode||""),n=e?window.pageYOffset:t?document.documentElement.scrollTop:document.body.scrollTop,parseInt(n)>50?o.style.fontSize="18px":o.style.fontSize="20px")}if(i.addEventListener("click",function(){z(s.offsetTop-50,100,"easeInOutQuint")}),l.addEventListener("click",function(){z(g.offsetTop-50,100,"easeInOutQuint")}),c.addEventListener("click",function(){z(y.offsetTop-50,100,"easeInOutQuint")}),m.addEventListener("click",function(){z(r.offsetTop-50,100,"easeInOutQuint")}),d.addEventListener("click",function(){z(r.offsetTop-50,100,"easeInOutQuint")}),u.addEventListener("click",function(){z(f.offsetTop-50,100,"easeInOutQuint")}),window.addEventListener("scroll",x),x(),document.querySelectorAll("#map").length>0){if(document.querySelector("html").lang)document.querySelector("html").lang;else;var O=document.createElement("script");O.type="text/javascript",O.src="https://maps.googleapis.com/maps/api/js?callback=initMap&key=AIzaSyBZ_vJVQ2M7yxcgSjkT2HHuZAuldJ_Wr1g&language=en",document.getElementsByTagName("head")[0].appendChild(O)}var C=21,S=new Array;function A(e){var t=e.split("_");return parseInt(t[1])}function N(e){if(null===S[e].img){a.style.display="flex";var t=new Image;t.addEventListener("load",function(){a.style.display="none"}),t.src=S[Y].src,t.alt=S[Y].alt,t.className=S[Y].class,S[Y].img=t}k.innerText=S[Y].description,E.appendChild(S[Y].img)}function b(e){P(),L=!0,Q(),p.style.position="fixed",p.style.display="block",document.documentElement.style.overflowY="hidden",document.body.scroll="no",N(Y=e-1)}function P(){for(;E.firstChild;)E.removeChild(E.firstChild)}!function(){for(var e=0;e<C;e++){var t="";t=e+1==1?"Apartmány - budova":e+1<8?"Jednospálňový apartmán":e+1<14?"Viacspálňový apartmán":"Podkrovný apartmán",S.push({src:"images/photos/apartmany"+(e+1)+".jpg",alt:"fotka_apartmany_"+(e+1),class:"imageGallery",description:t,img:null})}}(),function(){for(var e=document.getElementsByClassName("photo"),t=0;t<e.length;t++)e[t].addEventListener("click",function(){var e=A(this.id);q=e,b(e)})}(),v.addEventListener("click",function(){P(),p.style.display="none",document.documentElement.style.overflowY="auto",document.body.scroll="yes",L=!1});var q=0;function Q(){B.innerText=q,w.innerText=C}var Y=0;function D(){P(),++Y>=S.length&&(Y=0),N(Y),q=Y+1,Q()}function F(){P(),--Y<0&&(Y=S.length-1),N(Y),q=Y+1,Q()}function z(e,t,n){var o=window.scrollY||document.documentElement.scrollTop,a=(e=e||0,t=t||2e3,n=n||"easeOutSine",0),d=Math.max(.1,Math.min(Math.abs(o-e)/t,.8)),i={easeOutSine:function(e){return Math.sin(e*(Math.PI/2))},easeInOutSine:function(e){return-.5*(Math.cos(Math.PI*e)-1)},easeInOutQuint:function(e){return(e/=.5)<1?.5*Math.pow(e,5):.5*(Math.pow(e-2,5)+2)}};!function t(){var l=(a+=1/60)/d,c=i[n](l);l<1?(requestAnimFrame(t),window.scrollTo(0,o+(e-o)*c)):window.scrollTo(0,e)}()}I.addEventListener("click",D),h.addEventListener("click",F),window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};var _={x:-1,y:-1};p.addEventListener("touchstart",function(e){L&&(_.x=e.changedTouches[0].clientX,_.y=e.changedTouches[0].clientY)}),p.addEventListener("touchmove",function(e){e.preventDefault()}),p.addEventListener("touchend",function(e){if(L){var t=_.x-e.changedTouches[0].clientX,n=Math.abs(_.y-e.changedTouches[0].clientY);t>100&&n<60&&D(),t<-100&&n<60&&F(),_.x=-1,_.y=-1}})});