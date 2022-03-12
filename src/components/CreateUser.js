import React, { useState } from "react";
import axios from "axios";
export function CreateUser() {
  const [state, setState] = useState({
    username: "",
  });

  const handleUsername = (e) => {
    setState({ username: e.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const user = {
      username: state.username,
    };
    setState({
      username: "",
    });
    console.log(user);

    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data));
  };

  return (
    <div>
      <h2>Create a new user!</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            className="form-control"
            value={state.username}
            onChange={handleUsername}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="create user"
            className=" btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
