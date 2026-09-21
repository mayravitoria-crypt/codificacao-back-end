import express from 'express';

const app = express();
app.use(express.json());

process.on('uncaughtException', (error) => {
    console.error('[ERRO DE PROCESSO - uncaughtException]: ', error.message);
});

process.on('unhandledRejection',(reason)=> {
    console.error('[PRENISSE REJEITADA - unhandledRejection]:', reason);
});

app.get('/sucesso', (req, res) => {
    res.json({sucess: true, message: 'Operação realizada com sucesso!'});
});

app.get('/erro-sicrono', (req, res, next)=> {
    try{
        throw new Error('Falha ap processar a regra de negócio!');
    }catch(erro){
        next(erro);
    }
});
app.get('/erro-assicrono', async(req, res, next)=>{
    try{
        await Promise.reject(new Error('Erro ao consultar banco de dados Esterno!'));
    }catch(erro){
        next(erro);
    }
});
app.use((err, req, next) =>{
    console.error(`[LOG DE ERRO INTERNO] ${err.stack}`);

    const status = err.status || 500;
    req.status(status).json ({
        sucess: false,
        message: err.message || 'ERRO INTERNO NO SERVIDOR'
    });
});
app.listen(3000, () => {
    console.log('Sevidor Imortal rodando na porta 300' )
    console.log('Teste1: ');
    console.log('Teste 2:');
    console.log('Teste 3:');
});