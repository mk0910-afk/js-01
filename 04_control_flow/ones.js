//if
// > ,< ,>=, =<, ==, ===, !=, !==
// if(2 == "2"){ // use === to check data type
//     console.log("Executed");
// }

let score = 200
//if(score > 100) console.log("hero") , console.log("qwerty");


const month= 3

switch (month) {
    case 1:
        console.log("january");
        
        break;
    case 2:
        console.log("feb");
        
        break;
    case 3:
        console.log("march");
        
        break;
    case 4:
        console.log("april");
        
        break;

    default:
        break;
}


//truthy values

// "0" , 'false' ," " ,[] ,{}, fubction(){} , 

// falsy value

// 0 , -0 , BigInt 0n , undefined , null ,"" , NaN

if(Array.length === 0){
    console.log("array is emoty");
    
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

// Nullish Coalescing Operator(??) null undefined

let val1

//val1 = 5??10
//val1 = null??10
//val1 = undefined ??15

val1 = null??5??10

//ternary operator

// condition ? true:fasle;