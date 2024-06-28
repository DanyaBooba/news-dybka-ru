function ActiveNav() {
	let urlpath = new URL(window.location);

	let url = String(urlpath.pathname).split("/");

	let obj = document.getElementById("nav-" + url[1]);

	if (!obj) return;

	obj.classList.add("active");
}

ActiveNav();
