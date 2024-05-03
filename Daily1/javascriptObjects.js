// be default keys in java script obnjects are string only

/* const person = {
    
    name: "Aman Dubey",
    age: 23,
    hobbies: ["music", "games", "gym", "eating good food"]
}

console.log(person.hobbies)

//adding key value pairs to Objects
person.sex = "Male"
console.log(person)
console.log(person.name)
console.log(person[`age`])

person["salary"] = 450000
console.log(person["hobbies"])
console.log(person)

const key = "email"
person[key] = "dubeyaman157@gmail.com"
console.log(person)


// iterating objects in java script
// for in loops and Objects.keys

for(let key in person)
{
    console.log(`${key} : ${person[key]}`)
}


console.log(Array.isArray(Object.keys(person))) */


//objects in javascript

const obj1 = {
    name: "Aman Dubey",
    age: 23,
    salary: 450000,
    city: "Varanasi",
    country: "India"
}


console.log(obj1)
obj1.gender = "Male"
console.log(obj1)
obj1.marital_status = "single"
console.log(obj1)

const key = "email"
obj1[key] = "dubeyaman157@gmail.com"
console.log(obj1)

for(let key in obj1){
    console.log(`the value of key ${key} is ${obj1[key]}`)
}

// learning computer properties

const key1 = "objkey1"
const key2 = "objkey2"

const value1 = "myvalue1"
const value2 = "myvalue2"

// this is method1
const new_obj = {
    [key1]: value1,
    [key2]: value2
}

console.log(new_obj)

// this is method 2

const new_obj_one = {}
new_obj_one[key1] = value1
new_obj_one[key2] = value2
console.log(new_obj_one)

// the spread opeartor
const my_array = [1,2,3]
const my_array_1 = [4,5,6]
const your_array = [...my_array, ...my_array_1, 89,69]
console.log(your_array)
console.log(my_array===your_array)


const my_name = "hi my name is aman dubey and I am"
const spread_list = [...my_name.replace(" ","").toLowerCase()]


const spread_array = [..."12345678"]
console.log(spread_array)
const my_new_array = ["apple", "banana", "watermellon", "carrots", "onions"]
const new_array = [...my_new_array]
console.log(new_array)


const check_keys = {
    key1: "my name is Aman Dubey",
    key2: "I am 26 years old",
    key1: "I am a fucking legend!!",
    key2: "I am updating the value of the key 2"
}

console.log(check_keys)


const objone = {
    key1: "value1",
    key2: "value2"
}

const objtwo = {
    key1: "new value which seems kinda sus",
    key3: "value3",
    key4: "value4"
}

const clone_obj = {...objone, ...objtwo, key69: "value69 for this key Noice"}
console.log(clone_obj)

// since objecttwo is spread later becuase of that it is updating the object 2 value in the key

const spread_it_for_daddy = [["name","aman"],["age","25"],["salary",45000]]
const new_obj_again = {}
for (let item of spread_it_for_daddy)
    {
        new_obj_again[item[0]] = item[1]
    }

console.log(new_obj_again)

const i_am_spreading_it = { ...["apple", "mango", "guavava", "roseberry", "naspati"]}
console.log(i_am_spreading_it)


const list1 = [..."abcdefghiklmnopqrstuvwxyz"]
const abc_obj = {}

for(let index in list1)
    {
        abc_obj[+index + 1] = list1[index]
    }


console.log(abc_obj)

const my_fav_sbazi = ["palak panner", "shahi panner", "gutte ki sabzee", "kofta", "allo gobi"]
const spread_sabzee = [...my_fav_sbazi]
console.log(spread_sabzee===my_fav_sbazi)


// cloning an object and then spreading it

const new_obj_onee = {
    name: "Aman Dubey",
    age: 23,
    salary: 9500000,
    hobbies: ["playing video games", "coding", "going to gym", "bike rides"]
}

const new_obj_two = {
    name: "Vineet Savage",
    age: 25,
    salary: 6700000
}


const new_obj_three = {...new_obj_onee, ...new_obj_two, common_hobbies:"go to treks"}

console.log(new_obj_three)



// Object destructing

const vehicle = {
    brandName: "Lamborghini",
    originCountry: "Italy",
    model: "Countach 2022",
    price: 45000000
}

let brand = vehicle.brandName
let model = vehicle.model

/// method 1
console.log(brand, model)


// time for a shortcut we can now use object destructuring

const my_obj = {
    name: "Aman Dubey",
    age: 26,
    yob: 1998,
    salary: 650000,
    country: "India",
    address: "B 32/32-40 Saket Nagar Sankat Mochan Varanasi!!"
}

// time to use destrucring
// this is actually very similar to what we had with array destructing!!

const {name, age, year, salary, country, address} = my_obj

console.log(`Hi my name is ${name} and I am from ${address} and I am making around ${salary} per annum`)

// let's take a simple example of how we can destrucure an array

const popular_female_singers = ["Dua Lipa", "Charllote Lawrence", "Bullow", "Maddison Beer", "Olivia Rodrigo", "Sabrina Carpenter", "Dixie Damelio"]



const [singer1, singer2, singer3, ...rest] = popular_female_singers
console.log(singer1)
console.log(singer2)
console.log(singer3)
console.log(rest)





console.log()
console.log()

// lets try to put objects inside of arrays

const users = [{userId:1, userName: "Aman Dubey", userAge: 26, gender: "Male"},{userId:2, userName: "Archita Dubey", userAge: 22, gender: "Female"},{userId:3, userName: "Sharda Dubey", userAge: 46, gender: "Female"},{userId:4, userName: "Mukesh Dubey", userAge: 50, gender: "Male"} ]


for (let obj of users)
    {
        let {userId:var1, userName:var2, gender:var3,} = obj
        console.log(`The user id of this user is ${var1} and name is ${var2} and gender is ${var3}`)
    }

// lets try to see nested object destrturing

const new_users = [{userId:0, userName: "Aman Dubey", userAge:26, userGender: "Male"}, {userId: 1, userName: "Niharika Sharma", userAge: 26, userGender: "Female"}, {userId: 2, userName: "Jean Johnson", age: 27, userGender: "Female"}, {userId: 3, userName:"Pushpendra Deval Singh", age: 22, userGender: "Male"}]


const [{userName:name1, userId: id1},{userName:nam2, userAge:age3},,{age:age2}] = new_users


console.log("Hi my name is",name1, " and my user id is ",id1)
console.log("Her name is",nam2," and her age is same as me that is",age3)
console.log("My best friends age is", age2)


// this is called nested object destructing





