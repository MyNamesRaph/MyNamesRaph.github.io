var randArr = [];
var randStr = false;
var rand = Math.round(Math.random());
var vrai = 0;
var vraiCons = 0;
var vraiConsMax = 0;
var vraiConsStart = 0;
var faux = 0;
var fauxCons = 0;
var fauxConsMax = 0;
var fauxConsStart = 0;


for (i = 0; i < 1000; i++) {
    rand = Math.round(Math.random());
    if (rand === 1) {
        randStr = true;
        vrai++;
        vraiCons++;
        fauxCons = 0;
        if (vraiCons > vraiConsMax) {
            vraiConsMax = vraiCons;
            vraiConsStart = i+1 - vraiConsMax;
        }
    }
    else{
        randStr = false;
        faux++;
        fauxCons++;
        vraiCons = 0;
        if (fauxCons > fauxConsMax) {
            fauxConsMax = fauxCons;
            fauxConsStart = i+1 - fauxConsMax;
        }
    }
    randArr.push(randStr);
    randArr.push(i);
}

document.writeln("Il y a " + vrai + " vrais<br>");
document.writeln("Il y a " + faux + " faux<br>");
document.writeln("Il y a " + vraiConsMax + " vrais consécutifs qui commence à " + vraiConsStart + "<br>");
document.writeln("Il y a " + fauxConsMax + " faux consécutifs qui commence à " + fauxConsStart + "<br>");


document.writeln(randArr.join("<br>"));


