window.addEventListener("DOMContentLoaded",function(e){
	var contentListDom = document.getElementsByClassName('content-list')[0];
	var leftEar = document.getElementById('left-ear');
	var rightEar = document.getElementById('right-ear');
	// 下一张图片，右边耳朵
	rightEar.addEventListener('click',function(e){
		var firstEle = contentListDom.firstElementChild;
		firstEle.style.marginLeft = -1*296+"px";
		setTimeout(function(){
			firstEle.style.marginLeft = 0;
			contentListDom.appendChild(firstEle);
		},600);
	},false);
	// 上一张图片，左边耳朵
	leftEar.addEventListener('click',function(e){
		var lastEle = contentListDom.lastElementChild;
		var firstEle = contentListDom.firstElementChild;
		contentListDom.insertBefore(lastEle,firstEle);
		lastEle.style.marginLeft = -1*296+'px';
		setTimeout(function(){
			firstEle.style.marginRight = 0;
			lastEle.style.marginLeft = 0;
		});
	},false);









},false);