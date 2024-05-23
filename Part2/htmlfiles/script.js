// let's see how we can select elemts uising the get element by id in javascript




// lets see about query selector

// const ele2 = document.querySelector("#main-heading")
// console.log(ele2)


/// lets see how we can select a class
// we can use ot use .
// const ele3 = document.querySelectorAll(".header")
// console.log(ele3)



/// lets see how we can chnage textx of an elenmt using java script

// this is how we use text content

// const ele4 = document.getElementById("main-heading")
// console.log(ele4.textContent)
// ele4.textContent = "I won't manage your tasks I am sorry"
// console.log(ele4.textContent)


/// lets see how to use innerText


// let see how we can chnage the syle of an element

// const myele = document.querySelector("div.headline h2")
//console.log(myele.style)
// myele.style.color = "blue"
// myele.style.backgroundColor = "black"
// myele.style.border = "5px solid orange"



/// lets talk about the get and set attributes in javascript

// const link = document.querySelector("a")
// console.log(link.getAttribute("href"))
// link.setAttribute("href", "https://codprog.com")
// console.log(link.getAttribute("href"))


// const inputform = document.querySelector("div.form-group input")
// console.log(inputform.getAttribute("type"))



// let see how we will get multiple elemnets with same class names

// let myLogo = document.querySelector(".logo")
// myLogo.style.color = "gold"

// let navigation = document.querySelectorAll("li.nav-item a")
// navItems = Array.from(navigation)
// navItems.forEach(x=> {

//     x.style.backgroundColor = "black"
//     x.style.color = "gold"
//     x.style.fontWeight = "bold"
// })

/// in array like object we can use indexing but we cannot use for each methopd on it like we use in normal for loops

/// what is inner html


// const headline = document.querySelector("div.headline")
// console.log(headline.innerHTML)
// headline.innerHTML = "<h1>Inner HTML has been changed to this now</h1>"
// headline.innerHTML += "<button>This is a button in the inner HTML</button>"
// console.log(headline.innerHTML)


// const newTodo = document.createElement("li")
// const newTodoText = document.createTextNode("drink water")

// this is out todo nmow ready with all the texts
// newTodo.appendChild(newTodoText)


// const todo1 = document.createElement("li")
// const todo1text = document.createTextNode("This is another todo for today!!")
// todo1.appendChild(todo1text)

// const todoList = document.querySelector(".todo-list")
// todoList.append(newTodo)
// todoList.append(todo1)



/// there is another way to do this where we can use the textContent with the new createed element and add text to it without tyhe use of the text content lets see how

// const todo2 = document.createElement("li")
// todo2.textContent = "Hi my name is Aman Dubey and I made thsi with the help of createElement"
// now all we need to do is simply add this element into 
// todoList.append(todo2)


// const todo3 = document.createElement("li")
// todo3.textContent = "Ploeyadi Mone!!!"
// todoList.append(todo3)


// so append basically adds it in the last and with the help of prepend we can add it before lets see it right nowe

// const todo4 = document.createElement("li")
// todo4.textContent = "Hi this is task that has been prepended"
// todoList.prepend(todo4)



// now let us see how we can remove a todo
// const tododeleted = document.querySelector(".todo-list li")
// tododeleted.remove()


// let su now see the case of before and after where in  we need not append insiede the class but before and after a class


// const newTodoItem = document.createElement("li")
// newTodoItem.textContent = "I have to do this no matter what happens"
// const todoList = document.querySelector(".todo-list")
// todoList.before(newTodoItem)

// const newTodoItem1 = document.createElement("li")
// newTodoItem1.textContent = "I want to add this after the todo list lets go!!"
// todoList.after(newTodoItem1)


/// now let us see what is the diffrenmce between static list and live list


// const listItems = document.querySelectorAll(".todo-list li")
// console.log(listItems)

// const sixthele = document.createElement("li")
// sixthele.textContent = "itme number six god"
// const list = document.querySelector(".todo-list")
// list.append(sixthele)


// this is an example of a static list where tyhe list items will not chnage not matter if we add more items later on in this static list


/// more over querySelectorAll always gives us static list

/// but getElementsByClassName gives us live list always remeber that



// const ul = document.querySelector(".todo-list")
// // it will look into ul that we mentioned above
// // this zlist right here will be a live list as we can see
// const listItems = ul.getElementsByTagName("li")
// console.log(listItems)

// const sixthEle = document.createElement("li")
// sixthEle.textContent = "item 6"
// ul.append(sixthEle)

// since we used getElemet by tag name poerpty or any property that starts with get Element by Sopmehting will always give us the live list


// this is a HTML collections and they are always live



/// how to get dimmnesions of an elent in javascript ???

//
const sectionTodo = document.querySelector(".section-todo")
const info = sectionTodo.getBoundingClientRect().height()
console.log(info)




