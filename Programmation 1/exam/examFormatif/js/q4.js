var num = 1;
var count = 0;
var numSpace = "";
var nums = [];

for (num = 1; num <=109; num++) {
    count++;
    nums[nums.length] = num;
    if (count === 4) {
        count = 0;
        num = (num*2) - 1;
        console.log(numSpace + nums.join("  "));
        nums = [];
        numSpace = numSpace + " ";
    }

}
