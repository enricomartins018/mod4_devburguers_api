import mongoose from 'mongoose'

const Fornecedores = mongoose.model('fornecedores', {
    nome: String,
    cnpj: String,
    inscricaoestadual: String,
    email: String,
    endereco: String,
    telefone: String 
})

export default Fornecedores