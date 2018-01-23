function startLevel() {
    resetItems(); 
    console.log("new level");
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

function gameOver() {
    audioFight.pause();
    audioGameOver.play();
    isGameOver = true;
    fight = false;
    charFight = false;
    item_stone_count = 0;
    item_key_count = 0;

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 650, 488);
    ctx.fillStyle = "white";
    ctx.font = "20pt Helvetica";
    ctx.strokeStyle = "red";
    ctx.strokeText("GAME OVER", 250, 244);
    ctx.font = "10pt Helvetica";
    ctx.fillText("Press Enter to Continue", 260, 280);
}
 
function startNewLevel(){
        player = new Character();
        initWonMap();
       // initInteracionMaps(); //for?
        actionIsRunning = false;

        explanation = true;
        if(level == 1){
            gameMap = gameMap_level1.slice(0); //slice clones the array
            requestAnimationFrame(drawGame);
            return true;
        }
        else if(level == 2){
            gameMap = gameMap_level2.slice(0);
            requestAnimationFrame(drawGame);
            return true;
 
        }
        else if(level == 3){
            gameMap=gameMap_level3.slice(0);
            requestAnimationFrame(drawGame);
            return true;
 
        }
        else if(level > 3){
            window.alert("This Level has not been developed yet. Restart the game for more fun!");
        }
}

function lvlExplanation() {
    isLevelScreen = true;
    ctx.fillStyle = "darkred";
    ctx.fillRect(0, 0, culling.screen[0], culling.screen[1]);

    document.getElementById('startExplanation').style.display='block';
}

function initInteracionMaps(){
    for(var i = 0; i < mapSize; i++){
        visited[i] = -1;
        msgNr[i] = -1;
    }
}

function resetItems(){
    item_stone_count = 0;
    item_key_count = 0;
}