function characterMeet(){
    if (gameMap[player.tileTo[1] * map.width + player.tileTo[0] - 1] == 10 ||
        gameMap[player.tileTo[1] * map.width + player.tileTo[0] + 1] == 10 ||
        gameMap[player.tileTo[1] * map.width + player.tileTo[0] - map.width] == 10 ||
        gameMap[player.tileTo[1] * map.width + player.tileTo[0] + map.width] == 10 ){
            return true;
            console.log("meet character");
    }
    return false;
}

function characterTalk(e){
    var rand = Math.floor(Math.random() * 12);
    var message;
    if(e = 0){ //random talk
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
    }
    else{ //talk before a fight
        //can be added if time!
        characterFight();
    }
    console.log("Im a tree");
    return false;
}

function characterFight(){
    console.log("aggressive");
    //TODO -> do fight -> like random
}

function characterGivesItem(){
    console.log("happy");
    item_count++;
    //add parameter for different items?
    //add to menue - like timer no menue!
}

