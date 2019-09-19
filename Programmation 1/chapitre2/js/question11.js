var input;
//input
input = prompt("Input:");

//output
if (input === "w") {
    document.write("Avancer");
}
else if (input === "s") {
    document.write("Reculer");
}
else if (input === "a") {
    document.write("Gauche");
}
else if (input === "d") {
    document.write("Droite");
}
else {
    document.write("Input invalide");
}