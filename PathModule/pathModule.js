// Path Module:-

// The Path module provides utilities for working with file and directory paths. It can be accessed using:-

const path = require('path');

// give directory path
console.log(path.dirname('C:\Users\91969\Desktop\Express\NodeByNisha\PathModule\pathModule.js'));

//Give extention name of file
console.log(path.extname('C:\Users\91969\Desktop\Express\NodeByNisha\PathModule\pathModule.js'));

// Give file name
console.log(path.basename('C:\Users\91969\Desktop\Express\NodeByNisha\PathModule\pathModule.js'));

// If we want directory name , extensuin name and file name then we use parse()
// The parth.parse() method return an object whose properties represnt significant elements of the path.i.e.dir,root,base,name,ext.
console.log(path.parse('C:\Users\91969\Desktop\Express\NodeByNisha\PathModule\pathModule.js'));

// How do we call any of them i.e.root,dir,base,name,ext
// Only call name
const myPath = path.parse('C:\Users\91969\Desktop\Express\NodeByNisha\PathModule\pathModule.js')
console.log(myPath.name);

// Only call root
console.log(myPath.root);