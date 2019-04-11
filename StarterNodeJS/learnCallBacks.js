/**
 *  What is Callback?
 *  Callback is an asynchronous equivalent for a function. A callback function is called 
 *  at the completion of a given task. Node makes heavy use of callbacks. All the APIs of Node
 *  are written in such a way that they support callbacks.
 *  For example, a function to read a file may start reading file and return the control to the
 *  execution environment immediately so that the next instruction can be executed. 
 *  Once file I/O is complete, it will call the callback function while passing the 
 *  callback function, the content of the file as a parameter. So there is no blocking 
 *  or wait for File I/O. This makes Node.js highly scalable, as it can process a high 
 *  number of requests without waiting for any function to return results.
 */

/*Blocking Code Example*/
var fs=require("fs");
var data=fs.readFileSync('static/input.txt');

console.log(data.toString());


/*Non Blocking Code Example*/
var fs=require("fs");
fs.readFile('static/input.txt',function(err,data){
	 if (err) return console.error(err);
	 console.log(data.toString());
});

console.log("Program Ended");