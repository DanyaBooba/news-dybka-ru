let arr = {
	techmacbook: false,
	techiphone: false,
	techairpods: false,
	techipad: false,
	updatesspecial: false,
	updatescreagoo: false,
	sundryneuralnetworks: false,
	sundrymarket: false,
	sundryphp: false,
	sundryprogs: false,
	updatesaquarium: false,
};

//
// Tags
//

function TagTechMacbook() {
	let id = "techmacbook";
	AllCheckFalse(id);
	Tag(arr[id], "have-macbook", "tag_techmacbook");
	arr[id] = !arr[id];
}

function TagTechIphone() {
	let id = "techiphone";
	AllCheckFalse(id);
	Tag(arr[id], "have-iphone", "tag_techiphone");
	arr[id] = !arr[id];
}

function TagTechIpad() {
	let id = "techipad";
	AllCheckFalse(id);
	Tag(arr[id], "have-ipad", "tag_techipad");
	arr[id] = !arr[id];
}

function TagTechAirpods() {
	let id = "techairpods";
	AllCheckFalse(id);
	Tag(arr[id], "have-airpods", "tag_techairpods");
	arr[id] = !arr[id];
}

function TagUpdatesSpecial() {
	let id = "updatesspecial";
	AllCheckFalse(id);
	Tag(arr[id], "update-special", "tag_updatesspecial");
	arr[id] = !arr[id];
}

function TagUpdatesCreagoo() {
	let id = "updatescreagoo";
	AllCheckFalse(id);
	Tag(arr[id], "update-creagoo", "tag_updatescreagoo");
	arr[id] = !arr[id];
}

function TagUpdatesAquarium() {
	let id = "updatesaquarium";
	AllCheckFalse(id);
	Tag(arr[id], "update-aquarium", "tag_updatesaquarium");
	arr[id] = !arr[id];
}

function TagSundryNeuralNetworks() {
	let id = "sundryneuralnetworks";
	AllCheckFalse(id);
	Tag(arr[id], "neural-networks", "tag_sundryneuralnetworks");
	arr[id] = !arr[id];
}

function TagSundryMarket() {
	let id = "sundrymarket";
	AllCheckFalse(id);
	Tag(arr[id], "market", "tag_sundrymarket");
	arr[id] = !arr[id];
}

function TagSundryPhp() {
	let id = "sundryphp";
	AllCheckFalse(id);
	Tag(arr[id], "php", "tag_sundryphp");
	arr[id] = !arr[id];
}

function TagSundryProgs() {
	let id = "sundryprogs";
	AllCheckFalse(id);
	Tag(arr[id], "progs", "tag_sundryprogs");
	arr[id] = !arr[id];
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

	let button = document.getElementById(buttonid);
	!active ? button.classList.add("active") : button.classList.remove("active");
}

function AllCheckFalse(ignore) {
	for (let key in arr) {
		if (key != ignore) arr[key] = false;
	}

	// techmacbook = false;
	// techiphone = false;
	// techairpods = false;
	// techipad = false;
	// updatesspecial = false;
	// updatescreagoo = false;
	// sundryneuralnetworks = false;
	// sundrymarket = false;
	// sundryphp = false;
	// sundryprogs = false;
}
