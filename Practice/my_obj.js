// const myItems = [

//     {name: "Akasa AirTicket for Dubai", price: 45000, cat: "Airline"},
//     {name: "Ajfan Dry Fruits", price: 2000, cat: "Dry Fruits"},
//     {name: "Triumph Speed 400", price: 340000, cat: "Vehicles"},
//     {name: "Samsung Monitor 4k", price: 65000, cat: "Electonics"}
// ]


// const totalPrice = myItems.reduce((total, item)=> total + item.price,0)
// console.log(totalPrice)
// const sortItems1 = myItems.slice(0).sort((p1,p2) => p1.price - p2.price)
// const sortItems2 = myItems.slice(0).sort((p1,p2) => p2.price - p1.price)
// console.log(sortItems1)
// console.log(sortItems2)




// lets discyuss about objects and there prototypes


function createUser(fname,lname,age)
{
    const obj1 = Object.create()
    obj1.fname = fname
    obj1.lname = lname
    obj1.age = age

    return obj1

    
}

createUser.prototype = {

    getName: function(){

        console.log(`Hi my name is ${this.fname} ${this.lname} and I am from Varanasi!!`)
    },

    is18: function()
    {

        return this.age>18
    }
}


const myObj  = createUser("Aman", "Dubey", 26)
console.log(myObj.__proto__)

