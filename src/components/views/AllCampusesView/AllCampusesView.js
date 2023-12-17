/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */

import { Link } from "react-router-dom";
import "./AllCampusesView.css"
import Button from '@mui/material/Button';
const AllCampusesView = ({ campuses, deleteCampus }) => {
  // If there is no campus, display a message.
  if (!campuses.length) {
    return <div>There are no campuses.</div>;
  }

  // If there is at least one campus, render All Campuses view 
  return (
    <div className="AllCampusView">
      <h1>All Campuses</h1>
      <div className="AllCampusContainer">
        {campuses.map((campus) => {
          return (
            <div key={campus.id} className="CampusContainer">
              <div className="CampusImage">
                <img src={campus.imageUrl} className="CampusImage"></img>
              </div>
              <div className="CampusInfo">
                <Link to={`/campus/${campus.id}`}>
                  <h2>{campus.name}</h2>
                </Link>
                <h4>campus id: {campus.id}</h4>
              </div>
              <div className="CampusButtons">
                <Link to={`/campus/edit/${campus.id}`}>
                  <Button variant="outlined" color="primary" style={{ maxWidth: '80px', maxHeight: '40px', minWidth: '80px', minHeight: '40px' }} >edit</Button>
                </Link>
                <Button variant="outlined" color="error" onClick={() => deleteCampus(campus)} style={{ maxWidth: '80px', maxHeight: '40px', minWidth: '80px', minHeight: '40px' }}>delete</Button>
              </div>
            </div>
          )
        })}
      </div>

      <Link to={`/newcampus`}>
        <Button variant="contained" color="success">Add New Campus</Button>
      </Link>


    </div>
  );
};

// // Validate data type of the props passed to component.
// AllCampusesView.propTypes = {
//   allCampuses: PropTypes.array.isRequired,
// };

export default AllCampusesView;