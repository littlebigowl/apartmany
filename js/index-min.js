"use strict";var map;function initMap(){var e=new google.maps.Map(document.getElementById("map"),{zoom:17,center:{lat:48.933567,lng:21.907837}});new google.maps.Marker({position:{lat:48.933567,lng:21.907837},map:e})}document.addEventListener("DOMContentLoaded",function(){console.log("DOM fully loaded and parsed");document.getElementById("actualEmail").innerText="info@apartmanyhumenne.sk";var e=document.getElementById("uvodNav"),t=document.getElementById("cennikNav"),n=document.getElementById("galeriaNav"),o=document.getElementById("kontaktNav"),l=document.getElementById("arrowDown"),a=document.getElementById("logo"),d=document.getElementById("uvod"),c=document.getElementById("cennik"),i=document.getElementById("galeria"),r=document.getElementById("kontakt"),m=(document.getElementById("galeriaContainer"),document.getElementById("morePhotosButton"),document.getElementById("galleryModal")),s=document.getElementById("crossCloseGalleryModal"),u=document.getElementById("actualPhoto"),g=document.getElementById("galleryNavLeft"),f=document.getElementById("galleryNavRight"),y=document.getElementById("countTotalPhotos"),p=document.getElementById("countActualPhoto");document.getElementById("footerContainer");if(t.addEventListener("click",function(){S(c,c.offsetTop-50)}),n.addEventListener("click",function(){S(i,i.offsetTop-50)}),o.addEventListener("click",function(){S(r,r.offsetTop-50)}),l.addEventListener("click",function(){S(d,d.offsetTop-50)}),e.addEventListener("click",function(){S(d,d.offsetTop-50)}),a.addEventListener("click",function(){M||window.scrollTo(0,0)}),document.querySelectorAll("#map").length>0){if(document.querySelector("html").lang)document.querySelector("html").lang;else;var v=document.createElement("script");v.type="text/javascript",v.src="https://maps.googleapis.com/maps/api/js?callback=initMap&key=AIzaSyDSeWcGwiJhXeoDuS8S1PQVXCHnlGbyAIs&language=en",document.getElementsByTagName("head")[0].appendChild(v)}var E=23,h=new Array;function I(e){var t=e.split("_");return parseInt(t[1])}function w(e){T(),m.style.position="fixed",m.style.display="block",document.documentElement.style.overflowY="hidden",document.body.scroll="no",L=e-1,u.appendChild(h[L])}function B(){for(;u.firstChild;)u.removeChild(u.firstChild)}!function(){for(var e=0;e<E;e++){var t=new Image;t.src="images/photos/apartmany"+(e+1)+".jpg",t.alt="fotka_apartmany_"+(e+1),t.className="imageGallery",h[e]=t}}(),function(){for(var e=document.getElementsByClassName("photo"),t=0;t<e.length;t++)e[t].addEventListener("click",function(){var e=I(this.id);k=e,w(e)})}(),s.addEventListener("click",function(){B(),m.style.display="none",document.documentElement.style.overflowY="auto",document.body.scroll="yes"});var k=0;function T(){p.innerText=k,y.innerText=E}var C,L=0;function b(){var e=void 0!==window.pageXOffset,t="CSS1Compat"===(document.compatMode||""),n=e?window.pageYOffset:t?document.documentElement.scrollTop:document.body.scrollTop;return parseInt(n)}f.addEventListener("click",function(){B(),++L>=h.length&&(L=0),u.appendChild(h[L]),k=L+1,T()}),g.addEventListener("click",function(){B(),--L<0&&(L=h.length-1),u.appendChild(h[L]),k=L+1,T()});var M=!1,N=60;function S(e,t){if(M)console.log("is animated");else if(t!=b()){if(!e)return void console.log("returned animation");M=!0,H=0;b();C=setInterval(function(){b()<t&&(b()+N<t?window.scrollTo(0,b()+N):(window.scrollTo(0,t),clearInterval(C),M=!1),b()+window.innerHeight>A-50&&(clearInterval(C),M=!1,H=0)),b()>t&&(b()-N>t?window.scrollTo(0,b()-N):(window.scrollTo(0,t),clearInterval(C),M=!1)),H+=20,M&&H>4e3&&(clearInterval(C),M=!1,H=0,console.log("scroll animation problem"))},20)}}var H=0;var x,A=(x=document,Math.max(x.body.scrollHeight,x.documentElement.scrollHeight,x.body.offsetHeight,x.documentElement.offsetHeight,x.body.clientHeight,x.documentElement.clientHeight))});