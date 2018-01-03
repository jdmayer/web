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
    40: false  //down
};

var isGameOver = false;
var level = 1;
var actionIsRunning = false;
var isLevelScreen= true;

var monsterImg = [bird, cat, dragon, hedgehog, owl, prince, rose, wolf];
var monsterImgBack = [bird_back, cat_back, dragon_back, hedgehog_back, 
                      owl_back, prince_back, rose_back, wolf_back];
var monsterName = ["Dax", "Flace", "Lavora", "Iglo", "Looki", "Prince", "Intestria", "Furry"];

var monster;
var monster_index = 0; 


//for character interaction - prob not needed
var charFight = false;
var charInteraction = false;
var charVisited = [0];
var charTalking = false;

var item_count = 0;
var chance_of_catching = 0.2;
var fight = false;
var fightMsg = false;


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

    if (!fight &&  !isLevelScreen && !isGameOver){
        ctx.fillRect(0, 0, culling.screen[0], culling.screen[1]);
        fillMap();
    }

    moveCharacter(currentFrameTime);
    lastFrameTime = currentFrameTime;

    characterMeet();

    requestAnimationFrame(drawGame);
}

