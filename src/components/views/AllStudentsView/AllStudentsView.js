/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
import { Link } from "react-router-dom";
import './AllStudentsView.css'
import Button from '@mui/material/Button';
const AllStudentsView = ({ students, deleteStudent }) => {
  // const { students, deleteStudent } = props;
  // If there is no student, display a message
  if (!students.length) {
    return (
      <div>
        <p>There are no students.</p>
        <Link to={`/newstudent`}>
          <button>Add New Student</button>
        </Link>
      </div>
    );
  }

  // If there is at least one student, render All Students view 
  return (
    <div className="AllStudentsView">
      <h1>All Students</h1>
      <div className="AllStudentsContainer">
        {students.map((student) => {
          let name = student.firstname + " " + student.lastname;
          return (
            <div key={student.id} className="Student">
              <div className="StudentImageContainer">
                <img src={student.imageUrl} className="StudentImageContainer"></img>
              </div>
              <div className="StudentInfo">
                <Link to={`/student/${student.id}`} >
                  <h2 className="StudentName">{name}</h2>
                </Link>

              </div>
              <div className="StudentButtons">
                <Link to={`/student/edit/${student.id}`}>
                  <Button variant="outlined" color="primary" style={{ maxWidth: '80px', maxHeight: '40px', minWidth: '80px', minHeight: '40px' }}>Edit</Button>
                </Link>
                <Button onClick={() => deleteStudent(student.id)} variant="outlined" color="error" style={{ maxWidth: '80px', maxHeight: '40px', minWidth: '80px', minHeight: '40px' }}>Delete</Button>
              </div>

            </div>
          );
        }
        )}
      </div>
      <br />
      <Link to={`/newstudent`}>
        <Button variant="contained" color="success">Add New Student</Button>
      </Link>
      <br /><br />
    </div>
  );
};


export default AllStudentsView;