window.addEventListener("DOMContentLoaded",function(e){
	var ulDom = document.getElementsByClassName('box-bottom')[0];
	var txtallDom = document.getElementById('txtall');
	var imgtxtDom = document.getElementById('imgtxt');
	ulDom.addEventListener('mouseover',function(e,target){
		var oEvent = e || window.event;
		var target = oEvent.target || oEvent.srcElement;
		while(target !== ulDom){
			if(target.nodeName.toLowerCase() === 'li'){
				var FCCN=target.firstElementChild.className;
				var LCCN=target.lastElementChild.className;
				target.className += ' sel';
				FCCN += ' active';
				LCCN = LCCN.replace('active',''); 
				break;
			}
			target = target.parentNode;
		}
	},false);
	ulDom.addEventListener('mouseout',function(e,target){
		var oEvent = e || window.event;
		var target = oEvent.target || oEvent.srcElement;
		while(target !== ulDom){
			if(target.nodeName.toLowerCase() === 'li'){
				var FCCN=target.firstElementChild.className;
				var LCCN=target.lastElementChild.className;
				target.className = target.className.replace(' sel','');
				FCCN += ' active';
				LCCN = LCCN.replace('active',''); 
				break;
			}
			target = target.parentNode;
		}
	},false);
},false);