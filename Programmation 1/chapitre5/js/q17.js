var arr = [];

for (i=0;i<10;i++) {
    arr.push(Number(prompt("num")));
}

for (i=0;i<arr.length;i++) {
    var max = i;

    for (j=i;j<arr.length; j++) {
        if (arr[max] < arr[j]) {
            max = j;
        }
    }

    var temp = arr[i];
    arr[i] = arr[max];
    arr[max] = temp;
}
document.writeln(arr.join(" ")+ "<br>");

