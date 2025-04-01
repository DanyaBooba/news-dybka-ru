function formWord(number, form1, form2, form3) {
    num = Math.abs(number) % 100;
    num_x = number % 10;

    if (num > 10 && num < 20) return form3;
    if (num_x > 1 && num_x < 5) return form2;
    if (num_x == 1) return form1;

    return form3;
}

function contentFromPostsUser(username) {
    const row = document.getElementById('users-load-data')
    if (!row) return

    $.getJSON('/js/posts.json', function (pages) {
        let countPosts = 0
        pages.forEach(post => {
            console.log(post)
            if (post.author === username) {
                const html = contentHTML({
                    tagTitle: '',
                    id: post.id,
                    link: new URL(post.link).pathname,
                    title: post.title
                })

                row.insertAdjacentHTML('beforeend', html)
                countPosts += 1
            }
        })

        const elementToCountPost = document.getElementById('count-posts')
        elementToCountPost.textContent = `Автор ${countPosts} ${formWord(countPosts, 'записи', 'записей', 'записей')}.`
    })
}

function contentHTML({ id, link, title, tagTitle }) {
    return `<div class="col post" id="${id}">
                <a href="${link}/" class="card">
                    <img src="${link}/cap@min.jpg" class="card-img" alt="${title}">
                    <div class="card-img-overlay">
                        <div class="post-2">
                            <p>${tagTitle}</p>
                            <h4>${title}</h4>
                        </div>
                    </div>
                </a>
            </div>`
}
