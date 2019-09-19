var i = 1000;
var arr;
var num = 0;

while (i > -1) {

    arr = i.toString().split("");

    while (arr.length > 0) {
        num += (Number(arr.pop()))**3;
    }

    if (num === i){
        document.writeln(i + "<br>");
        num = 0;
    }
    else{
        num = 0
    }
    i--;
}