const pool = require("../service/instance");

async function listarProdutos(req, res) {
  const produtos = await pool.query("select * from produtos");

  if (produtos.rows.length > 0) return res.json(produtos.rows);
  
  return res.json("Nenhum produto cadastrado");
}

async function addProduto(req, res) {
  const { nome, categoria, preco, quantidade, medida } = req.body;

  const params = [nome, categoria, preco, quantidade, medida];
  const insert = await pool.query(
    ` INSERT INTO produtos (nome,categoria,preco,quantidade,medida) VALUES($1,$2,$3,$4,$5) returning *`,
    params
  );

  return res.json(insert.rows);
}

async function alterarPrecoProduto(req, res) {
  const { preco } = req.body;
  const { id } = req.params;

  const params = [preco, id];
  const produtoAlterado = await pool.query(
    `UPDATE produtos SET preco = $1 WHERE id = $2  returning *;`,
    params
  );

  return res.json(produtoAlterado.rows);
}
async function alterarQuantidadeProduto(req, res) {
  const { quantidade } = req.body;
  const { id } = req.params;

  const params = [quantidade, id];
  const produtoAlterado = await pool.query(
    `UPDATE produtos SET quantidade = $1 WHERE id = $2  returning *;`,
    params
  );

  return res.json(produtoAlterado.rows);
}

async function deletarProduto(req, res) {
  const { id } = req.params;

  const params = [id];
  await pool.query(` delete from produtos where id = $1`, params);

  return res.json("Deletado");
}

module.exports = {
  listarProdutos,
  addProduto,
  alterarPrecoProduto,
  alterarQuantidadeProduto,
  deletarProduto,
};
