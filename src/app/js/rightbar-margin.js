function RightBarMargin() {
	let title = document.getElementsByTagName("h1")[0];

	if (!title) return;

	let lines = Math.round(Number(title.offsetHeight) / 48);

	let rightbar = document.getElementById("post--right");

	if (!rightbar) return;

	if (lines > 1) rightbar.classList.add("post--right-margin-" + lines);
}

RightBarMargin();
