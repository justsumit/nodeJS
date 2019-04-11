/**
 * All objects which emit events are the instances of events.EventEmitter.
 * Many objects in a Node emit events, for example, a net.Server emits an event each time 
 * a peer connects to it, an fs.readStream emits an event when the file is opened.
 */

var events=require("events");

var eventEmitter=new events.EventEmitter();

eventEmitter.addListener("connection",function(){
	console.log("Listner1 Called");
});

eventEmitter.on("connection",function(){
	console.log("Listner2 Called");
});
eventEmitter.emit("connection");

var listenerCount=events.EventEmitter.listenerCount(eventEmitter,"connection");

console.log(listenerCount);
