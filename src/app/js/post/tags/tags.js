function buttonTag(buttonId) {
    const button = document.querySelector(`.post-tags #${buttonId}`)
    setTag(button)
}

function setTag(button) {
    const posts = document.querySelectorAll('.col.post')
    const searchid = button.getAttribute('searchid')
    const active = button.classList.contains('active')

    setTagActive(active, button.id)
    posts.forEach(post => post.id === searchid || active ? post.classList.remove('d-none') : post.classList.add('d-none'))

    typeof AddCountPosts === 'function' ? AddCountPosts() : null
}

function setTagActive(active, buttonId) {
    document.querySelectorAll('.post-tags button').forEach(button => button.classList.remove('active'))
    active ? null : document.querySelector(`.post-tags #${buttonId}`).classList.add('active')
}
