window.onload = function() {
    canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');
    //requestAnimationFrame(startLevel);


    //initiating screen measures for culling
    culling.screen = [
        document.getElementById("game").width,
        document.getElementById("game").height
    ];

    startLevel();
    ctx.font = "bold 10pt sans-serif";

    window.addEventListener("keydown", function(e){
        if(e.keyCode >= 37 && e.keyCode <= 40 ){
            keysDown[e.keyCode] = true;
        } 
    });

    window.addEventListener("keyup", function(e){
        if(e.keyCode >= 37 && e.keyCode <= 40 ){
            keysDown[e.keyCode] = false;
        } 
    });

    window.addEventListener("keydown",function(e){
        if(fight && !actionIsRunning){
            switch(e.keyCode){
                case 65:
                    attackMonster();
                    break;
                case 67:
                    catchMonster();
                    break;
                case 70:
                    feedMonster();
                    break;
                case 82:
                    runAway();
                    break;
            }
        }
        if ((isGameOver || isLevelScreen) && e.keyCode == 13){
            isLevelScreen = false;
            isGameOver = false;
            startNewLevel();
        }
    });
};