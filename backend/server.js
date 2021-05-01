const express = require("express");
const app = express();
const db = require('./config/database');

async function main() {
  const { PORT } = process.env;

  db.authenticate().then(() => console.log("Connected to database..."))
  await db.sync()

  const Products = require("./routes/Products");
  app.use("/api/products", Products);

  const Auth = require("./routes/Auth");
  app.use("/api/auth", Auth);

  const port = PORT || 4000;

  app.listen(port, function () {
    console.log("Server listening on port " + port);
  });
}

main().catch(err => console.log(err));
