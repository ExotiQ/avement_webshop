const express = require("express");
const app = express();
const db = require('./config/database');
const User = require('./models/user')

async function main() {
  const { PORT } = process.env;

  // Test DB Authentication
  db.authenticate().then(() => console.log("Connected to database..."))
  await db.sync()

  // await User.create({
  //   firstName: "Florian",
  //   lastName: "Gesell",
  //   email: "florian@gesell.com"
  // });

  // await User.create({
  //   firstName: "Luis",
  //   lastName: "Schweigard",
  //   email: "luis@schweigard.com"
  // });

  console.log(JSON.stringify(await User.findAll(), null, 2))

  const Items = require("./routes/Items");
  app.use("/api/items", Items);

  const Auth = require("./routes/Auth");
  app.use("/api/auth", Auth);

  const port = PORT || 4000;

  app.listen(port, function () {
    console.log("Server listening on port " + port);
  });
}

main().catch(err => console.log(err));
