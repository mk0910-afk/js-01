
const myArr = [0 , 1 , 2 , 3 ]

myArr.push(6)

//console.log(myArr);

myArr.unshift(7) // insert ar first
//console.log(myArr);
myArr.shift()
//console.log(myArr.includes(3));

const newArr = myArr.join()

//console.log(newArr);  //newArr is of string type

// slice , splice

const arr = [0 , 1 ,2 , 3 , 4 , 5,6 , 7]

console.log("A ",arr);

const narr = arr.slice(1, 3)
console.log("B" , arr)
console.log(narr);

const narr2 = arr.splice(1,3)
console.log("C" , arr);
console.log(narr2);






