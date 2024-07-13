const myPromise = Promise.resolve(5)
myPromise.then(value=> {
    console.log(value)
}) 

/// remember that then method alwasy returns the promsie we can use this to generate promise chains

Promise.resolve(10).then(value=> {
    console.log("This is the value that has been returned by the resolve", value)
})


function promise()
{
    return new Promise((resolve,reject)=> 
    {
        resolve("foo")
    })
}

promise().then(value=> {
    console.log(value)
    value+="bar"
    // here we are actually returning a promsie nothing else
    
    return value
}).then((value)=> {
    console.log(value)
    value+="bar"
    return value
}).then((value)=> {
    console.log(value)
    value+="bar"
    return value
}).then((value)=> {
    console.log(value)
})






