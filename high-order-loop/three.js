//today we are going to learn about reduce() and map() in js
//let check redducer define in documents in mdn
// let wirte same examples
//let talk about map() function first

let myArr = [1,2,3,4,5,6]
const home = myArr.map((item)=>
    {
return item * 200
},
// console.log(myArr)
)
// console.log(home)

const name = myArr
.map(
    (item)=>{
      return  item + 1  
           
    })
    .map((item)=>{
return item * 4
}
)
console.log(name)



//next exanple 
//can we achive this with forEach() 

// const abc =  myArr.forEach((item)=>
// console .log(item * 2)
// )

//now move to reduce()
// console.log(typeof typeof true);
// console.log(typeof typeof 100);
// console.log(typeof typeof "shiekh");
// console.log(typeof typeof null);
// console.log(typeof typeof undefined);

let abc = 0
const myName = myArr.reduce((acc,currVal)=>
    // console.log(myArr)
acc + currVal,abc
)
// console.log(myName)