/**
 * Created by joke on 2017/8/28 0028.
 */
window.addEventListener('DOMContentLoaded',function(){
    var demo5UlDom = document.getElementsByClassName('demo5-ul')[0];
    var demo5LiDoms =document.getElementsByClassName('demo5-li');

    var demo5Prev = document.getElementsByClassName('demo5-prev')[0];
    var demo5Next = document.getElementsByClassName('demo5-next')[0];
    var layerLeft =document.getElementsByClassName('layer-left')[0];
    var layerRight =document.getElementsByClassName('layer-right')[0];
    var demo5Dom =document.getElementsByClassName('demo5')[0];
    var ulLength = demo5LiDoms.length*140;
    console.log(ulLength);
    var length = 0 ;
    if(length==0){
        demo5Prev.style.display = 'none';
        layerLeft.style.display= 'none';
    }
    demo5Dom.addEventListener('click',function (e) {
        var __target = e.target;
        if(__target.className === 'demo5-next'){
            console.log('点击了右');
            length=geshihua(length);
            length += 980;
            console.log('judge判断后left值'+length);

            demo5UlDom.style.marginLeft = -1*length+'px';
        }
        if(__target.className === 'demo5-prev'){
            console.log('点击了左');
            length=geshihua(length);
            length -= 980;
            console.log('judge判断后left值'+length);
            demo5UlDom.style.marginLeft = -1*length+'px';
        }
        if(length==0){
            demo5Prev.style.display = 'none';
            layerLeft.style.display= 'none';
        }
        else if(length== 1960){
            demo5Next.style.display = 'none';
            layerRight.style.display= 'none';
        }
        else {
            demo5Next.style.display = 'block';
            demo5Prev.style.display = 'block';

            layerLeft.style.display= 'block';
            layerRight.style.display= 'block';
        }
    });

    function geshihua(length) {
        demo5UlDom.style.marginLeft = -1*length+'px';
        length = demo5UlDom.style.marginLeft.replace(/[^0-9]/ig,'');
        console.log(typeof length,length);
        length = parseInt(length);
        return length;
    }
    /*function judge(length,status) {
        // console.log(' 判断 如果len +980 ='+(length+980));
        console.log(length);
           /!* demo5Prev.style.display = 'block';
            var len =(ulLength-length)%980;
            if(len != 0){ //除不尽980说明有有多余且不长于980
                return length + len;
            }else {
                if(status){       //1为右
                    return length + 980;
                }
                else {              //0为左
                    return length - 980;
                }
            }
        if(length == ulLength-980){
            console.log(' 进入'+(length+980));
            demo5Next.style.display = 'none';
        }*!/
           if(status){ //1为右
               if(length){

               }
           }
        }*/


},false);
