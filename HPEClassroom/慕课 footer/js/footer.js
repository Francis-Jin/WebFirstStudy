window.addEventListener('DOMContentLoaded',function(ev){
    var fhDom = document.getElementById('fhdb');
    var Height = document.documentElement.clientHeight|| document.body.scrollTop;
    var timer = null;
    var isTop = true;
    window.onscroll = function(){
        if(!isTop){
            clearInterval(timer);
        }
        isTop = false;
    }
    fhDom.addEventListener('click',function(){
        timer = setInterval(function(){
            var gdTop = document.documentElement.scrollTop || document.body.scrollTop;
            var speed = Math.round(-gdTop / 5);
            document.documentElement.scrollTop = document.body.scrollTop = gdTop + speed;
            isTop =true;
            if(gdTop == 0){
                clearInterval(timer);
            }
        },50);
    },false);
},false);