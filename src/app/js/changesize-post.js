function ChangeSize(value) {
	let content = document.getElementById("post--main");
	let btndefault = document.getElementById("textsizetodefault");

	let btndiff = document.getElementById("textsizediff");
	let btnup = document.getElementById("textsizeup");

	if (!content) return;

	if (btndefault) btndefault.classList.remove("d-none");
	if (btnup) btnup.removeAttribute("disabled");
	if (btndiff) btndiff.removeAttribute("disabled");

	ClearChangeSize(content);

	switch (Number(value)) {
		case 0:
			if (btndefault !== null) btndefault.classList.add("d-none");
			break;

		case 1:
			content.classList.add("uptext-1");
			break;

		case 2:
			btnup.setAttribute("disabled", "");
			content.classList.add("uptext-2");
			break;

		case -1:
			content.classList.add("downtext-1");
			break;

		case -2:
			btndiff.setAttribute("disabled", "");
			content.classList.add("downtext-2");
			break;

		default:
			console.log("value: " + value);
			break;
	}
}

function TextDown() {
	var value = Number(
		localStorage.getItem("textsize") ? localStorage.getItem("textsize") : 0
	);

	value = Math.max(-2, value - 1);

	localStorage.setItem("textsize", Number(value));

	ChangeSize(value);
}

function TextUp() {
	var value = Number(
		localStorage.getItem("textsize") ? localStorage.getItem("textsize") : 0
	);

	value = Math.min(2, value + 1);

	localStorage.setItem("textsize", Number(value));

	ChangeSize(value);
}

function TextDefault() {
	localStorage.setItem("textsize", 0);

	ChangeSize(0);
}

function ClearChangeSize(content) {
	["uptext-1", "uptext-2", "downtext-1", "downtext-2"].forEach((el) =>
		content.classList.remove(el)
	);
}

ChangeSize(
	localStorage.getItem("textsize") !== null
		? localStorage.getItem("textsize")
		: 0
);
