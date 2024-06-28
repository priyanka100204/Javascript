//singleton
//object.create



// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Priyanka",
    "full name" : "Priyanka Gehlot",
    [mySym]: "mykey1",

    age :20,
    location : "Jodhpur",
    email: "priyanka@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])

// console.log(JsUser["full name"])// only method of writing 

// interview question 
// not right way to insert symbol as key in object
// console.log(JsUser.mySym)
// console.log(typeof JsUser.mySym)

// This is right way to inset symbol in object as key 
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])
// console.log(typeof JsUser.mySym) // this gives result as undefined 

// JsUser.email="Tonny@gamil.com"

// Object.freeze(JsUser)  //iske baad object me koi changes nhi ho skte, na hi koi nya function bnaya ja skta h

// JsUser.name="Tonny"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello JS user")
}
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`)
// }

// console.log(JsUser.greeting)

console.log(JsUser.greeting())
// console.log(JsUser.greetingTwo())