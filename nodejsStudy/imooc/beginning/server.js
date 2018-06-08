var http = require('http');
// 请求体req，响应体res
http.createServer(function(req,res){
	res.writeHead(200,{'Cont-Type':'text/plain'});
	res.end('Hello World node.js\n');
}).listen(1337,'127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');