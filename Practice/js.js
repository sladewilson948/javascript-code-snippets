// we will take a look at the use of oteyhr methods prototype and proto and hwo we can make objkect suinsg the new keyword

const otherMethods = {

    
    is18: function(){

        return this.gae>=18
    },

    isSenior: function()
    {

        return this.salary>180000? "Is Senior Developer": "Not a senior developer"
    }




}




function createObject(fname,lname,age,salary,techstack)
{

    const obj = Object.create(otherMethods)
    obj.fname = fname
    obj.lname = lname
    obj.age = age
    obj.salary = salary
    obj.techstack = techstack


    return obj
}


const myObj = createObject("Aman","Dubey",26,650000,["JavaScript","React","Nodejs","Java"])

console.log(myObj.fname)
console.log(myObj.isSenior())
console.log(myObj.is18())
console.log(myObj.__proto__)
console.log(myObj.techstack)


///now we will store these extra methods inside the prototype free object space that we are provided with lets goo

function createStudent(name,age,marks,subjects)
{
    const stuObj = Object.create(createStudent.prototype)
    stuObj.name = name
    stuObj.age = age
    stuObj.marks = marks
    stuObj.subjects = subjects

    return stuObj

}

createStudent.prototype = {

    isPassed: function()
    {
        return [((this.marks.reduce((a,b)=>a+b))/500)*100>=33.33,((this.marks.reduce((a,b)=>a+b))/500)*100]
     
    },

    totalMarks: function()
    {
        return this.marks.reduce((a,b) => a+b)
    },

    is18: function()
    {

        this.age>=18
    }

}


const stu1 = createStudent("Nancy Drew",26,[98,98,90,98,98],["Hindi","English","Maths","CompSci","History"])
console.log(stu1.__proto__ === createStudent.prototype)
console.log(stu1.name)
console.log(stu1.isPassed())
console.log(stu1.marks)



//// now we will see how we can use the 


function bikeObject(name,cc,price,rating,country,launchYear)
{
    this.name = name
    this.cc = cc
    this.price = price
    this.rating = rating
    this.country = country
    this.launchYear = launchYear

}

bikeObject.prototype = {

    provideSummary: function()
    {
        return `The name of the bike is ${this.name} and the bike is of ${this.cc} engine and is priced at around ${this.price} and was launched in the year ${this.year}`
    },

    provideCC: function()
    {
        return this.cc
    }
}


const bike1 = new bikeObject("Bajaj Pulsar",200,12000,4.5,"Inida",2014)

console.log(bike1.provideSummary())
console.log(bike1.provideCC())


