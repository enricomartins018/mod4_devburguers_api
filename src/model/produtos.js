import mongoose from "mongoose";

const Produtos = mongoose.model("produto", {
    nome: String,
    ingredientes: String,
    preço: String,
});

export default Produtos;
