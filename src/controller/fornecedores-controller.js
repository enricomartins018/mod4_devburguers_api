import express from "express";
const router = express.Router();
import Fornecedores from "../model/fornecedores.js";


// Create - Criação de dados
router.post("/", async (req, res) => {
    // req.body
    const { nome, cnpj, inscricaoestadual, email, endereco, telefone } = req.body;
  
    if (!nome) {
      res.status(422).json({ error: "O nome é obrigatório!" });
    }
  
    const fornecedores = {
      nome,
      cnpj,
      inscricaoestadual,
      email,
      endereco,
      telefone,
    };
    // se der tudo ok, o try aparece
    try {
      // criando dados
      await Fornecedores.create(fornecedores);
  
      res.status(201).json({ message: "Fornecedor criado com sucesso!" });
      //se der erro, o catch aparece
    } catch (error) {
      res
        .status(500)
        .json({ message: "Tivemos problema em adicionar o novo fornecedor." });
    }
  });
  
  // Read - Leitura de dados para todo o banco de dados
  router.get("/", async (req, res) => {
    try {
      const fornecedores = await Fornecedores.find();
  
      res.status(200).json(Fornecedores);
    } catch (error) {
      res
        .status(500)
        .json({ erro: "Não foi possível encontrar os fornecedores." });
    }
  });
  