// its the same as what we have been doing with fuicntions and enw keyword spo far ist the same wthing with a liottyle bit of syntatiocal sugar on  tipi of it


class MyEmployees{

    // this is the new keyword here
    constructor(firstName, lastName, age, address)
    {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.address = address
    }

    about()
    {
        return `Hi my name is ${this.firstName} and I am ${this.age} years old!!`
    }

    is18()
    {
        return this.age>=18
    }

    sing()
    {
        return "lsamdl;masl;d"
    }

    func(a)
    {
        console.log(a)
    }
}


const emp1 = new MyEmployees("Aman", "Dubey", 26, "B 32")
console.log(emp1.is18())
console.log(emp1.about())
emp1.func(18)


// lets practice some inheritance

class Animal {

    constructor(name,age,sound){
        this.name = name
        this.age = age
        this.sound = sound
    }

    makeSound()

    {
        return `Hi my name is ${this.name} and I go ${this.sound}`
    
    }

    eat()
    {
        return `${this.name} is eating!!!`
    }

    isSuperCute()
    {
        return this.age<=4
    }

    isCute()
    {
        return true
    }
}


const animal1 = new Animal("Tiger",2, "Roar")
console.log(animal1.makeSound())
console.log(animal1.isCute())
console.log(animal1.isSuperCute())


class Dog extends Animal{

    constructor(name,age,sound,speed){
        // this super keyword will do the assignement from the parent class like we showed above
        super(name,age,sound)
        this.speed = speed
    }

    eat(){
        return `Modified statement ${this.name} is eating!!`
    }

    run(){
        return `${this.name} is running at the speed of ${this.speed} kmph`
    }

}

const tommy = new Dog("tommy",2,"Bhow Bhow",40)
const new_animal = new Animal("sheru",2,"Roar")
console.log(tommy)
console.log(tommy.isCute())
console.log(tommy.makeSound())
console.log(tommy.run())
console.log(new_animal.eat())

// first it will alwayus look for the mthod in the child class or the sub class if it is not presetn there it will go to the calss above or the parent class
console.log(tommy.eat())