window.addEventListener("DOMContentLoaded",function(){
	var ulDom = document.getElementsByClassName('box-bottom')[0];
	var liDoms = document.getElementsByTagName('li');
	var lisDom = Array.prototype.slice.call(liDoms);
	var txtDoms = document.getElementsByClassName('txt');
	var conDoms = document.getElementsByClassName('con');
	var txtsDom = Array.prototype.slice.call(txtDoms);
	var consDom = Array.prototype.slice.call(conDoms);
	lisDom.forEach(function(e,i){
		e.addEventListener('mouseenter',function(e){
			lisDom.forEach(function(e,i){
				e.className = '';
			})
			txtsDom.forEach(function(e){
				e.className = e.className.replace(' active','');
			})
			consDom.forEach(function(e){
				e.className = e.className.replace(' active','');//把原有的active去除；
				e.className += ' active';
			})
			lisDom[i].className +=' sel';
			txtsDom[i].className += ' active';
			consDom[i].className = consDom[i].className.replace(' active','');
		},false);
	});
},false);