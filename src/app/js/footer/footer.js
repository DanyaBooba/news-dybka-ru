const randomMax = max => Math.floor(Math.random() * (max - 1))
const footerFavoritePostContent = (link, title) => `<li class='footer--text-li'><a href='${link}' class='footer--text-link'>${title}</a></li>`

function footerFavoritePost() {
	const footer = document.getElementById("thisislikes")
	if (!footer) return

	$.getJSON("/js/pages.json", function (pages) {
		let countMaxPosts = 10
		let countAdd = 0

		while (pages.length > 0 && countAdd < countMaxPosts) {
            const randomIndexPost = randomMax(pages.length)
            const currentPostUrl = new URL(pages[randomIndexPost].link).pathname
            const currentPostTitle = pages[randomIndexPost].title
            const currentPost = footerFavoritePostContent(currentPostUrl, currentPostTitle)

			footer.insertAdjacentHTML("beforeend", currentPost)

			pages.splice(randomIndexPost, 1)
			countAdd += 1
		}
	})
}

footerFavoritePost()
