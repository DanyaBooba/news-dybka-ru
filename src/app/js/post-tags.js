let techmacbook = false;

function TagTechMacbook() {
	Tag(techmacbook, "have-macbook", "tag_techmacbook");

	techmacbook = !techmacbook;
}

function Tag(active, itemid, buttonid) {
	document.querySelectorAll(".col.post").forEach((item) => {
		if (active) {
			item.classList.remove("d-none");
		} else {
			if (item.id === itemid) {
				item.classList.remove("d-none");
			} else {
				item.classList.add("d-none");
			}
		}
	});

	let button = document.getElementById(buttonid);
	!active ? button.classList.add("active") : button.classList.remove("active");
}
