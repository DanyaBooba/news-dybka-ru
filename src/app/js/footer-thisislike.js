function HTMLFooterLikePost(link, title) {
	return (
		"<li class='footer--text-li'><a href='" +
		link +
		"' class='footer--text-link'>" +
		title +
		"</a></li>"
	);
}

function RandomInteger(max) {
	return Math.floor(Math.random() * (max - 1));
}

function FooterLikePosts() {
	var footer = document.getElementById("thisislikes");

	if (!footer) return;

	$.getJSON("/js/pages.json", function (data) {
		var pages = data;

		let count = 10;
		var countadded = 0;

		while (!(pages.length <= 0 || countadded >= count)) {
			let index = RandomInteger(pages.length);

			footer.insertAdjacentHTML(
				"beforeend",
				HTMLFooterLikePost(
					new URL(pages[index].link).pathname,
					pages[index].title
				)
			);

			pages.splice(index, 1);

			countadded += 1;
		}
	});
}

FooterLikePosts();
