//Game Prototype

var ctx; //context - kann auch eigenes Object machen
var canvas;

//variables for the size of the map
var tile = {
    height: 30,
    width: 30
}

var map = {
    height: 20,
    width: 20,
}

var currentSecond= 0, frameCount = 0, framesLastSecond = 0;

//each level another map!
var gameMap = [ 
    2, 1, 1, 3, 3, 0, 0, 0, 0, 0, 2, 1, 1, 3, 3, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 3, 0, 0, 0, 1, 0, 2, 1, 1, 3, 3, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 3, 0, 0, 0, 2, 0, 2, 1, 1, 3, 3, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 2, 2, 2, 3, 3, 0, 2, 1, 1, 3, 3, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 1, 0, 0, 3, 0, 0, 2, 1, 1, 3, 3, 0, 0, 0, 0, 0,
    2, 1, 1, 3, 3, 0, 0, 0, 0, 0, 2, 1, 1, 3, 3, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 3, 0, 0, 0, 1, 0, 2, 1, 1, 3, 3, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 3, 0, 0, 0, 2, 0, 2, 1, 1, 3, 3, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 2, 2, 2, 3, 3, 0, 2, 1, 1, 3, 3, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 1, 0, 0, 3, 0, 0, 2, 1, 1, 3, 3, 0, 0, 0, 0, 0,
    2, 1, 1, 3, 3, 0, 0, 0, 0, 0, 2, 1, 1, 3, 3, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 3, 0, 0, 0, 1, 0, 2, 1, 1, 3, 3, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 3, 0, 0, 0, 2, 0, 2, 1, 1, 3, 3, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 2, 2, 2, 3, 3, 0, 2, 1, 1, 3, 3, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 1, 0, 0, 3, 0, 0, 2, 1, 1, 3, 3, 0, 0, 0, 0, 0,
    2, 1, 1, 3, 3, 0, 0, 0, 0, 0, 2, 1, 1, 3, 3, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 3, 0, 0, 0, 1, 0, 2, 1, 1, 3, 3, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 3, 0, 0, 0, 2, 0, 2, 1, 1, 3, 3, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 2, 2, 2, 3, 3, 0, 2, 1, 1, 3, 3, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 1, 0, 0, 3, 0, 0, 2, 1, 1, 3, 3, 0, 0, 0, 0, 0,
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

    //draw map
    for(var y = 0; y < map.height; y++){
        for(var x = 0; x < map.width; x++){ 
            switch(gameMap[((y*map.width)+x)]){
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
            ctx.fillRect(x*tile.width,y*tile.height,tile.height,tile.width);
        }
    }

    ctx.fillStyle = "#ff0000";
    ctx.fillText("FPS: "+ framesLastSecond, 10, 20);

    //when ready to call function again -> levels later
    requestAnimationFrame(drawGame);
}