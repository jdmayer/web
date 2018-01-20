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
var explanation = false;

var text = false;
var currText;
var currBG;

var monsterImg = [bird, cat, dragon, hedgehog, owl, prince, rose, wolf, tree_moni];
var monsterImgBack = [bird_back, cat_back, dragon_back, hedgehog_back, 
                      owl_back, prince_back, rose_back, wolf_back, tree_moni_back];
//var monsterIcon = [bird_grey, cat_grey, dragon_grey, hedgehog_grey, owl_grey, prince_grey, rose_grey, wolf_grey, tree_moni_grey];
var monsterGrey = [bird_grey, cat_grey, dragon_grey, hedgehog_grey, owl_grey, prince_grey, rose_grey, wolf_grey, tree_moni_grey];
var monsterName = ["Dax", "Flace", "Lavora", "Iglo", "Looki", "Prince", "Intestria", "Furry", "Tree"];

//for?
var caughtMonster = ["false", "false", "false", "false", "false", "false", "false", "false", "false"];

//to save various monsters
var monsterLvl = ["0", "0", "0", "0", "0", "0", "0", "0", "0"];
var monsterStrength = ["0", "0", "0", "0", "0", "0", "0", "0", "0"];

var monster;
var monster_index = -1; 

//for character interaction
var charFight = false;
var charMeet = false;

var mapSize = map.width * map.height;
var gameMap = new Array(mapSize);

var wonMap = new Array(mapSize);

var visited = new Array(mapSize);
var msgNr = new Array(mapSize);
for(var i = 0; i < mapSize; i++){
    visited[i] = -1;
    msgNr[i] = -1;
}

var item_count = 0;
var item_key_count = 0;
var item_stone_count = 0;
var chance_of_catching = 0.2;
var caught = false;
var firstAction = false;
var lost = false;
var endingFight = false;

var fight = false;
var fightMsg = false;


//get Index in the map array
function getIndex(x, y){
    return ((y * map.width) +  x);
};

function drawGame(){ 
    if(ctx==null){return;}
    var currentFrameTime = Date.now();
    var timeElapsed = currentFrameTime - lastFrameTime;

    culling.update(player.position[0], player.position[1]);

    ctx.fillStyle = "#000000";

    if (!fight &&  !isLevelScreen && !isGameOver){
        ctx.fillRect(0, 0, culling.screen[0], culling.screen[1]);
        fillMap();
        characterMeet();
    }

    moveCharacter(currentFrameTime);
    //console.log(text + " - " + fight);
    lastFrameTime = currentFrameTime;


    requestAnimationFrame(drawGame);
}

