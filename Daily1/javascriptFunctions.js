/* 


const user_list = [
    {userId:0, userName: "Aman Dubey", userAge: 26, hobbies:["listening to music", "going out", "having good food", "going to gym"]},
    {userId:1, userName: "Archita Dubey", userAge: 22, hobbies:["cooking", "sleeping", "buying makeup products"]},
    {userId:2, userName: "Rachel Mc Adam", userAge: 34, hobbies:["making movies", "acting", "look like a dive"]}
]


// time to do the destructring

const [{userId:var1,hobbies:hobbie1, userName:name1}, , {userId:var2, hobbies:hobbie2, userName:name2}] = user_list


console.log(`Hi my name is ${name1} and my hoobies are ${hobbie1}`)
console.log(`Hi my name is ${name2} and my hobbies are ${hobbie2}`)
 */


// making a function to check if a value is present in the list or not 


function checkIfExists(list1,target)
{
    for(let ele of list1)
        {
            if(ele===target)
                {
                    return true
                }
            
        }
        return false
}

const list1 = [1,2,3,4,5,6,7,8,9,0]
const target = 7

console.log(checkIfExists(list1,target))


