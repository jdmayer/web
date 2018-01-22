function checkForAction(){
    if (gameMap[getIndex(player.tileTo[0], player.tileTo[1])] == 1 && !text){
        var r = Math.random();
        if (r <= 1.0 && !text){ //0.20
            if(!fight){
                fightAlert();
            }          
        }
    }
    //find special items
    else if (gameMap[getIndex(player.tileTo[0], player.tileTo[1])] == 3 ||
            gameMap[getIndex(player.tileTo[0], player.tileTo[1])] == 31 ||
            gameMap[getIndex(player.tileTo[0], player.tileTo[1])] == 32){
        addItemToBag(gameMap[getIndex(player.tileTo[0], player.tileTo[1])]);
        gameMap[getIndex(player.tileTo[0],player.tileTo[1])] = 0;
    }
    //exit
    else if (gameMap[getIndex(player.tileTo[0], player.tileTo[1])] == 20){
        switch(level){
            case 1:
                if(item_key_count == 1){
                    player = new Character();
                    level++;
                    startLevel();
                }
                else{
                    getText("NoKey");
                }
                break;
            case 2:
                player = new Character();
                level++;
                startLevel();
                break;
            case 3:
                //level++;
                player = new Character();
                startLevel();
                break;
        }
    }
    else if(!text){console.log("change"); //can change monster
         changeMonster();
    }
}

function addItemToBag(pos){
    if (pos == 3){
        item_count++;
    }
    else if (pos == 31){
        item_key_count++;
    }
    else if (pos == 32){
        item_stone_count++;
    }
    getText("ItemFound");
}
 
function fightAlert(){
    monster = new Monster();
    fightMsg = true;
    getText("WildMonster");
}
