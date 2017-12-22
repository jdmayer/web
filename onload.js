window.onload = function() {
    canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');
    requestAnimationFrame(drawGame);

    ctx.font = "bold 10pt sans-serif";

    window.addEventListener("keydown", function(e){
        if(e.keyCode >= 37 && e.keyCode <= 40) {
            keysDown[e.keyCode] = true;
        } 
    });

    window.addEventListener("keyup", function(e){
        if(e.keyCode >= 37 && e.keyCode <= 40) {
            keysDown[e.keyCode] = false;
        } 
    });

    //initiating screen measures for culling
    culling.screen = [
        document.getElementById("game").width,
        document.getElementById("game").height
    ];
};