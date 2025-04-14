
const myNums = [1,2,3,4,5,6]

//const newNums = myNums.map( (num)=>num+10 )
const newNums = myNums.map( (num)=>num*10 ).map( (num) => num+1 )

console.log(newNums);

const total = myNums.reduce( function(acc , cuurval){

    return acc + cuurval;
},0);

const ttl = myNums.reduce( (acc , curr)=> (acc + curr),0 )
console.log(ttl);

console.log(total);
