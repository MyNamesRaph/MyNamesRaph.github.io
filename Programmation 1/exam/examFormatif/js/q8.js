var num = 1;
var numL = 9;
var numC = 9;


document.writeln("*  |  1  2  3  4  5  6  7  8  9<br>-----------------------------------------------<br>");
for (i = 1; i <= numL; i++) {
    document.writeln(i + "  |");
    for (j = 1; j <= numC; j++) {
        num = i*j;

        if (num < 10) {
            document.writeln("  " + num);
        }
        else {
            document.writeln(" " + num);
        }
    }
    document.writeln("<br>");
}