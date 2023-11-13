import React from "react";
import Navbar from "../components/Navbar";

import { useEffect, useState } from "react";
// import workout from "../../../backend/models/workout";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fecthWorkOut = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "http://localhost:4000/workout/getAllWork"
        );
        const json = await response.json();
        console.log(json);
        if (response?.ok) {
          setWorkouts(json);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fecthWorkOut();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <p>Home</p>
      <div className="workout">
        {loading && <span>Loaing...</span>}
        {workouts &&
          workouts.map((workout) => {
            return (
              <>
                <p key={workout._id}> {workout.title}</p>
                <p key={workout._id}> {workout.reps}</p>
                <p key={workout._id}> {workout.load}</p>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
