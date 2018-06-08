/**
 * Created by king on 9/25/2017.
 */
$(document).ready(function (ev) {
    //header
    var $searchTxtDom = $('.search-kuang');
    var $searchLink = $('.search-link');
    var $contentUnit = $('.content-unit');
    var $moreList = $('.more-list');
    $searchTxtDom.focus(function (ev) {
        $searchLink.hide();
        $(this).css('border-bottom','1px solid #D81E06');
    }).blur(function (ev) {
        $searchLink.show();
        $(this).css('border-bottom','1px solid #707070');
    })
    $contentUnit.hover(function (ev) {
        $(this).find('.more-list').slideDown();
    },function (ev) {
        $(this).find('.more-list').slideUp();
    })

//    side floor
    var $sideFloor = $('.side-nav-wrampper');
    var $Floor = $('.floor');
    var h1=$Floor.eq(0).offset().top;
    var h2=$Floor.eq(1).offset().top;
    var h3=$Floor.eq(2).offset().top;
    var h4=$Floor.eq(3).offset().top;
    var h5=$Floor.eq(4).offset().top;
    var h6=$Floor.eq(5).offset().top;
    var h7=$Floor.eq(6).offset().top;
    var h8=$Floor.eq(7).offset().top;
    var h9=$Floor.eq(8).offset().top;
    var h10=$Floor.eq(9).offset().top;
    var h11=$Floor.eq(10).offset().top;
    console.log(h1,h2,h3,h4,h5,h6,h7,h8,h9,h10,h11);
    var $lis=$('.side-nav-list .side-unit');
    var flag=false;
    document.addEventListener("mousewheel", function (e) {
        console.log('滚动鼠标了')
        if(flag) return;
        flag=true;
        var change=0;
        var screenHeight=$(window).height();
        var $scrollTop = $(document.body).scrollTop()
        console.log($scrollTop);
        change=e.deltaY>0?screenHeight:-screenHeight;
        var h=$scrollTop+change;
        h1>=$scrollTop+h1?$sideFloor.slideUp():$sideFloor.slideDown();
        $(document.body).animate({scrollTop:h},500, function () {
            flag=false;
        });
        if($scrollTop>=h1 && $scrollTop<h2){
            $lis.eq(0).addClass('acitve').siblings().removeClass('acitve');
        }
        if($scrollTop>=h2 && $scrollTop<h3){
            $lis.eq(1).addClass('acitve').siblings().removeClass('acitve');
        }
        if($scrollTop>=h3 && $scrollTop<h4){
            $lis.eq(2).addClass('acitve').siblings().removeClass('acitve');
        }
        if($scrollTop>=h4 && $scrollTop<h5){
            $lis.eq(3).addClass('acitve').siblings().removeClass('acitve');
        }
        if($scrollTop>=h5 && $scrollTop<h6){
            $lis.eq(4).addClass('acitve').siblings().removeClass('acitve');
        }
        if($scrollTop>=h6&& $scrollTop<h7){
            $lis.eq(5).addClass('acitve').siblings().removeClass('acitve');
        }
        if($scrollTop>=h7&& $scrollTop<h8){
            $lis.eq(6).addClass('acitve').siblings().removeClass('acitve');
        }
        if($scrollTop>=h8&& $scrollTop<h9){
            $lis.eq(7).addClass('acitve').siblings().removeClass('acitve');
        }
        if($scrollTop>=h9 && $scrollTop<h10){
            $lis.eq(8).addClass('acitve').siblings().removeClass('acitve');
        }
        if($scrollTop>=h10 && $scrollTop<h11){
            $lis.eq(9).addClass('acitve').siblings().removeClass('acitve');
        }
        if($scrollTop>=h11){
            $lis.eq(10).addClass('acitve').siblings().removeClass('acitve');
        }
    });

    $lis.eq(0).click(function () {
        $(this).addClass('acitve').siblings().removeClass('acitve');
        $(document.body).animate({scrollTop:h1},500);
    });
    $lis.eq(1).click(function () {
        $(this).addClass('acitve').siblings().removeClass('acitve');
        $(document.body).animate({scrollTop:h2},500);
    });
    $lis.eq(2).click(function () {
        $(this).addClass('acitve').siblings().removeClass('acitve');
        $(document.body).animate({scrollTop:h3},500);
    });
    $lis.eq(3).click(function () {
        $(this).addClass('acitve').siblings().removeClass('acitve');
        $(document.body).animate({scrollTop:h4},500);
    });
    $lis.eq(4).click(function () {
        $(this).addClass('acitve').siblings().removeClass('acitve');
        $(document.body).animate({scrollTop:h5},500);
    });
    $lis.eq(5).click(function () {
        console.log($(this));
        $(this).addClass('acitve').siblings().removeClass('acitve');
        $(document.body).animate({scrollTop:h6},500);
    });
    $lis.eq(6).click(function () {
        $(this).addClass('acitve').siblings().removeClass('acitve');
        $(document.body).animate({scrollTop:h7},500);
    });
    $lis.eq(7).click(function () {
        $(this).addClass('acitve').siblings().removeClass('acitve');
        $(document.body).animate({scrollTop:h8},500);
    });
    $lis.eq(8).click(function () {
        $(this).addClass('acitve').siblings().removeClass('acitve');
        $(document.body).animate({scrollTop:h9},500);
    });
    $lis.eq(9).click(function () {
        $(this).addClass('acitve').siblings().removeClass('acitve');
        $(document.body).animate({scrollTop:h10},500);
    });
    $lis.eq(10).click(function () {
        $(this).addClass('acitve').siblings().removeClass('acitve');
        $(document.body).animate({scrollTop:h11},500);
    });
})
