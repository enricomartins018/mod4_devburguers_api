# Projeto de Final de Módulo 4 - DevBurguers 🍔

<h2>🔎 Sobre o projeto</h2>
<p> A proposta do projeto de final de módulo 4 foi de desenvolver uma API RESTful.
Com esse desafio, criamos a DevBurguers, uma API pensada para as hambúrguerias da nossa região, utilizando o MongoDB como banco de dados e hospedando nossa API no servidor da Heroku.</p>

## :pencil2: Pré-requisitos

- Node.js v.16.15.1
- NPM v.8.11.0

## Bibliotecas Utilizadas

- Express
- Nodemon
- Mongoose
- Dotenv

<h2 id="linguagens">📚 Softwares & Ferramentas utilizadas nesse projeto </h2>

- [x] Visual Studio Code
- [x] NodeJs
- [x] JavaScript
- [x] MongoDB
- [x] Git
- [x] KanBan
- [x] Trello
- [x] Figma

## ⚙ Instalação da Aplicação

Abra o terminal/Powershell e rode os comandos abaixo:

Clonando o repositório:

```
git clone https://github.com/enricomartins018/mod4_devburguers_api.git
```

Instalando as bibliotecas:

```
npm install
```

Atualizando os scripts no package.json:

```
"scripts": {
    "start": "node ./src/server.js",
    "dev": "nodemon ./src/server.js"
}
```

Rodando o projeto no modo de produção:

```
npm start
```

Rodando o projeto no modo de desenvolvimento:

```
npm run dev
```

<h2 id="contribuir">🌿 Criando e conectando seu banco de dados no MongoDB</h2>

Siga o passo a passo para criar seu banco de dados e se conectar:

1 - Acesse o site: https://www.mongodb.com/atlas/database

2 - Clique em "Try Free" e crie sua conta.

3 - Faça sua verificação de email.

4 - Selecione o Servidor "Shared" (Free) e clique em "create".

5 - Configure seu servidor da nuvem e a região. (Recomendado: AWS Sao-Paulo)

6 - Selecione o armazenamento de sua preferência. (Recomendado: M0 Sandbox)

7 - Configure o nome do seu banco de dados.

8 - Agora crie o seu banco de dados em "Create Cluster" e aguarde alguns minutos até estar pronto.

9 - Defina um usuário e senha para seu banco de dados. (Recomendado: Senha gerada pelo MongoDB)

10 - Defina um endereço IP para o seu banco de dados se conectar.

11 - Finalize suas configurações.

12 - Clique em "Conect".

13 - Clique em "Conect your application".

14 - Selecione o Driver "Node.js", com a sua respectiva versão.

15 - Agora observe que existe um comando de código para conexão com o banco de dados do Mongo DB conforme mostramos na imagem abaixo, seu usuário "testando1234", sua senha "password" (elimine as setas na hora de alterar para a sua senha), o nome do seu banco de dados "testando123456" e a sua chave de conexão "bqr6gpc".

Exemplo: 

![image](https://user-images.githubusercontent.com/102622514/183229476-280bf193-f6a4-4fc2-b5f9-49bf3d19aa50.png)

16: Agora copie o código abaixo e insira na linha 12 do arquivo "server.js".

```
mongoose.connect(`mongodb+srv://${devburguers_db_user}:${devburguers_db_password}@${devburguers_db_name}.${devburguers_db_key}.mongodb.net/?retryWrites=true&w=majority`)
```

Exemplo:

![image](https://user-images.githubusercontent.com/102622514/183229653-d27680cf-b73c-4156-8876-54f275a7bc15.png)


17 - Para proteção do seu banco de dados, criamos variáveis de ambientes, note que no código acima temos quatro variáveis: usuário, senha, nome do seu banco de dados e a key de conexão.

18 - Vá no arquivo ".env.example" e renomeie para apenas ".env", em seguida, insira o email, senha, nome do seu banco de dados e a sua key dentro do arquivo para conectar com seu banco de dados.

Exemplo:

```
devburguers_db_user=seuusuario
devburguers_db_password=suasenha
devburguers_db_name=nomedoseubancodedados
devburguers_db_key=suakey
```

18 - Tente efetuar um teste de conexão para ver se está tudo ok. Obs: Abra o terminal e insira o comando "npm run dev"

Esquema de resposta para uma conexão sucedida

```
[nodemon] starting `node ./src/server.js`
Banco de dados conectado com sucesso!
Endpoint: http://localhost:3000
```

## Exemplo de Rota: Pedidos

- **GET /pedidos**

Exemplo de esquema da resposta:

```json
{
    "_id": "62e988a701ea8a88b5d2cf25",
    "pedido": "Número 50",
    "nome": "Enrico Martins",
    "endereco": "Avenida Pastor Martin Luther King Júnior N°11089",
    "itensdopedido": "2x X-bacon",
    "formadepagamento": "Cartão de crédito",
    "mododeentrega": "Delivery",
    "total": "R$30,00"
}
```

- **GET /pedidos/:id**

Exemplo de esquema da resposta:

```json
{
  "pedidos": {
    "_id": "62e988a701ea8a88b5d2cf25",
    "pedido": "Número 50",
    "nome": "Enrico Martins",
    "endereco": "Avenida Pastor Martin Luther King Júnior N°11089",
    "itensdopedido": "2x X-bacon",
    "formadepagamento": "Cartão de crédito",
    "mododeentrega": "Delivery",
    "total": "R$30,00"
  }
}
```

- **POST /pedidos**

Exemplo de esquema da requisição

```json
{
    "pedido": "Número 52",
    "nome": "Iago Theo Drumond",
    "endereco": "Rua Itabira N°651",
    "itensdopedido": "5x X-burguer (sem cebola e tomate), 1x Coca-cola de 2L",
    "formadepagamento": "Cartão de débito",
    "mododeentrega": "Retirar na loja",
    "total": "R$124,76"
}
```

Exemplo de esquema da resposta do POST

```json
{
    "message": "Pedido efetuado com sucesso!"
    "error": "Não foi possível efetuar seu pedido!"
}
```

- **PATCH /pedidos/:id**

Exemplo de esquema da requisição

```json
{
    "pedido": "Número 50",
    "nome": "Enrico Martins Abreu",
    "endereco": "Avenida Pastor Martin Luther King Júnior N°11089",
    "itensdopedido": "2x X-montanha",
    "formadepagamento": "Cartão de crédito",
    "mododeentrega": "Delivery",
    "total": "R$30,00"
}
```

Exemplo de esquema da resposta

```json
{
    "message": "Pedido atualizado com sucesso!"
    "error": "Não foi possível encontrar o seu pedido!"
}
```

- **DELETE /pedidos/:id**

Exemplo de esquema da resposta

```json
{
    "message": "O seu pedido foi removido com sucesso!"
    "error": "Não foi possível encontrar o seu pedido."
}
```

- **ERROS**

Exemplo de esquema da resposta

```json
{
    "error": "Não foi possível encontrar o seu pedido."
}
```

<h2>⚛️Heroku</h2>

Para acessar nossa API na Heroku, clique aqui: https://devburguers.herokuapp.com/

<h2 id="grupo">🎮 Nossa equipe</h2>

<p> Esse projeto foi pensado e executado por: </p>
<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/enricomartins018/">
  <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGahWrivfRUMA/profile-displayphoto-shrink_800_800/0/1654512513696?e=1665014400&v=beta&t=fIHMNTKTIzEyDjZEQLdYj_H4rsjgxdUs4tFbqDlNBF4" width="100px;" alt="Foto de Enrico no linkedin"/><br>
  <sub>
  <b> Enrico Martins </b>
  </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/felipe-daniel-1855b5223/">
  <img src="https://avatars.githubusercontent.com/u/96270212?v=4" width="100px;" alt="Foto de Felipe no Github"/><br>
  <sub>
  <b> Felipe Daniel </b>
  </sub>
      </a>
    </td>
<td align="center">
<td align="center">
      <a href="https://www.linkedin.com/in/jiulie-vitoria/">
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGN5GiqUP7Eyw/profile-displayphoto-shrink_800_800/0/1648772959000?e=1665014400&v=beta&t=yxR7OKmIpSXIZ-pkoU7YoG-9r58H3oCiwEuGwN6-Mcg" width="100px;" alt="Foto de Jiulie no Linkedin"/><br>
        <sub>
          <b>Jiulie Vitória</b>
        </sub>
      </a>
    </td>
<td align="center">
      <a href="https://www.linkedin.com/in/eumatheusmoura/">
        <img src="https://avatars.githubusercontent.com/u/94270463?v=4" width="100px;" alt="Foto da Matheus no Github"/><br>
        <sub>
          <b>Matheus Moura</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<h2 id="contribuir"> 📫 Como contribuir</h2>
Para contribuir com nosso projeto, siga estas etapas:

1 - Bifurque este repositório.

2 - Crie um branch: `git checkout -b <nome_branch>`.

3 - Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`

4 - Envie para o branch original: `git push origin nome_do_projeto> / <local>`

5 - Crie a solicitação de pull.
_Consulte a documentação do GitHub em_ [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
