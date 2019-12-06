let tabChance = [];

for (i=0;i<100;i++) {
    let rand = Math.floor(Math.random()*200)+1;
    tabChance.push(rand);
}
console.log(tabChance);

let nb = Number(prompt("Entrez un nombre de 1 à 200"));
let isNbThere = false;

for (i=0;i<tabChance.length;i++) {
    if(tabChance[i] === nb){
        isNbThere = true;
    }
}

if (isNbThere === true) {
    document.write("Le nombre se trouve dans le tableau");
}
else {
    document.write("Le nombre ne se trouve pas dans le tableau");
}