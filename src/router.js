const express = require("express");
const {
  cadastrarUsuario,
  realizarLogin,
} = require("./controllers/usuarios.controller");
const validarToken = require("./middlewares/validarToken");
const router = express();

router.get("/", (req, res) => {
  res.json("Bem vindo!");
});

router.post("/signup", cadastrarUsuario);
router.post("/signin", realizarLogin);

router.use(validarToken)
router.get("/main",(req, res) => {
  res.json("tudo ok")
});

module.exports = router;
