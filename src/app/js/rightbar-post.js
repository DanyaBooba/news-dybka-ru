var pages = [
	{
		name: "Русские Карты 2",
		class: "Игры",
		url: "russian-cards-2",
		alt: "Шапка игры Русские Карты 2",
	},
	{
		name: "Babka On The Hunt",
		class: "Игры",
		url: "babka-on-the-hunt",
		alt: "Шапка игры Бабушка На Охоте",
	},
	{
		name: "Sweetness",
		class: "Игры",
		url: "sweetness",
		alt: "Шапка игры Sweetness",
	},
	{
		name: "Запомни Эти Карты",
		class: "Игры",
		url: "remember-these-cards",
		alt: "Шапка игры Запомни Эти Карты",
	},
	{
		name: "Камень Ножницы Бумага",
		class: "Игры",
		url: "rock-paper-scissors",
		alt: "Шапка игры Камень Ножницы Бумага",
	},
	{
		name: "Обзор на макбук 2017 года",
		class: "Техника",
		url: "macbook-2017-review",
		alt: "Макбук 2017 года на столе",
	},
	{
		name: "AirPods Pro — стоит купить?",
		class: "Техника",
		url: "airpods-pro-is-it-worth-the-money",
		alt: "AirPods Pro на черном фоне",
	},
	{
		name: "iPhone Xr",
		class: "Техника",
		url: "the-new-generation-of-the-iphone-xr-device",
		alt: "iPhone Xr на столе",
	},
	{
		name: "iPad mini 4",
		class: "Техника",
		url: "ipad-mini-4-is-an-ambiguous-device",
		alt: "iPad mini 4 на столе",
	},
	{
		name: "MacBook Pro 2014",
		class: "Техника",
		url: "macbook-pro-2014-13-review",
		alt: "Макбук 2014 года на столе",
	},
	{
		name: "Какие макбуки действительно стоит брать?",
		class: "Техника",
		url: "which-macbooks-are-really-worth-getting",
		alt: "Два макбука на столе",
	},
	{
		name: "Опыт использования iPhone 6S",
		class: "Техника",
		url: "experience-using-iphone-6s-for-six-months",
		alt: "iPhone 6S на столе",
	},
	{
		name: "Разница в макбуках за 3 года",
		class: "Техника",
		url: "difference-in-macbooks-for-3-years",
		alt: "Два макбука на столе",
	},
	{
		name: "PHP ЖИВ?",
		class: "Разное",
		url: "php-is-alive",
		alt: "Логотип PHP",
	},
	{
		name: "Как успешно продавать на Б/У рынках",
		class: "Разное",
		url: "how-to-sell-on-buy-markets",
		alt: "Портмоне на фоне ноутбука",
	},
	{
		name: "Общение с клиентами в интернете",
		class: "Разное",
		url: "communication-with-clients-on-the-internet",
		alt: "Открытая почта",
	},
	{
		name: "Б/У рынок: что это, с чем его едят?",
		class: "Разное",
		url: "used-market-what-is-it-with-what-it-is-eaten",
		alt: "Купюры в руке",
	},
	{
		name: "Путь программиста — это трудный путь?",
		class: "Разное",
		url: "the-path-of-a-programmer-is-a-difficult-path",
		alt: "Ноутбук на столе",
	},
	{
		name: "История live.creagoo.ru",
		class: "Разное",
		url: "project-development-history-live-creagoo-ru-its-forced-closure",
		alt: "Фотография логотипа Creagoo",
	},
	{
		name: "С чего я начал изучать программирование",
		class: "Разное",
		url: "how-did-i-start-learning-programming",
		alt: "Открытый исходный код",
	},
	{
		name: "Как я борюсь против выгорания",
		class: "Разное",
		url: "how-i-fight-against-burnout",
		alt: "Девушка выгорела на фото",
	},
	{
		name: "Как я разрабатываю сайты на PHP",
		class: "Разное",
		url: "how-i-develop-websites-in-php",
		alt: "Открытый исходный код",
	},
	{
		name: "Разработка pet-проектов",
		class: "Разное",
		url: "pet-project-development-what-is-it-and-for-what",
		alt: "Открытый исходный код",
	},
];

function AddPost() {
	if (document.getElementById("archivetrue") !== null) return;

	var content = document.getElementById("post--right");

	var name = document.getElementsByTagName("H1")[0].textContent;

	if (content == null) return;

	var cont = true;
	var contid = 0;

	while (cont) {
		if (pages.length <= 0 || contid >= RightCountItems()) {
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
}

function RightCountItems() {
	var len = document.getElementById("post--main").innerHTML.length;

	var count = parseInt(len / 1000 - 1);

	if (count < 0) count = 0;

	if (count > pages.length) count = pages.length;

	if (count > 3) count = 3;

	return count;
}

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
            </div>`
	);
}

AddPost();
