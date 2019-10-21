var i = 1;
var lnCount = 1;

for(i = 1; i <= 49; i+=2) {
    document.writeln(i);
    if (lnCount === 5) {
        document.writeln("<br>");
        lnCount = 1;
    }
    else {
        lnCount++;
    }
}