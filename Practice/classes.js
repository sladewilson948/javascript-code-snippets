
//// let us practice classes in java scriopt
/// classes in javascript are actually fake and it's all objects under tyhe hood lets see how they are working


class Animal{

    constructor(name,age,color,origin,sound)
    {
        this.name = name
        this.age = age
        this.color = color
        this.origin = origin
        this.sound = sound
    }

    // now we will define some functionms in this class
    about(){

        return `The name of this animal is ${this.name} and it is ${this.age} years old and originates from ${this.origin}`

    }

    makeSound(){

        return `The animal makes the sound ${this.sound}`
    }

    checkColor(){

        return `The animal coat color is ${this.color}`
    }

    isCute()
    {
        return this.age>2
    }

}


// let us pdo inhetitance

class Dog extends Animal{

    constructor(name,age,color,origin,sound,speed)
    {
        // the super keyword initializezs the rest from the parent class
        super(name,age,color,origin,sound)
        this.speed = speed
    }

    runs(){

        return `The dog named ${this.name} runs at ${this.speed} kmph and makes the sound ${this.sound}`
    }

}


// now let us make an animal object
const myAnimal = new Animal("Tommy",6,"Black","India","Bhow Bhow")
console.log(myAnimal.checkColor())
console.log(myAnimal.about())
console.log(myAnimal.isCute())

console.log("This is a new dog!!")
const myDog = new Dog("Charlie", 7, "Black and Brown", "Germany", "Bhoow Bhoow", 60)
console.log(myDog.isCute())
console.log(myDog.runs())
console.log(myDog.checkColor())
console.log(myDog.about())