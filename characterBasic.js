function Character() {
    this.tileFrom = [1,1];
    this.tileTo = [1,1];
    this.timeMoved = 0;
    this.dimensions = [30,30];
    this.position = [45,45];
    this.speed = 250; 
};

Character.prototype.placeAt = function(x, y) {
    this.tileFrom = [x, y];
    this.tileTo = [x, y];
    this.position = [((tile.width * x) + ((tile.width - this.dimensions[0])/2)),
                     ((tile.height * y) + ((tile.height-this.dimensions[1])/2))]
                                         //to be in the middle of a tile
};

Character.prototype.moves = function(t){
    //doesn't move
    if(this.tileFrom[0] == this.tileTo[0] && this.tileFrom[1] == this.tileTo[1]){
            return false;
    }

    //moved
    if((t - this.timeMoved) >= this.speed){
        this.placeAt(this.tileTo[0], this.tileTo[1]);
        //t is currentTimeFrame
        //timeMoved gets currentTimeFrame after move
        //places character
    }
    //moves
    else {
        this.position[0] = (this.tileFrom[0] * tile.width) + ((tile.width - this.dimensions[0])/2);
        this.position[1] = (this.tileFrom[1] * tile.height) + ((tile.height - this.dimensions[1])/2);

        //moving horizontally
        if(this.tileTo[0] != this.tileFrom[0]){
            var diff = (tile.width / this.speed) * (t - this.timeMoved);
            this.position[0] += (this.tileTo[0] < this.tileFrom[0] ? 0 - diff : diff)
        }

        //moving vertically
        if(this.tileTo[1] != this.tileFrom[1]){
            var diff = (tile.height / this.speed) * (t - this.timeMoved);
            this.position[1] += (this.tileTo[1] < this.tileFrom[1] ? 0 - diff : diff);
        }

        this.position[0] = Math.round(this.position[0]);
        this.position[1] = Math.round(this.position[1]);
    }
    return true;
};

var player = new Character();