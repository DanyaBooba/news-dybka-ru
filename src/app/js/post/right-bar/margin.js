const marginStyle = () => {
    const lineHeight = 48
    const startMargin = lineHeight + 37
    const title = document.querySelector("h1")

    const countLines = Math.round(Number(title.offsetHeight) / lineHeight) - 1
    return parseInt(countLines > 0 ? startMargin + lineHeight * countLines : 0)
}

const marginClass = () => {
    const lineHeight = 48
    const title = document.querySelector("h1")

    const countLines = Math.round(Number(title.offsetHeight) / lineHeight) - 1
    return `post--right-margin-${countLines}`
}

function addMarginToRightBar(styleValue) {
    const rightbar = document.getElementById("post--right")
    if (!rightbar) return

    rightbar.style.marginTop = `${styleValue}px`
}

function addMarginToShare(styleValue) {
    const sharebar = document.querySelector('.post--share')
    if (!sharebar) return

    sharebar.style.marginTop = `${styleValue}px`
}

const styleValue = marginStyle()

if (window.innerWidth > 991) {
    addMarginToRightBar(styleValue)
    addMarginToShare(styleValue)
}
