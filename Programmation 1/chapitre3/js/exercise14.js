var i = 1000;
var num = 0;
var arr = [];
var temp = 0;

while (i > 0) {
    while (num < (i+1) ) {
        console.log("num= " + num);
        console.log("i= " + i);
        if (i % num === 0) {
            if (i != num) {
                console.log("arr= " + arr.toString());
                arr.push(Number(num));
                num ++;
            }
            else {
                num++;
            }
        }
        else{
            num++;
        }
    }
    console.log(arr.toString());
    while (arr.length > 0) {
        temp += Number(arr.pop());
        console.log("temp= " + temp);
    }
    if (temp === i) {
        console.log("success: " + temp + "=" + i);
        document.writeln(i + "<br>");
    }
    else {
        console.log("fail: " + temp + "!=" + i);
    }
    i--;
    num = 0;
    temp = 0;
    arr = [];
}