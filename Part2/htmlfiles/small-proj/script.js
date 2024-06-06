const mybutton = document.querySelectorAll("button")
const body = document.body
const h1 = document.querySelector("h1")
const contentcolor = document.querySelector(".content-color")


mybutton.forEach(button=> {

    button.addEventListener("click", (e)=> {
        if(e.target.textContent=="Change background color")
            {
                body.style.backgroundColor = getRandomColor()
                body.style.transition = "0.4s ease in"
                contentcolor.textContent = getRandomColor()
            }
        else{
            h1.style.backgroundColor = getRandomColor()
            h1.style.transition = "0.4s ease in"
        }
    })
})


function getRandomColor()
{

    return `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
}