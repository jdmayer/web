function endFight() {
    audioFight.pause();
    endingFight = true;
    if(!lost){
        audioWon.play();
        if (charFight && !lost) {
            text = true
            currText = 'WinKid';
            showText();
    
            charFight = false;
            markAsWon();
        }
        else if (!caught && !charFight && !lost) {
            text = true
            currText = 'WonMonster';
            showText();
        }
        
        else if(caught){
            text = true;
            currText = 'Caught';
            showText();
        }
        
    
        if (!lost && !caught && monster_index >= 0) {
            monsterStrength[monster_index] = monsterLvl[monster_index] * 8 + monster.monLevel * 2;
            if (Math.floor(monsterStrength[monster_index] / 8) > monsterLvl[monster_index]) {
                text = true;
                currText = 'LevelUp';
                showText();
                monsterLvl[monster_index] = monsterLvl[monster_index] + 1;
            }
        }
    }

    if(lost){
        text = true;
        currText = 'Lost';
        showText();
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