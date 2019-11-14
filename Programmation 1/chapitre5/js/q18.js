var arr = [];

for (i=0;i<10;i++) {
    arr.push(String(prompt("nom")));
}

arr.sort();
document.writeln(arr.join(" "));