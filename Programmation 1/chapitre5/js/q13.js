var nums = [];
const nbNums = 12;
var equ15 = false;
var numsEqu15 = [];

for (i=0; i<nbNums; i++) {
    nums.push(Number(prompt("nombre #" + i)));
}

for (i=0; i<nums.length; i++) {
    if (nums[nums.length-1] + nums[i] === 15) {
        equ15 = true;
        numsEqu15.push(nums[i]);
    }
}

if (equ15 === true) {
    for (i=0; i<numsEqu15.length; i++) {
        document.writeln(nums[nums.length-1] + " + " + numsEqu15[i] + " = 15<br>");
    }
}
else {
    document.writeln("Nope");
}