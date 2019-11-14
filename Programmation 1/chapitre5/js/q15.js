var arr = [0,1,2,3,4,5];

document.writeln(arr.join(" ") + "<br>");
var num1 = arr[4];
var num2 = arr[2];



arr[num2] = num1;
arr[num1] = num2;

document.writeln(arr.join(" ") + "<br>");