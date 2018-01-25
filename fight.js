function nextAction() {
    getText("YourAction");
    actionIsRunning = false; //needed for eventListener in onload
}

function runAway() {
    actionIsRunning = true;
    var fled = false;
    var r = Math.random();
    if (r <= 0.5 && !charFight) {
        fled = true;
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
        var tmp = false;
        window.addEventListener("keydown", function (e) {
            if (!tmp && !fled && e.keyCode == 13) {
                tmp = true;
                monsterReacts();
            }
        });
    }
}

function feedOtherMonster() {
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

function feedOwnMonster() {
    var reaction = false;
    actionIsRunning = true;
    if(item_count > 0){
        getText("OwnEats");
        item_count--;

        if(currMonster.strength < currMonster.maxHealth) {
            if(currMonster.strength + 8 <= currMonster.maxHealth){
                currMonster.strength = currMonster.strength + 8;
            }
            else{
                currMonster.strength = currMonster.maxHealth;
            }
        }    
    }
    else{
        getText("NotItem");
    }

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
    getText("TryCatch");
    drawAnimation(net);

    if (r <= chance_of_catching) { 
        monster_index = monster.index;
        monsters[monster_index] = monster;

        caughtMonster[monster.index] = true;
        caught = true;
        lost = false;

        window.addEventListener("keydown", function (e) {
            var tmp = true;
            if (tmp && r <= chance_of_catching && caught && e.keyCode == 13) {
                tmp = false;
                options = false;
                chance_of_catching = 0
                audioFight.pause();
                endFight();
            }
        });
    }
    else {
        caught = false;
        getText("NotCaught");
        var tmp = true;
        window.addEventListener("keydown", function (e) {
            if (tmp && !caught && e.keyCode == 13) {
                tmp = false;
                redrawFight();
                monsterReacts();
            }
        });
    }
}

function noMonster() {
    getText("NoMonsterFight");
    var tmp = true;
    window.addEventListener("keydown", function (e) {
        if (tmp && fight && e.keyCode == 13) {
            nextAction();
            tmp = false;
        }
    });
}

function monsterReacts() {
    var r = Math.random();
    var watching = false;
    if (r <= 0.6) {
        isAttacking = true;
        monsterAttacks();
    }
    else {
        getText("MonsterWatches");
        watching = true;

        window.addEventListener("keydown", function (e) {
            if (watching && e.keyCode == 13) {
                watching = false;
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
    getAttack();

    if (monster.monLevel < currMonster.monLevel) {//your monster is stronger
        monster.strength = monster.strength - Math.floor(Math.random() * (currMonster.monLevel * 2) + 2);
    }
    else {
        monster.strength = monster.strength - Math.floor(Math.random() * currMonster.monLevel + 2);
    }

    if (monster.strength <= 0) {
        monster.strength = 0;
        redrawFight();
        endFight();
    }
    else {
        var attacks = true;
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
    getAttack();
    //Decrement Healthpoints
    if(currText == 'MonsterAttacks'){
        if (monster.monLevel > currMonster.monLevel){//opponent is stronger
            currMonster.strength = currMonster.strength
                - Math.floor(Math.random() * (monster.monLevel * 2) + 2);
        }
        else {
            currMonster.strength = currMonster.strength
                - Math.floor(Math.random() * monster.monLevel + 2)
        }
    
        var deadlyAttack = '';
        if (monster_index < 0){ //no monster
            if (Math.random() <= 0.4){
                currMonster.strength = 0;
                redrawFight();
                deadlyAttack = 'sooDeadly';
            }
            else {
                redrawFight();
                deadlyAttack = 'justAScratch';
            }
        }
        else if ((monster_index >= 0 && currMonster.strength <= 0)){
                currMonster.strength = 0;
                redrawFight();
                deadlyAttack = 'sooDeadly';
        }
        else if(currMonster.strength > 0 && monster_index >= 0) {
            deadlyAttack = 'justAScratch';
        }
    
    }
    window.addEventListener("keydown", function (e) {
        if (deadlyAttack == 'justAScratch' && e.keyCode == 13 && currText != 'YourAction' && !lost) {
            deadlyAttack = 'none';
            document.getElementById(currText).style.display = 'none';
            redrawFight();
            nextAction();
        }
    });

    window.addEventListener("keydown", function (e) {
        if (deadlyAttack == 'sooDeadly' && e.keyCode == 13 && currText != 'YourAction') {
            deadlyAttack = 'none';
            options = false;
            lost = true;
            
            redrawFight();
            endFight();
        }
    });
}

