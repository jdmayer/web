function startFight(){
    fight=true;
    fightMsg = false;
    drawBackground();
    drawOptions(); //change layout of Options
    monster.drawOpponent();
}

function drawBackground(){ 
    //ctx.font = "16px Helvetica";
    ctx.fillStyle = "black";

    if (monster_index == -1){
        //player has no monster
        ctx.drawImage(fight2, 0, 0, 650, 488);    
    }
    else{
        //player has monster
        ctx.drawImage(fight1, 0, 0, 650, 488);
        ctx.fillText("Attack - Press A", 50, 415);
        ownMonster = new Monster();
        ownMonster.index = monster_index;
        ownMonster.monLevel = monster_lvl;
        console.log(ownMonster.lvl + " - " + ownMonster.index);
        ownMonster.drawOwnMonster();
    }
}

function drawOptions(){
    ctx.fillText("Catch  - Press C",50,430); 
    ctx.fillText("Feed   - Press F",50,445); 
    ctx.fillText("Run    - Press R",50,460); 
}

function runAway(){
    actionIsRunning = true;
    var r = Math.random();
    if (r <= 0.4){
        fight = false;
        actionIsRunning = false;
        charFight = false;
    }
    else{
        ctx.fillStyle = "white";
        ctx.fillRect(435, 420, 185, 30);
        ctx.fillStyle="red";
        ctx.fillText("You can't run away!", 445, 435);
        setTimeout(monsterAttacks, 2000);
    }
}

function feedMonster(){
    actionIsRunning = true;
    ctx.fillStyle = "white";
    ctx.fillRect(435,420,185,30);
    ctx.fillStyle="red";
    ctx.fillText(monsterName[monster.index] + " is eating...", 445, 435);
    if(monster.strength < monster.level * 8){
        monster.strength = monster.strength + 2;
        console.log("it got stronger" + monster.strength);
    }
    chance_of_catching += 0.1;
    setTimeout(monsterReacts, 2000);
}

function catchMonster(){
    actionIsRunning = true;
    var r = Math.random();
    
    ctx.fillStyle = "white";
    ctx.fillRect(435, 420, 185, 30);
    ctx.fillStyle="red";
    ctx.fillText("You threw a net...",445,435);

    if (0 <= chance_of_catching){ //here r
        console.log("here");
        monster_index = monster.index;
        monster_lvl = monster.monLevel;
        console.log("A: "+ monster_index + " lvl: " + monster_lvl);
        setTimeout(endFight, 2000);
    }
    else{
        setTimeout(monsterAttacks,2000);
    }
}

function monsterReacts(){
    var r = Math.random();
    if(r <= 0,4){
        setTimeout(monsterAttacks,2000);
    }
    else{
        ctx.fillStyle = "white";
        ctx.fillRect(435,420,185,30);
        ctx.fillStyle = "black";
        ctx.fillText(monsterName[monster.index] + " is watching you.", 445, 435);
        actionIsRunning = false;
        setTimeout(nextAction, 2000);
    }
}

function attackMonster(){
    actionIsRunning = true;
    var r = Math.random();
    
    ctx.fillStyle = "white";
    ctx.fillRect(435,420,185,30);
    ctx.fillStyle="red";
    //
    //is weird
    //
    ctx.fillText("Your " + monsterName[monster.index] + " started an attack!", 445, 335);
    monster.strenght = monster.strenght - Math.floor(Math.random() * 10 + 2);

    if (r <= 0.5){
        setTimeout(endFight, 2000);
    }
    else{
        setTimeout(monsterAttacks,2000);
    }
}

function monsterAttacks(){
    r = Math.random();
    ctx.fillStyle = "white";
    ctx.fillRect(435,420,185,30);
    ctx.fillStyle = "red";
    ctx.fillText(monsterName[monster.index] + " attacks you!",445,435);
    setTimeout(function(){
        /*if (r < 0.1 ){
            gameOver();
        }*/
        if(monster.strength == 0){
            gameOver();
        }
        else{    
            nextAction();
            }    
        },2000);
}

function nextAction(){
    ctx.fillStyle = "white";
    ctx.fillRect(435,420,185,30);
    ctx.fillStyle = "black";
    ctx.fillText("Your Action?",445,435);
    actionIsRunning = false;
}

function endFight(){
    ctx.fillStyle = "white";
    ctx.fillRect(50,390,530,80);
    ctx.font = "18px Arial";
    ctx.fillStyle="red";
    ctx.fillText("Y O U    W O N   !",50,435);
    //enter here if level up!
    //only level up if won

    setTimeout(function(){
        fight = false;  
        actionIsRunning = false;
        if (charFight){
        }
        charFight = false;
        },2000);
}

