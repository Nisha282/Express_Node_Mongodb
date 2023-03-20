const fs = require("fs");

// fs.writeFile('read.txt','Today i learn FS')
// TypeError [ERR_INVALID_CALLBACK]: Callback must be a function. Received undefined

fs.writeFile('read.txt','Today i learn FS',(err)=>{
    console.log('files is created');
    // console.log(err);
})

// we pass them a function as an argument-a callback-
// that get called when that task completes.
// The callback has an argument that tells you whether 
// the operation completed successfully.
// Now we need to say what to do when fs.writeFile
// has completed(even if it's nothing), and start 
// checking for errors.

fs.appendFile('read.txt',' FS stand for file system',()=>{
    console.log('File is updated');
    // console.log(err);
})

fs.readFile('read.txt','UTF-8',(err,data)=>{
    console.log(data);
})