

// what are methods ??? functions inside objects are called as methods


const person = {
    firstname: "Aman Dubey",
    age: 26,
    about: function(){
        console.log(`Person is ${this.firstname} and age is ${this.age}`)
        console.log(this)
    }
}

person.about()




