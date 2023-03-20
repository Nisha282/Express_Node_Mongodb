// Core Module :-
// Type of core module
// 1.Global core module 

const name = "Nisha"
console.log(name);

// 2.Non-global core module

// Import a module with the help of require
const fs = require("fs");

// Creating a new file if file does not exist. 
// If file exists then data will be added to the file.
 fs.writeFileSync('read.txt','Welcome to my repository')

//  If we want to add aditional data with previous data in 
// existing file then new data will overwrite with previous one.
fs.writeFileSync('read.txt','Hello, Welcome to my repository')

// Add additional content in same file with previous data 
fs.appendFileSync('read.txt',' How are you I am fine Thank You')

// If we want to read data present  in file
// give data in buffered format form 
const buf_data=fs.readFileSync('read.txt')
console.log(buf_data);

// Node.js includes an additional data type called buffer.
// (not available in browser's JavaScript)
// Buffer is mainly used to store binary data
// while reading from a file or receiving packets over the network.

{/* <Buffer 48 65 6c 6c 6f 2c 20 57 65 6c 63 6f 6d 65 20 74 6f 20 6d 79 20
 72 65 70 6f 73 69 74 6f 72 79 20 48 6f 77 20 61 72 65 20 79 6f 75 20 
49 20 61 6d 20 66 ... 13 more bytes> */}

// read data written in file by converting buffer into string.
org_data = buf_data.toString()
console.log(org_data);

// To rename the file 
fs.renameSync('read.txt','readwrite.txt')