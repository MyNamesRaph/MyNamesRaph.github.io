var numA;
var numB;

numA = prompt("num 1:");
numB = prompt("num 2:");

if (numA > numB) {
    alert(numA + " est plus grand");
    alert(numB + " est plus petit");
}
else if (numA < numB) {
    alert(numB + " est plus grand");
    alert(numA + " est plus petit");
}
else {
    alert("Veuillez utiliser des nombres différents!");
}