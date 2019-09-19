var forme = prompt('Entrez la forme : "O" pour cercle, "R" pour rectangle, "T" pour triangle rectangle, "C" pour carré');
var base;
var hauteur;
var rayon;
var aire;

if (forme === "O" || forme === "o") {
    rayon = Number(prompt("Entrez le rayon du cercle:"));
    aire = Math.PI * rayon**2;
    document.write("Type selectionné: Cercle" + "<br>Rayon = " + rayon + "<br></br>Aire = " + aire);
}
else if (forme === "R" || forme === "r") {
    base = Number(prompt("Entrez la largeur du rectangle:"));
    hauteur = Number(prompt("Entrez la hauteur du rectangle:"));
    aire =  base*hauteur;
    document.write("Type selectionné: Rectangle" + "<br>Largeur = " + base + "<br>Hauteur = " + hauteur + " </br>Aire = " + aire);
}
else if (forme === "T" || forme === "t") {
    base = Number(prompt("Entrez la largeur du triangle rectangle:"));
    hauteur = Number(prompt("Entrez la hauteur du triangle rectangle:"));
    aire =  base*hauteur / 2;
    document.write("Type selectionné: Triangle Rectangle" + "<br>Largeur = " + base + "<br>Hauteur = " + hauteur + " </br>Aire = " + aire);
}
else if (forme === "C" || forme === "c") {
    base = Number(prompt("Entrez la longeur du coté du carré"));
    aire = base**2;
    document.write("Type selectionné: Carré" + "<br>Coté = " + base + "<br></br>Aire = " + aire);
}
else {
    alert("Entrez une lettre valide! O, R, T ou C");
}