const inputActiveValue = () => document.querySelector('input[name="color-theme"]:checked').value

function setValue(value) {
	let light = document.getElementById("stylesheetlight")
	let dark = document.getElementById("stylesheetdark")
	let values = document.querySelectorAll('input[name="color-theme"]')

    switch (value) {
        case 'dark':
            console.log('dark')
            break
        case 'light':
            console.log('light')
            break
        case 'auto':
            console.log('auto')
            break
    }

    return

	if (value === "dark") {
		localStorage.setItem("color-theme", "dark")
		light.media = "not all"
		dark.media = "all"

		for (var i of values) {
			if (i.value === "dark") {
				i.setAttribute("checked", "true")
			} else {
				i.removeAttribute("checked")
			}
		}
	} else if (value === "light") {
		localStorage.setItem("color-theme", "light")
		light.media = "all"
		dark.media = "not all"

		for (var i of values) {
			if (i.value === "light") {
				i.setAttribute("checked", "true")
			} else {
				i.removeAttribute("checked")
			}
		}
	} else {
		localStorage.removeItem("color-theme")
		light.media = "(prefers-color-scheme: light)"
		dark.media = "(prefers-color-scheme: dark)"

		for (var i of values) {
			if (i.value === "auto") {
				i.setAttribute("checked", "true")
			} else {
				i.removeAttribute("checked")
			}
		}
	}
}

function inputSetValue() {
	setValue(inputActiveValue())
}

localStorage.getItem("color-theme") !== null ?
    setValue(localStorage.getItem("color-theme")) :
    setValue(inputActiveValue())
