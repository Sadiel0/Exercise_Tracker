import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
export function CreateExercise(props) {
  const [state, setState] = useState({
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
    users: [],
  });

  useEffect(() => {
    setState({
      users: ["Test user"],
      username: "Testing user",
    });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    const exercise = {
      username: state.username,
      description: state.description,
      duration: state.duration,
      date: state.date,
    };
    console.log(exercise);
    axios
      .post("http://localhost:5000/exercise/add", exercise)
      .then((res) => console.log(res.data));
  };
  const handleUsername = (e) => {
    setState({ username: e.target.value });
  };
  const handleDescription = (e) => {
    setState({ description: e.target.value });
  };

  const handleDuration = (e) => {
    setState({ duration: e.target.value });
  };
  const handleDate = (date) => {
    setState({ date: date });
  };
  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            // required
            className="form-control"
            value={state.username}
            onChange={handleUsername}
          >
            {state.users &&
              state.users.map((user, index) => {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={state.description}
            onChange={handleDescription}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            className="form-control"
            value={state.duration}
            onChange={handleDuration}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker selected={state.date} onChange={handleDate} />
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
