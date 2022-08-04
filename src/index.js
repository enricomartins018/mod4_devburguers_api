// Importações de bibliotecas Express e Dotenv
import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config()
const app = express()


app.use(express.json());

// rotas dos pedidos
import pedidosController from './controller/pedidos-controller.js'
app.use('/pedidos', pedidosController)

// rotas dos funcionários
import funcionarioController from "./controller/funcionario-controller.js";
app.use("/funcionarios", funcionarioController);

//rotas dos produtos
import produtoRoutes from './routes/produtos-controller.js'
app.use('/produto', produtoRoutes)

// Exportando o Express
export default app