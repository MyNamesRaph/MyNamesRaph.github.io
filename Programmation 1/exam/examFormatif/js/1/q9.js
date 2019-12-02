var prix = 3;
var lines = 16;
var cols = 3;
var num = 0;
var revenu = 0;



document.writeln("####################<br>#Revenu des assistances#<br>####################<br><br>");

document.writeln("Nb de spectateurs    Prix Billets    Revenu<br><br>");
for (i = 0; i < lines; i++) {

    revenu = num*prix;
    if (num < 10){
        document.writeln(num + "            " + prix + "$        " + revenu);
    }
    else if (num < 100) {
        document.writeln(num + "           " + prix + "$        " + revenu);
    }
    else {
        document.writeln(num + "           " + prix + "$        " + revenu);
    }
    num+=10;
    document.writeln("<br>")

}
