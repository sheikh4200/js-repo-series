// today we going to learn about fr-each as revision and filter and reducer
//let bit light on for each

const abc = [1,2,3,4,5]

// abc.forEach((item,index, array)=>{
//     return console.log(`this is the value of ${item} and index is ${index} and the full array is ${array}`)
// })

// now going to learn about filter 

const myArr = [1,2,3,4,5,6,7,8]

// const newArr =  myArr.filter((item)=>{
//     return item > 4
// })

// const newNums = []
// myArr.forEach((num)=>{
// if(num > 4){
// // console.log(`the value is that ${num}`)
// newNums.push(num)
// }
// })
// console.log(newNums)

//now used filter deeply learn more about it 
//filter() takes a call back function

const myBook = [
    {
        title:"title1",
        book:1,
        genre:"history",
        publishOn:"2000"
    },
    {
        title:"title2",
        book:2,
        genre:"biology",
        publishOn:"2010"
    },
    {
        title:"title3",
        book:3,
        genre:"science",
        publishOn:"1999"
    },
    {
        title:"title4",
        book:4,
        genre:"science",
        publishOn:"2010"
    },  {
        title:"title5",
        book:5,
        genre:"history",
        publishOn:"1995"
    },
]

let one = myBook.filter((bk)=>{
    return bk.genre === "history"
})

 const two =  one.filter((bk)=>{
if(bk.publishOn >= 2000){
console.log("yes")
}
})

console.log(one)
