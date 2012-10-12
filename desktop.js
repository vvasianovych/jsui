var desktop = new Object();
desktop.frames = new Array();
desktop.addFrame = function(frame){
	length = desktop.frames.length;
	desktop.frames[length] = frame;
	length++;
	frame.style.zIndex = length;
}
desktop.activateFrame = function(frame){
	length = desktop.frames.length;
	index = desktop.frames.indexOf(frame);
	for(var i = index; i < length-1; i++){
		var currFrame = desktop.frames[i+1];
		desktop.frames[i] = currFrame;
		currFrame.style.zIndex = i;
	}
	desktop.frames[length-1] = frame;
	frame.style.zIndex = length-1;		
}