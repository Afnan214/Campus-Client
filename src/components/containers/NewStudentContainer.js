/*==================================================
NewStudentContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from './Header';
// import { Component } from 'react';
// import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { allStudentAdded } from '../../store/reducers/students';
import NewStudentView from '../views/NewStudentView';
import { addStudentThunk } from '../../store/thunks';



import { useEffect, useState } from 'react'

const NewStudentContainer = () => {
  const dispatch = useDispatch()
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    campusId: null,
    redirect: false,
    redirectId: null
  })
  const navigate = useNavigate();
  useEffect(() => {

  }, [])
  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setState((oldData) => {
      return {
        ...oldData,
        [fieldName]: fieldValue
      }
    })
  }
  const handleSubmit = async event => {
    event.preventDefault();  // Prevent browser reload/refresh after submit.


    let student = {
      firstname: state.firstname,
      lastname: state.lastname,
      campusId: state.campusId
    };

    // Add new student in back - end database
    let res = await addStudentThunk(student);
    console.log(res)
    const newStudent = res
    dispatch(allStudentAdded(res))
    // Update state, and trigger redirect to show the new student
    setState({
      firstname: "",
      lastname: "",
      campusId: null,
      redirect: true,
      redirectId: newStudent.id
    });
  };
  // Redirect to new student's page after submit
  if (state.redirect) {
    return navigate(`/student/${state.redirectId}`);
    // return (<Redirect to={`/student/${this.state.redirectId}`} />)
  }

  // Display the input form via the corresponding View component
  return (
    <div>
      <Header />
      <NewStudentView
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default NewStudentContainer

// class NewStudentContainer extends Component {
//   // Initialize state
//   constructor(props) {
//     super(props);
//     this.state = {
//       firstname: "",
//       lastname: "",
//       campusId: null,
//       redirect: false,
//       redirectId: null
//     };
//   }

//   // Capture input data when it is entered
//   handleChange = event => {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   }

//   // Take action after user click the submit button
//   handleSubmit = async event => {
//     event.preventDefault();  // Prevent browser reload/refresh after submit.

//     let student = {
//       firstname: this.state.firstname,
//       lastname: this.state.lastname,
//       campusId: this.state.campusId
//     };

//     // Add new student in back-end database
//     let newStudent = await this.props.addStudent(student);

//     // Update state, and trigger redirect to show the new student
//     this.setState({
//       firstname: "",
//       lastname: "",
//       campusId: null,
//       redirect: true,
//       redirectId: newStudent.id
//     });
//   }

//   // Unmount when the component is being removed from the DOM:
//   componentWillUnmount() {
//     this.setState({ redirect: false, redirectId: null });
//   }

//   // Render new student input form
//   render() {
//     // Redirect to new student's page after submit
//     if (this.state.redirect) {
//       return (<Redirect to={`/student/${this.state.redirectId}`} />)
//     }

//     // Display the input form via the corresponding View component
//     return (
//       <div>
//         <Header />
//         <NewStudentView
//           handleChange={this.handleChange}
//           handleSubmit={this.handleSubmit}
//         />
//       </div>
//     );
//   }
// }

// // The following input argument is passed to the "connect" function used by "NewStudentContainer" component to connect to Redux Store.
// // The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// // The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
// const mapDispatch = (dispatch) => {
//   return ({
//     addStudent: (student) => dispatch(addStudentThunk(student)),
//   })
// }

// // Export store-connected container by default
// // NewStudentContainer uses "connect" function to connect to Redux Store and to read values from the Store
// // (and re-read the values when the Store State updates).
// export default connect(null, mapDispatch)(NewStudentContainer);