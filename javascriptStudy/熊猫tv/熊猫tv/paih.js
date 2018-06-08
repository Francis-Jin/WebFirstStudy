window.addEventListener('DOMContentLoaded',function(){
	var actionListDom = document.getElementsByClassName('action-list')[0];
	var liDoms = actionListDom.getElementsByTagName('li');
	var text1Doms = actionListDom.getElementsByClassName('text1');
	var text2Doms = actionListDom.getElementsByClassName('text2');
	var lisDom = Array.prototype.slice.call(liDoms);
	console.log(lisDom);
	var txt1sDom = Array.prototype.slice.call(text1Doms);
	var txt2sDom = Array.prototype.slice.call(text2Doms);
	lisDom.forEach(function(e,i){
		e.addEventListener('mouseenter',function(e){
			lisDom.forEach(function(e,i){
				e.className = '';
			})
			txt1sDom.forEach(function(e){
				e.className = e.className.replace(' active','');
			})
			txt2sDom.forEach(function(e){
				e.className = e.className.replace(' active','');//把原有的active去除；
				e.className += ' active';
			})
			lisDom[i].className +=' into';
			txt1sDom[i].className += ' active';
			txt2sDom[i].className = txt2sDom[i].className.replace(' active','');
		},false);
	},false);

},false);