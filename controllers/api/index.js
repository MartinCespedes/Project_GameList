const router = require("express").Router();
const userRoutes = require("./userRoutes");
const path = require("path");

router.use("/users", userRoutes);

// This is the 'get' route
router.get("/", async (req, res) => {
  // Here, index.html is rendered
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

module.exports = router;
