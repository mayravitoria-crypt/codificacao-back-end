import fs from 'fs';
import readline from 'readline';

async function filtrarErros(){
    
    console.log('INICIANDO PROCESSAMENTO COM STREAMS');
    exibirConsumoMemoria('Início');

    const streamLeitura = fs.createReadStream('servidor.log');
    const leitorLinhaALinha = readline.createInterface({input: streamLeitura,crlfDelay: Infinity});

    let totalErros = 0;
    for await (const linha of leitorLinhaALinha){
        if (linha.includes('ERRO')) {
             streamEscrita.write(linha + '\n');
                totalErros++;
        }
    }

    exibirConsumoMemoria('Fim');
    console.log('Processamento Concluído! Quantidade de erros encontrados: ${totalErros}Linhas')
}

function exibirConsumoMemoria(consumo){
    const memoria = process.memoryUsage();
    const rssMB = (memoria.rss / 1024/ 1024).toFixed(2);
    const heapMB = (memoria.heapUsed / 1024 /1024).toFixed(2);

 console.log('[${consumo}] RSS: ${rssMB} MB | Heap utilizado: ${heapMB} MB');
}

filtrarErros(); 