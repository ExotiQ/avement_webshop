const express = require("express");
const app = express();
require('dotenv').config();

const { PORT, DATABASE_URL } = process.env;

const port = PORT || 4000;
const postgresURI = DATABASE_URL;

const Items = require("./routes/Items");
app.use("/api/items", Items);

const Auth = require("./routes/Auth");
app.use("/api/auth", Auth);

app.listen(port, function () {
  console.log("Server listening on port " + port);
});
