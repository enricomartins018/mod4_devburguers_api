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

//Read - leitura de dados
router.get('/', async (req, res) => {
    try {
        const produtos = await Produtos.find()
        res.status(200).json(produtos)
    } catch (error) {
        res.status(500).json({ error: "O produto não foi encontrado" })
    }
})

router.get('/:id', async (req, res) => {
    //extrair dado da requisição
    const id = req.params.id
    if (!Produtos) {
        res.status(422).json({ error: 'O nome do produto é obrigatório!' })
        return
    }

    try {
        const produtos = await Produtos.findOne({ _id: id });
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({ error: 'O produto não foi encontrado' });
    }
});

