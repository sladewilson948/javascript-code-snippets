// let us revisit the conecpet of proto and protoype

// let us discuus the prot first

const userMethods = {

    aboutMe: function()
    {
        return `Hi my name is ${this.name} and I am ${this.age} years old`
    },

    is18: function(){
        return this.age>=18
    }
}


function createUser(name,age)
{
    const obj = Object.create(userMethods)
    obj.name = name
    obj.age = age

    return obj
}

// let's try to create an object
const obj1 = createUser("Aman Dubey",26)
// in this case proto is nothing but the refernce to the userMethods objec we just created above
console.log(obj1.__proto__)
console.log(obj1.aboutMe())
console.log(obj1.is18())



// in this case we saw how we mused an external object adn set the proto to that noew we will see how we can use the prottype object to do the same for the fuinction that we just made we will do the same thing but with function prototype



function createEmployee(empName, empAge, salary)
{
    // this line right here will not be used if we simply staret using the this keyword inside and the new keyword when creating the object
    const obj = Object.create(createEmployee.prototype)
    obj.empName = empName
    obj.empAge = empAge
    obj.salary = salary

    // we also not have to return anything from the function it will be done on its own
    return obj
}

const newEmployee = createEmployee("Aman Dubey", 26, 450000)
createEmployee.prototype.about = function(){
    return `Hi my name is ${this.empName} and I am ${this.empAge} years old`
}

createEmployee.prototype.mySalary = function() {
    return `Hi I am making around ${this.salary} per annum`
}

createEmployee.prototype.is18 = function() {

    return this.empAge>=18
}


// now if it does not find the methods in the object definiton it will find it in the prortotyp free object in function becasue that is what the __proto__ is refering to in the case this is the major difference bewteen proto and prototype proto is just a reference and prototype in a free mepty object that is provided whenever a function is created in javascript!!
console.log()
console.log(newEmployee.empName)
console.log(newEmployee.about())
console.log(newEmployee.mySalary())
console.log(newEmployee.is18())


// so this was all about the __proto__ and the prototype




// lets discuss about the new keyword!!!


function newMember(fname,age)
{
    this.fname = fname
    this.age = age
    this.sum = function(){
        console.log([1,2,3,4,5,6,7,8,9,10].reduce((a,b) => a+b))
    }
}

const mem1 = new newMember("Aman Dubey", 26)
// 1 here the new keyword is making an empty object
// 2 in this empty object we add the key value pairs
// will return it

/// now let us add new methods in the empty object space that thios function has provided us with

//so basically with the help of the new keyword we arte able to automaticaly link the protoype as the proto for the newly created object which we had to do manullay using the Object.create(method_name.protoype) the new keyword does that linking part automaticaly
newMember.prototype.about = function(){
    console.log(this.fname, this.age)
}
console.log(mem1)
console.log(mem1.__proto__)
mem1.sum()
mem1.about()

// we saw that about was not present in the

// the new keyword will by deafult refer the proto to the protoype empty object that we have for the function that we just craeted lets take an example of the same

// letys try to make object now using the new keyword let's go!!

// this is a constructpor functiuon since iot is creating an object for us!!!!
function newStudent(name,age,subjects,marks){

    this.name = name
    this.age = age
    this.subjects = subjects
    this.marks = marks
}


const stu1 = new newStudent("Aman Dubey", 26, ["English", "Maths", "Hinid", "Social Science", "Applied Arts"], [78,99,78,88,89])

newStudent.prototype.about = function()
{
    console.log(`Hi my name is ${this.name} and I am ${this.age} years old!!`)
}

newStudent.prototype.total = function()
{
    console.log(this.marks.reduce((a,b)=>a+b))
}
// this is waht I was taling the new kwyword autonmatically sets the proto which is a reference to the method protoype obejct which is what we made just now the new keyword does that automaticaly
console.log(stu1.__proto__===newStudent.prototype)
console.log(newStudent.prototype)
stu1.about()
stu1.total()

for(let key in stu1)
    {
        console.log(key)
    }


// using the hasOwnProperty will be used if we want to check if the proerpty is part of the protype or not

// now lets us 

// here basically the this keyword is making an empty object and then assiigng the key value pairs

// create empty object callewd this
// add key value pairs
// return it
// also sets the proto to the protoype the linking will be done automaticaly whichw e were doing using the Object.create(method_name.prototype) this will done autonmaticaly so when we call for a method that is not present in the object it will directly look in the prototype object of the function that we created


// we will see how the Object.crerate prototype and new keywords differ from each other




// first we will define the methods in a diffrent Object

const otherMethods = {

    about: function()
    {
        return `Hi my name is ${this.name} and I am ${this.age} years old and I must switch to a diffrent company`
    },

    is18: function()
    {
        return this.age>=18
    },

    myHobbies: function()
    {
        return `My hobbies are ${this.hobbies} and I love doing all of them in my free time.!`
    }

}


// now let us create a function that will help us make object

function createObj(name,age,hobbies)
{   
    // this line right here tells us that it should look at other methods when we dont have these methods defined in the object
    const user = Object.create(otherMethods)
    user.name = name
    user.age = age
    user.hobbies = hobbies
    user.sumVal = function()
    {
        return [1,2,3,4,5,6,7,8,9,10].reduce((a,b) => a+b)
    }

    // now we have to return the object that we created

    return user
}


// time to create an object
const objone = createObj("Aman", 26, ["coding", "swimming", "cycling", "making tons of money"])
objone.sumVal()
console.log()
console.log(objone.about())
console.log(objone.is18())
console.log(objone.myHobbies())
// as we can see we are able to access the  methods in the usermethods for this
// under the hoos whats ahppening is that __proto__ is actyally referncing to the other methods object which will be used in this case
// we can see the same when we try to do this
// here obj.__proto__ is referencong top the othermethods function that we just made
console.log(objone.__proto__)


//// now we will use a slightly diffent approch and make object and in case of using the other methods we will use the empty prototype method that is always present in all the functions that we declare



// so let's do that

function createObj2(name,age,hobbies){
    // this way we tell the javascript compiler to look for the extra methods in the empty object that is always present in each function declaration
    // this is an empty object initially
    const user = Object.create(createObj2.prototype)
    user.name = name
    user.age = age
    user.hobbies = hobbies
    user.sum = function()
    {
        return [1,2,3,4,5,6,7,8,9,10].reduce((a,b)=> a+b)
    }

    // now we will return this object

    return user
}

// now it is time to populate the empty object present inside the function we just saw

createObj2.prototype.about = function(){

    return `Hi my name is ${this.name} and I am ${this.age} years old`
}


createObj2.prototype.myHobbies = function() {

    return `My hobbies are ${this.hobbies} and I like to do them in my free time`
}

createObj2.prototype.is18 = function() {

    return this.age>=18
}


// now let us make an object

const objtwo = createObj2("Aman Dubey", 26, ["coding", "going to gym", "swimming", "making tons of money money"])
// now we will call the methods

console.log()
console.log("This is all about object two")
console.log(objtwo.__proto__)
console.log(objtwo.about())
console.log(objtwo.myHobbies())
console.log(objtwo.is18())
console.log()
console.log()



/// now we will see how we can do all this using the new keyword


function createObj3(name,age,hobbies)
{
    this.name = name
    this.age = age
    this.hobbies = hobbies
}


const objthree = new createObj3("Aman Dubey",26, ["Getting my heart broken", "coding", "learning javascript"])
console.log()
console.log("This is about object three!!")
console.log("As we can see here the __proto__ reference by default refers to the empty object called as the protoype which is present in everry function in this case it the createObj3 method")
console.log(objthree.__proto__)
console.log()

createObj3.prototype.aboutMe = function(){
    return `Hi my name is ${this.name} and I am ${this.age} years old!!`
}

createObj3.prototype.myHobby = function() {
    return `My hobbies are ${this.hobbies} and I like to do them in my free time`
}

createObj3.prototype.is18 = function() {
    return this.age>=18
}

console.log("Let us use the methods inside the prototype object that we just6 amde now")
console.log(objthree.aboutMe())
console.log(objthree.myHobby())
console.log(objthree.is18())
console.log()
console.log()
