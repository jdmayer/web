function nextAction() {
    console.log("in action");
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
        window.addEventListener("keydown", function (e) {
            if (!fled && e.keyCode == 13) {
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
    console.log("CATCHING");
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
            if (r <= chance_of_catching && caught && e.keyCode == 13) {
                options = false;
                chance_of_catching = 0
                audioFight.pause();
                endFight();
            }
        });
    }
    else {
        console.log("not caught");
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

    window.addEventListener("keydown", function (e) {
        if (fight && e.keyCode == 13) {
            console.log("A");
            nextAction();
        }
    });
}

function monsterReacts() {
    console.log("monster reacts");
    var r = Math.random();
    var watching = false;
    if (r <= 0.6) {
        console.log("-attack");
        isAttacking = true;
        monsterAttacks();
    }
    else {
        console.log("-watch");
        watching = true;
        getText("MonsterWatches");

        window.addEventListener("keydown", function (e) {
            if (watching && e.keyCode == 13) {
                watching = false;
                console.log("after watching");
                nextAction();
            }
        });
    }
}

function attackMonster() { console.log("Attack monster");
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
            if (Math.random() <= 0.5){
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
                console.log("DEADLY ATTACK");
                deadlyAttack = 'sooDeadly';
        }
        else if(currMonster.strength > 0 && monster_index >= 0) {
            console.log("just scratch");
            deadlyAttack = 'justAScratch';
        }
    
    }
    console.log("deadly: "+deadlyAttack);
    window.addEventListener("keydown", function (e) {
        if (deadlyAttack == 'justAScratch' && e.keyCode == 13 && currText != 'YourAction' && !lost) {
            deadlyAttack = 'none';
            document.getElementById(currText).style.display = 'none';
            redrawFight();
            console.log("pls not here") + lost;
            nextAction();
        }
    });

    window.addEventListener("keydown", function (e) {
        if (deadlyAttack == 'sooDeadly' && e.keyCode == 13 && currText != 'YourAction') {
            deadlyAttack = 'none';
            options = false;
            lost = true;
            console.log("DEADLY ATTACK END");
            
            redrawFight();
            endFight();
        }
    });
}

