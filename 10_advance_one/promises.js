const promiseOne = new Promise(function(resolve, reject){
    // do an async task 
    // db calls ,  cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000);
})
// upar promise create ho gaya hai ab niche wale part me promise ko consume karenge 

promiseOne.then(function(){
    console.log("promise consumed");
    
})
  
 new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
 }).then(function(){
    console.log("Async 2 resolved");
    
 })

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Akhil", email: "abcd@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Akhil", password: "12345"})
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

promiseFour.then((user) => {
console.log(user);
return user.username

}).then((username) => {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(() => console.log("the promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "12345"})
        } else {
            reject("ERROR: js went wrong")
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

// to es tarah 2 tarike se hum promise ka use kar sakte hai ya to .then laga kar nhi to phir trycatch ka use kar sakte hai 


consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch ("link hai")
        const data = response.json()
        console.log(data);
        
    } catch (error) {
        console.log("E: ", error);
        
    }
    
}
 
getAllUsers()