function LimitDrag(id)
{
	Drag.call(this,id);
}

for(var i in Drag.prototype)
{
	LimitDrag.prototype[i] = Drag.prototype[i];
}

LimitDrag.prototype.fnMove = function (ev)
{
	var oEvent = ev || window.event;
	var l = oEvent.clientX - this.disX;
	var t = oEvent.clientY - this.disY;
	var r = this.boxDom.offsetWidth - this.oDiv.offsetWidth;
	var b = this.boxDom.offsetHeight - this.oDiv.offsetHeight;
	if(l < 0)
	{
		l = 0;
	}
	else if(l>r)
	{
		l=r;
	}
	if(t < 0)
	{
		t = 0;
	}
	else if(t > b)
	{
		t = b;
	}
	this.oDiv.style.left = l + 'px';
	this.oDiv.style.top = t + 'px';
};