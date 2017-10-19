var fs = require('fs');
console.log('sy before');

var data = fs.readFileSync('./file/Atestado.pdf');
console.log(data, 'sy executed');

console.log('sy after');