/**
 * 	Streams are objects that let you read data from a source or write data to a destination in continuous fashion. In Node.js, there are four types of streams −
	Readable − Stream which is used for read operation.
	Writable − Stream which is used for write operation.
	Duplex − Stream which can be used for both read and write operation.
	Transform − A type of duplex stream where the output is computed based on input.

	Each type of Stream is an EventEmitter instance and throws several events at 
	different instance of times. For example, some of the commonly used events are −

 	data − This event is fired when there is data is available to read.
	end − This event is fired when there is no more data to read.
	error − This event is fired when there is any error receiving or writing data.
	finish − This event is fired when all the data has been flushed to underlying system.
 */


/*Reading from a Stream*/

var fs = require("fs");
var data = '';

var readerStream = fs.createReadStream('static/input.txt');
readerStream.setEncoding('UTF8');

readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function() {
   console.log(data);
});

readerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program Ended");

/*Writing to a Stream*/

var fs = require("fs");
var data = 'Simply Easy Learning';

var writerStream = fs.createWriteStream('static/output.txt');

writerStream.write(data,'UTF8');
writerStream.end();

writerStream.on('finish', function() {
   console.log("Write completed.");
});

writerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program Ended");

/*Piping the Streams*/

var fs = require("fs");
var readerStream = fs.createReadStream('static/input.txt');
var writerStream = fs.createWriteStream('static/output.txt');

readerStream.pipe(writerStream);

console.log("Program Ended");

/*Chaining the Streams*/

var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('static/input.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('static/input.txt.gz'));
  
console.log("File Compressed.");