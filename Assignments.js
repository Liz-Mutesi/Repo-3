/*Write a function that calculates compound interest. 
It should take in initial deposit, time period, interest. 
the function should output the the total amount in the account at the end of the period*/

let initialDeposit = 5000000;
let t = 5;
let r = 0.10;
let n = 4;

const compoundInterest = initialDeposit * Math.pow(1 + r/n, (n*t))

console.log ("Total amount in the account is = " + compoundInterest)

console.log("==========================================================")
//Assignment No.2

function student(studentAge){
    if(studentAge >= 41){
        console.log("Cool people programme")
    }
    else if(studentAge >= 18){
        console.log("Evening programme")
    }
    else if(studentAge >= 13){
        console.log("Catalyst programme")
    }
    else {
        console.log("You do not qualify for the programme")
    }


}
student(11)