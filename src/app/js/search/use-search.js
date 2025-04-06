const inputField = document.querySelector('input.search-input')
let posts = document.querySelectorAll('#row-search .post')
const countPosts = document.getElementById('getcountposts')

function textSearch() {
    return inputField.value.toLowerCase()
}

function checkSearch(post) {
    let title = post.getAttribute("title") ?? ''

    const checkSearch = textSearch() === null ? true :
        title.toLowerCase().includes(textSearch())

    return checkSearch
}

function useSearch() {
    if (!inputField) return
    if (posts.length <= 0) {
        posts = document.querySelectorAll('#row-search .post')
        return
    }

    let getCountPosts = 0

    console.log('check')
    posts.forEach(post => {
        if (checkSearch(post)) {
            getCountPosts += 1
            post.classList.remove('d-none')
        }
        else {
            post.classList.add('d-none')
        }
    })

    countPosts.textContent = `записей: ${getCountPosts}`
}

function useSearchOnInput() {
    useSearch()
}
