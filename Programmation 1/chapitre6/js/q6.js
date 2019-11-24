let parentCount = 0;


class Matryoshka {
    constructor(parent,child) {
        this.parent = parent;
        this.child = child;
    }
    GetParents() {
        if (this.parent === false){
            let totalParents = parentCount;
            parentCount = 0;
            return totalParents;

        }
        else {
            parentCount +=1;
            this.parent.GetParents();
        }

    }

}



verySmall = new Matryoshka(small,false);
small = new Matryoshka(normal, verySmall);
normal = new Matryoshka(big, small);
big = new Matryoshka(veryBig, normal);
veryBig = new Matryoshka(false,big);
console.log(verySmall,small,normal,big,veryBig);

console.log(verySmall.GetParents());