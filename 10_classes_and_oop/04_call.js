// lecture44: interview

function SetUsername (username){
    //complex DB calls 
    this.username =username
    console.log("called")
    
}

function createUser(username, email, password){
    //SetUsername(username) // yha ye call to ho hi rha pr execution vaps gayab ho ja rha h, refrence hold nhi ho paa rha 

    // SetUsername.call(username)  // ye bhi kuch nhi kr paa rha 

     SetUsername.call(this, username)  // ab hua kaam

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")

console.log(chai) // ye to username ko print hi nhi kr rha that is in createUser , setUsername call hold(refrence hold) nhi ho paa rha tha lekin SetUsername.call(this, username)  // ab hua kaam