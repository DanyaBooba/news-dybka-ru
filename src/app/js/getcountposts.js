function FormOfWord(num, form1, form2, form3) {
	num = Math.abs(num) % 100;
	let num_x = num % 10;

	if (num > 10 && num < 20) return form3;
	if (num_x > 1 && num_x < 5) return form2;
	if (num_x === 1) return form1;

	return form3;
}

function AddCountPosts() {
	let block = document.getElementById("getcountposts");

	if (!block) return;

	let count = document.querySelectorAll("div.post:not(.d-none)").length;

	block.textContent =
		count + " " + FormOfWord(count, "запись", "записи", "записей");
}

function AddCountPostsCount(count) {
	let block = document.getElementById("getcountposts");

	if (!block) return;

	block.textContent =
		count + " " + FormOfWord(count, "запись", "записи", "записей");
}

AddCountPosts();
