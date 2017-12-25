//work with overlay menue
var overlayOpen = false;
var expOpen = false;

function openOverlay() {
    document.getElementById("overlay").style.width = "23.1%";
    overlayOpen = true;
}

function closeOverlay() {
    document.getElementById("overlay").style.width = "0%";
    overlayOpen = false;
}

/*for explanation overlay*/
function openExp() {
    document.getElementById("explanation").style.width = "23.1%";
    expOpen = true;
}

function closeExp() {
    document.getElementById("explanation").style.width = "0%";
    expOpen = true;
}

/*close without 'x' 
'x' only for elderly users who don't know how to get rid of the menue*/
window.addEventListener("mouseup", function(event) {
    var menue = document.getElementById("overlay");
    var header = document.getElementById("header-content");
    if(overlayOpen == true){
        closeOverlay();
    }
    if(expOpen == true){
        closeExp();
    }
});