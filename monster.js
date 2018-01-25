Dax = new Monster(); 
Flace = new Monster(); 
Lavora = new Monster(); 
Iglo = new Monster();   
Looki = new Monster(); 
Prince = new Monster(); 
Intestria = new Monster(); 
Furry = new Monster(); 
Tree = new Monster(); 
//favourite monster:
currMonster = new Monster();
var monsters = [Dax, Flace, Lavora, Iglo, Looki, Prince, Intestria, Furry, Tree];

function Monster() {
    this.index = getMonIndex();
    this.name = monsterName[this.index];
    this.monLevel = getLevel();
    this.strength = this.monLevel * 8;
    this.maxHealth = this.strength; 
};
 
Monster.prototype.drawOpponent = function(){
    ctx.drawImage(monsterImg[this.index], 140, 10, 140, 140);
    ctx.fillText(this.name, 350, 50);
    ctx.fillText("LVL: "  + this.monLevel, 350, 70);
    ctx.fillText("HP (" + this.strength + '/' + this.maxHealth + ')', 420, 70);
    var i = 1;
    while(i < this.strength && i <= 100){ //else exceedes screen!
        ctx.fillText("|", 418 +i+i, 50);
        i++;
    }
}

Monster.prototype.drawOwnMonster = function(){
    this.name = monsterName[this.index];
    ctx.drawImage(monsterImgBack[this.index], 400, 220, 150, 150);
    ctx.fillText(this.name, 50, 280);
    ctx.fillText("LVL: "  + this.monLevel, 50, 300);
    ctx.fillText("HP (" + this.strength + '/' + this.maxHealth + ')', 120, 300);
    var i = 1;
    while(i < this.strength && i <= 100){
        ctx.fillText("|", 118 +i+i, 280);
        i++;
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
            tmpLvl = Math.floor(Math.random() * 6 + 9); //9-16
            break;
    }
    return tmpLvl;
}

//not every monster in every level!
function getMonIndex(){
    var tmpIndex = 0;
    switch(level){
        case 1:
            tmpIndex = Math.floor(Math.random()* 3); //0-2
            break;
        case 2:
            tmpIndex = Math.floor(Math.random()* 3 + 3); //3-5
            break;
        case 3:
            tmpIndex = Math.floor(Math.random() * 3 + 6); //6-8
            break;
    }
    return tmpIndex;
}

function changeMonster(){
    window.addEventListener("keydown",function(e){
        if(!fight){
            switch(e.keyCode){
                case 48:
                    checkChange(0);
                    break;
                case 49: 
                    checkChange(1);
                    break;
                case 50:
                    checkChange(2);
                    break;
                case 51:
                    checkChange(3);
                    break;
                case 52:
                    checkChange(4);
                    break;
                case 53: 
                    checkChange(5);
                    break;
                case 54:
                    checkChange(6);
                    break;
                case 55:
                    checkChange(7);
                    break;
                case 56:
                    checkChange(8);
                    break;
            }
        }
    });
}

function checkChange(newFav){
    if(caughtMonster[newFav] == true && newFav != monster_index){        
        monster_index = newFav; 
        getText("ChangedMonster");
    }
}