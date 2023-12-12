import "./App.css";

//Router
import { Routes, Route } from "react-router-dom";
//Components
import {
  HomePageContainer,
  CampusContainer,
  StudentContainer,
  AllCampusesContainer,
  AllStudentsContainer,
  NewStudentContainer,
  NewCampusContainer
} from './components/containers';

// if you create separate components for adding/editing 
// a student or campus, make sure you add routes to those
// components here

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePageContainer />} />
        <Route exact path="/campuses" element={<AllCampusesContainer />} />
        <Route exact path="/newcampus" element={<NewCampusContainer />} />
        <Route exact path="/campus/:id" element={<CampusContainer />} />
        <Route exact path="/students" element={<AllStudentsContainer />} />
        <Route exact path="/newstudent" element={<NewStudentContainer />} />
        <Route exact path="/student/:id" element={<StudentContainer />} />
      </Routes>
    </div>
  );
}

export default App;
