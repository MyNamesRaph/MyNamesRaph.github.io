var prixBase;
var frais;
var commission;
var sousTotal;
var tps;
var tvq;
var total;

//Inputs prix
prixBase = Number(prompt("Prix de base:"));

//Calculs frais
frais = Number(prixBase * 0.02);
commission = Number(prixBase * 0.12);

//Caluls taxes et total
sousTotal = Number(prixBase + commission + frais);
tps = Number(sousTotal*0.05);
tvq = Number(sousTotal*0.09975);
total = Math.round(100*(sousTotal+tps+tvq))/100;
alert("Voiture: " + prixBase + "$\nFrais: " + Math.round(100*frais)/100 + "$\nComission: " + Math.round(100*commission)/100 + "$\nTPS: " + Math.round(100* tps) / 100 + "$\nTVQ: " + Math.round(Number(100* tvq))/100 + "$\nTotal: " + total + "$");








