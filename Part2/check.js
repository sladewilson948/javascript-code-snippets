

// our task is to make a function that when called once says something and when called more than once syays something else

function makeFunction()
{
    let count = 0
    
    return function()
    {
        if(count == 0)
            {
                console.log("Hello there you called me!!")
                count+=1
            }
        else if(count==1)
            {
                console.log("You already called me before brother!!!")
                count+=1
            }
        else{
            console.log("Get your self together solider you have already called me before you forgot ????")
        }
    }
}

const myFunc = makeFunction()
myFunc()
myFunc()
myFunc()
myFunc()


// lettake the example of power and numbers

function setPower(power)
{
    return function(number)
    {
        return number**power
    }
}

const power = setPower(4)
const ans = power(26)
console.log(ans)
