const express = require("express");
const app = express();
const path = require("path");
const Product = require("./models/product");
const mongoose = require("mongoose");

app.set("view engine", "ejs");

mongoose
  .connect("mongodb+srv://wi2liamalpha:123@cluster0.6dvmc9i.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!");
    console.log(err);
  });


app.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.render('products/index',{ products})
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
