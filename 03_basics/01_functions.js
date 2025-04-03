
function sayMyName(){

}

sayMyName()

function add(num1 , num2){

    return num1 + num2;
}

//console.log(add(3 ,4));
// when u cant pass an argument by defualt prints "undefined"

function loginMessage(username = "man"){

    if(username === undefined){
        console.log("enter username");
        return;
    }

    return `${username} jus logged in`;
}
//console.log(loginMessage("manas"));


function calculateCartPrice(val1 , val2 , ...num1){ // ... this is called rest and spread operator depending upon usecase
    return num1;
}

//console.log(calculateCartPrice(200 , 100 , 400 , 3000));

const user = {
    username : "manas",
    price : 99
}

function handleObject(anyobject){
    console.log(`user is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user);
handleObject({
    username : "sam" , 
    price :99
})

const myNewArray = [200 , 300 , 400 , 500];

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));


