///// let us just quickly take a look how the other methods works


/// this was method one
const other_methods = {

    is18: function()
    {
        return this.age>18
    },
    sumValue: ()=> {
        return [1,2,3,4,5,6,7,8,9,10].reduce((a,b)=> a+b)
    },
    getIntro: function()
    {
        return `Hi my name is ${this.name} and I am from ${this.country}. I am ${this.age} years old!!!`
    }

}


function createobject(name,age,country)
{
    const myobj = Object.create(other_methods)
    myobj.name = name
    myobj.age = age
    myobj.country = country

    return myobj
}

const obj1 = createobject("Aman Dubey",26,"India")
console.log(obj1)
console.log(obj1.is18())
console.log(obj1.getIntro())
console.log(obj1.__proto__)


///// now we will takea  look at another method where in we can make use of the prorotype object that is poresent in all the functions and we will use that make sure that we define our other methjods in it


function newObject(empname,salary,age,exp,techstack){

    const myobj = Object.create(newObject.prototype)
    myobj.empname = empname
    myobj.salary = salary
    myobj.age = age
    myobj.exp = exp
    myobj.techstack = techstack
    myobj.funny = [1,2,3,4,5,6,7,8,9,10].reduce((a,b)=> a+b)

    return myobj
}


/// now since we have the prototype method with uswe can define some extra methods in it

newObject.prototype.getIntro = function()
{

    return `Hi my name is ${this.empname} and I have experience of ${this.exp} years and I my tech stack is ${this.techstack} and I am ${this.age} years old, pleasure to meet you guys`
}

newObject.prototype.isSenior = function()
{

    return this.exp>10
}

newObject.prototype.getStack = function()
{

    return this.techstack
}


const emp1 = newObject("My Pookie",450000,26,4,["JavaScript", "React", "Angular", "TypeScript", "Java"])
console.log()
console.log(emp1)
console.log(emp1.__proto__)
console.log(emp1.getIntro())
console.log(emp1.isSenior())
console.log(emp1.getStack())
console.log()



//// now we will use the third method where in we will use the help of new keyword while making the object it will by default make the prortype mtehods as our go to space for defining java script objects


function createGirlFriend(name,age,height,origin,weight,hobbies,futureGoals,pastRelations,lovelanguage)
{   
    this.name = name
    this.age = age
    this.height = height
    this.origin = origin
    this.weight = weight
    this.hobbies = hobbies
    this.futureGoals = futureGoals
    this.pastRelations = pastRelations
    this.lovelanguage = lovelanguage
}


createGirlFriend.prototype.isRedFlag = function()
{
    
    return this.pastRelations>3
}

createGirlFriend.prototype.isMyType = function()
{
    if(this.weight>=47 && this.weight<50 && this.pastRelations<2 && this.origin=="North" && this.height<=165)
        {
            return true
        }
    else{
        return false
    }
}


createGirlFriend.prototype.intro = function()
{

    return `Hi my name is ${this.name} and I am from ${this.origin} and yes I am  ${this.isMyType()? "a Green Flag": "not a Green Flag"} for Aman`
}


const girl1 = new createGirlFriend("Pookie 1",26,165,"North",48,["Dancing", "Singing", "Coding", "Traveling", "Having Great Food, Reading"], ["High Paying Jobs", "Buying Flat in Bangalore", "Buying A Car", "Mastering NextJs"],1,"Cuddling")


console.log(girl1)
console.log(girl1.__proto__)
console.log(girl1.isMyType())
console.log(girl1.lovelanguage)
console.log(girl1.intro())
console.log(girl1.futureGoals)


/// lets make a lists og obejct we found on our amazon cart and lets make a total of all the objects we added in the cart

const myCart = [
    {
        pname: "MSI monitor",
        price: 45000,
        category: "Electronics",
        maker: "MSI"
    },
    {
        pname: "type c to HDMI cable",
        price: 450,
        category: "Electrnics",
        maker: "Hibli"
    },
    {
        pname: "65% keyboard",
        price: 5000,
        category: "Electronics",
        maker: "RK"
    },
    {
        pname: "Razer Viper Mini",
        price: 1200,
        category: "Electronics",
        maker: "Razer"
    }

]


console.log(myCart.reduce((acuum, p)=> acuum + p.price,0))
console.log("Ascending Order")
console.log(myCart.slice(0).sort((p1,p2) => p1.price - p2.price))
console.log("Descending Order")
console.log(myCart.slice(0).sort((p1,p2) => p2.price - p1.price))
console.log(myCart.filter(x=> x.category=="Electronics"))
myCart.forEach(x=> {
    x.price = 2*x.price
})
console.log(myCart)