const express = require("express");
const {
  cadastrarUsuario,
  realizarLogin,
  alterarCadastro,
} = require("./controllers/usuarios.controller");
const {addProduto, deletarProduto, alterarPrecoProduto, alterarQuantidadeProduto, listarProdutos} = require('./controllers/produtos.controller')
const validarToken = require("./middlewares/validarToken");
const router = express();


router.post("/", realizarLogin);
router.post("/signup/cadastro", cadastrarUsuario);

router.use(validarToken)
router.get("/produtos",listarProdutos);

router.post("/produtos",addProduto);

router.put("/usuarios/:id/editar",alterarCadastro);

router.patch("/produtos/:id/preco",alterarPrecoProduto);
router.patch("/produtos/:id/quantidade",alterarQuantidadeProduto);

router.delete("/produtos/:id",deletarProduto);

module.exports = router;
