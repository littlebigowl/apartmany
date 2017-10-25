document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    // SHOW EMAIL
    var x = "ubytovna";
    var y = "humenne";
    var z = "gmail";
    document.getElementById("actualEmail").innerText = x + y + "@" + z + ".com";

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

    var ofsetTop = 50;
    cennikNav.addEventListener("click", function () {
        animateScroll(cennikMain, cennikMain.offsetTop - ofsetTop);
    });
    galeriaNav.addEventListener("click", function () {
        animateScroll(galeriaMain, galeriaMain.offsetTop - ofsetTop);
    });
    kontaktNav.addEventListener("click", function () {
        animateScroll(kontaktMain, kontaktMain.offsetTop - ofsetTop);
    });
    arrowDown.addEventListener("click", function () {
        animateScroll(uvodMain, uvodMain.offsetTop - ofsetTop);
    });
    logo.addEventListener("click", function () {
        window.scrollTo(0, 0)     
    });



    // LOAD and SET ALL IMAGES IN GALLERY
    var totalPhotosToLoadToGallery = 23;
    var gallery = new Array();
    function setPhotos() {

        var image = new Image();
        image.src = "images/photos/apartmany2.jpg";
        image.className = "photo imageGallery";
        image.id = "photo_" + 1;

        for (var i = 0; i < totalPhotosToLoadToGallery; i++) {
            var image = new Image();
            image.src = "images/photos/apartmany" + (i + 1) + ".jpg";
            image.alt = "apartmany " + (i + 1);
            image.className = "imageGallery";
            image.id = "photo_" + (i + 1);
            gallery[i] = image;
        }
    }
    setPhotos();

    // ADD CLICK EVENT FOR PHOTOS ON PAGE
    function addClickEventToPhotos() {
        var photos = document.getElementsByClassName("photo");
        for (var i = 0; i < photos.length; i++) {
            var idOfPhoto = getNumberFromId(photos[i].id);
            actualPhotoNumber = idOfPhoto;

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
        var x = str.split("_")
        return parseInt(x[1]);
    }


    // OPEN GALLERY MODAL
    function openGalleryModal(num) {
        helpTopForModal = getScrollTop();
        updateModalCounting();
        galleryModal.style.position = "fixed";
        galleryModal.style.display = "block";
        document.documentElement.style.overflowY = "hidden";
        document.body.scroll = "no";
        lodedImageInGalleryIndexInArray = num - 1;
        actualPhoto.appendChild(gallery[lodedImageInGalleryIndexInArray]);
    }
    // CLOSE GALLERY MODAL
    function closeGalleryModal() {
        clearModal();
        galleryModal.style.display = "none";
        document.documentElement.style.overflowY = "auto";
        document.body.scroll = "yes";
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
        actualPhoto.appendChild(gallery[lodedImageInGalleryIndexInArray]);
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
        actualPhoto.appendChild(gallery[lodedImageInGalleryIndexInArray]);
        actualPhotoNumber = lodedImageInGalleryIndexInArray + 1;
        updateModalCounting();

    }
    // ADD CLICK EVENT MODAL MOVE LEFT
    galleryNavLeft.addEventListener("click", moveGalleryLeft);

    // SCROLL POSITION
    function getScrollTop() {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

        var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
        return parseInt(y);
    }



    var speedOfScrolling = 70;
    // ANIMATION SCROLL TO
    function animateScroll(elem, scrollTo) {
        if(scrollTo != getScrollTop()){
            if (!elem || elem.classList.contains("clicked")) {
                console.log("returned animation");
                return;
            }
            elem.className = "clicked";
            var actualPosition = getScrollTop();
            timer = setInterval(function(){
                // MOVING DOWN
                if(getScrollTop()<scrollTo){
                    if(getScrollTop()+speedOfScrolling<scrollTo){
                        window.scrollTo(0,getScrollTop()+speedOfScrolling);
                    }else{
                        window.scrollTo(0,scrollTo);
                        clearInterval(timer);
                        elem.className = "";
                    }
                }
                // MOVING UP
                if(getScrollTop()>scrollTo){
                    if(getScrollTop()-speedOfScrolling>scrollTo){
                        window.scrollTo(0,getScrollTop()-speedOfScrolling);
                    }else{
                        window.scrollTo(0, scrollTo);
                        clearInterval(timer);
                        elem.className = "";
                    }
                }
            },20);
        }
    }
    

});