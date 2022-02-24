const express = require("express");
const mysql = require("mysql");

const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "medialab",
});

app.listen(3001, () => {
  console.log("Server running...");
});
