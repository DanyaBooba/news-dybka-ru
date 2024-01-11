function ActiveNav() {
	console.log("active");

	let url = new URL(window.location);

	console.log(url.pathname);
}

ActiveNav();
