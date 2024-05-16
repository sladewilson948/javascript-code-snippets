/// let's take an example of javascript closures


function myFunc()
{
    let flag = true
    return function()
    {
        if(flag)
            {
                console.log("Eda Mone you callled mee")
                flag = false
            }
        else{
            console.log("Chetta duplicate Indian Mone!!!")
        }
    }
}

const fucnone = myFunc()
fucnone()
fucnone()
fucnone()
fucnone()
fucnone()