// //lec=42
// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails: function(){
//         console.log("Got user details from database")
//        // console.log(`Username: ${username}`); // ye line error degi
//         console.log(`Username: ${this.username}`); 
//         console.log(this)
//     }




// } // ek type ka Object littera ( Properties: username, loginCount, signed   Methods: getUserDetails)


//console.log(user.username);
// console.log(user.getUserDetails());

// this keyword ka use current content ke liye hota h

//console.log(this) // output {} but agr console me ye kiya to bhot sari cheeze milegi

// ab agr muje user2 bnana hua to

// const user2 = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails: function(){
//         //console.log("Got user details from database")
//        // console.log(`Username: ${username}`); // ye line error degi
//         //console.log(`Username: ${this.username}`); 
//         console.log(this)
//     }

// }

// ye bar bar  krna pdega 

// issi liye ye constructor function ka use krte h 

//const promisesOne = new Promises()
//const date = new Date()

// yha ye jo new keyword h ye ek type ka constructor function 


function User(username, loginCount, isLoggedIn){
    // myusername = username ye aasan rehta h pr jyadatr time hum ye aise code nhi likhte 
    //username = username  // jyadatrtime name same hi rkhe jate h

    this.username = username // confusion se bchne ke liye 
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
       console.log(`Welcome ${this.username}`)
    }

    //return this likho ya mt likho implicitly return ho hi jata h 
}

// const userOne = User("hitesh", 12, true)
// console.log(userOne)

// const userTwo = User("Chai aur code", 11, false)

// console.log(userOne) // userTwo ne sari ki sari values overwright kr di userOne ka username ab "chai aur code" ho gya
// console.log(userTwo)

// isiliye to constructor function ka use hota h kyuki constructor function hamesha ek nya instance de deta h 
// const userOne =new User("hitesh", 12, true)
// const userTwo = new User("Chai aur code", 11, false);
// console.log(userOne);

// jese hi new keyword use krnge 
// sbse phle ek empty object{} creat hota h jise new instance bolenge 
// constructor function call hota h new keyword ke karn 
// this keyword ke andr ye sare argument inject ho jate h


// console.log(userOne.constructor);

// link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

