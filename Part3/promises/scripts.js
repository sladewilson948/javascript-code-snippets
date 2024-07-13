


function icecreamPromise()
{
    const flavours = ["chocolate", "vanilla", "strawberry", "blackcurrent", "pista", "kiwi"]

    return new Promise((resolve,reject)=> {

        if (flavours.includes("chocolate"))
        {
            resolve("here is all the icecream you want")
        }
        else{
            reject("you are not getting any icecream whatsoever")
        }
    })
}


const promise1 = icecreamPromise()

promise1.then((value)=> {
    console.log("The result is", value)
}).catch((error)=> {
    console.log("The result is", error)
})



/// what if I want to set Timmeout and use them to resolve or reject a promise after some time

console.log("Script Start")

function myPromise()
{

    const flavours = ["chocolate", "vanilla", "strawberry", "kiwi"]
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            if(flavours.includes("chocolate"))
            {
                resolve("ye le re icecream kha be")
            }
            else{
                reject("You are not getting any icecream whatsoever")
            }
        }, 2000)
    })
}

myPromise().then((value)=> {
    console.log("The result is", value)
}).catch((error)=> {
    console.log("The result is", error)
})


console.log("Script End!!!")