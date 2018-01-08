var monsterImg = [bird, cat, dragon, hedgehog, owl, prince, rose, wolf];
var monsterName = ["Dax", "Flace", "Lavora", "Iglo", "Looki", "Prince", "Intestria", "Furry"];
 
function Monster() {
    this.index = Math.floor(Math.random() * 8);
    this.name = monsterName[this.index];
    this.monLevel = 0;
    this.strength = 1;
};
 
Monster.prototype.drawOpponent = function(){
    //this.strength = this.monLevel * 8;
    ctx.drawImage(monsterImg[this.index], 140, 10, 140, 140);
    ctx.fillText(this.name, 350, 50);
    ctx.fillText("LVL: "  + this.monLevel, 350, 70);
    ctx.fillText("HP (" + this.strength + ") : ", 420, 70);
    for(var i = 1; i < this.strength; i++){
        ctx.fillText("|", 490 +i+i, 70);
    }
}

Monster.prototype.drawOwnMonster = function(){
    //this.strength = this.monLevel * 8;
    this.name = monsterName[this.index];
    ctx.drawImage(monsterImgBack[this.index], 400, 220, 150, 150);
    ctx.fillText(this.name, 50, 280);
    ctx.fillText("LVL: "  + this.monLevel, 50, 300);
    ctx.fillText("HP (" + this.strength + ") : ", 120, 300);
    for(var i = 1; i < this.strength; i++){
        ctx.fillText("|", 190 +i+i, 300);
    }
}
 
Monster.prototype.getLevel = function(){
    switch(level){
        case 1:
            this.monLevel = Math.floor(Math.random()* 4  + 1); //1-5
            break;
        case 2:
            this.monLevel = Math.floor(Math.random()* 7 + 4); //4-11
            break;
        case 3:
            this.monLevel = Math.floor(Math.random() * 10 + 9); //9-19
            break;
    }
    this.strength = this.monLevel * 8;
}