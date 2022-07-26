const user = {
    name: "Maria",
    age: 35,
    title: "Developer",
    isMarried: true,
}
console.log(user)
delete user.title // deleting a property eliminates information you don't want to send to the user
console.log(user)

// adding a property to an existing object
user.isAdmin = true;
console.log(user)