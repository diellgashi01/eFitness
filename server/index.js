require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const dietRoutes = require("./routes/diets");
const dietCategoriesRoutes = require("./routes/dietCategories");
const multer = require("multer");


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
app.use("/api/diets", dietRoutes);
app.use("/api/dietCategories", dietCategoriesRoutes);


//exercise router
const exercisesRouter = require('./routes/exercises');
app.use('/exercises', exercisesRouter);


//tracker router
const trackersRouter = require('./routes/trackers');
app.use('/trackers', trackersRouter);

//diet image uploader
const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null, "dietUploads") //change to req body name
    },filename:(req,file,cb)=>{
        cb(null,"jpeg-home.jpg")
    }
});

const dietUploads = multer({storage:storage});
app.post("/api/dietUploads/", dietUploads.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded");
});

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
