const express = require("express");

require("./db/connection");
const app = express();
const router = require('./router/router')
app.use('/',router)
// process.env.PORT  provide port environment variable for express server and client at global level.
const port = process.env.PORT || 8000;
// You DO NOT NEED express.json() and express.urlencoded()
// for GET requests or DELETE requests.We only need it for 
// post and put request

// express.json() is a method inbuilt in express to recognize the incoming
// Request Object as a  JSON object. This method is called as a middleware 
// in your application using the code:app.use(express.json())

app.use(express.json());

 
app.listen(port,()=>{
    console.log(`Connection is setup at ${port}`);
})