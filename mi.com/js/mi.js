window.onload=function(){
	var oSites=document.getElementById('sites');
	var oLi=oSites.getElementsByTagName('li');
	var oJsonWrampper=document.getElementById('jsonWrampper');
	var oSiteDroplist=document.getElementById('siteDroplist');
	var oSearch=document.getElementById('search');
	var oSearchList=document.getElementById('searchList');
	var oCategory=document.getElementById('category');
	var aCategoryLi=oCategory.getElementsByTagName('li');
	var oUnitPagew=document.getElementById('unitPageW');
	var oBtn=document.getElementById('btn');
	var oCarouserlList=document.getElementById('carouserlList');
	var oPrev=document.getElementById('Prev');
	var oNext=document.getElementById('Next');
	var oSearchItems=document.getElementById('searchItems');
	console.log(oSearchItems);
	for(var i=1;i<oLi.length;i++){
		oLi[i].onmouseover=function(){
			oJsonWrampper.style.height='220'+'px';
			oJsonWrampper.style.borderTop="1px solid #e0e0e0";
			oJsonWrampper.style.boxShadow="0 2px 5px #e0e0e0";
			oJsonWrampper.style.position="all .5s ease";
		}
		oJsonWrampper.onmouseover=function(){
			oJsonWrampper.style.height='220'+'px';
			oJsonWrampper.style.borderTop="1px solid #e0e0e0";
			// oJsonWrampper.style.boxShadow="0 2px 5px #e0e0e0";

		}	
		oJsonWrampper.onmouseout=function(){
			oJsonWrampper.style.height=0;
			oJsonWrampper.style.borderTop='none';
			oJsonWrampper.style.position="all .5s ease";
		}	
	}
	// search
	oSearch.onfocus=function(){
		oSearchList.style.display='none';
		oSearch.style.border="1px solid #ff6700";
		oSearch.style.borderRight="none";
		oBtn.style.border="1px solid #ff6700";
		oSearchItems.style.display="block";
	}
	oSearch.onblur=function(){
		oSearchList.style.display='block';
		oSearch.style.border="1px solid #e0e0e0";
		oSearch.style.borderRight="none";
		oBtn.style.border="1px solid #e0e0e0";
		oSearchItems.style.display="none";
	}
	//
	for(var i=0;i<aCategoryLi.length;i++){
		aCategoryLi[i].onmouseover=function(){
			oUnitPagew.style.display='block';
		}
		aCategoryLi[i].onmouseout=function(){
			oUnitPagew.style.display='none';
		}
	}
	oPrev.onclick=function(){
		oCarouserlList.style.marginLeft="-1240"+'px';
		oCarouserlList.style.transition="margin-left 1s ease";
	}
	oNext.onclick=function(){
		oCarouserlList.style.marginLeft=0;
		oCarouserlList.style.transition="margin-left 1s ease";
	}
	





}
