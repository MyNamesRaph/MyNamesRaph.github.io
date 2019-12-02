var num = "0";
var badCount = 0;

while (num !== "0!") {
    num = String(prompt('Entrez une valeur de 1 à 5. Arrêtez avec "0!"'));
    if (num === "1") {
        document.writeln("Album Enfants<br>");
    }
    else if (num === "2") {
        document.writeln("Album Rock<br>");
    }
    else if (num === "3") {
        document.writeln("Album Détente<br>");
    }
    else if (num === "4") {
        document.writeln("Album Populaire<br>");
    }
    else if (num === "5") {
        document.writeln("Album Jazz<br>");
    }
    else {
        document.writeln("Cette valeur n'est pas disponible<br>");
        badCount++;
    }
    
}
document.writeln("Vous avez entré " + badCount + " mauvaises valeurs");