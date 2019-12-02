var lines = 10;
var cols = 10;
var num = 0;

for (i = 0; i < lines; i++) {
    for (var k = 0; k < num; k++) {
        document.writeln(" ");
    }
    for (var j=0; j < (cols - num); j++) {
        document.writeln(num);
    }
    num ++;
    document.writeln("<br>");
}