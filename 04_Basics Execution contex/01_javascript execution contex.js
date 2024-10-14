// javascript execution context :- matlab jo bhi files hamne banayi hai wo java script run kaise karegi usi ki kahte hai 
// aur esko run karne ke liye 2 phase me run karti hai 
// code to sabse pahle Global EC hota aur window me uska value this hota hai. aur sabhi platform par alag alg hota hai. javascript single thred hai 
// ye hote hai execution context 2 tarah ke 
// 1:- Global EC       2:-Function EC


  // 2 Phase hote hai java script execution ke 
  // 1:- memory creation phase and   2:- execution phase

let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

// 1:- Global Execution eske andar to this banana hi 

// 2:- memory phase
   // val1- undefined
   // val2- undefined
   // addnum- defination jayega 
   // result1- undefined
   // result2- undefined

// 3:- Execution phase 
   // val1- 10
   // val2- 5
   // addNum aayega phir ye alg se ek executional context banayega
       // new environment + execution thread {ek baar jab niche wala execution ho gaya to delet bhi ho jata hai}
           // 1:- Memory phase        //2:- execution context
           // val1- undefined         // num1:- 10
           // val2- undefined         // num2:- 5
           // total:- undefined       // total:- 15
                                       // then ye total value return value phir global execution me jayegi
