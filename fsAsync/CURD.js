// Challenge - Apply crud operation using FS in Asyncronous
// 1. create a folder name it Nisha
// 2.create a file in it name bio.txt and add data
// 3. Add more data into the file at the  end of the existing data.
// 4. Read the file name to bio.txt
// 5. Rename the file name to mybio.txt
// 6. now delete both the file and the folder

// Import File system 
const fs =require('fs')

// Create directory
fs.mkdir('Nisha',(err)=>{
    console.log('Folder created');
})

// write file 
fs.writeFile('./Nisha/bio.txt','My name is Nisha.',(err)=>{
    console.log('File created');
})

// Update file
fs.appendFile('./Nisha/bio.txt',' I am from Raigarh',(err)=>{
    console.log('File updated');
})

// read file
fs.readFile('./Nisha/bio.txt','utf-8',(err,data)=>{
    console.log(data);
})

// File renamed
fs.rename('./Nisha/bio.txt','./Nisha/mybio.txt',(err)=>{
    console.log('File renamed');
})

// File deleted 
// fs.unlink('./Nisha/mybio.txt',(err)=>{
//     console.log('File Deleted');
// }) 


// Folder deleted
// fs.rmdir('./Nisha',(err)=>{
//     console.log('Folder Deleted');
// })