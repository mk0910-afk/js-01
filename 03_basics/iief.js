// Imediately Invoked Function Expression

(function chai(){ //named iife
    console.log("DB Connected");
    
})(); //semicolon is imp here to end  //global pollution will not affect it

( (name) => {
    console.log("DB Connected Two" + name);
    
})(" hitesh")
