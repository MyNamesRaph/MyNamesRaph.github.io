var numA;
var numB;
var resultat;

numA = prompt("num 1:");
numB = prompt("num 2:");

if (numB != 0) {
    resultat = numA / numB;
    document.write(resultat);
}
else {
    alert("Division par 0 interdite.");
}