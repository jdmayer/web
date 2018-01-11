function startLevel(){
    isLevelScreen = true;
    isGameOver = false;
    ctx.fillStyle = "darkred"; 
    ctx.fillRect(0, 0, culling.screen[0], culling.screen[1]);
 
    ctx.fillStyle = "white";
    ctx.font = "20pt Helvetica";
    ctx.fillText("LEVEL " + level, 280, 244);
    ctx.font = "10pt Helvetica";
    ctx.fillText("Press Enter to Continue", 260, 280);
    
    explanation = true;
}
 
function gameOver(){
    audioFight.pause();
    audioGameOver.play();
 
    isGameOver = true;
    fight = false;
    charFight = false;
    monsterIcon = monsterGrey;
    ctx.fillStyle="black";
    ctx.fillRect(0,0,650,488);
    ctx.fillStyle = "white";
    ctx.font = "20pt Helvetica";
    ctx.strokeStyle="red";
    ctx.strokeText("GAME OVER", 250, 244);
    ctx.font = "10pt Helvetica";
    ctx.fillText("Press Enter to Continue", 260, 280);
}
 
function startNewLevel(){
        player = new Character();
        initWonMap();
        actionIsRunning = false;
        monster_strength = monster_lvl * 8;
        explanation = true;
        if(level == 1){
            requestAnimationFrame(drawGame);
            return true;
        }
        else if(level == 2){
           // audioBackground = new Audio("ENTER OTHER THEME");
            gameMap = gameMap_level2;
            requestAnimationFrame(drawGame);
            return true;
 
        }
        else if(level == 3){
          //  audioBackground = new Audio("ENTER OTHER THEME");
            gameMap=gameMap_level3;
            requestAnimationFrame(drawGame);
            return true;
 
        }
        else if(level > 3){
            console.log("This level has not been developed yet");
            lvlExplanation();
        }
}

function lvlExplanation(){
    isLevelScreen = true;
    ctx.fillStyle = "darkred"; 
    ctx.fillRect(0, 0, culling.screen[0], culling.screen[1]);
 
    ctx.fillStyle = "white";
    ctx.font = "16pt Helvetica";
    ctx.fillText("The goal of this level is to find all of the hidden keys.", 100, 220);
    ctx.fillText("They are either somewhere in the grass or are owned by people.", 20, 250);
    ctx.fillText("Try and discover every monster there is.", 150, 280);
    ctx.font = "10pt Helvetica";
    ctx.fillText("Press Enter to Continue", 260, 310);

}