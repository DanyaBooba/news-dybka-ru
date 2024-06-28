const textMinus = () => changeSize(getTextSize(false, -2, -1))
const textPlus = () => changeSize(getTextSize(true, 2, 1))
const textDefault = () => {
	localStorage.setItem("textsize", 0)
	changeSize(0)
}

function changeSize(textSize) {
    const content = document.getElementById("post--main")
    if (!content) return

	const buttonDefault = document.getElementById("textsizetodefault")
	const buttonMinus = document.getElementById("textsizediff")
	const buttonPlus = document.getElementById("textsizeup")

	buttonDefault ? buttonDefault.classList.remove("d-none") : null
	buttonPlus ? buttonPlus.removeAttribute("disabled") : null
	buttonMinus ? buttonMinus.removeAttribute("disabled") : null

	removeChangeSize(content)

	switch (Number(textSize)) {
		case 0:
			buttonDefault ? buttonDefault.classList.add("d-none") : null
			break
		case 1:
			content.classList.add("uptext-1")
			break
		case 2:
			buttonPlus ? buttonPlus.setAttribute("disabled", "") : null
			content.classList.add("uptext-2")
			break
		case -1:
			content.classList.add("downtext-1")
			break
		case -2:
			buttonMinus ? buttonMinus.setAttribute("disabled", "") : null
			content.classList.add("downtext-2")
			break
	}
}

function getTextSize(useMin, min, differenceMax) {
    let textSize = Number(localStorage.getItem("textsize") ?? 0)
	textSize = Number(useMin ? Math.min(min, textSize + differenceMax) : Math.max(min, textSize + differenceMax))

    localStorage.setItem("textsize", textSize)
    return textSize
}

function removeChangeSize(content) {
	["uptext-1", "uptext-2", "downtext-1", "downtext-2"].forEach(el => content.classList.remove(el))
}

changeSize(localStorage.getItem("textsize") ?? 0)
