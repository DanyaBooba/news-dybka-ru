function ChangeSize(value) {
	if (value == 0) {
		console.log("Default");
	} else if (value == -1) {
		console.log("-1");
	} else if (value == -2) {
		console.log("-2");
	} else if (value == 1) {
		console.log("+1");
	} else if (value == 2) {
		console.log("+2");
	}
}

ChangeSize(localStorage.getItem("textsize"));
