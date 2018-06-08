window.onload=function(){
	var oHeader=document.getElementById('header');
	var oNav=document.getElementById('nav');
	oHeader.onmouseover=function(){
		oNav.style.width="300"+'px';
		oNav.style.right="300"+'px';
		oNav.style.transition="all .3s linear";
	}
}