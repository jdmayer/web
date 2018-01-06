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

    if (monster_index == 0){
        //player has no monster
        ctx.drawImage(fight2, 0, 0, 650, 488);    
    }
    else{
        //player has monster
        ctx.drawImage(fight1, 0, 0, 650, 488);
        ctx.fillText("Attack - Press A", 50, 415);
        ctx.drawImage(monsterImgBack[monster_index],400,220,150,150);
    }
    //return true;
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

    if (r <= chance_of_catching){
        monster_index = monster.index;
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
        ctx.fillText(monsterName[monster.index] + " is watching you.",445,435);
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
    ctx.fillText("Your " + monsterName[monster.index] + " started an attack!", 445, 335);

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
        if (r < 0.1 ){
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
    setTimeout(function(){
        fight = false;  
        actionIsRunning = false;
        if (charFight){
        }
        charFight = false;
        },2000);
}

