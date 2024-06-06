// anything that happens a mouse click or button preseed are all events or mouse hoverirng all tehse are events

const learnMoreButton = document.getElementById("my-button")
console.log(learnMoreButton)
learnMoreButton.onclick = function()
{
    console.log("Hello there long time no see fr fr")
}

learnMoreButton.onmouseenter = function()
{
    learnMoreButton.style.backgroundColor = "orange"
}

learnMoreButton.onmouseleave = function()
{
    learnMoreButton.style.backgroundColor = "white"
}
