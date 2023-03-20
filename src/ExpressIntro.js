// Express.JS

// Express.JS is a Node.js framework. It's the most popular framework as of now.
// Express.JS is a web application framework that provides you with a simple API to build websites, web apps and back ends.

// why do we actually need Express.Js? How it is useful for us to use with Node.js?
// Try to write a small REST API server in plain Node.js(i.e. using only core module) and then in Express.js. The latter will take you 5-10x less time and lines of code.
// Express is use for routing and apis.

// API
// get - read
// post - create
// put - update
// delete - delete
const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('Hello, world')
})

// In express we write "send" insted of "end"
app.listen(3000,()=>{
    console.log('listening on port at 3000');
})
// The callback function has 2 parameters, request and response.
// The request object represent the HTTP request and 
// has properties for the request query string,parameters,body
// HTTP headers,etc

// Similarly, the response object represents the HTTP response
// that the express app sends when it receives an HTTP requests.