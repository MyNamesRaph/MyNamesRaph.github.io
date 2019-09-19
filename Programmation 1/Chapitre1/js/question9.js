var numA;
var numB;
var temp;

//Input numbers
numA = prompt("Number A:");
numB = prompt("Number B:");

//Permutation
temp = numA;
numA = numB;
numB = temp;

//Output numbers
alert("A= " + numA + " B= " + numB);
