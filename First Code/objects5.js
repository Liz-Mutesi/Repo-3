const user = {
    name: 'isaac',
    age: 24,
    title: 'developer',
    isMarried: true,
  };

  user.address = "Entebbe"

  console.log(user)

  // freezing an object 
  Object.freeze(user)
  user.address = "Jinja"
  user.nationality = "Kenyan"

  console.log("frozen", user)