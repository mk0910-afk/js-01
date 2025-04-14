const coding = ["java" , "python" ,"ruby" , "cpp"]

coding.forEach( function (item){  //call back function have no name
    console.log(item);
    
} )

// by using arrow funct

coding.forEach( (item)=>{
    console.log(item);   
} )
// for each does not return any value , so we use filter 