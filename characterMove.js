function moveCharacter(currentFrameTime){  
    //check for action AND fight in first if-clause
    //ATTENTION
    //ADD numbers where the person can walk on 
    if(!player.moves(currentFrameTime)) {
            //up
            if(keysDown[38] && player.tileFrom[1] > 0 && (
                gameMap[getIndex(player.tileFrom[0], player.tileFrom[1] - 1)] <= 8)) { 
                    player.tileTo[1] -= 1;
            }
            //down
            else if(keysDown[40] && player.tileFrom[1] < (map.height - 1) && (
                gameMap[getIndex(player.tileFrom[0],player.tileFrom[1]+1)] <= 8)) {
                    player.tileTo[1] += 1;
            }
            //left
            else if(keysDown[37] && player.tileFrom[0] > 0 && (
                gameMap[getIndex(player.tileFrom[0] - 1, player.tileFrom[1])] <= 8)) {
                    player.tileTo[0] -= 1;
            }
            //right
            else if(keysDown[39] && player.tileFrom[0] < (map.width - 1) && (
                gameMap[getIndex(player.tileFrom[0] + 1, player.tileFrom[1])] <= 8)){
                    player.tileTo[0] += 1;
            }

        if(player.tileFrom[0] != player.tileTo[0] || player.tileFrom[1] != player.tileTo[1]){
            player.timeMoved = currentFrameTime;
        }
    }
}