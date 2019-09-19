var devise = prompt("Entrez la devise (U pour USA, E pour EURO et T pour thailande):");
var deviseDepart = prompt("Quelle devise sera la devise de départ? (C pour Canadienne, O pour la devise étrangère)");
var num;
var resultat;

if (devise === "U" || devise === "u") {
    if (deviseDepart === "C" || deviseDepart === "c") {
        num = Number(prompt("Quelle est le montant d'argent que vous voulez convertir?"));
        resultat = num / 1.25;
        document.write(num + "CAD = " + resultat + "USD");
    }
    else if (deviseDepart === "O" || deviseDepart === "o"){
        num = Number(prompt("Quelle est le montant d'argent que vous voulez convertir?"));
        resultat = num * 1.25;
        document.write(num + "USD = " + resultat + "CAD");
    }
    else {
        alert("Veuillez saisir une devise de départ valide ! (C pour Canadienne, O pour la devise étrangère)");
    }
}
else if (devise === "E" || devise === "e") {
    if (deviseDepart === "C" || deviseDepart === "c") {
        num = Number(prompt("Quelle est le montant d'argent que vous voulez convertir?"));
        resultat = num / 1.5;
        document.write(num + "CAD = " + resultat + "EUR");
    }
    else if (deviseDepart === "O" || deviseDepart === "o"){
        num = Number(prompt("Quelle est le montant d'argent que vous voulez convertir?"));
        resultat = num * 1.5;
        document.write(num + "EUR = " + resultat + "CAD");
    }
    else {
        alert("Veuillez saisir une devise de départ valide ! (C pour Canadienne, O pour la devise étrangère)");
    }
}
else if (devise === "T" || devise === "t") {
    if (deviseDepart === "C" || deviseDepart === "c") {
        num = Number(prompt("Quelle est le montant d'argent que vous voulez convertir?"));
        resultat = num / 32;
        document.write(num + "CAD = " + resultat + "BATHS");
    }
    else if (deviseDepart === "O" || deviseDepart === "o"){
        num = Number(prompt("Quelle est le montant d'argent que vous voulez convertir?"));
        resultat = num * 32;
        document.write(num + "BATHS = " + resultat + "EUR");
    }
    else {
        alert("Veuillez saisir une devise de départ valide ! (C pour Canadienne, O pour la devise étrangère)");
    }
}
else {
    alert("Veuillez saisir une devise valide ! (U pour USA, E pour EURO et T pour thailande)");
}