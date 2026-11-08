import express from "express";
const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
const PORT = 3000;

const times = [
  { id: 1, nome: 'Grêmio', estadio: 'Arena do Grêmio', cidade: 'Porto Alegre' },
  { id: 2, nome: 'Internacional', estadio: 'Beira-Rio', cidade: 'Porto Alegre' },
  { id: 3, nome: 'Juventude', estadio: 'Alfredo Jaconi', cidade: 'Caxias do Sul' }
];

app.get('/', (req, res) => {
  res.render('index');
});

app.get("/times", (req, res) => {
    res.render("times", {times});
});

app.get("/times/:id", (req, res) => {
    const timeId = parseInt(req.params.id);
    const time = times.find(t => t.id === timeId);
    if (time) {
        res.render("detalhe", { time });
    } else {
        res.status(404).send("Time não encontrado");
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});