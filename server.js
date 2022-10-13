const express = require("express");
const say = require("say");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
//View engine
app.set("view engine", "ejs");
//body-parser use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//Routes
app.get("/", (req, res) => {
  res.render("index");
});
app.post("/send", (req, res) => {
  var value = req.body.value;
  console.log(value);
  res.send(value);
  say.speak(value);
});
//Connection setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
