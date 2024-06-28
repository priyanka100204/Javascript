// let myName = "Hitesh     "
// let mychannel = "chai    "


// console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function (){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}// ab jitne bhi Object se hote hue jate h un sbhi me hitesh() hoga 

Array.prototype.heyHitesh = function(){
    console.log(`hitesh says hello `)
}

// heroPower.hitesh()

// myHeros.hitesh() // kyuki array jata to object se hi hokr h 

// myHeros.heyHitesh()
// heroPower.heyHitesh() // ye line error degi


//inheritance 

const User = {
    name: "chai",
    email: "@gmail.com"


}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport  // ab TAsupport se bne hue object me TeachingSupport ki bhi properties hogi 
}

Teacher.__proto__ = User

// console.log(TAsupport.isAvailable)
// console.log(Teacher.name)

//modern Syntax


// Object.setPrototypeOf(TeachingSupport, Teacher)  // TeachingSupport , Teacher ki sari property access kr sskta h 

// console.log(TeachingSupport.makeVideo)


let anotherUsername = "ChaiAurCode       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()

"Priyanka".trueLength()
"iceTea".trueLength()