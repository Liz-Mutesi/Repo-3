var array1 = [1, 2, 3, 4, 5];
var array2 = new Array(6, 7, 8, 9, 7, 10);

var singleArray = array1.concat(array2)
var practice = [...array1, ...array2] //the spread operator
console.log(singleArray)
console.log(practice)

var students = [
    {name:"Liz", age: 26, nin:1234}, 
    {name:"Solome", age: 24, nin:3568},
    {name:"Simi", age: 30, nin: 8754}
]
// for(let student of students){
//     console.log(student)
// }
//docs.google.com/presentation/d/1DYrfFQDgrLAGv2UVX3hydBmg45xxvRSmQMfz1CXfz28/edit?usp=sharinghttps://docs.google.com/presentation/d/1DYrfFQDgrLAGv2UVX3hydBmg45xxvRSmQMfz1CXfz28/edit?usp=sharingfor(let index in students){ //gives the actual position of the element
    console.log(students)
    

// returns specific information from the array
    for(let student of students){
    console.log(student.age)
}
    // var num = 1;
// console.log(array1);
// console.log(typeof num);

// if(typeof num === "string"){
//     console.log("Yes")
// }
// else{ console.log("No")}
