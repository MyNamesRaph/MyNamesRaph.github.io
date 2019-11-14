var arr = [1,2,3,4,5,6,7,8,9,10];
var num = Number(prompt("Nombre"));


arr.push(num);
document.writeln(arr.join(" ")+ "<br>");

for (i=0;i<arr.length;i++) {
    var min = i;

    for (j=i;j<arr.length; j++) {
        if (arr[min] > arr[j]) {
            min = j;
        }
    }

    var temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
}
document.writeln(arr.join(" ")+ "<br>");


