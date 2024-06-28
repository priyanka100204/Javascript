// Memory: Stack memory & Heap Memory
// stack memory : Primitive
// Heap memory  : Non-Primitive

let myName = "Priyanka"
let anotherName = myName
anotherName = "Tonny"

console.log(myName)
console.log(anotherName)


let userOne = {
    email: "priyanka@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "Tonny@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)