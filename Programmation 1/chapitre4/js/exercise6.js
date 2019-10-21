var i = 1;
var depot = 0.1;
var solde = 0;

for (i = 1; i <=10; i++) {
    solde = Math.round(100*(solde += depot))/100;
    document.write("Jour: " + i + "$ Dépot: " + depot + "$ Solde: " + solde + "$<br>");
    depot = Math.round(100*(depot*2))/100;
}