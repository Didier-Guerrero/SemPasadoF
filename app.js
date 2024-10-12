const express = require("express");
const bodyParser = require("body-parser");
const contractsRoutes = require("./routes/contracts");
const clientsRoutes = require("./routes/clients");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));

app.use("/clients", clientsRoutes);

app.use("/contracts", contractsRoutes);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/", (req, res) => {
  res.render("index");
});

app.use((req, res) => {
  res.status(404).send("Página no encontrada");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
