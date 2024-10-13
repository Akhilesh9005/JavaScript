// defination of function 

function sayMyName(){
    console.log("A");
    console.log("K");
    console.log("H");
    console.log("I");
    console.log("L");
    console.log("E");
    console.log("S");
    console.log("H");
}
// Function ka reference 
sayMyName
// For Execution we are use 
// sayMyName()

function addTwoNumbers(number1, number2){
    // jab function kr andar koi bhi value lete hai to usko parameter bolte hai 
    //eg:- number1 and number2
    console.log(number1 + number2);
    // let result = number1 + number2
    // return result
    // ye console kabhi print nahi hoga kyuki ek bar agar retun result likha gaya to uske baad consol print nhi hoga
    console.log("Akhilesh")
    // ek aur tarika hai ese likhane ka 
    return  number1 + number2
}
// aur jab function ko call karte hai to usko aargument bolte ya value bhi hota hai 
// addTwoNumbers(3, 4)
const result = addTwoNumbers(3, 5)

console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(username ===  undefined){
     console.log("please enter a username");
     return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Akhilesh"))
// jab koi value hi nhi pass kiya gay ho to undefined deta hai 
console.log(loginUserMessage("Akhilesh"))

// ye 3 dot (...) ko spared operator aur rest opertor bhi bolate hai
// agr esme val1, val2 laga denge to pahle ka 2 value ye dono le lenge aur baki ka array me aa jayega
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// jitne bhi valve ham denge wo sab ek array me aa jayega kyuki (...) rest opertor laga hai
 

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "akhielsh",
    price: 199 
}

function handleObject(anyobject){
     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
     
}
handleObject(user)
handleObject({
    username: "akhil",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function retunSecondValue(getArray){
       return getArray[1]
}

console.log(retunSecondValue(myNewArray));
console.log(retunSecondValue([200, 400, 500, 1000]));



