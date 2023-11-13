require("dotenv").config();
const express = require("express");
const cors = require('cors');
const workoutRoutes = require("./routes/workout");
const { default: mongoose } = require("mongoose");
// express app
const app = express();

// Use cors middleware
app.use(cors());

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// router
app.use("/workout/", workoutRoutes);

// connect db
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    // listen for request
app.listen(process.env.PORT, () => {
    console.log("listening to db & listening on port http://localhost:", process.env.PORT);
  });
  
})
.catch((error) => {
    console.log(error);
})

