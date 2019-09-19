var sommePositif = 0;
var sommeNegatif = 0;

var numUser = Number(prompt("Chiffre:"));

while (numUser != 0) {
    if (numUser > 0) {
        sommePositif += numUser;
    }
    else {
        sommeNegatif += numUser;
    }
    numUser = Number(prompt("Chiffre:"));
}
document.writeln("Somme positifs:" + sommePositif);
document.writeln("Somme négatifs:" + sommeNegatif);