window.onload = function() {
    canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');
    requestAnimationFrame(startLevel);

    ctx.font = "bold 10pt sans-serif";

    window.addEventListener("keydown", function(e){
        if(e.keyCode >= 37 && e.keyCode <= 40 || e.keyCode == 13) {
            keysDown[e.keyCode] = true;
        } 

        if(e.keyCode == 70 || e.keyCode == 67 || e.keyCode == 82 || e.keyCode == 65) {
            if (fight && !isgameover && !actionIsRunning){
                switch(e.keyCode){
                    case 70:
                        feedMonster();
                        break;
                    case 67:
                        catchMonster();
                        break;
                    case 65:
                        if (monster_index!=0){
                            attackMonster();
                        }
                        break;
                    case 82:
                        runAway();
                        break;
                };
            };
        } ;
    });

    window.addEventListener("keyup", function(e){
        if(e.keyCode >= 37 && e.keyCode <= 40 || e.keyCode == 13) {
            keysDown[e.keyCode] = false;
        } 
    });

    //initiating screen measures for culling
    culling.screen = [
        document.getElementById("game").width,
        document.getElementById("game").height
    ];
};