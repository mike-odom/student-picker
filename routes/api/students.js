const router = require("express").Router();
const db = require("../../models");

//   /api/students
router.get("/", (req, res) => {
  db.Students.findAll().then(students => {
    res.json(students);
  });
})

module.exports = router;
