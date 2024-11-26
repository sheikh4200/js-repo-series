// SingleTon
/*
The Singleton pattern ensures that only one instance of a class can ever be created. No matter how many times you try to instantiate the class, you'll always get the same reference to the existing instance. Global Access Point: Since there's just one instance, you need a way to access it throughout your application.*/
/*

سنگلٹن پیٹرن اس بات کو یقینی بناتا ہے کہ کلاس کی صرف ایک مثال کبھی بھی بنائی جا سکتی ہے ۔ اس سے کوئی فرق نہیں پڑتا ہے کہ آپ کتنی بار کلاس کو شروع کرنے کی کوشش کرتے ہیں، آپ کو ہمیشہ موجودہ مثال کا وہی حوالہ ملے گا۔ عالمی رسائی پوائنٹ: چونکہ صرف ایک مثال ہے، اس لیے آپ کو اپنی پوری درخواست میں اس تک رسائی کے لیے ایک طریقہ درکار ہے۔*/


/////////////////////////////////////***************************/////////////////////////////////////////

//Object literals 
// a very very common interview question is use a Symbol in object 
const mySym =  Symbol("hello")
// console.log(typeof mySym)
const mySelf = {
    name:"rizwan",
    "full name" :"sheikh-rizwan",
    "email":"rizwan@gmail.com",
    age:25,
    [mySym]:"hello-world", 
    roll:"developer",
    isActive:true

}
//there are two ways to find object properties 
//the common apporch is
// console.log(mySelf.age)//is good but not professinally 
//the better apporch is 
// console.log(mySelf["age"])//using squre brackets
//this the better apporch because every literal object property name is automatically convert in to string
//for example//
//if i convert object property name in to string and console.log()
// console.log(mySelf.email)// you can console a value with out any dashes
// console.log(mySelf.full name)// better apporch is => console.log(mySelf[full name])
// console.log(mySelf["full name"])

// console.log(mySelf[mySym])
// console.log(mySelf)



// mySelf.email= "sheikhrizwan@gmail.com"
// console.log(mySelf)
// //a method freeze using
// Object.freeze(mySelf)
// mySelf.age = 33
// console.log(mySelf)

// using function in objects
//for example

mySelf.greeting = ()=>{
console.log("hello world")    
}
console.log(mySelf.greeting())
//we can used object properties in function for that we used string interpolation
mySelf.greeting2 = function(){
    console.log(`hello world my name is ${this["full name"]}`)    
    }

console.log(mySelf.greeting2())





