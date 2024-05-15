function resetContent()
{
    
    document.getElementById("task").value = ""
    document.getElementById("content").value = ""
    
}

function submitContent()
{
    const txt1 = document.getElementById("task").value
    const txt2 = document.getElementById("content").value

    if(txt1 && txt2)
        {
            const newItem = document.createElement("div")
    // in this line we are adding the class to the div tag
    newItem.classList.add("item")
    newItem.textContent = `${txt1} ${txt2}`
    document.querySelector(".to-do-tasks").appendChild(newItem)
        }

        else{
            alert(`Please fill the form to proceed`)
        }

    
}