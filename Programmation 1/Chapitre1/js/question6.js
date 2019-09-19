var nom;
var prixDetail;
var prixGros;
var profit;

//Input du nom et du prix
nom = prompt("Nom du produit:");
prixDetail = prompt("Prix de detail du produit:");

//Calculs
prixGros = Math.round(100 * prixDetail * 0.66)/100;
profit = Math.round(100* prixDetail - prixGros)/100;

//Output des résultats
alert("Le prix de gros pour " + nom + " est de " + prixGros + "$ et le profit attendu est de " + profit + "$.");