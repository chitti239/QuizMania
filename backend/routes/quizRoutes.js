const express = require("express");
const router = express.Router();
const questions = require("../data/questions");

// @route   GET /api/quiz/:category
// @desc    Fetch questions by category
router.get("/:category", (req, res) => {
  const category = req.params.category.toLowerCase();

  if (!questions[category]) {
    return res.status(404).json({ message: "Category not found" });
  }

  res.json(questions[category]);
});

module.exports = router;
