// Local Modules/Custom Modules/User Defined Modules:-
// A node module which is developed for some specific purpose is called cutom or local or user defined module in node.js.

// Local modules are mainly used for some specific purpose in projects and locally available in separate files or folders within project.

// Import Module 

const operator = require('./oper');
console.log(operator);
// return object to access them we use (.) dot 
console.log(operator.sub(10,5));
// console.log(sub(10,5));
console.log(operator.add(5,5));
console.log(operator.multiplication(30,10));
console.log(operator.name);
// but how can we directly access them w/o using dot(.)?
// By  using destructuring we can directly access .
const {add,sub,multiplication,name } = require('./oper');
console.log(add(20,10));
console.log(sub(30,10));
console.log(multiplication(20,10));
console.log(name);
