function navActiveLinks() {
    const url = String((new URL(window.location)).pathname).split('/')[1]
    const elementActive = document.getElementById(`nav-${url}`)

	if (!elementActive) return

	elementActive.classList.add('active')
}

navActiveLinks()
