//mainpulating strings


let first_name = "        aman dubey        "

function toTrim(text1)
{
    let trim_text = text1.trim()
    return trim_text
}

function toUpper(text1)
{
    let upper_string = text1.toUpperCase()
    return upper_string
}

function toLower(text1)
{
    let lower_string = text1.toLowerCase()
    return lower_string
}


function sliceString(text1)
{
    let sliced_string = text1.slice(0,5)
    return sliced_string
}



let final_string =  sliceString(toLower(toUpper(toTrim(first_name))))
console.log(final_string)
console.log(final_string.length)
