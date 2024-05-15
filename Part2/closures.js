/// lets see how closures work in javascript ????
// lets get it.


// functions can return other functions in javascript

// function myFunc()
// {
//     function innerFunction()
//     {
//         console.log("Inner Function!!")
//     }

//     return innerFunction
// }

// const ans = myFunc()
// ans()


function printFullName(fname,lname)
{
    function printName()
    {
        console.log(`Hi my name is ${fname} ${lname}`)
    }
    return printName
}

const ans = printFullName("Aman","Dubey")
console.log(ans)
ans()


// let us take this example of closure here

function hello(x)
{
    const a = "varA"
    const b = "varB"
    return function()
    {
        console.log(a,b,x)
    }
}

const newans = hello("myargs")
newans()


function myFunction(power)
{
    return function(number){
        return number**power
    }
}

const cube = myFunction(3)
console.log(cube)
console.log(cube(2))



function myFunctionToGetPower(power){

    return function(number)
    {
        return number**power
    }
}

const myPower = myFunctionToGetPower(2)
const answer = myPower(16)
console.log(myPower)
console.log(answer)



// since I am a tech savy let me write this code in a single liner
// thi0s function here does utilizes closure under the hood we just cannmot see it yet
const smartFunction = power => number => number**power
const func1 = smartFunction(2)
const myans = func1(3)
console.log(myans)


// lets do this task and it is a good example of closure

function func()
{
    let flag = true
    return function()
    {
        if(flag){
            console.log("Hi you called me")
            flag = false
        }
        else{
            console.log("I have been called before")
        }
    }
}
console.log("This is probably the best example of closures in javascript!!")
const myFunc = func()
myFunc()
myFunc()
myFunc()
myFunc()
console.log("")
const myFunc2 = func()
myFunc2()
myFunc2()
myFunc2()
myFunc2()


/// creating powers

function setMyPower(power)
{
    return function(number)
    {
        return number**power
    }
}

const setpower = setMyPower(3)
const myanswer = setpower(5)
console.log(setpower)
console.log(myanswer)



// lets see that example again







