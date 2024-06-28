function randomMax(max) { return Math.floor(Math.random() * (max - 1)) }
const rightbarUrl = data => (new URL(data)).pathname
const min = (a, b) => a < b ? a : b
const max = (a, b) => a > b ? a : b

$.getJSON("/js/pages.json", function (pages) {
	if (document.getElementById("archivetrue") !== null) return

	const content = document.getElementById("post--right")
	if (content == null) return

	const countWords = document.getElementById("post--main").innerHTML.length
	const countPostsMax = max(0, min(min(3, pages.length), parseInt(countWords / 1000 - 1)))

    let countPosts = 0
    const titleName = document.querySelector('h1').textContent

	while (pages.length > 0 && countPosts < countPostsMax) {
        const randomIndex = randomMax(pages.length)
		const currentPost = pages[randomIndex]
		pages.splice(randomIndex, 1)

		if (titleName === currentPost.name) continue

        const currentCard = rightbarHTML({
            link: currentPost.link,
            title: currentPost.title,
            className: currentPost.class
        })

		content.insertAdjacentHTML("beforeend", currentCard)
		countPosts += 1
	}
})

function rightbarHTML({ link, title, className }) {
	return `<div class="col post">
            <a href="${rightbarUrl(link)}/" class="card">
                <img src="${rightbarUrl(link)}/cap@min.jpg" class="card-img" alt="${title}">
                <div class="card-img-overlay">
                    <div class="post-mini">
                        <p>${className}</p>
                        <h4>${title}</h4>
                    </div>
                </div>
            </a>
        </div>`
}
