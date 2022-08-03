// Importações de bibliotecas Express e Dotenv
import express from 'express';
const app = express()
import "dotenv/config";

app.use(express.json());

// rotas dos pedidos
import pedidosController from './controller/pedidos-controller.js'
app.use('/pedidos', pedidosController)

// rotas dos funcionários
import funcionarioController from "./controller/funcionario-controller.js";
app.use("/funcionarios", funcionarioController);

// Exportando o Express
export default app