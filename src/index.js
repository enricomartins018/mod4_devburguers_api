// IMPORTAÇÕES DE BIBLIOTECAS
import mongoose from 'mongoose';
import nodemon from 'nodemon';
import express from 'express';

const DB_USER = "devburguers_squad4"
const DB_PASSWORD = encodeURIComponent('3ZK2eMFjSio57Lp3')

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@devburguers.c3dpllu.mongodb.net/?retryWrites=true&w=majority`)
    // Se der tudo ok com a conexão, o then aparece com a seguinte mensagem:
    .then(() => {
        app.listen(3000)
        console.log("Banco de dados conectado com sucesso!")
    })

    // Se der erro, o catch aparece com a seguinte mensagem:
    .catch((err) => console.log(`${err}: Erro de conexão com o banco de dados.`))