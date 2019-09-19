var positif = 0;
var negatif = 0;

var numUser = Number(prompt("Chiffre:"));

while (numUser != 0) {
    if (numUser > 0) {
        positif ++;
    }
    else {
        negatif ++;
    }
    numUser = Number(prompt("Chiffre:"));
}
document.writeln("Num positifs:" + positif);
document.writeln("Num négatifs:" + negatif);