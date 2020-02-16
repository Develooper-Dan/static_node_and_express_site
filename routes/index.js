const express = require("express");
const router = express.Router();
const createError = require('http-errors')
const {projects} = require("../data.json");

router.get("/", (req, res) => {
  res.render("index", {projects} )
});

router.get("/about", (req, res) => {
  res.render("about")
});

router.get("/project/:id", (req, res, next) => {
  const project = projects.find(project => project.id === req.params.id);
  if (project===undefined){
    const err =  createError(418, "That's not what you are looking for...")
    next(err)
  } else{
  res.render("project", project)
  }
});

module.exports = router;
