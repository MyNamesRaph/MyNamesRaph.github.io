let cyl1 = new Cyl(10,2);
let cyl2 = new Cyl(15,6);
let cyl3 = new Cyl(25,10);
let cyl4 = new Cyl(104,56);
let cyl5 = new Cyl(78,3);

let arr = [cyl1, cyl2, cyl3, cyl4, cyl5];
let box1 = new Box(arr);



class Cyl{
    constructor(h,r)  {
        this.h = h;
        this.r = r;
    }

    getVolume() {
        return Math.round((Math.PI*this.r**2)*this.h);
    };
}

class Box{
    constructor(arr) {
        this.arr = arr;
    }
    getVolumeBox() {
        let total = 0;
        for (let i=0;i<arr.length; i++) {
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
