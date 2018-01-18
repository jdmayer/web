function nextAction() {
    console.log("?NEXT " + currText + firstAction);
    text = true;
    currText = 'YourAction';
    showText();
    actionIsRunning = false; //why need action is running?
}

function runAway() {
    console.log("?RUNAWAY");
    actionIsRunning = true;
    var fled = false;
    var r = 0;//Math.random();
    if (r <= 0.5) {
        fled = true; //not needed?
        text = true;
        currText = 'Ran';
        showText();

        window.addEventListener("keydown", function (e) {
            if (fled && e.keyCode == 13) {
                audioFight.pause()
                console.log("after f" + currText);
                fled = false;
                afterFight();
            }
        });
    }
    else {
        text = true;
        currText = 'CantRun';
        showText();
        window.addEventListener("keydown", function (e) {
            if (!fled && e.keyCode == 13) {
                monsterAttacks();
            }
        });
    }
}

function feedMonster() {
    console.log("?FEED");
    var reaction = false;
    actionIsRunning = true;
    text = true;
    currText = 'Eats';
    showText();

    if (monster.strength < (monster.monLevel * 8)) {
        monster.strength = monster.strength + 2;
    }
    chance_of_catching += 0.1; //earned trust

    reaction = true;
    window.addEventListener("keydown", function (e) {
        if (reaction && e.keyCode == 13) {
            console.log("react after feed");
            reaction = false;
            monsterReacts();
        }
    });
}

function catchMonster() {
    console.log("?CATCH");
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
        text = true;
        currText = 'Caught';
        showText();

        window.addEventListener("keydown", function (e) {
            if (caught && e.keyCode == 13) {
                console.log("caughloop");
                audioFight.pause();
                afterFight();
            }
        });
    }
    else {
        caught = false;
        text = true;
        currText = 'NotCaught';
        showText();

        window.addEventListener("keydown", function (e) {
            if (!caught && e.keyCode == 13) {
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
    console.log("?REACT " + currText);
    var r = Math.random();
    var watching = false;
    if (r <= 0.4) {
        isAttacking = true;
        console.log("in at attack" + currText);
        monsterAttacks();
    }
    else {
        watching = true;
        text = true;
        currText = 'MonsterWatches';
        showText();

        console.log("watch" + currText + text);

        window.addEventListener("keydown", function (e) {
            if (watching && e.keyCode == 13) {
                console.log("was just looking" + currText + text);
                //shouldnt need...
                watching = false;
                document.getElementById(currText).style.display = 'none';

                nextAction();
            }
        });
    }
}

function attackMonster() {
    console.log("?ATTACK " + currText);
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
    console.log("?ATTACKS" + currText);
    text = true;
    currText = 'MonsterAttacks';
    showText();
    console.log("shoed atta" + currText + text + fight);

    //Decrement Healthpoints
    if (monster.monLevel > monsterLvl[monster_index]) {//opponent is stronger
        monsterStrength[monster_index] = monsterStrength[monster_index]
            - Math.floor(Math.random() * (monster.monLevel * 2) + 2);
    }
    else {
        monsterStrength[monster_index] = monsterStrength[monster_index]
            - Math.floor(Math.random() * monster.monLevel + 2)
    }

    var deadlyAttack = '';
    if ((monster_index >= 0 && monsterStrength[monster_index] <= 0) ||
        (monster_index < 0 && Math.random() <= 0.4)) {
        deadlyAttack = 'sooDeadly';
    }
    else {
        deadlyAttack = 'justAScratch';
    }
console.log("before dec.");
    window.addEventListener("keydown", function (e) {
        if (deadlyAttack == 'justAScratch' && e.keyCode == 13) {
            deadlyAttack = '';
            console.log("next action at ATT");
            redrawFight();
            nextAction();
        }
    });

    window.addEventListener("keydown", function (e) {
        if (deadlyAttack == 'sooDeadly' && e.keyCode == 13) {
            deadlyAttack = '';
            console.log("dead");
            lost = true;
            monsterStrength[monster_index] = 0;
            redrawFight();
            endFight();
        }
    });
}

