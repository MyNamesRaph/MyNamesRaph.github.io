var nbNum = 10;
var nums = [];
var min;
var max;

for (i=0; i< nbNum; i++){
    var num = Number(prompt("Nombre"));
    nums.push(num);
}
for (i=0; i < nums.length; i++) {
    var numCheck = nums[i];

    if (!min) {
        min = numCheck;
    }
    else if (numCheck < min) {
        min = numCheck
    }

    if (!max) {
        max = numCheck;
    }
    else if (numCheck > max) {
        max = numCheck
    }
}

document.writeln("max: " + max + "<br>");
document.writeln("min: " + min + "<br><br><br>");
document.write(nums.join("<br>"));