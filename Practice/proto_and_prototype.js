

const otherMethods = {

    about: function()
    {
        return `Hi my name is ${this.name} and I am ${this.age} years old!!`
    },

    mySalary: function()
    {

        return `Hi my name is ${this.name} and I am making around ${this.salary} per annum`
    },

    is18: function()
    {
        return this.age>=18
    }
}



function userObject(name,age,yoe,salary)
{
    const user = Object.create(otherMethods)
    user.name = name
    user.age = age
    user.yoe = yoe
    user.salary = salary
    user.sumVal = function()
    {
        return [1,2,3,4,5,6,7,8,9,10].reduce((a,b)=> a+b)
    }

    return user

}

const myObj1 = userObject("Aman Dubey", 26, 3, 650000)
console.log(myObj1.name)
console.log(myObj1.about())
console.log(myObj1.mySalary())
console.log(myObj1.is18())
console.log(myObj1.sumVal())
console.log(myObj1.__proto__)


/// this is method 1 where we made the other methjods obhject
//// now we will be using the prototype enmpty object that is presnt in all the functions when it is created for the definiont of these extra methods


function employeeObject(name,age,yoe,salary,techstack)
{
    const obj = Object.create(employeeObject.prototype)
    obj.name = name
    obj.age = age
    obj.yoe = yoe
    obj.salry = salary
    obj.techstack = techstack

    return obj
}


const emp1 = employeeObject("Aman Dubey",26,3,650000,["javascript","python","react","sql","nodejs"])
// now it is time to add the extra methods in the empty object inside the function

employeeObject.prototype.about = function(){

    return `Hi my name is ${this.name} and I am ${this.age} years old!!`
}

employeeObject.prototype.myTechstack = function(){

    return `Hi I am a full stack developer and this is my techstack ${this.techstack}`
}

employeeObject.prototype.is18 = function(){

    return this.age>=18
}


// time to test out these functions
console.log(emp1.about())
console.log(emp1.myTechstack())
console.log(emp1.is18())


/// now we will see how we can make the use of the new keyword to make objects



function movieObject(name,release_date,grossIncome,rating)
{
    
    this.name = name
    this.release_date = release_date
    this.grossIncome = grossIncome
    this.rating = rating
}


const movieObj = new movieObject("Avesham","04/11/24",540000,5)
console.log("By using the new keyword we by default are making the prot refere to the empty object called as the prototype present in all the functions in javascript")
console.log(movieObj.__proto__)
console.log("Now we will try to make use of the empty prototype object")
movieObject.prototype.about = function()
{
    return `the name of the movie is ${this.name} and it was released in ${this.release_date} and made around ${this.grossIncome} money during it's run`
}
console.log(movieObj.about())



/// lets practice a little more here again


const mymethods = {

    isExpensive: function(){
        
        return this.price > 1800000
    },

    getDetails: function()
    {

       return `Hi the name of the car is ${this.name} and it has and engine of ${this.cc} cc and is in the segments of ${this.segment}` 
    }
}



function createCarObject(name,yoe,cc,price,segment)
{

    const myCar = Object.create(mymethods)

    myCar.name = name
    myCar.yoe = yoe
    myCar.cc = cc
    myCar.price = price
    myCar.segment = segment
    myCar.myfunction = function()
    {
        return [1,2,3,4,5,6,7,8,9,10].reduce((a,b)=> a+b)
    }

    return myCar

}

const myCar = createCarObject("BMW X5",2024,45000,4500000,"suv")

console.log(myCar.getDetails())
console.log(myCar.myfunction())
console.log(myCar.isExpensive())



