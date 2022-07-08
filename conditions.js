// if statement
// if(condition){
//     statement to execute if condition is true

// }


var isItRaining = true
if(isItRaining){
console.log("carry an umbrella")    
}


// var cat = 1
// var cats = "1"

// var cat = animal 
// var position == 1 
// var cat === var cats 

var ageCategory = "adult"
    if(ageCategory == "child"){
    console.log("Sit in Section One")
}
else {
    console.log("Sit in Adult Section")
}

//comparison operators
//<
//>
//==
//!= means not equal to

var size = 5
if(size > 4){
    console.log("This Size is Small")
}
else{
    console.log("This Size is Okay")
}


console.log("=========================================================================================")

//
function shirt(shirtSize){
// var shirtSize = 20
if(shirtSize < 5){
    console.log("The Shirt size is small")
}

else if(shirtSize <= 10) {
    console.log("This shirt size is medium")
}
else if(shirtSize <= 15) {
    console.log("This shirt size is large")
}

else if(shirtSize <= 20) {
    console.log("This shirt size is extra large")
}
else {
    console.log("The shirt is XXL")
}
}
    shirt(30)
    console.log("=================================================================================")

    function days(daysOfTheMonth){
        if(daysOfTheMonth >= 31){
            console.log("January", "March", "May", "July", "August", "October", "December")
        }
        else if(daysOfTheMonth == 30){
            console.log("April", "June", "September", "November")
        }
        else{
            console.log("February")
        }
    }
    days(28)
console.log("=====================================================================================")


    