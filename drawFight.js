var optionText;

function startFight() {
    audioBackground.pause();
    audioFight.play();
    chance_of_catching = 0.2;

    fight = true;
    fightMsg = false;
    redrawFight();
    announceMonster();
}

function redrawFight() {
 //   if (fight) { 
        drawBackground();
        if (charFight) {
            getOptions('OptionCharFight');
            optionText = 'OptionCharFight';
        }
        else if (monster_index == -1) {
            getOptions('OptionNoMonster');
            optionText = 'OptionNoMonster';
        }
        else if(!charFight){
            getOptions('OptionMonster');
            optionText = 'OptionMonster';
        }
        monster.drawOpponent();
 //   }
}

function drawBackground() {
    ctx.fillStyle = "black";
    if (monster_index == -1) { //no monster
        ctx.drawImage(fight2, 0, 0, 650, 488);
    }
    else {
        ctx.drawImage(fight1, 0, 0, 650, 488);  
        currMonster = monsters[monster_index];
        currMonster.drawOwnMonster();
    }
}

function announceMonster() {
    if (!charFight){
        switch (monster.index) {
            case 0:
                getText('Dax');
                break;
            case 1:
                getText('Flace');
                break;
            case 2:
                getText('Lavora');
                break;
            case 3:
                getText('Iglo');
                break;
            case 4:
                getText('Looki');
                break;
            case 5:
                getText('Prince');
                break;
            case 6:
                getText('Intestria');
                break;
            case 7:
                getText('Furry');
                break;
            case 8:
                getText('Tree');
                break;
        }   
    }
    else{
        getText('KidMonster');
    }
    
    var tmp = true; // so it doesn't get stuck!
    window.addEventListener("keydown", function (e) {
        if (tmp && e.keyCode == 13) {
            tmp = false;
            firstAction = true;
            nextAction();
        }
    });
}

function drawAnimation(pic){
    if(currText == "TryCatch"){ 
        ctx.drawImage(pic, 140, 10, 140, 140);
    }
    else if(currText == "MonsterAttacks"){ //attack 
        ctx.drawImage(pic, 400, 230, 140, 140);
    }  
    else if(currText == "AttackMonster"){ //attack
        ctx.drawImage(pic, 140, 30, 140, 140);
    }
}

function getAttack(){
    switch(currText){
        case "AttackMonster":
            if(monster_index == 0 || monster_index == 2 || monster_index == 3){
                drawAnimation(attack_fire);
            }
            else if(monster_index == 1 || monster_index == 7){
                drawAnimation(attack_ice);
            }
            else if(monster_index == 4 || monster_index == 5){
                drawAnimation(attack_water);
            }
            else if(monster_index == 6 || monster_index == 8){
                drawAnimation(attack_plant);
            }
            break;
        case "MonsterAttacks": 
            if(monster.index == 0 || monster.index == 2 || monster.index == 3){
                drawAnimation(attack_fire);
            }
            else if(monster.index == 1 || monster.index == 7){
                drawAnimation(attack_ice);
            }
            else if(monster.index == 4 || monster.index == 5){
                drawAnimation(attack_water);
            }
            else if(monster.index == 6 || monster.index == 8){
                drawAnimation(attack_plant);
            }
            break;
    }
}
