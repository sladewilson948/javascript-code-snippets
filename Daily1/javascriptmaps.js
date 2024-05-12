// we will disucss about javascirept maps object


const person = {
    name:"Aman Dubey",
    age:24,
    1:"he is the one"
}

for (let key in person)
    {
        console.log(typeof key,key,person[key])
    }


// the best thing in javascript maps that differentitate it with others is that javascirp maps can have anythingas there keys it cvan be never as well this was not possible in javascript objects!!

const person_map = new Map()
person_map.set("name","AMAN DUBEY")
person_map.set("age",24)
person_map.set(1,"he the one")
person_map.set([1,2,3,4,5,], "bruh we added a list as the keys")
person_map.set({1:"one"},"I cant belive this!!")
console.log(person_map)
console.log(person_map.get(1))
console.log(person_map.keys())

for(let keys of person_map.keys())
    {
        console.log(keys, typeof keys, person_map.get(keys))
    }

// maps ietrator lets see
for(let [key,value] of person_map)
    {
        console.log(typeof key)
        console.log(`bruh we did it dawgh ${key} : ${value}`)
        console.log(Array.isArray(key))
    }

var date = new Date('October 14, 2023 14:26:45');

const someone_i_met_that_broke_my_heart = new Map()
someone_i_met_that_broke_my_heart.set(1,"She still is number 1 even tho she crushed my heart to pieces.")
someone_i_met_that_broke_my_heart.set("name","Cannot disclose it I am sorry")
someone_i_met_that_broke_my_heart.set("total_meeting_time_in_hours",1.25)
someone_i_met_that_broke_my_heart.set("rating_out_of_ten",10)
someone_i_met_that_broke_my_heart.set("last_seen_at",new Date('October 13, 2023 14:26:45'))

console.log(someone_i_met_that_broke_my_heart)

for(let [key,value] of someone_i_met_that_broke_my_heart)
    {
        console.log(`She gonna make me loose my mind`)
        console.log(`${key} ${value}`)
    }

// this is actually a very good use case of how we can actually use maps to make sure that we add some extra values in the object
//lets say we have an object name person1 and we have some info about them

const person1 = {
    name:"AMAN DUBEY",
    occupation:"developer"
}

const person2 = {
    name:"Nancy Drew",
    occupation: "gaslighting"
}

// now lets say I want to store some extra information about this obect then we can simply map this object to the extra information that we want to set for this obect
//first step is to crerate a map


// this is actually very clever
const extraInfo = new Map()
extraInfo.set(person1,{age:26, city:"Varanasi", salary:650000, country: "India"})
extraInfo.set(person2,{age:26, city:"Paradise on Earth", salary:12000000000, country:"India"})
console.log(extraInfo)
console.log(extraInfo.get(person1))
console.log(extraInfo.get(person1).age)
console.log(extraInfo.get(person1).city)
console.log(extraInfo.get(person1).salary)

console.log()
console.log()

console.log(extraInfo)
console.log(extraInfo.get(person2))
console.log(extraInfo.get(person2).age)
console.log(extraInfo.get(person2).city)
console.log(extraInfo.get(person2).salary)
console.log(extraInfo.get(person2).country)





// let;s practice a little more about maps in javbascript

const my_maps = new Map()
const person_one = {
    name: "Nancy Drew",
    age:26,
    hobbies:["playing","singing","dancing","tabla"]
}

const person_two = {
    name: "Avanti Grath",
    age: 22,
    hobbies:["dancing","modelling","acting"]
}


my_maps.set(person_one,{yob:1998, fav_food:"white sauce pasta"})
my_maps.set(person_two,{yob:2002, fav_food:"chocloate de laboufe"})

console.log(my_maps)
console.log(my_maps.get(person_one))
console.log(my_maps.get(person_two))
console.log(my_maps.get(person_one).fav_food)
console.log(my_maps.get(person_two).fav_food)


const product_gallery = [
    {p1:"Chair",price:1200,cate:"furniture"},
    {p2:"Table",price:1000,cate:"furniture"},
    {p3:"Fan",price:300,cate:"electronics"},
    {p4:"Golf Club",price:9200,cate:"sports"},
    {p5:"TT Raquet",price:200,cate:"sports"}
]


console.log(product_gallery.sort((a,b) => a.price - b.price))
console.log(product_gallery.sort((a,b) => b.price - a.price))
const total = product_gallery.reduce((accum,obj) => accum + obj.price,0)
console.log(total)


const heart_map = new Map()


const obj1 = {
    fav_bike:"triumph speed 400",
    engine: 400,
    price: 250000,
    topspeed: 230
}

heart_map.set(obj1, {cons:"you may experience some vibrations at higher revs", rarting:5})

console.log(heart_map)
console.log(heart_map.get(obj1).cons)


// let su create an object that are the lists of objects that we buy froma store we havbe to do three tghings firtsly is to find the total sum then sort it using sort metho-d then also use the find method



const my_products = [
    {id:1, product_name: "Protiene chocolate heazelnut", price: 2300, quanity:3},
    {id:2, product_name: "Creatine preAMP", price: 1200, quanity: 1},
    {id:3, product_name: "Pre Workout", price: 3400, quanity: 2},
    {id:4, product_name: "Resistance Band", price: 2900, quanity: 2}
]

const total_amout_is = my_products.reduce((accum, obj) => accum + obj.price, 0)
console.log(total_amout_is)
// console.log("ascending order")
// console.log(my_products.sort((a,b) => a.price - b.price))
// console.log("descending order")
// console.log(my_products.sort((a,b) => b.price - a.price))


// now let us see how we can use the find method inb javascript

const what_i_need = my_products.find(a=> a.price==1200)
console.log(what_i_need)
console.log(what_i_need.product_name)

// lets destructyur the array
console.log()
console.log()
console.log()
const [ob1,ob2,...ob3] = my_products
console.log(ob1)
console.log(ob2)
console.log(ob3)

// this how we deestructue a list
// now let us destruc and object

const my_personal_obj = {
    name1: "Aman Dubey",
    age: 26,
    hobbies:["going to gym", "swimming", "eating good food", "travelling"]
}


const {name1,...rest} = my_personal_obj
console.log(name1)
console.log(rest)

// there is also something called as nested object destructure where we have objects inside of lists

const lists_of_people = [
    {id:1, name: "Aman Dubey", age: 26, sex: "Male"}
]

console.log(lists_of_people)

const my_new_obj1 = {..."abdefghighjklshdjkfh"}
list1 = [["apple","bee"],["bnummble","bee"]]
const apple_obj = {}
for (let item of list1)
    {
        apple_obj[item[0]] = item[1]
    }
console.log(apple_obj)


// lets us again see how we can destruictyure an obnchjt we have to make sure the keys are the smae

const new_object = {
    id:1,
    name: "Aman Dubey",
    age: 26,
    city: "Varanasi",
    country: "India",
    salary: 23000000
}

const {id:value1, name:value2, age:value3, ...rest1} = new_object
console.log(value1)
console.log(value2)
console.log(value3)
console.log(rest1)


// lets tryu to make an object using the spread oeprator

const my_obj = {...["this","is","the","prime","example","of","how","we","can"]}
console.log(my_obj)

const string1 = "I want this string to be converted to a list"
const my_new_lists = string1.split(" ").map(x=> x.toUpperCase())
const new_obj_again = {}
for(let idx in my_new_lists){
    new_obj_again[idx] = my_new_lists[idx]
}

console.log(new_obj_again)


// this was indeed a quick revision of how we can do object destructrting and stuff now let's see how we can use maps in javascript




const product_map = new Map()
const furniture = {
    cat_id:69,
    range: "2300 to 4600",
    success_rate: 3,
    profit_margin: 30,
    performance: 65
}
const electronics = {
    cat_id:21,
    range: "1300 to 10600",
    success_rate: 4,
    profit_margin: 60,
    performance: 95
}

const sports = {
    cat_id:21,
    range: "1300 to 3600",
    success_rate: 4,
    profit_margin: 40,
    performance: 75
}

product_map.set("Bat",sports)
product_map.set("Chair",furniture)
product_map.set("Trimmer",electronics)
product_map.set("TV",electronics)
product_map.set("Leather Balls",sports)


console.log(product_map)
console.log(product_map.get("Bat").cat_id)
console.log(product_map.get("Bat").profit_margin)