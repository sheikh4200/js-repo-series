//************************************      Array  part- 2                   ****************************************** */
//let begin
const marvel = ["thor","hulk","antman"];
const dc = ["manofsteel","wonderwoman","batman"]
//using push method
// marvel.push(dc)
// console.log(marvel)
// console.log(marvel[3][2])
//push method cannot combine two arrays. it make second array is a element of first array

//using concat method
// const new_one = marvel.concat(dc)
// console.log(new_one) 
//concat convert two arrays in a single array but there are a better method then concat //

//spreate operators
//for example

const all_InOne =[...marvel,...dc]
// console.log(all_InOne)
//both concat and spreate operators works same but spreate operators can combine multiple array but concat can combine just two arrays 

// flat method
// if a array has nested arrays and one of them have another nested array like in example//
//for example

const num = [1,2,3,[4,5],6,[7,[8,9,],10],11]
// console.log(num)
const all_InOne2 = num.flat(Infinity)
// console.log(typeof all_InOne2);

console.log(Array.isArray(1))// its output is false
console.log(Array.from("sheikh"))// it only work on  string 
console.log(Array.from({name:"sheikh"}))// this is intersting //it output is an empty array
//for that using from =>of method
console.log(Array.of(name = "sheikh"))

//let talk about the problem
//if
let score1 = 1;
let score2 = 2;
let score3 = 3;
//for solution we again use of Array.of method 
console.log(Array.of(score1,score2,score3))