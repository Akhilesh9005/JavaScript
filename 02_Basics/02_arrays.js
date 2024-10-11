const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

// jab hum do arrays ko combine karte hai to concat use karte hai eske alawa bhi oyher method hai jo use karte hai eg:- lekin esme 3 dot hi dena hot hai 

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6,], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// esse hum puvh bhi sakte hai ki array me kyanpresent hai kya nhi  eg:-
console.log(Array.isArray("akhilesh"));
console.log(Array.from("akhilesh"));

console.log(Array.from({name: "akhikesh"})); // interesting hai kyuki hame bolna padega ki key ya value ka array banao nahi to ye hame empty dega 


let socre1 = 100
let socre2 = 200
let socre3 = 300

console.log(Array.of(socre1, socre2, socre3));

