import dotenv from 'dotenv';

dotenv.config();

function iniciarAplicacao(){

    const porta = process.env.PORT || 8080;
    const apikey = process.env.API_KEY_PAGAMENTO;
    const dbUrl = process.env.DATABESE_URL;

    if(!apikey){
    console.error('ERRO CRITICO: a chave API_KEY_PAGAMENTO nao esta definida nas variveis de ambiente!');
    process.exit(1);

}

console.log('=== SERVIÇO DE CONFIGURACAO CARREGANDO ===');
console.log('Servidor Rodando na porta: ${porta}');
console.log('conexao Banco de Dados: ${dburl}');
console.log('Status da API da  Pagamento: chave de tamanho ${apiKEY.legth} autenticada');

}
iniciarAplicacao();