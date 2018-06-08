window.addEventListener("DOMContentLoaded",function(e){//当网页加载完成后
	//获取包裹整个轮播场景的盒子
	var boxDom = document.getElementById('box');
	// 通过类名获取元素
	var unitWrampDom = document.getElementsByClassName('unit-wrapper')[0];//这里的[0]指向的是类名为unit-wrapper的第一个元素；

	//获取类名为action元素
	var actionDom = document.getElementsByClassName('action')[0];
	//获取类名为unit-wrapper这个元素下面所有类名为unit的子元素；(每一张图片)
	var unitDoms = unitWrampDom.getElementsByClassName('unit');
	var btnDoms = actionDom.getElementsByClassName('btn');
	var preDom = document.getElementById('pre');
	var nextDom = document.getElementById('next');
	var unitsDom = Array.prototype.slice.call(unitDoms);
	var btnsDom = Array.prototype.slice.call(btnDoms);
	var index = 0;
	// console.log(unitsDom);
	// console.log(btnsDom);
	btnsDom.forEach(function(e,i,res){
		e.addEventListener('click',function(e){
			unitsDom.forEach(function(e){
				e.style['opacity'] = 0;
			})
			btnsDom.forEach(function(e){
				e.className = e.className.replace('active','');
			})
			unitsDom[i].style['opacity'] = 1;
			this.className += ' active';
			index = i;
		},false);
	});

	preDom.addEventListener('click',function(e){
		unitsDom.forEach(function(e){
			e.style['opacity'] = 0;
		})
		btnsDom.forEach(function(e){
			e.className = e.className.replace('active','');
		})
		index--;
		if(index < 0) index = unitsDom.length-1;
		unitsDom[index].style['opacity'] = 1;
		btnsDom[index].className += ' active';
	},false);

	nextDom.addEventListener('click',function(e){
		index++;
		unitsDom.forEach(function(e){
			e.style['opacity'] = 0;
		})
		btnsDom.forEach(function(e){
			e.className = e.className.replace('active','');
		})
		if(index > unitsDom.length-1) index = 0;
		unitsDom[index].style['opacity'] = 1;
		btnsDom[index].className += ' active';
	},false);

	function show(){
		index++;
		if(index > unitsDom.length-1) index = 0;
		unitsDom.forEach(function(e){
			e.style['opacity'] = 0;
		})
		btnsDom.forEach(function(e){
			e.className = e.className.replace('active','');
		})
		unitsDom[index].style['opacity'] = 1;
		btnsDom[index].className += ' active';
	}
 	var timer = setInterval(show,2000);
 	boxDom.addEventListener('mouseover',function(e){
 		clearInterval(timer);
 	},false);
 	boxDom.addEventListener('mouseout',function(e){
 		timer = setInterval(show,2000);
 	},false);

},false);