class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
   
     get email(){
        return this._email.toUpperCase()
     }

set email(value){
    this._email = value
}





// getter matlab koi value aap get karanchahte ho mtlab wo value chahiye 
    get password(){
        return this._password.toUpperCase()
    }
// setter ka use hum value ko set karne matlab value ko usme enter karte hai  
    set password(value){
this._password = value
    }
}

const akhil = new User("akhil@raj.ai", "abc")
console.log(hitesh.email);


