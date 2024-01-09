function RandomInteger(max) {
	return Math.floor(Math.random() * (max - 1));
}

function RightHTML(block) {
	return (
		`<div class="col post">
            <a href="/` +
		block["url"] +
		`/" class="card card--link card--rounded border-0">
                <img src="/` +
		block["url"] +
		`/cap@min.jpg" class="card-img" alt="` +
		block["title"] +
		`">
                <div class="card-img-overlay card--bg-gradient d-flex">
                    <div class="d-flex mt-auto flex-column">
                        <p class="card-subtitle">
                            ` +
		block["class"] +
		`
                        </p>
                        <p class="card-title text-white card--title card--title-mini">
                            ` +
		block["title"] +
		`
                        </p>
                    </div>
                </div>
            </a>
            </div>`
	);
}

$.getJSON("/js/pages.json", function (data) {
	var pages = data;

	if (document.getElementById("archivetrue") !== null) return;

	var content = document.getElementById("post--right");

	var name = document.getElementsByTagName("H1")[0].textContent;

	if (content == null) return;

	var cont = true;
	var contid = 0;

	var len = document.getElementById("post--main").innerHTML.length;

	var count = parseInt(len / 1000 - 1);

	if (count < 0) count = 0;

	if (count > pages.length) count = pages.length;

	if (count > 3) count = 3;

	while (cont) {
		if (pages.length <= 0 || contid >= count) {
			cont = false;
			break;
		}

		var index = RandomInteger(pages.length);

		var block = pages[index];

		pages.splice(index, 1);

		if (name === block["name"]) continue;

		contid += 1;

		content.insertAdjacentHTML("beforeend", RightHTML(block));
	}
});
