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

function characterMeet(){
   var pos = player.tileTo[1] * map.width + player.tileTo[0];
   if ((gameMap[pos - 1] == 14 || gameMap[pos - 1]  == 17 ||
       gameMap[pos - map.width]  == 12 || gameMap[pos - map.width]  == 16 ||
       gameMap[pos + 1] == 15 || gameMap[pos + 1]  == 15))  {
           charInteraction = true;
           characterTalk();
   }
}

function characterTalk(){ 
   var pos = player.tileTo[1] * map.width + player.tileTo[0];
   var randChoice;
   var message;
<<<<<<< Updated upstream
 
   ctx.fillStyle = "white";
   ctx.fillRect(100, 100, 450, 300);
   ctx.fillStyle = "darkred";
   if (isWon()){
        ctx.fillText("Good fight, but next time I will win!", 220, 230);
   }
   else if(visited[gameMap[pos]] != 1){
       ctx.fillText("Hey you!", 290, 230);
   }
   else {
       ctx.fillText("As I said: ", 290, 230);
   }
=======
>>>>>>> Stashed changes

   //so it shows the same reaction when coming back
   if(msgNr[gameMap[pos]] == -1){
       randChoice = 12; //Math.floor(Math.random() * 16);
       msgNr[gameMap[pos]] = randChoice;
      // console.log("new");
   }
   else{
       randChoice = msgNr[gameMap[pos]];
     //  console.log("old");
   }
   //console.log(randChoice);

   //
   //RANDOM CHOICE BETWEEN ID NAMES -> FOR CANVAS!!
   //

   if(randChoice < 12){ //random talk
    switch(randChoice){
        case 0: 
            textBackground('chat0');
            characterGivesItem();
            break;
        case 1: 
            textBackground('chat1');
            break;
        case 2:
            textBackground('chat2');
            characterGivesItem();
            break;
        case 3: 
            textBackground('chat3');
            characterGivesItem();
            break;
        case 4:
            textBackground('chat4');
            characterGivesItem();
            break;
        case 5: 
            textBackground('chat5');
            break;
        case 6:
            textBackground('chat6');
            break;
        case 7:
            textBackground('chat7');
            characterGivesItem();
            break;
    }
    var visit = gameMap[pos]
    if(keysDown[37] || keysDown[38] || keysDown[39] ||keysDown[40])
        visited[gameMap[pos]] = 1; 
    }
    else if (!isWon())
    { //talk before a fight
        characterFight();
        return true;
    }
}

function characterFight(){
    charFight = true;
    if(monster_index >= 0){
        console.log("here");
        textBackground('KidFight');

        window.addEventListener("keydown",function(e){
            if(fight  && e.keyCode == 13){
                monster = new Monster();
                startFight();
            }
        });
    }
    else{
        textBackground('NoMonster');
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
        textBackground('ReceiveItem');
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
