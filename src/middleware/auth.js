import app from "../index.js";

//forma de ler JSON  / middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
