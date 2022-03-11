import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ExerciseList } from "./components/ExerciseList";
import { EditExercise } from "./components/EditExercise";
import { CreateExercise } from "./components/CreateExercise";
import { CreateUser } from "./components/CreateUser";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<ExerciseList />} />
            <Route exact path="/edit/:id" element={<EditExercise />} />
            <Route exact path="/create" element={<CreateExercise />} />
            <Route exact path="/user" element={<CreateUser />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
