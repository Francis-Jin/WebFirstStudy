window.addEventListener('DOMContentLoaded',function(ev){
	var boxDom = document.getElementById('box');
	var unitWrapperDom = document.getElementsByClassName('unit-wrapper')[0];
	var unitDoms = unitWrapperDom.getElementsByClassName('unit');
	var actionDom = document.getElementsByClassName('action')[0];
	var btnDoms = actionDom.getElementsByClassName('btn');
	var unitsDom = Array.prototype.slice.call(unitDoms);
	// console.log(unitsDom);
	var btnsDom = Array.prototype.slice.call(btnDoms);
	var index = 0;
	var timer;
	btnsDom.forEach(function(e,i){
		e.addEventListener('mouseover',function(e){
			index = i;
			clearTimeout(timer);
			timer = setTimeout(function (){
				unitsDom.forEach(function(e){
					e.style.opacity = 0;
				})
				btnsDom.forEach(function(e){
					e.className = e.className.replace(' active','');
				})
				unitsDom[index].style.opacity = 1;
				btnsDom[index].className += ' active';
			},150);
		},false);
	});
	var timer = setInterval(show,2000);
	boxDom.addEventListener('mouseenter',function(){
		clearInterval(timer);
	})
	boxDom.addEventListener('mouseleave',function(){
		timer = setInterval(show,2000);
	})

	function change(index){
			unitsDom.forEach(function(e){
				e.style.opacity = 0;
			})
			btnsDom.forEach(function(e){
				e.className = e.className.replace(' active','');
			})
			unitsDom[index].style.opacity = 1;
			btnsDom[index].className += ' active';
	}
	function show(){
		index++;
		if(index>unitsDom.length-1)index = 0;
		change(index);
	}

},false);