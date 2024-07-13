/// promise is a value that we dont know yet but we will get it later
/// promise always represents a future value something that we dont know yet but we will know soon

// promise was knows as future value before

// lets implement some promises

// const bucket = ["coffee", "chips", "vegetables", "rice", "salt"]

/// creating a promise

// const friedRicePromise = new Promise((resolve,reject)=>{

//     // this is executer4 function

//     if(bucket.includes("vegetables") && bucket.includes("rice") && bucket.includes("salt"))
//     {
//         // fied rice can be created or promise can be resolvbed
//         resolve("Fried Rice")
//     }
//     else{
//         reject("Promise not fullfilled")
//     }
// })



/// now we need to consume this promise which is more imprtant we will be consuming it more

// friedRicePromise.then((myFriedRice)=> {
//     // the value when the promise is accepted
//     console.log("Lets eat ", myFriedRice)
// })

console.log("Script start!!")

const qualities = ["money", "looks", "great physique", "bike","good package {both of them}"]


const willGoToDatePromise = new Promise((resolve,reject) => {
    if(qualities.includes("bike") && qualities.includes("money"))
    {
        // the promise can be resolved and it can be acceppted
        resolve("she agreed to go on a date with me!!")
    }
    else{
        reject("she is saying abe yar tum Cognizant mei ho jitna tum mahine ka kamate ho utna mai haftei mei kharchiti hun 😂😂😂")
    }
})


/// now let us consume this promise


/// while cosnuming this promise the first call back fucntion will run only when the promise is resolved
willGoToDatePromise.then((value) => {
    console.log("So the descission is", value)

},
/// the second call back function will run only when the p[romise is rejected as seen below
(error)=> {
    console.log("The discission is", error)
})



/// we can also try to chain usinh then and 

/// promsies are added in the microstask queue

willGoToDatePromise.then((value) => {
    console.log("So the decission is",value)
}).catch((error)=> {
    console.log("The discission is",error)
})


setTimeout(()=> {
    console.log("Hello from set time out")
},0)

for(let i=0;i<10;i++)
{
    console.log(Math.random(), i)
}

console.log("Script end")



/// promise is a browser function and it will happen asyncy 
/// bowser cosnumes the promise unless the scrips sends the promise will not be resolved!!!


/// if we have thinghs waiting in both microtaskQueue and CallBack Queue then the task is MicroTask queue will run first as it has preference over the Callback Queue