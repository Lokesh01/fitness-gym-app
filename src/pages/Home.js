import React, { useState } from "react";
import { Box } from "@mui/system";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  const [exercises, setexercises] = useState([]);
  const [bodyPart, setBodyPart] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setexercises={setexercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setexercises={setexercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
