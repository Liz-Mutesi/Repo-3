function addition() {
    var add = 5 + 7
    console.log(add)
}

addition()



function multiply(num1, num2) {
    console.log(num1 * num2)
}

multiply(4, 5)
multiply(9, 2)
multiply(6, 0)


//return key word

var num7 = 8
function subtraction() {
    var num3 = 5
    var num4 = 3
    var num5 = num3 - num4
    console.log("=====================================================================")
    // console.log(num5)
    console.log(num7)
    return num5
}
console.log(subtraction())

// console.log("=====================================================================")
//  console.log(num5)
console.log(num7)

//Celcius to Fahrenheit
//F = (C x 9/5)+32
function CtoF(Celcius){
    var Fahrenheit = ((Celcius*9)/5)+32;
    return Fahrenheit 
}
console.log("The temperature in Fahrenheit is "+CtoF(20))

function FtoC(Fahrenheit){
    var Celcius = ((5/9) * (Fahrenheit - 32))
    return Celcius
}
console.log ("The Temperature in Celcius is " +FtoC(20))