const user = {
    name: "Isaac",
    age: "99",
    jobTitle: "President of Kamwokya",
    location: {
        district: "Mbale",
        subCounty: "Budadiri",
        address: {
            boxNumber: "7863 Mbale",
            postalCode: 676833,
            previousAddresses: ["Wakiso", "Kabale", "Masaka",]
        }
    }
}
// const{name} = user
// console.log(name)
// console.log(user.location.district)
// console.log(user.location.address.boxNumber)
const { location: {address :{ boxNumber } } } = user
//console.log(boxNumber)
console.log(user.location.address.boxNumber)