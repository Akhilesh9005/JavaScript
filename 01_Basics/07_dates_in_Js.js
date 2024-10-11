// dates objects represnts the single module

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

//javaScript ke andar date ek object hota hai 
// console.log(typeof myDate);

// javascript ke andar months 0 se start hoti hai
let myCreatedDate = new Date(2024, 0, 11)
// console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
 
newDate.toLocaleString('default, {
    weekday: "long",
})
