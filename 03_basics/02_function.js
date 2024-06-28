// ... is rest operator 
function calculateCarPrice(...num1){
    return num1
}

// console.log(calculateCarPrice(200,400,500,2000))

function calculateCarPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCarPrice(200,400,500,2000))

// const user = {
//     username: "Priyanka",
//     price:199
// }

// function handleObject(anyObject){
//     console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
// }

// handleObject(user)
// handleObject({
//     username:"sam",
//     price:399
// })

// const myNewArray = [200,400,100,600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }
// console.log(returnSecondValue(myNewArray))
// console.log(returnSecondValue([15,25,3,6]))