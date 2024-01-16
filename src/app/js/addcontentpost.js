function AddContentPostTech() {
	AddContentPost("Техника", "row-tech");
}

function AddContentPostUpdates() {
	AddContentPost("Проекты", "row-updates");
}

function AddContentPostSundry() {
	AddContentPost("Разное", "row-sundry");
}

function AddContentPostGames() {
	AddContentPost("Игры", "row-games");
}

function AddContentPostMusic() {
	AddContentPost("Музыка", "row-music");
}

function AddContentPost(classname, rowclass) {
	let row = document.getElementById(rowclass);

	if (!row) return;

	$.getJSON("/js/pages.json", function (pages) {
		let count = 0;
		pages.forEach((element) => {
			if (element.class === classname) {
				let html = HTMLContentPost(
					classname,
					element.id,
					new URL(element.link).pathname,
					element.title
				);

				row.insertAdjacentHTML("beforeend", html);
				count += 1;
			}
		});

		if (typeof AddCountPostsCount === "function") {
			AddCountPostsCount(count);
		}
	});
}

function HTMLContentPost(classname, id, link, title) {
	let data =
		'<div class="col post" id="' +
		id +
		'"><a href="' +
		link +
		'/" class="card">';

	data +=
		'<img src="' +
		link +
		'/cap@min.jpg" class="card-img" alt="' +
		title +
		'"><div class="card-img-overlay">';

	data += '<div class="post-2"><p>' + classname + "</p>";

	data += "<h4>" + title + "</h4>";

	data += "</div></div></a></div>";

	return data;
}
