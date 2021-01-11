let clicks = 0

function changePosition() {
    let block = document.getElementById("block")
    let body = document.getElementById("body")
    let leftMin = block.scrollWidth /2 - body.scrollWidth / 2
    let leftMax = body.scrollWidth / 2
    let topMin = block.scrollHeight /2 - body.scrollHeight / 2
    let topMax = body.scrollHeight / 2
    let widthRange = Math.abs(leftMax - leftMin) - block.scrollWidth
    let heightRange = Math.abs(topMax - topMin) - block.scrollHeight
    block.style.left = `${Math.random() * widthRange - widthRange / 2}px`
    block.style.top = `${Math.random() * heightRange - heightRange / 2}px`
    block.value = `Clicks: ${++clicks}`
}