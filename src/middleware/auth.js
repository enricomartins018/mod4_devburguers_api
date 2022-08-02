// Importando Express da Index.js
import app from "../index.js";

//Forma de ler JSON  / middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
