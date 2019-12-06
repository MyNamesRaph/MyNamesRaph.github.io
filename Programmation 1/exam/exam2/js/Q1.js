var advType = String(prompt("Entrez le type du pokémon adverse"));
var rand1 = Math.round(Math.random());
var rand2 = Math.round(Math.random());
var baseDegat = (rand1+rand2)*100;

if (rand1 === 1) {
    document.write("Face!<br>")
}
else {
    document.write("Pile!<br>")
}
if (rand2 === 1) {
    document.write("Face!<br>")
}
else {
    document.write("Pile!<br>")
}

if (advType.toUpperCase() === "EAU") {
    let degats = baseDegat*2;
    document.write("L'attaque fait : "+degats+" de dommages!");
}
else {
    let degats = baseDegat;
    document.write("L'attaque fait : "+degats+" de dommages!");
}