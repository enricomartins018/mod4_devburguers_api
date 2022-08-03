import express from "express";
const router = express.Router();

import Funcionario from "../model/funcionario.js";

// CREATE
router.post("/", async (req, res) => {
  //req.body
  const { nome, cargo, email, CPF } = req.body;

  if (!nome) {
    res.status(422).json({
      erro: "Funcionário não inserido pois os campos obrigatórios não foram preenchidos",
    });
    return;
  }
  const funcionario = {
    nome,
    cargo,
    email,
    CPF,
  };

  try {
    // criando dados
    await Funcionario.create(funcionario);
    res.status(201).json({ mensagem: "Funcionário inserido com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// READ
router.get("/", async (req, res) => {
  try {
    const funcionario = await Funcionario.find();
    res.status(200).json(funcionario);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// READ por ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  if (!Funcionario) {
    res.status(422).json({ mensagem: "O usuário não foi encontrado!" });
    return;
  }

  try {
    const funcionario = await Funcionario.findOne({ _id: id });
    res.status(200).json(funcionario);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
