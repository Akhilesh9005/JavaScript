// for loop 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
        
    }
    // console.log(element);
    
}
for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    
    for (let j = 1; j <=10; j++) {
    //    console.log(`inner loop value ${j} and inner loop ${i}`);
    //   console.log(i + '*' + j + ' = ' + i*j);
        
    }
    
}

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


//  break and continue
// esme break ka use karne ke baad jaise hi 5 detected hoga vaise hi print hona band ho jayega 
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`detected 5`);
//         break
//     }
//     console.log(`value of i is ${index}`);
    
// }

// esme continue use karne ke baad jab 5 detected ho jayega phir bhi print continue rahega jaise game me hota hai ek baar maaf kar dete foul hone par usi tarah hai ye bhi 
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        continue
    }
    console.log(`value of i is ${index}`);
    
}



