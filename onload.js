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
           // document.getElementById(currText).style.display='none';
            switch(e.keyCode){
                case 65: console.log("1");
                    if(monster_index >= 0) { 
                        attackMonster(); 
                    } 
                    else { 
                        noMonster(); 
                    } 
                    document.getElementById('YourAction').style.display='none';
                    break;
                case 67: console.log("2");
                    catchMonster();
                    document.getElementById('YourAction').style.display='none';
                    break;
                case 70: console.log("3");
                    feedMonster();
                    document.getElementById('YourAction').style.display='none';
                    break;
                case 82: console.log("4");
                    runAway();
                    document.getElementById('YourAction').style.display='none';
                    console.log("by action");
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
        if(noMonsterNoFight && e.keyCode == 13){ 
            noMonsterNoFight = false; 
            gameOver(); 
        } 
        if(e.keyCode == 13 && text && currText != 'YourAction'){
            //As YourAction only disappears when you move into action
            console.log('dissapear!' + currText);
            document.getElementById(currText).style.display='none';
            document.getElementById(currBG).style.display='none';

            text = false;
            if(charMeet){
                visited[gameMap[player.tileTo[1] * map.width + player.tileTo[0]]] = 10;
                charMeet = false;
            }
            if(fightMsg){console.log("startfight");
                startFight();
            }
        }
    });
};