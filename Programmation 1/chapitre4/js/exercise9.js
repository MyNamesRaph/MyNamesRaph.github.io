var num = String(prompt("Numéro:"));
var arr = parseInt(num).toString().split("");

for (arr.length; arr.length > 0;) {
    document.write(arr.pop());
}