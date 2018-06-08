window.addEventListener('DOMContentLoaded',function(ev){
    var  oSearchText = document.getElementById('text');
    oSearchText.addEventListener('focus',function(ev){
        this.style['background'] = '#fff';
        this.style.width = '130px';
        this.style['transition'] = 'all .5s linear';
    },false);
    oSearchText.addEventListener('blur',function(ev){
        this.style['background'] = '#EDEDED';
        this.style.width = '70px';
        this.style['transition'] = 'all .5s linear';
    },false);

    var asideDom = document.getElementById('aside');
    var asideDomTop = asideDom.offsetTop;
    document.addEventListener('scroll',function(){
        var scrollTop = document.body.scrollTop;
        // console.log(asideDomTop,scrollTop);
        if(asideDomTop<scrollTop){
            asideDom.className = 'aside active';
        }else{
            asideDom.className = 'aside';
        }
    },false);















},false);