window.addEventListener("DOMContentLoaded",function(){
    var boxDom = document.getElementById('box');
    var contentListDom = document.getElementsByClassName('banimg')[0];
    var btnDoms = document.getElementsByClassName('btn');
    var left_earDom = document.getElementById('pre');
    var right_earDom = document.getElementById('next');

    var earDoms = document.getElementsByClassName('ear');
    var btnsDom = Array.prototype.slice.call(btnDoms);
    var earsDom = Array.prototype.slice.call(btnDoms);
    var tckDom = document.getElementById('tck');
    var k = 0
    var x = 0
    //通过下方的小按钮控制
    btnsDom.forEach(function(e,i,res){
        e.addEventListener('click',function(e){
            btnsDom.forEach(function(e){
                e.className = e.className.replace(' active',' ');
            });
            contentListDom.style['margin-left'] = -1*i*1097+'px';
            this.className += ' active';
            k = i;
        },false);
    });

    //通过耳朵控制
    left_earDom.addEventListener('click',function(e){
             // alert('上一页');
             k--;
             if( k < 0){
                k = 0;
             };    
             contentListDom.style['margin-left'] = -1*k*1097+'px';
             btnsDom.forEach(function(e){
                 e.className = e.className.replace(' active',' ');
                    });
              btnsDom[k].className += ' active';
    },false);   
        
    right_earDom.addEventListener('click',function(e){
        k++;
        if( k > 5){
            k = 0; 
        };
        contentListDom.style['margin-left'] = -1*1097*k+'px';
        btnsDom.forEach(function(e){
            e.className = e.className.replace(' active',' ');
        });
        btnsDom[k].className += ' active';
             // alert('下一页');
    },false);

    //定时器，通过图片多少来判断 
    function contentTimingHandle(){

        k++;
        if ( k > 5){
            k = 0; 
        contentListDom.style['transition'] = 'none';
        }
        else {
        contentListDom.style['transition'] = 'margin-left 0.6 ease';
        }
        contentListDom.style['margin-left'] = -1*1097*k+'px';
        btnsDom.forEach(function(e){
            e.className = e.className.replace(' active',' ');
        });
        btnsDom[k].className += ' active';
    };

    // banner图 定时器的清除与重置
   var contentTimer = setInterval(contentTimingHandle,2300);
     boxDom.addEventListener('mouseenter',function(e){
        clearInterval(contentTimer,2300);
     },false);

     boxDom.addEventListener('mouseleave',function(e){
        contentTimer = setInterval(contentTimingHandle,2300);
     },false);
      
      var xxkDoms = document.getElementsByClassName('xxks1');
      var fxhDoms = document.getElementsByClassName('fxhover1')[0];
      var xxksDom = Array.prototype.slice.call(xxkDoms);
      var fxhsDom = Array.prototype.slice.call(fxhDoms);
      var j;

        xxksDom.forEach(function(e,i,res){
        e.addEventListener('mouseenter',function(e){
            contentListDom.style['display'] ='block';
            this.className += ' active';
           x = j;
        },false);
    });

        //Banner图Li选项卡控制
     var xxksDoms = document.getElementsByClassName('xxks');
     var fxhover1Doms = document.getElementsByClassName('fxhover1');
     var xxkssDom = Array.prototype.slice.call(xxksDoms);
     var fxhover1Dom =Array.prototype.slice.call(fxhover1Doms);

     xxkssDom.forEach(function(e,i){
      
        e.addEventListener('mouseenter',function(e){  
              xxkssDom.forEach(function(e,i){
      
        fxhover1Dom[i].style.display = 'none';
    
           });
        fxhover1Dom[i].style.display = 'block';
       
    },false);
        e.addEventListener('mouseleave',function(e){  
      
        fxhover1Dom[i].style.display = 'none';
       
    },false);
    });
     //Li选项卡hover后部分控制
      fxhover1Dom.forEach(function(e,i){
      
        e.addEventListener('mouseenter',function(e){  
        fxhover1Dom[i].style.display = 'block';
       
    },false);
        e.addEventListener('mouseleave',function(e){  
      
        fxhover1Dom[i].style.display = 'none';
       
    },false);
    });

},false)