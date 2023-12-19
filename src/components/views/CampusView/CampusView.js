/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";
import './CampusView.css'
import { Button } from "@mui/material";
// Take in props data to construct the component
const CampusView = ({ campus, deleteCampus }) => {


  // Render a single Campus view with list of its students
  return (
    <div className="CampusViewInfo">
      <p className="CampusName">{campus.name}</p>
      <img src={campus.imageUrl} className="CampusViewImage"></img>
      <p>Address: </p>
      <p className="CampusAddress">{campus.address}</p>
      <p>Description: </p>
      <p className="CampusDescription">{campus.description}</p>
      <Button onClick={deleteCampus} variant="outlined" color="error">Delete</Button>
      <p className="StudentList">List of Students</p>
      {campus.students.map(student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              <p>{name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CampusView;