const a = require('fs');
const name = "Nisha";
console.log(name);

// Behind the scenes
( function(exports,require,module,_filename,_dirname){
    // const a = require('fs');
    const name = "Nisha";
    console.log(name);    
    module.exports = name;
})
module.exports = { name };
// find directory name
console.log(__dirname);
// find file name
console.log(__filename);
    // module wrapper function  is like IIFE

    // We have already accrss of exports,require,module .
    // Its not global scope has local scope i.e. we can use them individually in all file.

    // In Node files are known as module
    // These modules are in private scope  

    // IIFE
    (function () {
        var a = "Nisha";
        console.log(a);
    })();
    // console.log(a);
    // in same module we can use a outside the group scope