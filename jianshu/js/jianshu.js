window.onload=function(){
	var oSearch=document.getElementById('search');
	var oBtn=document.getElementById('btn');
	console.log(oBtn);
	oSearch.onfocus=function(){
		oSearch.style.width="300" +'px';
		oSearch.style.position="all .2s linear";
		oBtn.style.backgroundColor="#969696";
		oBtn.style.color="#fff";
	}
	oSearch.onblur=function(){
		oSearch.style.width="200" +'px';
		oSearch.style.position="all .2s linear";
		oBtn.style.backgroundColor="#eee";
		oBtn.style.color="#979797";
	}
}