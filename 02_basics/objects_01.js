
//singleton
//object.create

//object literals
const mySym = Symbol("key1")

const JsUser = {
    name : "Manas",
    "full name" : "manas khetan",
    [mySym] : "mykey1",
    age : 22,
    location : "rpr",
    email : "manaskhetan@google.com",
    isLoggedIn : false,
    lastLoggedIn : ["Mon" , "Tues"]
}

//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["full name"]);
//console.log(JsUser["full name"]);
//console.log( JsUser[mySym]);

//change value , override
JsUser.email = "manas092gmail.com"

// after using freeze object values cant be overide
//Object.freeze(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingtwo = function(){
    console.log(`Hello Js User, ${this["full name"]}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());

