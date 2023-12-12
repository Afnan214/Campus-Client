/*==================================================
StudentContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from './Header';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
// import { connect } from "react-redux";
import { fetchStudentThunk } from "../../store/thunks";
import { studentFetched } from '../../store/reducers/student';
import { StudentView } from "../views";



const StudentContainer = () => {
  const student = useSelector(state => state.student.student)
  const dispatch = useDispatch()
  const { id } = useParams()
  useEffect(() => {
    const getStudent = async () => {
      const res = fetchStudentThunk(id)
      console.log(res)
      return res
    }
    const res = getStudent()
    res.then((res) => {
      console.log(res)
      dispatch(studentFetched(res))
    })
  }, [])
  return (
    <>
      <Header />
      {/* {student ? <li>exists</li> : <p>empty</p>} */}
      <StudentView student={student} />
    </>

  )
}

export default StudentContainer


// class StudentContainer extends Component {
//   // Get student data from back-end database
//   componentDidMount() {
//     //getting student ID from url
//     this.props.fetchStudent(this.props.match.params.id);
//   }

//   // Render Student view by passing student data as props to the corresponding View component
//   render() {
//     return (
//       <div>
//         <Header />
//         <StudentView student={this.props.student} />
//       </div>
//     );
//   }
// }

// // The following 2 input arguments are passed to the "connect" function used by "StudentContainer" to connect to Redux Store.
// // The following 2 input arguments are passed to the "connect" function used by "AllCampusesContainer" component to connect to Redux Store.
// const mapState = (state) => {
//   return {
//     student: state.student,  // Get the State object from Reducer "student"
//   };
// };
// // 2. The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// // The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
// const mapDispatch = (dispatch) => {
//   return {
//     fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
//   };
// };

// // Export store-connected container by default
// // StudentContainer uses "connect" function to connect to Redux Store and to read values from the Store
// // (and re-read the values when the Store State updates).
// export default connect(mapState, mapDispatch)(StudentContainer);