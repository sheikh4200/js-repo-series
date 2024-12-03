//what is the defination of IIFE?
//IIFE stands immediately invoked functions expressions//
///to declear IIFE
//we can create simple or declear with varible or arrow function can make in IIFE

(function chai(){
console.log("my name is rizwan")
})();

( (name)=>{
console.log(`my name is ${name}`)
})("rizwan")