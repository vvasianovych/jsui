
function createDiv(divClass, width, height){
	var div = document.createElement('div');
	div.setAttribute('class', divClass);
	div.style.width = width+'px';
	div.style.height = height+'px';
	div.ondragstart = function() { return false; };
	return div;
}

