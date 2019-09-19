var num;

//input num
num = Number(prompt("Num:"));

//check num
if ( num > 0) {
    document.write("Positif");
}
else if (num < 0) {
    document.write("Négatif");
}
else {
    document.write("Zéro");
}