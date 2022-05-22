require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const Exercise = require("./models/Exercise");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

//Exercise
//Read
app.get("/", (req, res) => {
    Exercise.find((err, exercises) => {
      if (err) {
        console.log(err);
      } else {
        res.json(exercises);
      }
    });
  });
//Create
app.post("/create", (req, res) => {
    const exercise = new Exercise(req.body);
    exercise
      .save()
      .then((exercise) => {
        res.json(exercise);
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  });
//Get by ID
app.get("/:id", (req, res) => {
    const id = req.params.id;
    Exercise.findById(id, (err, exercise) => {
      res.json(exercise);
    });
  });
//Update
app.post("/:id", (req, res) => {
    const id = req.params.id;
    Exercise.findById(id, (err, exercise) => {
      if (!exercise) {
        res.status(404).send("Exercise not found");
      } else {
        exercise.text = req.body.text;
  
        exercise
          .save()
          .then((exercise) => {
            res.json(exercise);
          })
          .catch((err) => res.status(500).send(err.message));
      }
    });
  });
  //Delete
  app.delete("/:id", async (req, res) => {
    try {
        const exercise = await Exercise.findByIdAndDelete(req.params.id);
        res.send(exercise);
    } catch (error) {
        res.send(error);
    }
});
//tracker router
const trackersRouter = require('./routes/trackers');
app.use('/trackers', trackersRouter);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
