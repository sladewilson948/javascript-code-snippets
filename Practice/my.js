// const people = [
//     {
//         name: "Aman",
//         age: 26
//     }
// ]

// const employee = [...people]
// console.log(employee[0]==people[0])



// const myarray = ["apple","eggs","beans","carrot"]
// const newarray = [...myarray]
// console.log(myarray===newarray)
// newarray[1] = "eggrice"
// console.log(newarray)




/// lets take a good example of closures


function myFunction()
{
    let flag = true
    return function()
    {
        if(flag)
            {
                console.log("Eda Mone!!!!")
                flag = false
            }
        else{
            console.log("Mone you called me before!!!")
        }
    }
}

const myFunc = myFunction()
myFunc()
myFunc()
myFunc()
myFunc()
console.log()
console.log()
const yourFunc = myFunction()
yourFunc()
yourFunc()
yourFunc()
yourFunc()


