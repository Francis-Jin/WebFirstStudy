window.addEventListener('DOMContentLoaded',function(ev){
	var playerVideoRDom = document.getElementsByClassName('player-video-r')[0];
	var styleVideoArrowDom = document.getElementsByClassName('style-video-arrow')[0];
	var shadeDoms = document.getElementsByClassName('shade');
	var smallPicLinkDoms = playerVideoRDom.getElementsByTagName('a');
	var videoSrc = document.getElementById('videoSrc');
	var playconDom = document.getElementById('play-con');//播放暂停；
	var fullscreenDom = document.getElementById('fullscreen');//全屏播放；
	var volumeiconDom = document.getElementById('volume-icon');//是否静音
	console.log(volumeiconDom);
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



















},false);
