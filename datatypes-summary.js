// mainally datatypes are 2 types 
// 1- premitive dsts types
// 2- non-premitive data types

// Premitive are 7 types : string,number, boolean, null, undefined, symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let uaerEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);


// const bigNumber = 55454545542545215454n 

// Reference (non primitive)

// Array, objects, functions   [en sab ka data types object hi hoga]
// 1- Array:-
const heros =["shaktiman","naagraj", "doga"];

// 2-object:-
let myObj =  {
    name: "akhilesh",
    age: 22,
}

// 3:- function

const  myFunction = function(){
      console.log("hello world");
}
 
console.log(typeof scorevalue);
