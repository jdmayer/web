function checkForAction(){
    if (gameMap[getIndex(player.tileTo[0], player.tileTo[1])] == 1){
        var r = Math.random();

        if (r <= 0.0){ //0.20
            if(!fight){
                fight = true;
                fightAlert();
            }          
        }
    }
    else if (gameMap[getIndex(player.tileTo[0], player.tileTo[1])] == 3 ||
            gameMap[getIndex(player.tileTo[0], player.tileTo[1])] == 31 ||
            gameMap[getIndex(player.tileTo[0], player.tileTo[1])] == 32){
        
        addItemToBag(gameMap[getIndex(player.tileTo[0], player.tileTo[1])]);
        gameMap[getIndex(player.tileTo[0],player.tileTo[1])] = 0;
    }
    else if (gameMap[getIndex(player.tileTo[0], player.tileTo[1])] == 20){
        player = new Character();
        switch(level){
            case 1:
                level++;
                startLevel();
                break;
            case 2:
                level++;
                startLevel();
                break;
            case 3:
                //level++;
                startLevel();
                break;
        }
    }
}

function addItemToBag(pos){
    console.log("add_item");
    if (pos == 3){
        item_count++;
    }
    else if (pos == 31){
        item_key_count++;
    }
    else if (pos == 32){
        item_stone_count++;
    }
}
 
function fightAlert(){
    monster = new Monster();
    //ownMonster = new Monster();
    monster.getLevel();
 
    fightMsg = true;
    ctx.fillStyle = "white";
    ctx.fillRect(180, 150, 300, 200);
    ctx.fillStyle = "darkred";
    ctx.fillText("A wild " + monsterName[monster.index] + " appears!  ▼", 260, 260);
}