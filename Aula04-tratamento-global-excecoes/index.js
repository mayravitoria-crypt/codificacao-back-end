import express from 'express';

const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Servidor funcionando!'
    });
});

app.get('/erro', (req, res, next) => {
    try {
        throw new Error('Erro proposital para teste');
    } catch (error) {
        next(error);
    }
});