const router = require("express").Router();
const DietCategory = require("../models/DietCategory");

router.post("/", async (req, res) => {
  const newCategory = new DietCategory(req.body);
  try {
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
    try {
      const dietcategories = await DietCategory.find();
      res.status(200).json(dietcategories);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;