
function stuObje(name,age,marks,subject)
{
    this.name = name
    this.age = age
    this.marks = marks
    this.subject = subject
}


const stu1 = new stuObje("Aman Dubey",26,456,["English","Maths","Physics","Chemistry","Applied Arts"])


stuObje.prototype.isPassed = function()
{
    return (this.marks/500)*100>=33.33
}

stuObje.prototype.about = function() {

    return `Hi my name is ${this.name} and I am ${this.age} years old and I got ${(this.marks/500)*100} % marks in boards and my subjects where ${this.subject}`
}

console.log()
console.log(stu1.__proto__)
console.log(stu1.about())
console.log(stu1.isPassed())

// === checks the type as well
console.log(0==="0")
console.log(0.1 + 0.2 == 0.3)
console.log(0.1 + 0.2)
console.log(true=='000000001')
if('aaa')
    {
        console.log("my name is aman dubey")
    }
else{
    console.log("My name is Nancy Drew")
}

console.log(5==='5')
console.log(true=='')

const my_array = new Array(10).fill("aman dubey is alpha")
console.log(my_array)

const new_array = [1,2,3]
new_array[5] = 12
console.log(new_array[6])
console.log(new_array.length)
console.log(new_array)
// the output is 6


const isTrue = true == []
const isFalse = true == ![]


console.log(String.raw`HelloTwitter\nworld`)




