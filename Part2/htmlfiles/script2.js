const rootNode = document.getRootNode()
const htmlElementNodes  = rootNode.childNodes[0]
const headElementNode = htmlElementNodes[0]
const textNode = htmlElementNodes[1]
const bodyNode = htmlElementNodes[2]

console.log("Hello World!!")

console.log(headElementNode)
console.log(textNode)
console.log(bodyNode)