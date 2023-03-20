const fs = require('fs');
// JSON stands for JavaScript Object Notation . JSON is lightweight format for storing and transporting data.
// JSON is often used when data is sent from a server to a web page .

const bioData = {
    name:"Nisha" ,
    age: 22,
    channel : "xyz",
}

console.log(bioData.channel);
console.log(bioData.name);

// JSON contain  two method 

// 1. convert object into json 
const jsonData = JSON.stringify(bioData);
console.log(jsonData);
// string

console.log(jsonData.channel);
// undefined
// cant call by using (.)

// 2. convert JSON into Object
const objData = JSON.parse(jsonData)
console.log(objData);

// TASK
// 1.convert to JSON 
// 2. Add into another file
// 3.read file 
// 4. convert back into Object
// show in terminal

// step 1
const dataJson = JSON.stringify(objData)
console.log(dataJson);
// step 2
fs.writeFile('Json1.json',dataJson,(err)=>{
    console.log('file created');
})
// step 3
fs.readFile('Json1.json','utf-8',(err,data)=>{
    console.log(data);
    // step4
const originalData = JSON.parse(data)
// step 5
console.log(originalData);
})
