function clearText(thisText) {
	let text = thisText.toLowerCase();

	text = text.replaceAll(" ", "");
	text = text.replaceAll(".", "-");
	text = text.replaceAll("«", "");
	text = text.replaceAll("»", "");

	return text;
}

function addLinkToTitle() {
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;

    document.querySelectorAll("#post--main h2, #post--main h3, #post--main h4, #post--main h5, #post--main h6")
        .forEach(title => {
			title.id = clearText(title.textContent);
			title.innerHTML += " <a class='hash' href='#" + title.id + "'>" + svg + "</a>";
		});
}

addLinkToTitle();
