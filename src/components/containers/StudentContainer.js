/*==================================================
StudentContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from './Header';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
// import { connect } from "react-redux";
import { deleteStudentThunk, fetchStudentThunk } from "../../store/thunks";
import { studentFetched, } from '../../store/reducers/student';
import { StudentView } from "../views";
import { allStudentDeleted } from '../../store/reducers/students';



const StudentContainer = () => {
  const student = useSelector(state => state.student.student)
  const [loaded, setLoaded] = useState(false)
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    const getStudent = async () => {
      const res = await fetchStudentThunk(id)
      return res
    }
    const res = getStudent()
    res.then((res) => {
      dispatch(studentFetched(res))
      setLoaded(true)
    })
  }, [])
  const DeleteStudent = async () => {
    await deleteStudentThunk(student.id)
      .then(() => {
        dispatch(allStudentDeleted(student.id))
      })
      .catch((e) => console.log(e))
    navigate('/students')
  }
  return (
    <>
      <Header />
      {loaded ? <StudentView student={student} DeleteStudent={DeleteStudent} /> : <p>empty</p>}


    </>

  )
}

export default StudentContainer

