var lines = 100;
var cols = 100;
var num = 99;


for (i = 0; i < lines; i++) {
    for (j = 0; j < cols - num; j++) {
        document.writeln("█");
    }
    num--;
    document.writeln("<br>");

}

num = 0;
for (i = 0; i < lines; i++) {
    for (j = 0; j < cols - num; j++) {
        document.writeln("█");
    }
    num++;
    document.writeln("<br>");

}