import React from "react";
import { Link } from "react-router-dom";
export function Exercise(props) {
  return (
    <>
      <tr>
        <td>{props.exercises.username}</td>
        <td>{props.exercises.description}</td>
        <td>{props.exercises.duration}</td>
        <td>{props.exercises.date.substring(0, 10)}</td>
        <td>
          <Link to={"/edit" + props.exercises._id}></Link>
          <a
            href="/"
            onClick={() => {
              props.deleteExercise(props.exercises._id);
            }}
          >
            Delete
          </a>
        </td>
      </tr>
    </>
  );
}
