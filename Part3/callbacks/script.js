

function myFunc(callback)
{
    console.log("My function is doing some task1")
    // 
    callback()
}


myFunc(()=> {
    console.log([1,2,3,4,5,6,7,8,9,10].reduce((a,b)=> a+b))
})


function getTwoNumbersAndAdd(num1,num2,callback)
{

    console.log(num1)
    console.log(num2)
    console.log(callback(num1,num2))
}

getTwoNumbersAndAdd(67,456,(a,b)=> a+b)


// another example of callbacks

function compareShoppings(list1,list2,callback)
{
    console.log(list1)
    console.log(list2)
    callback(list1,list2)

}

const shopping1 = [
    {
        p1: "Pencil",
        price: 34
    },
    {
        p2: "Monitor",
        price: 23000
    },
    {
        p3: "Bike",
        price: 315000
    }

]

const shopping2 = [
    {
        p1: "Gemoerty box",
        price: 100
    },
    {
        p2: "India Political Map",
        price: 2
    },
    {
        p3: "Playstation",
        price: 50000
    }
]


compareShoppings(shopping1,shopping2,(shopping1,shopping2)=> {
    const tot1 = shopping1.reduce((accum,p)=> accum + p.price,0)
    const tot2 = shopping2.reduce((accum,p)=> accum + p.price,0)
    if(tot1>tot2)
        {
            console.log("Shopping one was expensive!!")
        }
    else{
        console.log("Shopping two was expensive!!")
    }
})


/// we can also two callbacks depending on the situation we faced for example here
// lets say we dont have nunmbers when we are addoing in that case we will have a diffrent callback

function getNumbersAndAdd(val1,val2,onSuccess,onError)
{
    if(typeof val1==="number" && typeof val2 === "number")
        {
            onSuccess(val1,val2)
        }
    else{
        onError(val1,val2)
    }
}



getNumbersAndAdd(6,5,(val1,val2)=> {
    console.log(val1 + val2)
}, ()=> {
    console.log("Please provide numbers to add please!!!")
    console.log("The data type of any of the numbers is not valid and hence they cannot be added")
}
)

