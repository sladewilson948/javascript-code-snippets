

function newPromise()
{
    const flag = true
    return new Promise((resolve,reject)=> {

        setTimeout(()=> {
            if(flag)
            {
                resolve("promise resolved")
            }
            else{
                reject("promise rejected")
            }
        },2000)
    })
}

newPromise().then((val)=> {
    console.log(val)
}).catch((error) => {
    console.log(error)
})



Promise.resolve("hi my name is aman").then((val)=> {
    console.log(val)
    val+=" and I am a full stack dveloper"
    return val
}).then((val)=> {
    console.log(val)
    val+=" and I would like to learn react as much as possible"
    return val
}).then(val=> {
    console.log(val)
})



/// fgetching api usinh async await in javascript


async function fetchData()
{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    if(response.ok)
    {
        const data = response.json()
        return data
    }
    else{
        throw new Error("There is something wrong in the API url")
    }
}


fetchData().then(val => {
    console.log(val)
}).catch(error=> {
    console.log(error)
})