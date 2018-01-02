function startLevel(){
    //IF TIME COOL FADE OUT WITH WAITING SCREEN
    isLevelScreen = true;
    isGameOver = false;
    ctx.fillStyle = "darkred"; 
    ctx.fillRect(0, 0, culling.screen[0], culling.screen[1]);

    ctx.fillStyle = "white";
    ctx.font = "20pt Helvetica";
    ctx.fillText("LEVEL " + level, 280, 244);
    ctx.font = "10pt Helvetica";
    ctx.fillText("Press Enter to Continue", 260, 280);
    console.log("start Level");
}

function gameOver(){
    isGameOver = true;
    fight=false;
    
    ctx.fillStyle="black";
    ctx.fillRect(0,0,650,488);
    ctx.fillStyle = "white";
    ctx.font = "20pt Helvetica";
    ctx.strokeText("GAME OVER", 250, 244);
    ctx.font = "10pt Helvetica";
    ctx.fillText("Press Enter to Continue", 260, 280);
}

function startNewLevel(){
        player = new Character();
        actionIsRunning = false;

        if(level == 1){
            requestAnimationFrame(drawGame);
            return true;
        }
        else if(level == 2){
            gameMap = gameMap_level2;
            requestAnimationFrame(drawGame);
            return true;

        }
        else if(level == 3){
            gameMap=gameMap_level3;
            requestAnimationFrame(drawGame);
            return true;

        }
        else if(level > 3){
            console.log("This level has not been developed yet");
        }
}