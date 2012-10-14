function createFrameTitleBarButtons(titleWidth, titleHeight)
{
	var close = createDiv('closeFrameButton', 18, 18);
	close.style.position = 'relative';
	close.style.left = titleWidth - 19;
	close.style.top = 1;
	close.addEventListener('click', closeButton, false);
	return close;
}

function closeButton(event)
{
	alert(1);
}

function createFrame(width, height, top, left) {
	var frame = new Object();
	frame.box = createDiv('box', width, height);
	frame.titleBar = createDiv('title', width-4, 20);
	var closeButton = createFrameTitleBarButtons(width-4, 20);
	frame.titleBar.appendChild(closeButton);
	frame.rootPanel = createDiv('rootPanel', width-4, height-26);
	frame.style = frame.box.style;
	frame.style.position = 'absolute';
	frame.style.top = top+'px';
	frame.style.left = left+'px';	
	frame.box.appendChild(frame.titleBar);
	frame.box.appendChild(frame.rootPanel);
	return frame;
}
