var rawElements = document.querySelectorAll(".item");

for (let i = 0; i < rawElements.length; i++) {
	rawElements[i].querySelector(".item-title").addEventListener("click", function(event) {
		rawElements[i].querySelector(".item-content").classList.toggle("hidden")
		console.log(rawElements[i].querySelector(".item-content"));
		if (rawElements[i].querySelector(".item-content").className.includes("hidden")) {
			rawElements[i].querySelector(".item-title").querySelector(".arrow").setAttribute('src', 'images/down.svg');
		} else {
			rawElements[i].querySelector(".item-title").querySelector(".arrow").setAttribute('src', 'images/left.svg');
		}
	});
}