require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");


// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/Video", require('./routes/video'));


//exercise router
const exercisesRouter = require('./routes/exercises');
app.use('/exercises', exercisesRouter);


//tracker router
const trackersRouter = require('./routes/trackers');
app.use('/trackers', trackersRouter);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
