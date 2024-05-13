// let and const are block scoped and var in function scoped
// if we have a let and const in a block we can only access it in that block

{
     let fname = "Aman Dubey"
     console.log(fname)
}


{
    let fname = "Archita"
    console.log(fname)
}

let fname = "Rachel Mc Admas"
console.log(fname)


{
    var myname = "Aman Dubey"
    console.log(myname)
}

{
    //var myname = "Archita"
    console.log(myname)
}


function myApp()
{
    if(true){
        var fname = "Aman Dubey"
        console.log(fname)
    }

    if(true)
        {
            console.log(fname)
        }

    console.log(fname)
}

myApp()

console.log(" ")
console.log(" ")

// default parameters


function addTwo(a,b=1)
{
    return a+b
}

const ans = addTwo(4,8)

console.log(ans)


// rest parameters

function myFunc(a,b,c,...param)
{
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(`c is ${c}`)
    console.log(param)
}


myFunc(3,4,5,6,7,8,9,0)

//lets make a function

const addAll = (...c) =>{
    let sumVal = 0
    for(let ele of c)
        {
            sumVal+=ele
        }
    console.log(Array.isArray(c))

    return sumVal
}

console.log(addAll(1,2,3,4,5,6,7,8,9,10))

// parameter destructuring
// lets say we have an object

const person = {
    name: "Aman Dubey",
    sex: "Male",
    job: "Full Stack Developer"
}


function printDetails(obj)
{
    console.log(obj.name)
    console.log(obj.job)
    console.log(obj.age)
}

printDetails(person)

// let's try to do the same thing using object destructuring

const employeeone = {
    name: "Aman Dubey",
    age:24,
    city: "Varanasi",
    country: "India",
    salary: 678000
}


function getEmployeeDetails({name:var1, age:age, city:city, country:var2, salary:sal})
{
    console.log(`The person name is ${var1}`)
    console.log(`The person age is ${age}`)
    console.log(`The person makes around ${sal}`)
    console.log(`The person hails from the city of ${city}`)
    console.log(`The person is from the country ${var2}`)
}


getEmployeeDetails(employeeone)

/// what if wanted to make a function that would simple add all the numbers no matter what they are

function addAllNumber(...c)
{
    let sum_val = 0
    for (let val of c)
        {
            sum_val+=val
        }

    console.log(sum_val)
}

addAllNumber(1,2,3,4,5,6,7,8,9,0)


/// call back functions
// we wil be putting a functuion directly inside a function


function myFunc2(name){
    console.log("Inside my func 2")
    console.log(`Your name is ${name}`)
}

function myFunc(callback)
{
    console.log("Hello there I am a function")
    callback()
}

myFunc(myFunc2)


// function that returns a function

function myFunc()
{
    function hello()
    {
        return "Hello there I hope you are doing fine"
    }
    
    return hello
}

const var69 = myFunc()
const myans = var69()
console.log(myans)

// these are alkl example of higher order jfunctions hwere a function inside deals with other functions








