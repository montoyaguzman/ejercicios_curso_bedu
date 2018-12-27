function onDocumentLoaded() {
	const div = document.getElementById("div_p_root");
	const div2 = document.getElementById("root");
	const root = document.getElementById("root");
}

div.addEventListener("focusout", onClick);
div2.addEventListener("focusout", onClick2);
root.addEventListener("focusout", function() {
	console.log("Click en root");
});

document.addEventListener("focusout", function() {
	console.log("Click en document");
});
window.addEventListener("focusout", function() {
	console.log("Click en window");
});

function onClick(event) {
	this.style.border = "1px solid red";
}	

function onClick2() {
	console.log(0 != '');
}

document.addEventListener("DOMContentLoaded", onDocumentLoaded);