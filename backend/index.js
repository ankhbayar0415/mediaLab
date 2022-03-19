//Express related dependencies
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const busboy = require("connect-busboy");
const morgan = require("morgan");

//Router modules
const router = require("./router/router");

//Database
const mysql = require("mysql2");

//General dependencies
const config = require("./config");
const port = process.env.PORT || config.port.development;
const corsOptions = {
  origin: true,
  credentials: true,
};

//Start express app
const app = express();

//Connect to database
const db = mysql.createPool({
  user: config.database.mysql.user,
  host: config.database.mysql.host,
  password: config.database.mysql.password,
  database: config.database.mysql.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

//Express configurations
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(busboy());
app.use(cors(corsOptions));

//Import router module
app.use("/", router);

//Start listening for requests
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
