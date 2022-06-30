class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}
var person2 = new Person('John', 'Smith')
console.log(person2.name)

var person2 = new Person('John', 'Smith')


class Polygon { 
    constructor(length, width) { 
       this.length = length; 
       this.width = width;
    }
    area() {
        return this.length * this.width;
    }
    static printDimensions(polygon) {
        console.log('Length: ' + polygon.length + ' Width: ' + polygon.width);
    }
 
 }
var rectangle1 = new Polygon(8,5)
 console.log(rectangle1.area())
 
 console.log(Polygon.printDimensions(Polygon));





 class Employee {
    constructor(name, middlename, surname) {
        this.name = name;
        this.middlename = middlename;
        this.surname = surname;
    }
     
    work() {
        console.log(this.name + ' ' + this.middlename  +  this.surname + ' works.');
    }    
}
var employee1 = new Employee('John','Kapere', 'Doe');
console.log(employee1.work())

// var employee = {name: "John", age:10};

class Bricklayer extends Employee {
work() {
        console.log(this.name + ' ' + this.surname + ' builds houses.');
        }
}
var person3 = new Bricklayer('Peter', 'Smith')
console.log(person3.work())

