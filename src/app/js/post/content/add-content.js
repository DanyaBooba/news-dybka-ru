const AddContentPostTech = () => addContentFromPost('Техника', 'row-tech', 4)
const AddContentPostUpdates = () => addContentFromPost('Проекты', 'row-updates', 2)
const AddContentPostSundry = () => addContentFromPost('Разное', 'row-sundry', 6)
const AddContentPostGames = () => addContentFromPost('Игры', 'row-games', 4)
const AddContentPostMusic = () => addContentFromPost('Музыка', 'row-music', 4)
const AddContentPostSearch = () => addContentFromPost('', 'row-search', -1, true)

function addContentFromPost(tagTitle, rowTitle, maxPosts, isBlockSearch = false) {
	const row = document.getElementById(rowTitle)
	if (!row) return

	const needMaxPosts = row.classList.contains('row-no-need-max-posts')

	$.getJSON('/js/posts.json', function (pages) {
		let countPosts = 0
		pages.forEach(post => {
			if (isBlockSearch) {
				//
				const html = contentHTML({
					tagTitle: tagTitle,
					id: post.id,
					link: new URL(post.link).pathname,
					title: post.title
				})

				row.insertAdjacentHTML('beforeend', html)
				countPosts += 1
			}
			else {
				//
				if (post.class === tagTitle && (countPosts < maxPosts || needMaxPosts)) {
					const html = contentHTML({
						id: post.id,
						link: new URL(post.link).pathname,
						title: post.title
					})

					row.insertAdjacentHTML('beforeend', html)
					countPosts += 1
				}
			}
		})

		typeof setCountPosts === 'function' ? setCountPosts(countPosts) : null
	})
}

function contentHTML({ id, link, title }) {
	return `<div class="col post" id="${id}" title="${title}">
                <a href="${link}/" class="card">
                    <img src="${link}/cap@min.jpg" class="card-img" alt="${title}">
                    <div class="card-img-overlay">
                        <div class="post-2">
                            <h4>${title}</h4>
                        </div>
                    </div>
                </a>
            </div>`
}
