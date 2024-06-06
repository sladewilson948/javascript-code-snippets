const grandparent = document.querySelector(".grandparent")


/// we dont need to add evebntliostern for all of them seperately this can be done easilyu using event deelgation just add the event lister for the garndparent and then we can achive that

grandparent.addEventListener("click", (e)=> {
    console.log("You cliked on something")
    console.log(e.target)
})