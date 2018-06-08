/**
 * Created by king on 9/19/2017.
 */
window.addEventListener("DOMContentLoaded",function(){


//返回顶部
    var fhDom = document.getElementById('fhdb');
    var timer = null;
    var isTop = true;

    window.onscroll = function(){
        var toTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(toTop >= 1000){
            fhDom.style.display = 'block';
        }else{
            fhDom.style.display = 'none';
        }
        if(!isTop){

            clearInterval(timer);
        }
        isTop = false;

    }

    fhDom.onclick = function(){
        timer = setInterval(function(){
            var toTop = document.documentElement.scrollTop || document.body.scrollTop;
            var speed = Math.floor(-toTop / 6);
            document.documentElement.scrollTop = document.body.scrollTop = toTop + speed;
            isTop =true;
            if(toTop == 0){
                clearInterval(timer);
            }
        },30);
    };

    (function () {
        var hdDoms = document.getElementsByClassName('hd-list');
        var tableDoms = document.getElementsByClassName('timetable');
        var hdsDom = Array.prototype.slice.call(hdDoms);
        var tablesDom = Array.prototype.slice.call(tableDoms);
        hdsDom.forEach(function(e,i) {
            e.addEventListener('click', function () {
                var index = i;
                hdsDom.forEach(function (e, i) {
                    e.className = e.className.replace(' active', '');
                });
                hdDoms[index].className += ' active';
                tablesDom.forEach(function (e, i) {
                    e.className = e.className.replace(' info', '');
                });
                tableDoms[index].className += ' info';
            });
        });
    })();


    (function () {
        var shouboDom = document.getElementsByClassName('jing');
        var conulDom =document.getElementsByClassName('jing-ul');
        var leftDom = document.getElementsByClassName('pre');
        var rightDom = document.getElementsByClassName('next');
        var shoubosDom = Array.prototype.slice.call('shouboDom');
        var index=1;
        var len=parseInt(5500/1350);
        // leftDom.style.display='none';
        var leftDoms = Array.prototype.slice.call(leftDom);
        function run(index,i){
            shouboDom[i].addEventListener('mouseenter',function(ev){
                if(index==1){
                    rightDom[i].style.display="block";
                    leftDoms[i].style.display='none';
                }else if(index==len){
                    rightDom[i].style.display="none";
                    leftDoms[i].style.display='block';
                }else{
                    rightDom[i].style.display="block";
                    leftDoms[i].style.display='block';
                }
            },false)
            shouboDom[i].addEventListener('mouseleave',function(ev){
                rightDom[i].style.display="none";
                leftDoms[i].style.display='none';
            },false)
            // 运行run时就先判断当前的index  来隐藏或者显示左右箭头
            rightDom[i].addEventListener('click',function(e){
                leftDom[i].style.display="block";  //点击右键头后一定能点击左箭头
                index++;
                if(index>len){
                    index=len;
                }
                if (index == len) {
                    rightDom[i].style.display="none";
                }else{
                    rightDom[i].style.display="block";
                }
                conulDom[i].style.marginLeft = -1*(index-1)*1370+'px';
            },false)
            leftDom[i].addEventListener('click',function(e){
                rightDom[i].style.display="block"; //同理
                console.log(index);
                index--;
                if(index<1){
                    index=1;
                }
                if (index == 1) {
                    leftDom[i].style.display="none";
                }else{
                    leftDom[i].style.display="block";
                }
                conulDom[i].style.marginLeft = -1*(index-1)*1370+'px';
            },false)
        }
        run(index,0);
    })()

},false);