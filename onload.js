var audioItem, audioFight, audioGameOver, audioWon; 
var audioBackground; 

window.onload = function() {
    canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');
    //requestAnimationFrame(startLevel);


    //initiating screen measures for culling
    culling.screen = [
        document.getElementById("game").width,
        document.getElementById("game").height
    ];

    startLevel();
    ctx.font = "bold 10pt sans-serif";

    //Audio 
    audioItem = new Audio("audio/ItemAdded.mp3"); 
    audioFight = new Audio("audio/Fight.wav"); 
    audioGameOver = new Audio("audio/gameOver_funky.mp3"); 
    audioWon = new Audio("audio/YouWon.mp3"); 
    audioBackground = new Audio("audio/mary.mp3"); 
 
    //Eventlisteners 
    window.addEventListener("keydown", function(e){
        if(e.keyCode >= 37 && e.keyCode <= 40 ){
            keysDown[e.keyCode] = true;
        } 
    });

    window.addEventListener("keyup", function(e){
        if(e.keyCode >= 37 && e.keyCode <= 40 ){
            keysDown[e.keyCode] = false;
        } 
    });

    window.addEventListener("keydown",function(e){
        if(fight && !actionIsRunning && firstAction){
            switch(e.keyCode){
                case 65:
                    if(monster_index >= 0) { 
                        attackMonster(); 
                    } 
                    else { 
                        noMonster(); 
                    } 
                    document.getElementById('YourAction').style.display='none';
                    break;
                case 67: 
                    if(!charFight){
                        catchMonster();
                        document.getElementById('YourAction').style.display='none';
                    }
                    break;
                case 70:
                    feedMonster();
                    document.getElementById('YourAction').style.display='none';
                    break;
                case 82:
                    runAway();
                    document.getElementById('YourAction').style.display='none';
                    break;
            }
        }
        if ((isGameOver || isLevelScreen) && e.keyCode == 13){
            isLevelScreen = false;
            isGameOver = false;
            audioGameOver.pause();
            audioBackground.play();
            
            if(explanation){
                explanation = false;
                lvlExplanation();
            }
            else{
                startNewLevel();                
            }
        }
        if(noMonsterNoFight && e.keyCode == 13){ 
            noMonsterNoFight = false; 
            gameOver(); 
        } 
        if(e.keyCode == 13 && text && currText != 'YourAction'){
            //As YourAction only disappears when you move into action
            ///console.log('dissapear!' + currText);
            document.getElementById(currText).style.display='none';
            document.getElementById(currBG).style.display='none';

            text = false;
            if(charMeet){
                visited[gameMap[player.tileTo[1] * map.width + player.tileTo[0]]] = 10;
                charMeet = false;
            }
            if(fightMsg){
                startFight();
            }
        }
        if(e.keyCode == 13 && lost && currText == 'Lost'){ //make without?
            lost = false;
            document.getElementById('Lost').style.display='none';
            document.getElementById(currBG).style.display='none';
            text = false;
            gameOver();
            afterFight();
        }
    
    });
};