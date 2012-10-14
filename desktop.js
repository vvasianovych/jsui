var desktop = new Object();
desktop.frames = new Array();

function addFrame(frame)
{
	length = desktop.frames.length;
	desktop.frames[length] = frame;
	length++;
	frame.style.zIndex = length;
	document.body.appendChild(frame.box);
	var activateFunction = function(event){activateFrame(event, frame);}
	frame.titleBar.addEventListener('mousedown', activateFunction, false);
}

function activateFrame(event, frame)
{
	length = desktop.frames.length;
	index = desktop.frames.indexOf(frame);	
	for(var i = index; i < length-1; i++)
	{
		var currFrame = desktop.frames[i+1];
		desktop.frames[i] = currFrame;
		currFrame.style.zIndex = i;
	}
	desktop.frames[length-1] = frame;
	frame.style.zIndex = length-1;		
}
