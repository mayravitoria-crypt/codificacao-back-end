const os = require('os');

console.log('Plataforma:', os.platform());
console.log('Memória total:', os.totalmem());
console.log('CPUs:', os.cpus().length);