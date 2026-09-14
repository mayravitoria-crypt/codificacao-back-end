import { formatLog } from './utils.js';
import fs from 'fs';
import path from 'path';

const logsDir = path.join(process.cwd(), 'logs');

if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

const mensagem = formatLog('Sistema iniciado com sucesso.');

const arquivoLog = path.join(logsDir, 'system.log');

fs.writeFileSync(arquivoLog, mensagem);

console.log('Log criado com sucesso!');
console.log(mensagem);