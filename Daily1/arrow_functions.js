// arrow functions in javascript and react are everywhere so we need study about them in detail in order to make sure that we understand them all nicely


// let's try to the same thing with arrow functions and see what happens

const home_user = {
    firstname: "Aman Dubey",
    age: 26,
    about: () => {
        console.log(this)
        console.log(`Hi my name is ${this.firstname} and I am ${this.age} years old!!`)
    }
}


// we cant change the this like we did early
home_user.about()


// we are getting undefined becuase arrow functions this takes it from the env i,.e not from home user

// basically in the case of arrow fuinctions it takes the this vakue