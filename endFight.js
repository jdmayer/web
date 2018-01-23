function endFight() { 
    audioFight.pause();
    var endingFight = true;
    if(!lost){
        audioWon.play();
        if (charFight && !lost) {
            //redrawFight();
            getText('WonKid');
    
            charFight = false;
            markAsWon();
        }
        else if (!caught && !charFight && !lost) {
            //redrawFight();
            getText('WonMonster');
        }
        
        else if(caught){ 
            getText('Caught');
        }
    
        if (!lost && !caught && monster_index >= 0) {
            currMonster.maxHealth = currMonster.maxHealth + monster.monLevel;
            if (Math.floor(currMonster.maxHealth / 8) > currMonster.monLevel) {
                currMonster.strength = currMonster.maxHealth;
                getText('LevelUp');
                currMonster.monLevel++;;
            }
            else{
                currMonster.strength = currMonster.strength + monster.monLevel;
                //new strength added!
            }
        }
    }

    if(lost){
        redrawFight(); //to get rid of options
        getText('Lost');
        if(monster_index >= 0)
            currMonster.strength = currMonster.maxHealth;
    }

    if(!caught){
        monsters[monster_index] = currMonster;
    }

    options = false;
    window.addEventListener("keydown", function (e) { 
        if (endingFight && e.keyCode == 13){
            endingFight = false;
            afterFight();
        }
    });
}

function afterFight() {
    document.getElementById(optionText).style.display = 'none';
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