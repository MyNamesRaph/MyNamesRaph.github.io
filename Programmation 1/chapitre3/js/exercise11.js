var masculin = 0;
var feminin = 0;
var i = 1;
var codeSexe;

while ( i > 0) {
    codeSexe = String(prompt("Sexe (M ou F):"));
    if (codeSexe === "M") {
        document.writeln("Masculin");
        masculin ++;
    }
    else if (codeSexe === "F") {
        document.writeln("Féminin");
        feminin ++;
    }
    else {
        i--;
    }
}

document.writeln("Masculins:" + masculin);
document.writeln("Féminins:" + feminin);