var express = require("express");
var router = express.Router();

/* GET project page. */
router.get("/", function (req, res, next) {
  res.render("Projects/projects", { title: "Projects" });
});

module.exports = router;
