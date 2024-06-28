// forEach()

const coding = ["js","ruby", "java", "python", "cpp"]

// coding.forEach( function (item) {
//     console.log(item)

//  })
 //forEach call back function mangta h

//  coding.forEach( (item)=>{ console.log(item)} )



// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)  // function ka refrence dena h use execute nhi krna h baaki ka kaam vo khud kr lega 

// interview
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr)
})


//use in databases
const myCoding = [
    {
        languageName : "javascript",
        languageFileName:"js"
    },
    {
        languageName : "python",
        languageFileName:"py"
    },
    {
        languageName : "java",
        languageFileName:"java"
    }
]

myCoding.forEach( (item)=>{

    console.log(item.languageName)

})