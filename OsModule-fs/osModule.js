// OS Module
// Using os module we fetch information about operating system

// For more details:-https://nodejs.org/api/os.html#os

// The os modules provides operating system related utility method and properties. It can be accessed using:
const os = require('os');

// They are in-built

// find architecture of system using:-/

console.log(os.arch());
// x64

// find free memory present in system :-
console.log(os.freemem());
// 1071398912 in bytes

// convert bytes into KB
console.log(`${os.freemem() / 1024}`);

// convert bytes into MB
console.log(`${os.freemem() / 1024 / 1024}`);

// convert bytes into GB
console.log(`${os.freemem() / 1024 / 1024 / 1024}`);

// convert bytes into TB
console.log(`${os.freemem() / 1024 / 1024 / 1024 / 1024}`);

// convert bytes into PB
console.log(`${os.freemem() / 1024 / 1024 / 1024 / 1024 / 1024}`);

// Find total memory in system 
console.log(os.totalmem());
// o/p in bytes

// convert into GB
console.log(`${os.totalmem() / 1024 / 1024 / 1024}`);

// Find host name 
console.log(os.hostname());
// give desktop name

// find patefor / window name 
console.log(os.platform());

//find temporary file   
console.log(os.tmpdir()); 

// find which os we use
console.log(os.type());