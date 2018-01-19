function nextAction() {
    getText("YourAction");
    actionIsRunning = false; //why need action is running?
}

function runAway() {
    actionIsRunning = true;
    var fled = false;
    var r = 0;//Math.random();
    if (r <= 0.5) {
        fled = true; //not needed?
        getText('Ran');

        window.addEventListener("keydown", function (e) {
            if (fled && e.keyCode == 13) {
                audioFight.pause()
                fled = false;
                afterFight();
            }
        });
    }
    else {
        getText("CantRun");
        window.addEventListener("keydown", function (e) {
            if (!fled && e.keyCode == 13) {
                monsterReacts();
            }
        });
    }
}

function feedMonster() {
    var reaction = false;
    actionIsRunning = true;
    getText("Eats");

    if (monster.strength < (monster.monLevel * 8)) { 
        monster.strength = monster.strength + 2;
    }
    chance_of_catching += 0.1; //earned trust

    reaction = true;
    window.addEventListener("keydown", function (e) {
        if (reaction && e.keyCode == 13) {
            reaction = false;
            redrawFight();
            monsterReacts();
        }
    });
}

function catchMonster() {
    actionIsRunning = true;
    var r = Math.random();
    chance_of_catching = 1; //remove later - 0.2
    getText("TryCatch");

    if (r <= chance_of_catching) { 
        monster_index = monster.index;
        monsterLvl[monster_index] = monster.monLevel;
        monsterStrength[monster_index] = monster.strength;
        caughtMonster[monster.index] = "true";
        caught = true;

        window.addEventListener("keydown", function (e) {
            if (r <= chance_of_catching && e.keyCode == 13) {
                chance_of_catching = 0
                audioFight.pause();
                endFight();
            }
        });
    }
    else {
        caught = false;
        getText("NotCaught");

        window.addEventListener("keydown", function (e) {
            if (!caught && e.keyCode == 13) {
                monsterReacts();
            }
        });
    }
}

function noMonster() {
    getText("NoMonsterFight");

    window.addEventListener("keydown", function (e) {
        if (fight && e.keyCode == 13) {
            nextAction();
        }
    });
}

function monsterReacts() {
    var r = Math.random();
    var watching = false;
    if (r <= 0.4) {
        isAttacking = true;
        monsterAttacks();
    }
    else {
        watching = true;
        getText("MonsterWatches");

        window.addEventListener("keydown", function (e) {
            if (watching && e.keyCode == 13) {
                watching = false;
                //document.getElementById(currText).style.display = 'none';

                nextAction();
            }
        });
    }
}

function attackMonster() {
    actionIsRunning = true;
    var attacks = true;
    var r = Math.random();

    getText("AttackMonster");

    if (monster.monLevel < monsterLvl[monster_index]) {//your monster is stronger
        monster.strength = monster.strength - Math.floor(Math.random() * (monsterLvl[monster_index] * 2) + 2);
    }
    else {
        monster.strength = monster.strength - Math.floor(Math.random() * monsterLvl[monster_index] + 2);
    }

    if (monster.strength <= 0) {
        monster.strength = 0;
        redrawFight();
        setTimeout(endFight, 1000);
        //need Timeout -> to show that HP == 0!
    }
    else {
        window.addEventListener("keydown", function (e) {
            if (attacks && e.keyCode == 13) {
                attacks = false;
                redrawFight();
                monsterReacts();
            }
        });
    }
}

function monsterAttacks() {
    getText("MonsterAttacks");
    //Decrement Healthpoints
    if(currText == 'MonsterAttacks'){
        if (monster.monLevel > monsterLvl[monster_index]) {//opponent is stronger
            monsterStrength[monster_index] = monsterStrength[monster_index]
                - Math.floor(Math.random() * (monster.monLevel * 2) + 2);
        }
        else {
            monsterStrength[monster_index] = monsterStrength[monster_index]
                - Math.floor(Math.random() * monster.monLevel + 2)
        }
    
        var deadlyAttack = '';
        if (monster_index < 0){ //no monster
            if (Math.random() <= 0.5){
                monsterStrength[monster_index] = 0;
                redrawFight();
                deadlyAttack = 'sooDeadly';
            }
            else {
                redrawFight();
                deadlyAttack = 'justAScratch';
            }
        }
        else if ((monster_index >= 0 && monsterStrength[monster_index] <= 0)){ 
                monsterStrength[monster_index] = 0;
                redrawFight();
            deadlyAttack = 'sooDeadly';
        }
        else if(monsterStrength[monster_index] > 0) {
            deadlyAttack = 'justAScratch';
        }
    
    }
    
    window.addEventListener("keydown", function (e) {
        if (deadlyAttack == 'justAScratch' && e.keyCode == 13 && currText != 'YourAction') {
            deadlyAttack = 'none';
            document.getElementById(currText).style.display = 'none';
            redrawFight();
            nextAction();
        }
    });

    window.addEventListener("keydown", function (e) {
        if (deadlyAttack == 'sooDeadly' && e.keyCode == 13 && currText != 'YourAction') {
            deadlyAttack = 'none';
            lost = true;
            redrawFight();
            endFight();
        }
    });
}

