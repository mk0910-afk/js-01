// for of

const arr = [1, 2, 3, 4, 56]

for (const num of arr) {
    console.log(num);
    
}

// maps

const map = new Map()
map.set('IN' , "india")

for (const [key , val] of map) {
    console.log(key , ":-" , val);   
}
// objects are not iteratable by for of loop

// forin loops for object , arrays but will not print anyhting for map

const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby"
}

for (const key in myObject) {
    console.log(key);
    console.log(myObject[key]); 
}