function setActiveElement(idName) {
    const urlSplit = String((new URL(window.location)).pathname).split('/')
    const url = urlSplit[urlSplit.length - 2]
    const elementActive = document.getElementById(`${idName}-${url}`)

    if (!elementActive) return

    elementActive.classList.add('active')
}

function navActiveLinks() {
    setActiveElement('nav')
}

function offcanvasActiveLinks() {
    setActiveElement('offcanvas')
}

navActiveLinks()
offcanvasActiveLinks()
