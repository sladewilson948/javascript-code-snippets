//now let us quickly discuss abotu the getters and seters in javascript!!!!1

class Person
{
    constructor(firstname, lastname, age)
    {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }

    // I want to use fullname as a property withoput using the () in the end
    get fullname() {
        return `Hi my name is ${this.firstname} ${this.lastname}`
    }
    // this now becomes a property rather than a method
    set fullname(fullName)
    {
        const [fname,lname] = fullName.split(" ")
        this.firstname = fname
        this.lastname = lname
    }


    // this is a setetr where we are changing the first amd last name of the person
}


const person1 = new Person("Aman", "Dubey", 26)
console.log(person1)
// just pust get in front of the method and then we can use as a property
console.log(person1.fullname)
console.log(person1.age)
// here we chamnged the first and last name of the person1 object 
console.log(person1.fullname)
person1.fullname = "Rinku Tripathi"
console.log(person1)
console.log(person1.fullname)
console.log(person1.firstname)
console.log(person1.lastname)



// let's practice getters and seters one mopre time


class EmployeeName{

    constructor(fname,lname,age,salary,yoe)
    {
        this.fname = fname
        this.lname = lname
        this.age = age
        this.salary = salary
        this.yoe = yoe
    }


    //methods

    introduction()
    {
        return `Hi my name is ${this.fname} ${this.lname} I have ${this.yoe} years of experience and my salary is ${this.salary}`
    }

    isSenior()
    {
        return this.yoe>=4
    }

    get fullname()
    {
        return `${this.fname} ${this.lname}`
    }

    set fullname(name){
        const [fname,lname] = name.split(" ")
        this.fname = fname
        this.lname = lname
    }
}


/// time to make objects

const emp1 = new EmployeeName("Aman","Dubey",26,650000,3)
const emp2 = new EmployeeName("Nnacy","Drew",26,650000,9)

console.log()
console.log(emp1.fullname)
console.log(emp2.fullname)
emp1.fullname = "Pankaj Tripathi"
emp2.fullname = "Raju Srivastav"
console.log(emp1.fullname)
console.log(emp2.fullname)
console.log(emp1.introduction())
console.log(emp2.introduction())
console.log()

console.log(emp1.isSenior())
console.log(emp2.isSenior())

