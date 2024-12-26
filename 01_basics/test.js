console.log("hello")

// let name = "manas"
// let age = 18 
// let subject
// let college = null


//console.table([name , age , subject ,college]);

// avoid using var , instead use let , 

/*

primitive
variable
number 2^253
bigint
string 
boolean
null => standalone value
undefined
symbol =>unique

non primitive
Arrays , object 
*/

console.log(typeof null) //object
console.log(typeof undefined ) //undefined

// conversions of datatype 

let val = "33abc"

let num = Number(val)

console.log(typeof val); //string
console.log(typeof num) //number
console.log(num) //NaN

// Operations 

console.log(2 + 2 +"2"); //42
console.log("1" + 2); //12
console.log(+true); //+"" => false/0


// Stack(primitive , copy) , Heap(Non primitive, reference)