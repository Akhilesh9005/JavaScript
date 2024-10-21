// object literal
const user = {
    username: "akhilesh",
    loginCount: 8,
    signedIn: true,

   getUserDetails: function(){
    // console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
    
    
   }

}



// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// note:- this content ka use karna matlab current contest ka use karna hota hai eska matlab
//----------------------------------------------//
// ab code hai constructor ki esme jo new ka use kiya gaya hai wahi constructor function hai/ aur ye har baar ek intenstion deta hai 
// const promiseOne = new Promise()
// const date = new Date()

function User (username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    //return this   (ye implicity defined hota hai chahe hum likhe ya na likhe )
}

const userOne = new User("akhilesh", 12, true)
const userTwo = new User("akhil code", 11, false)
console.log(userOne);
// console.log(userTwo);

// jaise hum new keyboard use karenge viase to sabse pahle empty object create hota hai
 // constructor function call hota hai 
 // this keyword ke andar sab arrgument inject ho jaate hai
 // function ke andar mil jaate hai

