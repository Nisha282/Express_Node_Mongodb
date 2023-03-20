const express = require('express');
const app = express();
const port = 3000
// HTML 
app.get('/', (req, res) => {
    // res.send('<h1>Welcome to my home page</h1>');
    // but wht if we have more than one line code in html?

    // If we use write instead of send then page well load and expect from server to get more data.
    res.write('<h1>Welcome to my home page</h1>');
    // write will write data for client.
    res.send()
    // By using send we can close the connection for write so it doesn't load Continuouslly
    // To check if it loading continuouslly or not comment down line no.12
})
app.get('/about', (req, res) => {
    res.send('Welcome to my about page');
})
app.get('/contact', (req, res) => {
    res.send('Welcome to my contact page');
})
app.get('/temp', (req, res) => {
    // to send json object we have to pass object behind the scenes it will convert into json .
    // res.status(200).send({
    //     id: 1,
    //     name:"chanchal",
    // });

    // we can also pass in array of an object if we want to send multiple data 
    res.send([
        {
            id: 1,
            name: "Nisha",
        },
        {
            id: 2,
            name: "chanchu",
        },
        {
            id: 3,
            name: "Nik",
        },
        {
            id: 4,
            name: "Afrin",
        },
    ])
    // Instead of send we can also use json.
    // res.json instead of res.send.

    // what is difference b/w res.json and res.send? 

    // res.send() methods are identical when an object or array is passed, but res.json() will also convert non-object, such as null and undefined , which are not valid JSON.

})

app.listen(port, () => {
    console.log(`listen on port no ${port}`);
}) 
