var i = 10;

while (i > 0) {
    var randNum = Math.round(Math.random());
    var userNum = Number(prompt("0 ou 1 ?"));
    if (userNum === 0 || userNum === 1) {
        if (userNum === randNum) {
            document.writeln("Vous gagnez!")
        }
        else {
            document.writeln("Vous perdez!")
        }
        i --;
    }
    else {
    alert("Entrez 0 ou 1!")
    }
}