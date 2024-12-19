// we are going to learn about for-of loop
//let begin


const myArr = ['ac',"ade"]

for (const arr of myArr) {
// console.log(arr.length);
}

//can for-of-loop worked with objects

const myObj = {
    name:"sheikh",
    age:23
}

// for (const obj of myObj) {
//     // console.log(obj)
    
// }
//the simply ans is no because it is not iterable
// let see can we use strig in for-of loop

let myStr = "hello-world";

for (const str of myStr) {
    // console.log(str)
}

///let talk about Map() function

const myMap = new Map()
myMap.set("a",1)
myMap.set("b",2)
myMap.set("c",3)
myMap.set("v",5)


// console.log(myMap.get("c"))

// let see that can we used it in for-of-loop

// for (const map of myMap) {
//     // console.log(map)
    
// }
//in Map() function you can not rapeat a code 
//if desnot exsit the rapeat code on console

for (const [val] of myMap) {
        console.log([val])
        
    }