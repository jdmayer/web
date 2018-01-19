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
    if (fight) { 
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
    if (monster_index == -1) { //no monster
        ctx.drawImage(fight2, 0, 0, 650, 488);
    }
    else {
        ctx.drawImage(fight1, 0, 0, 650, 488);
        ctx.fillText("Attack  - Press A", 50, 415);
        ownMonster = new Monster();
        ownMonster.index = monster_index;
        ownMonster.monLevel = monsterLvl[monster_index];
        ownMonster.strength = monsterStrength[monster_index];
        ownMonster.drawOwnMonster();
    }
}

function announceMonster() {
    switch (monster.index) {
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
    getText(currText);

    var tmp = true; // so it doesn't get stuck!
    window.addEventListener("keydown", function (e) {
        if (tmp && e.keyCode == 13) {
            tmp = false;
            firstAction = true;
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