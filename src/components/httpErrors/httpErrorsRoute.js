import express from "express";

const router = express.Router();

// handle 404 error
router.use(function (req, res) {
  res.status(404).send("404: Página Não Encontrada");
});

// handle 500 error
router.use(function (error, req, res, next) {
  res.status(500).send("500: Erro Interno do Servidor");
});

export default router;
