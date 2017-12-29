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
    37: false, //left
    38: false, //up
    39: false, //right
    40: false  //down
};

//call character
var player = new Character();

var isgameover = false;
var level = 1;
var actionIsRunning = false;

//index of the monser the player has:
//0 ... they have no monster
//1-8: bird, cat, dragon, hedgehog, owl, prince, rose, wolf

//TODO: we need better names for the little monsters! 

var monster_index = 3; //todo: zero in the beginning
var opponent_index = 0;

var item_count = 0;
var chance_of_catching=0.2;

//bool so that you can't move when you fight
var fight = false;


//for culling (bigger map than initially shown)
var culling = {   
    screen: [0,0], 
    startTile: [0,0],   //top left, visible
    endTile: [map.width - 1, map.height - 1],     //bottom right, visible
    offset: [0,0],      //to keep in the middle of the screen

    update: function(px, py){
        this.offset[0] = Math.floor((this.screen[0]/2) - px);
        this.offset[1] = Math.floor((this.screen[1]/2) - py);

        var tiles = [Math.floor(px / tile.width), Math.floor(py / tile.height)];

    /* //NOT NEEDED - it draws when it comes on screen 
        //saves spaces - BUT our maps are NOT so large to pay this off
        //delete if not needed on finishing the game

        this.startTile[0] = tiles[0] - Math.ceil((this.screen[0] / 2) / tile.width);
        this.startTile[1] = tiles[1] - Math.ceil((this.screen[1] / 2) / tile.height);

        if(this.startTile[0] < 0) {
            this.startTile[0] = 0; console.log("hi");
        }
        if(this.startTile[1] < 0) {
            this.startTile[1] = 0;
        }

        this.endTile[0] = tiles[0] + 1 + Math.ceil((this.screen[0] / 2) / tile.width);
        this.endTile[1] = tiles[1] + 1 + Math.ceil((this.screen[1] / 2) / tile.height);

        if(this.endTile[0] >= map.width){
            this.endTile[0] = map.width - 1;
        }
        if(this.endTile[1] >= map.height){
            this.endTile[1] = map.height - 1;
        }
        */

        //replaced with same outcome - endtile instead of 0 -> map.height/width -1
    }

};

function Character() {
    this.tileFrom = [1,1];
    this.tileTo = [1,1];
    this.timeMoved = 0;
    this.dimensions = [30,30];
    this.position = [45,45];
    this.speed = 200; 
    //after testing change speed
};

Character.prototype.placeAt = function(x, y) {
    this.tileFrom = [x, y];
    this.tileTo = [x, y];
    this.position = [((tile.width * x) + ((tile.width - this.dimensions[0])/2)),
                     ((tile.height * y) + ((tile.height-this.dimensions[1])/2))]
                                         //to be in the middle of a tile
};

Character.prototype.moves = function(t){
    //doesn't move
    if(this.tileFrom[0] == this.tileTo[0] && this.tileFrom[1] == this.tileTo[1]){
            return false;
    }

    //moved
    if((t - this.timeMoved) >= this.speed){
        this.placeAt(this.tileTo[0], this.tileTo[1]);
        //t is currentTimeFrame
        //timeMoved gets currentTimeFrame after move
        //places character
    }
    //moves
    else {
        this.position[0] = (this.tileFrom[0] * tile.width) + ((tile.width - this.dimensions[0])/2);
        this.position[1] = (this.tileFrom[1] * tile.height) + ((tile.height - this.dimensions[1])/2);

        //moving horizontally
        if(this.tileTo[0] != this.tileFrom[0]){
            var diff = (tile.width / this.speed) * (t - this.timeMoved);
            this.position[0] += (this.tileTo[0] < this.tileFrom[0] ? 0 - diff : diff)
        }

        //moving vertically
        if(this.tileTo[1] != this.tileFrom[1]){
            var diff = (tile.height / this.speed) * (t - this.timeMoved);
            this.position[1] += (this.tileTo[1] < this.tileFrom[1] ? 0 - diff : diff);
        }

        //could be needed with smaller tiles
        //delete if not needed after last testing!!
        this.position[0] = Math.round(this.position[0]);
        this.position[1] = Math.round(this.position[1]);
    }
    return true;
};

//get Index in the map array
function getIndex(x, y){
    return ((y * map.width) +  x);
};

function drawGame(){
    if(ctx==null){return;}

    //delete if not needed!
    var sec = Math.floor(Date.now()/1000); 
    if(sec!=currentSecond){  
        currentSecond = sec; 
        framesLastSecond = frameCount; 
        frameCount = 1; 
    } else {  
        frameCount++; 
    } 
    //-------------------

    var currentFrameTime = Date.now();
    var timeElapsed = currentFrameTime - lastFrameTime;

    moveCharacter(currentFrameTime);

    culling.update(player.position[0], player.position[1]);

    //fill with random trees!
    ctx.fillStyle = "#000000";

    if (!fight && !isgameover){
        ctx.fillRect(0, 0, culling.screen[0], culling.screen[1]);
        fillMap();
    }

    lastFrameTime = currentFrameTime;

    //when ready to call function again -> levels later
    requestAnimationFrame(drawGame);
};

function fillMap(){
    var img = new Image();

    for(var y = culling.startTile[1]; y <= culling.endTile[1]; y++){
        for(var x = culling.startTile[0]; x <= culling.endTile[0]; x++){ 
            switch(gameMap[((y*map.width)+x)]){
                case 0:
                    //ctx.fillStyle = "#999999";
                    img.src = back.src;
                    break;
                case 1:
                    //ctx.fillStyle = "#eeeeee";
                    img.src = grass.src;
                    break;
                case 2:
                    img.src = flower.src;
                    break;
                case 3:
                    img.src = item.src;
                    break;
                case 4:
                    img.src = trail1.src;
                    break;
                case 5:
                    img.src = trail2.src;
                    break;
                case 6:
                    img.src = trail3.src;
                    break;
                case 7:
                    img.src = trail4.src;
                    break;
                case 8:
                    img.src = trail5.src;
                    break;
                case 9:
                    img.src = trail6.src;
                    break;
                case 10:
                    img.src = tree1.src;
                    break;
                case 11:
                    img.src = tree2.src;
                    break;
                case 20:
                    img.src = next_level.src;
            }
            //ctx.fillRect(culling.offset[0] + x*tile.width,
            //             culling.offset[1] + y*tile.height,tile.width,tile.height);
            ctx.drawImage(img,culling.offset[0] + x*tile.width,
                culling.offset[1] + y*tile.height,tile.width,tile.height);
        }
    }
    ctx.fillStyle = "#b9f2cf";
    
    //player
    ctx.drawImage(player_character, culling.offset[0] + player.position[0], 
                  culling.offset[1] + player.position[1],
                  player.dimensions[0], player.dimensions[1]);

    ctx.fillStyle = "#ff0000";
    ctx.fillText("Timer ", 20, 20);
}

function moveCharacter(currentFrameTime){
    if(!player.moves(currentFrameTime)) {
        //up
        if(keysDown[38] && player.tileFrom[1] > 0 &&
            (gameMap[getIndex(player.tileFrom[0],
                    player.tileFrom[1]-1)] <= 9 ||
            gameMap[getIndex(player.tileFrom[0],
                    player.tileFrom[1]-1)] == 20)
            && !fight){
            player.tileTo[1] -= 1;
            checkForAction();
        }
        //down
        else if(keysDown[40] && player.tileFrom[1] < (map.height - 1) &&
                (gameMap[getIndex(player.tileFrom[0],
                        player.tileFrom[1]+1)] <= 9 ||
                gameMap[getIndex(player.tileFrom[0],
                        player.tileFrom[1]+1)] == 20)
                && !fight){
            player.tileTo[1] += 1;
            checkForAction();
        }
        //left
        else if(keysDown[37] && player.tileFrom[0] > 0 &&
            (gameMap[getIndex(player.tileFrom[0] - 1,
                    player.tileFrom[1])] <= 9 ||
            gameMap[getIndex(player.tileFrom[0] - 1,
                    player.tileFrom[1])] == 20)
            && !fight){
            player.tileTo[0] -= 1;
            checkForAction();
        }
        //right
        else if(keysDown[39] && player.tileFrom[0] < (map.width - 1) &&
                (gameMap[getIndex(player.tileFrom[0] + 1,
                        player.tileFrom[1])] <= 9 || 
                gameMap[getIndex(player.tileFrom[0] + 1,
                            player.tileFrom[1])] == 20)
            && !fight){
            player.tileTo[0] += 1;
            checkForAction();
        }

        if(player.tileFrom[0] != player.tileTo[0] || player.tileFrom[1] != player.tileTo[1]){
            player.timeMoved = currentFrameTime;
        }
    }
}

function checkForAction(){
    if (gameMap[getIndex(player.tileTo[0],
                player.tileTo[1], player)]==1){
        var r = Math.random();
        if (r<=0.3){
            fight = true;
            startFight();
        }
    }
    else if (gameMap[getIndex(player.tileTo[0],
                    player.tileTo[1], player)]==3){
        gameMap[getIndex(player.tileTo[0],
        player.tileTo[1], player)]=0;
        addItemToBag();
    }
    else if (gameMap[getIndex(player.tileTo[0],
                    player.tileTo[1], player)]==20){
        //next level:
        player = new Character();
        if (level = 1){
            gameMap = gameMap_level2;
            level++;
        }
        else if(level = 2){
            gameMap = gameMap_level3;
            level++;
        }
        else if (level = 3){
            //TODO!
        }

    }
};

function addItemToBag(){
    item_count++;
    //TODO: little message that item has been added to bag?
}

function startFight(){
    drawBackground();
    drawOpponent();
    drawOptions();
}

function drawBackground(){
    ctx.font = "15px Arial";
    ctx.fillStyle = "black";

    if (monster_index==0){
        //player has no monster
        ctx.drawImage(fight2, 0, 0, 650, 488);    
    }
    else{
        //player has monster
        ctx.drawImage(fight1, 0, 0, 650, 488);
        ctx.fillText("Do you want to attack? - Press A",50,415); 
        switch(monster_index){
            case 1:
                ctx.drawImage(bird_back,400,220,150,150);
                break;
            case 2:
                ctx.drawImage(cat_back,400,220,150,150);
                break;
            case 3:
                ctx.drawImage(dragon_back,400,220,150,150);
                break;
            case 4:
                ctx.drawImage(hedgehog_back,400,220,150,150);
                break;
            case 5:
                ctx.drawImage(owl_back,400,220,150,150);
                break;
            case 6:
                ctx.drawImage(prince_back,400,220,150,150);
                break;
            case 7:
                ctx.drawImage(rose_back,400,220,150,150);
                break;
            case 8:
                ctx.drawImage(wolf_back,400,220,150,150);
                break;
        };
    };


}

function drawOptions(){
    ctx.fillText("Do you want to try to catch the little monster? - Press C",50,430); 
    ctx.fillText("Do you want to feed the little monster? - Press F",50,445); 
    ctx.fillText("Do you want to run away? - Press R",50,460); 
}

function drawOpponent(){
    //opponent:
    var r=Math.random();
    if (r < 0.1){
        ctx.drawImage(bird,140,10,140,140);
        opponent_index = 1;
    }
    else if(r < 0.2){
        ctx.drawImage(cat,140,10,140,140);
        opponent_index = 2;
    }
    else if(r < 0.3){
        ctx.drawImage(dragon,140,10,140,140);
        opponent_index = 3;
    }
    else if(r < 0.4){
        ctx.drawImage(hedgehog,140,10,140,140);
        opponent_index = 4;
    }
    else if(r < 0.5){
        ctx.drawImage(owl,140,10,140,140);
        opponent_index = 5;
    }
    else if(r < 0.6){
        ctx.drawImage(prince,140,10,140,140);
        opponent_index = 6;
    }
    else if(r < 0.7){
        ctx.drawImage(rose,140,10,140,140);
        opponent_index = 7;
    }
    else if(r < 1){
        ctx.drawImage(wolf,140,10,140,140);
        opponent_index = 8;
    }
}

function runAway(){
    actionIsRunning = true;
    var r = Math.random();
    if (r <= 0.4){
        fight=false;
    }
    else{
        ctx.strokeStyle="red";
        ctx.fillStyle = "white";
        ctx.fillRect(435,420,185,30);
        ctx.strokeText("The monster stopped you!",445,435);
        setTimeout(monsterAttacks,3000);
    }
    actionIsRunning = false;
}

function feedMonster(){
    actionIsRunning = true;
    ctx.strokeStyle="red";
    ctx.fillStyle = "white";
    ctx.fillRect(435,420,185,30);
    ctx.strokeText("It is eating...",445,435);
    chance_of_catching += 0.1;
    setTimeout(monsterAttacks,3000);
    actionIsRunning = false;
}

function catchMonster(){
    actionIsRunning = true;
    var r = Math.random();
    
    ctx.strokeStyle="red";
    ctx.fillStyle = "white";
    ctx.fillRect(435,420,185,30);
    ctx.strokeText("You threw a net...",445,435);

    if (r <= chance_of_catching){
        monster_index = opponent_index;
        setTimeout(endFight, 3000);
    }
    else{
        setTimeout(monsterAttacks,3000);
    }
    actionIsRunning = false;
}

function attackMonster(){
    actionIsRunning = true;
    var r = Math.random();
    
    ctx.strokeStyle="red";
    ctx.fillStyle = "white";
    ctx.fillRect(435,420,185,30);
    ctx.strokeText("They are fighting!",445,435);

    if (r <= 0.5){
        setTimeout(endFight, 3000);
    }
    else{
        setTimeout(monsterAttacks,3000);
    }
    actionIsRunning = false;
}

function monsterAttacks(){
    r = Math.random();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "white";
    ctx.fillRect(435,420,185,30);
    ctx.strokeText("It attacked you!",445,435);
    setTimeout(function(){
                            if (!isgameover){    
                                ctx.fillStyle = "white";
                                ctx.fillRect(435,420,185,30);
                                ctx.fillStyle = "black";
                                ctx.fillText("What do you want to do?",445,435);
                            }
                            
                         },2000);
    
    if (r < 0.2 ){
        setTimeout(gameOver,2000);
    }
}

function endFight(msg){
    ctx.strokeStyle="red";
    ctx.fillStyle = "white";
    ctx.fillRect(50,390,530,80);
    ctx.font = "18px Arial";
    ctx.strokeText("Y O U    W O N   !",50,435);
    setTimeout(function(){fight = false;},2000);
}

function gameOver(){
    isgameover = true;
    ctx.fillStyle="black";
    ctx.fillRect(0,0,650,488);
    ctx.strokeText("GAME OVER",300,300);
}