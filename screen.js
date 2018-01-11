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
    }
 
};

function fillMap(){
    audioBackground.play();

    fillBackground();
    moveImage(); //"Walking"

    fillItemCount();
    fillCaughtMonsters();

}

function fillBackground(){
    var img = new Image();
    
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, culling.screen[0], culling.screen[1]);
    ctx.fillStyle = "#b9f2cf";

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
                    img.src = trail1.src; //horizontal
                    break;
                    case 5:
                    img.src = trail2.src; //vertical
                    break;
                case 6:
                    img.src = trail3.src; //left - down
                    break;
                case 7:
                    img.src = trail4.src; //left - up
                    break;
                case 8:
                    img.src = trail5.src; //up - right
                    break;
                case 9:
                    img.src = trail6.src; //down - right
                    break;
                case 10:
                    img.src = tree1.src;
                    break;
                case 11:
                    img.src = tree2.src;
                    break;
                //
                //characters
                //
                case 12:
                    img.src = other1_character.src; //front
                    break;
                case 13:
                    img.src = other2_character.src; //left
                    break;
                case 14:
                    img.src = other3_character.src; //right
                    break;
                case 15:
                    img.src = other4_character.src; //left
                    break;
                case 16:
                    img.src = other5_character.src; //front
                    break;
                case 17:
                    img.src = other6_character.src; //right
                    break;
                //
                //next level
                //
                case 20:
                    img.src = next_level.src;
                    break; 
                // 
                //water 
                // 
                case 21: 
                    img.src = water1.src; 
                    break; 
                case 22: 
                    img.src = water2.src; 
                    break; 
                case 23: 
                    img.src = water3.src; 
                    break; 
                case 24: 
                    img.src = water4.src; 
                    break; 
                case 25: 
                    img.src = water5.src; 
                    break; 
                    case 26: 
                    img.src = water6.src; 
                    break; 
                case 27: 
                    img.src = water7.src; 
                    break; 
                case 28: 
                    img.src = water8.src; 
                    break; 
                case 29: 
                    img.src = water9.src; 
                    break; 
                case 30: 
                    img.src = stone.src; 
                    break; 
                case 31: 
                    img.src = item_key.src; 
                    break; 
                case 32: 
                    img.src = item_stone.src; 
                    break; 
            }
            ctx.drawImage(img, culling.offset[0] + x*tile.width,
                culling.offset[1] + y*tile.height,tile.width,tile.height);
            
            //top border
            ctx.fillStyle = "darkred";
            ctx.fillRect(0,0, culling.screen[0], 40);
            //bottom border
            ctx.fillStyle = "darkred";
            ctx.fillRect(0,culling.screen[1]-39, culling.screen[0], 40);
        }
    }
    ctx.fillStyle = "#b9f2cf";
}

function fillItemCount(){
    ctx.fillStyle = "white";
    ctx.drawImage(item2, 0, -5, 50, 50);
    ctx.fillText(item_count, 50, 25);

    ctx.drawImage(item_key2, 70, -5, 50, 50);
    ctx.fillText(item_key_count , 120, 25);

    ctx.drawImage(item_stone2, 140, -5, 50, 50);
    ctx.fillText(item_stone_count , 190, 25);
}

function fillCaughtMonsters(){
    ctx.fillStyle = "white";

    var tmpImgMon = [40, 110, 180, 250, 320, 390, 460, 530, 600];

    for(var i = 0; i < 9; i++){
        if(caughtMonster[i] == "true"){
            ctx.fillText(i, tmpImgMon[i] - 10, 475);
            ctx.drawImage(monsterImg[i], tmpImgMon[i], 453, 30, 30);
            ctx.fillText(monsterLvl[i], tmpImgMon[i] + 30, 485);
        }
        else{ //prob ALL black so you dont know what they look like/ or "?" :)
            ctx.drawImage(monsterGrey[i], tmpImgMon[i], 453, 30, 30);
        }
    }
}


