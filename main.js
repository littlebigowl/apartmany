document.addEventListener("DOMContentLoaded", function (e) {
    console.log("DOM fully loaded and parsed");

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

    cennikNav.addEventListener("click", function () {
        var topTo = cennikMain.offsetTop - 50;
        var currentTop = getActualScrollTop();
        if (currentTop > topTo + 100 || currentTop < topTo - 100) {
            animateScroll(cennikMain, currentTop, topTo);
        }
    });
    galeriaNav.addEventListener("click", function () {
        var topTo = galeriaMain.offsetTop - 50;
        var currentTop = getActualScrollTop();
        if (currentTop > topTo + 100 || currentTop < topTo - 100) {
            animateScroll(galeriaMain, currentTop, topTo);
        }
    });
    kontaktNav.addEventListener("click", function () {
        var topTo = kontaktMain.offsetTop - 50;
        var currentTop = getActualScrollTop();
        if (currentTop > topTo + 100 || currentTop < topTo - 100) {
            animateScroll(kontaktMain, currentTop, topTo);
        }
    });
    arrowDown.addEventListener("click", function () {
        var topTo = uvodMain.offsetTop - 50;
        var currentTop = getActualScrollTop();
        if (currentTop > topTo + 100 || currentTop < topTo - 100) {
            animateScroll(uvodMain, currentTop, topTo);
        }
    });
    logo.addEventListener("click", function () {
        var topTo = logo.offsetTop;
        var currentTop = getActualScrollTop();
        if (currentTop > topTo + 100 || currentTop < topTo - 100) {
            window.scrollTo(0, 0);
        }
    });

    // SHOW EMAIL
    var x = "ubytovna";
    var y = "humenne";
    var z = "gmail";
    document.getElementById("actualEmail").innerText = x+y+"@"+z+".com";
    
    morePhotosButton.addEventListener("click", loadPictures);

    

    

    function getActualScrollTop() {
        let actualTop = 0;
        if (document.documentElement.scrollTop > 0) {
            actualTop = document.documentElement.scrollTop;
        }
        if (document.body.scrollTop > 0) {
            actualTop = document.body.scrollTop;
        }
        if(window.scrollY > 0){
            actualTop = window.scrollY;
        }
        return actualTop;
    }

    function updatePhotoCounting(numberOfPhoto) {
        countActualPhoto.innerText = numberOfPhoto;
    }

    // ANIMATION SCROLL TO
    function animateScroll(elem, from, to) {
        if (!elem || elem.classList.contains("clicked")) {
            console.log("returned animation");
            return;
        }
        elem.className += "clicked";

        var fps = 50;
        var step = 50;
        if (from > to) {
            step *= -1;
        }
        var numberOfSteps = (to - from) / step;
        var progress = 0;
        timer = setInterval(function () {
            window.scrollTo(0, getActualScrollTop() + step);

            progress++;
            if (progress > numberOfSteps) {
                clearInterval(timer);
                elem.className = "";
            }
        }, 1000 / fps);
    }
});