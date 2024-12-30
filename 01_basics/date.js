let myDate = new Date();

//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toJSON());
//console.log(typeof myDate);

//let myCreateDate = new Date(23 , 0 , 23 , 5 ,30)
//let myCreateDate = new Date(2023 , 0 , 23)
let myCreateDate = new Date("01-23-2023")
//console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
//console.log(Math.floor(Date.now()/1000));   //from mili second to second

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());

/*
newDate.toLocaleString('default' , {
     weekday: "long",
})

*/
console.log(newDate.toLocaleString);

