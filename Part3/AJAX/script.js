// basic thory
// ajax means asycnh javascript and XML (not used anymore we use Json now)
// requesting data will be asynchnoruse executiion will  not be stopped but it will done by the browser
// like we saw in the setTimeout part

// we have three ways of doing

/// 1_ xmlHTTPRequest
/// 2 fetch API
/// 3 axios which is a third party librray

const url = "https://jsonplaceholder.typicode.com/posts"
const xhr = new XMLHttpRequest()
//// step1 using open method
xhr.open("GET",url)

xhr.send8()
