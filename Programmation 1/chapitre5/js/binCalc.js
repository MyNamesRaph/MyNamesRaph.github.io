var bins = [];
var randlenght =12;
var nums = [];

for (i = 0; i<10; i++) {
    var bin = [];

    for (j=0; j<randlenght;j++) {
        rand = Math.round(Math.random());

        bin.push(rand);
    }
    bins.push(bin);
}
console.log(bins);

for (i=0; i<bins.length; i++) {
    var dec = 0;
    var binStr = "";
    for (j=0; j<bins[i].length; j++) {
        dec += bins[i][j]*(2**(bins[i].length-j-1));
    }
    binStr = binFormat(bins[i]);
    var obj = {
        bin:binStr,
        dec: dec
    };
    nums.push(obj);

}
console.log(nums);
for (i = 0; i<nums.length; i++) {
    document.writeln(nums[i].bin + " bin = " + nums[i].dec + " dec<br>")
}

function binFormat(arr) {
    var binStr = "";
    var count = 0;
    var spacing = 4;

    while (arr.length%spacing !== 0){
        arr.unshift(0);
    }
    for (k=0;k<arr.length; k++){

        binStr += arr[k];
        count++;
        if (count === spacing) {
            count=0;
            binStr += " ";
        }

    }
    console.log(binStr);
    return binStr;
}