/**
 * Created by king on 9/19/2017.
 */
window.addEventListener("DOMContentLoaded",function(){

    (function () {
        var ils = document.getElementsByClassName('wrapper-il');
        var inners =document.getElementsByClassName('slide-inner');
        var prevBtn =document.getElementById('pre');
        var nextBtn =document.getElementById('next');
        var flag=0;
        var liNum = ils.length;

        //给li标签绑定点击事件
        function clickAddLitsener() {
            for(var i=0; i<ils.length;i++){
                (function (index) {
                    ils[index].onclick=function () {
                        setStatus(index,flag);
                        flag =index;
                    }
                })(i);
            }
        }
        clickAddLitsener();
        //给左右按钮绑定事件
        prevBtn.onclick=previousLi;   //注意不能加括号；！！！！！
        nextBtn.onclick=nextLi;

        var timer = setInterval(nextLi,2000);

        var sliderUnitDom = document.getElementsByClassName('slider-unit')[0];

        //  当鼠标移上banner，清除定时器
        sliderUnitDom.onmouseover=function () {
            clearInterval(timer);
        };
        sliderUnitDom.onmouseout = function () {
            // console.log('鼠标离开banner');
            timer = setInterval(nextLi,2000);
        };

        function setStatus(i,flag) {
            // console.log("初始化"+flag);
            inners[flag].className='slide-inner';
            ils[flag].style.backgroundColor='#e0e0e0';

            // console.log("点击了li"+i);
            inners[i].className='slide-inner show-box';
            ils[i].style.backgroundColor='#222';

        }
        function nextLi() {
            var newFlag = (flag+1)%liNum;
            setStatus(newFlag,flag);
            // console.log("点击了next 这时flag="+newFlag);
            flag= newFlag;
        }
        function previousLi() {
            var oldflag = flag;
            flag = flag || liNum ;
            // console.log("点击了prev 这时flag="+flag);
            flag =(flag-1)%liNum;
            // console.log("newFlag="+newFlag);
            setStatus(flag,oldflag);
            // console.log("点击了prev 这时flag="+flag);
        }
    })();

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
    }


















},false)