/**
 * Node.js is a single-threaded application, but it can support concurrency via the concept of
 *  event and callbacks. Every API of Node.js is asynchronous and being single-threaded, they use
 *  async function calls to maintain concurrency. Node uses observer pattern. Node thread keeps
 *  an event loop and whenever a task gets completed, it fires the corresponding event which
 *  signals the event-listener function to execute.
 *  
 *  In an event-driven application, there is generally a main loop that listens for events, 
 *  and then triggers a callback function when one of those events is detected.
 *  
 *  Although events look quite similar to callbacks, the difference lies in the fact that 
 *  callback functions are called when an asynchronous function returns its result, whereas event
 *  handling works on the observer pattern. The functions that listen to events act as Observers. 
 *  Whenever an event gets fired, its listener function starts executing. Node.js has 
 *  multiple in-built events available through events module and EventEmitter class which are 
 *  used to bind events and event-listeners
 */

var events=require("events");

var eventEmitter=new events.EventEmitter();
eventEmitter.on('connection',function(){
	console.log("Connection Created");
	eventEmitter.emit("datarequired");
});

eventEmitter.on('datarequired',function(){
	console.log("Data Required");
});

eventEmitter.emit("connection");