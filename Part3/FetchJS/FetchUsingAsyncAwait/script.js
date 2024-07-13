
console.log("Script start")
const url = "https://jsonplaceholder.typicode.com/postsssss"


/// the async fuinction always returns a promise when we run it

async function getPosts()
{
    /// now this function will always give us a promise for sure
    /// the await here will literraly wait for the promise of fwetch to get resolved 
    const response = await fetch(url)
    if(response.ok)
    {
        const data = await response.json()
        return data
    }
    else{
        throw new Error("bruh I think something went wrong fr fr")
    }
    

    // here we are returnning a promise
    
}


// as we can see it is returning a promise to use as always!!
const myData = getPosts()
myData.then(data => {
    console.log(data)
})
.catch(error => {
    console.log(error)
})

console.log("Script end")