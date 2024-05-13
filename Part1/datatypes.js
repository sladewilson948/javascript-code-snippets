/// these are the data types in Java Script

// primitive data types
// string number boolean undefined null BigInt Symbol

let age = 22
let first_name = "Aman Dubey"
console.log(typeof age)
console.log(typeof first_name)
console.log(typeof (age + ""))


//how to convert the number to string
// simply add "" in the end


//how to convert a styring to number in javascript just add a + sign before the string to do that

let num1 = "34"
num1 = +num1
console.log(num1)
console.log(typeof num1)

let my_age = 18
console.log(String(my_age))
console.log(typeof String(my_age))


// string concatination

let name1 = "Aman Dubey"
let name2 = "Archita Dubey"
console.log(name1 + " " +  name2)

let val1 = "69"
let val2 = "29"
let val3 = +val1 + +val2
console.log(val3)


/// templates trings

function generateMessage(val1,val2,val3)
{
    //this is gettingg tedious
    /* let final_answer = "My name is " + val2 + "and my age is " + val1+"" */

    let final_answer = `Hi my name is ${val2} my age is ${val1} and I am from ${val3}`
    return final_answer
}

console.log(generateMessage(23,"Aman Dubey","Varanasi"))


//what is undefined
//;ets say we make a varriable and we do not assign any value to it it still says undefiend same for var but not for const

let your_name
console.log(typeof your_name)
console.log(your_name)
your_name = "Aman Dubey"
console.log(typeof your_name, your_name)
console.log(" ")
console.log("Line number 64")

// what is null null means nothing kuch nahi
let null_varriable = null
console.log(null_varriable, typeof null_varriable)
null_varriable = "sladewilson"
console.log(null_varriable, typeof null_varriable)


// there is a bug in javascript that type of null is object and is a completely diffrent type reference daattype


/// what is BigInt
// if your need a bigger number you will need a big int a number which will be greater than the MAXSAFE INTEGER

console.log(Number.MAX_SAFE_INTEGER)

//uysing Bigint
// both number are bigInt
let my_number = BigInt(12)
let your_number = 123n
console.log(my_number  + your_number)

/// boolean and comparison operators

let my_num1 = 69
let my_num2 = 69
console.log(my_num1 <= my_num2)

// == vs ===
//checking euqlity
// == only cares about value and not the datatype
// and we also want to include data type we need ===
console.log(my_num1==my_num2)
console.log(my_num1===my_num2)


// != and !==

console.log(my_num1!==my_num2)

// trutyhy value and fasly values
// fasle
//""
//null
//undefined
let even_num = 89
if (even_num%2===0)
{
    console.log("This is an even number!!")
}
else{

    console.log("This is a odd number")
}


let first = false

if (first)
{
    console.log("first")
}
else{
    console.log("First name is a kinda empty!!")
}


/// terniary opeartors
//I want to set a varriable value based on some other value
// thats when we use terniary operators


function checkIfallowed(var11)
{
    
    let var2 = var11>=18? "allowed to vote": "not allowed to vote"

    return `Hi there voter your age is ${var11} and you are ${var2}`
}
console.log(checkIfallowed(19))


function checkIfName(voter_name, voter_age)
{
    if (voter_name[0]=="H" || voter_name=="h" && voter_age>=18)
    {
        console.log("You are allowed to vote")
    }
    else{
        console.log("You are not allowed to vote!!")
    }
}

checkIfName("Aman Dubey", 12)


let number1 = "18"
let number2 = "19"
console.log(+number1 + +number2)





