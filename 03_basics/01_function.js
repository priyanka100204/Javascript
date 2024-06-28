function sayMyName(){
    console.log("priyanka")
}

// sayMyName()

function addTwoNumbers(number1, number2 ){
    console.log( number1 + number2)
}

// addTwoNumbers(3, 4) // call time vali values argument hoti h 

// these two lines are so intresting
// const result = addTwoNumbers(3,7) // 10
// console.log(result)               // undefined kyuki result ko koi value return hi nhi hui  

function addTwoNumbers(number1, number2 ){
    // let result = number1+number2
    // return result
    
    return number1 + number2
    
}
// addTwoNumbers(1,2)

// const result = addTwoNumbers(3,7) 
// console.log(result)               //10


function loginUserMessage(username){
    if(username=== undefined){
        console.log("please enter user name")
        return

    }
    
    return `${username} just logged in `
    
}
// loginUserMessage("priyanka") // because of return it is not printing
// console.log(loginUserMessage("priyanka"))


// console.log(loginUserMessage())// argument will pass as undefined

// function loginUserMessage(username = "sam"){
//    // by default value
    
//     return `${username} just logged in `
    
// }