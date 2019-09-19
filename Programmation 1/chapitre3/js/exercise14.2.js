var i = 100000;
var num = 0;
var temp = 0;

while (i > 0) {
    while (num < (i+1) ) {
        if (i % num === 0) {
            if (i != num) {
                temp += Number(num);
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
}