


const allbuttons = document.querySelectorAll(".container button")
console.log(allbuttons)


allbuttons.forEach(button => {

    button.addEventListener("click", (e)=> {

        console.log(e.target.textContent)
        e.target.style.backgroundColor = "yellow"
        e.target.style.color = "black"
    })
})