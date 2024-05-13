

// what are methods ??? functions inside objects are called as methods

// what are javascript methods javascript methods are nothinmg but functions inside of objects are called as methods

// this keyword is nothing but the function that object that calls the method inside it

// let's say we have total of three objects with us

function personInfo()
{
    console.log(`Hi my name is ${this.firstname} and my age is ${this.age}`)
}

const person1 = {

    firstname: "Aman Dubey",
    age: 26,
    // here we are defining one single function for the info section
    about: personInfo
}

const person2 = {

    firstname: "Mahesh Raju N",
    age: 22,
    about: personInfo
}

const person3 = {

    firstname: "Mukesh Dubey",
    age: 50,
    about: personInfo
}


person1.about()
person2.about()
person3.about()



// let's make objects for some sinmgers that are very popular in the us

function singerInfo(){
    console.log(`Hi my name is ${this.name} and I am ${this.age} years old and I have these many albums ${this.albums}`)
}

const singer1 = {
    name: "Dua Lipa",
    age: 28,
    albums: ["Future Nostalgia", "Radical Optimism", "The Only EP"],
    about: singerInfo
}

const singer2 = {
    name: "Taylor Swift",
    age: 34,
    albums: ["The tortured poets department", "Reputation", "1989", "Midnights"],
    about: singerInfo
}

const singer3 = {
    name: "Tate Mc Rae",
    age: 21,
    albums: ["Think Later", "All the things I Never Said", "Too young to be Sad"],
    about: singerInfo
}


singer1.about()
singer2.about()
singer3.about()



function myFunc()
{
    "use strict"
    console.log(this)
}
// we actually are getting the window object to avoid that we can use the strict mode in javascipt
// if we use "use strict" it will fgive us undefined whidch kind of iverrides the default lbehaviour of always returning the window object when this is called
myFunc()



// lets discuss about call apply and bind

const user1 = {
    name: "Aman Dubey",
    age: 26,
    about: function(hobbies, favArtist){
        console.log(`Hi my name is ${this.name} and I am ${this.age} and my hobbies are  ${hobbies} and my fav artits is ${favArtist}`)
    }
}

// user 2 wants to borrow the about method
const user2 = {
    name: "Archita Dubey",
    age: 22
}


const user3 = {
    name: "Nancy Drew",
    age: 26
}

// I want the this to be user2 not user1 this is why we use the call method we can pass the otehr object in the function

// so basuically by using the call methods what we can actually do is make sure that we pass in the object that is uspposed to be this in the method
user1.about.call(user2, "eating good food", "Drake")
user1.about.call(user3,...["eating momos","bulow"])


// what if we have the function defined outside the object like seperately in that case we can do this

function aboutUser(favFood, favArtist){
    console.log(`Hi my name is ${this.name} and I am ${this.age} years old. My fav food is ${favFood} and I like to listen to ${favArtist}`)
}


const userone = {
    name: "Sir Aman Dubey",
    age: 26
}

const usertwo = {
    name: "Nancy Drew",
    age: 26
}

const userthree = {
    name: "Rachel MC Adams",
    age: 29
}

// we must pass the fav food and the fav artist in the call part
console.log()
aboutUser.call(userone,"chole bhature", "drake")
aboutUser.call(usertwo, "vangi baath", "bulow")
aboutUser.call(userthree, "steaks and chips", "taylor swift")
console.log()


// this is how call works
// lets see how we can sue apply
// apply is same as call butr with we can pass a list as well which I saw can also be done using the call method


// lets discuss about bind
// what bind actually does in it returns us with a function as we call and we can store that function in a varriable
const my_binded_function = aboutUser.bind(user1, "panner butter masala", "21 Savage")
my_binded_function()


// so with call we can basically bind the functiuons with the objects that we are passing and the xtra diocuments that we are passing and then we can use them seperetaley whenever we want to as it will always return us with a afunction which we can use whenever we want


// let's quickly do an example of the same


function printDetailsOfUser(hobbies, favSinger, favFood)
{
    console.log(`Hi my name is ${this.name} and I am ${this.age} years old. My hobbies are ${hobbies}, my fav singer is ${favSinger} and my fav food is ${favFood}`)
}


const student1 = {
    name: "Aman Dubey",
    age: 26
}

const student2 = {
    name: "Nancy Drew",
    age: 26
}

const student3 = {
    name: "Superstar Mahesh Rahun Nalasopara",
    age: 22
}


// now we will use bind to make sue of the function alsongh wioth these proeprties. It will eventually return us with a function which we can use anywhere in the code

const func1 = printDetailsOfUser.bind(student1,"going to gym","Drake","Panner Butter Masala")
const func2 = printDetailsOfUser.bind(student2,"palying with feelings", "Tate Mc Rae", "Chicken Tikka Masala")
const func3 = printDetailsOfUser.bind(student3,"acting in movies","AR rehman","Polyograhi")


// now we can simply call these functions and make them of use with ease
// lets be fancy
func1.call()
func2.call()
func3.call()


const some_example = {
    fname: "Aman Dubey",
    age: 26,
    about: function(){
        console.log(`Hi my name is ${this.fname} and I am ${this.age} years old`)
    }
}

const mone_example  = {

    fname: "Archita Dubey",
    age: 22
}

console.log()
const res = some_example.about.bind(mone_example)
res()
console.log()



// a msitake to avoid


const eda_mone = {
    name: "Aman Dubye",
    age: 26,
    about: function(){
        console.log(`Hi my name is ${this.name} and I am ${this.age} years old`)
    }
}


const my_obj = eda_mone.about.bind(eda_mone)
my_obj()



// lets see one more example of call


const my_friend = {
    name: "Aman Dubey",
    age: 23,
    city: "Varanasi",
    country: "India",
    about: function(param1,param2)
    {
        console.log(`Hi my name is ${this.name} I am ${this.age} years old and my fav food is ${param1} and fav actor is ${param2}`)
    }
}


const her_friend = {
    name: "Nancy Drew",
    age: 20,
    city: "Bangalore",
    country: "India",
    
}


my_friend.about.call(her_friend, "Chole Bhature", "Prabhas")

//let's see how does the bind method works
// so bind basically returns us a method that we can use later


// example in this case the about function will be ouitside the objcts and let's see tehre use case
// I am defining a functiuon outside here

function introduction(param1,param2)
{
    console.log(`Hi my name is ${this.name} and I am ${this.age} years old, My fav food is ${param1} and my fav movie is ${param2}`)
}


const childone = {
    name: "Aman Dubey",
    age: 26,
}

const childtwo = {
    name: "Nancy Drew",
    age: 26
}

const childthree = {
    name: "Archita Dubey",
    age: 22
}


// we will now use bind bind basically returns us a function which we can use later on

const funcone = introduction.bind(childone,"Panner Butter Masala", "Godzilla")
const functwo = introduction.bind(childtwo, "Chicken Tikka Masala", "The devil wears prada")
const functhree = introduction.bind(childthree, "Meghna Chicken Biryani", "The kissing booth")


funcone()
functwo()
functhree()


// what is this keyword... this kleyword is nothing but the object that calls the function 
// here is a proof



function introduction()
{
    console.log(this)
    console.log(`Hi my name is ${this.name} and I am ${this.age} years old!!`)
}


const obj1 = {
    name: "Aman Dubey",
    age: 26,
    about_me: function(){
        console.log(`Hi my name is ${this.name} and I am ${this.age} years old!!`)
    }
}

const obj2 = {
    name: "Nancy Drew",
    age: 26
}

const obj3 = {
    name: "Mukesh Dubey",
    age: 27
}

obj1.about_me()


// let's quickly take a quick look about how we can use javascript call and bind methods
// scenarios 1 I have three objects and there is one fubnction inside the other objects

const moreaboutme = function() {
    console.log(`Hi my name is ${this.name} and I am ${this.age} years old and my fav food is Rajma Chawal`)
}


const personone = {
    name: "Aman Dubey",
    age: 26
}


const persontwo = {
    name: "Archita Dubey",
    age: 26
}

const personthree = {
    name: "Mukesh Dubey",
    age: 50
}


//what If I want to use the about function but for the other objects such as persontwo and three
moreaboutme.call(personone)
moreaboutme.call(persontwo)
moreaboutmeu.call(personthree)

// lets see how diffrent objects when they call a function will lead to diffrent oupuits













