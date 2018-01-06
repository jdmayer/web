function characterMeet(){ //can also add to start convo on pressing enter
    var pos = player.tileTo[1] * map.width + player.tileTo[0];
    //console.log(charVisited[pos - 1], charVisited[pos + 1]);
    if ((gameMap[pos - 1] == 14 || gameMap[pos - 1]  == 17 ||
        gameMap[pos - map.width]  == 12 || gameMap[pos - map.width]  == 16 ||
        gameMap[pos + 1] == 15 || gameMap[pos + 1]  == 15))  {
       // && visited[gameMap[pos + 1]] != 1 && visited[pos - map.width] != 1 
       // && visited[pos - 1] != 1){ 
        //    visited();
            characterTalk();
    }
}


function characterTalk(){ 
    ctx.fillStyle = "white";
    ctx.fillRect(100, 100, 450, 300);
    ctx.fillStyle = "darkred";
    ctx.fillText("Hey you!   ▼", 290, 230);

    var pos = player.tileTo[1] * map.width + player.tileTo[0]
    var randChoice;

    if(msgNr[gameMap[pos]] == -1){
        randChoice = Math.floor(Math.random() * 20);
        msgNr[gameMap[pos]] = randChoice;
        console.log("new" +msgNr[gameMap[pos]])
    }
    else{
        console.log("old");
        randChoice = msgNr[gameMap[pos]];
    }

    var message;
    console.log("start talk" + randChoice);
    if(randChoice < 12){ //random talk
        switch(randChoice){ //adapt the measures
            case 0: 
                message = "There are sting nettles and I wear shorts."
                ctx.fillText(message, 220, 270);
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
                ctx.fillText(message, 240, 270);
                break;
            case 4: 
                message = "I once farted in an elevator. It was wrong on so many levels."
                ctx.fillText(message, 180, 270);
                break;
            case 5:
                message = "They are hiding in the high gras. Waiting to attack. Take this."
                ctx.fillText(message, 180, 270);
                characterGivesItem();
                break;
            case 6: 
                message = "If you pick up a lot of items, it will strenghten you monster."
                ctx.fillText(message, 180, 270);
                characterGivesItem();
                break;
            case 7:
                message = "It is easier to catch them, if you bribe them with goodies."
                ctx.fillText(message, 200, 270);
                characterGivesItem();
                break;
            case 8: 
                message = "I never managed to catch 'em all."
                ctx.fillText(message, 240, 270);
                break;
            case 9:
                message = "Isn't this an awesome game?"
                ctx.fillText(message, 240, 270);
                break;
            case 10: 
                message = "Some kids have a good advice for you"
                ctx.fillText(message, 240, 270);
                break;
            case 11:
                message = "Here I don't need it anymore"
                ctx.fillText(message, 240, 270);
                characterGivesItem();
                break;
        }
        setTimeout(makeWait(), 2000);
    }
    else { //talk before a fight
        fight = true;
        setTimeout(characterFight(), 2000);
        return true;
    }
}

function characterFight(){
    charFight = true;

    ctx.fillStyle = "white";
    ctx.fillRect(180, 150, 300, 200);
    ctx.fillStyle = "darkred";
    ctx.fillText("The kid wants to fight.", 260, 245);
    ctx.fillText("It calls his monster!", 270, 265);
    monster = new Monster();
    setTimeout(startFight, 2000);
}

function characterGivesItem(){
   // ctx.fillStyle = "white";
   // ctx.fillRect(180, 180, 300, 200);
    ctx.fillStyle = "darkred";
    ctx.fillText("The kid gave you a present!", 230, 280);
    ctx.drawImage(item2, 260, 300, 150, 150);
    item_count++;
    setTimeout(makeWait, 3000);
}

//make it work
function visited(){
    //marks the position already visited 
    //can't battle a person twice
    if(charInteraction){ 
        var pos = player.tileTo[1] * map.width + player.tileTo[0];
        charVisited[gameMap[pos - 1]] = 1;
        charVisited[gameMap[pos + 1]] = 1;
        charVisited[gameMap[pos - map.width]] = 1;
        charVisited[gameMap[pos + map.width]] = 1;
        //console.log("vi");
    }
}

//get rid of this 
function makeWait(){
    console.log("pls wait");
}


