// if 
const isUserloggedIn = true

// if (2 == "2"){
//     console.log("executed");
// }
// if (2 === "2"){
//     console.log("executed");
// }
// if (2 != 3){
//     console.log("executed");
// }
// <, >, <=, >=, ==, !=, ===, !==

if( true){
    
}
else{

}

const score = 200 

// if(score>100){
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }
// console.log(`User power: ${power}`)    //due to scope of power it will not execute 

const balance = 1000

// if(balance > 500) console.log("test"), console.log("test two");  // implicit scope not good practise

// if (balance < 500){
//     console.log("less than 500")

// }else if(balance <750){
//     console.log("less than 750")
// }else if(balance <900){
//     console.log("less than 900")
// }
// else {
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3){
    console.log("allow to buy course")
}
if(loggedInFromEmail || loggedInFromGoogle ){
    console.log("User logged in")
}


// logical operator && ||