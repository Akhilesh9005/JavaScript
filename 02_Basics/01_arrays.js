// aaray
// note koi jaruri nhi hai ki sme type ke element ho different types ke bhi element ho skate hai eg:-

// const myArr = [0, 1, 2, 3, 4, 5, true, "akhilesh"]

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

myArr.push(6)
myArr.push(7)
// pop ka use karne se last walivalue apne aap remove ho jayegi
myArr.pop()

// unshift karne se array me sabse pahle element add ho jayega 
myArr.unshift(9)

// shift ka use karne se element shift ho jayegi 
myArr.shift()

console.log(myArr.includes(9));

const newArr = myArr.join()

console.log(myArr);
console.log(typeof newArr);

// slice, splice

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);



