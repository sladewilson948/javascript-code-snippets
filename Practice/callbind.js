/// what is the this keyword by deafult this keyword represent the window object we can proffo it by doing this
function myFunc()
{
    console.log(this)
}
// be defauilt we have this keyword as the window object howevbber when we use it within an object it takles the value from the object that calls the method
myFunc()


// example we have this

function aboutMe(){
    console.log(this)
    console.log(`Hi my name is ${this.name} and I am ${this.age} years old!!`)
}

const person1 = {
    name: "Aman Dubey",
    age: 26,
    about: aboutMe
}

const person2 = {
    name: "Nancy Drew",
    age: 26,
    about: aboutMe
}

const person3 = {
    name: "Archita Dubey",
    age: 22,
    about: aboutMe
}

person1.about()
person2.about()
person3.about()

// as we see in the output we are see that the value of this chnages based on which object is calling that fuction if person3 calls it then the value of this becomes person3 same as person2 and person1

// lets see how call works it same as simply calling a afunction but if we have a method in object1 but we want to pass object2 or some object this in that fucntion then we use call in that case

// see using this example

user1 = {
    name: "Aman Dubey",
    age: 26,
    about: function(){
        console.log(`Hola!! my name is ${this.name} and I am ${this.age} years old!!`)
    }
}


// user2 and user 3 dont have the about method in them

user2 = {
    name: "Archita Dubey",
    age: 22
}

user3 = {
    name: "Nancy Drew",
    age: 26
}


/// but if we want to use the method in user1 with user2 and user3 we must do this

user1.about.call(user2)
user1.about.call(user3)

// this way the this takes the object passed in the call method

// we can also use call when the method is outside the objects we will take a look here


function introduction(param1,param2)
{
    console.log(`Hi my name is ${this.name} I am ${this.age} years old and my fav food is ${param1} and my fav movie is ${param2}`)
}


const personone = {
    name: "Rachel MC Adams",
    age: 26
}

const persontwo = {
    name: "Aman Dubey",
    age: 26
}

const personthree  ={
    name: "Chris Evans",
    age: 40
}


// now we will call introduction method with these objects in mind

introduction.call(personone, "Rajma Chawal", "Pirates of Carebian")
introduction.call(persontwo, "Panner butter masala", "Shutter Island")
introduction.call(personthree, "Chieckn Tikka Masala", "Dhoom3")


// what bind basically does is that it binds the object with the method and returns us with a method that we can later use


// let take this example


function thisIsMe(param1,param2)
{
    console.log(`Hi my name is ${this.name} I am ${this.age} years old and my fav food is ${param1} and I am from ${param2}`)
}


const student1 = {
    name: "Aman Dubey",
    age: 26
}

const student2 = {
    name: "Vineet Savage",
    age: 26
}

const student3 = {
    name: "Nancy Drew",
    age: 26
}

const student4 = {
    name: "Archita Dubey",
    age: 22
}


// we will sue bind method

const func1 = thisIsMe.bind(student1,...["Daal Chawal","Varanasi"])
const func2 = thisIsMe.bind(student2,...["Panner Bhurji", "Totapur"])
const func3 = thisIsMe.bind(student3,...["Baby Corn","Srinagar"])
const func4 = thisIsMe.bind(student4,...["Panner Fried Rice", "Varanasi"])

// now we can simple call these methods anytime we want anywhewre is the code and they are now binded with the object we just passed them inside with
console.log()
console.log()
func1()
func2()
func3()
func4()
console.log()
console.log()
