var tab2exp = [];

for (i = 0; i <= 1024; i++) {
    tab2exp.push(2**i);
    tab2exp.push("2^" + i);
}

document.writeln(tab2exp.join("<br>"));