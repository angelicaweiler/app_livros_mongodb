import express from "express";
import LivroController from "../controllers/livrosController.js";

const routes = express.Router();

routes
.get("/livros", LivroController.listarLivros)
.get("/livros/busca", LivroController.listarLivrosPorEditora)
.get("/livros/:id", LivroController.buscarporId)
.post("/livros", LivroController.cadastrarLivros)
.put("/livros/:id", LivroController.atualizarLivros)
.delete("/livros/:id", LivroController.excluirLivro)

export default routes;