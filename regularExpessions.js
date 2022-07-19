// /pattern/modifiers
let text = "Institute refactory uganda";
let n = text.search("Refactory");
console.log(n)

let x = text.search(/Refactory/i);
console.log(x)

let site = "Welcome student";
let result = site.replace(/student/i,"Admin");
console.log(result)
// // pattern/modifiers
/*i = not case sensitive and stops at the 1st search
* g = global match will search the whole document
* m = multi-line searching
*/

//[abc]
let motor = "This is a big car";
let results = motor.search(/[abc]/g);
console.log(results)

//[0-9]
//[a-z]
//[A-Z]

const pattern = /e/;
pattern.test("Code is awesome"); //TRUE

/x/.test("Code is awesome"); //FALSE