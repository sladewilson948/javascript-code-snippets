


function myPromise()
{
    const required = ["bike", "flat", "girlfriend", "high paying job", "jaynagar", "Nvidia stock"]
    
    return new Promise((resolve,reject)=> {
        if(required.includes("bike") && required.includes("flat") && required.includes("girlfriend"))
        {
            resolve("Hey there broski you finally made it in life")
        }
        else{
            reject("Bruh the fuck you are doing")
        }
    })
}


myPromise().then((value)=> {
    console.log(value)
}).catch((bruh)=> {
    console.log(bruh)
})



/// also we know that promsie.resolve always gives us a value

Promise.resolve("foo").then((x)=> {
    console.log(x)
    x+="bar"
    // here always remember that a promise is returned
    return x
}).then(x=> {
    console.log(x)
    x+="baar"
    // here always remember that a promise is returned
    return x
}).then(x=> {
    console.log(x)
    x+="bruhstopitnow"
    // here always remember that a promise is returned
    return x
}).then(x=> {
    console.log(x)
})



/// we can also do a little bit of setTimeout fun when we are playing with promises


console.log("Script Start")

function getSometghing()
{
    const flag = true
    return new Promise((resolve,reject)=> {

        setTimeout(()=>{
            if(flag)
            {
                resolve("bruh you made it finaly")
            }
            else{
                reject("try again next time!!!")
            }
        },2000)
    })
}


getSometghing().then(value=> {
    console.log(value)
}).catch(error=> {
    console.log(error)
})


console.log("Script end!!")