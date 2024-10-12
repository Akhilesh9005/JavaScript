// singleton objects 
// const tinderUser = new Object()

// non singleton object 
const tinderUser = {}     // both are same give output in object
 
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {    // es tarah hum cotaion ke andar phir uske andar value de sakte hai 
    email : "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Akhilesh",
            lastname: "Sahani"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  
// console.log(Object.values(tinderUser));  
// console.log(Object.entries(tinderUser));  


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Akhilesh"
}

// course.courseInstructor
// es tarah object ko destructure kiya jata hai courseInstructor ko sirf instructor hi likha gaya 
const {courseInstructor: instructor} = course
console.log(instructor);

// API matlab jab hum apna kaam kisi dusre ko saunf dete hai tb 
// es format ko jesn bolate hai 
// {
//     "name": "akhilesh",
//     "coursename": "JS in hindi",
//     "price": "free"
// }

// kabhi kabhi jesan array me bhi milta hai jo es format me hita hai 
[
    {},
    {},
    {}
]
