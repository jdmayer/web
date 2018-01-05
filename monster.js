var monsterImg = [bird, cat, dragon, hedgehog, owl, prince, rose, wolf];
var monsterName = ["Dax", "Flace", "Lavora", "Iglo", "Looki", "Prince", "Intestria", "Furry"];

function Monster() {
    this.strength = Math.floor(Math.random() * 80) + 20;
    //if x < 20 -> flees
    //if x > 20 + gerade -> can be caught
    this.index = Math.floor(Math.random() * 8);
    this.name = monsterName[this.index];
};

Monster.prototype.drawOpponent = function(){
    ctx.drawImage(monsterImg[this.index], 140, 10, 140, 140);
}

