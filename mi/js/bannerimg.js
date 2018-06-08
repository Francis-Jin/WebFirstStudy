	var oBannerImgBox=document.getElementById('bannerImgBox');
	var oImg=oBannerImgBox.getElementsByClassName('bannerImg');
	var oPrevNext=document.getElementById('prevNext');
	var oPrev=oPrevNext.getElementsByTagName('a')[0];
	var oNext=oPrevNext.getElementsByTagName('a')[1];
	oImg[2].style.zIndex=3;
	for(var i=1;i<oImg.length;i++){
		var index=i;
		oPrev.onclick=function(){
			alert('开玩笑的，不会回上一张哦^_^!');
		}
		oNext.onclick=function(){
			alert('开玩笑的，不会跳到下一张哦^_^!');
		}
	}