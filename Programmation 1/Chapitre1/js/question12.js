var noteMi;
var noteFin;
var noteLab;
var noteFinale;

//Input notes
noteMi = prompt("Note de l'examen de mi-session en pourcentage:");
noteFin = prompt("Note de l'examen de fin de session en pourcentage:");
noteLab = prompt("Note de laboratoire en pourcentage:");

//Calcul note finale
noteFinale = (noteMi*0.3)+(noteFin*0.5)+(noteLab*0.2);

//Output note finale
alert("Votre note finale est de: " + noteFinale + "%.");
