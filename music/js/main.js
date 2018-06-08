$(document).ready(function(){

	$(".topbar-search .search-txt").focus(function()
		{
			// alert(123);
			$(".search-more-menus").show();
			$(this).css("background","#fff");
		})
		.blur(function()
		{
			$(".topbar-search .search-more-menus").hide();
			$(this).css("background","#D8D8D8");
		});

// 轮播图部分；
		var index = 0; //当前对应索引index
	 	var timer;
	    $(".banner-wrampper .banner-explain").find("li").each(function(item)
	    { 
	      $(this).mouseover(function()
	      { 
	      	index = item;
	      	//加延时目的是防抖
	      	clearTimeout(timer);
	      	timer = setTimeout(function(){
	      		changeTo(item);
	      	},150);
	      });
	    });
	    //开启定时器
	    var timer = setInterval(show,3000);

	  // 当鼠标移入时关闭定时器
	    $(".banner-wrampper").mouseenter(function()
	    {
	  			clearInterval(timer);
	    }).css("cursor","pointer"); 
	    $(".banner-wrampper").mouseleave(function()
	    {
	  		timer = setInterval(show,3000);
	    });

	    function show()
  	    { 
  	    	index ++; 
	  	    if(index > $(".banner img").length-1) index = 0;
			changeTo(index);	  	   
  	    }

  	   function changeTo(num)
  	   {
  	   		$(".banner").find("img").removeClass("active").hide().eq(num).fadeIn(200).addClass("active");
		    $(".banner-explain").find("li").removeClass("changeColor").eq(num).addClass("changeColor");
  	   }
// 轮播图结束

/*  	   if($(".auto-next").css("display")=="block"){
  	   		$(".auto-prev").hide();
  	   }else{
  	   		$(".auto-next").show();
  	   }
  	   if($(".auto-prev").css("display")=="block"){
  	   		$(".auto-next").hide();
  	   }else{
  	   		$(".auto-prev").show();
  	   }*/

  	   // console.log($(".auto-next").css("display")=="block");
  	   var timer1;
  	   $('.auto-prev').each(function(){
  	   		$(this).hide();
  	   })
  	   $(".auto-next").each(function(item){
  	   		$(this).click(function(){
   				var marginLeft = parseInt($(".menus-list").eq(item).css("margin-left"));
  	   			clearTimeout(timer1);
  	   			timer1 = setTimeout(function(){
  	   				$(".menus-list").eq(item).animate({
  	   					"margin-left":"+=-1470px",
  	   				},500);
  	   			},300);
  	   			if(marginLeft == -1470){
  	   				$(this).hide();
  	   				$('.auto-prev').eq(item).show();
  	   			}
  	   			
  	   		});
  	   });
		$(".auto-prev").each(function(item){
	  	   		$(this).click(function(){
	  	   			var marginLeft = parseInt($(".menus-list").eq(item).css("margin-left"));
	  	   			clearTimeout(timer1);
	  	   			timer1=setTimeout(function(){
	  	   				$(".menus-list").eq(item).animate({
	  	   					"margin-left":"+=1470px"
	  	   				},500);
	  	   			},300);
	  	   			if(marginLeft == -1470){
	  	   				$(this).hide();
	  	   				$('.auto-next').eq(item).show();
	  	   			}
	  	   		});
	  	   });


// 无缝滚动
		var timer2;
		$(".content-unit-first .next").click(function(){
			// alert(123);
			clearTimeout(timer2);
			timer2=setTimeout(function(){
				scroll();
			},300);
		});
		$(".content-unit-first .prev").click(function(){
			alert(123);
		});


		function scroll()
		{
			$(".scroll-list ul").animate({"margin-left":"-470px"},600,function(){
			    $(".scroll-list ul li:eq(0)").appendTo($(".scroll-list ul"))
			    $(".scroll-list ul").css({"margin-left":0})
			})
		 }
		 var timer3;
	    timer3 = setInterval(scroll,2000)
		$('.content-unit-first').mouseenter(function(){
			clearInterval(timer3);
		}).css("cursor","pointer");
		$(".content-unit-first").mouseleave(function(){
			timer3=setInterval(scroll,3000);
		})

console.log($('.content-vb-box .content-image-txt img'));
// 

		// $(".content-vb-box .content-box-unit").each((item)=>{
		// 	$(this).find('.content-image-txt').each((item)=>{
		// 		$(this).mouseenter(()=>{
		// 			$('.content-vb-box .content-image-txt img').each(function(item){
		// 				$(this).addClass('active');
		// 			})
		// 			$(this).find('img').removeClass("active");
		// 		})
		// 	})  
		// })



		$(".content-vb-box .content-image-txt").each(function(item){
			$(this).mouseenter(function(){
				// alert(123);
				// $(".content-vb-box .content-image-txt").find("img").eq(item).removeClass('active');
				// $(".content-vb-box .content-image-txt img").eq(item).addClass('active');
				// $(".content-vb-box .content-imgae-txt img").toggleClass("active");				
				// $(this).siblings('.content-image-txt img').eq(item).addClass('active');
				$('.content-vb-box .content-image-txt img').each(function(item){
					$(this).addClass('active');
					// $('.content-vb-box .content-image-txt img').eq(item).addClass('active');
				})
				$(this).find('img').removeClass('active');
				// $('.content-vb-box .content-image-txt img').eq(item).removeClass("active");
			})
		})

		// $('.content-vb-box').delegate('.content-box-unit','mouseenter',function(){ 
		//         if(!$(this).attr('.content-vb-box content-image-txt')) {
		//         	$(this).find("img").each((item)=>{
		//         		$(this).removeClass('active');
		//           		$('.content-image-txt img').addClass('active');  
		//         	}); 
		//        	 	// $(this).attr('.content-image-txt',true); 
		//        }
		//     }) 

//
		$(".menus-jp-list").each(function(item){
			$(this).mouseenter(()=>{
				// alert(123);
				$(".hoverBox").eq(item).show();
			}).mouseleave(()=>{
				$(".hoverBox").eq(item).hide();
			});
		})



// 回到顶部
	$(window).scroll(function()
	{	
		$("#goTopBtn").css("bottom","150px");
	    var sc=$(window).scrollTop();
		if(sc>500){
		    $("#goTopBtn").css("display","block");
		}else{
			$("#goTopBtn").css("display","none");
		}
	})
	$("#goTopBtn").click(function()
	{
	    var rheight=$(window).height()
	   $('body,html').animate({scrollTop:0},1000);
	   $("#goTopBtn").animate({bottom:rheight},1000);
	})


});