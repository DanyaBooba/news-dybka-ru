var pages = [
	{
		name: "Название поста",
		class: "Игры",
		url: "sweetness",
		alt: "Шапка игры Sweetness",
	},
	{
		name: "Название поста",
		class: "Игры",
		url: "sweetness",
		alt: "Шапка игры Sweetness",
	},
	{
		name: "Название поста",
		class: "Игры",
		url: "sweetness",
		alt: "Шапка игры Sweetness",
	},
];

function AddPost() {
	var content = document.getElementById("post--right");

	if (content == null) return;

	var count_items = 3;

	if (count_items > pages.length) count_items = pages.length;

	for (var i = 0; i < count_items; i++) {
		var index = 0;

		var block = pages[index];

		pages.splice(index, 1);

		var htmlblock =
			`<div class="col pb-3 mb-sm-0">
            <a href="/` +
			block["url"] +
			`/" class="card card--link card--rounded border-0">
                <img src="/` +
			block["url"] +
			`/cap.jpg" class="card-img" alt="` +
			block["alt"] +
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
			block["name"] +
			`
                        </p>
                    </div>
                </div>
            </a>
            </div>`;

		content.insertAdjacentHTML("beforeend", htmlblock);
	}
}

AddPost();
