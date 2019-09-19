var date = new Date();
var prixUn;
var prixDeux;
var prixTrois;
var sousTotal;
var tps;
var tvq;
var total;

//Input informations
prixUn = Number(prompt("Prix du 1er article:"));
prixDeux = Number(prompt("Prix du 2e article:"));
prixTrois = Number(prompt("Prix du 3e article:"));

//Calculs taxes et total
sousTotal = prixUn + prixDeux + prixTrois;
tps = Number(sousTotal * 0.05);
tvq = Number(sousTotal * 0.09975);
total = Math.round(100 * (Number(sousTotal + tvq + tps))/100);

alert("Article 1: " + prixUn + "$\nArticle 2: " + prixDeux + "$\nArticle 3: " + prixTrois + "$\nTPS: " + Math.round(100* tps) / 100 + "$\nTVQ: " + Math.round(100* tvq) / 100 + "$\nTotal: " + total + "$\n" + date);


