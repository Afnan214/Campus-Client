/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './HomePageView.css'
const HomePageView = () => {
  // Render Home page view
  return (
    <div>
      <Link to={`/campuses`}>
        <Button variant="outlined" color="primary" style={{ maxWidth: '100px', maxHeight: '40px', minWidth: '80px', minHeight: '40px' }}>Campuses</Button>
      </Link>
      <br></br>
      <Link to={`/students`}>
        <Button variant="outlined" color="primary" style={{ maxWidth: '100px', maxHeight: '40px', minWidth: '80px', minHeight: '40px' }}>Students</Button>
      </Link>
    </div>

  );
}

export default HomePageView;