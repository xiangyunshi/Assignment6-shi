

var ele = document.getElementById('data');
ele.innerHTML =data;

function load() {
	location.reload();
}

function changeColor() {
	var col = document.getElementById("color");
	col.style.backgroundColor = "yellow";
}

function append() {
    var app = document.getElementById("append");
    var text = document.createTextNode("Hello ITE220 "); 
    app.appendChild(text);  
}

function hideOrShow() {
	var e = document.getElementById("Hide-show");
	if (e.style.display== "block") {
		e.style.display = "none";
	} else {
		e.style.display = "block";
	}
}

function mouseOver(obj) {
	obj.innerHTML = "Mouse Over"
}
function mouseOut(obj) {
	obj.innerHTML = "Mouse Out"
}
function mouseUp(obj) {
	obj.innerHTML = "Mouse Up"
}
function mouseDown(obj) {
	obj.innerHTML = "Mouse down"
}

function doubleClick(obj) {
	obj.innerHTML = " Double Click"
}