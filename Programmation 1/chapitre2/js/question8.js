var tauxHoraire;
var heures;
var overTime;
var salaire;

//input taux et heures
tauxHoraire = Number(prompt("Taux horaire:"));
heures = Number(prompt("Nombre d'heures travaillées:"));

//calculs
if (heures > 40) {
    overTime = heures - 40;
    heures = heures - overTime;
    salaire = (heures * tauxHoraire) + (overTime * (tauxHoraire*2));
    document.write("Salaire:" + salaire + "$");
}
else {
    salaire = (heures * tauxHoraire);
    document.write("Salaire:" + salaire + "$");
}