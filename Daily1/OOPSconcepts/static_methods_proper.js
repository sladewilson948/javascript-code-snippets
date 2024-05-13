class EmployeeName{


    // what are static methods ?? Static methods are methods that do not need an object to be called can be called without creating an object they are directly realted to the class itself

    constructor(fname,lname,age,salary,yoe)
    {
        this.fname = fname
        this.lname = lname
        this.age = age
        this.salary = salary
        this.yoe = yoe
    }


    //methods

    // creating a static method

    static personInfo()
    {
        return `Bruh I am a static class and I am the biggest boss I dont need no object to get called and I can be called`
    }

    // lets discuss about static properties

    static desc = "This is a static property!!"

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


console.log(EmployeeName.personInfo())
console.log(EmployeeName.desc)