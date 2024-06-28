function checkCountPosts() {
	const block = document.getElementById("getcountposts");
	if (!block) return;

	let countPosts = document.querySelectorAll("div.post:not(.d-none)").length;
	block.textContent = `записей: ${countPosts}`
}

function setCountPosts(countPosts) {
	let block = document.getElementById("getcountposts");
	if (!block) return;

	block.textContent = `записей: ${countPosts}`
}

checkCountPosts();
