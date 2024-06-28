// kis trh se data ko memory me rkha jata h and kis trh se access kiya jata h. us basis pe data types two type ka hota h 
//Data types : primitive and non primitive

// Primitive 
//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id===anotherId)
// console.log(id)
// console.log(anotherId)
// console.log(typeof id)

// const bigNumber=1235468654646464646157687891212n
// console.log(typeof bigNumber)
// console.log(typeof null)
// console.log(typeof undefined)
// console.log(typeof BigInt)   // ?

/*
JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them
*/

// let score=100
// console.log(typeof score)
// score = "priyanka"
// console.log(typeof score)


// Non Primitive / Refrence Type
// Array, Objects, Functions
const heros = ["Shaktiman", "nagraj", "daga"];
let myObj = {
    name:"Priyanka",
    age:20
}
const myFunction = function(){
    console.log("Hello World")
}
console.log(typeof myFunction) //==> //ObjectFunction
console.log(typeof heros)
console.log(typeof myObj)


// link:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
