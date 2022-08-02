// Importações de bibliotecas
import express from 'express';
import "dotenv/config";
//Importações de rotas
import pedidosRoutes from './routes/pedidosRoutes.js'

app.use('/pedidos', pedidosRoutes)

// Variável do Express
const app = express()

// Exportando o Express
export default app