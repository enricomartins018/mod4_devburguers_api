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
  
  // Leitura de dados único, apenas para um id
  router.get("/:id", async (req, res) => {
    console.log(req);
  
    // extrair o dado da requisição, pela url = req.params
    const id = req.params.id;
  
    try {
      const fornecedores = await Fornecedores.findOne({ _id: id });
  
      if (!Fornecedores) {
        res
          .status(422)
          .json({ message: "Não foi possível encontrar o fornecedor." });
        return;
      }
  
      res.status(500).json({ fornecedores });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  });
  
  // Update - atualização de dados (PUT, PATCH)
  router.patch("/:id", async (req, res) => {
    const id = req.params.id;
  
    const { nome, cnpj, inscricaoestadual, email, endereco, telefone } = req.body;
  
    const fornecedores = {
      nome,
      cnpj,
      inscricaoestadual,
      email,
      endereco,
      telefone,
    };
  
    try {
      const updateFornecedores = await Fornecedores.updateOne(
        { _id: id },
        fornecedores
      );
  
      if (updateFornecedores.matchedCount === 0) {
        res
          .status(422)
          .json({ message: "Não foi possível encontrar o fornecedor." });
        return;
      }
  
      res.status(200).json(fornecedores);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  });
  
  // Delete - Deletar dados
  router.delete("/:id", async (req, res) => {
    const id = req.params.id;
  
    const fornecedores = await Fornecedores.findOne({ _id: id });
  
    if (!Fornecedores) {
      res
        .status(422)
        .json({ error: "Não foi possível encontrar o seu fornecedor." });
      return;
    }
  
    try {
      await Fornecedores.deleteOne({ _id: id });
  
      res
        .status(200)
        .json({ message: "O seu fornecedor foi removido com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Não foi possível encontrar o seu fornecedor." });
    }
  });
  