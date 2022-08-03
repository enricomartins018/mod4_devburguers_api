import mongoose from "mongoose";

const Produtos = mongoose.model("produtos", {
    nome: String,
    ingredientes: String,
    preço: String,
});

export default Produtos;
