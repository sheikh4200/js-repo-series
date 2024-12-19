//so today we are going to learn about loops
//first we are going trought for-loop
// let start
// for(let i = 10; i >= 0; i--){
// console.log(i)
// }

// for(let i = 0; i <= 10; i++){
//     console.log(i)
//     }

//nesting of for loop

for (let i = 0; i <= 10; i++) {
    console.log(`the value is ${i}`)
    for (let a = 10; a >=0; a--) {
console.log(`this is the example of for loop nesting ${a}`)        
        
    }
    
}