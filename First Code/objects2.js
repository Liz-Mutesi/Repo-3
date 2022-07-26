let user = {}
console.log('Before assignment', user);


user = Object.assign({},{
    name: "Maria",
    age: 35,
    title: "Developer",
    isMarried: true,
})
console.log('After assignment', user);

user.isDeveloper = true;
console.log('Single assignment with dot notation', user);

user['isAdmin'] = true;
console.log('Single assignment with bracket notation', user);



