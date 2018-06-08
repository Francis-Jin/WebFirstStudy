//<script src="a.js"></script>
//<script src="b.js"></script>
//<script src="c.js"></script>
/*var i=0;
while(true)
{
	i+=1;
}*/
// 单线程 和 多线程
var c = 0;
function printIt()
{
	console.log(c);
}

function push(callback)
{
	setTimeout(function(){
		c += 1;
		callback();
	},1000);
}
push(printIt);