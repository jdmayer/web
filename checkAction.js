function checkForAction(){
    if (gameMap[getIndex(player.tileTo[0], player.tileTo[1], player)] == 1){
        var r = Math.random();
        if (r <= 0.00){ //20
            if(!fight){
                monster = new Monster();
            }
            startFight();
        }
    }
    else if (gameMap[getIndex(player.tileTo[0], player.tileTo[1], player)] == 3){
        gameMap[getIndex(player.tileTo[0],
        player.tileTo[1], player)] = 0;
        addItemToBag();
        console.log("Got item");
    }
    else if (gameMap[getIndex(player.tileTo[0], player.tileTo[1], player)] == 20){
        player = new Character();
        switch(level){
            case 1:
                level++;
                startLevel();
                break;
            case 2:
                level++;
                startLevel();
                break;
            case 3:
                //level++;
                startLevel();
                break;
        }
    }
};

function addItemToBag(){
    item_count++;
    //TODO: little message that item has been added to bag?
    //I would leave away the bag and only be able to collect
    //-- goodies
    //-- stones
    //-- special item (rename it later)
    // and show these like the timer on the edge of the screen
    // save A LOOOT of programming
    // only disad. - can't administrate them but don't really need to anyway
}