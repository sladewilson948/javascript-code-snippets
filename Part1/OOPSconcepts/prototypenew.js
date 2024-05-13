// we will now be discussing about what is prototype and the new keyword

function hello()
{
    console.log("Hello World!!!")
}


// in javascript the functions can be trated as both functions as well as objects to show that we can see this
// it's like we are accessing the property of an object
console.log(`The name of the function is ${hello.name}`)

// this wat we can add our own property in the functuion just like we do for an object
hello.myOwnProperty = "bruh this is crazy!!"
console.log(hello.myOwnProperty)


// name property tells us the name of the function 

// whenever we make a function we get what we call as free space that is nothing but an object and it is a kind of a free space and is basicaly an empty object which is also called as the 'prototype'

hello.prototype // is an object which we can use this  object that we can use to add extra key value pairs just like we did before this
console.log(hello.prototype)


//only and only functions provide protype property
// this can be proved using this simple if else statement
if(hello.prototype)
    {
        console.log("Protopue is present")
    }
else{
    console.log("Prototype is absent")
}


// lets try to do the same with an onbect
const myObj = {
    name: "Aman Dubey",
    age: 26
}



if (myObj.prototype)
    {
        console.log("Prototype is present")
    }else{
        console.log("Prototype is absent")
    }


// in simple terms protoype within functions is a free object wherein we can store key value pairs just like we do for normal objects however this is only avl in functions not in lists or objects etc

console.log(hello.prototype)
hello.prototype.my_nums = [1,2,3,4,5,6,7,8,9,10]
console.log(hello.prototype)
hello.prototype.user_name = "Aman Dubey"
const key1 = "key1"
const value1  = "value1"
hello.prototype[key1] = value1
console.log(hello.prototype)

// so basically what we got to know from this was that prototype actually provides us with an epmtpy obect and we can use this object later to add out proeprties just like we do for any other object in javascript and aslo one must know that it is only avl in functions

hello.prototype.sing = function(){
    return "Bruh I am singing!!"
}

// calling the above function
console.log(hello.prototype.sing())
console.log(hello.prototype)

// lets try to find out what we can do with the use of functions prototype
// so basically what prototype is that it is kind of an emptyy object which is present in all the functions that we make in javascript and we can use this empty object to define our own proerpties and methods inside this prototpye let's understand it using this example


function myName()
{
    console.log(`Hello my name is Aman Dubey`)
}


// so basically this is an empty object and we can use this empty object to rdefine our own proeprties and methods
console.log(myName.prototype)

myName.prototype.city = "Varanasi"
myName.prototype.age = 26
myName.prototype.sing = function(){
    console.log("Hello my name is Aman Dubey and I am a full stack developer!!")
}

myName.prototype.findsum = function(){
    console.log([1,2,3,4,5,6,7,8,9,10].reduce((a,b)=> a+b))
}


// now we will see that the prototype is not so empty like it was before
console.log(myName.prototype)
myName.prototype.findsum()