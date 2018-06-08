$(document).ready(function(){
     var slideBox = $(".slideBox");
     var imgDoms = slideBox.find("img")//获取所有的img；
     var spanDoms = slideBox.find(".spanBox span"); //获取所有span元素         
      //注意分号 和逗号的用法
     var timer = null;
     var index = 0;                    
     //每个span绑定click事件，完成切换颜色和动画，以及读取参数值
     spanDoms.on("click",function (){
         $(this).addClass("active").siblings("span").removeClass("active");
         index=$(this).index();//当前span元素的索引值赋给index;
         $imgDoms().addClass('opacity1').siblings("img").removeClass("opacity1").animate({
                "opacity":1,    //img标签的动画为透明度变为完全不透明；
            });
     });

     //左右按钮的控制效果    top(是否停止所有加入对列的动画，是否完成当前动画);
     // trigger()方法触发被选元素的指定事件类型 规定被选元素要触发的事件
     $(".next").stop(true,true).click(function (){
         index++;
         if(index==spanDoms.length){index=0};
         spanDoms.eq(index).trigger("click");
         });
    $(".prev").stop(true,true).click(function (){
        index--;
        if(index==spanDoms.length){index=0};
        spanDoms.eq(index).trigger("click");
        });
    //定时器的使用，自动开始
    timer = setInterval(function (){
        index++;
        if(index==spanDoms.length){index=0};
        spanDoms.eq(index).trigger("click");
        },2000);
    //hover事件完成悬停和，左右图标的动画效果
    slideBox.hover(function(){
        $(".next,.prev").animate({
            "opacity":1,
            },200);
        clearInterval(timer);
        },function(){
            $(".next,.prev").animate({
                "opacity":0.5,
                },500);
        timer = setInterval(function (){
        index++;
        if(index==spanDoms.length){index=0};
        spanDoms.eq(index).trigger("click");
        },2000);
            })
    
})