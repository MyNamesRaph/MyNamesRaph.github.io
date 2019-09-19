var num;

//input num
num = Number(prompt("Num:"));

//check num
if (num >= 90) {
    document.write("A");
}
else if (num >= 80 && num < 90) {
    document.write("B");
}
else if (num >= 70 && num < 80) {
    document.write("C");
}
else if (num >= 60 && num < 70) {
    document.write("D");
}
else {
    document.write("E");
}