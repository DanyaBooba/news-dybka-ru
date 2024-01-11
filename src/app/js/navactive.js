function ActiveNav() {
	console.log("active");

	let urlpath = new URL(window.location);

	let url = String(urlpath.pathname).split("/");

	switch (url[1]) {
		case "more":
			console.log("more");
			break;

		case "tech":
			console.log("tech");
			break;

		case "updates":
			console.log("updates");
			break;

		case "games":
			console.log("games");
			break;
	}
}

ActiveNav();
