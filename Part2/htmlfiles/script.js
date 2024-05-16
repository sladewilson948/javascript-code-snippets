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


const headline = document.querySelector("div.headline")
console.log(headline.innerHTML)
headline.innerHTML = "<h1>Inner HTML has been changed to this now</h1>"
headline.innerHTML += "<button>This is a button in the inner HTML</button>"
console.log(headline.innerHTML)




