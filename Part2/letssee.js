

let foo = "foo"
console.log(foo)
function getFullName(fname,lname)
{

    // here arguments is basiaclly an array like object where in you can use the indexing and the length proeprty!!
    console.log(typeof arguments)
    let my_var = "my variable inside the funcption"
    console.log(my_var)
    const full_name = `Hi my name is ${fname} ${lname}`
    return full_name
}

const personName = getFullName("Aman", "Dubey")
console.log(personName)


/// till the variable is uninitialized it is said to be in the TDE tempral dead zone!!!
// when we are inside a function the control goes from Global Execution Context to Function Eexecution context and it all happens in a stack!!




/// now let's discuss about the scope chain!!

const lname = "Dubey"

const printname = function()
{
    const fname = "Aman"
    function myFunc()
    {
        console.log(fname)
        console.log(lname)
        console.log(`Hi my name is ${fname} ${lname}`)
    }
    myFunc()
    
}

printname()

// what lexical env means is that which function is present in where and in which environment

