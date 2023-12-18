import { useEffect, useState } from 'react'
import Header from './Header'
import EditStudentView from '../views/EditStudentView'
import { editStudentThunk, fetchStudentThunk } from '../../store/thunks'
import { allStudentEdited } from '../../store/reducers/students'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
const EditStudentContainer = () => {
    const [student, setStudent] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()

    const [state, setState] = useState(
        {
            loaded: false,
            redirect: false,
            redirectId: null
        }
    )
    useEffect(() => {

        const getStudent = async () => {
            const res = fetchStudentThunk(id)
            return res
        }
        const res = getStudent()
        res.then((res) => {
            console.log(res)
            setState({
                loaded: true,
                redirect: false,
                redirectId: null
            })
            setStudent(res)
        })

    }, [])
    useEffect(() => {
        if (state.redirect) {
            return navigate(`/Student/${state.redirectId}`);
            // return (<Redirect to={`/student/${this.state.redirectId}`} />)
        }
    }, [state.redirect])
    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        setStudent((oldState) => {
            return {
                ...oldState,
                [field]: value
            }
        })

    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        // Add new student in back - end database

        let newStudent = await editStudentThunk(student);

        dispatch(allStudentEdited(newStudent))
        // Update state, and trigger redirect to show the new student
        setState({
            firstname: "",
            lastname: "",
            StudentId: null,
            loaded: false,
            redirect: true,
            redirectId: newStudent.id
        });

    }

    return (
        <>
            <Header />

            {state.loaded ? <EditStudentView handleChange={handleChange} handleSubmit={handleSubmit} studentinfo={student} /> : <p>loading</p>}

        </>

    )
}

export default EditStudentContainer