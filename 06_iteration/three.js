// (for of) loop
// syntax (aur ye loop thoda aray specific loop hai)
// for (const element of object) {
    
// }
// ye koi jaruri nhi ki object par lagega yr string par bhi lag sakta hai 

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
   // console.log(num);
    
}

const greeting = "hello world!"
for (const greet of greeting) {
   // console.log(`each char is ${greet}`);
   
}

// Maps- esme value unique hoti hai

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

// console.log(map);
// key bas rhega to array me hi print karega agr key ko hum [] ke andr karenge to array ka distructure print hoga 
for (const [key, value] of map) {
// console.log(key, ':-', value);
}

const myObject = {
   'game1': 'NFS',
   'game2': 'Spiderman'
}

// for (const [key, value] of myObject) {
//    console.log(key, ':-', value);
// }