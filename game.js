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

//for culling (bigger map than initially shown)
var culling = {
    screen: [0,0], 
    startTile: [0,0],   //top left, visible
    endTile: [0,0],     //bottom right, visible
    offset: [0,0],      //keep distance, not loose screen

    update: function(px, py){
        this.offset[0] = Math.floor((this.screen[0]/2) - px);
        this.offset[1] = Math.floor((this.screen[1]/2) - py);

        var tiles = [Math.floor(px / tile.width), 
                     Math.floor(py / tile.height)];

        this.startTile[0] = tiles[0] - 1 - Math.ceil((this.screen[0] / 2) / tile.width);
        this.startTile[1] = tiles[1] - 1 - Math.ceil((this.screen[1] / 2) / tile.height);

        if(this.startTile[0] < 0) {
            this.startTile[0] = 0;
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
    }

};

function Character() {
    this.tileFrom = [1,1];
    this.tileTo = [1,1];
    this.timeMoved = 0;
    this.dimensions = [30,30];
    this.position = [45,45];
    this.delayMove = 700; //howlong it takes the char to move over 1 tile
};

Character.prototype.placeAt = function(x, y) {
    this.tileFrom = [x, y];
    this.tileTo = [x, y];
    this.position = [((tile.width * x) + ((tile.width - this.dimensions[0])/2)),
                     ((tile.height * y) + ((tile.height-this.dimensions[1])/2))]
};

Character.prototype.moves = function(t){
    //if the character moves
    //doesn't move
    if(this.tileFrom[0] == this.tileTo[0] &&
        this.tileFrom[1] == this.tileTo[1]){
            return false;
        } 
    //moves
    if((t-this.timeMoved) >= this.delayMove){
        this.placeAt(this.tileTo[0], this.tileTo[1]);
    }
    else {
        this.position[0] = (this.tileFrom[0] * tile.width) + 
                            ((tile.width - this.dimensions[0])/2);
        this.position[1] = (this.tileFrom[1] * tile.height) +
                            ((tile.height - this.dimensions[1])/2);

        //moving horizontally
        if(this.tileTo[0] != this.tileFrom[0]){
            var diff = (tile.width / this.delayMove) *
                    (t - this.timeMoved);
            this.position[0] += (this.tileTo[0] < this.tileFrom[0] ? 
                    0 - diff : diff)
        }

        //moving vertically
        if(this.tileTo[1] != this.tileFrom[1]){
            var diff = (tile.height / this.delayMove) *
                        (t - this.timeMoved);
            this.position[1] += (this.tileTo[1] < this.tileFrom[1] ?
                        0 - diff : diff);
        }

        this.position[0] = Math.round(this.position[0]);
        this.position[1] = Math.round(this.position[1]);
    }

    //some movement has been done
    return true;

};

function getIndex(x, y){
    return ((y * map.width) +  x);
}

function drawGame(){
    if(ctx==null){return;}
 
    var sec = Math.floor(Date.now()/1000); 
    if(sec!=currentSecond){ //if not matching 
        currentSecond = sec; 
        framesLastSecond = frameCount; 
        frameCount = 1; 
    } else {  
        frameCount++; 
    } 

    var currentFrameTime = Date.now();
    var timeElapsed = currentFrameTime - lastFrameTime;

    if(!player.moves(currentFrameTime)) {
        //up
        if(keysDown[38] && player.tileFrom[1] > 0 &&
            gameMap[getIndex(player.tileFrom[0],
                player.tileFrom[1]-1)]==1){
                    player.tileTo[1] -= 1;
        }
        //down
        else if(keysDown[40] && player.tileFrom[1] < (map.height - 1) &&
                gameMap[getIndex(player.tileFrom[0],
                        player.tileFrom[1]+1)] == 1){
                    player.tileTo[1] += 1;
        }
        //left arrow
        else if(keysDown[37] && player.tileFrom[0] > 0 &&
            gameMap[getIndex(player.tileFrom[0] - 1,
                player.tileFrom[1])] == 1){
            player.tileTo[0] -= 1;
        }
        //right
        else if(keysDown[39] && player.tileFrom[0] < (map.width - 1) &&
                gameMap[getIndex(player.tileFrom[0] + 1,
                        player.tileFrom[1])] == 1){
                    player.tileTo[0] += 1;
        }
        if(player.tileFrom[0] != player.tileTo[0] || player.tileFrom[1] != player.tileTo[1]){
            player.timeMoved = currentFrameTime;
        }
    }

    //culling
    culling.update(
        player.position[0] + (player.dimensions[0] / 2), 
        player.position[1] + (player.dimensions[1] / 2)
    );

    ctx.fillStyle = "#000000";
    ctx.fillRect(9,0, culling.screen[0], culling.screen[1]);



    //drawing map
    for(var y = culling.startTile[1]; y <= culling.endTile[1]; y++){
        for(var x = culling.startTile[0]; x <= culling.endTile[0]; x++){ 
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
            ctx.fillRect(culling.offset[0] + x*tile.width,
                         culling.offset[1] + y*tile.height,tile.width,tile.height);
    
        }
    }
    ctx.fillStyle = "#0000ff";
    //player
    ctx.fillRect(culling.offset[0] + player.position[0], 
                 culling.offset[1] + player.position[1],
                 player.dimensions[0], player.dimensions[1]);
    

    ctx.fillStyle = "#ff0000";
    ctx.fillText("Timer ", 20, 20);

    lastFrameTime = currentFrameTime;
    //when ready to call function again -> levels later
    requestAnimationFrame(drawGame);
}