/// for each
// map
// filter
// reduce
// sort methods in javascript


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


// lets see the reduce method

const my_new_numbers = [1,2,3,4,5,6,7,8,9,10]
console.log(my_new_numbers.reduce((a,b) => a+b))


// using map and reduce together to get the best of the best example a shopping kart on flipkart

// inthis case we mapeed the objects based on the price made a new list and then added them all using reduce method to get the final total

const products = [
    {product:"Apple TV", price:12000, category: "Electronics"},
    {product: "MacBook 16 M3", price: 23000, category: "Electronics"},
    {product: "Razer Mouse", price: 2000, category: "Electronics"},
    {product: "Tesla Model S Plaid", price: 69420, category: "Vehicles"}
]


// this seems pretty long we can reduce it literraly

const final_price = products.map(prod=> prod.price).reduce((a,b) => a+b)
console.log(`The final price is ${final_price} dollars`)

// here prod is a javascript object that we are using as each item and we take the price value from that object

const final_final_price = products.reduce((totalPrice,prod) => totalPrice + prod.price,0)

console.log(final_final_price)

//let's take one more example of how we can use reduce to find the salary of all th employees of a company

const dadhiyaMajdoor = [
    {employee_name: "Aman Dubey", YOE: 3, techStack:["react", "javascript", "nodejs", "nextjs"], salary:650000},
    {employee_name: "Nancy Drew", YOE: 4, techStack:["react", "javascript","typescript","redux"], salary: 1200000},
    {employee_name: "Dacid Putra", YOE: 2, techStack: ["code java", "spring boot"], salary: 450000}
]

// in this code snippet the accumalator is the totalSal varriable which has been set to zero initialy and the current value starts from the 650000 value and the values keep getting added

const sum_of_all_salary = dadhiyaMajdoor.reduce((totalSal,obj)=> totalSal + obj.salary, 0)
console.log(sum_of_all_salary)


/// lets discuss about the sort method in javascript
// the sort method in javascript sortt it in ascending order but acording to the string not the integr even if we add int to the list

const my_values = [1,5,3,67,4,9]
my_values.sort((a,b)=>a-b)
console.log(my_values)

// for sorting in descending order we can do
my_values.sort((a,b)=>b-a)
console.log(my_values)



//now let's try to take a practical example where in we have a list of products and we must solve them based on the price
// both in acesnding and descending order

const amazonProd = [
    {productName: "Tesla model Y", year: 1998, price: 69420},
    {productName: "Apple Iphone 15 pro", year: 2023, price: 500},
    {productName: "Solar Pannel", year:2020, price: 1000},
    {productName: "Dyson AirWrap", year: 2024, price: 570}
]

// here we are sorting it in ascending order
// here we sorted them from lo to hi
amazonProd.sort((p1,p2)=> p1.price - p2.price)
console.log(amazonProd)

// here we are sortuing in desceding order
// here we sorted them in hi to lo
amazonProd.sort((p1,p2) => p2.price - p1.price)
console.log(amazonProd)

//let's say I want to find the total price of all the products in that case wecan use reduce

const totalPrice = amazonProd.reduce((x,y) => x + y.price,0)
console.log(totalPrice)


/// let's make a product list of all the items in it and then we will sort them from hi to lo and lo to hi and find the sum of all the values in the cart


const my_amazon_cart = [
    {productName: "Apple watch", price: 1200, year: 2024},
    {productName: "Apple TV ", price: 900, year: 2023},
    {productName: "Smasung S24", price: 500, year: 2024},
    {productName: "iPhone 15 pro max", price: 1100, year: 2024}
]

// first we need to sort it in ascendiong order
console.log(my_amazon_cart.slice(0).sort((p1,p2) => p1.price - p2.price))
console.log(my_amazon_cart.slice(0).sort((p1,p2) => p2.price - p1.price))
//fidning the sum of all the values in the cars using reduce
console.log(`Sum of all the items in the cart is ${my_amazon_cart.reduce((total,p) => total + p.price,0)} USD`)

/// find methods in arrays


/// creating a shopping list object

const health_cart = [
    {productName: "Creatine monohydrate", price: 2300, category: "Creatine"},
    {productName: "Protien Powder", price: 1200, category: "Protien"},
    {productName: "Oats", price: 120, category: "Oats"},
    {productName: "Some thing", price: 750, category: "Forbiddne"}
]


// first is to make sure that we get the sum of all the price of the products in the cart
const totalCost = health_cart.reduce((acum,obj) => acum+obj.price,0)
console.log(`Your total cost comes up top be ${totalCost}`)

// noww lets sort this objewct based on the price using the sort method
const sorted_ascending_order = health_cart.slice(0).sort((obj1,obj2)=> obj1.price - obj2.price)
console.log(sorted_ascending_order)
const sorted_descending_order = health_cart.slice(0).sort((obj1,obj2)=> obj2.val - obj1.val)
console.log(sorted_descending_order)



/// now letr us discuss about the find method in javascript

const bunch_of_animals = ["cat","dogs","antman","rachel","horse","man","can","pan","see","saw","cat","tat","pin","nip"]

function isLength3(string)
{
    return  string.length==3
}

bunch_of_animals.forEach((ele,index)=>{
    if(isLength3(ele)){
        console.log(`The length of the ${ele} is 3`)
    }
    else{
        console.log(`The length of ${ele} is not three`)
    }
})


// we will use find to check if we are able to get the length of an element in an array is three or not.
const my_animals_here = ["cats","dog","bat","mouse"]

function isLength3(string)
{

    return string.length===3
}

const res = my_animals_here.find(isLength3)
console.log(res)

// using this directly as a arrow function


const my_animal = my_animals_here.find((x)=> {
    return x.length==3
})


/// let's say we have a bunch of objects in an array and we need to find the object that has the name as Aman Dubey and return that object later now how can we do this using the help of find method in javascript

const cognizant_employee_details = [
    {employee_name:"Rachel Mc Adama", techstack:["Java", "Core Java","Spring Boot MVC"], salary: 650000},
    {employee_name:"Bruce Wayne", techstack:["React", "TypeScript", "Angular", "Redux"], salary: 800000},
    {employee_name:"Aman Dubey", techstack:["Nodejs","JavaScript","React","Redux","Python"], salary:670000}
]

const req_employee = cognizant_employee_details.find(x=>{
    return x.employee_name=="Aman Dubey"
})

console.log(req_employee)
console.log(req_employee.employee_name)
console.log(req_employee.techstack)
console.log(req_employee.salary)


// always remember that the find method will always return the fisrt element thaty satisfy the required condition


// let's say that we have a lists objects which are user information and we need to find the uder that has id of 3
// we can do this with .find() method and arrow functions

const users_with_id = [
    {userId:1, user_name: "Aman Dubey", age:26},
    {userId:2, user_name: "Archita Dubey", age:22},
    {userId:3, user_name: "Mukesh Dubey", age:40},
    {userId:4, user_name: "Sharda Dubey", age:38},
    {userId:5, user_name: "Nancy Drew", age:40}
]

const required_user = users_with_id.find(x=>{
    return x.userId==3
})

console.log(required_user)



const my_animals = ["cat","bat","dog","rtachel","mania","bruh","rad"]


my_animals.forEach(x=>{
    if(x.length==3)
        {
            console.log("The legnth is three")
        }
    else{
        console.log("The length of this animal is not three")
    }
})


// the find function in javascript will return the first element that will satisy the given condition
const animals = ["that","bat","cat","dog"]
const req_animal = animals.find(x=>{
    return x.length==3
})

console.log(req_animal)

// let's try to use filter method a little buit

const cognizant_employees = [
    {employeeName: "Aman Dubey", age:26, salary:650000, hobbies:["coding", "eating good food"]},
    {employeeName: "Archita Dubey", age:22, salary:50000, hobbies:["cokking", "eating good food"]},
    {employeeName: "Aman Dubey", age:20, salary:650000, hobbies:["coding", "eating good food"]},
    {employeeName: "Aman Dubey", age:21, salary:650000, hobbies:["coding", "eating good food"]},
    {employeeName: "Aman Dubey", age:24, salary:650000, hobbies:["coding", "eating good food"]},
]


const req_obj = cognizant_employees.find(x=> x.age>23)
console.log(req_obj)


const new_list = cognizant_employees.filter(x=>x.age>22)
console.log(new_list)
console.log(new_list===cognizant_employees)

// lets see about the array method called as sort

const some_numbers = [1,67,44,23,89,44,23]
const some_number_ascending = some_numbers.slice(0).sort((a,b) => a-b)
console.log(some_number_ascending)
const some_numbers_descending = some_numbers.slice(0).sort((a,b) => b-a)
console.log(some_numbers_descending)


const amazon_products_list = [
    {productName: "Apple TV plus", category: "Electronics", price: 2300},
    {productName: "One plus 12R", category: "Electronics", price: 200},
    {productName: "Samsung galaxy S24", category: "Electronics", price: 3400},
    {productName: "Apple Iphone 15 128 gb", category: "Electronics", price: 900},
    {productName: "Apple Airpiods", category: "Electronics", price: 300},
]


const sorted_objects = amazon_products_list.slice(0).sort((obj1,obj2) => obj1.price - obj2.price)
console.log(sorted_objects)

// lets see how we can find the total of all these object prices
const total_price = sorted_objects.reduce((accum,x)=> accum + x.price,0)
console.log(total_price)

const my_students = [
    {studentid:1, studentname: "Aman Dubey", age:26, highestscore: 499, city: "Varanasi"},
    {studentid:2, studentname: "Archita Dubey", age:22, highestscore: 399, city: "Varanasi"},
    {studentid:3, studentname: "Dewal Pushpendra", age:23, highestscore: 299, city: "Varanasi"},
    {studentid:4, studentname: "Nancy Drew", age:21, highestscore: 344, city: "Varanasi"},
    {studentid:5, studentname: "Rachel Mc Adams", age:24, highestscore: 344, city: "Varanasi"},
    {studentid:6, studentname: "Ryan Gosling", age:28, highestscore: 223, city: "Varanasi"},

]

const final_student = my_students.find(x=> x.age==23 && x.city=="Varanasi" && x.highestscore==299)
console.log(final_student)



// every method in javascript
// it returns boolean value depending if all the elements in the array follow a specific consdition or not.

const nums = [2,4,6,3,1,6,10,4,33,4,2]
const ans = nums.every(x=> x%2===0)
console.log(ans)

// let's say we have alist of products where we have a list of products and we need to check if all the products have the price under 3k

const user_products = [
    {productName:"TV", price:12000},
    {productName:"TV", price:14000},
    {productName:"TV", price:11000},
    {productName:"TV", price:16000},
    {productName:"TV", price:16000},
    {productName:"TV", price:18000},


]

const isless = user_products.every(x=>x.price<20000)
if (isless)
    {
        console.log("All producsts are within our budgest")
    }
else{
    console.log("Products are not in our budget")
}


// then we have the some condtion which says that even if there one element in the list that satiosfy the condition we need to return true in other words some is actually the reverse of every

const sus_numbers = [2,4,6,7,8,10]
const sus_ans = sus_numbers.some(x=>x%2!=0)
console.log(sus_ans)


// how to use fill to make new arrays
const myArray = new Array(10).fill(-1)
const myNewArray = new Array(20).fill(-2)// this will create an array of size 10 all having -1 as element

const bruh_moment = new Array(20).fill("Kurchini Marta Pete")
console.log(bruh_moment)


const cts_array = [1,2,3,4,5,6,7,8,9,10]
cts_array.fill(0)
console.log(cts_array)

const meme_array = new Array(20).fill("bagunara")
console.log(meme_array)


// the splice method
const splice_array = ["ietm1","item2","item3","item4","item5","item6","item7"]

// what are array liek objest
// iterables like strings and lists are iterables where we can sue for loops are called iterables
// iterables where we can apply for if loops

// objects are not iterablle
// array liek objest - have length like property and access via index






