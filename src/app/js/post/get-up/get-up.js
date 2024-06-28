const buttonUp = document.getElementById("about-up");

window.addEventListener("scroll", () => {
	if (window.pageYOffset > 250) {
		buttonUp.classList.remove("about-up-dontsee");
		buttonUp.classList.add("about-up-see");
	} else {
		buttonUp.classList.add("about-up-dontsee");
		buttonUp.classList.remove("about-up-see");
	}
});
