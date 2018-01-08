function moveCharacter(currentFrameTime){   
    if(!player.moves(currentFrameTime) && !fight) {
            //up
            if(keysDown[38] && player.tileFrom[1] > 0 && (
                gameMap[getIndex(player.tileFrom[0], player.tileFrom[1] - 1)] <= 9) ||
                keysDown[38] && player.tileFrom[1] > 0 && (
                gameMap[getIndex(player.tileFrom[0], player.tileFrom[1] - 1)] == 20
                || gameMap[getIndex(player.tileFrom[0], player.tileFrom[1] - 1)] == 31
                || gameMap[getIndex(player.tileFrom[0], player.tileFrom[1] - 1)] == 32)) { 
                    player.tileTo[1] -= 1;
                    checkForAction();
            }
            //down
            else if(keysDown[40] && player.tileFrom[1] < (map.height - 1) && (
                gameMap[getIndex(player.tileFrom[0],player.tileFrom[1]+1)] <= 9) ||
                keysDown[40] && player.tileFrom[1] < (map.height - 1) && (
                gameMap[getIndex(player.tileFrom[0],player.tileFrom[1]+1)] == 20
                || gameMap[getIndex(player.tileFrom[0],player.tileFrom[1]+1)] == 31
                || gameMap[getIndex(player.tileFrom[0],player.tileFrom[1]+1)] == 32)) {
                    player.tileTo[1] += 1;
                    checkForAction();
            }
            //left
            else if(keysDown[37] && player.tileFrom[0] > 0 && (
                gameMap[getIndex(player.tileFrom[0] - 1, player.tileFrom[1])] <= 9) ||
                keysDown[37] && player.tileFrom[0] > 0 && (
                gameMap[getIndex(player.tileFrom[0] - 1, player.tileFrom[1])] == 20
                || gameMap[getIndex(player.tileFrom[0] - 1, player.tileFrom[1])] == 31
                || gameMap[getIndex(player.tileFrom[0] - 1, player.tileFrom[1])] == 32)) {
                    player.tileTo[0] -= 1;
                    checkForAction();
            }
            //right
            else if(keysDown[39] && player.tileFrom[0] < (map.width - 1) && (
                gameMap[getIndex(player.tileFrom[0] + 1, player.tileFrom[1])] <= 9) || 
                keysDown[39] && player.tileFrom[0] < (map.width - 1) && (
                gameMap[getIndex(player.tileFrom[0] + 1, player.tileFrom[1])] == 20
                || gameMap[getIndex(player.tileFrom[0] + 1, player.tileFrom[1])] == 31
                || gameMap[getIndex(player.tileFrom[0] + 1, player.tileFrom[1])] == 32)) {
                    player.tileTo[0] += 1;
                    checkForAction();
            }
            
        if(player.tileFrom[0] != player.tileTo[0] || player.tileFrom[1] != player.tileTo[1]){
            player.timeMoved = currentFrameTime;
        }
    }
}

function moveImage(){
//no move
    if(keysDown[37] == false && keysDown[38] == false && 
       keysDown[39] == false && keysDown[40] == false){
        ctx.drawImage(lastMove, culling.offset[0] + player.position[0], 
            culling.offset[1] + player.position[1],
            player.dimensions[0], player.dimensions[1]);
    }

//left
    if(keysDown[37] == true){
        ctx.drawImage(player_left1, culling.offset[0] + player.position[0], 
            culling.offset[1] + player.position[1],
            player.dimensions[0], player.dimensions[1]);
        ctx.drawImage(player_left2, culling.offset[0] + player.position[0], 
            culling.offset[1] + player.position[1],
            player.dimensions[0], player.dimensions[1]);
        lastMove = player_left1;
    }

//up
    if(keysDown[38] == true){
        ctx.drawImage(player_back1, culling.offset[0] + player.position[0], 
            culling.offset[1] + player.position[1],
            player.dimensions[0], player.dimensions[1]);
        ctx.drawImage(player_back2, culling.offset[0] + player.position[0], 
            culling.offset[1] + player.position[1],
            player.dimensions[0], player.dimensions[1]);
        ctx.drawImage(player_back3, culling.offset[0] + player.position[0], 
            culling.offset[1] + player.position[1],
            player.dimensions[0], player.dimensions[1]);
        lastMove = player_back1;
    }

//right
    if(keysDown[39] == true){
        ctx.drawImage(player_right1, culling.offset[0] + player.position[0], 
            culling.offset[1] + player.position[1],
            player.dimensions[0], player.dimensions[1]);
        ctx.drawImage(player_right2, culling.offset[0] + player.position[0], 
            culling.offset[1] + player.position[1],
            player.dimensions[0], player.dimensions[1]);
        lastMove = player_right1;
    }

//down
    if(keysDown[40] == true){
        ctx.drawImage(player_front1, culling.offset[0] + player.position[0], 
            culling.offset[1] + player.position[1],
            player.dimensions[0], player.dimensions[1]);
        ctx.drawImage(player_front2, culling.offset[0] + player.position[0], 
            culling.offset[1] + player.position[1],
            player.dimensions[0], player.dimensions[1]);
        ctx.drawImage(player_front3, culling.offset[0] + player.position[0], 
            culling.offset[1] + player.position[1],
            player.dimensions[0], player.dimensions[1]);
        lastMove = player_front1;
    }
}