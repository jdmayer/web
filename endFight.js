function endFight() { 
    console.log("IN END AFTER FIGHT");
    audioFight.pause();
    var endingFight = true;
    if(!lost){
        audioWon.play();
        if (charFight && !lost) {
            redrawFight();
            getText('WonKid');
    
            charFight = false;
            markAsWon();
        }
        else if (!caught && !charFight && !lost) {
            redrawFight();
            getText('WonMonster');
        }
        
        else if(caught){ 
            getText('Caught');
        }
        
    
        if (!lost && !caught && monster_index >= 0) {
            monsterStrength[monster_index] = monsterLvl[monster_index] * 8 + monster.monLevel * 2;
            if (Math.floor(monsterStrength[monster_index] / 8) > monsterLvl[monster_index]) {
                getText('LevelUp');
                monsterLvl[monster_index] = monsterLvl[monster_index] + 1;
            }
        }
    }

    if(lost){
        redrawFight(); //to get rid of options
        getText('Lost');
        if(monster_index >= 0)
            monsterStrength[monster_index] = monsterLvl[monster_index] * 8;
    }

    options = false;
    window.addEventListener("keydown", function (e) { 
        if (endingFight && e.keyCode == 13) {console.log("in loop"+endingFight);
            endingFight = false;
            afterFight();
        }
    });
}

function afterFight() {
    document.getElementById(currText).style.display = 'none';
    fight = false;

    actionIsRunning = false;
    firstAction = false;
    caught = false;
    text = false;

    if(!lost){
        audioWon.pause();
        audioBackground.play();
    }
    lost = false;
    console.log("ended fight " + fight);
}