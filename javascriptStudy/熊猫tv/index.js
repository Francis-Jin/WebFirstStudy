window.addEventListener("DOMContentLoaded",function(e){

	var menuSliderDom = document.getElementById('menu-slider');
	var menuDom = document.getElementById('menu');
	var headerTabDoms = document.getElementsByClassName('header-tab');
	var agDoms = document.getElementsByClassName('ag');
	var headerTabsDom = Array.prototype.slice.call(headerTabDoms);
    var agDom = Array.prototype.slice.call(agDoms);
	// menuDom.addEventListener('mouseover',function(e){
	// 	var __target = e.target;
	// 	var sliderLeft = __target.offsetLeft;
	// 	var sliderWidth = __target.offsetWidth;
	// 		console.log(sliderLeft,sliderWidth);
	// 		menuSliderDom.style.transition = 'all 250ms ease-in-out';
	// 		menuSliderDom.style.left =sliderLeft + 'px';
	// 		menuSliderDom.style.width =sliderWidth + 'px';
	// 		__target.style.color = '#fff';
	// })


	headerTabsDom.forEach((e)=>{
		e.addEventListener('mouseover',function(ev){
			var sliderLeft = this.offsetLeft;
			var sliderWidth = this.offsetWidth;
			menuSliderDom.style.transition = 'all 250ms ease-in-out';
			menuSliderDom.style.left = sliderLeft + 'px';
			menuSliderDom.style.width = sliderWidth + 'px';
			agDoms[i].style.color = '#fff';
		},false);
		e.addEventListener('mouseout',function(ev){
			agDoms[i].style.color = '#3c3c3c';
			// agDoms[0].style.background = '#1dd388';
		},false)
		e.onblur = function(){
			// agDoms[0].style.backgroundColor = '#1dd388';
			headerTabDoms[0].style.background = '#1dd388';
			agDoms[0].style.color = '#fff';	
			
		}
	},false);
    agDoms[0].style.color = '#fff';
	var kyeDom = document.getElementById('kye');
	var subDom = document.getElementById('sub');

    kyeDom.onclick = function(){
    	kyeDom.style.width = 150+'px';
    	kyeDom.value = '';
		subDom.style.backgroundPosition = '-86.75px -51px';
    }
    kyeDom.onblur = function(){
    	kyeDom.style.width = 130+'px';
    	kyeDom.value = '搜游戏/主播';
    	subDom.style.backgroundPosition = '-65px -51px';
    }
    
},false);