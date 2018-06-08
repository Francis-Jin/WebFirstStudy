window.addEventListener('DOMContentLoaded',function(ev){
/*陈巧巧*/
	var menuSliderDom = document.getElementById('menu-slider');
	var menuDom = document.getElementById('menu');
	var headerTabDoms = document.getElementsByClassName('header-tab');
	var agDoms = document.getElementsByClassName('ag');
	var headerTabsDom = Array.prototype.slice.call(headerTabDoms);
    var agDom = Array.prototype.slice.call(agDoms);
	headerTabsDom.forEach((e,i)=>{
		e.addEventListener('mouseover',function(ev){
			var sliderLeft = this.offsetLeft;
			var sliderWidth = this.offsetWidth;
			menuSliderDom.style.transition = 'all 250ms ease-in-out';
			menuSliderDom.style.left = sliderLeft + 'px';
			menuSliderDom.style.width = sliderWidth + 'px';
			agDoms[i].style.color = '#fff';
			agDom[0].style.color = '#3c3c3c';
		},false);
		e.addEventListener('mouseout',function(ev){
			var sliderWidth = this.offsetWidth;
			menuSliderDom.style.width = sliderWidth + 'px';
			agDoms[i].style.color = '#3c3c3c';
			menuSliderDom.style.left = 0;
			agDom[0].style.color = '#fff';
		},false)
	},false);
	var kyeDom = document.getElementById('kye');
	var subDom = document.getElementById('sub');
    kyeDom.onclick = function(){
    	kyeDom.style.width = 212+'px';
    	kyeDom.style.transition = 'all .3s linear'
    	kyeDom.value = '';
		subDom.style.backgroundPosition = '-86.75px -51px';
    }
    kyeDom.onblur = function(){
    	kyeDom.style.width = 130+'px';
    	kyeDom.value = '搜游戏/主播';
    	subDom.style.backgroundPosition = '-65px -51px';
    }
/*陈巧巧*/
/*金安双*/
	var playerVideoRDom = document.getElementsByClassName('player-video-r')[0];
	var styleVideoArrowDom = document.getElementsByClassName('style-video-arrow')[0];
	var shadeDoms = document.getElementsByClassName('shade');
	var smallPicLinkDoms = playerVideoRDom.getElementsByTagName('a');
	var videoSrc = document.getElementById('videoSrc');
	var playconDom = document.getElementById('play-con');//播放暂停；
	var fullscreenDom = document.getElementById('fullscreen');//全屏播放；
	var volumeiconDom = document.getElementById('volume-icon');//是否静音
	// console.log(volumeiconDom);
	var asDom = Array.prototype.slice.call(smallPicLinkDoms);
	var shadesDom = Array.prototype.slice.call(shadeDoms);
	var videoSrcs = ['video/1.mp4','video/2.mp4','video/3.mp4','video/4.mp4','video/5.mp4'];
	asDom.forEach(function(e,i,res){
		e.addEventListener('click',function(ev){
			// alert(123);
			shadesDom.forEach(function(e){
				e.className = ' pic-item';
			})
			var top = this.offsetTop;
			styleVideoArrowDom.style.top = top + 'px';
			styleVideoArrowDom.style.transition = 'top .2s linear';
			shadesDom[i].className = shadesDom[i].className.replace(' pic-item','');
			videoSrc.src = videoSrcs[i];
		},false);
	});
	playconDom.addEventListener('click',function(ev){
		// alert(123);
		if(videoSrc.paused){
			playconDom.style.background = "url('img/icon.png') no-repeat -67px -7px";
			videoSrc.play();
			playconDom.addEventListener('mouseover',function(ev){
				playconDom.style.background = "url('img/icon.png') no-repeat -97px -7px";
			},false);
			playconDom.addEventListener('mouseout',function(ev){
				playconDom.style.background = "url('img/icon.png') no-repeat -67px -7px";
			},false);

		}else{
			playconDom.style.background = "url('img/icon.png') no-repeat -6px -7px";
			videoSrc.pause();
			playconDom.addEventListener('mouseover',function(ev){
				playconDom.style.background = "url('img/icon.png') no-repeat -37px -7px";
			},false);
			playconDom.addEventListener('mouseout',function(ev){
				playconDom.style.background = "url('img/icon.png') no-repeat -6px -7px";
			},false);
		}
	},false);
	fullscreenDom.addEventListener('click',function(ev){
			videoSrc.webkitEnterFullscreen();
			return false;
	},false);
	volumeiconDom.addEventListener('click',function(ev){
		// alert(123);
		videoSrc.muted = !videoSrc.muted;
	},false);
/*金安双*/

/*4*/
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

/*4*/
/*5*/
	var demo5UlDom = document.getElementsByClassName('demo5-ul')[0];
	var demo5LiDoms =document.getElementsByClassName('demo5-li');

	var demo5Prev = document.getElementsByClassName('demo5-prev')[0];
	var demo5Next = document.getElementsByClassName('demo5-next')[0];
	var layerLeft =document.getElementsByClassName('layer-left')[0];
	var layerRight =document.getElementsByClassName('layer-right')[0];
	var demo5Dom =document.getElementsByClassName('demo5')[0];
	var ulLength = demo5LiDoms.length*140;
	console.log(ulLength);
	var length = 0 ;
	if(length==0){
	    demo5Prev.style.display = 'none';
	    layerLeft.style.display= 'none';
	}
	demo5Dom.addEventListener('click',function (e) {
	    var __target = e.target;
	    if(__target.className === 'demo5-next'){
	        console.log('点击了右');
	        length=geshihua(length);
	        length += 980;
	        console.log('judge判断后left值'+length);

	        demo5UlDom.style.marginLeft = -1*length+'px';
	    }
	    if(__target.className === 'demo5-prev'){
	        console.log('点击了左');
	        length=geshihua(length);
	        length -= 980;
	        console.log('judge判断后left值'+length);
	        demo5UlDom.style.marginLeft = -1*length+'px';
	    }
	    if(length==0){
	        demo5Prev.style.display = 'none';
	        layerLeft.style.display= 'none';
	    }
	    else if(length== 1960){
	        demo5Next.style.display = 'none';
	        layerRight.style.display= 'none';
	    }
	    else {
	        demo5Next.style.display = 'block';
	        demo5Prev.style.display = 'block';

	        layerLeft.style.display= 'block';
	        layerRight.style.display= 'block';
	    }
	});

	function geshihua(length) {
	    demo5UlDom.style.marginLeft = -1*length+'px';
	    length = demo5UlDom.style.marginLeft.replace(/[^0-9]/ig,'');
	    console.log(typeof length,length);
	    length = parseInt(length);
	    return length;
	}
/*5*/
/*6*/
	  var listDoms = document.getElementsByClassName('stars-list');
	  var leftDoms =document.getElementsByClassName('btn-left');
	  var rightDoms = document.getElementsByClassName('btn-right');
	  var listUnitDoms = document.getElementsByClassName('list-unit');
	  var listsUnitDom = Array.prototype.slice.call('listUnitDoms');
	  console.log(listUnitDoms);
	  var len=(listUnitDoms.length/4);
	  console.log(len);
	  console.log(111);
	  var index= 4;
	  function yuan(index){   	
	  	rightDoms[0].addEventListener('click',function(e){
	  		index++;
	  		if(index>len){
	  			index=len;
	  		}
	  	listDoms[0].style.marginLeft = -1*(index-1)*980+'px';	
	  	console.log(index); 
	  },false)  		
	 	   leftDoms[0].addEventListener('click',function(e){
	      console.log(index);
	 	   	index--; 	
	  	console.log(222);
	  	listDoms[0].style.marginLeft = -1*index*980+'px';
	  	if(index<1){
	 	   		index=1;
	 	    	 }
	  },false)
	  }
	yuan(index); 
/*6*/














},false);
