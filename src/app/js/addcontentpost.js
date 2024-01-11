function AddContentPostTech() {
	console.log("Tech");
}

function AddContentPostUpdates() {
	AddContentPost("Проекты", "row-updates");
}

function AddContentPostSundry() {
	console.log("Sundry");
}

function AddContentPostGames() {
	console.log("Games");
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

		AddCountPostsCount(count);
	});
}

function HTMLContentPost(classname, id, link, title) {
	let data =
		'<div class="col post" id="' +
		id +
		'"><a href="' +
		link +
		'/" class="card card--link card--rounded border-0">';

	data +=
		'<img src="' +
		link +
		'/cap.jpg" class="card-img" alt="' +
		title +
		'"><div class="d-flex card-img-overlay card--bg-gradient">';

	data +=
		'<div class="d-flex mt-auto flex-column card--title-2-padding"><p class="card-subtitle">' +
		classname +
		"</p>";

	data +=
		'<p class="card-title text-white card--title card--title-2">' +
		title +
		"</p>";

	data += "</div></div></a></div>";

	return data;
}
