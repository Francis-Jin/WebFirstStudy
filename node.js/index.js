const readline = require("readline");

const rl = readline.createInterface({
	input:process.stdin,
	output: process.stdout
	
});

rl.question("你好啊",function (res) {
	console.log(`你好：${res}`);
	rl.close();
});