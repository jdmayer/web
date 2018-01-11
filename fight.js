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
    console.log('runway');
    actionIsRunning = true;
    var r = 0;//Math.random();
    if (r <= 0.5){
        textBackground('Ran');
        window.addEventListener("keydown",function(e){
            if(fight && e.keyCode == 13){console.log("a");
                fight = false;
                actionIsRunning = false;
                charFight = false;
                audioFight.pause();
                audioBackground.play();  
            }
        });     
    }
    else{
        textBackground('CantRun');
        window.addEventListener("keydown",function(e){console.log("b");
            if(fight  && e.keyCode == 13){
                monsterAttacks();
            }
        });
    }
}

function feedMonster(){
    actionIsRunning = true;
    textBackground('Eats');

    if(monster.strength < (monster.monLevel * 8)){
        monster.strength = monster.strength + 2;
    }
    chance_of_catching += 0.1; //earned trust
    window.addEventListener("keydown",function(e){
        if(fight && e.keyCode == 13){
            monsterReacts();
        }
    });
}
 
function catchMonster(){
    actionIsRunning = true;
    chance_of_catching = 1; //remove later - 0.2
    var r = Math.random();
    
    textBackground('TryCatch');
    if (0 <= chance_of_catching){ //r
        //current Monster
        monster_index = monster.index;
        monsterLvl[monster_index] = monster.monLevel;
        monsterStrength[monster_index] = monster.strength;
        caughtMonster[monster.index] = "true";
        caught = true;
 
        window.addEventListener("keydown",function(e){
            if(fight && e.keyCode == 13){
                endFight();
            }
        });
    }
    else{
        window.addEventListener("keydown",function(e){
            if(fight && e.keyCode == 13){
                monsterAttacks();
            }
        });
    }
}
 
function noMonster(){
    textBackground('NoMonsterFight');
    window.addEventListener("keydown",function(e){
        if(fight && e.keyCode == 13){
            nextAction();
        }
    });
}

function monsterReacts(){
    var r = Math.random();
    if(r <= 0.4){
        monsterAttacks();
    }
    else{
        textBackground('MonsterWatches');
        window.addEventListener("keydown",function(e){
            if(fight  && e.keyCode == 13){
                nextAction();
                console.log("watch");

            }
        });
    }
}
 
function attackMonster(){
    actionIsRunning = true;
    var r = Math.random();
    
    textBackground('AttackMonster');

    if(monster.monLevel < monsterLvl[monster_index]){//your monster is stronger
       monster.strength = monster.strength - Math.floor(Math.random() * (monsterLvl[monster_index] * 2) + 2);
    }
    else{
        monster.strength = monster.strength - Math.floor(Math.random() * monster_lvl + 2);
    }
 
    if (monster.strength <= 0){
        monster.strength = 0;
        redrawFight();
        setTimeout(endFight, 2000);
        //need Timeout -> to show that HP == 0!
    }
    else{
        window.addEventListener("keydown",function(e){
            if(fight  && e.keyCode == 13){
                redrawFight();
                monsterAttacks();
            }
        });
    }
}

function monsterAttacks(){
    r = Math.random();
    textBackground('MonsterAttacks');
 
    if(monster.monLevel > monsterLvl[monster_index]){//opponent is stronger
        monsterStrength[monster_index] = monsterStrength[monster_index] 
                                        - Math.floor(Math.random() * (monster.monLevel * 2) + 2);
    }
    else{
       monsterStrength[monster_index] = monsterStrength[monster_index] 
                                        - Math.floor(Math.random() * monster.monLevel + 2)
    }

    window.addEventListener("keydown",function(e){
        if(fight  && e.keyCode == 13){
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
        }
    });
}
 
function nextAction(){
    textBackground('YourAction');
    actionIsRunning = false;
}
 
function endFight(){console.log('aa'+caught);
    if (charFight){
        textBackground('WinKid');
        //YouBeatKid - then back on map
        charFight = false;
        markAsWon();
    }
    else if (caught){ console.log('j'+caught);
        textBackground('Caught');
    }
    else if (!caught && !charFight){ console.log('k'+caught);
        textBackground('WonMonster');
    }
    
    if(!caught){ console.log("in");
        monsterStrength[monster_index] = monsterLvl[monster_index] * 8 + monster.monLevel * 2;
        if(Math.floor(monsterStrength[monster_index] / 8) > monsterLvl[monster_index]){
            textBackground('LevelUp');
            monsterLvl[monster_index] = monsterLvl[monster_index] + 1;
        }
    }
 
    audioFight.pause();
    audioWon.play();
   // window.addEventListener("keydown",function(e){
     //   if(e.keyCode == 13){
            fight = false;  
            actionIsRunning = false;
            caught = false;
            audioWon.pause();
            audioBackground.play();
    //    }
        console.log("td");
        //gameOver();
   // });
}
 