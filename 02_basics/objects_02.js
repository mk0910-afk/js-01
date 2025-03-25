//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "manas"
tinderUser.isLoggenIn = false;

//console.log(tinderUser);

const regularUser = {
    email: "mandchid", 
    fullname: {
        firstname :"manas",
        lastname : "khetan"
    }
}

//console.log(regularUser.fullname?.firstname); // what if fullname doesnt exist ? in that case we use "?"

const obj1 = {
    1 : "a" , 
    2 : "b"
}
const obj2 = {
    3 : "a" , 
    4 : "b"
}

//const obj3 = {obj1 , obj2}
//const obj3 = Object.assign({} , obj1 , obj2)
const obj3 = {...obj1 , ...obj2}

//console.log(obj3);

// Arrays of object , from database

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggenIn'));

// destructuring

const course = {
    coursename : "js in hindi" , 
    price : "999", 
    courseInstructure : "Hitesh"
}

const {courseInstructure} = course
const {courseInstructure : inst} = course

console.log(inst);





