function createBox(width, height) {
	var box = document.createElement('div');
	box.setAttribute('class', 'frame');
	box.style.width = ''+width+'px';
	box.style.height = ''+height+'px';
	box.style.background = colors.frameBox;
	return box;
}

function createTitleBar(box, width){
	var menubar = document.createElement('div');
	menubar.style.width = (width -4)+'px';
	menubar.style.background = colors.frameTitleBar;
	menubar.setAttribute('class', 'frameTitlebarActive');
	//menubar.setAttribute('id', 'menubar');
	menubar.ondragstart = function(){return false;};
	return menubar;
}

function createRootPanel(box, width, height){
	var rootPanel = document.createElement('div');
	rootPanel.style.width = (width-4)+'px';
	rootPanel.style.height = (height - 26)+'px';
	rootPanel.style.background = colors.frameRootPane;
	//rootPanel.setAttribute('id', 'rootPanel');
	rootPanel.style.position = 'relative';	
	rootPanel.style.top = '4px';
	rootPanel.style.left = '2px';
	return rootPanel;
}

function createFrame(width, height, top, left) {
	var frame = new Object();
	var box = createBox(width, height);
	frame.box = box;
	var titleBar = createTitleBar(box, width);
	var rootPanel = createRootPanel(box, width, height);
	frame.titleBar = titleBar;	
	frame.rootPanel = rootPanel;
	frame.style = frame.box.style;
	frame.show = function(){
		frame.box.appendChild(frame.titleBar);
		frame.box.appendChild(frame.rootPanel);
		document.body.appendChild(frame.box);
		desktop.addFrame(frame);
	}
	box.style.position = 'absolute';
	box.style.top = top+'px';
	box.style.left = left+'px';
	var activator = function(event){
		desktop.activateFrame(frame);
	}
	titleBar.addEventListener('mousedown', activator, false);
	return frame;
}
