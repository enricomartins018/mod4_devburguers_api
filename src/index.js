// Importações de bibliotecas Express e Dotenv
import express from 'express';
const app = express()
import "dotenv/config";

app.use(express.json());

// rotas da API
import pedidosController from './controller/pedidos-controller.js'
app.use('/pedidos', pedidosController)

// Exportando o Express
export default app