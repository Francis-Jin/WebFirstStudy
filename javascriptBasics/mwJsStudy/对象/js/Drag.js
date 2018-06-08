function Drag (id)
{  
	var _this = this;
// 鼠标在盒子里的位置，
	this.disX = 0;
	this.disY = 0;
	this.boxDom = document.getElementById('boxwramp');
	this.oDiv = document.getElementById(id);
	this.boxDom = document.getElementById('boxwramp');
	this.divDoms = this.boxDom.getElementsByTagName('div');
	this.aDivs = Array.prototype.slice.call(this.divDoms);

	
	function getroundoColor()
	{
		var r = Math.round(Math.random()*255);
		var g = Math.round(Math.random()*255);
		var b = Math.round(Math.random()*255);
		return 'rgb('+r+','+g+','+b+')';
	}
	this.aDivs.forEach((e)=>{
		setInterval(()=>{
			e.style['background'] = getroundoColor();
		},1000);
	})
	
	this.oDiv.onmousedown = function (ev)
	{
		_this.fnDown(ev);
	};

};
Drag.prototype.fnDown = function (ev)
{
	var _this = this;
	var oEvent = ev || window.event;
	this.oDiv.style['z-index'] = 10;
	this.disX = oEvent.clientX - this.oDiv.offsetLeft;
	this.disY = oEvent.clientY - this.oDiv.offsetTop;
	
	document.onmousemove = function (ev)
	{
		_this.fnMove(ev);
	};
	document.onmouseup = function (ev)
	{
		_this.fnUp(ev);
	};
};

Drag.prototype.fnMove = function (ev)
{
	var oEvent = ev || window.event;
	
	this.oDiv.style.left = oEvent.clientX - this.disX+'px';
	this.oDiv.style.top = oEvent.clientY - this.disY+'px';
};

Drag.prototype.fnUp = function (ev)
{
	this.oDiv.style['z-index'] = 1;
	document.onmousemove = null;
	document.onmouseup = null;
};