const express = require("express");
const app = express();
const hbs = require("hbs");
const port = 8000;
const path = require("path");


//built in middleware

// console.log(path.join(__dirname, '../public'));

const staticPath = path.join(__dirname, "../public")
// app.use(express.static(staticPath))


// change name view to any name
const templatePath = path.join(__dirname , "../templates")
// const  partialsPath= path.join(__dirname , "../templates/partials")
// template

app.get("/" , (req,res)=>{
    res.render('index');
})


// to set the view engine
app.set("view engine" , "hbs");
app.set('viwes', templatePath)
hbs.registerPartials('')

app.get("/about", (req,res)=>{
res.render("about");
})

app.get("/about/*", (req,res)=>{
    res.render('404',{
        errorcomment : "opps this about us page Couldn't be found"
    });
    })


app.get("*", (req,res)=>{
    res.render('404',{
        errorcomment : "opps page Couldn't be found"
    });
    })

app.get("/", (req,res)=>{
    res.send("hello for the express server")
    })

app.listen(port , ()=>{
    console.log(`listening to port ${port}`)
})























/*(const path = require('path');

const express = require ('express');
const app = express();

// relative absolute
// console.log(__dirname);

// console.log(path.join(__dirname, "../public"));

const staticPath= path.join(__dirname, "../public");

// built in middleware
app.use(express.static(staticPath));

app.get("/" , (req,res) =>{
    res.send("hello world from the express");
});

app.get('/about' , (req,res)=>{
    res.send("hello world from the about page");
});



app.listen(8000 ,() =>{
    console.log("listing the port 8000")
})

*/

