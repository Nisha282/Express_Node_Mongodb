// Third-Party Module:-
// Node 3rd party modules is a module or package which is developed and manitained by 3rd parties.

// Millions of 3rd party node modules/packages which are freely available on NPM Registry.

// You can install node 3rd party modules/packages and use them to add functionality to your projects.

// Node 3rd party modules can be installed using NPM (Node Package Manager).

// Example of 3rd party modules is NPM 

// NPM:-NPM stand for node package manager 

// npm is a package manager for the javascript programming language . 
// It is the default package manager for the Javascript runtime environment Node.js.

// Contain 1 million Package Manager

// Initialized Package Manager Using command "npm init/npm initialize"

// When we initialize the package manager Package.json file created by npm.

// What is package.json?
// A package.json file, usually present in the project root, contains metadata about your app or module as well as the list of dependencies to install from npm when running npm install.

// To create a package.json with default values use:
// npm init --yes / npm init -y

// dependencies: Packages required by your application in production.
// devDependencies:  Packages that are only needed for local development and testing.

// To install a package and save it to package.json use:
// npm install {package name} --save

// You can also use the shorthand notation:
// npm i -S {package name}

// The package will appear in your dependencies; if you use — save-dev instead of — save, the package will appear in your devDependencies.
// npm i {package name} -save-dev 

// You can also use the shorthand notation:
// npm i {package name} -S-D 

// Package-lock.json:-
// It is automatically generated for any operations where npm modifies either the node_modules tree, or package.json . It contain  detailed information of dependencies.

// Node_module :- 
// Contain code of all the dependencies.

// Package 1:- Chalk
// It is a dependence of npm use in styling.

import chalk from 'chalk';
// const chalk = require("chalk")
console.log(chalk.green.italic.inverse("Success"));
// console.log(chalk.red.underline.inverse("false"));

// Package 2:-Validator
// Email validartion
import Validator from 'validator'
const res = Validator.isEmail('nishasahu@gmail.com');
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse('false')); 