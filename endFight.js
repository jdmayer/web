function endFight() {
    audioFight.pause();
    endingFight = true;
    if(!lost){
        audioWon.play();
        if (charFight && !lost) {
            getText('WinKid');
    
            charFight = false;
            markAsWon();
        }
        else if (!caught && !charFight && !lost) {
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
        getText('Lost');
        if(monster_index >= 0)
            monsterStrength[monster_index] = monsterLvl[monster_index] * 8;
    }
    window.addEventListener("keydown", function (e) { 
        if (endingFight && e.keyCode == 13) {
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
}