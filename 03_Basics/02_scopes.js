//var c = 300
let a = 300
if (true){
    let a = 10 
    const b = 20 
    // console.log("INNER:", a);
    
}
// if ke andar jo kuch bhi likh rhe hai wo hai pura block scopes and uske bahr jo likha hai wo hai global scope 
    


// console.log(a);
// console.log(b);
// console.log(c);

// ye niche wale nested function hai esme jitne bhi child hai wo parent fucton ko access kar sakte hai 

function  one(){
    const username = "akhilesh"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);

    two()
    
}

one()

if (true) {
    const username = "akhilesh"
    if (username === "akhilesh") {
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);


// ++++++++++++++++ intresting +++++++++++++++++++++++


console.log(addone(5));

function addone(num){
    return  num + 1
}
// decleration ke pahle host kar rha hai esliye error aayega 

addTwo(5)
const addTwo = function(num){
    return num + 2
}



