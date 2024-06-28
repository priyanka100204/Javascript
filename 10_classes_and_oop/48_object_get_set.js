const User = {
    _email: 'h@hc.com',
    _password: "abc",




    get email(){
       return  this._email.toUpperCase()

    },
    set email(value){
        this._email = value

    }
    
}
// _ ye dikhata h ki hum ek private property define kr rhe h ye normal users ke use me nhi aayegi

//factory function 

const tea = Object.create(User)
console.log(tea.email)