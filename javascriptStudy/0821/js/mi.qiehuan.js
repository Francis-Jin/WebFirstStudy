window.addEventListener('DOMContentLoaded',function(e){
	var oBoxDom = document.getElementById('box');
	var contentListDom = document.getElementsByClassName('content-list');
	var btnDoms = document.getElementsByClassName('btn');
	var earDoms = document.getElementsByClassName('ear');
	var btnsDom = Array.prototype.slice.call(btnDoms);
	var index = 0;
	btnsDom.forEach(function(e,i,res){
		e.addEventListener('click',function(e){
			btnsDom.forEach(function(e){
				e.className = e.className.replace('active','');
			});
			contentListDom[0].style['margin-left'] = -1*i*296+'px';
			this.className += ' active';
			index++;
		},false);
	}) 
	var earsDom = Array.prototype.slice.call(earDoms);
	earsDom[0].addEventListener('click',function(e){
		index--;
		if(index<0){
			index = 0;
		}
		btnsDom.forEach(function(e){
				e.className = e.className.replace('active','');
			});
		contentListDom[0].style['margin-left'] = -1*index*296+'px';
		btnsDom[index].className += ' active';
	},false);
	earsDom[1].addEventListener('click',function(e){
		index++;
		if(index>2){
			index = 2;
		}
		btnsDom.forEach(function(e){
				e.className = e.className.replace('active','');
			});
		contentListDom[0].style['margin-left'] = -1*index*296+'px';
		btnsDom[index].className += ' active';

	},false);
	function show(){
		// index++;
		btnsDom.forEach(function(e){
				e.className = e.className.replace('active','');
			});
		contentListDom[0].style['margin-left'] = -1*index*296+'px';
		in dex++;
		if(index>2){
			index=0;
			// contentListDom[0].style.transition = 'none';
		}/*
		else{
			contentListDom[0].style.transition = 'margin-left .6s ease';
		}*/
		// index++;
		btnsDom[index].className += ' active';
	}
	var contentTimer = setInterval(show,1000);
	oBoxDom.addEventListener('mouseover',function(e){
		clearInterval(contentTimer);
	},false);
	oBoxDom.addEventListener('mouseout',function(e){
		contentTimer = setInterval(show,1000);
	},false);


},false);