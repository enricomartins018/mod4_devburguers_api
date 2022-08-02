import express from "express";
const router = express.Router();
import Pedidos from '../model/Pedidos.js'

// Create - Criação de dados
router.post('/', async (req, res) => {

    // req.body 
    const { pedido, nome, endereco, itensdopedido, formadepagamento, mododeentrega, total  } = req.body

    if (!nome) {
        res.status(422).json({ error: 'O nome é obrigatório!' })
    }

    const pedidos = {
        pedido, 
        nome, 
        endereco, 
        itensdopedido, 
        formadepagamento, 
        mododeentrega, 
        total
    }
    // se der tudo ok, o try aparece
    try {
        // criando dados
        await Pedidos.create(pedidos)

        res.status(201).json({ message: 'Pedido efetuado com sucesso!' })
        //se der erro, o catch aparece
    } catch (error) {
        res.status(500).json({ message: 'Tivemos problema em efetuar o seu pedido, por favor entre em contato conosco!' })
    }

})