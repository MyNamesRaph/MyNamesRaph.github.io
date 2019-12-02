


for (i = 10; i <= 15; i++) {
    document.writeln("Table de multiplication du nombre " + i + "<br>");
    for (mult = 1; mult <= 12; mult++){
        document.writeln(mult.toString() + "*" + i.toString() + "=" + (mult*i) + "<br>");
    }
    document.writeln("<br>")
}