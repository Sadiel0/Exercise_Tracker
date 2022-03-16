import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export function ExerciseList() {
  const [state, setState] = useState({
    exercises: [],
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises/")
      .then((response) => {
        setState({ exercises: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const deleExercise = (id) => {
    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then((response) => console.log(response.data));

    setState({
      exercises: state.exercises.filter((element) => element._id !== id),
    });
  };
  return <div>exercise-list</div>;
}
