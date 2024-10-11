// string double coat aur single coat dono me denote karte hai 
// eg " hello world" and 'hello world'

const name = "akhilesh"
const repoCount = 50

// console.log(name + repoCount + "value"); [morden day me es tarah ka likhana koi pasnd nhinkarta kyuki ye outdates hai]


// esko string enterpulations bola jata hai 
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('akhilesh-raj-sahani')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// jab character ko pta karna hai ki 5th position par kaun sa character hai tb eska use karte hai 
console.log(gameName.charAt(5));

// jab position ko pta karna hota hai ki h character kis position par hai to rska use karte hai
console.log(gameName.indexOf('h'));

// subString me negativr value allow nhi karta hai eg -8
 const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-2, 4)
console.log(anotherString);

const newStringOne = "   akhilesh       "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://akhilesh.com/akhilesh%20raj"
// url me hum empty space ko remove kar sakte hai replace ki help se 
console.log(url.replace('%20', '-'))

// url me hum pta kar sakte hai ki koi text exist karta hai ya nhi eg:- sahani
// Agar nhi hoga to flase dega agar hoga to true dega 
console.log(url.includes('sahani'));
 
// string ko hum array me bhi convert kar sakte hai split ke help se eg:-
console.log(gameName.split('-'));
 

