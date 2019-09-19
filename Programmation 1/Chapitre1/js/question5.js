var name;
var ageY;
var leap;
var ageD;

name = prompt("What is your name?");
ageY = prompt("What is your age?");

leap = ageY/4;
ageD = Math.floor(leap + ageY*365);
alert(name + ", your age in days is approximately: " + ageD + "days");
