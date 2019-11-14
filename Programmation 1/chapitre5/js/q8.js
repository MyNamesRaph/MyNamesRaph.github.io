var eleves = [];
var moyenne = 0;
const nbEleves = 5;

for (i = 0; i < nbEleves; i++) {
    var eleve = {
        nom: String(prompt("nom")),
        note: Number(prompt("note"))
    };
    eleves.push(eleve);
}

for (i = 0; i < nbEleves; i++) {
    moyenne += eleves[i].note
}
moyenne /=nbEleves;

for (i = 0; i < nbEleves; i++) {
    if (eleves[i].note > moyenne) {
        document.write(eleves[i].nom + "<br>");
    }
}

