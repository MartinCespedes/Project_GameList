const router = require("express").Router();
// const { User } = require("../models");

router.get("/", (req, res) => {
  res.render("homepage", {
    logged_in: req.session.logged_in,
  });
});

router.get("/login", (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login", { layout: "main2" });
});

router.get("/news", (req, res) => {
  res.render("news");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/topgames", (req, res) => {
  res.render("topgames");
});

router.get("/eldenring", (req, res) => {
  res.render("eldenring");
});

router.get("/hogwarts", (req, res) => {
  res.render("hogwarts");
});

module.exports = router;
