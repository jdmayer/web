function checkForAction(){
    if (gameMap[getIndex(player.tileTo[0], player.tileTo[1])] == 1 && !text){
        var r = Math.random();
        if (r <= 0.2 && !text){ //0.20
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
        text = true;
        currText = 'chat5';
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
    text = true;
    currText = 'WildMonster';
    showText();
}

//
//for texts
/*
function textBackground(){
    if(fight){
        document.getElementById('textBackgroundFight').style.display = 'block';

        writeText('textBackgroundFight', callback);

    }
    else{
        writeText('textBackgroundConversation', callback);
        writeText(getId, callback);
    }
}

function writeText(getId, callback){ 
    document.getElementById(getId).style.display='block';

   /* window.addEventListener("keydown",(e)=>{
        if(e.keyCode == 13){
            document.getElementById(getId).style.display='none';
            console.log("enter");
            text = false;
            window.removeEventListener("keydown", this, true);
            cb();
        }
        console.log("fuck");
    });/
    document.getElementById(getId).style.display='none';
    text = false;
    return false;      
}
*/

function showText(){
    if(fight){
        console.log("here");
        currBG = 'textBackgroundFight';
        document.getElementById(currBG).style.display='block';
    }
    else{console.log("there");
        currBG = 'textBackgroundConversation';
        document.getElementById(currBG).style.display='block'; 
    }
    console.log('show'+text);
    document.getElementById(currText).style.display='block'; 
}