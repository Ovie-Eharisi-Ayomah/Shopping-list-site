var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");



function inputLength() {
	return input.value.length;
}

function createListElement() {
	var div = document.createElement("div");
	var li = document.createElement("li");
	var delButton = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	div.appendChild(li);
	ul.appendChild(div);
	delButton.appendChild(document.createTextNode("Delete"));
	div.appendChild(delButton);
	input.value = "";
	li.addEventListener("click", function() {
		li.classList.toggle("done");
	})
	delButton.addEventListener("click",function() {
		div.remove(li);
	})
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

