/// more with promisess

const wifeyMaterial = {

    weight: 50,
    height: 166,
    hobbies: ["going out", "table tennis", "video games", "great music taste", "gym/sports"],
    from: "North India",
    carrerField: "Does not matter",
    salary: "prefered if more than me"
}


const gfPromise = new Promise((resolve,reject)=> {

    if(wifeyMaterial.weight<=55 && wifeyMaterial.hobbies.includes("gym/sports"))
    {
        resolve("she is just my type fr")
    }
    else{

        reject("she is not my type")
    }
})

// basically in this part we are defing both the function called as resolve and reject as arrow functions in javascript and p[ass the parameters as wel;l whioch will be expected and define how it will behave
gfPromise.then((value)=>{
    console.log("Hello there I think", value, "would you like to go on a date with me !?")
}).catch((error)=> {
    console.log("Hello there I think", error, ". Hi there you are really sweet!!!")
})

