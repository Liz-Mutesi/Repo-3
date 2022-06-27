let numbers = []
console.log(numbers)
//adding elements to the number array
numbers.push(1, 2, 3, 4)
console.log(numbers)

//              0           1       2       3         4         5        6
// let students =["Solome","Marvin", "Annah", "Mark", "Asiimwe", "Jonah", "Irene"]
// //determining the number of elements in an array
// console.log(students.length)
// //replacing elements in an array
// students.splice(1,2, "Muhammad")

// students.push("Muhammad")
// console.log(students.length)
// adding an element at any point/index of the array
// students.splice(2,0, "Muhammad")


//removing an element at any index of the array
// students.splice(1,2)
console.log(students)

console.log("=========================================================================")
//Assignment 1
//Function expression
function addition() {
   var add = 8 + 4
   console.log("This is the sum by function " + (add))
}
addition()

console.log("========================================================================")
//Arrow function
//  let sum = (num1, num2) => {
//     return num1 + num2
//  }
//  console.log(("Sum by arrow function ") + sum(8,4))

//  let add = (num1,num2) => num1 + num2
// console.log(("The shorter version ") + add(8,4))

// console.log("==========================================================================")


//Assignment 2
/*wrap line 7 in a function that takes a parameter,
which is the student's name and returns the index */
var students = ["Solome", "Marvin", "Annah", "Mark", "Asiimwe", "Jonah", "Irene"]


// const studentsIndex = students.findIndex(element => element == "Asiimwe")
// console.log("Asiimwe's index is " + (studentsIndex))


//  function multiply(num){
//     return num * num
//  }
//  console.log(3)

// const multiply = (num) => {
//     return num * num
//  }
//  console.log(multiply(3))

// const studentsIndex = students.findIndex(element => element == "Asiimwe")
// console.log("Asiimwe's index is " + (studentsIndex))

// const multiply = (num) => num * num
//  console.log(multiply(3))

//if an arrow function takes in only one character to say num, you can ignore the parantheses

//  const multiply = num => num * num
//  console.log(multiply(3))

//dealing with multiple parameters with arrow functions
//  
// const multiply = (num1, num2, num3, num4) => num1 * num2 * num3 * num4
//  console.log(multiply (4,4,4,4))
//Dealing with statements in an arrow function block
// const bodmas = (num1, num2, num3, num4, num5) => {
//    const product = num1 * num2
//    const sum = num3 + num4 + num5
//    const subtraction = product - sum
//    return subtraction
// }
// console.log(bodmas (8,7,6,5,4))

// const bodmas = (num1, num2, num3, num4, num5) => {
//     return (num1 * num2) - (num3 + num4 + num5)
// }
const bodmas = (num1, num2, num3, num4, num5) => (num1 * num2) - (num3 + num4 + num5)
  console.log(bodmas (8,7,6,5,4))

//dealing with function parameters that have a default values(given values to be used when a user 
//doesn't assign)

// const bodmas = (num1, num2, num3 = 0.05) => (num1 * num2) - num3
// console.log(bodmas(5, 5))

console.log("=====================================================================")
  //Access a return from a function and use it in another function
   const gradeAssignment =(mark) => {
      if(mark == 100){
         return "A"
      }
      else if (mark == 70){
         return "C"
      }
      else if(mark == 50){
         return "E"
      }
      else{
         return "F"
      }
   } 

   // const remarks = () =>{
   //    const grade = gradeAssignment(100)
   //       if(grade == "A"){
   //          console.log("Excellent")
   //       }
   //       else if (grade == "C"){
   //          console.log("Good")
   //       }
   //       else if (grade == "E"){
   //          console.log(Fair)
   //       }
   //       else {
   //          console.log("Fail")
   //       }
   // } 
   // remarks()

   //Refactor remarks function

      const remarks = (score = 50) =>{
         const grade = gradeAssignment(score)
         if(grade == "A"){
            console.log("Excellent")
         }
         else if (grade == "C"){
            console.log("Good")
         }
         else if (grade == "E"){
            console.log("Fair")
         }
         else {
            console.log("Fail")
         }
   } 
   remarks()
   remarks(70)
   remarks(100)
   remarks(20)
