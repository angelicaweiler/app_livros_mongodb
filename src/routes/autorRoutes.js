import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

routes
.get("/autor", AutorController.listarAutores)
.get("/autor/:id", AutorController.buscarporId)
.post("/autor", AutorController.cadastrarAutores)
.put("/autor/:id", AutorController.atualizarAutores)
.delete("/autor/:id", AutorController.excluirAutor)

export default routes;