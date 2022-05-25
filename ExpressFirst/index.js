const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/tacos", (req, res) => {
  res.send("GET /tacos reponse")
});

app.post("/tacos", (req, res) => { 
  res.send("POST ")
})

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
