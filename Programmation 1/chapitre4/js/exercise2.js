var i = -40;
var celsius;
for(i = -40; i <= 40; i+=5) {
    celsius = (5/9)*(i-32);
    document.write(i + "°F = " + celsius + "°C<br>");
}