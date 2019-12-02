let montant = Number(prompt("Montant"));
let terme = Number(prompt("Terme (années):"));
let taux = Number(prompt("Taux d’intérêt(%):"));
let montantTotal = montant;

for (i=1;i<terme;i++) {
    montantTotal = montantTotal + (montantTotal*(taux/100));
}

document.write(montantTotal);
