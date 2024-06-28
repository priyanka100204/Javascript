// link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// Dates 

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 0, 23) //arbitrary Date - manmana
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) 
// let myCreatedDate = new Date("2023-01-14") 
let myCreatedDate = new Date("01-14-2023") 
// console.log(myCreatedDate);
// console.log(myCreatedDate.toString());
//  console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000)); // interview question  (time converted into seconds)


let newDate = new Date();
// console.log(newDate.getDay()) // monday ....
// console.log(newDate.getMonth()+1) // moths start from zero 
// console.log(newDate.getFullYear())

// console.log(newDate.toLocaleDateString('default',{
//     weekday: "long"
// }))