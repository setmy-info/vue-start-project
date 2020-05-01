const pug = require('pug');

const compiledFunction = pug.compileFile('src/index.pug');

console.log(compiledFunction({
}));
