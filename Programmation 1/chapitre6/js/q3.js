let cyl1 = new cyl(10,2);
let cyl2 = new cyl(15,6);
let cyl3 = new cyl(25,10);
let cyl4 = new cyl(104,56);
let cyl5 = new cyl(78,3);

let arr = [cyl1, cyl2, cyl3, cyl4, cyl5];
let box1 = new box(arr);

function cyl(h,r) {
    this.h = h;
    this.r = r;
    this.getVolume = function() {
        return Math.round((Math.PI*this.r**2)*this.h);
    };
}

function box(arr) {
    this.arr = arr;
    this.getVolumeBox = function () {
        let total = 0;
        for (i=0;i<arr.length; i++) {
            total += arr[i].getVolume();
        }
        return total;
    };
}
for (i=0;i<arr.length;i++) {
    document.writeln(arr[i].getVolume() + "<br>")
}
document.write("_______________________<br>");
document.writeln(box1.getVolumeBox());
