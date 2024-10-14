// 1:- if statement
// es if ke andar ka condition true hona chahiye tabhi code run karenge agr code flase hai to run nahi karenge  

const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
// console.log("less than 50");
// } else {
// console.log("temperature is greater than 50");
// }


// if (false){
// to line no 8 se jitna bhi scope hai wo run nhi hoga 
// }

// <(less than), >(greater than), <=(less than or equal to), >=(greater than or equal to), ==(comparison), !=(not equal to), ===(check comparison and tpyes of the value also), !==(check negative sign),

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

// const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
    
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 750"); 
// } else {
//     console.log("less than 1200");
// }

const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
    
}

 