var col = 0;

for (i = 1;i <= 32768;i = i*2) {
    document.writeln(i);
    col++;
    if (col === 4) {
        document.writeln("<br>");
        col = 0
    }
}