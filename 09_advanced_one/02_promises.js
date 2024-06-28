// // link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// const promisesOne = new Promise(function(resolve, reject){
//     // DO an async task
//     // DB calls,cryptography, network

//        setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()  // ye then and resove ko connect krne ke liye hota h
//        }, 1000)

// })


// promisesOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//             console.log("Async Task 2");
//             resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved")
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){

//         resolve({username: "Chai", email: "chai@example.com"})

//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);

// })



// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         // let error = false
//         if(!error){
//             resolve({username: "hitesh", password:123})

//         }else{
//             reject('ERROR: SOmething went wrong')
//         }

//     }, 1000)
// })


// chaining
// promiseFour.then((user) => {        
//     console.log(user);
//     return user.username

// }).then( (username) => {
//     console.log(username)

// }).catch(function(error){
//     console.log(error)
// }).finally(() => console.log("The promise is either resolved or rejected"))


// ye promiseFour ko kisi const me store krke agr return value ko print krana chahe to error aayeg 

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         // let error = true
//         let error = false
//         if(!error){
//             resolve({username: "javascript", password:"123"})

//         }else{
//             reject('ERROR: JS went wrong')
//         }

//     }, 1000)

// });

// async function consumePromiseFive(){
//    // const response = await promiseFive // ye promise ke resolve hone pe aata h and agr resolve ke liye kuch h to reject ke liye bhi hona chahiye 
//     //console.log(response);
    
//    try{
//     const response = await promiseFive ;
//     console.log(response);
    
//    }catch (error) {
//     console.log(error)
    
//    }


// };

// consumePromiseFive() // error = false pe ye kaam krega without trycatch
// consumePromiseFive() // error = true pe bhi  ye kaam krega with trycatch



// async function getAllUsers(){
//     // fetch ek promise return krta h 
//     // fetch('url')

//    try {
//     const response =  await fetch('https://jsonplaceholder.typicode.com/users');
//     //console.log(response)
//   // const data = response.json() // kyuki data string me aa rha h usse koi value nhi nikl payegi isliye isko json me convert krenge
//    //console.log(data); // pr ye to koi output hi nhi de rha 


    
//    const data = await response.json()
//    console.log(data)
    
//    } catch (error) {
//     console.log("E: ", error);
    
//    }
// }

// getAllUsers()



// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//     return response.json()
// })
// .then((data) => { console.log(data)})
// .catch((error) => console.log(error))
// .finally()
