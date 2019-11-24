class Warrior {
    constructor(HP,STR,AGI,PRC) {
        this.HP = HP;
        this.STR = STR;
        this.AGI = AGI;
        this.LUK = Math.random();
        this.PRC = PRC;
    }

    Attack(){
        let DMG = Math.floor((this.STR*this.PRC*this.AGI)*this.LUK);
        this.LUK = Math.random();
        return DMG;
    }
}

let warrior1 = new Warrior(100,Math.floor(Math.random()*10+1),Math.floor(Math.random()*10+1),Math.floor(Math.random()*10+1));
let warrior2 = new Warrior(100,Math.floor(Math.random()*10+1),Math.floor(Math.random()*10+1),Math.floor(Math.random()*10+1));
console.log(warrior1);
console.log(warrior2);

while (warrior1.HP > 0 && warrior2.HP > 0) {
    let dmg1 = warrior1.Attack();
    let dmg2 = warrior2.Attack();
    warrior2.HP -= dmg1;
    warrior1.HP -= dmg2;
    document.write("Warrior 1 HP: " + warrior1.HP + "<br>Warrior 2 HP: " + warrior2.HP + "<br>");

}
if (warrior1.HP > warrior2.HP) {
    document.write("Warrior 1 won !");
}
else {
    document.write("Warrior 2 won !");
}
