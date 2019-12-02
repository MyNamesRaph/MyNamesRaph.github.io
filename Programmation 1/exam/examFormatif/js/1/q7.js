var num = 1;
var numL = 4;
var numC = 4;

for (i = 0; i < numL; i++) {
    for (j = 0; j < numC; j++) {
        document.writeln(num);
        num = num*2;
    }
    document.writeln("<br>");
}