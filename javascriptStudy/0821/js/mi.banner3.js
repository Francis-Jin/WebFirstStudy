window.addEventListener("DOMContentLoaded",function(e){
	var boxDom = document.getElementById('box');
	var contentListDom = document.getElementsByClassName('content-list')[0];
	var btnDoms = document.getElementsByClassName('btn');
	var earDoms = document.getElementsByClassName('ear');
	var index = 0;


	//
	/*console.log(typeof btnDoms);
	console.log(Object.prototype.toString.call(btnDoms));*/
	/*var btnsDom = Array.of(...btnDoms);
	console.log(btnsDom);*/
	var btnsDom = Array.prototype.slice.call(btnDoms);
	// console.log(btnsDom);
	// e是遍历出来的每一个元素，i是元素的索引，res是整个数组
	btnsDom.forEach(function(e,i,res){
		e.addEventListener('click',function(e){
			btnsDom.forEach(function(e){
				// e.className = e.className.replace(/\sactive/ig,'');//正则方法
				e.className = e.className.replace(' active','');
			},false);
			contentListDom.style['margin-left'] = -1*i*296+'px';
			this.className += ' active';
		},false);
	},false);

	earDoms[0].addEventListener('click',function(e){
		btnsDom.forEach(function(e){
			// e.className = e.className.replace(/\sactive/ig,'');//正则方法
			e.className = e.className.replace(' active','');
		},false);
		index--;
		if(index < 0) index = 0;
		contentListDom.style['margin-left'] = -1*index*296+'px';
		btnsDom[index].className += ' active';
	},false);
	earDoms[1].addEventListener('click',function(e){
		btnsDom.forEach(function(e){
			// e.className = e.className.replace(/\sactive/ig,'');//正则方法
			e.className = e.className.replace(' active','');
		},false);
		index++;
		if(index > 2)index = 2;
		contentListDom.style['margin-left'] = -1*index*296+'px';
		btnsDom[index].className += ' active';
	},false);



	function show(e){
		index++;
		if(index > 2){
			index = 0;
			contentListDom.style['transition'] = 'none';
		}else{
			contentListDom.style['transition'] = 'margin-left .6s ease';
		}
		btnsDom.forEach(function(e){
			// e.className = e.className.replace(/\sactive/ig,'');//正则方法
			e.className = e.className.replace(' active','');
		},false);
		contentListDom.style['margin-left'] = -1*index*296+'px';
		btnsDom[index].className += ' active';
	}

	var timer = setInterval(show,1000);
	// mouseover mouseenter
	boxDom.addEventListener('mouseenter',function(e){
		clearInterval(timer);
	},false);
	// mouseout mouseleave
	boxDom.addEventListener('mouseleave',function(e){
		timer = setInterval(show,1000);
	},false);


},false);
