//today we gonig to learn about functions in javascript
//let dive deep in functions methods

// const sum = (a,b) => {
//  return  a * b
// }
// console.log(sum(333333,2222))

//addding two numbers

// let addNumbers =(number1,number2)=>{
// return number1 + number2// when using string you cannot multiple or divide it
// // console.log(number1 + number2)
// }

// const res = addNumbers("a",44)
// console.log(res)
// console.log(typeof res)

//let practice a function with a logic example

let isUserLoggedIn  = (username)=>{
    if(username === undefined) return undefined;
    return `${username} is logged in`

}
console.log(isUserLoggedIn("sheikh"))