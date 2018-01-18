//var monsterImg = [bird, cat, dragon, hedgehog, owl, prince, rose, wolf, tree_moni];

function Monster() {
    this.index = getMonIndex();
    this.name = monsterName[this.index];
    this.monLevel = getLevel();
    this.strength = this.monLevel * 8;
   // colorMonsterImg(this.index); //WITH IT THE BLACKENING LOWER BORDER DOESNT WORK!
};
 
Monster.prototype.drawOpponent = function(){
    //this.strength = this.monLevel * 8;
    ctx.drawImage(monsterImg[this.index], 140, 10, 140, 140);
    ctx.fillText(this.name, 350, 50);
    ctx.fillText("LVL: "  + this.monLevel, 350, 70);
    ctx.fillText("HP (" + this.strength + ")", 420, 70);
    for(var i = 1; i < this.strength; i++){
        ctx.fillText("|", 418 +i+i, 50);
    }
}

Monster.prototype.drawOwnMonster = function(){
    this.name = monsterName[this.index];
    ctx.drawImage(monsterImgBack[this.index], 400, 220, 150, 150);
    ctx.fillText(this.name, 50, 280);
    ctx.fillText("LVL: "  + this.monLevel, 50, 300);
    ctx.fillText("HP (" + this.strength + ")", 120, 300);
    for(var i = 1; i < this.strength; i++){
        ctx.fillText("|", 118 +i+i, 280);
    }
}
 
function getLevel(){
    var tmpLvl = 0;
    switch(level){
        case 1:
            tmpLvl = Math.floor(Math.random()* 4  + 1); //1-5
            break;
        case 2:
            tmpLvl = Math.floor(Math.random()* 7 + 4); //4-11
            break;
        case 3:
            tmpLvl = Math.floor(Math.random() * 10 + 9); //9-19
            break;
    }
    return tmpLvl;
}

//not every monster in every level!
function getMonIndex(){
    var tmpIndex = 0;
    switch(level){
        case 1:
            tmpIndex = Math.floor(Math.random()* 4); //0-3
            break;
        case 2:
            tmpIndex = Math.floor(Math.random()* 4 + 3); //3-6
            break;
        case 3:
            tmpIndex = Math.floor(Math.random() * 3 + 6); //6-8
            break;
    }
    return tmpIndex;
}

function changeMonster(){
//FEHLERBEHANDLUNG
//MONSTER NICHT DA
//PRINT MSG IN ALLEN FÄLLEN
    window.addEventListener("keydown",function(e){
       // console.log("switching monsters");
        if(!fight){
            switch(e.keyCode){ //plus show msg if switches
                case 48:
                    monster_index = 0;
                    break;
                case 49: 
                    cmonster_index = 1;
                    break;
                case 50:
                    monster_index = 2;
                    break;
                case 51:
                    monster_index = 3;
                    break;
                case 52:
                    monster_index = 4;
                    break;
                case 53: 
                    monster_index = 5;
                    break;
                case 54:
                    monster_index = 6;
                    break;
                case 55:
                    monster_index = 7;
                    break;
                case 56:
                    monster_index = 8;
                    break;
            }
        }
    });
}