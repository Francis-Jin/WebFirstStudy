//引入http
var http = require("http");
//创建一个服务
var app = http.createServer((req,res)=>{
	console.log(req.url);
	res.writeHead(200,{
		"Content-type":"text/html;charset=utf-8"
	});
	res.end("还是做个盆友吧.......");
})