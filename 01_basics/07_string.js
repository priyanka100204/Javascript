const name = "priyanka"
const repoCount = 50 

// console.log(name + repoCount + "Value")  //not good method of concating of strings

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//Another method of declaring strings 

const gameName = new String ('Priyanka-pg-com') // copy it in console , read artical from mdn

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase()) // here original string does not change because of primitive data type of gameName
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('t'))
// console.log(gameName.indexOf('a'))
// console.log(gameName)

// const newString = gameName.substring(0,4) // does not accept negtive value
// console.log(newString);

// const anotherString = gameName.slice(-8,10);
// const anotherString = gameName.slice(0,4);
// const anotherString = gameName.slice(-7,5);
// console.log(anotherString)


// const newStringOne = "    priyanka  "
// console.log(newStringOne)
// console.log(newStringOne.trim())  // aage and peeche ke extra spaces ko hi htayega 
// link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim


//  const url = "https://priyanka.com/priyanka%20geh%20lot"
// console.log(url.replace('%20', '-'))


// console.log(url.includes('tonny'))

// link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// console.log(gameName.split('-'))
// const newArray = gameName.split('-')
// console.log(newArray[1])
// console.log(gameName.split('a'))

