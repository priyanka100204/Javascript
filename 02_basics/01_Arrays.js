//array
// ( ) = paranthesis
// { }  = curly brackets / braces
// [ ]=  square brackets
// link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//JavaScript arrays are resizable and can contain a mix of different data types.
//JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.

const myArr = [0, 1,2, 3, 4,5]
const myHeroes = ["Iron man","Thanos"]
const myArr2 = new Array(1,2,3,4,5)

// console.log(myArr[2]);

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// console.log(myArr);
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))


// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


//slice, splice : Interview
const myn1 = myArr.slice(1,3)

console.log("A ", myArr);
console.log("B ",myn1)

const myn2 = myArr.splice(1,3)
console.log("A ", myArr);//original array change
console.log("C ",myn2)