let techmacbook = false;
let techiphone = false;
let techairpods = false;
let techipad = false;
let updatesspecial = false;
let updatescreagoo = false;

//
// Tags
//

function TagTechMacbook() {
	Tag(techmacbook, "have-macbook", "tag_techmacbook");
	techmacbook = !techmacbook;
}

function TagTechIphone() {
	Tag(techiphone, "have-iphone", "tag_techiphone");
	techiphone = !techiphone;
}

function TagTechIpad() {
	Tag(techipad, "have-ipad", "tag_techipad");
	techipad = !techipad;
}

function TagTechAirpods() {
	Tag(techairpods, "have-airpods", "tag_techairpods");
	techairpods = !techairpods;
}

function TagUpdatesSpecial() {
	Tag(updatesspecial, "update-special", "tag_updatesspecial");
	updatesspecial = !updatesspecial;
}

function TagUpdatesCreagoo() {
	Tag(updatescreagoo, "update-creagoo", "tag_updatescreagoo");
	updatescreagoo = !updatescreagoo;
}

//
// Controller
//

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

	document
		.querySelectorAll(".post-tags button")
		.forEach((item) => item.classList.remove("active"));

	AllCheckFalse();

	let button = document.getElementById(buttonid);
	!active ? button.classList.add("active") : button.classList.remove("active");
}

function AllCheckFalse() {
	techmacbook = false;
	techiphone = false;
	techairpods = false;
	techipad = false;
	updatesspecial = false;
	updatescreagoo = false;
}
