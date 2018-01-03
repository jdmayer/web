var monsterImg = [bird, cat, dragon, hedgehog, owl, prince, rose, wolf];
var monsterName = ["Dax", "Flace", "Lavora", "Iglo", "Looki", "Prince", "Intestria", "Furry"];

function Monster() {
    this.strength = Math.floor(Math.random() * 80) + 20;
    //if x < 20 -> flees
    //if x > 20 + gerade -> can be caught
    this.index = Math.floor(Math.random() * 8);
    console.log("a", this.index);
    this.name = monsterName[this.index];
    console.log(this.index, "this");
};

Monster.prototype.drawOpponent = function(){
    console.log(this.index);
    ctx.drawImage(monsterImg[this.index], 140, 10, 140, 140);
}
