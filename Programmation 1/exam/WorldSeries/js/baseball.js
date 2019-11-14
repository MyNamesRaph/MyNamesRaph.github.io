var nom = String(prompt("Entrez les nom du frappeur (0 s'il ne reste plus de joueurs)"));
var nbPres = Number(prompt("Entrez le nombre de présences au bâton"));
var coups = Number(prompt("Entrez le nombre de coups sûrs"));
var moyenne = 0;
var moyenneEquipe = 0;
var nbJoueur = 1;

while (nom !== "0") {
    moyenne = coups / nbPres * 1000;
    moyenneEquipe = moyenneEquipe + moyenne ;
    document.writeln("La moyenne de " + nom + " est de: " + moyenne + "<br>");


    nom = String(prompt("Entrez les nom du frappeur (0 s'il ne reste plus de joueurs)"));
    if (nom !== "0") {
        nbPres = Number(prompt("Entrez le nombre de présences au bâton"));
        coups = Number(prompt("Entrez le nombre de coups sûrs"));
        nbJoueur++;
    }
}
moyenneEquipe = moyenneEquipe / nbJoueur;
document.writeln("La moyenne de l'équipe est de: " + moyenneEquipe + " pour " + nbJoueur + " joueurs.");