var base = Number(prompt("Entrez la base"));
var exp = Number(prompt("Entrez l'exposant max"));

for (i = 0; i <= exp; i++){
    document.writeln(base + " exp " + i + " = " + (base**i) + "<br>")
}