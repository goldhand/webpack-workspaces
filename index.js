console.log('\n\n');
console.log('\x1b[31m');
console.log('**********************************************');
console.log('** You probably meant to install the *********');
console.log('** "webpack-workspace" package instead. ******');
console.log('**********************************************');
console.log('** To fix this, run: *************************');
console.log('** $ npm uninstall -D webpack-workspaces *****');
console.log('** $ npm install -D webpack-workspace ********');
console.log('**********************************************');
console.log('\x1b[0m');
console.log('\n\n');

module.exports = require('webpack-workspace');
