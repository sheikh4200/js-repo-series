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

// let isUserLoggedIn  = (username)=>{
//     if(username === undefined) return undefined;
//     return `${username} is logged in`

// }
// console.log(isUserLoggedIn("sheikh"))

//*** part-2***//
//learn about rest operators
//for example
// rest operators are also known as spreate operators depend on their usage
// function addPriceCart(val,val2,...num1){
// return num1
// }
// console.log(addPriceCart(12,13,14,15))//it return an Array

//function with object

// const user = {
//     username:"sheikhRizwan",
//     ages:25
// }

// function add(anytype){
//     return `the username is ${anytype.username} and his age is ${anytype.age}`

// }
// console.log(add({
//     username:"sheikh-rizwan",
//     age:25
// }))

//functions with Array

// let newArr = [1,2,3,4]

function addArray(anytype){
    return anytype[0]
}
console.log(addArray([1,2,3,4]))
