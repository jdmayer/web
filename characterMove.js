function moveCharacter(currentFrameTime){   
    if(!player.moves(currentFrameTime) && !fight && !text) {
            //up
            if(keysDown[38] && player.tileFrom[1] > 0 && 
                posAllowed(gameMap[getIndex(player.tileFrom[0], player.tileFrom[1] - 1)])){ 
                    player.tileTo[1] -= 1;
                    checkForAction();
            }
            //down
            else if(keysDown[40] && player.tileFrom[1] < (map.height - 1) && 
                posAllowed(gameMap[getIndex(player.tileFrom[0],player.tileFrom[1]+1)])) {
                    player.tileTo[1] += 1;
                    checkForAction();
            }
            //left
            else if(keysDown[37] && player.tileFrom[0] > 0 && 
                posAllowed(gameMap[getIndex(player.tileFrom[0] - 1, player.tileFrom[1])])) {
                    player.tileTo[0] -= 1;
                    checkForAction();
            }
            //right
            else if(keysDown[39] && player.tileFrom[0] < (map.width - 1) && 
                posAllowed(gameMap[getIndex(player.tileFrom[0] + 1, player.tileFrom[1])])){
                    player.tileTo[0] += 1;
                    checkForAction();
            }
            
        if(player.tileFrom[0] != player.tileTo[0] || player.tileFrom[1] != player.tileTo[1]){
            player.timeMoved = currentFrameTime;
        }
    }
}

function moveImage(){ //make the player walk
    if(!text){ //to stop when msgs pop up
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
    else{
        ctx.drawImage(lastMove, culling.offset[0] + player.position[0], 
            culling.offset[1] + player.position[1],
            player.dimensions[0], player.dimensions[1]);
    }
}

function posAllowed(pos){
return pos <= 9 
    || pos == 20
    || pos == 31
    || pos == 32
    || (item_stone_count > 0 
        && ( pos == 21 
            || pos == 22
            || pos == 23
            || pos == 24
            || pos == 35
            || pos == 26
            || pos == 27
            || pos == 28
            || pos == 29));
}