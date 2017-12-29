function startLevel(){
    //IF TIME COOL FADE OUT WITH WAITING SCREEN
    ctx.fillStyle = "darkred"; 
    ctx.fillRect(0, 0, culling.screen[0], culling.screen[1]);

    ctx.fillStyle = "white";
    ctx.font = "20pt Helvetica";
    ctx.fillText("LEVEL " + level, 280, 244);
    ctx.font = "10pt Helvetica";
    ctx.fillText("Press Enter to Continue", 260, 280);
 
    startNewLevel();
}

function level2(){
    console.log("Congratulation");
    level++; //just exit
    startLevel();

    requestAnimationFrame(level2); 
}

function gameOver(isGameOver){
    isGameoOver = true;

    ctx.fillStyle="black";
    ctx.fillRect(0,0,650,488);
    ctx.fillStyle = "white";
    ctx.font = "20pt Helvetica";
    ctx.strokeText("GAME OVER", 280, 244);
    ctx.font = "10pt Helvetica";
    ctx.fillText("Press Enter to Continue", 260, 280);
    startNewLevel();
}

function startNewLevel(){
    if(keysDown[13]){
        if(level == 1){
            level++;
            requestAnimationFrame(drawGame);
            return true;
        }
        else if(level == 2){
            requestAnimationFrame(level2);
            return true;

        }
        else if(level > 2){
            console.log("This level has not been developed yet");
        }
    }
    requestAnimationFrame(startLevel);
}