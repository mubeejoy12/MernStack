const workout = require("../models/workout");
const Workout = require("../models/workout");
const mongoose = require("mongoose");

// get all workout
const getWorkouts = async (req, res) => {
  const workout = await Workout.find().sort({ createdAt: -1 });
  res.status(200).json(workout);
};

// get single workout
const singleWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "no such Workout" });
    }
    const data = await Workout.findById(id);

    if (!workout) {
      return res.status(400).json({ error: "no such Workout" });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// create new workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  // add to db
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  res.json({ mssg: "POST a new workout" });
};

// delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "no such Workout" });
  }

  const workout = await Workout.findByIdAndDelete({ _id: id });

  if (!workout) {
    return res.status(400).json({ error: "no such Workout" });
  }

  res.status(200).json(workout);
};

// update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "no such Workout" });
  }

  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!workout) {
    return res.status(400).json({ error: "no such Workout" });
  }

  res.status(200).json(workout);
};




module.exports = {
  createWorkout,
  getWorkouts,
  singleWorkout,
  deleteWorkout,
  updateWorkout,
};
