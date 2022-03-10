import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import { ExerciseList } from "./components/ExerciseList";
import { EditExercise } from "./components/EditExercise";
import { CreateExercise } from "./components/CreateExercise";
import { CreateUser } from "./components/CreateUser";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <div>
        <Navbar/>
      <Router>
      
        <Routes>
          <Route path="/" element={ExerciseList}/>
          <Route path="/edit/:id" element={EditExercise}/>
          <Route path="/create" element={CreateExercise}/>
          <Route path="/user" element={CreateUser}/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
