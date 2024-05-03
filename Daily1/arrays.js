// arrays are reference type of varraibles
// arrays are a ordered collection of item sthe values have index in them and have to follow an order and values can be accessed using index value

// arrays are refernce types of varraibles


// all reference types are object and are hence called as 

let fruits = ["apple", "banana", "carrot", "grapes", "juices"]

console.log(fruits.length)
fruits.forEach(x => {
    console.log(x.toUpperCase())
})


console.log(fruits)
console.log(fruits[0])


let mixed_bag = [1,2,3,4,5,"datatypes", null, undefined, ["apple", "banana", "grapes"]]
console.log(mixed_bag)

let my_fav = ["apple", "banana", "mangoe", "guavava", "grapes"]
console.log(my_fav)
my_fav[0] = "cocaine"
console.log(my_fav)
console.log(typeof my_fav)

// how to if this is an array
console.log(Array.isArray(my_fav))
// this is an object literal
let my_obj = {}
console.log(Array.isArray(my_obj))

// arrays methods to use


let basket = ["apple", "banana", "grapes", "pineapple"]
console.log(basket)
basket.push("cocaine")
console.log(basket)

// string are immutable becuase they are primitive data type and arrays are refernce types
let removed_ele = basket.pop()
console.log(basket)
console.log(`The popped element is ${removed_ele}`)


/* const new_func = (val1,val2) => {
    return val1<val2 ? `${val1} is smaller than ${val2}`: `${val2} is smaller than ${val1}`
}


console.log(new_func(7,7))
 */


//what if we want to add an element in the first place of list then we can use unshift
console.log(basket)

basket.unshift("coco cola")
basket.unshift("bread")
basket.unshift("nutella")
basket.unshift("refined")
basket.unshift("musterd oil")

console.log(basket)


// the shift keyword will remove the element from the left side just like opleft in python

console.log(basket.shift())
console.log(basket)

// push and pop are faster than shift and unshift becuase it uses a lot of memory management


let crushes = ["Niharika", "Dubli girl"]
crushes.unshift("Varsha")
crushes.unshift("Rachel")
crushes.unshift("Moonika")
console.log(crushes)


crushes.pop()
crushes.pop()

console.log(crushes)
crushes.shift()
crushes.shift()
console.log(crushes)

// cloning an array
let array1 = ["item1", "item2"]
let array2 = array1.slice(0)
let array3 = [].concat(array1)
//using spread oparator
let array4 = [...array1]

console.log(array1===array4)


let original = ["adidas","nike","puma","new balance"]
let dup = original.slice(0).concat(["abibas","nuke"])
console.log(dup)

let dup1 = [...original, "tehse", "are", "some", "new elements"]
console.log(dup1)

let original2 = ["triumph", "bajaj", "hero", "ducati", "bmw"]
let dup2 = [...original, ...original2]
console.log(dup2)


/// using for loops in arrays

let my_fruits = ["apple","grapes","banana","cocaine","batman","bruh","this is crazy"]

for(let i=0;i<my_fruits.length;i++)
{
    console.log(my_fruits[i])
}

console.log(my_fruits.slice(-1))


// using const for making arrays
const fruist_again = ["apple", "mango"]
const new_list = [].concat(fruist_again)
console.log(fruist_again)
new_list.push("cocaine")
console.log(fruist_again)
console.log(new_list)


// for reference trype varraibles use const for safety
//looping the lists

//using for of loops
let fruits_loops = ["apple","banana","mango","lichi","strawberry"]
for(let fruit of fruits_loops)
{
    console.log(fruit.toUpperCase())
}
console.log()

//using for in loops
for(let index in fruits_loops)
{
    console.log(fruits_loops[index])
}


const my_cars = ["bmw", "hyundai", "lamborghini", "ferrari", "merc", "aston martin"]
const cars1 = []
const cars2 = []
// using for of
for (let car of my_cars)
{
    cars1.push(car.toUpperCase())
}

//using for in
for(let index in my_cars)
{
    cars2.push(my_cars[index])
}

console.log(cars1)
console.log(cars2)


/// array destructureing very important

// for eaxmple we have an array and we have some values in it
const this_is_array = ["drake","kendrick lamar", "rick ross","travis scott"]
let [rap1,rap2,...rest] = this_is_array
console.log(`Rappers that are beefing with each other right now ${rap1}, ${rap2}`)
console.log(rest)

// this is how arrays destrucuring works