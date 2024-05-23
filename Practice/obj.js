
const myProducts = [
    {pname: "Apple Iphone 15", price: 34000},
    {pname: "Samsung Galaxy S24", price: 54000},
    {pname: "Gabagool", price: 420},
    {pname: "Tesla Cyber Truck", price: 45000},
    {pname: "Porche Carera GT", price: 450000}
]


const totalCost = myProducts.reduce((accum, p) => accum + p.price,0)
console.log(`The total cost of all the purchase is ${totalCost}$`)


/// lets try to sort this out based on the price in ascending and descendiong order

const list1 = myProducts.slice(0).sort((a,b) => a.price - b.price)
const list2 = myProducts.slice(0).sort((a,b) => b.price - a.price)
console.log(list1)
console.log(list2)

// we iterated the entire lists of objects

for(let item of myProducts)
    {
        console.log(`The name of the item is ${item.pname} and the price of the item is ${item.price}$`)
    }


/// we can alsio use array derstructutrng

const [p1,p2,...p3] = myProducts
console.log(p1)
console.log(p2)
console.log(p3)