var c = 300
let a = 20
if(true){
    let a = 10
    const b = 20
    var c = 30 
    //console.log("Inner: ",a)

}

//console.log(a)
// console.log(b)
//console.log(c) // ye print ho jayega isiliye to hum var use hi nhi krte  // 30



function one(){
    const username = "Priyanka"

    function two(){
        const website = "youtube"
        console.log(username)

    }
    //console.log(website); it will give error because of scope
    two()
}

// one()  // output me priyanka iske hone ki vjh se aya h 


// if(true){
//     const username = "priyanka"
//     if(username === "priyanka"){
//         const website = " youtube"
//         console.log(username + website)
//     }
//     // console.log(website) ye vali line error degi
// }
// console.log(username) ye vali line error degi kyuki username ka scope khhatam ho gya 





//                      intresting concept 

// addone(5)  // ye koi erroe nhi dega 
// console.log(addone(5))

// function addone(num){
//     return num + 1
// }




// addTwo(5) //ye error dega 
// this is also known as expression
const addTwo = function(num){
    return num+2
}
// addTwo(5) // ye error nhi dega 
