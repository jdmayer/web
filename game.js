//Game Prototype

var ctx; //context - kann auch eigenes Object machen
var canvas;

//variables for the size of the map
var tileW = 40; tileH = 40;
var mapW = 10, mapH = 10; 

var currentSecond= 0, frameCount = 0, framesLastSecond = 0;

//each level another map!
var gameMap = [ 
    2, 1, 1, 3, 3, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 3, 0, 0, 0, 1, 0,
    0, 0, 0, 1, 3, 0, 0, 0, 2, 0,
    0, 0, 0, 1, 2, 2, 2, 3, 3, 0,
    0, 0, 0, 1, 1, 0, 0, 3, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 3, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 0,
    0, 0, 0, 3, 0, 0, 0, 1, 0, 0,
    0, 0, 0, 3, 0, 1, 1, 1, 0, 0,
    0, 0, 0, 3, 2, 2, 0, 0, 0, 0,   
];

window.onload = function() {
    canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');
    requestAnimationFrame(drawGame);
    ctx.font = "bold 10pt sans-serif";
};

function drawGame(){
    if(ctx==null){return;}

    //calc current second -> keep track
    var sec = Math.floor(Date.now()/1000);
    if(sec!=currentSecond){ //if not matching
        currentSecond = sec;
        framesLastSecond = frameCount;
        frameCount = 1;
    } else { 
        frameCount++;
    }

    //drawing map!
    for(var y = 0; y < mapH; y++){
        for(var x = 0; x < mapW; x++){ 
            switch(gameMap[((y*mapW)+x)]){
                case 0:
                    ctx.fillStyle = "#999999";
                    break;
                case 1:
                    ctx.fillStyle = "#eeeeee";
                    break;
                case 2:
                    ctx.fillStyle = "#fff";
                    break;
                case 3:
                    ctx.fillStyle = "#000";
                    break;
            }
            ctx.fillRect(x*tileW,y*tileH,tileH,tileW);
        }
    }

    ctx.fillStyle = "#ff0000";
    ctx.fillText("FPS: "+ framesLastSecond, 10, 20);

    //when ready to call function again -> levels later
    requestAnimationFrame(drawGame);
}