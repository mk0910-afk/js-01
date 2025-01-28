
const marvel = ["thor" , "ironman" , "falcon"]
const dc = ["batman" , "flash" , "sperman"]

//marvel.push(dc)

//console.log(marvel);

const temp = marvel.concat(dc);
//console.log(temp);

// spred operator
const all_combined = [... marvel , ... dc];
console.log(all_combined);

const arr = [1 , 2,  3, [3 , 4, 5 ] , [4 , 5 ,[6 , 6 ,[7 , 8]]]]

const another_arr = arr.flat(Infinity)
console.log(another_arr);


console.log(Array.isArray("manas"));
console.log(Array.from("manas"));
console.log(Array.from({name : "manas"}));

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1 , s2 , s3));
