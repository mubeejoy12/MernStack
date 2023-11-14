import React from "react";
import Navbar from "../components/Navbar";
import WorkoutDetails from "../components/WorkoutDetails";
import { useEffect, useState } from "react";
import WorkoutForm from "../components/WorkoutForm";

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
    <div className="Home">
      <Navbar></Navbar>
      <div className="workouts">
        {loading && <span>Loaing...</span>}
        {workouts &&
          workouts.map((workout) => {
            return (
              <>
                <WorkoutDetails key={workout._id} workout={workout} />
              </>
            );
          })}
      </div>

      <WorkoutForm />
    </div>
  );
};

export default Home;
