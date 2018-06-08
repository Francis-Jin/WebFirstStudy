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