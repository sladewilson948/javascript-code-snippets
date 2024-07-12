

console.log("Script Start")
const id = setTimeout(()=> {
    console.log("Inside the timeout function")

}, 0)
for(let i=0;i<10000;i++)
    {
        console.log(i)
    }
    // this will drop the call back
console.log("clearing timeout")
clearTimeout(id)
console.log("Script End")

// we can alsi clear timne out