// POLYMORPHISM - ability of a class to express itself in several/different forms

class Student {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

    }
    sports () {
        console.log("plays a certain sport")
    }
}

class Senior extends Student {
    constructor(firstName, lastName, age, gpa){
        super(firstName, lastName, age)
        this.gpa = gpa 
    }
    sports (){
       console.log("senior plays basketball")
    }
}
class Junior extends Student {
    constructor(firstName, lastName, age, gpa){
        super(firstName, lastName, age)
        this.gpa = gpa 
    }
    sports (){
       console.log(" Junior plays football")
    }
}

let senior1 = new Senior("Jane", "Doe", 12, 4.0)
console.log(senior1.sports())

let junior1 = new Junior("Jane", "Doe", 12, 4.0)
console.log(junior1.sports())