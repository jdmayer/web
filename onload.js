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
        if(fight && !actionIsRunning){
            switch(e.keyCode){
                case 65:
                    if(monster_index >= 0) { 
                        attackMonster(); 
                    } 
                    else { 
                        noMonster(); 
                    } 
                    break;
                case 67:
                    catchMonster();
                    break;
                case 70:
                    feedMonster();
                    break;
                case 82:
                    runAway();
                    break;
            }
        }
        if ((isGameOver || isLevelScreen) && e.keyCode == 13){
            isLevelScreen = false;
            isGameOver = false;
            
            if(explanation){
                explanation = false;
                lvlExplanation();
            }
            else{
                startNewLevel();                
            }
        }
        if(fightMsg && e.keyCode == 13){
            startFight();
        }

        if(noMonsterNoFight && e.keyCode == 13){ 
            //console.log(noMonsterNoFight); 
            noMonsterNoFight = false; 
            gameOver(); 
        } 
        if(e.keyCode == 13 && text){
            //showText();
            document.getElementById(currText).style.display='none';
            document.getElementById(currBG).style.display='none';

            text = false;
            console.log('get out' + charMeet);
            if(charMeet)
                visited[gameMap[player.tileTo[1] * map.width + player.tileTo[0]]] = 10;
                charMeet = false;
        }
    });
};