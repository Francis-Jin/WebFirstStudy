$(document).ready(function (ev) {
    var $contentListsDom = $('.content-lists');
    var $btni = $("button[type='button'] .kw-sh-btn");
    var $dropdowMenu = $('.dropdown-menu li a');
    var $inputText = $("input[type='text']");
    $btni.css('color','#fff');
    var $FYlist = $(".pagination li");
    var _index=0;
    $FYlist.eq(_index).addClass('disabled');
    $dropdowMenu.click(function () {
        var $text=$(this).text();
        // console.log($text);
        $btni.text($text);
        $keyValue = $btni.text();

    });
    $FYlist.click(function (ev) {
        _index=$(this).children('a').text();
        var kw=$(".kw-sh-btn").text();
        if(kw === '筛选') kw="";
        $(this).addClass('active').siblings().removeClass('active');
        $.ajax({
            url:'http://www.walkerup.com/essays/essaylist',
            data:{
                kw:kw,
                pageNow:$(this).children('a').text(),
                pageNum:'3'
            },
            success:function (res) {
                paintData(res);
            }
        })
console.log($(this).children('a').text(),$FYlist.eq(0));
        if(_index>1)
        {
            $FYlist.eq(0).removeClass('disabled');
        }
        else
        {
            $FYlist.eq(0).addClass('disabled');
        }
        if(_index>4)
        {
            $FYlist.eq(6).addClass('disabled');
        }
        else{
            $FYlist.eq(6).removeClass('disabled');
        }
    })
    $(document).keydown(function (ev) {
        if(ev.keyCode==13)
        {
            $.ajax({
                method:'GET',
                data:'kw='+$keyValue+'&pageNow=0&pageNum=3',
                url:'http://www.walkerup.com/essays/essaylist',
                success:function (res) {
                    paintData(res);
                }
            });
            $FYlist.eq(1).addClass('active').siblings().removeClass('active');
        }
    })
    $.ajax({
        method:'GET',
        data:'pageNow=0&pageNum=3',
        url:'http://www.walkerup.com/essays/essaylist',
        success:function (res) {
            paintData(res);
        }
    });
    function paintData(res) {
        var html;
        res.forEach(function (e,i){
            html +=`
							<li class="content-unit">
							<a href="javascript:void(0);" class="cover">
								<img class="img-thumbnail" src="${e.img}">
							</a>
							<div class="essay-wrampper">
								<a href="javascript:void(0);" class="title">${e.title}</a>
								<div class="meta">
									<span class="lable label-info">${e.category}</span>
									<span>·</span>
									<a class="entry-author" href="javascript:void(0);">${e.author}</a>
									<span>·</span>
									<span>${e.time}</span>
								</div>
								<p class="subscribe">${e.subscribe}</p>
							</div>
						</li>

					`;
        });
        $contentListsDom.html(html);
    };
})