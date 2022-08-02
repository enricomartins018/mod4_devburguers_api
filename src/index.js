// Importações de bibliotecas Express e Dotenv
import express from 'express';
const app = express()
import "dotenv/config";

// rotas da API
import pedidosRoutes from './routes/pedidosRoutes.js'
app.use('/pedidos', pedidosRoutes)

// Exportando o Express
export default app