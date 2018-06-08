window.addEventListener("DOMContentLoaded",function(e){

	var menuSliderDom = document.getElementById('menu-slider');
	var menuDom = document.getElementById('menu');
	var headerTabDoms = document.getElementsByClassName('header-tab');
	var headerTabsDom = Array.prototype.slice.call(headerTabDoms);
	headerTabsDom.forEach((e,i)=>{
		e.addEventListener('mouseover',function(ev){
			var sliderLeft = this.offsetLeft;
			menuSliderDom.style.transition = 'all 250ms ease-in-out';
			menuSliderDom.style.left =sliderLeft + 'px';
		},false);
	});
},false);