let word = String(prompt("Entrez votre mot:"));

if (word.toUpperCase() === "NOEL" || word.toUpperCase() === "NOËL") {
    Noel();
}
else {
    for (i=0;i<word.length;i++) {
        document.write("*");
    }
}


function Noel() {
    let arr = [];

    for(i=0;i<5;i++) {
        for (j=0;j<25;j++){
            if (i===0){
                

            }
        }
        document.write("<br>")
    }
}