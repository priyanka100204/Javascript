// for of   array, map

//["", "", ""]
//[{}, {}, {}]

const arr = [10, 20, 30, 40, 50]

// for (const iterator of object) {
    
// }

for (const num of arr) { 
    console.log(num)
    
}


const greetings = " Hello world!"

// for (const greet of greetings){
//     console.log(`Each char is ${greet}`)
// }

//Maps
// link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
const map = new Map() 
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")


// console.log(map)

for (const key of map){
    console.log(key)
}

for (const [key, value] of map){
    console.log(key , " " , value)
}



// const myObject = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'
// }


// for(const [key,value] of myObject){
//     console.log(key , " " , value)
// } // this gives error because here by this object is not iterable



