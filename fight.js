function startFight() {
    console.log("begfight");
    audioBackground.pause();
    audioFight.play();

    fight = true;
    fightMsg = false;
    redrawFight();
    announceMonster();
}

function redrawFight() {
//DOESNT DRAW::: WHY
    if (fight) {console.log("fight...");
        drawBackground();

        if (charFight) {
            drawOptionsCharFight();
        }
        else if (monster_index == -1) {
            drawOptionsNoMonster();
        }
        else {
            drawOptions();
        }
        monster.drawOpponent();
    }
}

function drawBackground() {
    ctx.fillStyle = "black";
    console.log("here");
    if (monster_index == -1) { //no monster
        console.log("got no monster");
        ctx.drawImage(fight2, 0, 0, 650, 488);
        console.log("draw.....");
    }
    else {console.log("draw shit");
        ctx.drawImage(fight1, 0, 0, 650, 488);
        ctx.fillText("Attack  - Press A", 50, 415);
        ownMonster = new Monster();
        ownMonster.index = monster_index;
        ownMonster.monLevel = monsterLvl[monster_index];
        ownMonster.strength = monsterStrength[monster_index];
        ownMonster.drawOwnMonster();
    }
}

function announceMonster(){
    switch(monster.index){
        case 0:
            currText = 'Dax';
            break;
        case 1:
            currText = 'Flace';
            break;
        case 2:
            currText = 'Lavora';
            break;
        case 3:
            currText = 'Iglo';
            break;
        case 4:
            currText = 'Looki';
            break;
        case 5:
            currText = 'Prince';
            break;
        case 6:
            currText = 'Intestria';
            break;
        case 7:
            currText = 'Furry';
            break;
        case 8:
            currText = 'Tree';
            break;
    }
    text = true;
    showText();

    var firstA = true; //otherwise uses nextAction() again!
    window.addEventListener("keydown", function (e) {
        if(firstA && e.keyCode == 13){
            firstA = false;
            nextAction();
        }
    });
}

function drawOptionsCharFight() { //ALSO PUT INTO CSS
    ctx.fillText("Attack  - Press A", 50, 415);
    ctx.fillText("Feed    - Press F", 50, 435);
    ctx.fillText("Run     - Press R", 50, 455);
}

function drawOptionsNoMonster() {
    ctx.fillText("Catch   - Press C", 50, 415);
    ctx.fillText("Feed    - Press F", 50, 435);
    ctx.fillText("Run     - Press R", 50, 455);
}

function drawOptions() {
    ctx.fillText("Catch   - Press C", 50, 430);
    ctx.fillText("Feed    - Press F", 50, 445);
    ctx.fillText("Run     - Press R", 50, 460);
}

function nextAction() {
    console.log("nextActionFUCK");
    text = true;
    currText = 'YourAction';
    showText();
    actionIsRunning = false;
}

function runAway() {
    actionIsRunning = true;
    var r = 0;//Math.random();
    if (r <= 0.5) {
        fled = true;
        text = true;
        currText = 'Ran';
        showText();

        window.addEventListener("keydown", function (e) {
            if (fight && e.keyCode == 13) {
                afterFight();
            }
        });
    }
    else {
        text = true;
        currText = 'CantRun';
        showText();
        window.addEventListener("keydown", function (e) {
            if (fight && e.keyCode == 13) {
                monsterAttacks();
            }
        });
    }
}

function feedMonster() {
    actionIsRunning = true;
    text = true;
    currText = 'Eats';
    showText();

    if (monster.strength < (monster.monLevel * 8)) {
        monster.strength = monster.strength + 2;
    }
    chance_of_catching += 0.1; //earned trust
    window.addEventListener("keydown", function (e) {
        if (fight && e.keyCode == 13) {
            monsterReacts();
        }
    });
}

function catchMonster() {
    actionIsRunning = true;
    chance_of_catching = 1; //remove later - 0.2
    var r = Math.random();

    text = true;
    currText = 'TryCatch';
    showText();
    if (0 <= chance_of_catching) { //r
        monster_index = monster.index;
        monsterLvl[monster_index] = monster.monLevel;
        monsterStrength[monster_index] = monster.strength;
        caughtMonster[monster.index] = "true";
        caught = true;

        text = true
        currText = 'Caught';
        showText();

        window.addEventListener("keydown", function (e) {
            if (fight && e.keyCode == 13) {
                afterFight();
            }
        });
    }
    else {
        window.addEventListener("keydown", function (e) {
            if (fight && e.keyCode == 13) {
                monsterAttacks();
            }
        });
    }
}

function noMonster() {
    text = true;
    currText = 'NoMonsterFight';
    showText();
    window.addEventListener("keydown", function (e) {
        if (fight && e.keyCode == 13) {
            nextAction();
        }
    });
}

function monsterReacts() {
    var r = Math.random();
    if (r <= 0.4) {
        monsterAttacks();
    }
    else {
        text = true;
        currText = 'MonsterWatches';
        showText();
        window.addEventListener("keydown", function (e) {
            if (fight && e.keyCode == 13) {
                nextAction();
            }
        });
    }
}

function attackMonster() {
    actionIsRunning = true;
    var r = Math.random();

    text = true;
    currText = 'AttackMonster';
    showText();

    if (monster.monLevel < monsterLvl[monster_index]) {//your monster is stronger
        monster.strength = monster.strength - Math.floor(Math.random() * (monsterLvl[monster_index] * 2) + 2);
    }
    else {
        monster.strength = monster.strength - Math.floor(Math.random() * monster_lvl + 2);
    }

    if (monster.strength <= 0) {
        monster.strength = 0;
        redrawFight();
        setTimeout(endFight, 2000);
        //need Timeout -> to show that HP == 0!
    }
    else {
        window.addEventListener("keydown", function (e) {
            if (fight && e.keyCode == 13) {
                redrawFight();
                monsterAttacks();
            }
        });
    }
}

function monsterAttacks() {
    r = Math.random();
    text = true;
    currText = 'MonsterAttacks';
    showText();

    if (monster.monLevel > monsterLvl[monster_index]) {//opponent is stronger
        monsterStrength[monster_index] = monsterStrength[monster_index]
            - Math.floor(Math.random() * (monster.monLevel * 2) + 2);
    }
    else {
        monsterStrength[monster_index] = monsterStrength[monster_index]
            - Math.floor(Math.random() * monster.monLevel + 2)
    }

    window.addEventListener("keydown", function (e) {
        if (fight && e.keyCode == 13) {
            if ((monster_index >= 0 && monsterStrength[monster_index] <= 0) ||
                (monster_index < 0 && Math.random() <= 0.4)) {
                monsterStrength[monster_index] = 0;
                redrawFight();
                gameOver();
            }
            else {
                console.log("next action...");
                redrawFight();
                nextAction();
            }
        }
    });
}

function endFight() {
    if (charFight) {
        text = true
        currText = 'WinKid';
        showText();

        charFight = false;
        markAsWon();
    }
    else if (!caught && !charFight && !fled) {
        text = true
        currText = 'WonMonster';
        showText();
    }

    if (!caught && monster_index >= 0) {
        monsterStrength[monster_index] = monsterLvl[monster_index] * 8 + monster.monLevel * 2;
        if (Math.floor(monsterStrength[monster_index] / 8) > monsterLvl[monster_index]) {
            text = true;
            currText = 'LevelUp';
            showText();
            monsterLvl[monster_index] = monsterLvl[monster_index] + 1;
        }
    }
    audioFight.pause();
    audioWon.play();

    window.addEventListener("keydown", function (e) {
        if (e.keyCode == 13) { 
            afterFight();
        }
    });

}          

function afterFight(){
    fight = false;
    actionIsRunning = false;
    caught = false;
    text = false;

    audioWon.pause();
    audioBackground.play();
}