var pied;
var metre;
var arpent;
var hectare;

//Input dimensions
pied = Number(prompt("Dimensions du terrain en pi²"));

//Convertions
metre = pied/10.764;
arpent = pied/36799;
hectare = pied/107639;

//Output résultats
alert(metre + "m²\n" + arpent + "ar\n" + hectare + "ha");