// Export module 
// How to create your own module?
// Local Module :- Module created by own using import export.

const add = (a,b) =>{
    return a+b;
}
// we have to convert private scope into public so that we can access them.
const sub = (a,b) =>{
    return a-b 
}

const multiplication = (a,b) =>{
    return a*b;
}
// Export variable 
const name = 'Nisha Sahu'
// Before destructuring
module.exports.add = add
module.exports.sub = sub
module.exports.mumultiplication =multiplication

// After destructuring
module.exports = {add,sub,multiplication,name}
