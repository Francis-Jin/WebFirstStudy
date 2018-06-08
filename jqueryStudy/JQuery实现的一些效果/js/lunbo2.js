$(function(){
	var curIndex = 0; //当前index
	     //  alert(imgLen);
	     // 定时器自动变换2.5秒每次
	  var autoChange = setInterval(function(){ 
	    if(curIndex < $(".imgList li").length-1){ 
	      curIndex ++; 
	    }else{ 
	      curIndex = 0;
	    }
	    //调用变换处理函数
	    changeTo(curIndex); 
	  },2500);
	 
	  $(".indexList").find("li").each(function(item){ 
	    $(this).hover(function(){ 
	      clearInterval(autoChange);
	      setTimeout(changeTo(item),6000);
	      curIndex = item;
	    },function(){ 
	      autoChange = setInterval(function(){ 
	        if(curIndex < $(".imgList li").length-1){ 
	          curIndex ++; 
	        }else{ 
	          curIndex = 0;
	        }
	        //调用变换处理函数
	        changeTo(curIndex); 
	      },2500);
	    });
	  });
	  function changeTo(num){ 
	    $(".imgList").find("li").removeClass("imgOn").hide().eq(num).fadeIn().addClass("imgOn");
	    $(".infoList").find("li").removeClass("infoOn").eq(num).addClass("infoOn");
	    $(".indexList").find("li").removeClass("indexOn").eq(num).addClass("indexOn");
	  }
});