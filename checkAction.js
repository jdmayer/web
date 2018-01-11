function checkForAction(){
    if (gameMap[getIndex(player.tileTo[0], player.tileTo[1])] == 1){
        var r = Math.random();
        if (r <= 0.1){ //0.20
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
                    textBackground('NoKey'); //got no key to get to next level
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
}

function addItemToBag(pos){
    if (pos == 3){
        item_count++;
        textBackground('ItemFound');
    }
    else if (pos == 31){
        item_key_count++;
        textBackground('ItemFound');
    }
    else if (pos == 32){
        item_stone_count++;
        textBackground('ItemFound');
    }
}
 
function fightAlert(){
    monster = new Monster();
 
    fightMsg = true;
    textBackground('WildMonster');
}

//
//for texts
//
function textBackground(getId){
    text = true;
    if(fight){
        writeText('textBackgroundFight');
        writeText(getId);
    }
    else{
        writeText('textBackgroundConversation');
        writeText(getId);
    }
}

function writeText(getId){ 
    document.getElementById(getId).style.display='block';

    window.addEventListener("keydown",function(e){
        if(e.keyCode == 13){
            document.getElementById(getId).style.display='none';
            console.log("enter");
            text = false;
        }
    });
   // return false;      
}