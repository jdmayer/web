function startFight(){
    audioBackground.pause();
    audioFight.play();
 
    fight = true;
    fightMsg = false;
 
    redrawFight();
}
 
function redrawFight(){
    if(fight){
      drawBackground();
    
        if(charFight){
            drawOptionsCharFight();
        }
        else if(monster_index == -1){
            drawOptionsNoMonster();
        }
        else{
            drawOptions();
        }
        monster.drawOpponent();    
    }  
}

function drawBackground(){ 
    ctx.fillStyle = "black";
 
    if (monster_index == -1){ //no monster
        ctx.drawImage(fight2, 0, 0, 650, 488);    
    }
    else{
        ctx.drawImage(fight1, 0, 0, 650, 488);
        ctx.fillText("Attack  - Press A", 50, 415);
        ownMonster = new Monster();
        ownMonster.index = monster_index;
        ownMonster.monLevel = monsterLvl[monster_index];
        ownMonster.strength = monsterStrength[monster_index];
        ownMonster.drawOwnMonster();
    }
}
 
function drawOptionsCharFight(){
    ctx.fillText("Attack  - Press A",50,415); 
    ctx.fillText("Feed    - Press F",50,435); 
    ctx.fillText("Run     - Press R",50,455); 
}

function drawOptionsNoMonster(){
    ctx.fillText("Catch   - Press C",50,415); 
    ctx.fillText("Feed    - Press F",50,435); 
    ctx.fillText("Run     - Press R",50,455); 
}
 
function drawOptions(){
    ctx.fillText("Catch   - Press C",50,430); 
    ctx.fillText("Feed    - Press F",50,445); 
    ctx.fillText("Run     - Press R",50,460); 
}
 
function runAway(){
    actionIsRunning = true;
    var r = Math.random();
    if (r <= 0.5){
        //ALL OF THAT INTO AN OWN CSS FILE!
        ctx.fillStyle = "white";
        ctx.fillRect(435, 420, 185, 30);
        ctx.fillStyle = "darkred";
        ctx.fillText("You ran away!", 445, 435);
 
        fight = false;
        actionIsRunning = false;
        charFight = false;
        audioFight.pause();
        audioBackground.play();
    }
    else{
        ctx.fillStyle = "white";
        ctx.fillRect(435, 420, 185, 30);
        ctx.fillStyle = "darkred";
        ctx.fillText("You can't run away!", 445, 435);
        setTimeout(monsterAttacks, 2000);
    }
}

function feedMonster(){
    actionIsRunning = true;
    ctx.fillStyle = "white";
    ctx.fillRect(435,420,185,30);
    ctx.fillStyle = "darkred";
    ctx.fillText(monsterName[monster.index] + " is eating...", 445, 435);
    if(monster.strength < (monster.monLevel * 8)){
        monster.strength = monster.strength + 2;
    }
    chance_of_catching += 0.1; //earned trust
    setTimeout(monsterReacts, 2000);
}
 
function catchMonster(){
    actionIsRunning = true;
    chance_of_catching=1;//remove later
    var r = Math.random();
    
    ctx.fillStyle = "white";
    ctx.fillRect(435, 420, 185, 30);
    ctx.fillStyle = "darkred";
    ctx.fillText("You threw a net...",445,435);
    if (0 <= chance_of_catching){ //r
        //current Monster
        monster_index = monster.index;
        monsterLvl[monster_index] = monster.monLevel;
        //monster_lvl = monster.monLevel;
        monsterStrength[monster_index] = monster.strength;
        //monster_strength = monster.strength;
        caughtMonster[monster.index] = "true";
        caught = true;
 
        setTimeout(endFight, 2000);
    }
    else{
        setTimeout(monsterAttacks,2000);
    }
}
 
function noMonster(){
    ctx.fillStyle = "white";
    ctx.fillRect(435, 420, 185, 30);
    ctx.fillStyle="darkred";
    ctx.fillText("You can't attack " + monster.name + "!", 445, 435);
    setTimeout(nextAction, 2000);
}

function monsterReacts(){
    var r = Math.random();
    if(r <= 0.4){
        setTimeout(monsterAttacks,2000);
    }
    else{
        ctx.fillStyle = "white";
        ctx.fillRect(435,420,185,30);
        ctx.fillStyle = "black";
        ctx.fillText(monsterName[monster.index] + " is watching you.", 445, 435);
        setTimeout(nextAction, 2000);
    }
}
 
function attackMonster(){
    actionIsRunning = true;
    var r = Math.random();
    
    ctx.fillStyle = "white";
    ctx.fillRect(435,420,185,30);
    ctx.fillStyle = "darkred";
    ctx.fillText("Your " + monsterName[monster_index] + " attacks!", 445, 435);

    if(monster.monLevel < monsterLvl[monster_index]){//monster_lvl){ //your monster is stronger
       // monster.strength = monster.strength - Math.floor(Math.random() * (monster_lvl * 2) + 2);
       monster.strength = monster.strength - Math.floor(Math.random() * (monsterLvl[monster_index] * 2) + 2);
    }
    else{
        monster.strength = monster.strength - Math.floor(Math.random() * monster_lvl + 2);
    }
 
    if (monster.strength <= 0){
        monster.strength = 0;
        redrawFight();
        setTimeout(endFight, 2000);
    }
    else{
        setTimeout(function(){
            redrawFight();
            monsterAttacks();
        }, 2000);
    }
}

function monsterAttacks(){
    r = Math.random();
    ctx.fillStyle = "white";
    ctx.fillRect(435,420,185,30);
    ctx.fillStyle = "darkred";
    ctx.fillText(monsterName[monster.index] + " attacks you!",445,435);
 
    if(monster.monLevel > monsterLvl[monster_index]){//monster_lvl){ //opponent is stronger
      //  monster_strength = monster_strength - Math.floor(Math.random() * (monster.monLevel * 2) + 2);
      monsterStrength[monster_index] = monsterStrength[monster_index] 
                                        - Math.floor(Math.random() * (monster.monLevel * 2) + 2);
    }
    else{
       // monster_strength = monster_strength - Math.floor(Math.random() * monster.monLevel + 2);
       monsterStrength[monster_index] = monsterStrength[monster_index] 
                                        - Math.floor(Math.random() * monster.monLevel + 2)
    }
 
    setTimeout(function(){
        if((monster_index >= 0 && monsterStrength[monster_index] <= 0) || 
            (monster_index < 0 && Math.random() <= 0.4)){
            monsterStrength[monster_index] = 0;
            redrawFight();
            gameOver();
        }
        else{    
            redrawFight();
            nextAction();
            }    
        }, 2000);
}
 
function nextAction(){
    ctx.fillStyle = "white";
    ctx.fillRect(435, 420, 185, 30);
    ctx.fillStyle = "black";
    ctx.fillText("Your Action?", 445, 435);
    actionIsRunning = false;
}
 
function endFight(){
    ctx.fillStyle = "white";
    ctx.fillRect(50,390,530,80);
    ctx.fillStyle = "darkred";
 
    if (charFight){
        ctx.fillText("Kid: You earned my respect.", 50, 435);
        charFight = false;
    }
    else if (caught){
        ctx.fillText("You caught the wild " + monster.name +"!", 50, 435);
    }
    else{
        ctx.fillText("Y O U    W O N   !", 50, 435);
    }
        if(!caught){
        //monster_strength = monster_lvl * 8 + monster.monLevel * 2;
        monsterStrength[monster_index] = monsterLvl[monster_index] * 8 + monster.monLevel * 2;
        if(Math.floor(monsterStrength[monster_index] / 8) > monsterLvl[monster_index]){
            lvlUp();
        }
    }
    caught = false;
 
    audioFight.pause();
    audioWon.play();
 
    setTimeout(function(){
        fight = false;  
        actionIsRunning = false;
        audioWon.pause();
        audioBackground.play();
    }, 2000);
}
 
function lvlUp(){
    ctx.fillStyle = "white";
    ctx.fillRect(50,390,530,80);
    ctx.fillStyle = "darkred";
    ctx.fillText(monsterName[monster_index] + " levels up! (" + monsterLvl[monster_index] + ")", 50, 435);
    monsterLvl[monster_index] = monsterLvl[monster_index] + 1;
}