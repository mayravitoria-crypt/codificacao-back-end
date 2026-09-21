import fs from 'fs';

const streamEscrita = fs.createReadStream('sevisdor.log');
console.log('Gerando arquivo log  simulado...');

for(let i = 0; i< 200000; i++){
    const tipo = i % 7 === 0? 'ERRO' : 'INFO';
    streamEscrita.write('[2026-09-11] line ${i}: status 200 - Mensagem de teste ${tipo}\n');
}
streamEscrita.end();