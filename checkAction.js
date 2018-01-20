function checkForAction(){
    if (gameMap[getIndex(player.tileTo[0], player.tileTo[1])] == 1 && !text){
        var r = Math.random();
        if (r <= 0.3 && !text){ //0.20
           // console.log("found monster");
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
                    //textBackground('NoKey'); //got no key to get to next level
                    text = true;
                    currText = 'NoKey';
                    showText();
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
        text = true;
        currText = 'ItemFound';
        showText();
    }
    else if (pos == 31){
        item_key_count++;
        text = true;
        currText = 'ItemFound';
        showText();
    }
    else if (pos == 32){
        item_stone_count++;
        text = true;
        currText = 'ItemFound';
        showText();
    }
}
 
function fightAlert(){
    monster = new Monster();
    fightMsg = true;
    getText("WildMonster");
}

function showText(){
    if(fight){
        currBG = 'textBackgroundFight';
        document.getElementById(currBG).style.display='block';
    }
    else{
        currBG = 'textBackgroundConversation';
        document.getElementById(currBG).style.display='block'; 
    }
    document.getElementById(currText).style.display='block'; 
   // console.log("f: / t: " + fight + text + currText);
}

function getText(msg){
    currText = msg;
    text = true;
    console.log('getText: ' + text + msg);
    showText();
}