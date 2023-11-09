// framework express
const express = require("express");

const router = express.Router();

const usuarioController = require("../controller/usuarioController");

// requisição http principal
router.get("/",(req,res) =>{
  return res.json({message: "Sistema de varejo"});
})

// POST - CADASTRAR

router.post("/usuarios/Cadastrar", usuarioController.UsuarioCreate);

// GET - LISTAR
router.get("/usuarios/:id?", usuarioController.verificaJWT,usuarioController.UsuarioListar);

// PUT - UPDATE

router.put("/usuarios/:id", usuarioController.UsuarioUpdate);

// DELETE

router.delete("/usuarios/:id", usuarioController.UsuarioDelete);

router.post("/login", usuarioController.UsuarioVerificaLogin);

//POST - CADASTRAR
router.post("/add_produtos", produtoController.produtoCreate);

//GET - LISTAR
router.get("/produtos/:id?", produtoController.ProdutoListar);

module.exports = router;