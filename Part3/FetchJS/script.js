const url = "https://jsonplaceholder.typicode.com/posts"

// it will make the gest request
fetch(url)
    .then(response => {
        // this also returns a promise
        console.log("Inside then block!!!")
        if(response.ok)
        {
            return response.json()
        }
        else{
            throw new Error("Something went wrong brother!!!")
        }
        
    }).then(data => {
        console.log(data)

    /// so we saw how the cathc block was not running without the if else block written above becuase the promise will not fail if we have the wornmg Url it did not fail and went to the response block with the flag set to false if the URL given is wrong in that case this will happen


    /// the catch bl;ock runs perfwectly if the net is disconnected
    }) .catch(error => {
        console.log("This is inside catch block")
        console.log(error)
    })
