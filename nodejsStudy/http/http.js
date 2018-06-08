/**
 *
 * Created by king on 9/12/2017.
 */
var  http = require('http');
http.createServer(function (request,response) {
    //发送 HTTP 头部
    //HTTP 状态值：200 ：OK
    //内容类型：text/plain
    response.writeHead(200,{'Content-Type':'text/plain'});
    //发送响应数据”Hello Node.js“
    response.write('Hello Node.js');
    response.end('Hello Node.js\n');
    }).listen(8888);
//终端打印一下信息
console.log('Server running at http://127.0.0.1:8888/');
