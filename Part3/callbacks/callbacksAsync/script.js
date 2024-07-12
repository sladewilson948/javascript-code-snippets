/// here we will discuss how we use call backs in async programming!!
/// we will discuss about pyramid of doom and callback hell 

const head1 = document.querySelector(".heading1")
const head2 = document.querySelector(".heading2")
const head3 = document.querySelector(".heading3")
const head4 = document.querySelector(".heading4")
const head5 = document.querySelector(".heading5")
const head6 = document.querySelector(".heading6")

// setTimeout(()=> {
//     head1.textContent = "This is text content for heading1"
//     head1.style.color = "violet"
// },1000)

// setTimeout(()=> {
//     head2.textContent = "This is text content for heading2"
//     head2.style.color = "purple"
// },3000)

// setTimeout(()=> {
//     head3.textContent = "This is text content for heading3"
//     head3.style.color = "green"
// },5000)

// setTimeout(()=> {
//     head4.textContent = "This is text content for heading4"
//     head4.style.color = "grey"
// },8000)

// setTimeout(()=> {
//     head5.textContent = "This is text content for heading5"
//     head5.style.color = "orange"
// },12000)

// setTimeout(()=> {
//     head6.textContent = "This is text content for heading6"
//     head6.style.color = "red"
// },17000)



/// tbhis makes no sense we have a bettwr way to do this 
/// improved way


setTimeout(()=> {
    head1.textContent = "this is the text content for heading 1"
    head1.style.color = "violet"
    setTimeout(()=> {
        head2.textContent = "this is the text content for heading 2"
        head2.style.color = "pink"
        setTimeout(()=> {
            head3.textContent = "this is the text content for heading 3"
            head3.style.color = "grey"
            setTimeout(()=> {
                head4.textContent = "this is the text content for heading 4"
                head4.style.color = "orange"
                setTimeout(()=> {
                    head5.textContent = "this is the text content for heading 5"
                    head5.style.color = "purple"
                    setTimeout(()=> {
                        head6.textContent = "this is the text content for heading 6"
                        head6.style.color = "green"
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)

