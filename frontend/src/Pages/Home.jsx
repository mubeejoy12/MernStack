import React from "react";
import Navbar from "../components/Navbar";

import { useEffect, useState } from "react";
// import workout from "../../../backend/models/workout";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  useEffect(() => {
    const fecthWorkOut = async () => {


        try {
            const response = await fetch("http://localhost:4000/workout/getAllWork");
      const json = await response.json();
      console.log(json);
      if (response?.ok) {
        setWorkouts(json);
      }
            
        } catch (error) {
            console.log(error);
            
        }
      
     
    };

    fecthWorkOut()
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <p>Home</p>
      <div className="workout">
        {workouts &&
          workouts.map((workout) => {
            return (
                <>
                <p key={workout._id}> {workout.title}</p>;
                </>
            ) 
          })}
      </div>
    </div>
  );
};

export default Home;
