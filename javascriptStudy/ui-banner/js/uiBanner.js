window.addEventListener("DOMContentLoaded",function(e){//当网页加载完成后
	//获取包裹整个轮播场景的盒子
	var boxDom = document.getElementById('box');

	// 通过类名获取元素
	var unitWrapperDom = document.getElementsByClassName('unit-wrapper')[0];//这里的[0]指向的是类名为unit-wrapper的第一个元素；

	//获取类名为unit-wrapper这个元素下面所有类名为unit的子元素；(每一张图片)
	var unitDoms = unitWrapperDom.getElementsByClassName('unit');

	//获取类名为action元素
	var actionDom = document.getElementsByClassName('action')[0];

	//获取类名为action这个元素下面所有类名为btn的子元素；(每个小圆点)
	var btnDoms = actionDom.getElementsByClassName('btn');

	//获取id名为pre和next的元素 (左耳和右耳)
	var preDom = document.getElementById('pre');
	var nextDom = document.getElementById('next');

	//将unitDoms和btnDoms转为数组对象；
	var unitsDom = Array.prototype.slice.call(unitDoms);
	var btnsDom = Array.prototype.slice.call(btnDoms);

	//定义一个索引名为index 赋值为 0；
	var index = 0;

	//点击小圆点时使得图片切换，因为有多个小圆点，这里我们用循环来遍历每一个小圆点
	btnsDom.forEach(function(e,i){//这里e指的是遍历出来的每一个元素，i是这个元素的索引值
		e.addEventListener('click',function(e){//当每一个小圆点点击时
			btnsDom.forEach(function(e){
				e.className  = e.className.replace(' active','');//点击时让当前个元素去掉active这个类名；
			});
			unitsDom.forEach(function(e){
				e.style.opacity = 0;//点击时让当前这个元素的透明度从1变为0(0表示完全透明，1表示完全不透明)；
			});
			unitDoms[i].style.opacity = 1;//让当前元素的透明度(opacity)由0变到1；
			btnsDom[i].className += ' active';//让点击的校园添加一个类名（active）；
			index = i;//让遍历的e的索引值赋值给index;
		},false);
	});

	// 右耳点击时
	nextDom.addEventListener('click',function(e){
		index++;
		if(index>unitsDom.length-1)index=0;//判断索引值是否大于我们的图片总个数；若大于了，就把图片的索引值index赋值为0，使得它跳到第一张图片;
		btnsDom.forEach(function(e){
			e.className  = e.className.replace(' active','');//点击时让当前个元素去掉active这个类名；
		});
		unitsDom.forEach(function(e){
			e.style.opacity = 0;//点击时让当前这个元素的透明度从1变为0(0表示完全透明，1表示完全不透明)；
		});
		unitDoms[index].style.opacity = 1;//让当前索引值对应的元素的透明度(opacity)由0变到1；
		btnsDom[index].className += ' active';//让点当前索引值对应的元素的小圆点添加一个类名（active）；
	});
	//左耳点击时
	preDom.addEventListener('click',function(e){
		index--;
		if(index<0)index=unitsDom.length-1;//判断索引值是否小于0；若小于了，就把图片的索引值index赋值为图片的总个数，使得它跳到最后一张图片;
		btnsDom.forEach(function(e){
			e.className  = e.className.replace(' active','');//点击时让当前个元素去掉active这个类名；
		});
		unitsDom.forEach(function(e){
			e.style.opacity = 0;//点击时让当前这个元素的透明度从1变为0(0表示完全透明，1表示完全不透明)；
		});
		unitDoms[index].style.opacity = 1;//让当前索引值对应的元素的透明度(opacity)由0变到1；
		btnsDom[index].className += ' active';//让点当前索引值对应的元素的小圆点添加一个类名（active）；
	});
	//自动播放
	//定义一个自动播放函数，
	function AutomaticallyRound(){
		index++;
		if(index>unitsDom.length-1)index=0;//判断索引值是否大于我们的图片总个数；若大于了，就把图片的索引值index赋值为0，使得它跳到第一张图片;
		btnsDom.forEach(function(e){
			e.className  = e.className.replace(' active','');//点击时让当前个元素去掉active这个类名；
		});
		unitsDom.forEach(function(e){
			e.style.opacity = 0;//点击时让当前这个元素的透明度从1变为0(0表示完全透明，1表示完全不透明)；
		});
		unitDoms[index].style.opacity = 1;//让当前索引值对应的元素的透明度(opacity)由0变到1；
		btnsDom[index].className += ' active';//让点当前索引值对应的元素的小圆点添加一个类名（active）；
	};

	var timer = setInterval(AutomaticallyRound,2000);//没过两秒钟切换下一张图片；
	//到这里基本上就差不多完成了，在加个鼠标移入移出就大功告成。
 	boxDom.addEventListener('mouseenter',function(e){
 		clearInterval(timer);//当鼠标移入时关闭定时器(关闭自动播放)；
 	},false);
 	boxDom.addEventListener('mouseleave',function(e){
 		timer = setInterval(AutomaticallyRound,2000);//当鼠标移出时开启定时器(开启自动播放)；
 	},false);
},false);