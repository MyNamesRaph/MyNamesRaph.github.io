var controller = prompt("Quel contrôleur voulez vous? ( RaspBerry Pi ou Raspberry Pi Zero )");
var moteur = Number(prompt("Combien de moteurs voulez vous ? ( Entre 2 et 24 )"));
var cam = prompt("Voulez vous une caméra USB ? ( oui ou non )");
var led = prompt("Voulez vous une matrice de LEDS pour les yeux ? ( oui ou non )");
var sousTotal = 35;
var total;

//Controlleur
if (controller === "RaspBerry Pi") {
    sousTotal += 55;
}
else {
    sousTotal += 15;
}
//Moteurs
sousTotal += (moteur*5);
//Caméra
if (cam === "oui") {
    sousTotal += 35;
    cam = "avec caméra";
}
else {
    cam = "sans caméra";
}
//LED
if (led === "oui") {
    sousTotal += 10;
    led = "avec matrice de LEDs";
}
else {
    led = "sans matrice de LEDs";
}
//Livraison
total = sousTotal+(sousTotal*0.15);
//Facture
document.write("Robot avec " + controller + ", " + moteur + " moteurs, " + cam + ", " + led + ".<br>Prix: " + sousTotal + "$<br>Prix avec livraison: " + total + "$");
