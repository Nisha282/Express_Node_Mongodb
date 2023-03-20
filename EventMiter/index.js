// Event Module 
// Node.js has a built-in module , called "Events",
// where you can create-,fire- (perform) and listen for- your own events.

// Example 1 - Registering for the event to be fired only one time using once.

// Example 2 - Create an event emitter instance and register a couple of callbacks

// Example 3 - Registering for the event with callback parameters.

const EventEmitter = require('events')
// const event = require("events")

// const EventEmitter = new event.EventEmitter()
const event = new EventEmitter()

// execute event by using 'on' keyword
event.on('sayMyName',()=>{
    console.log("Your name is Nisha");
})
event.on('sayMyName',()=>{
    console.log("Your name is Chanchu");
})
event.on('sayMyName',()=>{
    console.log("Your name is afrin");
})

// create event by using 'emit' keyword 
event.emit('sayMyName');
// shortcut:- emit - function call , on - function define

// By creating one event we can call multiple functions.

// don't get o/p if we define on after creating we have to call then before creating.
// event.on('sayMyName',()=>{
//     console.log("Your name is chanchal");
// })


// 3. Registering for the event with callback parameters.

event.on('checkPage',(sc,msg)=>{
console.log(`status code is ${sc} and the page is ${msg}`);
})
event.emit('checkPage',200,'ok');