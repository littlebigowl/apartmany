"use strict";

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    // SHOW EMAIL
    var x = "info";
    var y = "apartmany";
    var z = "humenne";
    document.getElementById("actualEmail").innerText = x + "@" + y + z + ".sk";

    var myNav = document.getElementById("myNav");
    var loadingModal = document.getElementById("loadingModal");

    var uvodNav = document.getElementById("uvodNav");
    var cennikNav = document.getElementById("cennikNav");
    var galeriaNav = document.getElementById("galeriaNav");
    var kontaktNav = document.getElementById("kontaktNav");
    var arrowDown = document.getElementById("arrowDown");
    var logo = document.getElementById("logo");

    var uvodMain = document.getElementById("uvod");
    var cennikMain = document.getElementById("cennik");
    var galeriaMain = document.getElementById("galeria");
    var kontaktMain = document.getElementById("kontakt");

    var galleryContainer = document.getElementById("galeriaContainer");
    var morePhotosButton = document.getElementById("morePhotosButton");
    var galleryModal = document.getElementById("galleryModal");
    var crossCloseGalleryModal = document.getElementById("crossCloseGalleryModal");
    var actualPhoto = document.getElementById("actualPhoto");
    var galleryNavLeft = document.getElementById("galleryNavLeft");
    var galleryNavRight = document.getElementById("galleryNavRight");
    var countTotalPhotos = document.getElementById("countTotalPhotos");
    var countActualPhoto = document.getElementById("countActualPhoto");
    var footer = document.getElementById("footerContainer");

    var actualYearFooter = document.getElementById("actualYear");
    // SET ACTUAL YEAR in FOOTER
    var date = new Date();
    var actualYear = date.getFullYear();
    actualYearFooter.innerText = actualYear;

    //if user is in gallery mode = true
    var inGallery = false;

    var ofsetTop = 50;
    cennikNav.addEventListener("click", function () {
        scrollToY(cennikMain.offsetTop - ofsetTop, 100, 'easeInOutQuint');
        //animateScroll(cennikMain, cennikMain.offsetTop - ofsetTop);
    });
    galeriaNav.addEventListener("click", function () {
        scrollToY(galeriaMain.offsetTop - ofsetTop, 100, 'easeInOutQuint');
    });
    kontaktNav.addEventListener("click", function () {
        scrollToY(kontaktMain.offsetTop - ofsetTop, 100, 'easeInOutQuint');
    });
    arrowDown.addEventListener("click", function () {
        scrollToY(uvodMain.offsetTop - ofsetTop, 100, 'easeInOutQuint');
    });
    uvodNav.addEventListener("click", function () {
        scrollToY(uvodMain.offsetTop - ofsetTop, 100, 'easeInOutQuint');
    });
    logo.addEventListener("click", function () {
        scrollToY(0, 100, 'easeInOutQuint');
    });

    window.addEventListener("scroll", checkScrollForNavSize);
    function checkScrollForNavSize() {
        if (window.innerWidth > 414) {
            if (getScrollTop() > 50) {
                myNav.style.fontSize = 18 + "px";
            } else {
                myNav.style.fontSize = 26 + "px";
            }
        }
    }
    checkScrollForNavSize();

    // GOOGLE MAP LOAD
    if (document.querySelectorAll("#map").length > 0) {
        var lang = "en";
        if (document.querySelector("html").lang) {
            var _lang = document.querySelector("html").lang;
        } else {
            var _lang2 = "en";
        }
        var jsFile = document.createElement("script");
        jsFile.type = "text/javascript";
        jsFile.src = "https://maps.googleapis.com/maps/api/js?callback=initMap&key=AIzaSyBZ_vJVQ2M7yxcgSjkT2HHuZAuldJ_Wr1g&language=" + lang;
        document.getElementsByTagName("head")[0].appendChild(jsFile);
    }

    // LOAD and SET ALL IMAGES IN GALLERY
    var totalPhotosToLoadToGallery = 23;
    var gallery = new Array();
    function setPhotos() {
        for (var i = 0; i < totalPhotosToLoadToGallery; i++) {
            gallery.push({
                src: "images/photos/apartmany" + (i + 1) + ".jpg",
                alt: "fotka_apartmany_" + (i + 1),
                class: "imageGallery",
                img: null
            });
        }
    }
    setPhotos();

    // ADD CLICK EVENT FOR PHOTOS ON PAGE
    function addClickEventToPhotos() {
        var photos = document.getElementsByClassName("photo");
        for (var i = 0; i < photos.length; i++) {
            photos[i].addEventListener("click", function () {
                var str = getNumberFromId(this.id);
                actualPhotoNumber = str;
                openGalleryModal(str);
            });
        }
    }
    addClickEventToPhotos();

    // GET number of photo FROM ID
    function getNumberFromId(str) {
        var helpStr = "" + str;
        var x = str.split("_");
        return parseInt(x[1]);
    }

    function loadPictureFromGallery(numberOfPicture) {
        if (gallery[numberOfPicture].img === null) {
            loadingModal.style.display = "flex";
            var image = new Image();
            image.addEventListener("load", function () {
                loadingModal.style.display = "none";
            });
            image.src = gallery[lodedImageInGalleryIndexInArray].src;
            image.alt = gallery[lodedImageInGalleryIndexInArray].alt;
            image.className = gallery[lodedImageInGalleryIndexInArray].class;
            gallery[lodedImageInGalleryIndexInArray].img = image;
        }
        actualPhoto.appendChild(gallery[lodedImageInGalleryIndexInArray].img);
    }

    // OPEN GALLERY MODAL
    function openGalleryModal(num) {
        clearModal();
        inGallery = true;

        updateModalCounting();
        galleryModal.style.position = "fixed";
        galleryModal.style.display = "block";
        document.documentElement.style.overflowY = "hidden";
        document.body.scroll = "no";
        lodedImageInGalleryIndexInArray = num - 1;
        loadPictureFromGallery(lodedImageInGalleryIndexInArray);
    }
    // CLOSE GALLERY MODAL
    function closeGalleryModal() {
        clearModal();
        galleryModal.style.display = "none";
        document.documentElement.style.overflowY = "auto";
        document.body.scroll = "yes";
        inGallery = false;
    }
    // CLOSING MODAL BY CLICKING ON CROSS
    crossCloseGalleryModal.addEventListener("click", closeGalleryModal);
    // CLEAR ALL CHILDS FROM MODAL
    function clearModal() {
        while (actualPhoto.firstChild) {
            actualPhoto.removeChild(actualPhoto.firstChild);
        }
    }
    // SET BASIC ZOOM
    var scale = "scale(1)";
    function setInitialZoom() {
        document.body.style.webkitTransform = scale;
        document.body.style.msTransform = scale;
        document.body.style.transform = scale;
    }

    // UPDATE COUNTING IN GALLERY MODAL
    var actualPhotoNumber = 0;
    function updateModalCounting() {
        countActualPhoto.innerText = actualPhotoNumber;
        countTotalPhotos.innerText = totalPhotosToLoadToGallery;
    }

    var lodedImageInGalleryIndexInArray = 0;
    // MODAL GALLERY MOVE RIGHT
    function moveGalleryRight() {
        clearModal();
        lodedImageInGalleryIndexInArray++;
        if (lodedImageInGalleryIndexInArray >= gallery.length) {
            lodedImageInGalleryIndexInArray = 0;
        }
        loadPictureFromGallery(lodedImageInGalleryIndexInArray);
        actualPhotoNumber = lodedImageInGalleryIndexInArray + 1;
        updateModalCounting();
    }
    // ADD CLCIK EVENT MODAL MOVE RIGHT
    galleryNavRight.addEventListener("click", moveGalleryRight);
    // MODAL GALLERY MOVE LEFT
    function moveGalleryLeft() {
        clearModal();
        lodedImageInGalleryIndexInArray--;
        if (lodedImageInGalleryIndexInArray < 0) {
            lodedImageInGalleryIndexInArray = gallery.length - 1;
        }
        loadPictureFromGallery(lodedImageInGalleryIndexInArray);
        actualPhotoNumber = lodedImageInGalleryIndexInArray + 1;
        updateModalCounting();
    }
    // ADD CLICK EVENT MODAL MOVE LEFT
    galleryNavLeft.addEventListener("click", moveGalleryLeft);

    // SCROLL POSITION
    function getScrollTop() {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
        var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
        return parseInt(y);
    }

    // ANIMATION
    window.requestAnimFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    }();

    // main function
    function scrollToY(scrollTargetY, speed, easing) {
        // scrollTargetY: the target scrollY property of the window
        // speed: time in pixels per second
        // easing: easing equation to use

        var scrollY = window.scrollY || document.documentElement.scrollTop,
            scrollTargetY = scrollTargetY || 0,
            speed = speed || 2000,
            easing = easing || 'easeOutSine',
            currentTime = 0;

        // min time .1, max time .8 seconds
        var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

        // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
        var easingEquations = {
            easeOutSine: function easeOutSine(pos) {
                return Math.sin(pos * (Math.PI / 2));
            },
            easeInOutSine: function easeInOutSine(pos) {
                return -0.5 * (Math.cos(Math.PI * pos) - 1);
            },
            easeInOutQuint: function easeInOutQuint(pos) {
                if ((pos /= 0.5) < 1) {
                    return 0.5 * Math.pow(pos, 5);
                }
                return 0.5 * (Math.pow(pos - 2, 5) + 2);
            }
        };

        // add animation loop
        function tick() {
            currentTime += 1 / 60;

            var p = currentTime / time;
            var t = easingEquations[easing](p);

            if (p < 1) {
                requestAnimFrame(tick);

                window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t);
            } else {
                //console.log('scroll done');
                window.scrollTo(0, scrollTargetY);
            }
        }
        // call it once to get started
        tick();
    }

    var touchStart = {
        x: -1,
        y: -1
    };
    // HORIZONTAL TOUCH FINGER SWIPE  
    galleryModal.addEventListener("touchstart", function (e) {
        if (inGallery) {
            touchStart.x = e.changedTouches[0].clientX;
            touchStart.y = e.changedTouches[0].clientY;
        }
    });
    galleryModal.addEventListener("touchmove", function (e) {
        e.preventDefault();
    });
    galleryModal.addEventListener("touchend", function (e) {
        if (inGallery) {
            var xMove = touchStart.x - e.changedTouches[0].clientX;
            var yMove = Math.abs(touchStart.y - e.changedTouches[0].clientY);
            // Move LEFT
            if (xMove > 100 && yMove < 60) {
                moveGalleryRight();
            }
            // Move RIGHT
            if (xMove < -100 && yMove < 60) {
                moveGalleryLeft();
            }
            touchStart.x = -1;
            touchStart.y = -1;
        }
    });
});

var map;
function initMap() {
    var e = { zoom: 17, center: { lat: 48.933567, lng: 21.907837 } },
        map = new google.maps.Map(document.getElementById("map"), e);

    new google.maps.Marker({ position: { lat: 48.933567, lng: 21.907837 }, map: map });
}