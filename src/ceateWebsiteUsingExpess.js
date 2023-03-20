// Serving static files in Express
// To serve static files such as images,css files and javascript files , use the express.static built-in middleware function in Express.

// The function signature is:-
// express.static(root,[options])

// The root argument specifies the root directory from which to serve static assets. 

// Middleware:-
// It is a request-response cycle . 
// It is a function which contain three parameters request, response,next 
//  where request handle request from client , 
// response handle response from server and 
// next is a callback function in middleware which pass controll to controller. 
// If Next() is missing in middleware then controll flow will hang. 
// It is use to separate restricted and open-to-all api.

// how to serve static website in express?

const path = require('path');
const express = require('express')
const app = express()

// There are two type of path 
// 1. relative path:- ../../../

// 2. absolute path:- An absolute or full path points to the same location in a file system 
// regardless of the current working directory.

// use to find directory path
console.log(__dirname)

// join use to join paths with present directory paths
console.log(path.join(__dirname,'../public'));;

const staticPath = path.join(__dirname,'../public')

// built-in middleware functions
app.use(express.static(staticPath))

app.get('/',(req,res)=>{
    res.send('Hello, world')
})

app.listen(3000,()=>{
    console.log('listening on port at 3000');
})