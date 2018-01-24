function checkForAction(){
    if (gameMap[getIndex(player.tileTo[0], player.tileTo[1])] == 1 && !text){
        var r = Math.random();
        if (r <= 0.2 && !text){
            fightAction = true;
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
        if(level <= 3){
            checkKey();
        }
    }
    else if (gameMap[getIndex(player.tileTo[0], player.tileTo[1])] == 33){
        //healing point
        getText("HP");
        for(var i = 0; i < 9; i++){
            if(caughtMonster[i] == true)
                monsters[i].strength = monsters[i].maxHealth;
        }
    }
    else if(!text){ //can change monster
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

function checkKey(){
    if(item_key_count == 1){
        player = new Character();
        level++;
        startLevel();
    }
    else{
        getText("NoKey");
    }
}