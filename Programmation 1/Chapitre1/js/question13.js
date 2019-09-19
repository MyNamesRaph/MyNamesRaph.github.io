var noteMi;
var noteFin;
var noteLab;
var noteFinale;
var nom;

//Input informations
nom = prompt("Nom de l'étudiant:");
noteMi = prompt("Note de l'examen de mi-session en pourcentage:");
noteFin = prompt("Note de l'examen de fin de session en pourcentage:");
noteLab = prompt("Note de laboratoire en pourcentage:");

//Calcul note finale
noteFinale = (noteMi*0.3)+(noteFin*0.5)+(noteLab*0.2);

//Output note finale
alert("Nom de l'étudiant: " + nom + "\nExamen de mi-session: " + noteMi + "/100\nExamen de fin de session: " + noteFin + "/100\nLaboratoire: " + noteLab + "/100\nNote finale: " + noteFinale + "/100");
