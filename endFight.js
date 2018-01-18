function endFight() {
    var end = false;
    audioFight.pause();
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
    }

    end = true;
    window.addEventListener("keydown", function (e) {
        if (end && e.keyCode == 13) {
            afterFight();
            end = false;
        }
    });

}

function afterFight() {
   // document.getElementById('YourAction').style.display = 'none';
    console.log("!FINAL" + currText + fight + lost);
    fight = false;
    actionIsRunning = false;
    firstAction = false;
    caught = false;
    text = false;

    console.log("here");
    if(!lost){
        audioWon.pause();
        audioBackground.play();
    }
    console.log("OUT");
    lost = false;
}