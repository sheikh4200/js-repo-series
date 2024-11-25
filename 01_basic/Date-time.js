//today id sthe last lesson of first section //
// today we are going to learn about Date method //

const mydate = new Date()//Date is an object
// console.log(mydate.getDate())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString())
// console.log(mydate.toTimeString())
// console.log(mydate.toJSON())
// console.log(mydate.toISOString())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toUTCString())
// console.log(typeof mydate)

//another way to use Date mehtod
// const hello = new Date(2024 ,10, 25)/// it is little bite difficult but alway remember that it alway start with 0 month also start with 0
//  const hello = new Date(2024,10,25,11,59)
 const hello = new Date("11-25-2024")// sometime we want format like dd/mm/yy or mm/dd/yy or yy/mm/dd
// console.log(hello)
// console.log(hello.toString())
// console.log(hello.toLocaleString())

const myStamps = Date.now()
// console.log(myStamps)
// console.log(myStamps.toLocaleString())
// console.log(hello.getDate())
// console.log(hello.getTime())
//to convert milliseconds in seconds
// so to do that we use Math method and its floor function
// console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
// console.log(`today the date is ${newDate.getDay() + 24} and the month is ${newDate.getMonth() + 1} the current year is ${newDate.getFullYear()} `)

// important and mostly used propeerty of Date is toLacaleString() method

newDate.toLocaleString("default",{
     weekday: "narrow"
})
console.log(newDate)
