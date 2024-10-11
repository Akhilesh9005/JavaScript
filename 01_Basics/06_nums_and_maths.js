const score = 400
// console.log(score);

const Balance = new Number(100)
console.log(Balance);

// Esase hum balance ko string me convert kar sakate hai aur esaka length bhi pta kar sakate hai 
// aur string ksa property use kar sakte hai 
// eg :-
console.log(Balance.toString().length);
console.log(Balance.toFixed(2));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++++++++ Maths++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
// eg 4.3 yani 5 se kam rahegan to ye 4 ko print karega aur agr 5 se upar rahrga to 5 print karega
console.log(Math.round(4.3));
// ceil me agr 4.1 se thoda bhi jyda rahega to 5 kar dega wahi agr floor me 4.9 bhi rhe to 4 hi print karega kyuki floor value lega 
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

// Math.random ki value hamesa 0 aur 1 ke bich me aati hai
console.log(Math.random());
// yesa karne se value hamesa 1  aayegi 0to nhi ayegi 
console.log(Math.floor(Math.random()*10) + 1);

const min = 10 
const max = 20

// Formula of Math:-
console.log(Math.floor(Math.random() * (max - min + 1)) + min);


