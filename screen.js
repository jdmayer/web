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

function fillMap(){
    var img = new Image();

    //fill with random trees!
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, culling.screen[0], culling.screen[1]);

    for(var y = culling.startTile[1]; y <= culling.endTile[1]; y++){
        for(var x = culling.startTile[0]; x <= culling.endTile[0]; x++){ 
            switch(gameMap[((y*map.width)+x)]){
                case 0:
                    img.src = back.src;
                    break;
                case 1:
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
            ctx.drawImage(img,culling.offset[0] + x*tile.width,
                culling.offset[1] + y*tile.height,tile.width,tile.height);
        }
    }
    ctx.fillStyle = "#b9f2cf";

    //player
    ctx.drawImage(player_character, culling.offset[0] + player.position[0], 
                  culling.offset[1] + player.position[1],
                  player.dimensions[0], player.dimensions[1]);

    ctx.fillStyle = "darkred";
    ctx.fillText("Timer ", 20, 20);
}

