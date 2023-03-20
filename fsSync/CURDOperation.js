// Challenge - Apply crud operation using FS 
// 1. create a folder name it chanchal
// 2.create a file in it name bio.txt and sata into
// 3. Add more data into the file at the  end of the existing data.
// 4. Read the file name to mybio.txt
// 5. Rename the file name to mybio.txt
// 6. now delete both the file and the folder

// Solution 
const fs = require('fs');
// fs.mkdirSync('chanchal')
// fs.writeFileSync('chanchal/bio.txt','my name is chanchal ')

// fs.appendFileSync('chanchal/bio.txt',' I am from jagdalpur')

// const data = fs.readFileSync('chanchal/bio.txt').toString()

// console.log(data);

// fs.renameSync('chanchal/bio.txt','chanchal/mybio.txt')

// fs.unlinkSync('chanchal/mybio.txt')

fs.rmdirSync('Nisha')