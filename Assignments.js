/*Write a function that calculates compound interest. 
It should take in initial deposit, time period, interest. 
the function should output the the total amount in the account at the end of the period*/

let initialDeposit = 100000;
let t = 5;
let r = 0.10;
let n = 4;

const compoundInterest = initialDeposit * Math.pow(1 + r/n, (n*t))

console.log ("Total amount in the account is = " + compoundInterest)
