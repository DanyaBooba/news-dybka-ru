const inputActiveValue = () => document.querySelector('input[name="color-theme"]:checked').value

function setValue(value) {
	let light = document.getElementById("stylesheetlight")
	let dark = document.getElementById("stylesheetdark")
	let values = document.querySelectorAll('input[name="color-theme"]')

    value !== 'auto' ? localStorage.setItem('color-theme', value) : localStorage.removeItem('color-theme')
    for (let currentValue of values) {
        currentValue.value === value ? currentValue.setAttribute('checked', 'true') : currentValue.removeAttribute('checked')
    }

    switch (value) {
        case 'dark':
            light.media = 'not all'
		    dark.media = 'all'
            break
        case 'light':
            light.media = 'all'
		    dark.media = 'not all'
            break
        case 'auto':
            light.media = '(prefers-color-scheme: light)'
		    dark.media = '(prefers-color-scheme: dark)'
            break
    }
}

function inputSetValue() {
	setValue(inputActiveValue())
}

localStorage.getItem("color-theme") !== null ?
    setValue(localStorage.getItem("color-theme")) :
    setValue(inputActiveValue())
