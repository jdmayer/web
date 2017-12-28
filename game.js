77
//HERE ONLY MAIN FUNCTIONS FOR THE LEVELS CALLING OTHER FUNCS
//

var ctx; //context 
var canvas;
var level = 1;

var currentSecond= 0, frameCount = 0, framesLastSecond = 0; 
var lastFrameTime = 0;

var tile = {
    height: 40,
    width: 40
};

var map = {
    height: 20,
    width: 20,
};

var keysDown = {
    37: false,  //left
    38: false,  //up
    39: false,  //right
    40: false,  //down
    13: false   //enter
};

//get Index in the map array
function getIndex(x, y){
    return ((y * map.width) +  x);
}

function drawGame(){ //later rename to lvl1
    if(ctx==null){return;}
    var currentFrameTime = Date.now();
    var timeElapsed = currentFrameTime - lastFrameTime;

    culling.update(player.position[0], player.position[1]);
    fillMap();

    moveCharacter(currentFrameTime);
    lastFrameTime = currentFrameTime;
    checkForAction();

    //for testing - flower - exchange, as soon as other characters are added
    if (gameMap[player.tileTo[1] * map.width + player.tileTo[0] - 1] == 9 ||
        gameMap[player.tileTo[1] * map.width + player.tileTo[0] + 1] == 9 ||
        gameMap[player.tileTo[1] * map.width + player.tileTo[0] - map.width] == 9 ||
        gameMap[player.tileTo[1] * map.width + player.tileTo[0] + map.width] == 9 ){
            characterTalk(0); // 0 -- normal chat // else - fight - not implemented
        };

    if (player.tileFrom[1] * map.width + player.tileFrom[0] == map.width * map.height - 1){
        requestAnimationFrame(startLevel);
        return true;
    }
    requestAnimationFrame(drawGame);
}


function startLevel(){
    //IF TIME COOL FADE OUT WITH WAITING SCREEN
    ctx.fillStyle = "darkred"; 
    ctx.fillRect(0, 0, culling.screen[0], culling.screen[1]);

    ctx.fillStyle = "white";
    ctx.font = "20pt Helvetica";
    ctx.fillText("LEVEL " + level, 280, 244);
    ctx.font = "10pt Helvetica";
    ctx.fillText("Press Enter to Continue", 260, 280);
 
    if(keysDown[13]){
        console.log("start next level" + level);
        if(level == 1){
            level++;
            requestAnimationFrame(drawGame);
            return true;
        }
        else if(level == 2){
            requestAnimationFrame(level2);
            return true;

        }
        else if(level > 2){
            alert("This level has not been developed yet");
        }
    }
    requestAnimationFrame(startLevel);
}

function level2(){
    console.log("Congratulation");
    level++; //just exit
    startLevel();

    requestAnimationFrame(level2); 
}

