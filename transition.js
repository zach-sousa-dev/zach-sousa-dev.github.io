var red;

var indexTrigger;

var topOffset = 50;
var movementSpeed = 1;
var waitTime = 1;

function removeRed() {
	if(topOffset < 150) {
		console.log(red);
		topOffset += movementSpeed;
		red.style.top = topOffset + '%';
	}
}

window.addEventListener("load", event => {
	red = document.getElementById("transition");
	indexTrigger = document.getElementById("index-trigger");
	
	setInterval(removeRed, waitTime);
});

//I didn't like this thusly am not using it.