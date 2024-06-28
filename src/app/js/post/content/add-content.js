const AddContentPostTech = () => addContentFromPost('Техника', 'row-tech')
const AddContentPostUpdates = () => addContentFromPost('Проекты', 'row-updates')
const AddContentPostSundry = () => addContentFromPost('Разное', 'row-sundry')
const AddContentPostGames = () => addContentFromPost('Игры', 'row-games')
const AddContentPostMusic = () => addContentFromPost('Музыка', 'row-music')

function addContentFromPost(tagTitle, rowTitle) {
	const row = document.getElementById(rowTitle)
	if (!row) return

	$.getJSON('/js/pages.json', function (pages) {
		let countPosts = 0
		pages.forEach(post => {
			if (post.class === tagTitle) {
                const html = contentHTML({
                    tagTitle : tagTitle,
					id: post.id,
					link: new URL(post.link).pathname,
					title: post.title
                })

				row.insertAdjacentHTML('beforeend', html)
				countPosts += 1
			}
		})

		typeof setCountPosts === 'function' ? setCountPosts(countPosts) : null
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
