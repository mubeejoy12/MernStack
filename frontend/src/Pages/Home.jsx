import React from "react";
import Navbar from "../components/Navbar";
import WorkoutDetails from "../components/WorkoutDetails";
import { useEffect } from "react";
import WorkoutForm from "../components/workoutForm";
import { useWorkoutContext } from "../hooks/useWorkoutsContext";
import { useState } from "react";


const Home = () => {

  const [loading, setLoading] = useState(false);
  const {workouts, dispatch}= useWorkoutContext()

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
          dispatch({type: 'SET_WORKOUTS', payload: json})
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
