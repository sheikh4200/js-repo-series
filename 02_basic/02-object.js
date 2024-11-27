// today we going learn about singleton objects
//so let start:

// cosnt name = new Object()//this is a singleTon object
//const name = {}//this is litreal object type

//let go deep in singleTon object
const myUser = {
    name:{
        fullName:{
            firstName:"sheikh",
            lastame:"rizwan"
        }
    }
}
// console.log(myUser.name.fullName.firstName)
// console.log(myUser.name.fullName.lastame)
//this a way of nesting an object in to another object

//Object.assign() 

const a = {a:1,b:2}
const b = {c:3,d:4}
//to combine two objects in to one we used  assign() method
// const c = Object.assign({},a,b)
// console.log(c)

// this appoarch is good but the most method is spreate operators
//this work in both in arrays and objects
//and same way to use

// const c = {...a,...b}
// console.log(c)

const mobileusers =[
    {
        id:"1",
        email:"sheikh@gmail.com"
    },
    {
        id:"2",
        email:"rizwan@gmail.com"
    }, {
        id:"3",
        email:"khalid@gmail.com"
    }, {
        id:"4",
        email:"hassam@gmail.com"
    },



]
// console.log(mobileusers[0])

//keys and values find in objects like this

const  users = {
    name:"sheikh",
    age:12,
    email:"sheikh@gmail.com"
}
// console.log(users)
// console.log(Object.keys(users))
// console.log(Object.values(users))
// console.log(Object.entries(users))
// console.log(users.hasOwnProperty("roll"))// to find is this property exsit in object


//////////////////////////////*****************  de-sturcture of objects ************************************ */

const User = {
    name:"rizwan",
    age:25,
    user_Email:"sheikhrizwanghulamnabi555@gmail.com"
}

// User.user_Email //this is good way 
//but mostly developer used this to make their code clean

const {user_Email:email} = User//this is much better way then that
// console.log(user_Email)
console.log(email)
//thiscall the de-structure of object