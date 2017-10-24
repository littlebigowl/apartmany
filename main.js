document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    var pocetObrazkovNacitanie = 6;
    var celkovyPocetObrazkov = 12;
    var loadedPhotos = 0;
    var gallery;
    var indexOfActualPhoto = 0;

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

    loadPhotosToArray();
    loadPictures();

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

    window.addEventListener("scroll", function () {
        if (getActualScrollTop(); > kontaktMain.offsetTop - 500) {
            document.getElementById("actualEmail").innerText = "ubytovnahumenne@gmail.com";
        }
    });

    morePhotosButton.addEventListener("click", loadPictures);

    galleryModal.addEventListener("click", function (e) {
        if (e.target == galleryModal) {
            closeGallery();
        }
    });

    crossCloseGalleryModal.addEventListener("click", closeGallery);
    galleryNavLeft.addEventListener("click", function () {
        indexOfActualPhoto--;
        if (indexOfActualPhoto < 0) {
            indexOfActualPhoto = gallery.length - 1;
        }
        loadAndSetPhoto(indexOfActualPhoto);
        updatePhotoCounting(indexOfActualPhoto + 1);
    });
    galleryNavRight.addEventListener("click", function () {
        indexOfActualPhoto++;
        if (indexOfActualPhoto >= gallery.length) {
            indexOfActualPhoto = 0;
        }
        loadAndSetPhoto(indexOfActualPhoto);
        updatePhotoCounting(indexOfActualPhoto + 1);
    });



    // LOADING PICTURES TO GALLERY
    function loadPictures() {
        for (var i = 0; i < pocetObrazkovNacitanie; i++) {
            if (loadedPhotos < celkovyPocetObrazkov) {
                var div = document.createElement("div");
                div.className = "obrazokContainer";
                var photo = document.createElement("img");
                photo.src = gallery[loadedPhotos];
                photo.alt = "apartmany " + (loadedPhotos + 1);
                photo.className = "galeriaObrazok";
                photo.id = "photo_" + loadedPhotos;

                photo.addEventListener("click", function () {
                    indexOfActualPhoto = getIndexOfPhoto(this.id);
                    openGallery(indexOfActualPhoto);
                    updatePhotoCounting(indexOfActualPhoto + 1);
                });
                div.appendChild(photo);
                galleryContainer.appendChild(div);
            }
            loadedPhotos++;
        }
    };

    function loadPhotosToArray() {
        gallery = new Array(celkovyPocetObrazkov);
        for (var i = 0; i < celkovyPocetObrazkov; i++) {
            gallery[i] = "images/photos/apartmany" + (i + 1) + ".jpeg";
        }
        countTotalPhotos.innerText = gallery.length;
    };

    function getIndexOfPhoto(idOfPhoto) {
        var index = parseInt(idOfPhoto.split("_").pop());
        return index;
    };

    function openGallery(numberOfPhoto) {
        loadAndSetPhoto(numberOfPhoto);

        var actualTopScroll = getActualScrollTop();
        if (actualTopScroll > 0) {
            galleryModal.style.top = actualTopScroll + "px";
            galleryModal.style.display = "block";
            document.body.style.overflowY = "hidden";
        }
    };

    function loadAndSetPhoto(numberOfPhoto) {
        actualPhoto.style.background = "url('" + gallery[numberOfPhoto] + "')";
        actualPhoto.style.backgroundRepeat = "no-repeat";
        actualPhoto.style.backgroundPositionX = "center";
        actualPhoto.style.backgroundPositionY = "center";
        actualPhoto.style.backgroundSize = "contain";
        actualPhoto.style.margin = "10px auto 0 auto";
        actualPhoto.style.maxWidth = "960px";
        // actualPhoto.style.maxHeight = "540px";
    };

    function closeGallery() {
        galleryModal.style.display = "none";
        document.body.style.overflowY = "auto";
    };

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