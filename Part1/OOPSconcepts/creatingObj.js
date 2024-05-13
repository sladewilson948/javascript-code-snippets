// we can alos create objects using the Object.create method as well

const obj1 = {
    key1: "value1",
    key2: "value2"
}

const obj2 = {
    key3: "value3"
}

console.log(obj2.key3)
console.log(obj1.key1)

// but if we do
console.log(obj2.key1)
// since key1 does not exists for obj2 it will give undefined
// if we want to solve that we must use obj2 = Object.create(obj1) this will kind of junmp to obj1 if we pass a key which is not present in obj2 and it will give that value if the key is present in obj1


// example
const obj3 = Object.create(obj1)
obj3.key3 = "value3"
console.log(obj3.key1)
console.log(obj3.key3)
console.log(obj1.key1)

// we saw how obj3 jumped to object1 when it did not get key1 inside obj3

// the reason why this is happening is that when we use the Object.create(obj1) there is __proto__ variable inside the new crarted obj whiochuj stores the ref of the object that we passed inside the Object.create() brackets and it takes the missing key value from that reference

// we can see it happening when we do 
console.log(obj3.__proto__)
// this is nothing but the obj1 which we passed when we created the object

// inother words we are setting the proto of obj3 to obj1 which is what we passed when we created the obj3 thats just whjat it means.