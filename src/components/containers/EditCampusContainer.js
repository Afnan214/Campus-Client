import { useEffect, useState } from 'react'
import Header from './Header'
import EditCampusView from '../views/EditCampusView'
import { editCampusThunk, fetchCampusThunk } from '../../store/thunks'
import { campusEdited } from '../../store/reducers/campuses'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
const EditCampusContainer = () => {
    const [campus, setCampus] = useState({

    })
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

        const getCampus = async () => {
            const res = fetchCampusThunk(id)
            return res
        }
        const res = getCampus()
        res.then((res) => {

            setState({
                loaded: true,
                redirect: false,
                redirectId: null
            })
            setCampus(res)
        })

    }, [])
    useEffect(() => {
        if (state.redirect) {
            return navigate(`/campus/${state.redirectId}`);
            // return (<Redirect to={`/student/${this.state.redirectId}`} />)
        }
    }, [state.redirect])
    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        setCampus((oldState) => {
            return {
                ...oldState,
                [field]: value
            }
        })

    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        // Add new student in back - end database
        console.log(campus)
        let newCampus = await editCampusThunk(campus);

        dispatch(campusEdited(newCampus))
        // Update state, and trigger redirect to show the new student
        setState({
            firstname: "",
            lastname: "",
            campusId: null,
            loaded: false,
            redirect: true,
            redirectId: newCampus.id
        });

    }

    return (
        <>
            <Header />

            {state.loaded ? <EditCampusView handleChange={handleChange} handleSubmit={handleSubmit} campusinfo={campus} /> : <p>loading</p>}

        </>

    )
}

export default EditCampusContainer