import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
export function CreateExercise(props) {
  // const [state, setState] = useState({
  //   username: "",
  //   description: "",
  //   duration: 0,
  //   date: new Date(),
  //   users: [],
  // });

  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/users/").then((response) => {
      if (response.data.length > 0) {
        setUsers(
          response.data.map((user) => user.username)
          // username: response.data.username,
        );
      }
    });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    const exercise = {
      username: username,
      description: description,
      duration: duration,
      date: date,
    };
    console.log(exercise);
    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then((res) => console.log(res.data));
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleDuration = (e) => {
    setDuration(e.target.value);
  };
  const handleDate = (date) => {
    setDate(date);
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
            value={username}
            onChange={handleUsername}
          >
            {users &&
              users.map((user, index) => {
                return (
                  <option key={index} value={user}>
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
            value={description}
            onChange={handleDescription}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            className="form-control"
            value={duration}
            onChange={handleDuration}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker selected={date} onChange={handleDate} />
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
