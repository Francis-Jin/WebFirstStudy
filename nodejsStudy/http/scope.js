var globalVariable = 'This is global variable';

function globalFunction()
{
	var localVariable = 'This is local variable';
	console.log('Visit global/local variable');
	console.log(globalVariable);
	console.log(localVariable);
	globalVariable = 'This is change variable';
	console.log(globalVariable);
	function localFunction()
	{
		var innerLocalVariable = 'This is inner local variable';
		console.log('Visit global/local/inner variable');
		console.log(globalVariable);
		console.log(localVariable);
		globalVariable = 'This is change variable';
		console.log(globalVariable);
		console.log(innerLocalVariable);
		// globalFunction();
	}
	localFunction();
}

globalFunction();