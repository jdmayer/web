//you can pick up goodies and rocks!

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
    requestAnimationFrame(fightScene);
}

function fightScene(){
    console.log("action");
}

function characterGivesItem(){
    console.log("happy");
    //add parameter for different items?
    //add to menue - like timer no menue!
}

//in High Gras
function checkForAction(){
    //ONE ATTACKS
    console.log("in");
    if (gameMap[getIndex(player.tileFrom[0],
                player.tileFrom[1], player)] == 1){
        var r = Math.random();
        if (r<=0.3){
            fight = true;
            //startFight();
            console.log("fight");
        }
    }
    //ADD SPECIAL ITEM
    else if (gameMap[getIndex(player.tileFrom[0], player.tileFrom[1], player)] == 8){
        gameMap[getIndex(player.tileFrom[0], player.tileFrom[1], player)] = 0;

        addItemToBag();
        //SUM UP COUNTER TODO
    }
}

function addItemToBag(){
    //TODO!
    //I would leave away the bag and only be able to collect
    //-- goodies
    //-- stones
    //-- special item (rename it later)
    // and show these like the timer on the edge of the screen
    // save A LOOOT of programming
    // only disad. - can't administrate them but don't really need to anyway
}