
function sayMyName(){

}

sayMyName()

function add(num1 , num2){

    return num1 + num2;
}

console.log(add(3 ,4));
// when u cant pass an argument by defualt prints "undefined"

function loginMessage(username = "man"){

    if(username === undefined){
        console.log("enter username");
        return;
    }

    return `${username} jus logged in`;
}
console.log(loginMessage("manas"));
