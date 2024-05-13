

// we will discuss about sets
// syntax to create a set in javascriopt

function takeEle(...c){
    const my_set = new Set(...c)
    console.log(my_set)
    
}

takeEle([1,2,3,4,5,6,7,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10])

console.log(new Array(10).fill("Aman Dubey is a fucking legend"))


const my_set = new Set()
const array_added = ["name1","name2","name3","name4","name5","name6"]
my_set.add(1)
my_set.add(2)
my_set.add(3)
// it will add both of  these elements becuase they are diffent in memory even if they have the same contents it does not matter
my_set.add(["name1","name2"])
my_set.add(["name1", "name2"])
my_set.add(["name1","name2"])
my_set.add(array_added)
my_set.add(array_added)
console.log(my_set)

if(my_set.has(1))
    {
        console.log("1 is present in the set")
    }
else{
    console.log("1 is not present in the set")
}

for(let ele of my_set)
    {
        console.log(ele)
    }

my_set.forEach(x=>{
    console.log(x)
})

const duplicates = [1,2,2,2,3,3,3,4,4,4,5,5,5,5,5,6,6,6,7,7]
const my_set_new = new Set(duplicates)
console.log(my_set_new)



// let's see how arrya methjod workls

const my_array = new Array(12).fill("Aman Dubey is a fucking legend!!")
console.log(my_array)
my_array.fill("aman",0)
console.log(my_array)




//sets in javascript are iterable

//weshould use sets for unique values example ids and stuff

const my_set_of_elements = new Set()
const list1 = [1,2,3,4,5,6,7]
my_set_of_elements.add("Aman")
my_set_of_elements.add(list1)
my_set_of_elements.add(list1)
// these two below might look same but they are differnt objects in memory hence they will be added twioce howevber 
// list1 is still a single object in memroy so it wont be added again and again
my_set_of_elements.add(["name1","name2","name3"])
my_set_of_elements.add(["name1","name2","name3"])


console.log(my_set_of_elements)
if (my_set_of_elements.has("Aman"))
    {
        console.log("It has !!")
    }
else{
    console.log("It does not have it!!")
}



// since sets are iterable we can use the for of loop here with ease

for(let ele of my_set_of_elements)
    {
        console.log(ele)
    }

// when should we use sets?? when we have unqiue values and we know they all will be unbique no matter what!!!


const lets_say = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,5,5,5,5,6,6,6,7,7,7,7,8,8,8]
const unique_ele = new Set(lets_say)
unique_ele.forEach(x=> {
    console.log(x)
})
console.log("Hold up!!!!!!")
const answer = lets_say.find(x=> x%2==0)
console.log(answer)

const my_health_kart = [
    {id:1,name:"protien powder",price:1200},
    {id:2,name:"creatine",price:2300},
    {id:3,name:"bietaalinine",price:12000}
]


const total = my_health_kart.reduce((accum,obj)=> accum + obj.price,0)
console.log(`The total price of all the products is ${total}`)