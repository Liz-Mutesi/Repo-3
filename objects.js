const post ={
    title:"How are you feeling today",
    description:"Post your status",
    createdAt:"15/07/22",
    createdBy:"Liz",
    "updated-at":"17/07/2022"
}
console.log(post)

//printing the title from the post
//console.log(".notation",post.creator.location.district)
//bracket notation
// console.log(".notation",post["updated-at"])
// console.log("[]notation",post["title"])
post.location = "Kampala"
console.log(post)
//destructuring objects- pulling components out of a structure
const{title,description} = post
console.log(title,description)
