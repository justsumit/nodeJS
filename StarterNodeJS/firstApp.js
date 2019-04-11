/**
 * Using require directive to load a node module "http" and using it to 
 * create a server and binding it to 8081 port using the listen method associated with 
 * the server instance
 */

var http = require("http");

var server=http.createServer(function(req,res){
	res.writeHead(200,{'content-type':'text/plain'});
	res.end("Hello Sumit !!");
});

server.listen(8081);

console.log('Server running at http://127.0.0.1:8081/');