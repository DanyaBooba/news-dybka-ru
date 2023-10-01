function ShareTG() {
	window.open(
		"https://telegram.me/share/url?url=" +
			SpecialURL() +
			"&text=" +
			document.title,
		"_blank"
	);
}

function ShareVK() {
	window.open("https://vk.com/share.php?url=" + SpecialURL(), "_blank");
}

function ShareOK() {
	window.open(
		"https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=" +
			SpecialURL(),
		"_blank"
	);
}

function ShareLink() {
	navigator.clipboard.writeText(SpecialURL());
}

function SpecialURL() {
	return "https://news.dybka.ru" + window.location.pathname;
}
