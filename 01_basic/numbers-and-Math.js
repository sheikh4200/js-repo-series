//today we going to learn once again numbers and new topic Math method or also known as Math function 
//let start with god name(Allah)
let score = 100;
// console.log(score)
//this method confrim that is a number notthing else
let score1 = new Number(400)
// console.log(typeof score1)// type is object 
// console.log(typeof score1.toFixed(2))//type convert to string
// console.log( score1.toString().length )//it will convert to string and then you can find length other values
let value = 123;
// console.log(value.toPrecision(50))//it return string and it will increase the value of .0 => 01 and soon on


// to find out TolocaleString we simply create a varible
// let numbers = 1000000000
// console.log(numbers.toLocaleString('en-PK'))//it give commas in the value depend on the value //you convert it 

//*****************************************Math********************************************** *//
// console.log(Math)//its an object

// console.log(Math.abs(-4))//so that mean it convert negitive value in to positive value
// console.log(Math.round(3.5))//it help to removed point value and round the value if the point number is bigger than or equal to 5 it convert number  like 3 to 4. if the point  number is lower then 5 it will convert the number like 3 to 2//
// console.log(Math.max(2,3,4,5,67,8,99,0,960))//it find max value
// console.log(Math.min(0.23,2,-4,-99))//it find min value
// console.log(Math.ceil(4.2))//it convert like if 4.1 => 5 it goes to up
// console.log(Math.floor(4.9))//it convert like 4.9 => 4 it goes to down
// console.log(Math.PI * 3)// use to find PI value
// console.log(Math.floor(Math.random()* 10) +1)// for random value for further expirement

let min = 20;
let max = 30;
console.log(Math.floor(Math.random() * (max - min + 1)) + min)