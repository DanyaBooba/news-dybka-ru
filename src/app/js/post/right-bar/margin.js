function addMarginToRightBar() {
    const lineHeight = 48

    const title = document.querySelector("h1")
	if (!title) return

	const countLines = Math.round(Number(title.offsetHeight) / lineHeight)

    const rightbar = document.getElementById("post--right")
    if (!rightbar) return

	countLines > 1 ? rightbar.classList.add(`post--right-margin-${countLines}`) : null
}

addMarginToRightBar()
