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
            getOptions("OptionCharFight");
        }
        else if (monster_index == -1) {
            getOptions('OptionNoMonster');
        }
        else if(!charFight){
            getOptions('OptionMonster');
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
        
        ownMonster = new Monster();                 //own monster needed?
        ownMonster.index = monster_index;
        ownMonster.monLevel = monsterLvl[monster_index];
        ownMonster.strength = monsterStrength[monster_index];
        ownMonster.drawOwnMonster();
        
        //could make it global- for every monster 1 global -> save into array
        //save arrays for rest
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

function getOptions(msg){ console.log("SHOW "+ msg);
    options = true;
    optionMsg = msg
    showOptions()
}

function showOptions(){
    document.getElementById(optionMsg).style.display='block'; 

    window.addEventListener("keydown", function (e) { 
        if (fight && !options && e.keyCode == 13) {
            console.log("BYE BYE "+optionMsg);
            document.getElementById(optionMsg).style.display='none';         
        }
    });
}
