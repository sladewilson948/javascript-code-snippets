const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")
const body = document.body


/// event capturing

child.addEventListener("click", (e)=> {
    console.log("Captured Child")
}, true)

parent.addEventListener("click", (e)=> {
    console.log("Captured Parent")
}, true)


grandparent.addEventListener("click", (e)=> {
    console.log("Captured GrandParent")
}, true)


body.addEventListener("click", (e)=> {

    console.log("Captured body")
}, true)

/// this is called as event bubbling


child.addEventListener("click", (e)=> {
    console.log("You just cliked on the child !!!")
})

parent.addEventListener("click", (e)=> {
    console.log("You just cliked on the parent !!!")
})


grandparent.addEventListener("click", (e)=> {
    
    console.log("You just cliked on the grandparent !!!")
    console.log(e.target)
})


body.addEventListener("click", (e)=> {

    console.log("You just cliked on the body as well !!!")
})

