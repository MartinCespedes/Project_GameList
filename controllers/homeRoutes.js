const router = require("express").Router();
// const { User } = require("../models");

router.get("/", (req, res) => {
  res.render("homepage", {
    logged_in: req.session.logged_in,
  })
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login', { layout: 'main2' });
});

router.get('/signup', (req, res) => {
  res.render("signup", { layout: 'main2' })
})

router.get('/about', (req, res) => {
  res.render("about")
})
module.exports = router;

