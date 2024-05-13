/// now we will study about the most important topic for javascripty which is nothing but the OOPS concept in javascript


const user = {

    fname: "Aman",
    lname: "Dubey",
    email: "dubeyaman157@gmail.com",
    age: 23,
    address: "House number conolu pincode state",
    about: function(){
        console.log(`Hi my name is ${this.fname} ${this.lname} and I am ${this.age}  years old`)
    },
    is18: function()
    {
        return this.age>=18
    }
}


const user_info = user.about()
user_info


// // lets say we want to make crores of users like this in that case we must crerate a function that generates an object and  returns it to us

// //1 Create an object
// //2 Add key value pairs in it\

const usersMethod = {
    about : function() {
        return `Hi my name is ${this.fname} and I am ${this.age} years old!!`
    },
    is18 : function(){
        return this.age>=18
    }
}



// // this function here will create an object for us 
function createUser(fname, lname, age, email, address){
    const user = {}
    user.fname = fname
    user.age = age
    user.lname = lname
    user.address = address
    user.email = email
    // we are just storing the reference of the methods that we already created at line 30
    user.about = usersMethod.about
    user.is18 = usersMethod.is18
    


    return user
}

// /// creating an object
const user1 = createUser("Aman","Dubey",26,"dubeyaman158@gmail.com","My address")
console.log(user1)
console.log(user1.is18())
const about = user1.about()
console.log(about)


// if we make a lot of methodws for many objects even if theya re the same we will be wast8inga lot of memory
/// let's say I have an employee management application and I want to make an emplotyee objecty how can we do this using javascript

const employeeMethods = {
    isSenior : function()
    {
        return this.yoe>=4
    },

    about: function()
    {
        return `Hi my name is ${this.fname} and I am ${this.age} years old!!`
    }
}


function employeeObject(fname,lname,age,salary,yoe,techstack)
{
    const employee = {}
    employee.fname = fname
    employee.lname = lname
    employee.age = age
    employee.salary = salary
    employee.yoe = yoe

    // all this extra work will not be required if we use the Object.create() method and see it then.
    employee.techstack = techstack
    employee.isSenior = employeeMethods.isSenior
    employee.about = employeeMethods.about

    return employee
}


const emp1 = employeeObject("Aman", "Dubey", 26, 90000, 3,["JavaScript", "React", "Redux", "NextJs"])
// lets try some methods on this object

console.log()
emp1.about()
console.log()



// in all these examples we saw that we wrere passing the refrence everytime we where creating the object and hence we can see that it becomes a tedious task if we make three more methods in user methods then we will have to pass those tyhree mthods in the user object as well for the refernce what if there was a way to do all this on its own this is hwere we will use the __proto__ in javascript. For this we just need to create the user obecty using object.create(methodObjects) this way it will have all the usermethjods on its own and it will go and see from the methodObject and we will not have to make any changes required.



// lets see this in action

const userMethods = {
    introduction: function()
    {
        return `Hi my name is ${this.name} I am ${this.age} years old.`
    },

    is18: function()
    {
        return this.age>=18
    }

}


function createuser(name,age,city){

    // this is where we are setting the proto for all the objects that will created now
    const obj1 = Object.create(userMethods)
    obj1.name = name
    obj1.age = age
    obj1.city = city

    return obj1
}


const userone = createuser("Aman Dubye",26,"Varanasi")
console.log(userone.__proto__)
console.log(userone)
console.log(userone.introduction())
// we can clrearly see that userone does not have any kind of methods like is18 and introudction howevever we have set those metjods as proto for this object and we can make use of those methods and call them even tho they are not directly present in the object definition


// this way we can simply add more function in one place i.e. in the userMethods Object and thos methods will be passed as reference via __proto__ to all the objects that will be created after that.
