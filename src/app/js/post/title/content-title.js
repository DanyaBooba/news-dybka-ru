function moveTitleHTML(titleHtml) {
    return (
        `
            <div class="row row-fake">
                <div class="col-md-1"></div>
                <div class="col-md-8">${titleHtml}</div>
                <div class="col-md-2"></div>
            </div>
        `
    )
}

function moveTitle() {
    const title = document.querySelector('h1')
    const root = document.querySelector('.post--main#post--main')
    const row = document.getElementById('rowToInsertTitle')
    if (!title || !root || !row || !afterTitle) return

    console.log('123: ' + afterTitle)

    // row.insertAdjacentHTML("beforebegin", moveTitleHTML(title.outerHTML))
    // root.removeChild(title)
}

// moveTitle()
