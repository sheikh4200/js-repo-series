//today we are going learn about a high order loop for-each
//high order loop or function are that can take another function as parameter or return function
//let start

const myArr = [1,2,3,4,5,6,7]
myArr.forEach(function(item){
    // console.log(item)
})
//now pass a function in for-each loop
function abc(item,index,array){
    console.log(`yes that the way ${item} and index is ${index} and array is ${array}`)
}
//  myArr.forEach(abc)

const myCode = [
    {
        name:"sheikh",
        age:25
    },
    {
        name:"rizwan",
        age:26
    },
    {
        name:"khan",
        age:84
    }
]

myCode.forEach((item)=>{
return console.log(`the age is ${item.age}`)
})