console.log('Hello Tenny');

var fs = require("fs");
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended");

var fs=require('fs');
fs.readFile('input.txt',function (err, data){
	if (err)
		return console.eror(err);
	console.log(data.toString);

	});
console.log("program at last ended");


