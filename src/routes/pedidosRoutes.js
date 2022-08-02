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

// Read - Leitura de dados para todo o banco de dados
router.get('/', async (req, res) => {

    try {

        const pedidos = await Pedidos.find()

        res.status(200).json(pedidos)

    } catch (error) {

        res.status(500).json({ erro: 'Não foi possível encontrar os pedidos, por favor entre em contato conosco!' })

    }

})

// Leitura de dados único, apenas para um id 
router.get('/:id', async (req, res) => {

    console.log(req)

    // extrair o dado da requisição, pela url = req.params
    const id = req.params.id

    try {
        const pedidos = await Pedidos.findOne({ _id: id })

        if (!pedidos) {
            res.status(422).json({ message: "Não foi possível encontrar o seu pedido, por favor entre em contato conosco!" })
            return
        }

        res.status(200).json({ pedidos })

    } catch (error) {

        res.status(500).json({ error: error })

    }

})

// Update - atualização de dados (PUT, PATCH)
router.patch('/:id', async (req, res) => {

    const id = req.params.id

    const { pedido, nome, endereco, itensdopedido, formadepagamento, mododeentrega, total  } = req.body

    const pedidos = {
        pedido, 
        nome, 
        endereco, 
        itensdopedido, 
        formadepagamento, 
        mododeentrega, 
        total
    }

    try {
        const updatePedidos = await Pedidos.updateOne({ _id: id }, pedidos)

        if (updatePedidos.matchedCount === 0) {
            res.status(422).json({ message: "Não foi possível encontrar o seu pedido, por favor entre em contato conosco!" })
            return
        }

        res.status(200).json(pedidos)

    } catch (error) {
        res.status(500).json({ error: error })

    }
})

// Delete - Deletar dados
router.delete('/:id', async (req, res) => {

    const id = req.params.id

    const pedidos = await Pedidos.findOne({ _id: id })

    if (!pedidos) {
        res.status(422).json({ message: "Não foi possível encontrar o seu pedido, por favor entre em contato conosco!" })
        return
    }

    try {

        await Pedidos.deleteOne({_id: id})

        res.status(200).json({ message: "O seu pedido foi removido com sucesso!"})

    } catch (error) {

        res.status(500).json({ message: "Não foi possível encontrar o seu pedido, por favor entre em contato conosco!" })
    }
})

export default router
