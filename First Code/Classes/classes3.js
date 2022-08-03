// class Rectangle{
//     constructor(){
//         console.log("A rectangle has been created")
//         this.width = 5;
//         this.height = 3;
//         this.color = "blue"
//     }
// }
// let rectangle1 = new Rectangle();
// console.log(rectangle1)




// class Rectangle {
//     constructor(width, height, color){
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }
//     // a method is a function inside a class
//     getArea(){
//         return this.width * this.height
//     }
// }
// let rectangle1 = new Rectangle(3, 5, "blue");
// console.log(rectangle1)

// let rectangle2 = new Rectangle(4, 7, "Purple");
// console.log(rectangle2)

// console.log(rectangle1.getArea())
"========================================================================"
//GETTERS AND SETTERS - used to manipulate methods outside a class 


// class Rectangle {
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
        
//     }
    
//         get getArea(){
//         return this.width * this.height
//     }
// }
//  let rectangle1 = new Rectangle(3, 5);
//  console.log(rectangle1.getArea) // in this case the method getArea is treated as a property

// let rectangle2 = new Rectangle(4, 7, "Purple");
// console.log(rectangle2)

// console.log(rectangle1.getArea())

// STATIC METHODS IN JS CLASSES  - static methods are treated as extras/utility functions

class Square {
    constructor(width){
    this.width = width;
    this.height = width;
    }
    static equals(a, b){
return a.width * a.height == b.width * b.height
    }
    static validDimensions(width, height){
        return width === height
    }
}

let square1 = new Square (5)
let square2 = new Square (5)

// console.log(Square.equals(square1,square2));

console.log(Square.validDimensions(7,7))

1 == int('1')
1 === int('1')

