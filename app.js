
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const api = mysql.createConnection ({
  host: "ecom.cbpba6q3mggr.us-east-1.rds.amazonaws.com", 
  user: "Mariah", 
  password: "MariahMarie14",
  database: "eCom"
})

api.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("connected to server");
  }
});

const handleQueryResult = (err, results, res) => {
  if (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
  if (results.length === 0) {
    return res.status(404).send("No results found");
  }
  res.status(200).send(results);
};
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/products", (req, res) => {
  const sql = "SELECT * FROM products";
  api.query(sql, (err, results) => {
    res.send(results);
  }) }); 
app.get("/products/lowTohigh", (req, res) => {
    const sql = "SELECT * FROM products order by price ASC";
    api.query(sql, (err, results) => {
      res.send(results);
    }) }); 
    app.get("/products/highTolow", (req, res) => {
      const sql = "SELECT * FROM products order by price DESC";
      api.query(sql, (err, results) => {
        res.send(results);
      }) }); 
app.get("/products", (req, res) => {
      const sql = "Select * FROM products Where category='Tops' order by price asc";
      api.query(sql, (err, results) => {
        res.send(results);
      }) }); 
app.get("/products", (req, res) => {
        const sql = "Select * FROM products Where category='Hat' order by price asc";
        api.query(sql, (err, results) => {
          res.send(results);
        }) });
app.use(express.static("assets"));
app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => {
  try {
    res.sendFile(path.join(__dirname,  "build", "index.html"));
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.listen(3000, () => {
  console.log("Server started on port 3000");
});














