// Importações de bibliotecas Express e Dotenv
import express from 'express';
import "dotenv/config";

// rotas da API
import pedidosRoutes from './routes/pedidosRoutes.js'
app.use('/pedidos', pedidosRoutes)

// Variável do Express
const app = express()

// Exportando o Express
export default app