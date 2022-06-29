// for (initialExpression; condition; updateExpression) {
//     // for loop body
// }
let a = 12;
a++;
console.log(a)
// program to display numbers from 1 to 5
const n = 5;

// looping from i = 1 to 5
// in each iteration, i is increased by 1
for (let i = 1; i <= 5; i++) {
    console.log(i);     // printing the value of i
}


console.log("==================================================")
// program to display the sum of natural numbers
let sum = 1;
const q = 100
// looping from i = 1 to n
// in each iteration, i is increased by 1
for (let number = 1; number <= q; number++) {
    sum *= number;  // sum = sum + number
}

console.log('the sum of the first hundred natural numbers:', sum);
// 1 + 2 + 3 + 4 + 5

// infinite for loop
for(let i = 1; i > 0; i++) {
    console.log(i);
    // block of code
}
