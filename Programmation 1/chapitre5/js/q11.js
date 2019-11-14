var familles = [];
const nbFamille = 20;
var maxEnfants = 10;

for (i=0; i<maxEnfants; i++){
    familles[i] = 0;
}

for (i=0; i<nbFamille; i++) {
    var nbEnfants = Number(prompt("Nombre d'enfants"));

    if (nbEnfants < maxEnfants) {
        for (j=0; j<maxEnfants; j++) {
            if (nbEnfants === j) {
                familles[j]++;
            }
        }
    }
    else {
        familles[maxEnfants-1]++;
    }
}
console.log(familles);
for (i=0; i<maxEnfants; i++) {
    document.writeln(i);
    document.writeln(familles[i] + "<br>");
}
