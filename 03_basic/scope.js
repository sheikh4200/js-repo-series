//today we are gonig to learn about scope in js
//let begin 
//there are three types of scopes
//local scope
//global scope
//functional scope
//we laern with examples
let a = 120
if(true){
    let a = 12
    // console.log("inner :", a)
}
// console.log(a)

///*********************************************Part-2******************************************************** */
//nested scope

// function one() {
//     const  username = "rizwan"

//     function two(){
//         const website = "youtube"
//          console.log(username)
//         }
        // console.log(website)
    
    // two()
// }
// console.log(username)
// one()

//nested in  if-else method

// if(true){
//     const username = "rizwan"
// if(username === "rizwan"){
//     const channel = 'youtube'
//     console.log(username + " " + channel)
// }

// }

/////////////////////////////////intresting\\\\\\\\\\\\\\\\//////////////////////////////////////////////////
//we create two functions 
console.log(addOne(1))
function addOne(num) {
    return num +1    
}

//this is call hosting in functions
//the console says that you can not access addTwo function before initialization
console.log(addTwo(3))
const addTwo = function(num1){
    return num1 + 1
}
