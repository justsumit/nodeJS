/**
 * Node implements File I/O using simple wrappers around standard POSIX functions.
 */

var fs = require("fs");

// Asynchronous read
fs.readFile('static/input.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('static/input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");


var fs = require("fs");

//Asynchronous - Opening File
console.log("Going to open file!");
fs.open('input.txt', 'r+', function(err, fd) {
if (err) {
   return console.error(err);
}
console.log("File opened successfully!");     
});