/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from 'react-router-dom'
import './StudentView.css'
import { Button } from '@mui/material';
const StudentView = ({ student, DeleteStudent }) => {
  // Render a single Student view 
  return (
    <div>
      <h1 className='StudentViewName'>{student.firstname + " " + student.lastname}</h1>
      <img src={student.imageUrl} className='StudentViewImage'></img>
      {student.campus ?

        <Link
          to={`/campus/${student.campus.id}`}
        ><h3 className='StudentViewCampus'>{student.campus.name}</h3></Link>

        :
        <p>This Student is not currently enrolled in a campus</p>}

      <p className='StudentViewEmail'>Email: {student.email}</p>
      <p className='GPA'>GPA: {student.GPA}</p>
      <Button variant='outlined' color='error' onClick={DeleteStudent}>Delete</Button>

    </div>
  );

};

export default StudentView;