const express = require("express");
const  router  = require("./router");


const app = express();

app.use(express.json(), router);

app.listen(3000, () => console.log("porta 3000 online"));
