function getColor()
{
    const red = Math.floor(Math.random()*126)
    const green = Math.floor(Math.random()*126)
    const blue = Math.floor(Math.random()*126)

    return `rgb(${red},${green},${blue})`

}


const body = document.body
const intervalId = setInterval(()=> {
    body.style.backgroundColor = getColor()
},1000)


const myButton = document.querySelector("button")
console.log(myButton)
myButton.addEventListener("click", (e)=> {

    console.log("This button was clicked!!!")
    console.log(e)
    clearInterval(intervalId)
    myButton.textContent = body.style.backgroundColor
})


