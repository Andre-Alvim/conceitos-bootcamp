const express = require("express");

const app = express();

app.get("/projects", (req, res) => {
  return res.json(["Projeto 1", "Projeto 2", "projeto 3", "Projeto 4"]);
});

app.post("/projects", (req, res) => {
  return res.json([
    "Projeto 1",
    "Projeto 2",
    "projeto 3",
    "Projeto 4",
    "Projeto 5",
  ]);
});

app.put("/projects/:id", (req, res) => {
  return res.json([
    "Projeto ALTERADO",
    "Projeto 2",
    "projeto 3",
    "Projeto 4",
    "Projeto 5",
  ]);
});

app.delete("/projects/:id", (req, res) => {
  return res.json(["Projeto 1", "Projeto 2", "projeto 3", "Projeto 4"]);
});

app.listen(3333, () => {
  console.log("Back-end started!");
});
