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

    cennikNav.addEventListener("click", function () {

    });
    galeriaNav.addEventListener("click", function () {

    });
    kontaktNav.addEventListener("click", function () {

    });
    arrowDown.addEventListener("click", function () {

    });
    logo.addEventListener("click", function () {

        window.scrollTo(0, 0)
        changeHeading();
    });

    

    // LOAD and SET ALL IMAGES IN GALLERY
    var totalPhotosToLoadToGallery = 23;
    var gallery = new Array();
    function setPhotos() {

        var image = new Image();
        image.src = "images/photos/apartmany2.jpg";
        image.className = "photo imageGallery";
        image.id = "photo_"+1;

        for (var i = 0; i < totalPhotosToLoadToGallery; i++) {
            var image = new Image();
            image.src = "images/photos/apartmany"+(i+1)+".jpg";
            image.alt = "apartmany " + (i+1);
            image.className = "imageGallery";
            image.id = "photo_"+(i+1);
            gallery[i] = image;
        }
    }
    setPhotos();

    // ADD CLICK EVENT FOR PHOTOS ON PAGE
    function addClickEventToPhotos(){
        var photos = document.getElementsByClassName("photo");
        for(var i = 0; i<photos.length; i++){
            var idOfPhoto = getNumberFromId(photos[i].id);
            actualPhotoNumber = idOfPhoto;
            
            photos[i].addEventListener("click",function(){
                var str = getNumberFromId(this.id);
                actualPhotoNumber = str;
                openGalleryModal(str);
            });
            
        }
    
    }
    addClickEventToPhotos();


    // GET number of photo FROM ID
    function getNumberFromId(str){
        var helpStr = ""+ str;
        var x = str.split("_")
        return parseInt(x[1]);
    }

    window.addEventListener("scroll",function(){
        var x = getScrollTop();
        console.log(x);
    });


    // Get top before open modal and than scroll to after closing modal, because of position fixed during in modal
    var helpTopForModal = 0;
    // OPEN GALLERY MODAL
    function openGalleryModal(num) {
        helpTopForModal = getScrollTop();
        updateModalCounting();
        galleryModal.style.top = helpTopForModal+"px";
        galleryModal.style.display = "block";
        document.documentElement.style.overflowY = "hidden";
        // document.documentElement.style.position = "fixed";
        document.body.scroll = "no";
        actualPhoto.appendChild(gallery[num-1]);
    }
    // CLOSE GALLERY MODAL
    function closeGalleryModal() {
        clearModal();
        galleryModal.style.display = "none";
        document.documentElement.style.overflowY = "auto";
        // document.documentElement.style.position = "initial";
        document.body.scroll = "yes";
        setInitialZoom();
        window.scrollTo(0, helpTopForModal);
    }
    // CLOSING MODAL BY CLICKING ON CROSS
    crossCloseGalleryModal.addEventListener("click", closeGalleryModal);
    // CLEAR ALL CHILDS FROM MODAL
    function clearModal(){
        while(actualPhoto.firstChild){
            actualPhoto.removeChild(actualPhoto.firstChild);
        }
    }
    // SET BASIC ZOOM
    var scale = "scale(1)";
    function setInitialZoom(){
        document.body.style.webkitTransform = scale;
        document.body.style.msTransform = scale;
        document.body.style.transform = scale;
    }

    // UPDATE COUNTING IN GALLERY MODAL
    var actualPhotoNumber = 0;
    var totalPhotoCounting = totalPhotosToLoadToGallery;
    function updateModalCounting() {
        countActualPhoto.innerText = actualPhotoNumber;
        countTotalPhotos.innerText = totalPhotoCounting;
    }






    // SCROLL POSITION
    function getScrollTop() {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

        var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
        return parseInt(y);
    }




    // morePhotosButton.addEventListener("click", loadPictures);

    // function getActualScrollTop() {
    //     let actualTop = 0;
    //     if (document.documentElement.scrollTop > 0) {
    //         actualTop = document.documentElement.scrollTop;
    //     }
    //     if (document.body.scrollTop > 0) {
    //         actualTop = document.body.scrollTop;
    //     }
    //     if(window.scrollY > 0){
    //         actualTop = window.scrollY;
    //     }
    //     return actualTop;
    // }

    // ANIMATION SCROLL TO
    // function animateScroll(elem, from, to) {
    //     if (!elem || elem.classList.contains("clicked")) {
    //         console.log("returned animation");
    //         return;
    //     }
    //     elem.className += "clicked";

    //     var fps = 50;
    //     var step = 50;
    //     if (from > to) {
    //         step *= -1;
    //     }
    //     var numberOfSteps = (to - from) / step;
    //     var progress = 0;
    //     timer = setInterval(function () {
    //         window.scrollTo(0, getActualScrollTop() + step);

    //         progress++;
    //         if (progress > numberOfSteps) {
    //             clearInterval(timer);
    //             elem.className = "";
    //         }
    //     }, 1000 / fps);
    // }
});