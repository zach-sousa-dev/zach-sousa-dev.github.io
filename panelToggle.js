var rawElements = document.querySelectorAll(".item");

for(let i = 0; i < rawElements.length; i++) {
	rawElements[i].querySelector(".item-title").addEventListener("click", function(event) {
		rawElements[i].querySelector(".item-content").classList.toggle("hidden")
	});
}