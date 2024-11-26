//in this section we are gonig to start with array //
//Array is also an object
const arr = [1,2,3,4,5,]
// console.log(arr[0])

const myFriends = ["hasseb","hassam"]

const arr2 = new Array("sheikh","rizwan")
// console.log(arr2)

//Array Methods//
// arr.push(6)
// console.log(arr)
// arr.pop()
// console.log(arr)
// console.log(arr.length)
// console.log(arr.unshift(0))
// console.log(arr)
// arr.shift(0)
// console.log(arr)

// console.log(arr.includes(4))

//important method slice and splice
//let talk about slice 
const myarr = [0,1,2,3,4,5,6]
console.log(myarr)
const slice =myarr.slice(1,3)
console.log(slice)
console.log(myarr)
// let tsalk about splice
const splice = myarr.splice(1,3)
console.log(splice)
console.log(myarr)
//thus: slice did not cut array in to two and did not effect on orignal array 
//thus slpice cut array and make two arrays and also as effect on orignal array