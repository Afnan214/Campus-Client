/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */

import { Link } from "react-router-dom";
import "./AllCampusesView.css"
const AllCampusesView = ({ campuses, deleteCampus }) => {
  // If there is no campus, display a message.
  if (!campuses.length) {
    return <div>There are no campuses.</div>;
  }

  // If there is at least one campus, render All Campuses view 
  return (
    <div>
      <h1>All Campuses</h1>
      <div className="AllCampusContainer">
        {campuses.map((campus) => (
          <div key={campus.id} className="CampusContainer">
            <Link to={`/campus/${campus.id}`}>
              <h2>{campus.name}</h2>
            </Link>
            <h4>campus id: {campus.id}</h4>
            <button onClick={() => deleteCampus(campus)}>delete</button>
            <Link to={`/campus/edit/${campus.id}`}>
              <button>edit</button>
            </Link>
            <hr />

          </div>
        ))}
      </div>
      <br />
      <Link to={`/newcampus`}>
        <button>Add New Campus</button>
      </Link>
      <br /><br />

    </div>
  );
};

// // Validate data type of the props passed to component.
// AllCampusesView.propTypes = {
//   allCampuses: PropTypes.array.isRequired,
// };

export default AllCampusesView;