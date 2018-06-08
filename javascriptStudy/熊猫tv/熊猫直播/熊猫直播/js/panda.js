window.addEventListener('DOMContentLoaded',function(){
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
},false)

window.addEventListener('DOMContentLoaded',function(){
    var xhLinkDoms = document.getElementsByClassName('xh-link');
    var xhSbtnDoms = document.getElementsByClassName('xh-sbtn');
    var xhSboxUnits = document.getElementsByClassName('xh-sbox-unit');
    var xhCodeBoxDom = document.getElementsByClassName('xh-code-box')[0];
    var xhIconSecondDom = document.getElementsByClassName('xh-icon-second')[0];
    var xhCodeDom = document.getElementsByClassName('xh-code')[0];
    var xhCodeLinkDom = document.getElementsByClassName('xh-code-link')[0];

    var xhLinksDom = Array.prototype.slice.call(xhLinkDoms);

    xhLinksDom.forEach(function (e,i){
        e.addEventListener('mouseover',function (ev){
            e.style['margin-top'] = -1*52 + 'px';
            if (i<4){
                xhSboxUnits[i].style.border = '1px solid #1DD388';
            }      
        },false);
        e.addEventListener('mouseleave',function (ev){
            e.style['margin-top'] = 0 + 'px';
            
            if (i<4){
                xhSboxUnits[i].style.border = '1px solid #fff';
            }
        },false);
        xhLinkDoms[2].addEventListener('mouseover',function (e){
                xhCodeBoxDom.style.width = '114px';
                xhCodeBoxDom.style.height = '152px'; 
                xhCodeDom.style.width = '94px';
                xhCodeDom.style.height = '94px';
                xhCodeLinkDom.style.width = '94px';
                xhCodeLinkDom.style.height = '28px';
        });
        
        xhLinkDoms[2].addEventListener('mouseleave',function (e){       
                xhCodeBoxDom.style.width = '0px';
                xhCodeBoxDom.style.height = '0px';
                xhCodeDom.style.width = '0px';
                xhCodeDom.style.height = '0px';
                xhCodeLinkDom.style.width = '0px';
                xhCodeLinkDom.style.height = '0px';
        });
    },false);
    xhSbtnDoms[0].addEventListener('click',function (eve){
        scrollTo(0,0);   
    });
},false);

window.addEventListener('DOMContentLoaded',function(e){
            var pdDom = document.getElementById('pd');
            pdDom.onmouseover = function(){
                pdDom.style.transform = 'translate(-10px,0)';
            }
            pdDom.onmouseout = function(){
                pdDom.style.transform = 'translate(0,0)';
            }
        },false);

window.addEventListener('DOMContentLoaded',function(){
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
    /*function judge(length,status) {
        // console.log(' 判断 如果len +980 ='+(length+980));
        console.log(length);
           /!* demo5Prev.style.display = 'block';
            var len =(ulLength-length)%980;
            if(len != 0){ //除不尽980说明有有多余且不长于980
                return length + len;
            }else {
                if(status){       //1为右
                    return length + 980;
                }
                else {              //0为左
                    return length - 980;
                }
            }
        if(length == ulLength-980){
            console.log(' 进入'+(length+980));
            demo5Next.style.display = 'none';
        }*!/
           if(status){ //1为右
               if(length){

               }
           }
        }*/

},false);
// 陈巧巧 start
window.addEventListener("DOMContentLoaded",function(e){

    var menuSliderDom = document.getElementById('menu-slider');
    var menuDom = document.getElementById('menu');
    var headerTabDoms = document.getElementsByClassName('header-tab');
    var agDoms = document.getElementsByClassName('ag');
    var headerTabsDom = Array.prototype.slice.call(headerTabDoms);
    var agDom = Array.prototype.slice.call(agDoms);
    // menuDom.addEventListener('mouseover',function(e){
    //  var __target = e.target;
    //  var sliderLeft = __target.offsetLeft;
    //  var sliderWidth = __target.offsetWidth;
    //      console.log(sliderLeft,sliderWidth);
    //      menuSliderDom.style.transition = 'all 250ms ease-in-out';
    //      menuSliderDom.style.left =sliderLeft + 'px';
    //      menuSliderDom.style.width =sliderWidth + 'px';
    //      __target.style.color = '#fff';
    // })


    headerTabsDom.forEach((e)=>{
        e.addEventListener('mouseover',function(ev){
            var sliderLeft = this.offsetLeft;
            var sliderWidth = this.offsetWidth;
            menuSliderDom.style.transition = 'all 250ms ease-in-out';
            menuSliderDom.style.left = sliderLeft + 'px';
            menuSliderDom.style.width = sliderWidth + 'px';
            agDoms[i].style.color = '#fff';
        },false);
        e.addEventListener('mouseout',function(ev){
            agDoms[i].style.color = '#3c3c3c';
            // agDoms[0].style.background = '#1dd388';
        },false)
        e.onblur = function(){
            // agDoms[0].style.backgroundColor = '#1dd388';
            headerTabDoms[0].style.background = '#1dd388';
            agDoms[0].style.color = '#fff'; 
            
        }
    },false);
    agDoms[0].style.color = '#fff';
    var kyeDom = document.getElementById('kye');
    var subDom = document.getElementById('sub');

    kyeDom.onclick = function(){
        kyeDom.style.width = 150+'px';
        kyeDom.value = '';
        subDom.style.backgroundPosition = '-86.75px -51px';

    }
    kyeDom.onblur = function(){
        kyeDom.style.width = 130+'px';
        kyeDom.value = '搜游戏/主播';
        subDom.style.backgroundPosition = '-65px -51px';
    }
    
},false);
// 陈巧巧 end

window.addEventListener('DOMContentLoaded',function(e){
    var boxDom = document.getElementById('box');
      var unitDoms = document.getElementsByClassName('img');
      var contentListDoms = document.getElementsByClassName('content-list');

      var contentListsDom = Array.prototype.slice.call(contentListDoms);
      var unitsDom = Array.prototype.slice.call(unitDoms);
      var index = 0;
       //触发
       var timer;
      contentListsDom.forEach(function(e,i){
        e.addEventListener('mouseenter',function(e){
          index = i;
          clearTimeout(timer);
          timer = setTimeout(function(){
             unitsDom.forEach(function(e){
              e.style.opacity = '0';
           })
          contentListsDom.forEach(function(e){
            e.className = e.className.replace(' info','');
          });
          unitDoms[index].style.opacity = '1';
          contentListsDom[index].className += ' info';
          },150);
        },false);
      });

   // 轮播
     function auto(){
        index++;
        if(index>unitsDom.length-1){
            index = 0;
        };
        contentListsDom.forEach(function(e){
                e.className = e.className.replace(' info','');
            });
            unitsDom.forEach(function(e){
                e.style.opacity = '0';
            });
            unitDoms[index].style.opacity = '1';
            contentListsDom[index].className += ' info';
     };

     var timer = setInterval(auto,2000);
     boxDom.addEventListener('mouseenter',function(e){
        clearInterval(timer);
     },false);
     boxDom.addEventListener('mouseleave',function(e){
        timer = setInterval(auto,2000);
     },false);
},false);

window.addEventListener('DOMContentLoaded',function(){
    var liDoms = document.getElementsByClassName('action-unit');
    var textDoms = document.getElementsByClassName('text2');

    var lisDom = Array.prototype.slice.call(liDoms);
    var textsDom = Array.prototype.slice.call(textDoms);
    var index = 0;
    liDoms[0].style.height = '73px';
    textDoms[0].style.display = 'block';
    lisDom.forEach(function(e,i){
        e.addEventListener('mouseover',function(e){
            textsDom.forEach(function(e,i){
                e.className = e.className.replace(' info','');
                e.style.display = "none";
                liDoms[i].style.height = '34px';
            });
            textDoms[i].style.display = 'block';
            liDoms[i].style.height = '73px';
             liDoms[i].className += (' info');
        }); 
    },false);

},false);