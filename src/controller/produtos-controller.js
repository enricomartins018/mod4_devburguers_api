//Importação do expres
import express from "express";
const router = express.Router();

//Conexão com o arquivo produtos.js da pasta model
import Produtos from "../model/produtos.js";

//Create - criação de dados
router.post("/", async (req, res) => {
    //req.body
    const { nome, ingredientes, preço } = req.body;

    if (!produtos) {
        res.status(422).json({ error: "O nome do produto é obrigatório!" });
        return;
    }

    const produtos = {
        nome,
        ingredientes,
        preço,
    };

    try {
        await Produtos.create(produtos);
        res.status(201).json({ mensagem: "Produto inserido com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: "O produto não foi inserido!" });
    }
});
