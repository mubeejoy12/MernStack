const express = require("express");
const {
  createWorkout,
  getWorkouts,
  singleWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controler/workoutcontroler");

const router = express.Router();

// Get all workout
router.get("/getAllWork", getWorkouts);

// Get single workout
router.get("/singleWork/:id", singleWorkout);

// Post a new workout
router.post("/createWork", createWorkout);

// delete workout
router.delete("/delete/:id", deleteWorkout);

// Upadate workout
router.patch("/update/:id", updateWorkout);

module.exports = router;
