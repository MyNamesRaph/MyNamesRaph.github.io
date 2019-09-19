var base;
var rabais = 0;
var total;

//input prix
base = prompt("Prix de base:");

//calcul reduction

if (base > 200) {
    rabais = base * 0.15;
    total = base - rabais;
}
else {
    total = base;
}

//Output total
alert("Prix de base: " + base + "$\nRabais: " + rabais + "$\nTotal: " + total + "$");
