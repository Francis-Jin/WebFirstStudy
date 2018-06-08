function clickIt(e)
{
	window.alert('Button is clickIt');
}

var oBtn = document.getElementById('button');
oBtn.addEventListener('click',clickIt);