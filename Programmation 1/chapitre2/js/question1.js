var numA;
var numB;

numA = prompt("num 1:");
numB = prompt("num 2:");

if (numA > numB) {
    alert(numA + " est plus grand");
}
else if (numA != numB) {
    alert(numB + " est plus grand");
}
else {
    alert("le num 1 et le num 2 sont égaux");
}