
let student1 = new Student("a","k",randNum(),randNum(),randNum(),randNum(),randNum());
let student2 = new Student("b","l",randNum(),randNum(),randNum(),randNum(),randNum());
let student3 = new Student("c","m",randNum(),randNum(),randNum(),randNum(),randNum());
let student4 = new Student("d","n",randNum(),randNum(),randNum(),randNum(),randNum());
let student5 = new Student("e","o",randNum(),randNum(),randNum(),randNum(),randNum());
let student6 = new Student("f","p",randNum(),randNum(),randNum(),randNum(),randNum());
let student7 = new Student("g","q",randNum(),randNum(),randNum(),randNum(),randNum());
let student8 = new Student("h","r",randNum(),randNum(),randNum(),randNum(),randNum());
let student9 = new Student("i","s",randNum(),randNum(),randNum(),randNum(),randNum());
let student10 = new Student("j","t",randNum(),randNum(),randNum(),randNum(),randNum());

let students = [student1,student2,student3,student4,student5,student6,student7,student8,student9,student10];

for (i=0;i<students.length;i++) {
    if (arr[i].getNote() < 60) {
        
    }
    else {

    }
}



function Exam(q1,q2,q3,q4,q5) {
    this.q1 = q1;
    this.q2 = q2;
    this.q3 = q3;
    this.q4 = q4;
    this.q5 = q5;
    this.getNote = function () {
        return q1+q2+q3+q4+q5;
    }
}

function Student(name,lastname,q1,q2,q3,q4,q5) {
    this.name = name;
    this.lastname = lastname;
    this.exam = new Exam(q1,q2,q3,q4,q5);
}


function randNum() {
    return Math.round(Math.random()*20);
}