var a;
var b;
var c;

a = prompt("num 1:");
b = prompt("num 2:");
c = prompt("num 3:");
// A>B>C   A>C>B   B>A>C  B>C>A   C>A>B   C>B>A
//   A>B     A>B     A<B    A<B     A>B     A<B
//   A>C     A>C     A>C    A<C     A<C     A<C
//   B>C     B<C     B>C    B>C     B<C     B<C

if (a > b) {
    if (a > c) {
        if (b > c){

        }

    }
    else if(a < c) {

    }
    else {
        //error
    }

}
