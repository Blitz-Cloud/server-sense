const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("user/login");
});

router.get("/signup", (req, res) => {
  res.render("user/signup");
});

router.get("/account", (req, res) => {
  res.render("user/account");
});

router.get("/dash", (req, res) => {
  res.render("user/dash");
});

module.exports = router;
