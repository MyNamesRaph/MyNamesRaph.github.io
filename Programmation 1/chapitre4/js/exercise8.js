var mot = prompt("Mot:");
var arr = mot.split("");

for (arr.length; arr.length > 0;) {
    document.write(arr.pop());
}