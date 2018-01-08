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
}
 
function gameOver(){
    audioFight.pause();
    audioGameOver.play();
 
    isGameOver = true;
    fight = false;
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
        actionIsRunning = false;
        monster_strength = monster_lvl * 8;
 
        if(level == 1){
            requestAnimationFrame(drawGame);
            return true;
        }
        else if(level == 2){
            audioBackground = new Audio("audio/Bring Me The Horizon - Avalanche.mp3");
            gameMap = gameMap_level2;
            requestAnimationFrame(drawGame);
            return true;
 
        }
        else if(level == 3){
            audioBackground = new Audio("audio/Bring Me The Horizon - Avalanche.mp3");
            gameMap=gameMap_level3;
            requestAnimationFrame(drawGame);
            return true;
 
        }
        else if(level > 3){
            console.log("This level has not been developed yet");
        }
}