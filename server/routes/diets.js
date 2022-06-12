const router = require("express").Router();
const User = require("../models/user");
const Diet = require("../models/Diet");

//CREATE DIET
router.post("/", async (req, res) => {
  const newDiet = new Diet(req.body);
  try {
    const savedDiet = await newDiet.save();
    res.status(200).json(savedDiet);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE DIET
router.put("/:id", async (req, res) => {
  try {
    const diet = await Diet.findById(req.params.id);
    if (diet.fullname === req.body.firstName) {
      try {
        const updatedDiet = await Diet.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedDiet);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can only update your diet!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE DIET
router.delete("/:id", async (req, res) => {
  try {
    const diet = await Diet.findById(req.params.id);
    if (diet.fullname === req.body.firstName) {
      try {
        await diet.delete();
        res.status(200).json("Diet has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can only delete your diet!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET DIET
router.get("/:id", async (req, res) => {
  try {
    const diet = await Diet.findById(req.params.id);
    res.status(200).json(diet);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL DIETS
router.get("/", async (req, res) => {
  const fullname = req.query.user;
  const categoryName = req.query.cat;
  try {
    let posts;
    if (fullname) {
      posts = await Post.find({ fullname });
    } else if (categoryName) {
      posts = await Post.find({
        categories: {
          $in: [categoryName],
        },
      });
    } else {
      diets = await Diet.find();
    }
    res.status(200).json(diets);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;