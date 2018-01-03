function characterMeet(){
    var pos = player.tileTo[1] * map.width + player.tileTo[0];
    //console.log(charVisited[pos - 1], charVisited[pos + 1]);
    if ((gameMap[pos - 1] == 14 || gameMap[pos - 1]  == 17 ||
        gameMap[pos - map.width]  == 12 || gameMap[pos - map.width]  == 16 ||
        gameMap[pos + 1] == 15 || gameMap[pos + 1]  == 15)  
        && visited[gameMap[pos + 1]] != 1 && visited[pos - map.width] != 1 
        && visited[pos - 1] != 1){ 
            visited();
            if(!charTalking){
                charInteraction = true;
                startInteraction();
            }
            return true;
    }
    return false;
}

function startInteraction(){
    ctx.fillStyle = "white";
    ctx.fillRect(180, 150, 300, 200);
    ctx.fillStyle = "darkred";
    ctx.fillText("Hey you!   ▼", 290, 255);
}

function characterTalk(randChoice){
    charInteraction = false;
    charTalk = false;
    
   // var randChoice = Math.floor(Math.random() * 20);
    var message;

    console.log("start talk");
    if(randChoice < 20){ //random talk
        var rand = Math.floor(Math.random() * 12);
        switch(rand){
            case 0: 
                message = "There are sting nettles and I wear shorts."
                break;
            case 1:
                message = "Some people will give you items, if you talk to them."
                characterGivesItem();
                break;
            case 2: 
                message = "I am a nobody, nobody is perfect, therefore I am perfect."
                break;
            case 3:
                message = "If live gives you lemons. You got lemons."
                break;
            case 4: 
                message = "I once farted in an elevator. It was wrong on so many levels."
                break;
            case 5:
                message = "They are hiding in the high gras. Waiting to attack. Take this"
                characterGivesItem();
                break;
            case 6: 
                message = "If you pick up a lot of items, it will strenghten you partner."
                characterGivesItem();
                break;
            case 7:
                message = "It is easier to catch them, if you bribe them with goodies."
                characterGivesItem();
                break;
            case 8: 
                message = "I never managed to catch 'em all."
                break;
            case 9:
                message = "Isn't this an awesome game?"
                break;
            case 10: 
                message = "Talk to people. Some have a good advice for you"
                break;
            case 11:
                message = "Here I don't need it anymore"
                characterGivesItem();
                break;
        }
        //doesn't show yet
        ctx.fillStyle = "white";
        ctx.fillRect(80, 50, 300, 200);
        ctx.fillStyle = "black";
        //ctx.font = "20pt Helvetica";
        console.log("msg"+rand);
        ctx.fillText(message, 260, 290);

       // setTimeout(makeWait(), 2000);
        //return true;
    }
    else { //talk before a fight
        fight = true;
        setTimeout(characterFight(), 2000);
        return true;
    }
    //return false;
}

function characterFight(){
    charFight = true;

    ctx.fillStyle = "white";
    ctx.fillRect(180, 150, 300, 200);
    ctx.fillStyle = "darkred";
    ctx.fillText("The kid wants to fight.", 260, 245);
    ctx.fillText("It calls his monster!", 270, 265);

    //
    //Watchout - own/adapted functions
    //you cant catch another persons monster
    //
    monster = new Monster();
    setTimeout(startFight, 2000);
}

function characterGivesItem(){
    ctx.fillStyle = "white";
    ctx.fillRect(180, 180, 300, 200);
    ctx.fillStyle = "darkred";
    ctx.fillText("The kid gave you a present!", 260, 260);
    ctx.drawImage(item, 260, 300, 150, 150);
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
