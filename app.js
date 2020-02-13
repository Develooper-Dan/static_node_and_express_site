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
  // res.locals.status = res.status(err.status || 500);
  // if (err.status >= 500){
  //   res.locals.message = "There seems to be a problem with the server. Please try again later";
  // }
  res.render("error", {err});
})

app.listen(3000);
