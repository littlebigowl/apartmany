document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    // SHOW EMAIL
    var x = "ubytovna";
    var y = "humenne";
    var z = "gmail";
    document.getElementById("actualEmail").innerText = x+y+"@"+z+".com";

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
  

    function changeHeading(){
        openGalleryModal();
        //document.getElementById("heading").innerText = "Ahoj";
    }


    // OPEN GALLERY MODAL
    function openGalleryModal(){
        galleryModal.style.display = "block";
        document.documentElement.style.overflow = "hidden";
        document.documentElement.style.position = "fixed";
        document.body.scroll = "no";
    }
    // CLOSE GALLERY MODAL
    function closeGalleryModal(){
        galleryModal.style.display = "none";
        document.documentElement.style.overflow = "auto";
        document.documentElement.style.position = "initial";
        document.body.scroll = "yes";
    }

    crossCloseGalleryModal.addEventListener("click",closeGalleryModal);


    
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