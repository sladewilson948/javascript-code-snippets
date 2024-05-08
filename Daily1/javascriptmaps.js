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