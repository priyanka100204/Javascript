const user = {
    username: "Priyanka",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`)
        console.log(this)


    }

}


//  user.welcomeMessage()
//  user.username = "tonny"
//  user.welcomeMessage()

// console.log(this)  // output will be {} empty and when you run it in console it does not gives empty.

// function chai(){
//     let username = " Priyanka"
//     console.log(this)
//     console.log(this.username) // output is undefined  , why? kyuki ye function h ||
// }

// chai()

// const chai = function(){
//         let username = " Priyanka"
//         console.log(this)
//         console.log(this.username) // output is undefined 

// }
// // chai()


// const chai = () => {

//     let username = " Priyanka"
//     console.log(this) // output is empty
//     console.log(this.username) // output is undefined 

// }
// chai()

// const addTwo = (num1,num2) =>{
//     return num1 + num2

// }
// console.log(addTwo(3,4))



// implicit return 
// const addTwo = (num1,num2) =>  num1 + num2
// const addTwo = (num1,num2) => ( num1 + num2 )

//  const addTwo = (num1,num2) => ( {username:"Priyanka"})  // jb objects ko return krna ho implicit return me tb inka ( ) use hota h
// const addTwo = (num1,num2) => {username:"Priyanka"}  // undefined aa jayega 
// console.log(addTwo(3,4))


// const myArray = [1,2,3,4,5]

// myArray.forEach(() =>{})