
function compareTwoShoppings(list1,list2)
{

    const total1 = list1.reduce((accum,p1) => accum + p1.price,0)
    const total2 = list2.reduce((accum,p2) => accum + p2.price,0)

    return total1>total2 ? "1 was expensive" : "2 was expensive"
} 


function compareSomething(list1,list2,compMe)
{
    console.log(list1)
    console.log(list2)
    console.log(compMe(list1,list2))
}


list1 = [
    {
        name : "Levis Jeans Black!",
        price: 4500
    },
    {
        name: "Triumph speed 400",
        price: 315000
    }
]


list2 = [
    {
        name: "Dior Suave",
        price: 34000
    },
    {
        name: "Nike Air Jordans 1",
        price: 560000
    }
]



compareSomething(list1,list2,compareTwoShoppings)



