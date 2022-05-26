const mongoose = require("mongoose");
const Product = require("./models/product");

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

const p = new Product({
  name: "Watermelon",
  price: 1.99,
  category: "fruit",
});
p.save()
  .then((p) => {
    console.log(p);
  })
  .catch((e) => {
    console.log(e);
  });
const seeds = [
  {
    name: "Watermelon",
    price: 1.99,
    category: "vegetable",
  },
  {
    name: "Lemon",
    price: 4.99,
    category: "fruit",
  },
  {
    name: "Banana",
    price: 21.99,
    category: "fruit",
  },
  {
    name: "Apple",
    price: 10.99,
    category: "fruit",
  },
];
Product.insertMany(seeds)
.then(res=> console.log(res))
.catch(e=> console.log(e))
