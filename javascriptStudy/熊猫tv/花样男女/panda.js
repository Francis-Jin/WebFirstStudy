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