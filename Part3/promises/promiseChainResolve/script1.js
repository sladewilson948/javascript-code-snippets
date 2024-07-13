 Promise.resolve("foo").then(value=> {
    console.log(value)
    value+="bar"
    return value
 }).then(value=> {
    console.log(value)
    value+="baar"
    return value
 }).then(value => {
    console.log(value)
 })