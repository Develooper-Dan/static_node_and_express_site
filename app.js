const express = require("express");
const app = express();
const createError = require('http-errors')
const indexRoute = require("./routes/index")

app.set("view engine", "pug");

app.use("/static", express.static("public"));
app.use(indexRoute);

app.use(function (req, res, next) {
  const err =  createError(404, "Sorry, the site you requested wasn't found!")
  next(err)
})

app.use(function (err, req, res, next) {
  res.render("error", {err});
})

app.listen(3000);
