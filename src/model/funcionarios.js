import mongoose from "mongoose";

const Funcionario = mongoose.model("Funcionario", {
  nome: String,
  cargo: String,
  email: String,
  CPF: Number,
});

export default Funcionario;
