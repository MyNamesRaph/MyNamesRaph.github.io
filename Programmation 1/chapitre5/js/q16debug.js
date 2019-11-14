var arr = [1,2,3,4,5,6,7,8,9,10];
var num = Number(prompt("Nombre"));


arr.push(num);
document.writeln(arr.join(" ")+ "<br>");

for (i=0;i<arr.length;i++) {
    console.log(arr);
    var min = i;
    console.log(i + "i] setting min to i's position, min:" + arr[min]);
    for (j=i;j<arr.length; j++) {

        if (arr[min] > arr[j]) {
            var lastmin = min;
            min = j;
            console.log(j +"j) " +arr[lastmin]+ " is greater than "+ arr[j]+", min:" + arr[min])
        }
        else {
            console.log(j +"j)")
        }
    }
    console.log(arr);
    console.log(i + "i] min:" + arr[min]);

    var temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
    console.log(arr);
}
document.writeln(arr.join(" ")+ "<br>");


