// object ko declare karne ke 2 tarike hain 
// 1- literal 2- constructer

// singleton (constructor se hamesa singleton banega lekin literal se nahi banega ) for eg:- object.create esse banega 

// object literals 

const MySym = Symbol("key1")


const JsUser = {
    name: "akhilesh",
    "full name": "Akhilesh sahani",
     [MySym]: "mykey1", 
    age: 23,
    location: "gorakhpur",
    email: "akhilesh9005@gmail.com",
    isLoggedIn: false,
    lastLogindays: ["Monday", "Saturday"]    //  ye hua object ka delecartion ki hum object me kuch bhi daal sakte hai array, boolen, string, number kuch bhi 
}

console.log(JsUser.email)  // ek es tarah access kar sakte hai  esme . dot dena  jaruri hota hai 
console.log(JsUser["email"])  // ek es tarah hum object ko access   kar sakte hai esme "" aur [] ks use karna padega  semicoloum hona jaruri hai 

console.log(JsUser["full name"])
console.log(JsUser[MySym])

// value ko chnge karna ho to = ka simple use karke change kar dete h
// eg :-
JsUser.email = "akhilesh760@gamil.com"
// value ko lock bhi kar sakte hai ki koi use change na kar sake 
// eg:- 
// Object.freeze(JsUser)
JsUser.email = "akhilesh5264@gamil.com"
console.log(JsUser);


JsUser.greetingTwo = function(){
    console.log("Hello JS user");        
}
JsUser.greeting = function(){
    console.log(`Hello JS user, ${this.name}`);        
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// jyda hum . dot ka use karte hai nhi to [""] ka use karte hai aur rare case me sirf [] ka use karte hai kyuki hum key ko jab defined karte hai to object me wo string ke tarah leta hai kyuki esme symbol defind kiya ja rha hai 