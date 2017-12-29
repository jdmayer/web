//
//HERE ONLY MAIN FUNCTIONS FOR THE LEVELS CALLING OTHER FUNCS
//

var ctx; //context 
var canvas;

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
    13: false,  //enter
    65: false,  //a
    67: false,  //c
    70: false,  //f
    82: false   //r nicht 
};

var isGameOver = false;
var level = 1;
var actionIsRunning = false;

//index of the monster the player has:
//0 ... they have no monster
//!!
//!!
//1-8: bird, cat, dragon, hedgehog, owl, prince, rose, wolf
// dragon, miau, lavora, iglo, looki, prince (is good), wuff (?)
//!!
//!!
//!!
//!!
//!!
//TODO: we need better names for the little monsters! 

var monster;
var monster_index = 0; //todo: zero in the beginning
var opponent_index = 0;

var item_count = 0;
var chance_of_catching=0.2;
var fight = false;


//get Index in the map array
function getIndex(x, y){
    return ((y * map.width) +  x);
};

function drawGame(){ //later rename to lvl1
    if(ctx==null){return;}
    var currentFrameTime = Date.now();
    var timeElapsed = currentFrameTime - lastFrameTime;

    culling.update(player.position[0], player.position[1]);

    //fill with random trees!
    ctx.fillStyle = "#000000";

    if (!fight && !isGameOver){
        ctx.fillRect(0, 0, culling.screen[0], culling.screen[1]);
        fillMap();
    }

    moveCharacter(currentFrameTime);
    lastFrameTime = currentFrameTime;

    if(characterMeet()){
        console.log("do sthg - talk ...");
        characterTalk(0); //if 0 talk, else wanna fight
    }
    checkForAction();    

    requestAnimationFrame(drawGame);
}

