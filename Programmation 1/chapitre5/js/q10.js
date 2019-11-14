var options = ["INFORMATIQUE", "ADMINISTRATION", "HISTOIRE", "GÉNIE", "GÉOGRAPHIE", "BUREAUTIQUE"];
var choix = String(prompt("Votre choix:").toUpperCase());
var oui = false;

for (i=0; i < options.length; i++) {
    if (choix === options[i]) {
        oui = true;
    }
}

if (oui === true) {
    document.write("Nous avons ce programme");
}
else {
    document.write("Nous n'avons pas ce programme");
}