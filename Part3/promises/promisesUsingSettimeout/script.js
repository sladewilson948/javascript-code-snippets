
console.log("Script Start")

function myPromise()
{
    const flag = true
    return new Promise((resolve,reject) => {

        setTimeout(()=> {
            if(flag)
            {
                resolve("the promise got resolved")
            }
            else{
                reject("the promise got rejected")
            }
        },2000)
    })
}


myPromise().then(value => {
    console.log("As you can see the execution got delayed by 2 sec", value)
}).catch(error=> {
    console.log("Yeah it got delayed by 2 sec", error)
})


console.log("Script end!!!")