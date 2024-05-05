/// for each
// map
// filter
// reduce


const my_numbers = [1,2,3,4,5,6,7,8,10]


function myFunc(number,index){

    console.log(`The index of the number ${number} is ${index}`)
    console.log(`What we want to do here is ${number} * 2 = ${number *2}`)
}

// for each take a call back and passes both number and the index in the function 
my_numbers.forEach(myFunc)

// we can use anonymous functions as well if want to

my_numbers.forEach(function(number,index){
    my_numbers[index] = 2*number
})

console.log(my_numbers)


// mode real example of foreach
//lets say we have a array of objects that have all sorts of details in them



// what if we want to print the name and salary of each object in the list
// method 1 could be to just use object destructring

// const [{firstname:var1, age:var2}, {firstname:var3,age:var4}] = users

// console.log(`The name of the user is ${var1} and age is ${var2}`)
// console.log(`The name of the user is ${var3} and age is ${var4}`)

// this is how we do nested destructring

// we can also do normal destructing for our objects
// this is how object destructring works
const user_details = {
    fname:"Aman Dubey",
    age: 26,
    city: "Varanasi",
    address: "B 32/32",
    email: "xyz@email.com"
}


const {fname,city,...rest} = user_details
console.log(fname)
console.log(city)
console.log(rest)

// this is how array destruturing works

const popular_hip_hop_artitsts = ["drake", "kendrick lamar", "lil baby", "2 pac", "21 savage"]
const [rap1,rap2,...rest_of_them] = popular_hip_hop_artitsts
console.log(rap1)
console.log(rap2)
console.log(rest_of_them)


// lets say we want to make use of spread opeartor top add all the numbers


function addAll(...c)
{
    let sum_val = 0
    for(let ele of c)
        {
            sum_val+=ele
        }
    console.log(`The sum of all these values ${c} is ${sum_val}`)
}

addAll(1,2,3,4,5,6,7,8,9,10)


const users = [
    {firstname: "Aman Dubey", age: 26, salary:650000, hobbies:["gaming, coding, gym, eating good food"]},
    {firstname: "Archita Dubey", age: 22, salary:650000, hobbies:["sleeping, making good food, buying makeup products, shopping"]},
    {firstname: "Sharda Dubey", age: 49, salary:650000, hobbies:["cooking, watching TV, exercising"]},
    {firstname: "Mukesh Dubey", age: 50, salary:"1 crore", hobbies:["making money"]},

]

users.forEach(function(user) {
    console.log(user.firstname)
    console.log(user.age)
})


// lets use the arrow function inside the foreach loop lets do that
users.forEach((user, index)=> {
    console.log(user.firstname, index)
    console.log(user.hobbies, index)
})



const list1 = [1,2,3,4,5,6,7,8,9,0]
list1.forEach(x=> {
    if(x%2==0)
        {
            console.log(x)
        }
})


// map methods in javascript

const my_nums = [1,2,3,4,5,6,7,8,9,10]

//call back function
// this was function decleration 
const squarer = function(number)
{
    return number * number
}
// map function always makesd a new array

const new_array = my_nums.map(squarer)
console.log(new_array)

// lets do the same thing using arrow functions this time
const new_array_again = my_nums.map((x) => x*x)
console.log(new_array_again)


// lets say we have a bunch of names in a list and we want to capitalize all of them to upper case this can be done using mapo method
const bunch_of_names  = ["Aman Dubey", "Adam Warlock", "Rachel mc Adams", "Chris Evans", "Mukesh Dubey", "Nancy Drew"]
const new_names_upper = bunch_of_names.map(x=> x.toUpperCase())
console.log(new_names_upper)

// we can also use map methods to extract certain information of the user
//lets say I have an object about susers names slary and hobbies and I want three diffrent lists having all these value seperatly that can be done via masps

const userDetails = [
    {firstname: "Aman Dubey", age: 26, salary:650000, hobbies:["coding", "watching movies", "video games", "good food"]},
    {firstname: "Archita Dubey", age: 22, salary: 1200000, hobbies:["sleeping", "having good food", "cooking cause she a chef duh!!"]},
    {firstname: "Babu Rao", age: 50, salary: 150, hobbies:["getting scammed", "drinking alcohol", "dariya dili", "khopadi todna"]}

]


const user_names = userDetails.map((user)=>user.firstname)
const user_salary = userDetails.map((user) => user.salary)
const user_hobbies = userDetails.map((user)=> user.hobbies)


console.log(user_names)
console.log(user_salary)
console.log(user_hobbies)


// the filter methods in javascript
// filters call back function should always return a boolean value

const number = [1,2,3,4,5,6,7,8,9,0]
function isEven(x)
{
    return x%2===0
}

function isOdd(x)
{
    return x%2!==0
}
const evens = number.filter(isEven)
const ods = number.filter(isOdd)
console.log(evens)
console.log(ods)

const using_arrow_even = number.filter((x)=>x%2!==0)
const using_arrow_odd = number.filter((x)=> x%2===0)
console.log(using_arrow_odd)
console.log(using_arrow_even)


// lets say we have a list of names and we want to filter all the names that start with A in that case we can write a filter fucntion

const filter_names = ["Aman Dubey", "Archita Dubey", "Sharda Dubey", "Mukesh Dubey", "Rachel Mc Adams", "Adam Warlock", "Drake", "Anathaony Davis"]
const a_name = filter_names.filter(x=> x[0]==="A")
console.log(a_name)


// or lets day we have a bunch of javascript objects and we want to filter all the object that have the slaary greater than 10000

const employee_details = [
    {fname:"Aman Dubey", salary: 45000, age: 26},
    {fname:"Archiat Dubey", salary: 50000, age: 22},
    {fname: "Nancy Drew", salary: 1000, age: 19}
]

const filter_objects = employee_details.filter(user=>user.salary>10000)
console.log(filter_objects)







