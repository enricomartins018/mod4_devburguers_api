import mongoose from 'mongoose'

const Pedidos = mongoose.model('pedidos', {
    pedido: String,
    nome: String,
    endereco: String,
    itensdopedido: String,
    formadepagamento: String,
    mododeentrega: String,
    total: String
})

export default Pedidos
