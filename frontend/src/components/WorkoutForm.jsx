import React, { useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState("");

  const handlesSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };
    const response = await fetch("http://localhost:4000/workout/createWork", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.okay) {
      setError(json.error);
    }
    if (response) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      console.log("new workout created successfully");
    }
  };

  return (
    <div>
      <form className="create" onSubmit={handlesSubmit}>
        <h3>Add a new workout</h3>
        <label> Exercise Title: </label>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
        ></input>

        <label> Load (in Kg): </label>
        <input
          value={load}
          onChange={(e) => {
            setLoad(e.target.value);
          }}
          type="number"
        ></input>

        <label> Reps: </label>
        <input
          value={reps}
          onChange={(e) => {
            setReps(e.target.value);
          }}
          type="number"
        ></input>

        <button>create workout</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default WorkoutForm;
