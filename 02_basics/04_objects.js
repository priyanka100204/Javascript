const tinderUser = new Object()    //=> singleton object
// const tinderUser={}                => Non singleton object


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)


// const regularUser = {
//     email: "some@gmail.com",
//     fullname : {
//         userfullname:{
//             firstname:"priyanka",
//             lastname : "Gehlot"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}



// link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// const obj3 = {obj1, obj2} //ye acha method nhi h
// const obj3 = Object.assign({},obj1, obj2) // { } ye ek target ki trh kaam krta h 

// const obj3 = {...obj1, ...obj2}

console.log(obj3)

const user = [
    {
        id: 1 ,
        email: "p@gamil.com"
    },
    {
        id: 1 ,
        email: "p@gamil.com"
    },
    {
        id: 1 ,
        email: "p@gamil.com"

    }
]

// console.log(user[1].id)



// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))