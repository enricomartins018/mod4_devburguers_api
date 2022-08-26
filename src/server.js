// Importando o Express na Index
import app from './index.js'
//Importando o mongoose
import mongoose from 'mongoose'

const devburguers_db_user = process.env.devburguers_db_user
const devburguers_db_password = encodeURIComponent(process.env.devburguers_db_password)
const devburguers_db_name = process.env.devburguers_db_name
const devburguers_db_key = process.env.devburguers_db_key
const port = process.env.PORT || 3000

// Conectando com o banco de dados 
mongoose.connect(`mongodb+srv://${devburguers_db_user}:${devburguers_db_password}@${devburguers_db_name}.${devburguers_db_key}.mongodb.net/?retryWrites=true&w=majority`)
    // Se der tudo ok com a conexão, o then aparece com a seguinte mensagem:
    .then(() => {
        app.listen(port, () => {
            console.log(`Banco de dados conectado com sucesso! \nEndpoint: http://localhost:${port}`)
        })

    })
    // Se der erro, o catch aparece com a seguinte mensagem:
    .catch((err) => console.log(`${err}: Erro de conexão com o banco de dados!`))