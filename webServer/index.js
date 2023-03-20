// Node.js Web Server

// To access web pages of any web application ,you need a web server.The web server will handle all the http requests for the web application eg IIS is a web server for ASP.NET web applications and Apache is a web server for PHP or Java web applications.

// Node.js provides capabilities to create your own web server which will handel HTTP requests asynchronously. You can use IIS or Apache to run Node.js web application but it is recommended to use Node.js web server.

//  Web server 
// The https.createServer() method includes request and response parameters which is supplies by Node.js.

// The request object can be used to get information about the current HTTP request 
// e.g. url,request header , and data.

// The response object can be used to send a response for a current HTTP request.

// If the response from the HTTP server is supposed to be displayes as HTML,
// You should include an HTTP header with the correct content type:

// Create server using http 
const fs = require('fs')
const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("Hello from the home side")
    } else if(req.url =="/about"){
        res.end("Hello from the about us side")
    } else if(req.url == "/contact"){
        res.end("Hello from the contact side")
    } else if(req.url =="/userapi"){
        fs.readFile(`${__dirname}/API/userapi.json`,'utf-8',(err,data)=>{
            console.log(data);
            const objData = JSON.parse(data)
            res.end(objData[0].name)
        })
    } else {
        res.writeHead(404,{"Content-type":"text/html"})
        res.end("<h1> 404 error pages. Page doesn't exist</h1>")
    }
})
server.listen(80,"127.0.0.1",()=>{
    console.log(`listening to the port no 3000`);
});