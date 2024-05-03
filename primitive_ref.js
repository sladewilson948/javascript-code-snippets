//primtive data type

let num1 = 6
let num2 = num1
console.log(`Value of num1 is ${num1} and num2 is ${num2}`)
num1++
console.log(`Value of num1 is ${num1} and num2 is ${num2}`)


// referece type

let array1 = ["item1", "item2", "item3"]
let array2 = array1
console.log("Before making any changes")
console.log(`This is array1 ${array1} and this is array2 ${array2}`)
console.log("After making changes")
array1.push("item4")
console.log()
console.log("After making any changes")
console.log(`This is array1 ${array1} and this is array2 ${array2}`)
