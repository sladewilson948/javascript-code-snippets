

function addTask(){

    const id = "ele" + getUniqueId()
    const task = document.getElementById("taskname").value
    const description = document.getElementById("description").value
    if(task=="" || description=="")
        {
            alert(`Please provide required details to start`)
            return
        }

    const ele1 = document.createElement("p")
    ele1.textContent = `task : ${task}`
    const ele2 = document.createElement("p")
    ele2.textContent = `name : ${description}`
    const priority = document.createElement("p")
    priority.textContent = `class : ${getValue()}`
    const ele3 = document.createElement("button")
    ele3.id = "my-delete"
    ele3.textContent = "Delete"

    const justone = document.createElement("p")
    justone.append(ele1)
    justone.append(ele2)
    justone.append(priority)
    
    const ele4 = document.createElement("div")
    ele4.id = id
    ele4.className = "item"
    // this line helps us to put priortuiy to our tasks
    ele4.dataset.priority = getValue()
    ele4.append(justone)
    ele4.append(ele3)
    //ele4.append(ele3)

    const tasklist = document.querySelector(".my-tasks")
    tasklist.prepend(ele4)

    ele3.addEventListener('click', function() {

        console.log(id)
        let elementToDelete = document.getElementById(id)
        if(elementToDelete)
            {
                console.log(tasklist==elementToDelete.parentNode)
                console.log(elementToDelete.parentNode)
                elementToDelete.parentNode.removeChild(elementToDelete)
            }
    })

    document.getElementById("taskname").value = ""
    document.getElementById("description").value = ""
}




function getUniqueId()

{
    return Math.floor(Math.random()*10000)
}


function getValue()
{
    if(document.getElementById("choice").value==3)
        {
            return 'Low'
        }
    else if(document.getElementById("choice").value==2)
        {
            return 'Medium'
        }
    else{
        return 'High'
    }
}


function sortTasksHL()
{


    const taskList = document.querySelector(".my-tasks")
    const tasks = Array.from(taskList.getElementsByClassName("item"))
    console.log(tasks)
    const priorityOrder = { 'High': 1, 'Medium': 2, 'Low': 3 };

            // Sort the items based on their data-priority attribute
            tasks.sort((a, b) => {
                return priorityOrder[a.dataset.priority] - priorityOrder[b.dataset.priority];
            })
    
    tasks.forEach(task => {
        taskList.appendChild(task)
    })


}

function sortTasksLH()
{


    const taskList = document.querySelector(".my-tasks")
    const tasks = Array.from(taskList.getElementsByClassName("item"))
    console.log(tasks)
    const priorityOrder = { 'High': 1, 'Medium': 2, 'Low': 3 };

            // Sort the items based on their data-priority attribute
            tasks.sort((a, b) => {
                return priorityOrder[b.dataset.priority] - priorityOrder[a.dataset.priority];
            })
    
    tasks.forEach(task => {
        taskList.appendChild(task)
    })

}