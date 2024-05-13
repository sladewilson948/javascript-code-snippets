//  here we will see the realtion between proto and prototype

// let;s see how we are using obechjt .create to get the help of proto



// const userMethods = {

    



function createUser(name,age)
{
    // this line rigyht here sets the proto value of tyhe object that we created to the userMethods that we defined above so if they are not peresetn in the obj they can access it from the proto
    const my_obj = Object.create(createUser.prototype)
    my_obj.name = name
    my_obj.age = age
    
    return my_obj
}

createUser.prototype.about =  function(){
        return `Hi my name is ${this.name} and I am ${this.age} years old!!`
    },

createUser.prototype.sing = function(){
        return `I am singing a good song right now can you hear it???`
    }

createUser.prototype.is18 = function(){
        return this.age>=18
    } 


const user1 = createUser("Aman Dubey",26)
console.log(user1)
// this time it is taking this function from the prototype obect of the finction that craeted the object and thats just how this works we basically8 have set the proto to the prototype of this object
console.log(user1.about())
console.log(user1.is18())



// now undewrstand this whenervwe createa  function we have a free space or an empty object called as the prototype where in we can set our methods like we saw earlier using this cioncept cant we directly define the usermethods uin it then ??


// so instead of defining them seperately why dont we use the prototype empty object that we get whenerv we create a fuinction in javascript and we can use that to define these extra methods


// so instead of tellingthem to use the proto as a differnt object we can simple put that use the proto as the protoype that we just did after the function declaration

// in this way when itr will not find a method in object it will look in the prortype which was an already present empty object in the function we sinmple used that instead of creating a diffrent Object


// this is what is the main diffrence between proto and prototype proto is a refercen and prototypr is an empty object that is provided by javascript whenever a fucntion is created nomatter what this is the main diffrence between proto and prototype you can set the proto for an object as prototype that we just saw

