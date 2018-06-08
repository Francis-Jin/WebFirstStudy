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