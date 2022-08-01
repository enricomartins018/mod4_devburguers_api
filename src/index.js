// Importações de bibliotecas
import mongoose from 'mongoose';
import nodemon from 'nodemon';
import express from 'express';
import "dotenv/config";

const devburguers_db_user = process.env.DB_USER
const devburguers_db_password = encodeURIComponent(process.env.DB_PASSWORD)

// Conectando com o banco de dados 
mongoose.connect(`mongodb+srv://${devburguers_db_user}:${devburguers_db_password}@devburguers.c3dpllu.mongodb.net/?retryWrites=true&w=majority`)
    // Se der tudo ok com a conexão, o then aparece com a seguinte mensagem:
    .then(() => {
        app.listen(3000)
        console.log("Banco de dados conectado com sucesso!")
    })

    // Se der erro, o catch aparece com a seguinte mensagem:
    .catch((err) => console.log(`${err}: Erro de conexão com o banco de dados.`))