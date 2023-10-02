function ChangeSize(value) {
	let content = document.getElementById("post--main");
	let btndefault = document.getElementById("textsizetodefault");

	if (btndefault !== null) btndefault.classList.remove("d-none");

	if (content === null) return;
	ClearChangeSize(content);

	if (value == 0) {
		if (btndefault !== null) btndefault.classList.add("d-none");
	} else if (value == -1) {
		content.classList.add("downtext-1");
	} else if (value == -2) {
		content.classList.add("downtext-2");
	} else if (value == 1) {
		content.classList.add("uptext-1");
	} else if (value == 2) {
		content.classList.add("uptext-2");
	}
}

function TextDown() {
	var value = localStorage.getItem("textsize");

	if (value === null) value = -1;

	if (value < -2 || value > 2) value = 0;

	if (value > -2) value -= 1;

	localStorage.setItem("textsize", value);

	console.log(value);

	ChangeSize(value);
}

function TextUp() {
	var value = localStorage.getItem("textsize");

	if (value === null) value = 1;

	if (value < -2 || value > 2) value = 0;

	if (value < 2) value++;

	localStorage.setItem("textsize", value);

	console.log(value);

	ChangeSize(value);
}

function TextDefault() {
	localStorage.setItem("textsize", 0);

	console.log(0);

	ChangeSize(0);
}

function ClearChangeSize(content) {
	content.classList.remove("uptext-1");
	content.classList.remove("uptext-2");
	content.classList.remove("downtext-1");
	content.classList.remove("downtext-2");
}

ChangeSize(
	localStorage.getItem("textsize") !== null
		? localStorage.getItem("textsize")
		: 0
);
