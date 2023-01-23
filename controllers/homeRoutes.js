const router = require("express").Router();
// const { User } = require("../models");

router.get("/", (req, res) => {
  res.render("homepage")
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login', { layout: 'main2' });
});


module.exports = router;
