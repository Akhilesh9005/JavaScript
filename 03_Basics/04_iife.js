// Immediately Invoked Function Expression (IIFE)
// ye aisa function hota hai jo immediately access ho jaye use hi iife kahte hai 

(function chai(){
    // Esko named IIFE bolte hai 
    console.log(`DB CONNECTED`);
    
})();

// ye hota hai iife jisme ()laga kar bhi function ko run kara skte hai aur function ko end karne ke liye sbse jaruri ki ; semicoloum ka use karna padega nhin to agla function error batayega

((name) => {
    // esko simple IIFE bolte hai aur arrow function me hota h
    console.log(`DB CONNECTED TWO ${name}`);
})('akhilesh')

