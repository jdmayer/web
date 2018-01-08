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
 
   ctx.fillStyle = "white";
   ctx.fillRect(100, 100, 450, 300);
   ctx.fillStyle = "darkred";
   if(visited[gameMap[pos]] != 1){
       ctx.fillText("Hey you!", 290, 230);
   }
   else {
       ctx.fillText("As I said: ", 290, 230);
   }

   //so it shows the same reaction when coming back
   //TODO - EVERY CHARA SAME! 
   if(msgNr[gameMap[pos]] == -1){
       randChoice = Math.floor(Math.random() * 16);
       msgNr[gameMap[pos]] = randChoice;
      // console.log("new");
   }
   else{
       randChoice = msgNr[gameMap[pos]];
     //  console.log("old");
   }
   //console.log(randChoice);

   if(randChoice < 12){ //random talk
    switch(randChoice){
        case 0: 
            message = "There are sting nettles and I wear shorts."
            ctx.fillText(message, 200, 270);
            break;
        case 1:
            message = "Some people will give you items, if you talk to them."
            ctx.fillText(message, 180, 270);
            characterGivesItem();
            break;
        case 2: 
            message = "I am a nobody, nobody is perfect, therefore I am perfect."
            ctx.fillText(message, 180, 270);
            break;
        case 3:
            message = "If live gives you lemons. You got lemons."
            ctx.fillText(message, 190, 270);
            break;
        case 4: 
            message = "I once farted in an elevator. It was wrong on so many levels."
            ctx.fillText(message, 140, 270);
            break;
        case 5:
            message = "They are hiding in the high gras. Waiting to attack. Take this."
            ctx.fillText(message, 135, 270);
            characterGivesItem();
            break;
        case 6: 
            message = "If you pick up a lot of items, it will strenghten you monster."
            ctx.fillText(message, 140, 270);
            characterGivesItem();
            break;
        case 7:
            message = "It is easier to catch them, if you bribe them with goodies."
            ctx.fillText(message, 150, 270);
            characterGivesItem();
            break;
        case 8: 
            message = "I never managed to catch 'em all."
            ctx.fillText(message, 215, 270);
            break;
        case 9:
            message = "Isn't this an awesome game?"
            ctx.fillText(message, 230, 270);
            break;
        case 10: 
            message = "Some kids have a good advice for you"
            ctx.fillText(message, 210, 270);
            break;
        case 11:
            message = "Here I don't need it anymore"
            ctx.fillText(message, 240, 270);
            characterGivesItem();
            break;
    }
    var visit = gameMap[pos]
    if(keysDown[37] || keysDown[38] || keysDown[39] ||keysDown[40])
        visited[gameMap[pos]] = 1; 
    }
    else { //talk before a fight
        console.log("fight");
        fight = true;
        setTimeout(characterFight(), 2000);
        return true;
    }
}

function characterFight(){
    charFight = true;
    if(monster_index >= 0){
        console.log("here");
        ctx.fillStyle = "white";
        ctx.fillRect(180, 150, 300, 200);
        ctx.fillStyle = "darkred";
        ctx.fillText("The kid wants to fight.", 260, 245);
        ctx.fillText("It calls his monster!", 270, 265);
        monster = new Monster();
        setTimeout(startFight, 2000);
    }
    else{
        ctx.fillStyle = "white";
        ctx.fillRect(180, 150, 300, 200);
        ctx.fillStyle = "darkred";
        ctx.fillText("The kid wants to fight.", 260, 245);
        ctx.fillText("But you need a monster to fight! ▼", 230, 270);
        item_count = item_count - 3;
        if(item_count < 0)
            item_count = 0;
 
        noMonsterNoFight = true;
    }
}

function characterGivesItem(){
    if(visited[player.tileTo[1] * map.width + player.tileTo[0]] == 2){
        ctx.fillStyle = "darkred";
        ctx.fillText("I hope you find use for my present", 220, 290);
    }
    else{
        audioItem.play();
        console.log("getitem");
        ctx.fillStyle = "darkred";
        ctx.fillText("The kid gave you a present!", 240, 290);
        ctx.drawImage(item2, 260, 280, 100, 100);
        item_count++;
 
        visited[player.tileTo[1] * map.width + player.tileTo[0]] = 2;
 
        audioItem.pause();
        
    }
}
