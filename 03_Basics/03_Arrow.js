const user ={
    usermane:  "akhilesh",
    price: 999,

    welcomeMessage: function(){
       console.log(`${this.usermane},  welcome to website`);
       console.log(this);
       
    }

}
// user.welcomeMessage()
// user.usermane = "raj"
// user.welcomeMessage()

// console.log(this);
// browser ke andr jo global object hai wo hai window object

// function ke andar this use nhi hoga 
// function chai(){
//     let usermane = "akhilesh"
//     console.log(this.usermane);
// }

// chai()

// const chai = function () {
//      let usermane = "akhilesh"
//     console.log(this.usermane);
// }

const chai =  () => {
     let usermane = "akhilesh"
    console.log(this.usermane);
}
// chai()
// esko arro function khate hai 
// () => {}

//  const addTwo = (num1, num2) => {
//     return num1 + num2
//  }  
// ab ek aur hota hai empicit method use {} use nhi karne hote hai

//  const addTwo = (num1, num2) =>  num1 + num2

//  const addTwo = (num1, num2) =>  ( num1 + num2 )

// object ka return karne ke liye () paranthesis me karna padega bina uske nahi hoga 
 const addTwo = (num1, num2) =>  ({usermane: "akhilesh"})
 
 
 console.log(addTwo(3, 4))


//  const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()



