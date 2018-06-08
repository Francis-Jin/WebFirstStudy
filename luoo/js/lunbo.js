window.onload = function() {
            var list = document.getElementById('list');
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            function animate(offset) {
                //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
                //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
                var newLeft = parseInt(list.style.left) + offset;
                list.style.left = newLeft + 'px';
                if(newLeft<-2880){
                	list.style.left= -960+'px';
                }
                if(newLeft>-960){
                	list.style.left= -2880+'px';
                }
            }
            prev.onclick = function() {
                animate(960);
            }
            next.onclick = function() {
                animate(-960);
            }
            //开启自动播放
            var timer;
            function play(){
            	timer=setInterval(function(){
            		prev.onclick();
            	},5000);
            }
            play();
            //想看某一张图片时要关闭自动播放(熟称关闭定时器)
            var lunbo=document.getElementById("lunbo");
            function stop(){
            	clearInterval(timer);
            }
            lunbo.onmouseover = stop;
            lunbo.onmouseout = play;
            //实现圆点跟图片对应切换
            var buttons=document.getElementById('buttons').getElementsByTagName('span');
            var index=1;
            function buttonsShow(){
            	for(var i=0;i<buttons.length;i++){
            		if(buttons[i].className == 'on'){
            			buttons[i].className='';
            		}
            	}
            	buttons[index - 1].className='on';
            }
            prev.onclick=function(){
            	index -= 1 ;
            	if(index<1){
            		index=3;
            	}
            	buttonsShow();
            	animate(960);
            }
            next.onclick=function(){
            	index+=1;
            	if(index>3){
            		index=1;
            	}
            	buttonsShow();
            	animate(-960);
            }
            for (var i = 0; i < buttons.length; i++) {
                // 这里使用的是立即执行函数，
                (function(i) {
                    buttons[i].onclick = function() {
                        var clickIndex = parseInt(this.getAttribute('index'));
                        var offset = 960 * (index - clickIndex); 
                        animate(offset);
                        index = clickIndex;
                        buttonsShow();
                    }
                })(i)
            }
       }