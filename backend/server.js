const express = require("express");
const app = express();
const cors = require("cors");
const db = require('./config/database');
const User = require('./models/e_user')

async function main() {
  const { PORT } = process.env;

  db.authenticate().then(() => console.log("Connected to database..."))
  await db.sync()

  app.use(cors());
  app.options('*', cors());

  const Products = require("./routes/Products");
  app.use("/api/products", Products);

  const Auth = require("./routes/Auth");
  app.use("/api/auth", Auth);

  const Order = require("./routes/Order");
  app.use("/api/order", Order);

  const Admin = require("./routes/Admin");
  app.use("/api/admin", Admin);

  const port = PORT || 4000;

  app.listen(port, function () {
    console.log("Server listening on port " + port);
  });
}

main().catch(err => console.log(err));
