function Monster() {
    this.strength = Math.floor(Math.random() * 80) + 20;
    //if x < 20 -> flees
    //if x > 20 + gerade -> can be caught
    this.index = Math.floor(Math.random() * 8);
};

Monster.prototype.drawOpponent = function(){
// function drawOpponent(index){
   // console.log("drew monster" + index);
    switch (this.index){
        case 0:
            ctx.drawImage(bird,140,10,140,140);
            opponent_index = 1;
            break;
        case 1:
            ctx.drawImage(cat,140,10,140,140);
            opponent_index = 2;
            break;
        case 2:
            ctx.drawImage(dragon,140,10,140,140);
            opponent_index = 3;
            break;
        case 3:
            ctx.drawImage(hedgehog,140,10,140,140);
            opponent_index = 4;
            break;
        case 4:
            ctx.drawImage(owl,140,10,140,140);
            opponent_index = 5;
            break;
        case 5:
            ctx.drawImage(prince,140,10,140,140);
            opponent_index = 6;
            break;
        case 6:
            ctx.drawImage(rose,140,10,140,140);
            opponent_index = 7;
            break;
        case 7:
            ctx.drawImage(wolf,140,10,140,140);
            opponent_index = 8;
            break;
    }
}
