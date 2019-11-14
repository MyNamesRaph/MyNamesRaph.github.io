var nums = [];
const nbNums = 12;
var equ15 = false;
var numsEqu15 = [];

for (i=0; i<nbNums; i++) {
    nums.push(Number(prompt("nombre #" + i)));
}


for (i=0; i<nums.length; i++) {
    for (j=0; j<nums.length; j++) {
        if (nums[i] + nums[j] === 15) {
            equ15 = true;
            var numPairs = {
                num1:nums[i],
                num2:nums[j]
            };
            numsEqu15.push(numPairs);
        }
    }
}

if (equ15 === true) {
    for (i=0; i<numsEqu15.length; i++) {
        document.writeln(numsEqu15[i].num1 + " + " + numsEqu15[i].num2 + " = 15<br>");
    }
}
else {
    document.writeln("Nope");
}