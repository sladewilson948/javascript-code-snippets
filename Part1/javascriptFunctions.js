/* 


const user_list = [
    {userId:0, userName: "Aman Dubey", userAge: 26, hobbies:["listening to music", "going out", "having good food", "going to gym"]},
    {userId:1, userName: "Archita Dubey", userAge: 22, hobbies:["cooking", "sleeping", "buying makeup products"]},
    {userId:2, userName: "Rachel Mc Adam", userAge: 34, hobbies:["making movies", "acting", "look like a dive"]}
]


// time to do the destructring

const [{userId:var1,hobbies:hobbie1, userName:name1}, , {userId:var2, hobbies:hobbie2, userName:name2}] = user_list


console.log(`Hi my name is ${name1} and my hoobies are ${hobbie1}`)
console.log(`Hi my name is ${name2} and my hobbies are ${hobbie2}`)
 */


// making a function to check if a value is present in the list or not 

// function decleration
function checkIfExists(list1,target)
{
    for(let ele of list1)
        {
            if(ele===target)
                {
                    return true
                }
            
        }
        return false
}

const list1 = [1,2,3,4,5,6,7,8,9,0]
const target = 7

console.log(checkIfExists(list1,target))


// function expressions

const myFunction = (a,b) => {
    console.log(a+b)
}


myFunction(23,46)


// lets see the arrow functions in javascript


const summThreeNumber = (val1,val2,val3) => {

    return val1 + val2  +val3
}

console.log(summThreeNumber(1,67,1))

const findTraget = (list1,target) =>{

    for(let ele of list1)
        {
            if (ele===target){
                return "Number exists"
            }
        }
    return "Number does not exist"
}

console.log(findTraget([1,2,3,4,5,6,7,8,9,0],4))


// checking if a number is odd or even

const isEven = number => number%2==0
console.log(isEven(4))


// hoisting only workd on function decleration but not on function expression

// functions inside of functions


const app = () => {
    
    const myFunc = () => {
        console.log("Hello from my func")
    }

    const addTwo = (num1,num2) => {
        return num1 + num2
    }

    const multi = (num1,num2,num3) => {
        return num1 * num2 * num3
    }
    console.log("Inside App")
    // running myFunc()
    myFunc()
    console.log(addTwo(4,5))
    console.log(multi(3,4,5))

}
app();


// lexical scope in functions
const myvar = "value1"
function myApp() {

    
    function myFunc()
    {
        //const myvar = "value69"
        console.log("Inside my func", myvar)

    }

    // const myFunc2 = function(){

    // }

    // const myFunc3 = () => {

    // }

    console.log(myvar)
    myFunc()
}   

myApp()

