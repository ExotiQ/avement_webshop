const express = require("express");
const app = express();
require('dotenv').config();

const port = process.env.PORT || 4000;
const postgresURI = process.env.DATABASE_URL;

const Items = require("./routes/Items");
app.use("/api/items", Items);

const Auth = require("./routes/Auth");
app.use("/api/auth", Auth);

app.listen(port, function () {
  console.log("Server listening on port " + port);
});
