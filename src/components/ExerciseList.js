import React, { useEffect, useState } from "react";
import axios from "axios";
import { Exercise } from "./Exercise";
export function ExerciseList(props) {
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

  const deleteExercise = (id) => {
    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then((response) => console.log(response.data));

    setState({
      exercises: state.exercises.filter((element) => element._id !== id),
    });
  };

  const exerciseList = () => {
    return state.exercises.map((currExercise) => {
      return (
        <Exercise
          exercises={currExercise}
          deleteExercise={deleteExercise}
          key={currExercise._id}
        />
      );
    });
  };

  return (
    <>
      <h2>Exercises</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{exerciseList()}</tbody>
      </table>
    </>
  );
}
