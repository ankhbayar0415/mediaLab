const express = require("express");
const app = express();

const mysql = require("mysql");

const bcrypt = require("bcryptjs");

const router = express.Router();
const cookieParser = require("cookie-parser");
const { createTokens, validateToken } = require("../JWT");

app.use(express.json());
app.use(cookieParser());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "medialab",
});

router.post("/register", (req, res) => {
  const { username, password, useremail, fullname } = req.body;

  bcrypt.hash(password, 10).then((hash) => {
    db.query(
      "INSERT INTO users (username, password, useremail, fullname) VALUES (? , ?, ?, ?)",
      [username, hash, useremail, fullname],
      (err) => {
        if (err) {
          err.sqlMessage = err.sqlMessage.split(" ").pop();
          if (err.sqlMessage === "'username'") {
            res.send({ message: "Username already exists." });
          } else {
            res.send({
              message: "There is an account associated with your email.",
            });
          }
        } else {
          res.send({ message: "Registarion succesfull" });
        }
      }
    );
  });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (err, rows) => {
      if (err) {
        res.send({ err: err });
      }
      if (rows.length && bcrypt.compareSync(password, rows[0].password)) {
        const accessToken = createTokens(rows[0]);
        res.cookie("access-token", accessToken, {
          maxAge: 86400000,
          httpOnly: true,
        });
        res.send({ message: "Logged In" });
      } else {
        res.send({ message: "Wrong username/password" });
      }
    }
  );
});

router.get("/mainpage", validateToken, (req, res) => {
  res.json("mainpage");
});

module.exports = router;