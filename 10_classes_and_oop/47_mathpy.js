//Interview


const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descripter)


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); // value to change hi nhi hui, Kyu?



// const mynewObject = Object.create(null)

const chai = {
    name: "gingerchai",
    price:250,
    isAvailable: true,

    orderchai: function(){
        console.log("chai nhi bni")
    }
}

console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai, "name"))

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"))

 for (let [key, value] of Object.entries(chai)) {
    if (typeof value!== 'function'){
        console.log(`${key} ,${value} `)

    }
    }// enumerable: false hua to name pr iteration nhi hoga