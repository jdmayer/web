function startFight(){
    drawBackground();
    drawOptions();
    monster.drawOpponent();
     
    interactFight();
}

function drawBackground(){ 
    ctx.font = "16px Helvetica";
    ctx.fillStyle = "black";

    if (monster_index == 0){
        //player has no monster
        ctx.drawImage(fight2, 0, 0, 650, 488);    
    }
    else{
        //player has monster
        ctx.drawImage(fight1, 0, 0, 650, 488);
        ctx.fillText("Attack - Press A", 50, 415);
        switch(monster_index){
            case 1:
                ctx.drawImage(bird_back,400,220,150,150);
                break;
            case 2:
                ctx.drawImage(cat_back,400,220,150,150);
                break;
            case 3:
                ctx.drawImage(dragon_back,400,220,150,150);
                break;
            case 4:
                ctx.drawImage(hedgehog_back,400,220,150,150);
                break;
            case 5:
                ctx.drawImage(owl_back,400,220,150,150);
                break;
            case 6:
                ctx.drawImage(prince_back,400,220,150,150);
                break;
            case 7:
                ctx.drawImage(rose_back,400,220,150,150);
                break;
            case 8:
                ctx.drawImage(wolf_back,400,220,150,150);
                break;
        }
    }
    return true;
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
        fight=false;
    }
    else{
        ctx.strokeStyle="red";
        ctx.fillStyle = "white";
        ctx.fillRect(435,420,185,30);
        ctx.strokeText("The monster stopped you!",445,435);
        setTimeout(monsterAttacks,3000);
    }
    actionIsRunning = false;
}

function feedMonster(){
    actionIsRunning = true;
    ctx.strokeStyle="red";
    ctx.fillStyle = "white";
    ctx.fillRect(435,420,185,30);
    ctx.strokeText("It is eating...",445,435);
    chance_of_catching += 0.1;
    setTimeout(monsterAttacks,3000);
    actionIsRunning = false;
}

function catchMonster(){
    actionIsRunning = true;
    var r = Math.random();
    
    ctx.strokeStyle="red";
    ctx.fillStyle = "white";
    ctx.fillRect(435, 420, 185, 30);
    ctx.strokeText("You threw a net...",445,435);

    if (r <= chance_of_catching){
        monster_index = opponent_index;
        setTimeout(endFight, 3000);
    }
    else{
        setTimeout(monsterAttacks,3000);
    }
    actionIsRunning = false;
}

function attackMonster(){
    actionIsRunning = true;
    var r = Math.random();
    
    ctx.strokeStyle="red";
    ctx.fillStyle = "white";
    ctx.fillRect(435,420,185,30);
    ctx.strokeText("They are fighting!",445,435);

    if (r <= 0.5){
        setTimeout(endFight, 3000);
    }
    else{
        setTimeout(monsterAttacks,3000);
    }
    actionIsRunning = false;
}

function monsterAttacks(){
    r = Math.random();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "white";
    ctx.fillRect(435,420,185,30);
    ctx.strokeText("It attacked you!",445,435);
    setTimeout(function(){
                            if (!isgameover){    
                                ctx.fillStyle = "white";
                                ctx.fillRect(435,420,185,30);
                                ctx.fillStyle = "black";
                                ctx.fillText("What do you want to do?",445,435);
                            }
                            
                         },2000);
    
    if (r < 0.2 ){
        setTimeout(gameOver,2000);
    }
}

function endFight(msg){
    ctx.strokeStyle="red";
    ctx.fillStyle = "white";
    ctx.fillRect(50,390,530,80);
    ctx.font = "18px Arial";
    ctx.strokeText("Y O U    W O N   !",50,435);
    setTimeout(function(){fight = false;},2000);
}

function interactFight(){
    if (fight && !isGameOver && !actionIsRunning){
        if(keysDown[70]){
            console.log("feed");
            feedMonster();
        }
        if(keysDown[65]){
            if (monster_index != 0){
                attackMonster();
            }
        }
        if(keysDown[67]){
            console.log("catch");
            catchMonster();
        }    
        if(keysDown[82]){
            runAway();
            console.log("run");
        }    
    }
}
