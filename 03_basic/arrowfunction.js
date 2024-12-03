//today we are going learn about what is Arrow functions and what is (this) context is.
//can we used THIS in function? //
//no we can used THis in functions
// arrow function are made in 2015 or 2016 
//how arrorw function  make

// const user = {
//     username :"sheikh"
// }

// // const sum = (username)=>{
// //     return `this is ${this.username}`
// // }
// // console.log(sum(user))

// function name(user){
//     return `this is ${this.username}`
// }
// console.log(name(user))

//important THis is alway sign to the value of current object

// console.log(typeof this)//it type is object

//now talk about arrow function we know simple function are write like this

// function name(){}

//we can  used variable to declear the function like this

// const world = function(){}

// now arrow functions are smiliar to above example
// we remove function word after = sign and add => carlibrace
// const  hello = () =>{}//this is now mostly used

//what is implied returns 
//we create simple function and function declear with variable and arrow function
//(1)simple function
// console.log(sum(1,2))
// function sum(a,b){
//  return a + b   
// }
//(2)function declear with variable 
// console.log(hello(1,3))
// //annot access 'hello' before initialization
// const hello = function(a,b){
//  return a + b   
// }
// //(3) arrow function
// // annot access 'hello' before initialization
// console.log(world(1,4))
// const world = (a,b)=>{
//     return a + b
// }