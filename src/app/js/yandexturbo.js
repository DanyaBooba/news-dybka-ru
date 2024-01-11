function YandexTurbo() {
	let block = document.querySelectorAll(
		".post--main h1, .post--main img, .post--main h2, .post--main h3, .post--main h4, .post--main h5, .post--main h6, .post--main p"
	);

	let newblock = "";

	block.forEach((el) => {
		let d = el.outerHTML;
		d = d.replaceAll(/(\r\n|\n|\r)/gm, "");
		newblock += d;
	});

	newblock = newblock.replaceAll(/(\r\n|\n|\r)/gm, "");
	newblock = newblock.replaceAll('"', "'");

	console.log(newblock);

	navigator.clipboard.writeText(newblock);
}

YandexTurbo();
