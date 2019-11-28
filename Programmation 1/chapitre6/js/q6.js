let parentCount = 0;


class Matryoshka {
    constructor(nbParents,nbChildren) {
        this.nbParents = nbParents;
        this.nbChildren = nbChildren;
    }
    GetParents() {
        return this.nbParents;
    }

    GetChildren() {
        returm this.nbChildren;
    }
}



verySmall = new Matryoshka(4,0);
small = new Matryoshka(3, 1);
normal = new Matryoshka(2, 2);
big = new Matryoshka(1, 3);
veryBig = new Matryoshka(0,4);

console.log(verySmall.GetParents());