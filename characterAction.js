/*visited
-1  not visited
1   got advice
2   got item
3   won fight
4   lost fight -> restart
*/
//TODO
//ADD TO EACH FUNCTION
var noMonsterNoFight = false;

function characterMeet(check){
   var pos = player.tileTo[1] * map.width + player.tileTo[0];
   if ((gameMap[pos - 1] == 14 || gameMap[pos - 1]  == 17 ||
       gameMap[pos - map.width]  == 12 || gameMap[pos - map.width]  == 16 ||
       gameMap[pos + 1] == 15 || gameMap[pos + 1]  == 15)
    && visited[gameMap[player.tileTo[1] * map.width + player.tileTo[0]]] != 10)  {
            characterTalk();
   }
}

function characterTalk(){ 
    charMeet = true;
   var pos = player.tileTo[1] * map.width + player.tileTo[0];
   var randChoice;

   if (isWon()){
        text = true;
        currText = 'YouBeatKid';
        showText();
   }

   if(msgNr[gameMap[pos]] == -1){
       randChoice = 12;// Math.floor(Math.random()*13); //change later
       msgNr[gameMap[pos]] = randChoice;
   }
   else{
       randChoice = msgNr[gameMap[pos]];
   }

   if(randChoice < 8){ //random talk
    switch(randChoice){
        case 0: 
            text = true;
            currText = 'chat0';
            showText();
            characterGivesItem();
            break;
        case 1: 
            text = true;
            currText = 'chat1';
            showText();
            break;
        case 2:
            text = true;
            currText = 'chat2';
            showText();
            characterGivesItem();
            break;
        case 3: 
            text = true;
            currText = 'chat3';
            showText();;
            characterGivesItem();
            break;
        case 4:
            text = true;
            currText = 'chat4';
            showText();
            characterGivesItem();
            break;
        case 5: 
            text = true;
            currText = 'chat5';
            showText();
            break;
        case 6:
            text = true;
            currText = 'chat6';
            showText();
            break;
        case 7:
            text = true;
            currText = 'chat7';
            showText();
            break;
    }
    //charMeet = false;
    var visit = gameMap[pos]
    if(keysDown[37] || keysDown[38] || keysDown[39] ||keysDown[40])
        visited[gameMap[pos]] = 1; 
    }
    else if (!isWon())
    {
        //charMeet = false;
        characterFight();
        return true;
    }
}

function characterFight(){
    charFight = true;
    if(monster_index >= 0){
        console.log("here");
        text = true;
        currText = 'KidFight';
        showText();
        var tmp = true; //so that enter can be used only once
        window.addEventListener("keydown",function(e){
            if(tmp  && e.keyCode == 13){
                monster = new Monster();
                tmp = false;
                startFight();
            }
        });
    }
    else{
        text = true;
        currText = 'NoMonster';
        showText();

        item_count = item_count - 3;
        if(item_count < 0)
            item_count = 0;
 
        noMonsterNoFight = true;
    }
}

function characterGivesItem(){
    if(visited[player.tileTo[1] * map.width + player.tileTo[0]] == 2){
        console.log("already got item");
    }
    else{
        audioItem.play();
/*
        text = true;
        currText = 'ItemReceived';
        showText();
*/
        item_count++;
 
        visited[player.tileTo[1] * map.width + player.tileTo[0]] = 2;
        
        audioItem.pause();
    }
}

function initWonMap(){
    for (var i = 0; i < mapSize; i++){
        wonMap[i] = false;
    }
}

function markAsWon(){
    console.log("won");
    wonMap[getIndex(player.tileTo[0], player.tileTo[1])] = true;
}

function isWon(){
    return wonMap[getIndex(player.tileTo[0], player.tileTo[1])];
}
